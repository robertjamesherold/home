import React from 'react';
import { Badge } from '@/ui';

interface ProductBadgesProps {
  tags?: string[];
}

export const ProductBadges: React.FC<ProductBadgesProps> = ({ tags = [] }) => {
  if (!tags.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.includes('new') && <Badge>Neu</Badge>}
      {tags.includes('sale') && <Badge variant="destructive">Sale</Badge>}
    </div>
  );
};
