import type { ReactNode } from 'react'
import { Card, CardHeader, CardContent, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/ui'
import { Title, TextParagraph } from '@/typography';

type FAQItemsProps = {
    title: string;
    description: string;
    data: 
{ 
  value: string;
  question: string;
      answer: string | ReactNode
}[]
};



const FAQItems:React.FC<FAQItemsProps> = ({title, description, data}: FAQItemsProps) => {
    return ( 
    <Card className="border bg-white shadow-sm">
              <CardHeader className="space-y-0 mb-3">
                <Title h4 text={title} />
                <TextParagraph sm text={description} />
              </CardHeader>
              <CardContent className="overflow-visible">
                <Accordion
                  type="single"
                  collapsible
                  className="space-y-3 rounded-2xl overflow-visible">
                    {data.map(({ value, question, answer }) => (
                      <AccordionItem
                        key={value}
                        value={value}
                        className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-200/50 px-4 "
                      >
                        <AccordionTrigger className="text-left text-base font-semibold text-gray-900 overflow-visible cursor-pointer hover:no-underline pb-4">
                          {question}
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 text-sm text-gray-600">
                          {answer}
                        </AccordionContent>
                      </AccordionItem>
                   ))} 
              </Accordion>
            </CardContent>
          </Card>
          )
};

export default FAQItems;
