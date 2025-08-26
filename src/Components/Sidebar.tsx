import React from 'react'
import { FaHome, FaSearch, FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-20 bg-[#1a1c1e] text-gray-300 flex flex-col justify-between shadow-lg">
      {/* Top icons */}
      <ul className="flex flex-col items-center mt-6 space-y-8">
        <li className="group relative cursor-pointer">
          <FaHome size={22} className="hover:text-white transition" />
          <span className="absolute left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
            Home
          </span>
        </li>

        <li className="group relative cursor-pointer">
          <FaUser size={22} className="hover:text-white transition" />
          <span className="absolute left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
            Profile
          </span>
        </li>

        <li className="group relative cursor-pointer">
          <FaSearch size={22} className="hover:text-white transition" />
          <span className="absolute left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
            Search
          </span>
        </li>
      </ul>

      {/* Bottom icons */}
      <ul className="flex flex-col items-center mb-6 space-y-8">
        <li className="group relative cursor-pointer">
          <IoMdSettings size={22} className="hover:text-white transition" />
          <span className="absolute left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
            Settings
          </span>
        </li>

        <li className="group relative cursor-pointer">
          <FaUser size={22} className="hover:text-white transition" />
          <span className="absolute left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
            Account
          </span>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
