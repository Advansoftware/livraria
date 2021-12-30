import React, { useEffect, useRef, useState } from "react"
import { ReactReader } from "react-reader"
import Navbar from "./bar/Navbar"

const Epub = () => {
  // And your own state logic to persist state
  const [location, setLocation] = useState(null)
  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
  }
  const [size, setSize] = useState(100)
  const renditionRef = useRef(null)
  const changeSize = (newSize) => {
    setSize(newSize)
  }
  useEffect(() => {
    if (renditionRef.current) {
      renditionRef.current.themes.fontSize(`${size}%`)
    }
  }, [size])
  return (
    <>

      <Navbar />
      <div style={{ height: "90vh", marginTop: '3rem' }}>
        <ReactReader
          url="http://localhost:3000/Invencrivel.epub"
          getRendition={(rendition) => {
            renditionRef.current = rendition
            renditionRef.current.themes.fontSize(`${size}%`)
          }}
        />
      </div>
      <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', left: '1rem', textAlign: 'center', zIndex: 1}}>
        <button onClick={() => changeSize(Math.max(80, size - 10))}>-</button>
        <span>Current size: {size}%</span>
        <button onClick={() => changeSize(Math.min(130, size + 10))}>+</button>
      </div>
    </>
  )
}

export default Epub