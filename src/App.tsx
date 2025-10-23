import './App.css'
import MetaBadge from './assets/badges/MetaBadge/MetaBadge'
import { SocialIcon } from './assets/icons/SocialIcon'

function App() {

  return (
    <div className='flex flex-row gap-4'>
      <MetaBadge size={60}/>
      <SocialIcon icon='GitHub' size={60}/>
      <SocialIcon icon='LinkedIn' size={60}/>
      <SocialIcon icon='Mail' size={60}/>


    </div>
  )
}

export default App
