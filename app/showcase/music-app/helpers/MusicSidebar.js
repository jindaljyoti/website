import HomeIcon from "@/icons/Home"

import Text from "@radui/ui/Text"
const MenuItem = ({children})=>{
    return <li className='flex items-center space-x-2'>{children}</li>
}

const MusicSidebar = () => {
   return <div className='bg-gray-200 p-2 border flex-none'>
                <h1>Logo comes here</h1>
                <ul>
                    <MenuItem><HomeIcon/> <Text>Home</Text></MenuItem>
                    <MenuItem><HomeIcon/> <Text>Explore</Text></MenuItem>
                    <MenuItem><HomeIcon/> <Text>Genres</Text></MenuItem>
                </ul>
            </div>
}

export default MusicSidebar;