import React from 'react'

export default function FontSizeControl() {
  return (
    <div className='flex justify-around mt-[20px] w-[108px] rounded border-[0.5px] border-[#7789A9]  divide-x-[0.5px] divide-[#7789A9]'>
<button className="cursor-pointer p-2">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16663 10H15.8333" stroke="#DDE1E1" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</button>

<div className="display text-[#7789A9] p-2 text-base  ">
 24

</div>


<button className="cursor-pointer p-2">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99996 4.16666V15.8333M4.16663 9.99999H15.8333" stroke="#DDE1E1" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</button>

    </div>
  )
}
