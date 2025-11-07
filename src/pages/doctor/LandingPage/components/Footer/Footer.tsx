import { Footer, Grid, Column,  Section } from '@/layout';
import AndreaMeyer from '@/assets/logos/AndreaMeyer';
import FooterData from './data';
import { BottomBar, FooterLinks } from './components';
import { TextParagraph } from '@/typography'


const MainFooter: React.FC = () => {
  const footerLinks = FooterData.footerLinks;
  const bottomBar = FooterData.bottomBar;

  return (
    <Footer>
      <Section isBox id='footer' className='bg-slate-900 text-slate-50'>
        <Grid className="mb-12 gap-10 grid-cols-2 lg:grid-cols-4 ">

          <AndreaMeyer className="w-6/12 col-span-2 lg:col-span-2" />
    

          <FooterLinks data={ footerLinks } />
   
        </Grid>

        <BottomBar data={ bottomBar } />
      </Section>
    </Footer>
  );
};

export default MainFooter;
