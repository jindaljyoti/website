import Documentation from "@/components/layout/Documentation/Documentation"
import Accordion from "@radui/ui/Accordion"


import codeUsage from "./docs/codeUsage"


const AccordionDocs = () => {
    let items = [
        {
            title: "React",
            content: "React is a JavaScript library for building user interfaces."
        },
        {
            title: "Angular",
            content: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript."
        },
        {
            title: "Vue",
            content: "Vue.js is a progressive framework for building user interfaces."
        },


    ]
    return <div>
        <Documentation>
            <Documentation.ComponentHero codeUsage={codeUsage}>
               <div style={{width:"400px"}}>
               <Accordion items={items}>

</Accordion>
               </div>
            </Documentation.ComponentHero>

        </Documentation>
    </div>
}

export default AccordionDocs;