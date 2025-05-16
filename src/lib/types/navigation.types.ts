import { BaseDocument } from "./sanity.types";
import { SanityImage } from "./sanity.types";

export interface NavbarLink {
  label: string;
  url: string;
}

export interface NavbarColumn {
  columnTitle: string;
  links: NavbarLink[];
}

export interface NavbarSubmenu {
  columns: NavbarColumn[];
}

export interface NavbarMainMenuItem {
  label: string;
  url: string;
  hasSubmenu?: boolean;
  submenu?: NavbarSubmenu;
}

export interface NavbarLanguage {
  code: string;
  label: string;
}

export interface NavbarUtilities {
  search?: {
    placeholder: string;
  };
  languageSelector?: {
    languages: NavbarLanguage[];
  };
}

export interface Navbar {
  _id: string;
  _type: "navbar";
  language: string;
  edition: string;
  logo?: string;
  mainMenu: NavbarMainMenuItem[];
  utilities?: NavbarUtilities;
}

/**
 * Footer component
 */
export interface Footer extends BaseDocument {
  _type: "footer";
  title: string;
  language: string;
  logo?: string;
  kontakt?: FooterKontakt;
  service?: FooterSection;
  quickLinks?: FooterSection;
  ausDer101Welt?: FooterSection;
  bottomSection?: FooterBottomSection;
}

export interface FooterKontakt {
  title: string;
  description?: string;
  emailText?: string;
  emailLink?: string;
}

export interface FooterSection {
  title: string;
  links?: Array<{
    label?: string;
    url?: string;
    newTab?: boolean;
  }>;
}

export interface FooterBottomSection {
  copyright?: string;
  legalLinks?: Array<{
    label?: string;
    url?: string;
    newTab?: boolean;
  }>;
}
