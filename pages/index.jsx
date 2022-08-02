import Head from 'next/head'
import Toolbar from "../components/Toolbar"
import Time from "../components/Time"
import CardLeft from "../components/CardLeft"
import Footer from "../components/footer"
import {Transition} from '@headlessui/react'
import Image from "next/image"


import { useState, useEffect, useRef } from "react"
import CardRight from "../components/CardRight"

 function Home({ data }) {

  const [personalData, setPersonalData] = useState({})
  const [isShowing, setisShowing] = useState(false)
  const [secondCard, setSecondCard] = useState(false)
  const [thirdCard, setThirdCard] = useState(false)
  const myRef = useRef(null)
  const clickBtn = () =>{
    setisShowing(true);
    
    scrollToElement();
  }
  const scrollToElement = () => myRef.current.scrollIntoView()

  useEffect(() => {
    setPersonalData(data);
    window.addEventListener("scroll", (e)=>handleNavigation(e))
    return () => {
        window.removeEventListener("scroll", (e) => handleNavigation(e));
    }
}, [personalData]);

const handleNavigation = (e)=>{
    if(window.scrollY >=1){
        setisShowing(true);
    }else{
        setisShowing(false);
        setSecondCard(false);
        setThirdCard(false);
    }
    if(window.scrollY > 400){
      setSecondCard(true);
    }
    if(window.scrollY > 600){
      setThirdCard(true);
    }
}

  return (
  <div className="overflow-none">
    <header className="text-black top-0 bottom-0 left-0 w-full h-full">
       <div className='place-content-center justify-center sticky z-50'> 
        </div>
    </header>
    <Toolbar 
    />
    <video muted loop autoPlay className="absolute top-0 left-0 object-cover w-full h-2/3 md:h-4/5 lg:h-screen -z-50 flex-shrink" >
      <source src="/video.mp4" type="video/mp4"/>
    </video>
    <main className="mt-5 flexplace-content-center justify-center">
      <div className="border-indigo-4 ">
        <div className="flex  place-content-center justify-center">
        <Image src= "/me2.jpg" className="rounded-full" width={220} height={250} ></Image>
        </div>
        <Time/>
      </div>
      <div className=" flex first-letter:place-content-center justify-center">
        <button 
        class="bg-blue-500 hover:bg-blue-700 mt-8 text-white font-bold py-2 px-4 rounded-full lg:text-3xl lg:p-8 lg: m-20"
        onClick={clickBtn}
        >
          Click to Explore
      </button>
      </div>
      </main>
      <cards className="grid grid-cols-1 flex-shrink">
      <div  ref={myRef} className="lg: self-center">
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
        title ={personalData.data.title}
        pic={personalData.data.image}
        courses= {personalData.data.classes}
        /> }
        </Transition>
      </div>

      <div className="w-full place-self-end" myRef={myRef}>
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
        title ={personalData.skills.title}
        pic={personalData.skills.image}
        courses= {personalData.skills.classes}
        />
        )
        }
        </Transition>
      </div>
      
      <div w-3 h-3 ref={myRef} className="place-items-start">
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
        title ={personalData.more.title}
        pic={personalData.more.image}
        courses= {personalData.more.classes}
        /> }
        </Transition>
      </div>
      </cards>
  
    <footer className=" mt-40 align-baseline">
          <Footer/>
    </footer>
          
   </div>
  )
}

export async function getStaticProps(){
 
    const courses = await fetch('http://localhost:3000/api/personal')
    const data = await courses.json();

   return{
     props:{
       data,
     }
   }
  
}

export default Home
