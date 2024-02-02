const ShowCase = ({children})=>{
    return <div className='p-4 min-h-screen text-gray-1000'>
        <div>
            Menu
        </div>
        <div>
        {children}
        </div>
    </div>
}

export default ShowCase