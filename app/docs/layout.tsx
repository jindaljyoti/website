const Layout = ({children}:any)=>{

    const testItemClasses = "px-3 py-2 text-sm font-normal text-gray-1000 rounded-2xl !hover:bg-plum-50 mb-0.5 cursor-pointer"


    return (
        <div className="p-4">
        <div className='flex space-x-2'>
        <div className='flex-none' style={{width:"250px"}}>
            <div className='px-2 py-2 font-bold text-md text-gray-1000 '>
                Overview
            </div>
            <ul>
                <li className={`${testItemClasses} font-bold  bg-plum-300`}>
                    <a href='/docs/introduction'>Introduction</a>
                </li>
                <li className={`${testItemClasses}`}>
                    <a href='/docs/installation'>Installation</a>
                </li>
                <li className={`${testItemClasses}`}>
                    <a href='/docs/usage'>Usage</a>
                </li>
            </ul>
        </div>
        <div className='flex-1 px-4 text-gray-1000'>
            {children}
        </div>
        </div>
    </div>
    )
}


export default Layout