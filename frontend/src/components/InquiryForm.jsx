import React, { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";

// Fire-and-forget submit to a Google Form's formResponse endpoint. Google does not
// send CORS headers, so we use `no-cors`: the POST goes through but the response is
// opaque (we can't read success/failure), hence the client-side required-field guard.
const submitToGoogleForm = async ({ formId, fields }, form) => {
  const body = new FormData();
  Object.entries(fields).forEach(([key, entry]) => {
    const value = form[key];
    if (entry && value) body.append(entry, value);
  });
  await fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse`, {
    method: "POST",
    mode: "no-cors",
    body,
  });
};

export const InquiryForm = ({ title, subtitle, showExtras = false, testidPrefix = "inquiry", googleForm = null }) => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    product_interest: "",
    message: "",
    quantity_required: "",
    business_type: "",
    packaging_preference: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // Which fields are mandatory. Driven by the target Google Form's `required` list
  // (a no-cors submit can't surface Google's rejection), else a sensible default.
  const FIELD_LABELS = { name: "name", phone: "phone", email: "email", product_interest: "product interest" };
  const requiredFields = googleForm?.required || ["name", "phone", "email"];
  const isRequired = (k) => requiredFields.includes(k);

  const onSubmit = async (e) => {
    e.preventDefault();
    const missing = requiredFields.filter((k) => !form[k]);
    if (missing.length) {
      toast.error(`Please fill ${missing.map((k) => FIELD_LABELS[k] || k).join(", ")}.`);
      return;
    }
    if (!googleForm) {
      toast.error("This form isn't configured. Please call or email us instead.");
      return;
    }
    setSubmitting(true);
    try {
      await submitToGoogleForm(googleForm, form);
      toast.success("Thanks! Our team will reach out within 24 hours.");
      setSubmitted(true);
      setForm({
        name: "",
        company: "",
        phone: "",
        email: "",
        product_interest: "",
        message: "",
        quantity_required: "",
        business_type: "",
        packaging_preference: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Unable to submit. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="card-elevated p-10 text-center" data-testid={`${testidPrefix}-success`}>
        <div className="inline-flex h-14 w-14 rounded-full bg-[#1B5E20] text-[#D4AF37] items-center justify-center mb-4">
          <Send className="h-6 w-6" />
        </div>
        <h3 className="font-display text-2xl font-bold text-[#1B5E20]">Inquiry received</h3>
        <p className="text-[#4A5D4E] mt-2">Our wholesale team will be in touch shortly.</p>
        <button onClick={() => setSubmitted(false)} className="btn-outline mt-6" data-testid={`${testidPrefix}-new-btn`}>
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card-elevated p-6 md:p-10 space-y-5" data-testid={`${testidPrefix}-form`}>
      {title && (
        <div className="mb-2">
          <div className="overline">Get in touch</div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-[#1B5E20] mt-2">{title}</h3>
          {subtitle && <p className="text-[#4A5D4E] mt-2 text-sm">{subtitle}</p>}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="app-label">Full name *</label>
          <input className="app-input" value={form.name} onChange={update("name")} data-testid={`${testidPrefix}-name-input`} placeholder="John Sharma" required />
        </div>
        <div>
          <label className="app-label">Company name</label>
          <input className="app-input" value={form.company} onChange={update("company")} data-testid={`${testidPrefix}-company-input`} placeholder="ABC Traders" />
        </div>
        <div>
          <label className="app-label">Phone *</label>
          <input className="app-input" value={form.phone} onChange={update("phone")} data-testid={`${testidPrefix}-phone-input`} placeholder="+91 98XXXXXXXX" required />
        </div>
        <div>
          <label className="app-label">Email *</label>
          <input type="email" className="app-input" value={form.email} onChange={update("email")} data-testid={`${testidPrefix}-email-input`} placeholder="you@company.com" required />
        </div>

        <div className="sm:col-span-2">
          <label className="app-label">Product interest{isRequired("product_interest") ? " *" : ""}</label>
          <input className="app-input" value={form.product_interest} onChange={update("product_interest")} data-testid={`${testidPrefix}-product-input`} placeholder="e.g. Chana Dal, Toor Dal" required={isRequired("product_interest")} />
        </div>

        {showExtras && (
          <>
            <div>
              <label className="app-label">Quantity required</label>
              <input className="app-input" value={form.quantity_required} onChange={update("quantity_required")} data-testid={`${testidPrefix}-quantity-input`} placeholder="e.g. 5 MT / month" />
            </div>
            <div>
              <label className="app-label">Business type</label>
              <select className="app-input" value={form.business_type} onChange={update("business_type")} data-testid={`${testidPrefix}-business-type-input`}>
                <option value="">Select…</option>
                <option>Trader</option>
                <option>Distributor</option>
                <option>HoReCa</option>
                <option>Institutional Buyer</option>
                <option>Retailer</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="app-label">Packaging preference</label>
              <input className="app-input" value={form.packaging_preference} onChange={update("packaging_preference")} data-testid={`${testidPrefix}-packaging-input`} placeholder="e.g. 30 kg PP woven sacks / 1 kg laminate pouches" />
            </div>
          </>
        )}

        <div className="sm:col-span-2">
          <label className="app-label">Message</label>
          <textarea rows={4} className="app-input" value={form.message} onChange={update("message")} data-testid={`${testidPrefix}-message-input`} placeholder="Tell us about your requirement…" />
        </div>
      </div>

      <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto" data-testid={`${testidPrefix}-submit-btn`}>
        {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {submitting ? "Sending…" : "Submit Inquiry"}
      </button>
    </form>
  );
};

export default InquiryForm;
