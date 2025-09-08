"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { useForm } from "@formspree/react";
import { FaCheck } from "react-icons/fa6";
import NextLink from "../NextLink";
import { useParams } from "next/navigation";
const Popup = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const params = useParams();
  const locale = params.locale;
  const [state, handleSubmit] = useForm("xqabobdr");
  const [form, setForm] = useState({
    company: "",
    location: "",
    industry: "",
    contactName: "",
    contactRole: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [pop, setPop] = useState(open);

  // Add this useEffect to sync the internal state with the prop
  useEffect(() => {
    setPop(open);
  }, [pop]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-lg">
        {state.succeeded ? (
          <div className="bg-white p-6 flex justify-center items-center gap-3">
            <h3 className="font-ogg text-xl sm:text-3xl font-normal">
              {locale === "de"
                ? "Das Formular wurde erfolgreich versendet."
                : "The form was sent successfully."}
            </h3>
            <div className="sm:w-12 sm:h-12 w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white">
              <FaCheck size={20} />
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 flex flex-col gap-3 relative"
          >
            {/* Close Button */}
            <DialogClose asChild>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="absolute right-4 top-4 text-black hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </DialogClose>
            <h2 className="font-ogg text-[32px] font-normal mb-2">
              {locale === "de" ? "Werde 101 Partner" : "BECOME A 101 PARTNER"}
            </h2>
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-semibold">
                {locale === "de" ? "Name Firma" : "Company Name"}
              </label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                required
                className="border-2 border-black h-12 px-2 text-lg outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-semibold">
                {locale === "de"
                  ? "Firmenhauptsitz and Standort"
                  : "Company Headquarters and Location"}
              </label>
              <input
                name="location"
                value={form.location}
                required
                onChange={handleChange}
                className="border-2 border-black h-12 px-2 text-lg outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-semibold">
                {locale === "de" ? "Industrie" : "Industry"}
              </label>
              <input
                name="industry"
                value={form.industry}
                required
                onChange={handleChange}
                className="border-2 border-black h-12 px-2 text-lg outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-semibold">
                {locale === "de" ? "Name Kontaktperson" : "Contact Person Name"}
              </label>
              <input
                name="contactName"
                value={form.contactName}
                required
                onChange={handleChange}
                className="border-2 border-black h-12 px-2 text-lg outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-semibold">
                {locale === "de"
                  ? "Rolle der Kontaktperson"
                  : "Contact Person Role"}
              </label>
              <input
                name="contactRole"
                value={form.contactRole}
                required
                onChange={handleChange}
                className="border-2 border-black h-12 px-2 text-lg outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-semibold">
                {locale === "de" ? "E-Mail Adresse" : "Email Address"}
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                required
                onChange={handleChange}
                className="border-2 border-black h-12 px-2 text-lg outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-semibold">
                {locale === "de" ? "Telefonnummer" : "Phone Number"}
              </label>
              <input
                name="phone"
                value={form.phone}
                required
                onChange={handleChange}
                className="border-2 border-black h-12 px-2 text-lg outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-semibold">
                {locale === "de" ? "Ihre Nachricht" : "Your Message"}
              </label>
              <textarea
                name="message"
                value={form.message}
                required
                onChange={handleChange}
                className="border-2 border-black h-[180px] p-2 text-lg outline-none resize-none"
                maxLength={500}
              />
              <div className="text-right text-[12px] text-gray-400">
                {locale === "de" ? "max. 500 Zeichen" : "max. 500 characters"}
              </div>
            </div>
            <div className="flex items-start gap-2 mt-2">
              <label className="flex items-start cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  checked={form.consent}
                  onChange={handleChange}
                  className="w-4 h-4 border-2 border-black mt-1 mr-2"
                />
                {locale === "de" ? (
                  <span className="text-[16px] leading-5 text-gray-700">
                    Ich bin mit der Verarbeitung meiner Daten im Rahmen des
                    Kontaktformulars einverstanden. Es gilt die
                    Datenschutzerklärung{" "}
                    <NextLink
                      target="_blank"
                      className="underline"
                      href="https://die-101-besten.de/datenschutz"
                    >
                      (https://die-101-besten.de/datenschutz).
                    </NextLink>
                  </span>
                ) : (
                  <span className="text-[16px] leading-5 text-gray-700">
                    I agree to the processing of my data in the contact form.
                    This applies Privacy Policy
                    <NextLink
                      target="_blank"
                      className="underline"
                      href="https://die-101-besten.de/datenschutz"
                    >
                      (https://die-101-besten.de/datenschutz).
                    </NextLink>
                  </span>
                )}
              </label>
            </div>
            <div className="flex justify-between gap-2 mt-4">
              <Button
                type="button"
                variant="outline"
                className="w-1/3 rounded-none uppercase font-bold font-montserrat border-black"
                onClick={() => onOpenChange(false)}
              >
                {locale === "de" ? "ABBRECHEN" : "CANCEL"}
              </Button>
              <Button
                type="submit"
                className="w-2/3 rounded-none uppercase font-bold font-montserrat"
              >
                {locale === "de" ? "ABSENDEN" : "SUBMIT"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
