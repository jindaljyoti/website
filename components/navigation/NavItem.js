"use client"


import { useRouter } from 'next/navigation'

const NavItem = ({ item, path }) => {
    const router = useRouter()

    const isCurrentPath = path === item?.path;
    const baseItemClasses = "block px-3 py-2 text-sm  rounded-2xl mb-0.5 cursor-pointer"
    const activeClasses = isCurrentPath ? 'bg-plum-300 font-medium text-gray-1000' : 'font-light text-gray-950 hover:bg-plum-100'



    const handleClick = (e) => {
        e.preventDefault()
        router.push(item?.path)
    }

    return <a className={`${baseItemClasses} ${activeClasses}`} onClick={handleClick}>{item?.title}</a>

}

export default NavItem;