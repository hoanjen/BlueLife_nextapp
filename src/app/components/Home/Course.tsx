'use client'

import * as React from 'react';

export default function Course() {

    const [eventHover, setEventHover] = React.useState(false)

    function setLeave(){
        setEventHover(false)
    }

    function setHover(){
        setEventHover(true)
    }

    return (
        <div  onPointerEnter={setHover} onPointerLeave={setLeave} className='cursor-pointer w-[400px] h-[168px] bg-slate-500 rounded-xl overflow-hidden text-base relative'>
            <div className='p-4'>
                <div className='mb-2'>Name Course</div>
                <span className='p-1 text-xs bg-slate-600 rounded-full'>51 terms</span>
                <div className='mt-10 flex'>
                    <div className='w-8 overflow-hidden rounded-full'>
                        <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/88044728_728653661299490_3907106769641406464_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AisqZx4FYokAX-eruKK&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBoodCzTGI6dSQHQnj0jKYpobVCP8RxjXggSg7K5GNECA&oe=6537C7A5" alt="" />
                    </div>
                    <div className='ml-4 mt-2 text-sm'>
                        Nguyễn Văn Hoàn
                    </div>
                </div>
            </div>
            {eventHover ? <div className='bg-sky-400 w-[400px] h-3 z-0 absolute bottom-[-5px]'></div> : <div className=' w-[400px] h-3 z-0 absolute bottom-[-5px]'></div>}
            
        </div>
    )
}
