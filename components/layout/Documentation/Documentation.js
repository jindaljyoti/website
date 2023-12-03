import { Text, Heading } from "@kotapi/rad-ui"


const Documentation = ({title="",children}) => {
    return <div>
        <Heading className="mb-4">{title}</Heading>
        <div>
            {children}
        </div>
    </div>
}

const Section = ({title="",children}) => {
    return <div>
        <Heading as="h6" className="mb-2 mt-8">{title}</Heading>
        <div className='mb-10'>
            {children}
        </div>
    </div>
}

Documentation.Section = Section;


export default Documentation;