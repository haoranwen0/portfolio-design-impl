import { useEffect, useState } from "react"

import { backgrounds } from "./constants/backgrounds"

function App() {
  const [background, setBackground] = useState<undefined | string>(undefined)
  const [expandedBackground, setExpandedBackground] = useState<
    undefined | string
  >(undefined)

  useEffect(() => {
    console.log(background)
  }, [background])

  return (
    <div className={`w-full min-h-screen bg-black grid place-items-center`}>
      {backgrounds.map((item, index) => (
        <div
          key={index}
          className="w-full absolute top-0 left-0 p-8 w-full h-full bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: `url(${item.imgSrc})`,
            opacity:
              background === item.imgSrc || expandedBackground === item.imgSrc
                ? 0.45
                : 0
          }}
        />
      ))}

      <div className="w-full absolute top-0 left-0 p-8">
        <h1 className="text-white text-lg">Haoran Wen</h1>
      </div>

      <div className="flex justify-center items-center gap-4 z-10">
        {backgrounds.map((item, index) => (
          <div key={index}>
            <div
              className={`${
                expandedBackground === item.imgSrc ? "w-[32px] h-[256px]" : ""
              }`}
            />

            <div
              key={item.title}
              className={`group ${
                expandedBackground === item.imgSrc
                  ? "w-[80vh] z-10 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  : "w-[32px] h-[256px] relative"
              } ${
                expandedBackground === undefined
                  ? "hover:translate-y-[-16px]"
                  : ""
              } transition-all duration-500 rounded-md`}
              onMouseEnter={() => setBackground(item.imgSrc)}
              onMouseLeave={() => setBackground(undefined)}
              onClick={() => setExpandedBackground(item.imgSrc)}
              style={{
                backgroundImage: `url(${item.imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <span className="text-white text-sm text-center absolute top-[-2rem] left-[50%] translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-300 text-nowrap">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
