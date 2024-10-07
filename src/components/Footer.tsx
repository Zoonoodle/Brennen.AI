import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Linkedin size={24} />
          </a>
          <a href="mailto:nerdylabzz@gmail.com" className="hover:text-gray-400">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-center mt-4">&copy; {new Date().getFullYear()} Brennen's Deep Learning Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer