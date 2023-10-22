import { Button } from "@kotapi/rad-ui"

const ButtonPlayground = () => (
    <div >
        <h1 className='text-2xl text-gray-1000 font-medium'>Buttons</h1>
        <div className='mt-4 space-y-2'>

            <div className='flex space-x-2'>
                <Button variant="solid">Button</Button>
                <Button variant="outline">Button</Button>
                <Button variant="soft">Button</Button>
                <Button variant="ghost">Button</Button>
            </div>

            <div className='flex space-x-2' data-accent-color="plum">
                <Button variant="solid">Button</Button>
                <Button variant="outline">Button</Button>
                <Button variant="soft">Button</Button>
                <Button variant="ghost">Button</Button>
            </div>

            <div className='flex space-x-2' data-accent-color="gray">
                <Button variant="solid">Button</Button>
                <Button variant="outline">Button</Button>
                <Button variant="soft">Button</Button>
                <Button variant="ghost">Button</Button>
            </div>

            <div className='flex space-x-2' data-accent-color="crimson">
                <Button variant="solid">Button</Button>
                <Button variant="outline">Button</Button>
                <Button variant="soft">Button</Button>
                <Button variant="ghost">Button</Button>
            </div>
            
        </div>
    </div>
);

export default ButtonPlayground;