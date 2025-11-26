import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Column, Icon, Container } from '@/layout'
import { Title, TextParagraph } from '@/typography';
import { Button } from '@/ui';

const EmptyCart: React.FC = () => {
  return (
    <div className="relative mx-auto flex h-full items-center justify-center px-4 py-16">
      <Column className="mx-auto max-w-md items-center text-center">
        <Container className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted/40">
          <Icon Icon={ ShoppingBag } className="h-12 w-12 text-muted-foreground" />
        </Container>
        <Title level={3} weight="semibold" className="mb-2" text='Ihr Warenkorb ist leer' />
        <TextParagraph className="mb-6 text-gray-600" text='Fügen Sie Produkte hinzu, um mit dem Einkaufen zu beginnen.' />
        <Link to="/products">
          <Button size="lg">Produkte entdecken</Button>
        </Link>
      </Column>
    </div>
  );
};

export default EmptyCart;
