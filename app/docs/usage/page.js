const PAGE_NAME = 'USAGE'

import Documentation from "@/components/layout/Documentation/Documentation"


import Text from "@radui/ui/Text"
import Heading from "@radui/ui/Heading"
import Link from "@radui/ui/Link"

import SEO from "../docsIndex"
export const metadata = SEO.getMetadata(PAGE_NAME)



const Usage = () => {
    return <Documentation currentPage={PAGE_NAME} title="Usage">
        <Documentation.Section title="Importing Rad UI">
            <Text className="mb-2 text-gray-1000 font-light">
                Let's take a look at how you can use Rad UI in your project. Importing Rad UI components is super easy. You can import the components you want to use from the library and use them.
            </Text>
            <Documentation.CodeBlock>
                {
                    `import { Button } from "@radui/ui"

const MyComponent = () => {
    return <Button>Click Me</Button>
}

export default MyComponent
`}
            </Documentation.CodeBlock>
        </Documentation.Section>


    </Documentation>


}

export default Usage