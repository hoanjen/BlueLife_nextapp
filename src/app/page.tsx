import * as React from 'react';

import Ads from './components/Home/Ads';
import CourseList from './components/Home/CourseList';
import Date from './components/Home/Date'


export default function Home() {


  return (
      <div className='bg-gray-800 w-screen flex flex-col items-center'>
          <div className='my-10'>
            <Ads />
          </div>

          <div className='text-white'>
              <div className='mb-5'>New courses posted recently </div>
              <CourseList />
              <Date />
              <div className='mb-5 mt-5'>Recent</div>
              <CourseList />
              <br />
              <br />
              <br />
          </div>
      </div>
  )
}
