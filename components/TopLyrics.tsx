'use client'

import Image from "next/image"
import Gwa from '../public/gwa.jpg'

const TopLyrics = () => {
  return (
    <div className="my-8">
        {/* Add real data from Backend */}
        <p className='font-bold text-xl md:text-2xl mb-6 text-white uppercase'>
        Top Lyrics</p>
        <div>

        <div className="flex overflow-x-scroll  md:overflow-x-hidden scrollbar-hide snap-mandatory snap-x">
    
        <div className="flex flex-nowrap space-x-6 mx-auto">

        <div className="snap-center bg-[#2A95D9]/10 inline-block w-[24rem] max-w-sm rounded-xl items-center">
            <Image src={Gwa} alt='Top Lyrics Image' width={300} height={300} className="mx-auto pt-6"/>
            <p className="text-center pt-2 font-bold text-xl uppercase">Gwagwalada</p>
            <p className="text-center pb-6 font-semibold text-base">BNXN ft Kizz Daniel & Seyi Vibez</p>
        </div>

        <div className="snap-center bg-[#2A95D9]/10 inline-block w-[24rem] max-w-sm rounded-xl items-center">
            <Image src={Gwa} alt='Top Lyrics Image' width={300} height={300} className="mx-auto pt-6"/>
            <p className="text-center pt-2 font-bold text-xl uppercase">Gwagwalada</p>
            <p className="text-center pb-6 font-semibold text-base">BNXN ft Kizz Daniel & Seyi Vibez</p>
        </div>

        <div className="snap-center bg-[#2A95D9]/10 inline-block w-[24rem] max-w-sm rounded-xl items-center">
            <Image src={Gwa} alt='Top Lyrics Image' width={300} height={300} className="mx-auto pt-6"/>
            <p className="text-center pt-2 font-bold text-xl uppercase">Gwagwalada</p>
            <p className="text-center pb-6 font-semibold text-base">BNXN ft Kizz Daniel & Seyi Vibez</p>
        </div>

        </div>
        </div>
        </div>
        
        

    </div>
  )
}

export default TopLyrics