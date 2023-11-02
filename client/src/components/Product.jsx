// the products will have a name 
// category, price, decription

import { Card } from 'flowbite-react';
'use client';
import GummyCandy from '/Gummy-Candy.jpg';
import Chips from '/chips.png';
import Chocolate from '/chocolate.jpg';
import Ramen from '/ramen.jpg';
import SignUp from '../../public/signUp.png'

function Component() {
  return (
    [

    <Card
    key= {1}
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={GummyCandy}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Chocolate Deals to Satisfy Your Sweet Tooth!
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Buy 2 bars of any chocolate, get one free!
      </p>
    </Card>,
    
    <Card
    key= {2}
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Chips}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Late night cravings??
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Try chips from around the world!
      </p>
    </Card>,

    <Card
    key= {3}
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Ramen}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        RAMEN!
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        From spicy to mild, find all kinds of ramen here 
      </p>
    </Card>,

    <Card
    key= {4}
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={GummyCandy}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Nothing Sweeter!
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Gummy candy is 15% off!
      </p>
    </Card>,

    <Card
    key= {5}
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={SignUp}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        SIGN UP NOW!
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        When you sign up, get 20% off your first order!! 
      </p>
    </Card>,

    <Card
    key= {6}
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Chocolate}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Chocolate Deals to Satisfy Your Sweet Tooth!
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Buy 2 bars of any chocolate, get one free!
      </p>
    </Card>,

    <Card
    key= {7}
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Chocolate}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Chocolate Deals to Satisfy Your Sweet Tooth!
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Buy 2 bars of any chocolate, get one free!
      </p>
    </Card>
    ]
    
  );
}

export default Component;