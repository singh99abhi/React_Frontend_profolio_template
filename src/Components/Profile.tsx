import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { FaCamera } from 'react-icons/fa'
import Tabs from './Tabs'

const Profile = () => {
    const [bannerUrl,setBannerUrl]=useState("https://placehold.co/2100x400")
    const [profileUrl,setProfileUrl]=useState("https://placehold.co/100")


    const handleBannerChange=(event:any)=>{
        const file=event.target.files[0]
        if(file){
            setBannerUrl(URL.createObjectURL(file))
        }
    }

    const handleProfileChange=(event:any)=>{
        const file=event.target.files[0]
        if(file){
            setProfileUrl(URL.createObjectURL(file))
        }
    }

  return (
    <div className='relative  ml-[5rem]'>
       <div className="relative">
        <img src={bannerUrl} alt="bgimage" className='w-full h-60 object-cover' />
        <button className='absolute top-2 right-2 bg-gray-800 p-2 rounded-full hover:bg-gray-600 text-white'>
            <label htmlFor="banner-upload" className='cursor-pointer'>
                <FaCamera size={24}></FaCamera>
            </label>

            <input type="file" id="banner-upload" accept='image/*' className='hidden' onChange={handleBannerChange} />
        </button>
       </div>
       <div className="flex items-center ml-4 mt-[2rem]">
        <img src={profileUrl} alt="Channel Logo" className='w-40 h-40 object-cover rounded-full border-white relative' />
        <button className='absolute ml-[3.6rem] mt-[10rem] z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600'>
            <label htmlFor="profile-upload" className='cursor-pointer'>
                <FaCamera size={24}></FaCamera>
            </label>
            <input type="file" id='profile-upload' accept='image/*' className='hidden' onChange={handleProfileChange} />
        </button>

        <div className='ml-4 mt-4'>
            <h1 className='text-2xl font-bold'>Abhishek</h1>
            <p>Learning is Eternal</p>
             <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rem placeat omnis molestias veritatis in nihil atque assumenda? Fugiat ex soluta numquam culpa repudiandae veritatis minima quis alias adipisci ipsam.</p>
        <button className='mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500'>Join Us</button>
        </div>
       </div>
       <Tabs></Tabs>
    </div>
  )
}

export default Profile