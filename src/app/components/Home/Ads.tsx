import * as React from 'react';

export default function Ads() {
    return (
        <div className='text-white bg-gradient-to-tr from-green-400 to-blue-500 rounded-md w-[1200px] h-[124px] relative'>
            <div className='p-3 text-lg'>Try the find course</div>
            <div className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className='bg-slate-700 w-6 h-6 rounded-full z-10 absolute right-2 top-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </div>
        </div>
    )
}
