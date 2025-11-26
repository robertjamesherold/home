import { ShoppingBag } from 'lucide-react'
import { Column, Section, Iconpatch } from '@/layout'
import { Title, TextParagraph } from '@/typography';
import { Button } from '@/ui';

const EmptyCart: React.FC = () =>
{
  return (
    <Section isBox className="relative mx-auto flex h-full items-center justify-center px-4 py-16">
      <Column className="mx-auto max-w-md items-center text-center">
        <Iconpatch icon={ ShoppingBag } size={ 6 } rounded="full" variant='default' className="mb-4" />
        <Title level={3} weight="semibold" className="mb-2" text='Ihr Warenkorb ist leer' />
        <TextParagraph className="mb-6 text-gray-600" text='Fügen Sie Produkte hinzu, um mit dem Einkaufen zu beginnen.' />
        <Button isLink to="/products" size="lg" text='Produkte entdecken' />
      </Column>
    </Section>
  );
};

export default EmptyCart;
