import { Instagram, Facebook, Twitter } from 'lucide-react'

export type SocialsType = {
    label: string;
    href: string;
    icon: React.ComponentType;
    };

const SocialsData: SocialsType[] = [
  { label: 'Instagram', href: 'https://www.instagram.com', icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: Facebook },
  { label: 'Twitter', href: 'https://www.twitter.com', icon: Twitter },
]

type FooterSectionDataType = {
    socials: SocialsType[];
    text: string;
    footercarttext: string[];
};

const FooterSectionData: FooterSectionDataType = {
    socials: SocialsData,
    text: "Bewusst gefertigte Essentials, entworfen in Berlin und aus recycelten Materialien verpackt. Wir kombinieren klare Linien mit langlebigen Stoffen für Looks, die jede Saison tragen.",
    footercarttext: ["LUXE Showroom & Versand", "Rosenthaler Straße 72", "10119 Berlin", "Mo–Fr · 10:00 – 18:00 Uhr"]
};


export default FooterSectionData;