import NavItem from './NavItem.js'

const sections = [
    {
        title: "Overview",
        items: [
            {
                title: "Introduction",
                path: "/docs/introduction"
            },
            {
                title: "Installation",
                path: "/docs/installation"
            },
            {
                title: "Usage",
                path: "/docs/usage"
            }
        ]
    }
]
const Navigation = () => {

    return <div>
        <div className='flex-none' style={{ width: "250px" }}>
            {sections.map((section, i) => {
                return <div key={i}>
                    <div className='px-2 py-2 font-bold text-md text-gray-1000'>{section.title}</div>
                    <ul>
                        {section.items.map((item, itemKey) => {
                            return <NavItem item={item} key={itemKey} />
                        })}
                    </ul>
                </div>
            })}
        </div>
    </div>
}

export default Navigation;