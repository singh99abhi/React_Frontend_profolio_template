import React from 'react'


interface CardProps{
    title:string,
    description:string,
    image:string,
    link:string
}

const Card = ({title,description,image,link}:CardProps) => {
  return (
    <div className='max-w-sm mx-auto m-[1rem] bg-[#1A1C1E] rounded-lg shadow-md overflow-hidden'>
        <img src={image} alt={title} className='w-full h-48 object-cover' />

        <div className="p-6"><h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        </div>
        <a href={link} className='inline-block px-4 py-2 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-600 hover:text-white transition duration-200'>
            Learn Man
        </a>

    </div>
  )
}

export default Card