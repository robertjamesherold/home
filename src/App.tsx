import './App.css'
import MetaBadge from './assets/badges/MetaBadge'
import { SocialIcon } from './assets/icons/SocialIcon'

function App() {

  return (
    <div className='flex flex-row gap-4'>
      <MetaBadge size={60}/>
      <SocialIcon icon='GitHub' color='purple' hue={700} size={60}/>
      <SocialIcon icon='LinkedIn' color='pink' hue={400} size={60}/>
      <SocialIcon icon='Mail' color='pink' hue={400} size={60}/>


    </div>
  )
}

export default App
