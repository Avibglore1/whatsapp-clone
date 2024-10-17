import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useAuth } from './Authcontext'

function Profile(props) {
  const {userData} = useAuth();
  return (
    <>
       <div className='bg-green-400 text-white py-4 text-lg px-4 flex items-center gap-6' >
            <button onClick={props.onBack}><ArrowLeft></ArrowLeft></button>
            <div> Profile </div>
        </div>
        <div className='bg-gray-200'>
            {/* <img src={userData.profile_pic} alt='' className='rounded-full h-10 w-10'/> */}
            <h2>{userData.name}</h2>
        </div>
    </>
   
  )
}

export default Profile