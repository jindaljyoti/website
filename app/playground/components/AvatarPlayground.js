import { Avatar } from "@kotapi/rad-ui"
import ColorLooper from "../helpers/ColorLooper"

const Playground = () => (
    <div >

        <div className='mt-4 space-y-2'>
            <ColorLooper title="Avatar">
                <div className='flex space-x-2'>
                    <Avatar fallback="RU"  />
                    <Avatar src="https://i.scdn.co/image/ab67706c0000da84cad72550aac7122c10823ffe" fallback="An"  />
                    <Avatar fallback="AB"  />
                    <Avatar fallback="MS"  />
                    <Avatar fallback="CB"  />
                </div>
            </ColorLooper>
        </div>
    </div>
);

export default Playground;