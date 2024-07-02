import Header from '@/components/Header';
import React from 'react'

function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        
        <Header/>

    <div>
        
        Side
        <div>{children}</div>
        </div>


    </div>
  )
}

export default AdminLayout