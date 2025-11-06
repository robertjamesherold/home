import { Main  } from '@/layout';
import { ProjectPreview } from './components/project-preview/ProjectPreview';
import { previewData } from './components/project-preview/data';

const Homepage: React.FC = () => {
  return (
    <Main>
      <ProjectPreview { ...previewData } />
    </Main>
  );
};

export default Homepage;
