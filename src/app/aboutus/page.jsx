import React from 'react'

const AboutUs = () => {
  return (
    <div>
         <h1 className='text-center text-6xl font-bold' >About Us</h1>
         <div className="px-16 py-16 bg-gray-300 mt-8">
         <div className="grid grid-cols-12 mx-w-[90%]  lg-max-w-[80%] mx-auto gap-5">
         <div className="col-span-12 md:col-span-6">
            <h1 className="text-3xl font-bold my-3">Our Mission</h1>
            </div>

            <div className=" col-span-6 md:col-span-4">
            <div className="color-white-500 block mb-10 text-1.1em">
                
                <p className='text-xl  text-bolder pt-7 pb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum provident ratione beatae praesentium eius ipsa dignissimos. Sint natus dolor deleniti voluptas repellat officia sequi, voluptate quae assumenda consequatur, sed voluptatem!</p>
            </div>

        </div>


            
         </div>
         </div>

         <div className="px-16 py-16 bg-gray-300 mt-8">
         <div className="grid grid-cols-12 mx-w-[90%]  lg-max-w-[80%] mx-auto gap-5">
         <div className="col-span-12 md:col-span-6">
            <h1 className="text-3xl  font-bold my-3">Our Vision</h1>
            </div>

            <div className=" col-span-6 md:col-span-4">
            <div className="color-white-500 block mb-10 text-1.1em">
                
                <p className='text-xl  text-bolder pt-7 pb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum provident ratione beatae praesentium eius ipsa dignissimos. Sint natus dolor deleniti voluptas repellat officia sequi, voluptate quae assumenda consequatur, sed voluptatem!</p>
            </div>

        </div>

        
            
         </div>
         </div>

    </div>
  )
}

export default AboutUs;