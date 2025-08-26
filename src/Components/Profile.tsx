import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import Tabs from './Tabs'

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState('https://placehold.co/2100x400')
  const [profileUrl, setProfileUrl] = useState('https://placehold.co/300')

  const handleBannerChange = (event: any) => {
    const file = event.target.files[0]
    if (file) {
      setBannerUrl(URL.createObjectURL(file))
    }
  }

  const handleProfileChange = (event: any) => {
    const file = event.target.files[0]
    if (file) {
      setProfileUrl(URL.createObjectURL(file))
    }
  }

  return (
    <div className="relative ml-[5rem] bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Banner */}
      <div className="relative">
        <img
          src={bannerUrl}
          alt="Banner"
          className="w-full h-60 object-cover rounded-b-xl shadow"
        />
        <button className="absolute top-3 right-3 bg-gray-800/80 p-2 rounded-full hover:bg-gray-700 text-white transition">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={22} />
          </label>
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      {/* Profile */}
      <div className="flex items-start sm:items-center px-6 sm:px-10 -mt-20 relative">
        {/* Profile image */}
        <div className="relative">
          <img
            src={profileUrl}
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
          />
          <button className="absolute bottom-2 right-2 bg-gray-800/90 text-white p-2 rounded-full hover:bg-gray-700 transition">
            <label htmlFor="profile-upload" className="cursor-pointer">
              <FaCamera size={20} />
            </label>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              className="hidden"
              onChange={handleProfileChange}
            />
          </button>
        </div>

        {/* Profile details */}
        <div className="ml-6 mt-4 sm:mt-12 max-w-2xl">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Abhishek
          </h1>
          <p className="text-gray-600 dark:text-gray-300 italic">
            Learning is Eternal
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae rem placeat omnis molestias veritatis in nihil atque
            assumenda? Fugiat ex soluta numquam culpa repudiandae veritatis
            minima quis alias adipisci ipsam.
          </p>

          <button className="mt-5 bg-red-600 text-white py-2 px-5 rounded-lg shadow hover:bg-red-500 transition">
            Join Us
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-10 px-6 sm:px-10">
        <Tabs />
      </div>
    </div>
  )
}

export default Profile
