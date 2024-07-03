import Link from 'next/link'
import React from 'react'
import Avatar from './Avatar'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <header className='bg-white justify-between text-gray-800 flex p-5 shadow-sm '>
        
        
        <Link className='flex items-center text-4xl font-thin' href="/">
        <Avatar seed='SportsMan'
        
        
        />
        <div  className=' space-y-2 pl-4'>

        <h1>Assistantists</h1>
        <h2 className='text-sm'>Train your AI</h2>
        
        </div>
        </Link>
        <div className='flex'>
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
      
        
        
        </header>
  )
}

export default Header