import React from 'react'
import { Logo } from '../assets/'

function Header() {
  return (
    <header className="grid grid-cols-2">

        <div>Logo</div>
        <div>Let's talk</div>
        <div className="col-span-2 bg-slate-500">Navigation</div>
    
    </header>
  )
}

export default Header