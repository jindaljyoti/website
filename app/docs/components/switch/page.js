const PAGE_NAME = 'SWITCH_DOCS'
import Documentation from "@/components/layout/Documentation/Documentation"


import Switch from "@radui/ui/Switch"
import SEO from "../../docsIndex"
export const metadata = SEO.getMetadata(PAGE_NAME)

import codeUsage from "./docs/codeUsage"

const SwitchDocs = () => {
    return <div>
        <Documentation currentPage={PAGE_NAME} title='Switch'>
            <Documentation.ComponentHero codeUsage={codeUsage}>
                <Switch>On</Switch>
            </Documentation.ComponentHero>
            {/* <Documentation.UnderConstruction/> */}
        </Documentation>
    </div>
}

export default SwitchDocs;