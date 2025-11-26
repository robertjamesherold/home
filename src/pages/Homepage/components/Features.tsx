import { Section, Container, Grid } from '@/layout'
import { Title, TextParagraph } from '@/typography';
import type { FeaturesType } from '../types';

const Features: React.FC<FeaturesType> = ({ data = [] }: FeaturesType) => {
  return (
    <Section isBox className="relative bg-gray-50 py-16 sm:py-20 lg:py-24">
      <Container >
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <Title
            level={2}
            weight="bold"
            className="mb-4 text-gray-900"
            text="Warum bei uns kaufen"
          />
          <TextParagraph
            className="mx-auto max-w-2xl text-gray-600"
            text="Entdecke die Vorteile, die deinen Einkauf zu einem besonderen Erlebnis machen"
          />
        </div>

        {/* Features Grid */}
        <Grid className="mx-auto  grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {data.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-gray-900/0 to-gray-900/0 transition-all duration-300 group-hover:from-gray-900/5 group-hover:to-transparent" />
              
              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className="mb-5 inline-block rounded-xl bg-secondary-600 p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl group-hover:bg-primary-600">
                  <Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" strokeWidth={2} />
                </div>

                {/* Text */}
                <Title
                  level={4}
                  weight="semibold"
                  className="mb-2 text-gray-900 transition-colors duration-300 group-hover:text-gray-700"
                  text={title}
                />
                <TextParagraph
                  className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700 sm:text-base"
                  text={text}
                />

                {/* Accent Bar */}
                <div className="mt-4 h-1 w-12 rounded-full bg-secondary-200 transition-all duration-300 group-hover:w-full group-hover:bg-primary-400" />
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Features;
