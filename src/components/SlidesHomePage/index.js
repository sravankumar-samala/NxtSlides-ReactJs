// import {useSlidesContext} from '../../context/NxtSlidesContext'
import NewButton from '../NewButton'
import SlidesPanelContainer from '../SidebarSlidesPanel'
import SlideContent from '../SlideContent'
import './index.css'

export default function SlidesHomePage() {
  // this way we can get access to state within the context
  // const {slidesList, setSlidesList} = useSlidesContext()

  return (
    <div className="main-container">
      <Header />
      <div className="container">
        <NewButton />
        <div className="slides-container">
          <SlidesPanelContainer />
          <SlideContent />
        </div>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="slides-header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
        alt="nxt slides logo"
      />
      <h1>Nxt Slides</h1>
    </header>
  )
}
