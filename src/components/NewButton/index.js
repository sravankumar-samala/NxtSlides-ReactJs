import {useSlidesContext} from '../../context/nxtSlidesContext'
import './index.css'

export default function NewButton() {
  const {addNewSlide} = useSlidesContext()

  return (
    <div className="button-container">
      <button type="button" className="new-slide-btn" onClick={addNewSlide}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png "
          alt="new plus icon"
        />
        New
      </button>
    </div>
  )
}
