import React from 'react'
import featuresData from '@/app/featdata/cardsData.json'

interface featuredItem {
  id: number
  title: string
  slug: string
  description: string
  isFeatured: boolean
  
}

function FeaturedSection() {
  const featuredSectionItems = featuresData.courses.filter((item:featuredItem) => item.isFeatured);

  return (
    <div className='py-12'>
      <div>
        <div className='text-center'>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Things We Use To Improve Your Mental Health (Features)</p>
        </div>
      </div>
      <div className='mt-10 mx-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
          {featuredSectionItems.map((item: featuredItem) =>  (
            <div key={item.id} className='flex flex-col justify-center border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800 '>
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-xl font-bold text sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{item.title}</p>
                  <p className="text-md text-neutral-600 dark:text-neutral-400 flex-grow">{item.description}</p>
                  {/* <Link className='mt-4' href={`/courses/${item.slug}`}>
                  Learn More
                  </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className='mt-10 text-center'>
        <Link href={"/courses"}>
          <button className='px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition duration-300 cursor-pointer'>Explore More Courses</button>
        </Link>
      </div> */}
    </div>
  )
}

export default FeaturedSection