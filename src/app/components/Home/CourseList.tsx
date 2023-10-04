
'use client'

import * as React from 'react';
import Course from "./Course"

interface Course {
    id: string,
    name: string
}

export default function CourseList() {

    const artists: Course[] = [{ id: '1', name: 'HP1' }, { id: '2', name: 'HP1' }, { id: '3', name: 'HP1' }, { id: '4', name: 'HP1' }, { id: '5', name: 'HP1' }, { id: '6', name: 'HP1' }, { id: '7', name: 'HP1' }, { id: '8', name: 'HP1' }]
    const [list, setList] = React.useState(6)
    const [isLoadMore, setIsLoadMore] = React.useState(true)

    function loadMore(){
        setList(6+6);
        setIsLoadMore(false)
    }

    function HiddenMore() {
        setList(6);
        setIsLoadMore(true)
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='grid grid-cols-3  gap-4'>
                {artists.slice(0, list).map(function (artist){
                    return <Course key={artist.id} />
                })}
            </div>
            {isLoadMore ? <div onClick={loadMore} className='cursor-pointer flex opacity-90 justify-center w-32 mt-5'>
                <div className='pr-2'>Show more </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-down mt-[2px]" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
            </div> 
                : <div onClick={HiddenMore} className='cursor-pointer flex opacity-90 justify-center w-32 mt-5'>
                <div className='pr-2'>Hidden more </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-up mt-[2px]" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                 </svg>
            </div>
            }
        </div>
        
    )
}
