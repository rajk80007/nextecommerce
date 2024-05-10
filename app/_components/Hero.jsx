import React from 'react'

const Hero = () => {
  return (
    
    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-8 m-2 md:m-5 p-5'>
        <div className='order-2 lg:order-1 flex justify-center items-center flex-col'>

        <h2 className='text-center text-2xl font-bold pb-2 mb-2'>Heading.</h2>
        <div className=' lg:order-1 text-justify'>chitecto aperiam enim quae vel eos ea! Neque incidunt deleniti aliquam adipisci deserunt consequuntur labore voluptatum numquam eius provident. Quidem autem mollitia earum molestias dicta officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis quo in, sed odio blanditiis non. Voluptates harum debitis natus minima tempore soluta tenetur architecto hic consectetur, aliquam labore sequi?
        </div>
        </div>
        <div className='order-1 flex justify-center'>
            <img src="heroimg.jpg" alt="img" height={500} width={600} className='max-w-[100%] rounded-lg shadow-xl min-h-[350px] object-cover'/>
        </div>
    </div>
  )
}

export default Hero