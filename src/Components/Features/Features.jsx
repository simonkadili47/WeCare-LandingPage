import React from 'react'

function Features() {
  return (
    <div className='flex ml-14 pt-8 '>
        <div>
            <h1 className='text-custom-green font-bold'>OUR KEY FEATURES</h1>
           <div className='font-bold text-3xl pt-2'>
           <p>Our features that streamlining</p>
           <p>Healthcare Management</p>
           </div>

        </div>
        <div className='pl-32 pt-9 '>
            <p>Our platform typically offers a range of features to help</p>
            <p>healthcare proffessionals and administrations stramline</p>
            <p>their task and iprove patient care</p>
        </div>
        <div className='pl-28 pt-9'>
        <button className="border rounded-lg border-custom-green w-auto p-2 ml-4 px-4 text-custom-green hover:bg-custom-green hover:text-white transition-colors">
              <a href="#" className="no-underline">
               Lean More
              </a>
            </button>
        </div>
    </div>
  )
}

export default Features