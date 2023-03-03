import Banner from '@/components/Banner'
import TopLyrics from '@/components/TopLyrics'
import '../app/globals.css'

const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <Banner/>
      <TopLyrics />
    </div>
  )
}

export default HomePage