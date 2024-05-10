import React from 'react'

const Hero = () => {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-8 m-5 p-5'>
        <div className='order-2 lg:order-1 text-justify'>chitecto aperiam enim quae vel eos ea! Neque incidunt deleniti aliquam adipisci deserunt consequuntur labore voluptatum numquam eius provident. Quidem autem mollitia earum molestias dicta officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis quo in, sed odio blanditiis non. Voluptates harum debitis natus minima tempore soluta tenetur architecto hic consectetur, aliquam labore sequi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cumque non temporibus ducimus ipsum quasi reiciendis soluta adipisci, enim dignissimos esse autem quae, at suscipit odio? Rem illo ipsum repellat.
        Sint natus veniam iure esse, nisi excepturi repellendus enim et. Aut veritatis iure tempore. Suscipit voluptas quae accusantium sit magnam, provident dolores, et debitis iure incidunt optio doloremque hic inventore.
        </div>
        <div className='order-1'>
            <img src="heroimg.jpg" alt="img" className='rounded-lg shadow-xl'/>
        </div>
    </div>
  )
}

export default Hero