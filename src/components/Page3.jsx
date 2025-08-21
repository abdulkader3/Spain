import React from 'react'
import Card from './Card.jsx'
import { Link } from 'react-router'

const Page3 = () => {
  return (
    <>
    <div className="main w-full h-fit bg-[#a8a8a817] pb-[80px] ">
      <div className="w-full flex justify-center pt-[70px] ">
        <p className='text-[38px] font-bold'>Service You Can <span className='text-red-500'>Trust</span>, We Work For You</p>
      </div>

      <div className="w-full flex justify-center flex-wrap gap-10 mt-[60px] ">

        <Link to="#"> <Card IconName={'Photos/tools.png'}  title={'Plumbing'} details={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}/> </Link>
        <Link to="#"> <Card IconName={'Photos/mop.png'} title={'Flooring'} details={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}/> </Link>
        <Link to="#"> <Card IconName={'Photos/gutter.png'} title={'Gutter Cleaning'} details={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}/> </Link>
        <Link to="#"> <Card IconName={'Photos/Electrical.png'} title={'Electrical'} details={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}/> </Link>
        <Link to="#"> <Card IconName={'Photos/gardener.png'} title={'Lawn Care'} details={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}/> </Link>
        <Link to="#"> <Card IconName={'Photos/furniture.png'} title={'Furniture Assembly'} details={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}/> </Link>

      </div>
    </div>
      
    </>
  )
}

export default Page3
