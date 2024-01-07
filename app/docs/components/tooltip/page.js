const PAGE_NAME = 'TOOLTIP_DOCS'
import Documentation from "@/components/layout/Documentation/Documentation"


// import Tooltip from "@radui/ui/Tooltip";
import Text from "@radui/ui/Text"
import SEO from "../../docsIndex"
export const metadata = SEO.getMetadata(PAGE_NAME)

import codeUsage from "./docs/codeUsage"

const AvatarDocs = () => {
    return <div>
        <Documentation currentPage={PAGE_NAME} title='Avatar' description={`Avatars are used to represent a user or a brand. They are used in the header, sidebar, and in the chat.`}>
            <Documentation.ComponentHero codeUsage={codeUsage}>
                <div className='bg-gray-50 p-4 rounded-md'>
                    <div style={{ display: "flex", gap: 20 }}>
                        {/* <Tooltip content="Tooltip content"> */}
                        <Text>Hover Me</Text>
                        {/* </Tooltip> */}
                    </div>
                </div>
            </Documentation.ComponentHero>
            <Documentation.ComponentFeatures features={[
                "Adds a fallback if the image is not available",
                // "Accepts a custom fallback",
                "SSR compatible",
            ]} >

            </Documentation.ComponentFeatures>
        </Documentation>
    </div>
}

export default AvatarDocs;