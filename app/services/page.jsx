import ServiceHead from '@/components/Services/ServiceHead'
import ServiceList from '@/components/Services/ServiceList'
import ServiceText from '@/components/Services/ServiceText'
import RotatingShape from '@/components/Services/Shape'
import React from 'react'

function ServicePage() {
  return (
    <div className='text-neutral-500 relative'>
        <ServiceHead/>
        <RotatingShape className='absolute top-1/3 max-md:hidden -left-20' size={0.8}/>
        <ServiceList/>
        <ServiceText/>
    </div>
  )
}

export default ServicePage