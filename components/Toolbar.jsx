import Alex from "./Alex"
import Image from "next/image";
import Link from 'next/link'
import { useRouter } from "next/router"
import {useState, useEffect} from 'react'
const resumeLink = "https://drive.google.com/file/d/1xKuOjNmlRqGm0VVLpI0tUOsnM5ssPD6O/view?usp=sharing"
const rlink = "https://docs.google.com/document/d/e/2PACX-1vQpg_X7Vv_9Q0D6Jh_zHk9zVCH49XALaJ1EC8plLehDANluFbixFRoY545Q7JXm1EPq86P-t_nChP1S/pub"
function Toolbar() {
      //construct the scroll on the top
    const [btn, setBtn] = useState(false);
    const [y, setY] = useState(false);
    const [showPdf, setShowPdf] = useState(false);
    const toBlog = () =>{
        router.push({
            pathname: "/blogs"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", (e)=>handleNavigation(e))
        return () => {
            window.removeEventListener("scroll", (e) => handleNavigation(e));
        }
    }, [y]);

    const handleNavigation = (e)=>{
        if(window.scrollY >=1){
            setY(true);
        }else{
            setY(false);
        }
    }

    const showBar = () => {
        setBtn(!btn);
    }

    const openPDF = () =>{
        setShowPdf(!showPdf);
        setY(true);
    }

    return (
       
        <header classname="outer"
                    className={`sticky backdrop-filter grid grid-cols-2 
                                    ${y ? "bg-white" : 'bg-none'} 
                                    ${y ? "text-black" : "text-gray-600"}
                                    shadow-md p-5
        md:px-10 top-0 flex flex-row md:block z-50`}   
        >
            {/* <div className="relative"> */}
            <div className="flex justify-between">
            
            <div className="flex space-x-7">
            <Link href="#" className="flex items-center py-4 px-2">
                   <div className="w-20 h-20">
                       <Alex/> 
                   </div>
                   <div className="italic text-3xl md:font-bold lg:font-extrabold lg:text-4xl ">
                       Yiran(Alex) Xu
                    </div> 
               </Link>
            </div>
            <div className={`hidden md:flex items-center text-red-700 space-x-1 ${!y ? 'text-black' : 'text-gray-500' }`}>
						<button onClick={openPDF}
							className={`py-4 px-4 text-md md:text-xl lg:text-2xl font-semibold rounded-3xl hover:text-blue-700 hover:bg-gray-300 transition duration-300`}
							>Resume</button>
						<a  
                            hidden={true}
							href="/blogs"
							className="py-4 px-6 text-md md:text-xl lg:text-2xl font-semibold rounded-3xl hover:text-blue-700 hover:bg-gray-300 transition duration-300"
							>Blogs</a>
						<a
							href="mailto:yiranxu10@gmail.com"
							className="py-4 px-2 text-md md:text-xl lg:text-2xl font-semibold rounded-3xl hover:text-blue-700 hover:bg-gray-300 transition duration-300"
							>Email Me</a>
					</div>
                    {/* hidden mobile part */}
            </div>
             <button className={`flex md:hidden items-center justify-end`} onClick={showBar}>
                {!btn ? (<Image src ='/hamberger.svg' height={20} width={20} />) 
                      :(<Image src ='/french-fries.svg' height={25} width={25} />)}
            </button>
            <div >
            {btn && 
                (<div className="md:hidden items-center italic text-red-700 text-bold w-screen">
                <ul className="divide-y-2 divide-gray-400 text-base md:text-lg lg:text-2xl">
                <li className="space-y-2 hover:bg-slate-300 rounded-sm hover:font-bold">
                <a href="mailto:yiranxu10@gmail.com" className="text-base md:text-lg lg:text-2xl" > 
                    Email Me
                </a>
                </li>
                <li className="space-y-2 hover:bg-slate-300 hover:font-bold ">
                    <a href="/blogs" hidden={true} className="text-base md:text-lg lg:text-2xl">
                    Blogs
                    </a>
                </li> 
                <li className="space-y-2 text-md md:text-lg lg:text-2xl hover:bg-slate-300 rounded-sm hover:font-bold">
                    <button href="" className="" onClick={openPDF}>
                    Resume
                    </button>
                </li> 
                </ul>
                </div>)
            }
        
        <div className="flex justify-center ml-80 md:ml-1">
        {showPdf ? 
            (<div className="justify-center mx-auto ml-1">
                <button className=" px-2 place-self-end font-bold hover:bg-red-600 hover:text-white bg-white" onClick={openPDF}>&#215;</button>
                <iframe src = "https://docs.google.com/document/d/e/2PACX-1vQpg_X7Vv_9Q0D6Jh_zHk9zVCH49XALaJ1EC8plLehDANluFbixFRoY545Q7JXm1EPq86P-t_nChP1S/pub"
                        className="relative overflow-auto w-screen h-screen  mx-auto"></iframe>
            </div>) : (
         <div>
        </div>)} 
        </div>
        </div>
    </header>
        
    )
}

export default Toolbar
