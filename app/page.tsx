'use client'

import { Button, Heading } from "@kotapi/rad-ui"

import MusicAppPlayerDemo from './landingComponents/MusicAppPlayerDemo'
import ToolbarDemo from './landingComponents/ToolbarDemo'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <div className='p-10 h-full'>
        <div className='py-20 mb-10'>
          <div>
            <Heading className="text-center text-gray-1000">
              Build <span className='text-crimson-950'>Effortless</span>, No <span className='text-green-1000'>Compromise</span> <span className='text-blue-950'>UI</span>. <br /> Fast.
            </Heading>
            <div className='flex justify-center mt-3 space-x-2'>
              <Button color="blue" variant="soft" onClick={() => {
                location.href = '/playground'
              }}>Go to playground</Button>

              <Button color="blue" variant="ghost" onClick={() => {
                location.href = '/colors'
              }}>Check out Colors</Button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='text-gray-1000 p-10 mt-10 flex space-x-4'>
          <div>
            <MusicAppPlayerDemo/>
          </div>
          <div className='flex-1'>
            {/* Wide stuff here */}
            <ToolbarDemo/>
          </div>
        </div>
      </div>
    </div>
  )
}
