'use client'

import { Button, Heading } from "@kotapi/rad-ui"

import MusicAppPlayerDemo from './landingComponents/MusicAppPlayerDemo'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <div className='p-10 h-full'>
        <div className='py-20 mb-10'>
          <div>
            <Heading className="text-center text-gray-1000">
              <span className='text-crimson-950'>Build</span> no compromise <span className='text-blue-950'>UI</span> <br /> Fast.
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
        <div className='text-gray-1000 p-10 mt-10'>
          <MusicAppPlayerDemo/>
        </div>
      </div>
    </div>
  )
}
