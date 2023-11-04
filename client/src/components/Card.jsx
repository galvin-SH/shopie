import React from 'react';


function Card({ data }) {
    console.log(data)
    return (
        <section >

            <div className=" border-1 rounded-xl shadow-gray-400 shadow-xl flex-col h-50 w-20 group cursor-pointer relative">
                <div >
                    <img className="rounded-xl " src={data.img} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="  hidden group-hover:block absolute top-[0%] left-[50%] hover:bg-white- translate-x-[-50%]" >
                    <h6 className="text-xs font-bold">
                        {data.title}
                    </h6>
                    <p className="text-xs font-bold" >
                        {data.description}
                    </p>
                </div>
            </div>
        </section>
    )
}

//change writing to be appear when it hovers 

export default Card
