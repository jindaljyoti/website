
"use client"
import { Button,  Heading } from "@kotapi/rad-ui"

const HeroSection = () => {
    return <div>
                <div className='py-20 mb-10'>
          <div>
            <Heading className="text-center text-gray-1000">
              Build <span className='text-green-950'>Effortless</span>, No <span className='text-crimson-900'>Compromise</span> <span className='text-blue-950'>UI</span>. <br /> Fast.
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
    </div>
}

export default HeroSection;