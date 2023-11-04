import React from 'react';


function Card({ data }) {
    return (
        <section >
            <div className="border-1 rounded-xl shadow-gray-400 shadow-xl flex-col w-40 group cursor-pointer relative hover:scale-110 ease-in duration-300">
                <div >
                    <img className="rounded-xl group-hover:opacity-10" src={data.img} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%]" >
                    <p className="text-xs pb-4 pt-2 text-black text-center" >
                        {data.description}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Card
