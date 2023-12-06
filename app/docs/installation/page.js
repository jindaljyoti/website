const PAGE_NAME = 'INSTALLATION'

import SEO from "../docsIndex"
export const metadata = SEO.getMetadata(PAGE_NAME)



import Documentation from "@/components/layout/Documentation/Documentation"
import { Text, Heading, Link, Code } from "@kotapi/rad-ui"


const Introduction = ()=>{
    return  <Documentation currentPage={PAGE_NAME} title="Installation">
        <Documentation.Section title="First steps">
            <Text className="mb-2 text-gray-1000 font-light">
                It's super easy to get started with Rad UI. You can install it using npm or yarn.
            </Text>

            <Text className="mt-4 mb-1 font-medium">Using Yarn</Text>
            <Code>
                yarn add @kotapi/rad-ui
            </Code>

            {/*  */}

            <Text className="mt-4 mb-1 font-medium">Using npm</Text>
            <Code>
                npm install @kotapi/rad-ui --save
            </Code>
        </Documentation.Section>
    </Documentation>


}

export default Introduction