import { styled } from '@mui/material';
import * as React from 'react';

export default function Course() {


    return (
        <div className='bg-gray-800 w-screen flex flex-col items-center text-white'>
            <div className='w-[800px] mt-10 mb-5'>Course Name </div>
            <div className='flex justify-between w-[800px] items-center'>
                <div className='p-3 rounded-lg w-[187px] bg-slate-600 flex cursor-pointer hover:bg-slate-500'>
                    <svg width="28px" height="28px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#af4b4b" transform="rotate(0)" stroke="#af4b4b"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="69.632"></g><g id="SVGRepo_iconCarrier"><path d="M823.3 938.8H229.4c-71.6 0-129.8-58.2-129.8-129.8V215.1c0-71.6 58.2-129.8 129.8-129.8h297c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7h-297c-24.5 0-44.4 19.9-44.4 44.4V809c0 24.5 19.9 44.4 44.4 44.4h593.9c24.5 0 44.4-19.9 44.4-44.4V512c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v297c0 71.6-58.2 129.8-129.8 129.8z" fill="#61d0ff"></path><path d="M483 756.5c-1.8 0-3.5-0.1-5.3-0.3l-134.5-16.8c-19.4-2.4-34.6-17.7-37-37l-16.8-134.5c-1.6-13.1 2.9-26.2 12.2.5l374.6-374.6c51.1-51.1 134.2-51.1 185.3 0l26.3 26.3c24.8 24.7 38.4 57.6 38.4 92.7 0 35-13.6 67.9-38.4 92.7L513.2 744c-8.1 8.1-19 12.5-30.2 12.5z m-96.3-97.7l80.8 10.1 359.8-359.8c8.6-8.6 13.4-20.1 13.4-32.3 0-12.2-4.8-23.7-13.4-32.3L801 218.2c-17.9-17.8-46.8-17.8-64.6 0L376.6 578l10.1 80.8z" fill="#0026ff"></path></g></svg>
                    <div className='ml-2'>Learn</div>
                    </div>
                <div className='p-3 rounded-lg w-[187px] bg-slate-600 flex cursor-pointer hover:bg-slate-500'>
                    <svg width="28px" height="28px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M809.3 1024H214.7c-71.3 0-129.4-58-129.4-129.4V129.4C85.3 58 143.4 0 214.7 0h594.6c71.3 0 129.4 58 129.4 129.4v765.3c0 71.3-58.1 129.3-129.4 129.3zM214.7 85.3c-24.3 0-44 19.8-44 44v765.3c0 24.3 19.8 44 44 44h594.6c24.3 0 44-19.8 44-44V129.4c0-24.3-19.8-44-44-44H214.7z" fill="#3688FF"></path><path d="M426.7 1024H213.3c-70.6 0-128-57.4-128-128V682.7h213.4c70.6 0 128 57.4 128 128V1024z m-256-256v128c0 23.5 19.1 42.6 42.6 42.6h128v-128c0-23.5-19.1-42.6-42.6-42.6h-128zM810.7 1024H597.3V810.6c0-70.6 57.4-128 128-128h213.4V896c0 70.6-57.4 128-128 128z m-128-85.3h128c23.5 0 42.6-19.1 42.6-42.6V768h-128c-23.5 0-42.6 19.1-42.6 42.6v128.1zM448 355.6H277.3c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7H448c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7zM661.3 533.3h-384c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h384c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7z" fill="#95d0fe"></path></g></svg>
                    <div className='ml-2'>
                        Test
                    </div>
                </div>
                <div className='p-3 rounded-lg w-[187px] bg-slate-600 flex cursor-pointer hover:bg-slate-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-shuffle text-blue-500" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z" />
                        <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                    </svg>
                    <div className='ml-2'>
                        Shuffe
                    </div>
                </div>
                <div className='p-3 rounded-lg w-[187px] bg-slate-600 flex cursor-pointer hover:bg-slate-500'>
                    <svg width="28px" height="28px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M814.2 1016.4c-19.6 0-39.2-4.5-57.1-13.5L530.8 889.2c-11.7-5.9-25.8-5.9-37.5 0L267 1002.9c-37.2 18.7-81.3 17.9-118.1-1.9-35.3-19-58.1-52.3-62.6-91.3-0.6-4.9-0.9-9.9-0.9-15V129.4C85.3 58 143.4 0 214.7 0h594.6c71.3 0 129.4 58 129.4 129.4v765.3c0 5.1-0.3 10.1-0.9 15-4.5 39-27.4 72.2-62.6 91.3-19 10.2-40 15.4-61 15.4zM512 799.5c19.6 0 39.2 4.5 57.1 13.5l226.3 113.7c12.3 6.2 27 5.9 39.3-0.8 6.1-3.3 16.7-11.1 18.4-26 0.2-1.7 0.3-3.4 0.3-5.2V129.4c0-24.3-19.8-44-44-44H214.7c-24.3 0-44 19.8-44 44v765.3c0 1.8 0.1 3.5 0.3 5.2 1.7 15 12.3 22.8 18.4 26 12.3 6.7 27 6.9 39.3 0.8L455 813c17.8-9.1 37.4-13.5 57-13.5z" fill="#3688FF"></path><path d="M597.8 590.6c-6.7 0-13.5-1.3-20-4.1L512 558.9l-65.7 27.7c-16.8 7-35.5 4.9-50.2-5.8-14.7-10.7-22.5-27.9-20.9-45.9l6-71-46.6-54c-11.9-13.7-15.6-32.2-10-49.4 5.6-17.3 19.5-30.1 37.1-34.2l69.5-16.2 36.9-61c9.4-15.5 25.9-24.8 44-24.8s34.6 9.3 44 24.8l36.9 61 69.5 16.2c17.7 4.1 31.6 16.9 37.2 34.2 5.6 17.2 1.8 35.8-10 49.5l-46.6 54 6 71c1.6 18-6.3 35.2-20.9 45.9-9.3 6.4-19.8 9.7-30.4 9.7z m-99-37.3s0.1 0 0 0z m26.4 0z m38.7-11.3c0 0.1 0 0.1 0 0z m-103.8 0z m51.9-71.3c6.8 0 13.7 1.4 20 4l27.1 11.4-2.5-29.4c-1.2-13.8 3.4-27.6 12.4-38.1l19.2-22.2-28.7-6.7c-13.4-3.2-25.1-11.7-32.2-23.3L512 341.1l-15.2 25.2c-7.2 11.8-18.9 20.3-32.1 23.4l-28.9 6.7 19.3 22.3c9 10.3 13.5 24.2 12.3 37.9l-2.5 29.4 27.2-11.4c6.3-2.6 13.1-3.9 19.9-3.9z m-121.6 3.9s0.1 0.1 0.1 0.2l-0.1-0.2z m243.3-0.2l-0.1 0.2s0-0.1 0.1-0.2z m-33.4-152.2h0.2-0.2z" fill="#fbff00"></path></g></svg>
                    <div className='ml-2'>
                        Save Course    
                    </div>
                </div>
            </div>
            <div className='bg-slate-600 w-[800px] h-[450px] mb-5 mt-5 rounded-lg flex justify-center items-center'>
                <div className='text-2xl'>Item Test</div>
            </div>
            <div className='w-[800px]'>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className='hover:bg-slate-600 p-1 rounded-full cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                                <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <div className='hover:bg-slate-600 p-1 rounded-full cursor-pointer border-solid border-slate-400 border-with border-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg>
                            </div>
                        </div>
                        <div className='mx-5 text-lg'>5 / 45</div>
                        <div>
                            <div className='hover:bg-slate-600 p-1 rounded-full cursor-pointer border-solid border-slate-400 border-with border-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='hover:bg-slate-600 p-2 rounded-full cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                            </svg>

                        </div>
                    </div>
                </div>
                <div className='mt-3 mb-5 text-red w-full relative h-5'>
                    <div className='w-full h-4 absolute z-10'></div>
                    <input type="range" min="0" max="45" value="5" className="absolute z-0 w-full h-[2px] bg-slate-600  overflow-hidden opacity-80 top-2"/>
                    
                </div>
            </div>
        </div>
    )

}

