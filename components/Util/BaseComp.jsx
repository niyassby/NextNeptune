import { cn } from '@/lib/utils'
import React from 'react'

function BaseComp({className, children}) {
    
  return (
    <div className={cn("w-full h-full bg-black py-10",className)}>
        <div className='w-full h-full max-w-[80rem] 2xl:max-w-[85rem]  mx-auto px-4 sm:px-6 lg:px-8'>
          {children}
        </div>
    </div>
  )
}

export default BaseComp