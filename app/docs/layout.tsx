import Navigation from "@/components/navigation/Navigation"

const Layout = ({children}:any)=>{
   
    return (
        <div data-accent-color="blue" className="px-4 pt-4 lg:flex space-x-2">
                <Navigation/>
                <div className='flex-1 lg:px-4 text-gray-1000'>
                    {children}
                </div>
        </div>
    )
}


export default Layout