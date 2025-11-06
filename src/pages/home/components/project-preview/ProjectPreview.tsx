import type { PreviewMapping } from './types'
import { Title, TextParagraph } from '@/typography';
import VillaOlivetoImage from '@/assets/images/VillaOlivetoImage'
import { Column, Grid, Section } from '@/layout'
import { useProjectPreview } from './hooks/useProjectPreview';

const ProjectPreview: React.FC<PreviewMapping> = ({ data }) => {
  const { isPadding, isSpan, isImageSpan } = useProjectPreview();

  return (
    <>
      {Array.isArray(data) &&
        data.map((item, index) => (
          <Section
            key={index}
            className="bg-white section"
            id="villa-oliveto"
          >
            <Grid className="mx-auto grid-cols-12 gap-4">
              <Column
                className={`justify-center gap-4 ${isPadding} ${isSpan} ${item.isReversed ? 'order-2' : 'order-1'}`}
              >
                <Title level={ 4 } text={ item.subtitle } />
                <Title level={ 2 } weight='bold' text={ item.title } />
                {Array.isArray(item.paragraph) ? (
                  item.paragraph.map((text, index) => (
                    <TextParagraph key={index} text={text} />
                  ))
                ) : (
                  <TextParagraph text={item.paragraph} />
                ) }
              </Column>
              <Column
                className={`justify-center gap-4 ${isPadding} ${isImageSpan} ${item.isReversed ? 'order-1' : 'order-2'}`}
              >
                <VillaOlivetoImage
                  map={item.image}
                  className={`h-full w-full overflow-hidden rounded-3xl shadow-2xl`}
                />
              </Column>
            </Grid>
          </Section>
        ))}
    </>
  );
};
export { ProjectPreview };
