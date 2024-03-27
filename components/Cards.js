import React from 'react'
import Image from 'next/image'

const Cards = () => {
  return (
//     <div className="hero min-h-screen bg-base-200">
//   <div className="hero-content text-center">
//     <div className="max-w-md">

      
<section className="h-[calc(100vh-64px)] w-full flex items-center justify-center relative z-10">
    <div className="p-24 max-w-screen-lg mx-auto">
        <h1 className="mb-4 text-lg font-semibold text-white text-center leading-3">Services</h1>
        <p className="font-lato mb-24 text-center text-white">All your digital needs... covered.</p>
        <div className="grid grid-cols-3 gap-x-8">
            <div className="relative">
                <div className="w-140 h-140 bg-black">
                    <Image
                    src="/https://i.pinimg.com/564x/4f/12/af/4f12af20dae5179cf60a5057da761473.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    />
                    <h2 className="font-semibold text-lg mb-2 text-white">Graphic Design</h2>
                    <p className="font-lato text-secondary leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, debitis?</p>
                </div>
            </div>
            <div className="relative">
                <div className="w-140 h-140 bg-black">
                <Image
      src="/https://i.pinimg.com/564x/4f/12/af/4f12af20dae5179cf60a5057da761473.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
                    <h2 className="font-semibold text-lg mb-2 text-white">Web Development</h2>
                    <p className="font-lato text-secondary leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, debitis?</p>
                </div>
            </div>
            <div className="relative">
                <div className="w-140 h-140 bg-black">
                <Image
      src="/https://i.pinimg.com/564x/4f/12/af/4f12af20dae5179cf60a5057da761473.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
                    <h2 className="font-semibold text-lg mb-2 text-white">App Development</h2>
                    <p className="font-lato text-secondary leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, debitis?</p>
                </div>
            </div>
        </div>
    </div>
</section>

//     </div>
//   </div>
// </div>
  )
}

export default Cards



