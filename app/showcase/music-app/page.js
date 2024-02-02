import MusicSidebar from './helpers/MusicSidebar'



// sections
import TopArtists from './helpers/sections/TopArtists'
import PlaylistHero from './helpers/sections/PlaylistHero'
const MusicAppPage = () => {
    return <div >


        <div className='flex h-full'>
            {/* Sidebar */}
            <MusicSidebar/>

            {/* Main Content */}
            <div className='flex-1'>
               
                <div>
                    {/*  */}
                    <PlaylistHero/>
                    <div className='p-4'>
                        <TopArtists/>
                    </div>
                </div>
            </div>
        </div>


    </div>
}

export default MusicAppPage