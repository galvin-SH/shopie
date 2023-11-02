import React from 'react';


function Card({data}) {
    console.log(data)
  return (
    <div className="flex-col h-25 w-50 ">
        <div >
        <img  className="" src={data.img}/>
        </div>
        <h3 className="font-bold">
        {data.title}
        </h3>
        <p>
        {data.description}
        </p>
    </div>
  )
}

export default Card