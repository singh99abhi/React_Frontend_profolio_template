import React from 'react'
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const links = [
  {
    href: 'https://twitter.com',
    label: 'Twitter',
    icon: <FaTwitter className="h-8 w-8 text-blue-500" />,
  },
  {
    href: 'https://youtube.com',
    label: 'YouTube',
    icon: <FaYoutube className="h-8 w-8 text-red-600" />,
  },
  {
    href: 'https://github.com',
    label: 'GitHub',
    icon: <FaGithub className="h-8 w-8 text-gray-800 dark:text-gray-200" />,
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: <FaInstagram className="h-8 w-8 text-pink-500" />,
  },
]

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-16 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          Contact Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          Let’s connect! Find me on these platforms:
        </p>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transform transition duration-300"
            >
              {link.icon}
              <span className="mt-3 text-lg font-medium text-gray-900 dark:text-gray-200">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
