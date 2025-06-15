"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../ui/select";
import { X } from "lucide-react";

const industries = [
  "Hotellerie",
  "Gastronomie",
  "Tourismus",
  "Dienstleistung",
  "Andere",
];

const Popup = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
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
  const [error, setError] = useState("");
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

  const handleIndustryChange = (value: string) => {
    setForm((prev) => ({ ...prev, industry: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (
      !form.company ||
      !form.location ||
      !form.industry ||
      !form.contactName ||
      !form.contactRole ||
      !form.email ||
      !form.phone ||
      !form.consent
    ) {
      setError(
        "Bitte füllen Sie alle Pflichtfelder aus und akzeptieren Sie die Bedingungen."
      );
      return;
    }
    setError("");
    // Submit logic here
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-lg">
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
          <h2 className="font-ogg text-lg font-normal mb-2">
            Werde 101 Partner
          </h2>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium">Name Firma</label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              className="border border-black h-9 px-2 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium">
              Firmenhauptsitz and Standort
            </label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              className="border border-black h-9 px-2 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium">Industrie</label>
            <input
              name="location"
              value={form.industry}
              onChange={handleChange}
              className="border border-black h-9 px-2 text-sm"
            />
          </div>
          {/* <div className="flex flex-col gap-2">
            <label className="text-xs font-medium">Industry</label>
            <Select value={form.industry} onValueChange={handleIndustryChange}>
              <SelectTrigger className="h-9 px-2 text-sm border border-black">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((ind) => (
                  <SelectItem key={ind} value={ind}>
                    {ind}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium">Name Kontaktperson</label>
            <input
              name="contactName"
              value={form.contactName}
              onChange={handleChange}
              className="border border-black h-9 px-2 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium">
              Rolle der Kontaktperson
            </label>
            <input
              name="contactRole"
              value={form.contactRole}
              onChange={handleChange}
              className="border border-black h-9 px-2 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium">E-Mail Adresse</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="border border-black h-9 px-2 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium">Telefonnummer</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="border border-black h-9 px-2 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium">Ihre Nachricht</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="border border-black min-h-[80px] max-h-[120px] px-2 text-sm resize-none"
              maxLength={500}
            />
            <div className="text-right text-xs text-gray-400">
              max. 500 Zeichen
            </div>
          </div>
          <div className="flex items-start gap-2 mt-2">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              className="w-4 h-4 border-2 border-black mt-1"
            />
            <span className="text-xs text-gray-700">
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui. Etiam rhoncus.
            </span>
          </div>
          {error && <div className="text-xs text-red-500 mt-1">{error}</div>}
          <div className="flex justify-between gap-2 mt-4">
            <Button
              type="button"
              variant="outline"
              className="w-1/3 rounded-none"
              onClick={() => onOpenChange(false)}
            >
              Abbrechen
            </Button>
            <Button type="submit" className="w-2/3 rounded-none">
              ABSENDEN
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
