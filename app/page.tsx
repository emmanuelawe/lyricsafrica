import Banner from '@/components/Banner'
import TopLyrics from '@/components/TopLyrics'
import LyricsForm from '@/components/LyricsForm'
import '../app/globals.css'

const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <LyricsForm />
      <Banner/>
      <TopLyrics />
    </div>
  )
}

export default HomePage