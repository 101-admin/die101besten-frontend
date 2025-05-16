import type { BaseDocument, BlockContent, SanityImage } from "./sanity.types";
import type {
  PageTitle,
  StrategischePartner,
  MedienPartner,
  PartnerComponent,
  Werde101,
  DasBuch,
  Newsletter,
} from "./components.types";

/**
 * Partners page interface
 */

export type PartnersComponent =
  | PageTitle
  | StrategischePartner
  | MedienPartner
  | PartnerComponent
  | Werde101
  | DasBuch
  | Newsletter;

export interface PartnersPage extends BaseDocument {
  _type: "partners";
  title: string;
  description?: BlockContent[];
  partners: Partner[];
  edition: string;
  language: string;
}

/**
 * Partner interface
 */
export interface Partner {
  _key: string;
  name: string;
  description?: BlockContent[];
  logo: SanityImage;
  website?: string;
  partnerType?: string;
  featured?: boolean;
}
