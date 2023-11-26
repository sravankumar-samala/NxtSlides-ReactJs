import {useState, useContext, createContext, useRef} from 'react'
import {v4 as uuid} from 'uuid'

// create the context
const SlidesContext = createContext()

// create context provider function
const NxtSlidesContextProvider = ({children, initialSlidesList}) => {
  // all the states are declared here...
  const [slidesList, setSlidesList] = useState(initialSlidesList)
  const [currSlideIndex, setCurrSlideIndex] = useState(0)
  const [editHeading, setEditHeading] = useState(false)
  const [editDescription, setEditDescription] = useState(false)
  const headingValue = useRef(slidesList[currSlideIndex].heading)
  const descriptionValue = useRef(slidesList[currSlideIndex].description)

  const changeCurrSlide = index => {
    setCurrSlideIndex(index)
  }

  const addNewSlide = () => {
    const newSlideObj = {
      id: uuid(),
      heading: 'Heading',
      description: 'Description',
    }

    // Two different splice methods for updating list
    // Method-1
    const newSlidesList = slidesList.toSpliced(
      currSlideIndex + 1,
      0,
      newSlideObj,
    )
    setSlidesList(newSlidesList)

    // Method-2
    // const newSlidesList = [...slidesList]
    // newSlidesList.splice(currSlideIndex + 1, 0, newSlideObj)
    // setSlidesList(newSlidesList)

    changeCurrSlide(currSlideIndex + 1)
  }

  const onClickHeading = () => {
    setEditDescription(false)
    setEditHeading(true)
  }
  const onClickDescription = () => {
    setEditHeading(false)
    setEditDescription(true)
  }

  const changeValue = e => {
    const {value, name} = e.target
    if (name === 'heading') {
      headingValue.current = value
    } else descriptionValue.current = value
    // headingValue.current = value

    const newSlideList = slidesList.map((each, i) => {
      if (i === currSlideIndex) {
        if (name === 'heading') {
          return {
            ...each,
            heading: headingValue.current,
          }
        }
        if (name === 'description') {
          return {
            ...each,
            description: descriptionValue.current,
          }
        }
      }
      return each
    })
    setSlidesList(newSlideList)
  }

  const exitInputMode = e => {
    const {name} = e.target
    if (name === ('heading-form' || 'description-form')) e.preventDefault()
    if (editHeading) setEditHeading(false)
    if (editDescription) setEditDescription(false)
    let newSlideList

    if (headingValue.current.trim() === '') {
      newSlideList = slidesList.map((each, i) => {
        if (i === currSlideIndex) {
          return {
            ...each,
            heading: 'Heading',
          }
        }
        return each
      })
      setSlidesList(newSlideList)
    }
    if (descriptionValue.current.trim() === '') {
      newSlideList = slidesList.map((each, i) => {
        if (i === currSlideIndex) {
          return {
            ...each,
            description: 'Description',
          }
        }
        return each
      })
      setSlidesList(newSlideList)
    }
  }

  // return the context with provider component
  return (
    <SlidesContext.Provider
      value={{
        // all the states and functions are avail to the components from here
        slidesList,
        setSlidesList,
        currSlideIndex,
        setCurrSlideIndex,
        changeCurrSlide,
        addNewSlide,
        editHeading,
        editDescription,
        onClickHeading,
        onClickDescription,
        changeValue,
        exitInputMode,
        // headingValue,
        // descriptionValue,
      }}
    >
      {children} {/* All the app components will render from here */}
    </SlidesContext.Provider>
  )
}

// custom named hook which returns and handles the context
function useSlidesContext() {
  const context = useContext(SlidesContext)
  if (context === undefined) {
    throw new Error('Context was used outside the Context Provider.')
  }
  return context
}

// export custom context hook and context provider
export {useSlidesContext, NxtSlidesContextProvider}
