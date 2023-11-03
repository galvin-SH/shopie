import React from 'react';


function Card({ data }) {
    console.log(data)
    return (
        <div className="border-zinc-400 border-1 rounded-xl shadow-gray-400 shadow-xl flex-col h-150 w-60 group   cursor-pointer relative ">
            <div >
                <img className="rounded-xl " src={data.img} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="hidden group-hover:block absolute top-[25%] left-[50%] hover:bg-white-[50%] translate-x-[-50%] translate-y-[50%]" >
                <h3>
                    {data.title}
                </h3>
                <p className="" >
                    {data.description}
                </p>
            </div>
        </div>
    )
}

//change writing to be appear when it hovers 

export default Card
