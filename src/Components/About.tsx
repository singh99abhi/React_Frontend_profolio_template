import React from 'react'

const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 transition-transform hover:scale-[1.01]">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          About <span className="text-blue-600">Abhishek</span>
        </h2>
        
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, omnis excepturi! 
          Dicta doloribus tenetur voluptas obcaecati! Adipisci quia deserunt exercitationem autem! 
          Debitis quaerat alias ipsum provident. Laudantium, placeat? Delectus, laborum!
        </p>
        
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sint aut magni, 
          enim repellendus veniam amet placeat architecto a nesciunt harum quidem, 
          iusto maiores quas beatae quam! Iste, quam molestias?
        </p>
      </div>
    </section>
  )
}

export default About
