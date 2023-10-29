'use client'

const colors = ["red", "tomato", "plum", "gray","sky","gold","bronze","indigo","grass","blue","teal","jade","amber","yellow","mint"]

import { Heading, Link, Separator } from "@kotapi/rad-ui"

const ColorLooper = ({ title = "", docsLink = "", inline=false, loop = true, children }) => {
    return <div className='pb-8'>
        <div className='flex space-x-3 items-baseline'>
            <Heading className="text-gray-1000" as="h6">{title}</Heading>
            <Link href={docsLink} >Docs</Link>
        </div>
        <Separator />
        <div  className='space-y-2 pt-4'>
            {loop &&
                colors.map((color, index) => {
                    return <div  key={index} data-accent-color={color}>
                        <div>{children}</div>
                    </div>
                })
            }
            {!loop &&
                <div data-accent-color="red">
                    <div>{children}</div>
                </div>
            }
        </div>

    </div>
}

export default ColorLooper;