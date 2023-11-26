import {useSlidesContext} from '../../context/nxtSlidesContext'
import './index.css'

export default function SlidesPanelContainer() {
  const {slidesList} = useSlidesContext()

  return (
    <div className="slides-panel">
      <ol className="slide-tabs-list">
        {slidesList.map((each, i) => (
          <SlideItem
            key={each.id}
            testid={`slideTab${i + 1}`}
            slideNumber={i + 1}
            slideObj={each}
          />
        ))}
      </ol>
    </div>
  )
}

function SlideItem({slideObj, slideNumber}) {
  const {currSlideIndex, changeCurrSlide} = useSlidesContext()
  const {heading, description} = slideObj
  const activeSlide = currSlideIndex === slideNumber - 1 ? 'active' : ''

  const onChangeCurrSlide = () => changeCurrSlide(slideNumber - 1)

  return (
    <li className={`slide-tab ${activeSlide}`} onClick={onChangeCurrSlide}>
      <p>{slideNumber}</p>
      <div className="slide">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </li>
  )
}
