import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="mb-4">
          I'm a math-oriented, avid machine learning student with a passion for understanding 
          the fundamental mathematical concepts behind neural networks. My focus lies in 
          exploring linear algebra, multivariable calculus, and matrix calculus as they 
          relate to machine learning algorithms.
        </p>
        <p>
          My journey involves translating this deep mathematical understanding into practical 
          code implementations. In my notebooks, I dive deep into the intricacies of neural 
          networks, demonstrating how these mathematical principles come to life in real-world 
          applications. I'm constantly striving to bridge the gap between theoretical knowledge 
          and practical implementation, pushing the boundaries of what's possible in machine learning.
        </p>
      </div>
    </section>
  )
}

export default About