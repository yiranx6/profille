import Image from "next/image"

function CardLeft({title, text, pic, time, courses}) {

    return (
        <div className = "w-5xl mt-20 md:max-w-7xl lg:max-w-full bg-gray-100" >
        <div class="container mx-auto mt-20 p-4 md:p-0 w-screen">
        <div class="shadow-lg flex flex-wrap w-full mx-auto">
        <div class={`bg-cover border w-full md:w-1/4 lg:w-1/2 h-64 md:h-auto`} >
          <Image src={pic} width={100} height={80}  layout="responsive"></Image>
       </div>
    {/* <!-- Card body --> */}
    <div class="bg-white w-full md:w-3/4 lg:w-1/2">
      {/* <!-- Card body - outer wrapper --> */}
      <div class="h-full mx-auto px-6 md:px-0 md:-pt-6 md:-ml-6 relative">
        {/* <!-- Card body - inner wrapper --> */}
        <div class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap lg:flex-wrap items-center">
          {/* <!-- Card title and subtitle --> */}
          <div class="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left md:pr-40 ">
            <h3 className=" text-xl md:text-2xl lg:text-4xl">{title}</h3>
            <p class="mb-0 mt-3 text-md md:text-lg lg:text-xl text-grey-dark lg:pl-5 italic">{time}</p>
            <hr class="w-1/4 md:ml-0 mt-4  border lg:hidden"/>
          </div>
          {/* <!-- ./Card title and subtitle --> */}
          
          {/* <!-- Card description --> */}
          <div class="w-full lg:w-3/5 lg:px-3">
            <text class="text-md md:text-lg lg:text-xl xl:text-2xl mt-4 lg:mt-0 text-justify md:text-left">
            {text}
            <ul>
               {courses ? 
               courses.map(c=>{
                   return (
                       <li key={c._id}>
                         <span className="font-bold">{c.course}</span>
                          {c.genre}
                       </li>
                   )
               }): "loading..."
               }
            </ul>
            </text>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    )
}

export default CardLeft
