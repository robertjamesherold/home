import { Section, Header, Container } from '@/layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../ui/accordion';
import { TextParagraph, Title } from '@/typography';
import { FAQSdata, Headertext } from './data';



const FAQ: React.FC = () =>
{
  return (
    <Section
      id="faq"
      className="relative section safe-area-padding text-slate-800 "
    >

      <Container
        outerClass="@container"
        innerClass="relative z-[1] mx-auto lg:w-[80cqw] xl:w-[70cqw] 2xl:w-[60cqw]"
      >
        <Header className="mb-12 text-center">
          <Title
            level={ 2 }
            weight="bold"
            className="mb-4 text-[#1f3e4d]"
          >
            { Headertext.title }{ ' ' }
            <span className="text-[#2f6d8b]">{ Headertext.span }</span>
          </Title>
          <Title
            level={ 5 }
            className="mx-auto text-[#4a5d66]"
            text={ Headertext.subtitle }
          />
        </Header>

        <Accordion type="single" collapsible className="space-y-4">
          {FAQSdata.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-[#dceaea] bg-white px-6 shadow-sm transition hover:border-[#2f6d8b]/30 hover:bg-[#f4fbfb]"
            >
              <AccordionTrigger className="text-left text-[#1f3e4d] hover:no-underline">
                <TextParagraph className="text-[#1f3e4d]" text={ faq.question } />
              </AccordionTrigger>
              <AccordionContent className="text-[#4a5d66]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
};

export default FAQ;
