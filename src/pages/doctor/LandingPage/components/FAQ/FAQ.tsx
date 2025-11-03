import { Section, Header, Container } from '@/layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../ui/accordion';
import { TextParagraph, Title } from '@/typography'
import { FAQSdata } from './data'



const FAQ = ()=> {  

  return (
    <Section className="py-12 md:py-20 bg-slate-50">
      <Container outerClass="container mx-auto px-4" innerClass='max-w-3xl mx-auto'>
          <Header className="text-center mb-12">
            <Title level={2} className="text-slate-900 mb-4" text='Häufig gestellte Fragen' />  
            <TextParagraph className="text-slate-600" text='Hier finden Sie Antworten auf die wichtigsten Fragen rund um unsere Praxis und Behandlungen' />
          </Header>

          <Accordion type="single" collapsible className="space-y-4">
            {FAQSdata.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border-none shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <TextParagraph className="text-slate-900" text={faq.question} />
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
    </Section>
  );
}

export default FAQ
