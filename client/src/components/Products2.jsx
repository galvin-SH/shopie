import Card from './Card';
import data from './data.json';

import React from 'react'

function Products2() {
    return (
        <>
            {data.map((item) => 
            (
                <Card className="" key={Math.random()} data={item} />
            )
            )}
        </>
    )
}

export default Products2