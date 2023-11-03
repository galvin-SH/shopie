import React from 'react';
import Products2 from './Products2';

// const styles = {
//     card: {
//        width: "50px"

//     }
// }

// const Products= ({data}) => {
//     return (
//         <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-white-[50%] cursor-pointer'>
//             {/* project image - hover effects and styling */}
//             <img src={data.img} alt="/" className='rounded-xl group-hover:opacity-10' />
//             <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
//                 <h3 className='text-2xl text-white tracking-wider text-center'>
//                     {data.title}
//                     <p className='pb-4 pt-2 text-black text-center font-serif'>add to cart</p>
//                 </h3>
//             </div>
//         </div>
//     )
// }

// export default Products;

function Card({data}) {
    console.log(data)
  return (
    <div className="border-zinc-400 border-1 rounded-xl shadow-gray-400 shadow-xl flex-col h-150 w-60 hover:bg-white-[50%] cursor-pointer">
        <div >
        <img   className="rounded-xl" src={data.img} style={{ width: '100%', height: 'auto' }}/>
        </div>
        
    </div>
  )
}

//change writing to be appear when it hovers 

export default Card