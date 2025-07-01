import { BaseDocument, BlockContent, SanityImage } from "./sanity.types";

/**
 * Button interface for consistent button structure
 */
export interface Button {
  buttonText?: string;
  buttonLink?: string;
  text?: string; // Alternative naming
  url?: string; // Alternative naming
  link?: string;
  btnStyle?: string;
}

/**
 * Hero Slider component
 */
export interface HeroSlider extends BaseDocument {
  _type: "heroSlider";
  title: string;
  language: string;
  heroSection: {
    heroImage: SanityImage;
    heroImageOverlay?: {
      name?: string;
      city?: string;
      country?: string;
      imageCredits?: string;
      color?: string;
    };
    infoOverlay?: {
      tags?: string[];
      city?: string;
      hotelName?: string;
      ctaButton?: Button;
      shareButton?: {
        enabled?: boolean;
        platforms?: ("facebook" | "twitter" | "email" | "whatsapp")[];
      };
      wishlistButton?: {
        enabled?: boolean;
      };
    };
    hotelSeals?: Array<{
      sealImage?: SanityImage;
      sealTitle?: string;
    }>;
    imageGallery?: {
      enabled?: boolean;
      images?: Array<
        SanityImage & {
          caption?: string;
        }
      >;
    };
  };
}

/**
 * Text Quote component
 */
export interface TextQuote extends BaseDocument {
  _type: "textQuote";
  heading: string;
  id: string;
  language: string;
  author?: string;
  image?: SanityImage;
  ctaButtons?: Button[];
}

/**
 * Image Quote component
 */
export interface ImageQuote extends BaseDocument {
  _type: "imageQuote";
  language: string;
  image?: SanityImage;
  id: string;
  name: string;
  post: string;
  description?: string;
}

/**
 * Partner Logo component
 */
export interface PartnerLogo extends BaseDocument {
  _type: "partnerLogo";
  title: string;
  id: string;
  language: string;
  logoSlider?: Array<{
    image?: SanityImage;
    link?: string;
  }>;
}
/**
 * Hotels component
 */

export interface Hotels extends BaseDocument {
  _type: "hotels";
  title: string;
  language: string;
  description?: string;
  hotels?: Array<{
    image?: SanityImage;
    name?: string;
    link?: string;
  }>;
}

/**
 * Success Story component
 */
export interface SuccessStory extends BaseDocument {
  _type: "successStory";
  title: string;
  id: string;
  language: string;
  story?: BlockContent;
  image?: SanityImage;
  name?: string;
  role?: string;
}

export interface ImageSection extends BaseDocument {
  _type: "imageSection";
  title: string;
  images: Array<{
    image?: SanityImage;
    link?: string;
  }>;
}

/**
 * Newsletter component
 */
export interface Newsletter extends BaseDocument {
  _type: "newsletter";
  heading: string;
  id?: string;
  language: string;
  description?: string;
  placeholder?: string;
  emailLabel?: string;
  buttonText?: string;
  privacyText?: string;
  privacyLink?: string;
  socialLinks?: SocialLink;
}

export interface SocialLink {
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

/**
 * ===========================================
 * About Page Components Types
 * ===========================================
 */

/**
 * Hero About component
 */
export interface HeroAbout extends BaseDocument {
  _type: "heroAbout";
  title: string;
  id: string;
  subtitle?: string;
  image?: SanityImage;
}

/**
 * Testimonials component
 */

export interface Testimonial {
  image?: SanityImage & {
    alt?: string;
    caption?: string;
  };
  review?: string;
  author?: string;
}

export interface AboutTestimonials extends BaseDocument {
  _type: "testimonials";
  id: string;
  language: string;
  title?: string;
  slider?: Testimonial[];
}

/**
 * Die Besten component
 */
export interface DieBesten extends BaseDocument {
  _type: "dieBesten";
  title: string;
  id: string;
  language: string;
  description?: string;
  bestenSection?: Array<{
    percentage?: number;
    title?: string;
    description?: string;
  }>;
}

/**
 * Board of Das component
 */
export interface BoardofDas extends BaseDocument {
  _type: "boardofDas";
  title: string;
  id: string;
  language: string;
  description1?: string;
  description2?: string;
  readmore?: string;
  boardMembers?: Array<{
    name?: string;
    role?: string;
    image?: SanityImage;
    description?: string;
    email?: string;
    phone?: string;
    hoverColor?: string;
  }>;
}

/**
 * Principles component
 */
export interface Principles extends BaseDocument {
  _type: "principles";
  title: string;
  id: string;
  subTitle: string;
  language: string;
  body?: BlockContent;
  principlesSection?: Array<{
    title?: string;
    description?: string;
  }>;
}

/**
 * Shaping Future component
 */
export interface ShapingFuture extends BaseDocument {
  _type: "shapingFuture";
  title: string;
  id: string;
  language: string;
  image?: SanityImage;
  body?: BlockContent;
  ctaButton?: Button;
}

/**
 * 101 Events component
 */
export interface Events101 extends BaseDocument {
  _type: "101Events";
  title: string;
  language: string;
  upcomigTitle?: string;
  upcomingEvents?: Array<{
    title?: string;
    slug?: string;
    mainImage?: SanityImage;
    description?: string;
    startDate?: string;
    endDate?: string;
  }>;
  upcomingCtaButton?: Button;
  pastTitle?: string;
  pastEvents?: Array<{
    title?: string;
    slug?: string;
    mainImage?: SanityImage;
    description?: string;
    startDate?: string;
    endDate?: string;
  }>;
  pastCtaButton?: Button;
}

/**
 * Exclusive Events component
 */
export interface ExclusiveEvents extends BaseDocument {
  _type: "exclusiveEvents";
  title: string;
  language: string;
  description?: string;
  events?: Array<{
    image?: SanityImage;
    name?: string;
    description?: string;
    date?: string;
    location?: string;
    link?: string;
  }>;
  ctaButton?: Button;
}

/**
 * Category Winners component
 */
export interface CategoryWinners extends BaseDocument {
  _type: "categoryWinners";
  title: string;
  language: string;
  description?: string;
  categories?: Array<{
    name?: string;
    winner?: string;
    image?: SanityImage;
    link?: string;
  }>;
}

/**
 * Business Leisure component
 */
export interface BusinessLeisure extends BaseDocument {
  _type: "businessLeisure";
  title: string;
  language: string;
  description?: string;
  image?: SanityImage;
  items?: Array<{
    title?: string;
    description?: string;
    icon?: SanityImage;
  }>;
  ctaButtons?: Button[];
}

/**
 * Ranking mit Relevanz component
 */
export interface RankingMitRelevanz extends BaseDocument {
  _type: "rankingMitRelevanz";
  title: string;
  language: string;
  description?: string;
  image?: SanityImage;
  ctaButtons?: Button[];
}

/**
 * Maßstab für Exzellenz component
 */
export interface Masbstab extends BaseDocument {
  _type: "mabstab";
  title: string;
  language: string;
  description?: string;
  image?: SanityImage;
  ctaButton?: Button;
}

/**
 * Das Buch component
 */
export interface DasBuch extends BaseDocument {
  _type: "dasBuch";
  title: string;
  id: string;
  language: string;
  imagePosition?: string;
  bgColor?: string;
  body?: BlockContent;
  image?: SanityImage;
  ctaButton?: Button;
}

/**
 * Die Instagram component
 */
export interface DieInstagram extends BaseDocument {
  _type: "dieInstagram";
  title: string;
  id: string;
  language: string;
  description?: string;
  instagramSlider?: Array<{
    image?: SanityImage;
    link?: string;
  }>;
}

/**
 * Hotelmomente component
 */
export interface Hotelmomente extends BaseDocument {
  _type: "hotelmomente";
  title: string;
  id: string;
  language: string;
  description?: string;
  ctaButton?: Button;
  allBlogs?: Array<{
    title?: string;
    slug?: string;
    category: Array<{
      title?: string;
    }>;
    description?: string;
    mainImage?: SanityImage;
  }>;
}

/**
 * Special Edition component
 */
export interface SpecialEdition extends BaseDocument {
  _type: "specialEdition";
  title: string;
  language: string;
  description?: string;
  specialEditionHotels?: Array<{
    title?: string;
    image?: SanityImage;
    link?: string;
  }>;
}

/**
 * UTR component
 */
export interface Utr extends BaseDocument {
  _type: "utr";
  title: string;
  id: string;
  language: string;
  subTitle?: string;
  description?: BlockContent;
  image?: SanityImage;
}

/**
 * Das Bush component
 */
export interface DasBush extends BaseDocument {
  _type: "dasBush";
  title: string;
  id: string;
  language: string;
  imagePosition?: string;
  description?: string;
  ctaButton?: {
    buttonText?: string;
    buttonLink?: string;
  };
  image?: SanityImage;
}

/**
 * Location component
 */

export interface Location extends BaseDocument {
  _type: "location";
  title: string;
  language: string;
  image?: SanityImage;
}

/**
 * All Hotels Slider component
 */

export interface AllHotelsSliderImage extends SanityImage {
  caption?: string;
  link?: string;
  linkText?: string;
  textColor?: string;
}
export interface AllHotelsSlider extends BaseDocument {
  _type: "allHotelsSlider";
  title: string;
  language: string;
  allHotelsSection: {
    imageGallery?: {
      enabled?: boolean;
      images?: AllHotelsSliderImage[];
    };
  };
}

/**
 * Hotel Collection component
 */
export interface HotelCollection extends BaseDocument {
  _type: "hotelCollection";
  title: string;
  id: string;
  variant?: "classic" | "special";
}

/**
 * Types of Partner page component
 */

export interface PageTitle extends BaseDocument {
  _type: "pageTite";
  title: string;
  language: string;
}

export interface StrategischePartner extends BaseDocument {
  _type: "strategischePartner";
  title: string;
  language: string;
  partners?: Array<{
    image?: SanityImage;
    link?: string;
  }>;
}

export interface MedienPartner extends BaseDocument {
  _type: "medienPartner";
  title: string;
  language: string;
  partners?: Array<{
    image?: SanityImage;
    link?: string;
  }>;
}

export interface PartnerComponent extends BaseDocument {
  _type: "partner";
  title: string;
  language: string;
  partners?: Array<{
    image?: SanityImage;
    link?: string;
  }>;
  premiumPartners?: Array<{
    image?: SanityImage;
    link?: string;
  }>;
  otherPartners?: Array<{
    image?: SanityImage;
    link?: string;
  }>;
}

export interface Werde101 extends BaseDocument {
  _type: "werde101";
  title: string;
  language: string;
  description?: string;
  image?: SanityImage;
  ctaButton?: Button;
}

// Blog page

export interface BlogPageTitle extends BaseDocument {
  _type: "blogPageTitle";
  title: string;
  id: string;
  language: string;
  description?: string;
}

export interface BlogCollection extends BaseDocument {
  _type: "blogCollection";
  title: string;
  id: string;
  language: string;
}

export interface SpecialHotels extends BaseDocument {
  _type: "specialHotels";
  title: string;
  id: string;
  language: string;
  hotels?: Array<{
    image?: SanityImage;
    name?: string;
    link?: string;
  }>;
}


// Events page components

export interface EventsHero extends BaseDocument {
  _type: "eventsHero";
  title: string;
  id: string;
  language: string;
}

export interface EventCollection extends BaseDocument {
  _type: "eventCollection";
  title: string;
  id: string;
  language: string;
}
