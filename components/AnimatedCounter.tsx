'use client';
import CountUp from 'react-countup'

const AnimatedCounter = ({ammount}: {ammount: number}) => {
  return (
    <div className='w-full'>
      <CountUp
      duration={2.75}
      decimals={2}
        decimal=','
        prefix='$'
      
        end={ammount}/>
    </div>
  )
}

export default AnimatedCounter