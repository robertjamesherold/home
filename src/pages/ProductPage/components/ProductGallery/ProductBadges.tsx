import React from 'react';
import { Badge } from '@ui/.';

interface ProductBadgesProps {
  tags?: string[];
}

export const ProductBadges: React.FC<ProductBadgesProps> = ({ tags = [] }) => {
  return (
    <div className="mb-2 flex items-center gap-2">
      {tags.includes('new') && <Badge>Neu</Badge>}
      {tags.includes('sale') && <Badge variant="destructive">Sale</Badge>}
    </div>
  );
};
