import type { FormTableType, InputType } from './types'

import { Button, Input, Label, Textarea } from '@/ui'
import { TextParagraph, Title } from '@/typography'
import { Column, Header, Footer, Form, Grid } from '@/layout'





const FormTable = ( { title, subtitle, inputs, textArea, cancel, save }: FormTableType ) =>
{
  return (
    <Form className="space-y-6">
      <Header>
        <Title level={ 4 } weight='bold' text={ title } />
        <TextParagraph sm className="text-gray-600" text={ subtitle } />
      </Header>
      <Grid className="gap-6 md:grid-cols-2">
        { inputs.map( ( { htmlFor, label, id, isRequired, placeholder }: InputType ) =>
          <Column key={ id } className="space-y-2 col-span-1">
            <Label className='mb-2' htmlFor={ htmlFor }>{ label }</Label>
            <Input id={ id } name={ label } required={ isRequired } placeholder={ placeholder } />
          </Column>
        ) }
        <Column className="space-y-2 col-span-1 md:col-span-2 row-span-10">
          <Label className='mb-2' htmlFor={ textArea.htmlFor }>{ textArea.label }</Label>
          <Textarea id={ textArea.id } placeholder={ textArea.placeholder } className=" h-full w-full" />
        </Column>
      </Grid>
      <Footer className="flex flex-col sm:flex-row items-center justify-end gap-3">
        <Button variant="outline" className='w-full sm:w-fit'>{ cancel }</Button>
        <Button className='w-full sm:w-fit'>{ save }</Button>
      </Footer>
    </Form>
  );
};

export default FormTable;
