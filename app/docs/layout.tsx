import Navigation from "@/components/navigation/Navigation"
import Callout from "@radui/ui/Callout"
import Link from "@radui/ui/Link"

const Layout = ({children}:any)=>{
   
    return (
        <div data-accent-color="blue" className="px-4 pt-4 lg:flex space-x-2">
                <Navigation/>
                <div className='flex-1 lg:px-4 text-gray-1000'>
                    <Callout color="green">
                        <div>
                        Rad UI is still under active development. You are free to use it in your projects, but expect breaking changes.  If you'd like to contribute to Rad UI, please check out <Link href="/docs/contributing/before-you-start">Getting Started</Link>
                        </div>
                    </Callout>
                    <div className='mt-2'>
                        {children}
                    </div>
                </div>
        </div>
    )
}


export default Layout