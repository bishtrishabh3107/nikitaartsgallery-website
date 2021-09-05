import React from "react"
import CenterScreen from "../atom/CenterScreen"
import LeftScreen from "../atom/LeftScreen"
import RightScreen from "../atom/RightScreen"

function FirstScreen() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-10 xl:grid-cols-10 xxl:grid-cols-10 gap-3 px-2 md:px-4 lg:px-6 xl:px-8 xxl:px-10">
      <div className="lg:col-start-1 lg:col-end-4 xl:col-start-1 xl:col-end-4 xxl:col-start-1 xxl:col-end-4 -mt-16">
        <LeftScreen />
      </div>
      <div className="lg:col-start-4 lg:col-end-8 xl:col-start-4 xl:col-end-8 xxl:col-start-4 xxl:col-end-8 -mt-16">
        <CenterScreen />
      </div>
      <div className="w-0 h-0 lg:w-full lg:h-full xl:w-full xl:h-full xxl:w-full xxl:h-full invisible lg:visible xl:visible xxl:visible lg:col-start-8 lg:col-end-11 xl:col-start-8 xl:col-end-11 xxl:col-start-8 xxl:col-end-11 -mt-16">
        <RightScreen />
      </div>
    </div>
  )
}

export default FirstScreen
