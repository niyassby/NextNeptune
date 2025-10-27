import useSmoothScroll from '@/components/Util/scrollSmooth'

function Protect({children}) {
    useSmoothScroll()
    
  return children
}

export default Protect