import React from 'react';
import HorizontalScrollList from './components/HorizontalScrollList';
import g3 from '@images/g3.webp';
import g4 from '@images/g4.webp';
import g5 from '@images/g5.webp';
import g6 from '@images/g6.webp';
import g7 from '@images/g7.webp';
import g8 from '@images/g8.webp';
import g9 from '@images/g9.webp';
import g10 from '@images/g10.webp';
import g11 from '@images/g11.webp';
import g12 from '@images/g12.webp';
import { Column } from '@/layout';

const SeasonSelection: React.FC = () => {
  const ScrollListData = [
    {
      title: 'Kunden schauten auch',
      images: [g3, g4, g5, g6, g7, g8, g9, g10, g11, g12],
    },
    {
      title: 'Western im modernen Gewand',
      images: [g3, g4, g5, g6, g7, g8, g9, g10, g11, g12],
    },
    {
      title: 'Verbrechenswellen',
      images: [g3, g4, g5, g6, g7, g8, g9, g10, g11, g12],
    },
    {
      title: 'Verbrechenswellen',
      images: [g3, g4, g5, g6, g7, g8, g9, g10, g11, g12],
    },
  ];

  return (
    <Column className="gap-4">
      {ScrollListData.map(({ title, images }, index) => (
        <HorizontalScrollList key={index} title={title} images={images} />
      ))}
    </Column>
  );
};

export default SeasonSelection;
