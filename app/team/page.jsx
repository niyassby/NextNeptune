import ServiceText from '@/components/Services/ServiceText'
import TeamImgaes from '@/components/Team/TeamImgaes'
import PageHead from '@/components/ui/PageHead'
import React from 'react'

function TeamPage() {
  return (
    <div className=''>
      <PageHead arrowText='Team section'>
        <h1 className="text-5xl head servicesText font-semibold md:text-7xl text-black">
        Meet our <br /> <span className='font-extralight'> Creative </span>team
        </h1>
        </PageHead>
      <TeamImgaes/>
      <ServiceText/>
    </div>
  )
}

export default TeamPage
