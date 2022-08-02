import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AddCommentIcon from '@mui/icons-material/AddComment';
function Footer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14
        bg-gray-100 text-gray-600'>
           <div className='space-y-4 text-xs flex flex-col justify-center text-gray-800'>
               <div className=' text-base'>
               <h5 className='font-bold'>About</h5>
               <p>Yiran Xu 2022</p>
               <p>contact info:</p>
               <p>Phone 9499759197</p>
               <p>Email: yiranxu10@gmail.com</p>
               

               </div>
           </div>
           <div className='space-y-4 text flex flex-col justify-center ml-4 text-gray-800'>
               <div>
               <h5 className='font-bold text-xl'>Community</h5>
               <a href="mailto:yiranxu10@gmail.com">
                  <MailOutlineIcon />
               </a>
               <a href="https://www.linkedin.com/in/yiran-xu-9795781b5/">
                  <LinkedInIcon />
               </a>
               <a href="tel:9499759197">
                  <PhoneIphoneIcon />
               </a>
               <a href="sms://+19499759197">
                  <AddCommentIcon />
               </a>
               
               <p>Powered by Next.js</p>
               </div>
               
           </div>
       </div>
    )
}

export default Footer
