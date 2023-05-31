import Alex from "./Alex"
import Image from "next/image";
import Link from 'next/link'
import {useState, useEffect} from 'react'
const resumeLink = "https://drive.google.com/file/d/1xKuOjNmlRqGm0VVLpI0tUOsnM5ssPD6O/view?usp=sharing"
const rlink = "https://docs.google.com/document/d/e/2PACX-1vQpg_X7Vv_9Q0D6Jh_zHk9zVCH49XALaJ1EC8plLehDANluFbixFRoY545Q7JXm1EPq86P-t_nChP1S/pub"
function Toolbar() {
      //construct the scroll on the top
    const [btn, setBtn] = useState(false);
    const [y, setY] = useState(false);
    const [showPdf, setShowPdf] = useState(false);

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
       
        <header key="outer"
                    className={`sticky backdrop-filter grid grid-cols-2 
                                    ${y ? "bg-white" : 'bg-none'} 
                                    ${y ? "text-black" : "text-gray-600"}
                                    shadow-md p-5
        md:px-10 top-0 flex flex-row md:block z-50`}   
        >
            {/* <div className="relative"> */}
            <div className="flex justify-between">
            
            <div className="flex space-x-7">
                <a href="#" className="flex items-center py-4 px-2">
                    <div className="w-20 h-20">
                       <Alex/> 
                    </div>
                    <div className="italic text-3xl md:font-bold lg:font-extrabold lg:text-4xl ">
                       Yiran(Alex) Xu
                    </div> 
               </a>
            </div>

            <div className={`hidden md:flex text-xl items-center font-semibold  text-black-700 ${!y ? 'text-black' : 'text-gray-500' }` }>
                        <button onClick={openPDF}
							className={`ml-4 md:text-xl lg:text-2xl hover:bg-gray-300 rounded-md transition duration-300 hover:text-blue-700`}
							>Resume</button>
                        {/* <Link  
                            hidden={true}
							href="/blogs"
                            style={{color : 'red'}}
							><a className={`ml-4 mr-4 md:text-xl lg:text-2xl hover:bg-gray-300 rounded-md transition duration-300 hover:text-blue-700`}>Blogs </a>
                        </Link> */}
                    
						<Link
							href="mailto:yiranxu10@gmail.com"
							className={`ml-4 text-md md:text-xl lg:text-2xl font-semibold rounded-3xl hover:text-blue-700 hover:bg-gray-300 transition duration-300`}> Email Me
                        </Link>
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
                <ul className="divide-y-1 divide-gray-400 text-base md:text-lg lg:text-2xl">
                <li className="space-y-1 hover:bg-slate-300 rounded-sm hover:font-bold">
                <Link href="mailto:yiranxu10@gmail.com" className="text-base md:text-lg lg:text-2xl" > 
                    Email Me
                </Link>
                </li>
                {/* <li className="space-y-2 hover:bg-slate-300 hover:font-bold ">
                    <Link href="/blogs" hidden={true} className="text-base md:text-lg lg:text-2xl">
                    Blogs
                    </Link>
                </li>  */}
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
            (<div className="justify-center items-center">
                <button className=" px-2 place-self-end font-bold hover:bg-red-600 hover:text-white bg-white" onClick={openPDF}>&#215;</button>
                <iframe 
                title="my resume"
                src = "https://docs.google.com/document/d/e/2PACX-1vRdSbsT7ftz9oW7OKiay169MaRXUXEWgmBDg8BcaKoBxhxiWhEyNENQpahAyuY8Ig/pub?embedded=true"
                
                // src = "https://drive.google.com/file/d/1IiMRmKzq6x2ypz6mCL4lUXb6q9Jro8m9/view?usp=sharing"
                className="relative m-auto w-screen h-screen mx-auto"></iframe>
                    {/* <PDFViewer/> */}
            </div>) : (
         <div>
        </div>)} 
        </div>
        </div>
    </header>
        
    )
}

export default Toolbar
