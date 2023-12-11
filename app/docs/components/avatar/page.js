import Documentation from "@/components/layout/Documentation/Documentation"

import { Avatar } from "@kotapi/rad-ui"

import codeUsage from "./docs/codeUsage"

const AvatarDocs = () => {
    return <div>
        <Documentation title='Avatar' description={`Avatars are used to represent a user or a brand. They are used in the header, sidebar, and in the chat.`}>
            <Documentation.ComponentHero codeUsage={codeUsage}>
                <div className='flex space-x-2'>
                    <Avatar src="https://i.pravatar.cc/1000" />
                    <Avatar fallback="RU" />
                    <Avatar fallback="AA" />
                </div>
            </Documentation.ComponentHero>
            <Documentation.Section>


            </Documentation.Section>
        </Documentation>
    </div>
}

export default AvatarDocs;