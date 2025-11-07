import { Section, Container, Header, Grid, Column } from '@/layout'
import { TextParagraph, Title } from '@/typography';
import { Headertext, Article } from './data';

const TrustSignals: React.FC = () => {
  return (
    <Section className="relative section safe-area-padding text-slate-800 ">
  
        <Header className="mb-12 text-center">
          <Title
            level={6}
            className="font-semibold uppercase tracking-[0.4em] text-[#6fc4a3]"
            text={Headertext.subtitle}
          />
          <Title level={2} weight="bold" className="mt-4 text-[#1f3e4d]">
            {Headertext.title}
            <span className="text-[#2f6d8b]">{Headertext.span}</span>
          </Title>
        </Header>
        <Container
          outerClass="@container"
          innerClass="mx-auto w-full overflow-hidden rounded-[32px] border border-[#dceaea] bg-white shadow-[0_40px_120px_-60px_rgba(47,109,139,0.35)] lg:w-[60cqw] xl:w-[70cqw] 2xl:w-[60cqw]"
        >
          <Grid className="h-full items-center gap-0 md:grid-cols-2">
            <Column className="relative h-full">
              <img
                src={Article.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </Column>
            <Column className="space-y-4 px-6 py-8 sm:px-10 sm:py-12">
              <Title level={4} weight="bold" className="text-[#1f3e4d]">
                {Article.title}
              </Title>
              <Title level={5} className="text-[#2f6d8b]" text={Article.subtitle} />
              <TextParagraph className="text-[#4a5d66]" text={Article.text} />
            </Column>
          </Grid>
        </Container>
    </Section>
  );
};
export default TrustSignals;
