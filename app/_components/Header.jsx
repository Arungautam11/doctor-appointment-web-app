import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    const Menu=[
        {
            id:1,
            name:'Home',
            path:'/'
        },
        {
            id:2,
            name:'About Us',
            path:'/about-us'
        },
        {
            id:3,
            name:'Services',
            path:'/services'
        },
        {
            id:4,
            name:'Pricing',
            path:'/pricing'
        },
        {
            id:5,
            name:'Gallery',
            path:'/gallery'
        },
        {
            id:6,
            name:'Blogs',
            path:'/blogs'
        },
        {
            id:7,
            name:'Contact Us',
            path:'/contact-us'
        },
    ]
  return (
    <div className='flex items-center justify-between p-4 shadow-sm container'>
      <div className='flex items-center gap-10'>
        <Image src='/logo.svg' alt='logo'
        width={180} height={80}
        />
        <ul className='md:flex gap-8 hidden'>
            {Menu.map((item,index)=>(
                <Link href={item.path}>
                <li className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>{item.name}</li>
                </Link>
            ))}
        </ul>
      </div>
      <Button>Make Appointment</Button>
    </div>
  )
}

export default Header
