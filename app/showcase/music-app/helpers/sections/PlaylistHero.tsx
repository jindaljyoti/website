import React from 'react';
import Button from "@radui/ui/Button";
import Heading from "@radui/ui/Heading";
import Text from "@radui/ui/Text";
import Badge from "@radui/ui/Badge";

import RightArrow from "@/icons/RightArrow";


const PlaylistHero: React.FC<PlaylistHeroProps> = () => {

    const playlist = {
        title: 'The Summer Playlist',
        description: 'The best of summer hits from this decade. Enjoy the sun and the music!',
        cover: 'https://via.placeholder.com/150'
    }

    return (
        <div className="flex items-center justify-between bg-violet-400 p-20 !pl-4 !pt-4  relative overflow-hidden">

            <div className="gap-4 space-y-4">
                <div>
                    <div>
                        <input value="Search..." className='flex flex-1 items-center px-2 rounded-md border border-gray-400 text-gray-700' />
                    </div>

                </div>
                <img className='absolute right-5 -top-10' width="500" src="https://static.tvtropes.org/pmwiki/pub/images/rsz_album_36.png" />
                <div>
                    <Badge color="purple" className="mb-2" style={{ width: "130px", fontSize: "12px" }}>Party Collection</Badge>
                    <Heading as="h1" className="text-purple-950">{playlist.title}</Heading>
                    <Text as="h5" className="text-gray-1000 mb-4">{playlist.description}</Text>
                    <Button variant="solid" className="space-x-2"> <span>Play Now</span> <RightArrow /> </Button>
                </div>
            </div>

        </div>
    )
}

export default PlaylistHero;
