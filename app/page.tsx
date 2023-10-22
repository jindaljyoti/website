'use client'

import { Button } from "@kotapi/rad-ui"

export default function Home() {
  return (
    <div>
      <div className='text-gray-1000 font-bold text-2xl text-center mt-20 w-full'>
        Hello world, welcome to @kotapi/rad-ui, <br /> Build no compromise UI
      </div>
      <div className='flex justify-center mt-3 space-x-2'>
        <Button color="plum" variant="outline" onClick={() => {
          location.href = '/playground'
        }}>Go to playground</Button>

        <Button color="tomato" variant="solid" onClick={() => {
          location.href = '/colors'
        }}>Check out Colors</Button>
      </div>
    </div>
  )
}
