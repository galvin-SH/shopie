import React from 'react';

const styles = {
    card: {
       width: "150px"

    }
}

function Card({data}) {
    console.log(data)
  return (
    <div className="border-zinc-400 border-1 rounded-xl shadow-gray-400 shadow-xl flex-col h-25 w-50 hover:bg-white-[50%] cursor-pointer">
        <div >
        <img  src={data.img}/>
        </div>
        <h3 className="font-">
        {data.title}
        </h3>
        <p>
        {data.description}
        </p>
    </div>
  )
}

export default Card