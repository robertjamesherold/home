import type { FormTableType, InputType } from './types'

import { Button, Input, Label, Textarea } from '@/ui'
import { Title } from '@/typography'
import { Column, Header, Footer, Form, Grid } from '@/layout'





const FormTable = ( { title, subtitle, inputs, textArea, cancel, save }: FormTableType ) =>
{
  return (
    <Form className="space-y-6">
      <Header>
        <Title level={ 3 } weight='bold' text={ title } />
        <Title level={ 5 } text={ subtitle } />
      </Header>
      <Grid className="gap-6 md:grid-cols-2">
        { inputs.map( ( { htmlFor, label, id, isRequired, placeholder }: InputType ) =>
          <Column key={ id } className="space-y-2 col-span-1">
            <Label className='mb-2' htmlFor={ htmlFor }>{ label }</Label>
            <Input id={ id } name={ label } required={ isRequired } placeholder={ placeholder } />
          </Column>
        ) }
        <Column className="space-y-2 col-span-2 row-span-10">
          <Label className='mb-2' htmlFor={ textArea.htmlFor }>{ textArea.label }</Label>
          <Textarea id={ textArea.id } placeholder={ textArea.placeholder } className="h-full" />
        </Column>
      </Grid>
      <Footer className="flex items-center justify-end gap-3">
        <Button variant="outline">{ cancel }</Button>
        <Button>{ save }</Button>
      </Footer>
    </Form>
  );
};

export default FormTable;
