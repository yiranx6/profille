import Toolbar from "../components/Toolbar"
import Time from "../components/Time"
import CardLeft from "../components/CardLeft"
import Footer from "../components/Footer"
import { Transition } from '@headlessui/react'
import Personal from '../data/personal';
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import CardRight from "../components/CardRight"

function Home({ data }) {
  const [personalData, setPersonalData] = useState({})
  const [isShowing, setisShowing] = useState(false)
  const [secondCard, setSecondCard] = useState(false)
  const [thirdCard, setThirdCard] = useState(false)
  // const [currTime, setCurrTime] = useState(serverDateTime);

  const myRef = useRef(null)

  const clickBtn = () => {
    setisShowing(true)
    console.log(isShowing)
    scrollToElement()
  }

  const scrollToElement = () => myRef.current.scrollIntoView()

  useEffect(() => {
    setPersonalData(data)
    window.addEventListener("scroll", handleNavigation)
    return () => {
      window.removeEventListener("scroll", handleNavigation)
    }
  }, [personalData])

  const handleNavigation = () => {
    if (window.scrollY >= 1) {
      setisShowing(true)
    } else {
      setisShowing(false)
      setSecondCard(false)
      setThirdCard(false)
    }
    if (window.scrollY > 20) {
      setSecondCard(true)
    }
    if (window.scrollY > 400) {
      setThirdCard(true)
    }
  }

  return (
    <div className="flex flex-col min-h-screen overflow-none">
      <header className="text-black top-0 bottom-0 left-0 w-full">
        <div className='place-content-center justify-center sticky z-50'>
        </div>
      </header>
      <Toolbar />
      <video muted loop autoPlay className="absolute top-0 left-0 bottom-9 object-cover w-full h-2/3 md:h-4/5 lg:h-screen -z-50 flex-shrink">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <main className="flex-grow mt-5 flexplace-content-center justify-center">
        <div className="border-indigo-4 ">
          <div className="flex  place-content-center justify-center">
            <Image alt ="myPic" src="/me2.jpg" className="rounded-full" width={220} height={250} />
          </div>
          {/* <Time dateTime={currTime} /> */}       
        </div> 
        <div className="flex mt-64 md:mt-32 lg:mt-28 first-letter:place-content-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 mt-8 text-white font-bold py-2 px-4 rounded-full lg:text-3xl lg:p-8 lg: m-20"
            onClick={clickBtn}
          >
            Click to Explore
          </button>
        </div>
      </main>
      <div className="grid grid-cols-1 flex-shrink">
        <div ref={myRef}>
          <Transition
            show={isShowing}
            enter="transition ease-in duration-1000 transform"
            enterFrom="opacity-0 -translate-x-full"
            enterTo="opacity-100 -tranlate-x-0"
            leave="transition ease-out duration-1000 transform"
            leaveFrom="opacity-100 -translate-x-0"
            leaveTo="opacity-0 -translate-x-full"
          >
            {personalData.data &&
              <CardLeft
                time={personalData.data.time}
                text={personalData.data.text}
                title={personalData.data.title}
                courses={personalData.data.classes}
              />}
          </Transition>
        </div>

        <div className="w-full place-self-end" ref={myRef}>
          <Transition
            show={isShowing && secondCard}
            enter="transition ease-out duration-1000 delay-1000 transform"
            enterFrom="opacity-0 translate-x-10"
            enterTo="opacity-100 tranlate-x-full"
          >
            {personalData.skills && (
              <CardRight
                time={personalData.skills.time}
                text={personalData.skills.text}
                title={personalData.skills.title}
                pic={personalData.skills.image}
                courses={personalData.skills.classes}
              />
            )}
          </Transition>
        </div>

        <div className="place-items-start">
          <Transition
            show={isShowing && thirdCard}
            enter="transition ease-in duration-1000 delay-1000 transform"
            enterFrom="opacity-0 -translate-x-full"
            enterTo="opacity-100 -tranlate-x-0"
          >
            {personalData.more &&
              <CardLeft
                time={personalData.more.time}
                text={personalData.more.text}
                title={personalData.more.title}
                pic={personalData.more.image}
                courses={personalData.more.classes}
              />}
          </Transition>
        </div>
      </div>

      <footer className="align-baseline">
        <Footer />
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  try {
    // const courses = await fetch("www.alexisxu.com/api/data");
    // if (!courses.ok) {
    //   throw new Error("Failed to fetch data");
    // }
    const data = Personal
    return {
      props: {
        data
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
}

export default Home
