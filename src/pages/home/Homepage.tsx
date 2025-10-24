import Slider from "../../components/Slider/Slider"
import { Main, Section } from "../../layout"
import { ProjectPreview } from './components/project-preview/ProjectPreview'
import { previewData } from './components/project-preview/data'

const Homepage: React.FC = () => {
  return (
    <Main>
      <Section fullWidth padding className="p-0">
        <Slider
          autoPlayInterval={7000}
          cardHeight="min(90vh, 760px)"
          className="text-left"
        />
      </Section>
      <ProjectPreview {...previewData}/>

    </Main>
  )
}

export default Homepage
