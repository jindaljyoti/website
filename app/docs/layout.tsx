import Navigation from "@/components/navigation/Navigation"

const Layout = ({children}:any)=>{
   
    return (
        <div data-accent-color="blue" className="p-4">
            <div className='lg:flex space-x-2'>
                <Navigation/>
                <div className='flex-1 lg:px-4 text-gray-1000'>
                    {children}
                </div>
            </div>
        </div>
    )
}


export default Layout