import Image from 'next/image'
import '../app/globals.css'
import Cover from '../public/cover.jpg'

const HomePage = () => {
  return (
    <div className='flex flex-col'>
      
    {/* Mobile View */}
    <div className='relative px-4 h-[50vh] md:h-[70vh]'>

      <p className='absolute top-4 left-0 z-50 bg-[#2A95D9] font-bold pb-2
      p-3 rounded-br-xl text-xl text-white py-2 shadow-lg'>
        Featured Lyrics</p>
    <Image src={Cover} alt="Cover Image" fill
    sizes='100vw'
    style={{ objectFit: 'cover'}}
    className='rounded-xl'
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
  <p className="absolute bottom-6 left-0 md:bottom-8 text-white text-2xl md:text-4xl font-bold p-4">Calm Down</p>
  <p className="absolute bottom-0 left-0 text-white text-lg md:text-2xl font-semibold p-4">Rema</p>
    </div>
    
    </div>
  )
}

export default HomePage