"use client"
import CodeBlock from '../CodeBlock';

import { useState } from 'react'

import { Tabs } from "@kotapi/rad-ui"



const TabContainer = ({children}) => {
    return <div className='px-2'>
        {children}
    </div>
}

const initializeTabs = (codeUsage) => {
    const tabs = []

    for (const key in codeUsage) {
        if (Object.hasOwnProperty.call(codeUsage, key)) {
            const element = codeUsage[key];
            tabs.push({
                label: key,
                value: key,
                content: <CodeBlock>{codeUsage[key]?.code}</CodeBlock>,
            })
        }
    }

    return tabs

    console.log(tabs)

}


const ComponentHero = ({ children, codeUsage = {} }) => {
    const [activeTab, setActiveTab] = useState('tab1')
    console.log(codeUsage)
    const data = initializeTabs(codeUsage)

    return <div>
        <div className='bg-gradient-to-r from-indigo-900 to-purple-900 p-10 rounded-tl-md rounded-tr-md text-black flex items-center justify-center'>
            {children}
        </div>

        <div>
            <Tabs tabs={data} />
        </div>
    </div>

}

export default ComponentHero;