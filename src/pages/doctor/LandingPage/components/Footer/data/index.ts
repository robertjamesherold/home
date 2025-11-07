import  FooterLinksData from './FooterLinks.data';
import BottomBarData from './BottomBar.data';

export type FooterProps = {
  footerLinks: typeof FooterLinksData;
  bottomBar: typeof BottomBarData;
};

const FooterData: FooterProps = {
  footerLinks: FooterLinksData,
  bottomBar: BottomBarData,
};

export default FooterData
