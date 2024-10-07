import React from 'react'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Relevant Coursework</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Machine Learning Fundamentals</li>
          <li>Deep Learning and Neural Networks</li>
          <li>Applied Mathematics</li>
          <li>Linear Algebra</li>
          <li>Multivariable Calculus</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <ul className="list-disc list-inside">
          <li>Python, PyTorch</li>
          <li>Data Analysis with Pandas and NumPy</li>
          <li>Mathematical Modeling</li>
          <li>Neural Network Architecture Design</li>
          <li>Version Control (Git)</li>
          <li>Jupyter Notebooks and Google Colab</li>
        </ul>
      </div>
    </section>
  )
}

export default Experience