export type itemProps = {
    name: string ;
    link: string;
    isLink: boolean;
};

export type FooterLinkProps = {
  column: number;
  category: string;
  items: itemProps[];
};
