import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Column } from '@/layout';
import { Title, TextParagraph } from '@/typography';
import { Button } from '@/ui';

const EmptyCart: React.FC = () => {
  return (
    <div className="relative mx-auto flex h-full items-center justify-center px-4 py-16">
      <Column className="mx-auto max-w-md items-center text-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted/40">
          <ShoppingBag className="h-12 w-12 text-muted-foreground" />
        </div>
        <Title level={3} weight="semibold" className="mb-2">
          Ihr Warenkorb ist leer
        </Title>
        <TextParagraph className="mb-6 text-gray-600">
          Fügen Sie Produkte hinzu, um mit dem Einkaufen zu beginnen.
        </TextParagraph>
        <Link to="/products">
          <Button size="lg">Produkte entdecken</Button>
        </Link>
      </Column>
    </div>
  );
};

export default EmptyCart;
