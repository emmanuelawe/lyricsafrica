import Image from 'next/image'
import '../app/globals.css'
import Cover from '../public/cover.jpg'

const HomePage = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      
    {/* Mobile View */}
    <div className='w-50 h-50 px-4'>

      <p className='text-2xl text-white py-2'>Featured Lyrics</p>

    <Image src={Cover} alt="Cover Image"/>
    </div>

    <div className='w-50 h-50 px-4'>

      <p className='text-2xl text-white py-2'>Recent Lyrics</p>

    <Image src={Cover} alt="Cover Image"/>
    </div>
    </div>
  )
}

export default HomePage