import Heading from "@radui/ui/Heading"
import Text from "@radui/ui/Text"



const Artist: React.FC = () => {
    return (
        <div>
            <img className='rounded-md' src='https://via.placeholder.com/150' alt='Album Cover' />
            <div>
                <Heading as="h4" className="!text-lg">Song Title</Heading>
                <Text as="h5" className="text-gray-800">Artist</Text>
            </div>
        </div>
    )
}

const TopArtists = () => {
    return (
        <div>
            <Heading as="h4" className="mb-4">Top Artists</Heading>
            <div>
                <div className='flex flex-wrap gap-4'>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                            <Artist key={index} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default TopArtists;
