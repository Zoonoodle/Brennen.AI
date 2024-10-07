import React from 'react'
import { User } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <User className="mr-2" />
          <h1 className="text-2xl font-bold">Brennen's Deep Learning Portfolio</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#experience" className="hover:underline">Experience</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header