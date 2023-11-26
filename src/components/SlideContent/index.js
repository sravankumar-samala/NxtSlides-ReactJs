import {useSlidesContext} from '../../context/nxtSlidesContext'
import './index.css'

export default function SliderContent() {
  const {
    currSlideIndex,
    slidesList,
    editHeading,
    editDescription,
    onClickHeading,
    onClickDescription,
    changeValue,
    exitInputMode,
  } = useSlidesContext()

  const {heading, description} = slidesList[currSlideIndex]

  return (
    <div className="slide-content">
      <div className="content">
        {editHeading === false ? (
          <h1 onClick={onClickHeading}>{heading}</h1>
        ) : (
          <form name="heading-form" onSubmit={exitInputMode}>
            <input
              type="text"
              className="heading-input"
              value={heading}
              onChange={changeValue}
              onBlur={exitInputMode}
              name="heading"
            />
          </form>
        )}

        {editDescription === false ? (
          <p onClick={onClickDescription}>{description}</p>
        ) : (
          <form name="description-form" onSubmit={exitInputMode}>
            <input
              type="text"
              className="description-input"
              value={description}
              onChange={changeValue}
              onBlur={exitInputMode}
              name="description"
            />
          </form>
        )}
      </div>
    </div>
  )
}
