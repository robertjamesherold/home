
import { Grid, Container, Footer } from '@/layout'
import { FooterLinksData, NewsletterData, FooterSectionData, FooterFootData } from './data'
import { Newsletter, FooterLinks, FooterSection, FooterFoot } from './components'
import { forwardRef } from 'react';
import { Section } from '@layout/.';

const PageFooter = forwardRef<HTMLElement>( ( props, ref ) =>
{ 

  const handleNewsletterSubmit = ( event: React.FormEvent<HTMLFormElement> ) => { event.preventDefault() }

  return (
    <Footer ref={ ref } className='mt-auto border-t border-border/60 bg-linear-to-b from-background via-muted/40 to-muted/70' { ...props }>
      
      <Section className='safe-area-padding'><Container className="mx-auto px-4 py-12">
        <Grid className="grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-10 lg:grid-cols-5">
          <Grid className="col-span-1 grid-cols-1 gap-y-8 sm:col-span-3 sm:grid-cols-3 lg:gap-y-2">
            <FooterLinks data={ FooterLinksData } />
            <Newsletter onSubmit={ handleNewsletterSubmit } data={ NewsletterData } />
          </Grid>
          <FooterSection data={ FooterSectionData } />
        </Grid>
        <FooterFoot { ...FooterFootData } />
      </Container>
      </Section>
    </Footer>
  )
  }
);


export default PageFooter;
