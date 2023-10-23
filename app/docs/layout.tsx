import Navigation from "@/components/navigation/Navigation"

const Layout = ({children}:any)=>{

    return (
        <div className="p-4">
            <div className='flex space-x-2'>
                <Navigation/>
                <div className='flex-1 px-4 text-gray-1000'>
                    {children}
                </div>
            </div>
        </div>
    )
}


export default Layout