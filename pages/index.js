import AboutWidget from '../components/AboutWidget'
import GalleryWidget from '../components/GalleryWidget'

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-5 hidden lg:block">
          <div className="h-full rounded-2xl border border-white/3 p-6"></div>
        </div>
        <div className="col-span-12 lg:col-span-7 flex flex-col items-stretch">
          <AboutWidget />
          <GalleryWidget />
        </div>
      </div>
    </div>
  )
}