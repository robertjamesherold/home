export type FooterLinkType = {
  label: string;
  to: string;
}

export type FooterLinkGroupType = {
  title: string
  links: 
    FooterLinkType[]
} 