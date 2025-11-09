import React from 'react';
import { Card, CardHeader, CardTitle } from '@/ui/card'
import { Column, Row } from '@/layout'
import type { DetailDataType, DetailTypes } from '../../types';

const Detail = ( { title, content }: DetailDataType ) =>
{
  return (
    <Card>
      <CardHeader className="gap-2 ">

        <CardTitle className="text-xl font-semibold text-foreground">
          { title }
        </CardTitle>

      </CardHeader>
      <Column className="space-y-4 rounded-3xl  border-border/70 bg-muted/30 p-6 text-sm text-muted-foreground">

        { content.map( ( { Icon, text } ) => (
          <Row className="items-center gap-3">
            <Icon className="h-5 w-5 text-primary" />
            <span>{ text }</span>
          </Row>
        ) ) }
      </Column>
    </Card>
  );
};

const DetailCard = ( { detailData }: DetailTypes ) =>
{
  return ( <>
    { detailData.map( ( { title, content } ) => (
      <Detail key={title} title={title} content={content} />
    ))}

  </> );
};

export default DetailCard;