import PortfolioScroll from '@/components/portfolio/PortfolioScroll'
import PageHead from '@/components/ui/PageHead'
import React from 'react'

function PortfolioPage() {
  return (
    <div>
        {/* <PortfolioHead/> */}
        <PageHead arrowText='View portfolio'>
        <h1 className="text-5xl head servicesText font-semibold md:text-7xl text-black">
        Designing a <br /> Better <span className='font-extralight'> World Today</span>
        </h1>
        </PageHead>
        <PortfolioScroll/>
    </div>
  )
}

export default PortfolioPage