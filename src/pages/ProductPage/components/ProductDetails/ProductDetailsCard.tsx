import React from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/ui';
import type { ProductDetailsCardType } from '@/types';

const createPairs = (features?: string[], values?: string[]) => {
  if (!features || features.length === 0) {
    return [];
  }

  return features.map((feature, index) => ({
    feature,
    value: values?.[index] ?? '\u2014',
  }));
};

const ProductDetailsCard: React.FC<ProductDetailsCardType> = ({
  title,
  tab = [],
}) => {
  if (!title && tab.length === 0) {
    return null;
  }

  const tabsWithValue = tab.map((item, index) => ({
    ...item,
    value: item.tabtitle ? `${item.tabtitle}-${index}` : `tab-${index}`,
  }));

  const defaultValue = tabsWithValue[0]?.value;

  return (
    <Card className="border-border/70 bg-background/60 shadow-sm backdrop-blur-sm">
      {(title || tabsWithValue.length > 0) && (
        <CardHeader className="gap-2 pb-3">
          {title ? (
            <CardTitle className="text-xl font-semibold text-foreground">
              {title}
            </CardTitle>
          ) : null}
        </CardHeader>
      )}

      {tabsWithValue.length > 0 ? (
        <CardContent className="space-y-5">
          <Tabs defaultValue={defaultValue} className="space-y-4">
            <TabsList className="w-full justify-start gap-2 overflow-x-auto rounded-xl bg-muted/60 p-1">
              {tabsWithValue.map(({ tabtitle, value }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="rounded-lg px-3 py-1.5 text-sm transition data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  {tabtitle}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabsWithValue.map(({ tabcontent, value }) => {
              const pairs = createPairs(
                tabcontent?.Eigenschaften,
                tabcontent?.Wert
              );

              if (pairs.length === 0) {
                return (
                  <TabsContent
                    key={value}
                    value={value}
                    className="text-sm text-muted-foreground"
                  >
                    Keine weiteren Details verfügbar.
                  </TabsContent>
                );
              }

              return (
                <TabsContent key={value} value={value} className="space-y-3">
                  <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {pairs.map(({ feature, value: itemValue }, index) => (
                      <div
                        key={`${feature}-${index}`}
                        className="rounded-xl border border-border/60 bg-muted/30 p-4"
                      >
                        <dt className="text-sm font-medium text-foreground">
                          {feature}
                        </dt>
                        <dd className="mt-1 text-sm text-muted-foreground">
                          {itemValue}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </TabsContent>
              );
            })}
          </Tabs>
        </CardContent>
      ) : null}
    </Card>
  );
};

export { ProductDetailsCard };

export default ProductDetailsCard;
