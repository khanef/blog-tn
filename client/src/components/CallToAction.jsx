import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className='flex-1 justify-center flex flex-col'>
            <h2 className='text-2xl'>
                want to learn more about Javascrip
            </h2>
            <p className='text-gray-500 my-2'>
                checkout these resources with 100 javascrip projects?
            </p>
            <Button gradientDuoTone='tealToLime' className='rounded-tl-xl rounded-bl-none'>
                Learn More
            </Button>
        </div>
        <div className='p-7 flex-1'>
            <img src='https://cloud.z.com/vn/wp-content/uploads/2024/01/Screenshot_1-6.png' />
        </div>
    </div>
  )
}
