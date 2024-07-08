import React from 'react'
import VerticalProgressBar from './subcomponents/VerticalProgress'

const Text = () => {
  return (
    <div className="relative">
      <VerticalProgressBar/>
      <div id="section1" className="h-screen bg-red-100">
        Section 1
      </div>
      <div id="section2" className="h-screen bg-blue-100">
        Section 2
      </div>
      <div id="section3" className="h-screen bg-green-100">
        Section 3
      </div>
      <div id="section4" className="h-screen bg-yellow-100">
        Section 4
      </div>
    </div>
  )
}

export default Text