import React from 'react'
import { ExternalLink } from 'lucide-react'

interface Project {
  title: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    title: "Neural Networks from Scratch: A Step-by-Step Guide",
    description: "A comprehensive guide to building neural networks from the ground up, explaining core concepts and implementation details.",
    link: "https://colab.research.google.com/drive/1QnQLLoZ6yBpLaRCWgorLDh05ipGaXvlg?usp=sharing"
  },
  {
    title: "Creating a CNN for MNIST Dataset from Scratch",
    description: "An in-depth project on implementing a Convolutional Neural Network for the MNIST dataset without using high-level libraries.",
    link: "https://colab.research.google.com/drive/11XcqJn0Y5JzQ3cxKPy4vpuuN9B-J35jZ?usp=sharing"
  },
  {
    title: "CNNs using PyTorch: Advanced Techniques",
    description: "Exploring advanced CNN architectures and techniques using PyTorch, demonstrating practical applications in deep learning.",
    link: "https://colab.research.google.com/drive/1ftG9xNL9uiW5iXDpX5vnTy0fCX1_WBN7?usp=sharing"
  }
]

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 transition duration-300 ease-in-out hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4 text-gray-600">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black transition duration-300 ease-in-out flex items-center"
            >
              View Notebook <ExternalLink className="ml-1" size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects