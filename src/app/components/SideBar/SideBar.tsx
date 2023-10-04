'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'


export default function SideBar() {
    const router = useRouter()
    return (
        <div className='flex flex-row bg-gray-800 text-white shadow-lg shadow-blue-500/50 border-b-2 border-slate-500 border-solid'>
            <div className='cursor-pointer p-3 text-lg ml-28' onClick={() => router.push('/')}>Exphore</div>
            <div className='flex flex-col justify-center text-black'>
                <div className='flex mx-28 w-[800px] h-8 rounded-lg overflow-hidden'>
                    <input className='w-[900px] h-8 z-10' type="text" placeholder='   Search course ?'/>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <div className='bg-blue-600 w-8 h-8 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </div>
            </div>
            <div className='cursor-pointer p-3 text-lg mx-14' onClick={() => router.push('/username/course')}>Course</div>
            <div className='cursor-pointer p-3 text-lg' onClick={() => router.push('/username/profile')}>Profiles</div>
            <div className='cursor-pointer p-3 text-lg mx-14' onClick={() => router.push('/username/settings')}>Settings</div>
            <div className='flex flex-col justify-center'>
                <div className=' w-11 h-11 overflow-hidden rounded-full'> 
                    <img className='w-11 h-11 object-cover rounded-full' src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/88044728_728653661299490_3907106769641406464_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vZJ0jYz1H98AX8Yyd0l&_nc_ht=scontent.fhan3-1.fna&oh=00_AfALlWB4onOqgU9MYqbpw4veYIXUAuV-dq6Ag3-EVeBE4w&oe=653D0DA5" alt="" />
                </div>
            </div>
        </div>
    )
}
