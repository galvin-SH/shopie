// the products will have a name 
// category, price, decription

// import { Card } from 'flowbite-react';
// 'use client';
// import GummyCandy from '/Gummy-Candy.jpg';
// import Chips from '/chips.png';
// import Chocolate from '/chocolate.jpg';
// import Ramen from '/ramen.jpg';
// import SignUp from '../../public/signUp.png'
import Card from './Card';
import data from './data.json';


function Product() {
  return (
    <article className="w-full inline-flex flex-nowrap"
    x-data="{}"
        x-init="$nextTick(() => {
            let ul = $refs.logos;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
        })" >
      
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" x-ref="logos">
        
        {data.map((item) => 
            (
              <li key={Math.random()}>
                <Card data={item}/>
                </li>
            )
            )}

          {/* <li>
            <Card
              key={1}
              className="max-w-sm pictures"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={Chocolate}>
              <h5 className="text-m font-bold tracking-tight text-gray-900 dark:text-white">
                Chocolate Deals to Satisfy Your Sweet Tooth!
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Buy 2 bars of any chocolate, get one free!
              </p>
            </Card>
          </li>
          <li>
            <Card
              key={2}
              className="max-w-sm pictures"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={Chips}
            >
              <h5 className="text-m font-bold tracking-tight text-gray-900 dark:text-white">
                Late night cravings??
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Try chips from around the world!
              </p>
            </Card>
          </li>
          <li>
            <Card
              key={3}
              className="max-w-sm pictures"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={Ramen}
            >
              <h5 className="text-m font-bold tracking-tight text-gray-900 dark:text-white">
                RAMEN!
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                From spicy to mild, find all kinds of ramen here
              </p>
            </Card>
          </li>

          <li>
            <Card
              key={4}
              className="max-w-sm pictures"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={GummyCandy}
            >
              <h5 className="text-m font-bold tracking-tight text-gray-900 dark:text-white">
                Nothing Sweeter!
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Gummy candy is 15% off!
              </p>
            </Card>
          </li>

          <li>
            <Card
              key={5}
              className="max-w-sm pictures"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={SignUp}
            >
              <h5 className="text-m font-bold tracking-tight text-gray-900 dark:text-white">
                SIGN UP NOW!
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                When you sign up, get 20% off your first order!!
              </p>
            </Card>
          </li>

          <li>
            <Card
              key={6}
              className="max-w-sm pictures"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={Chocolate}
            >
              <h5 className="text-m font-bold tracking-tight text-gray-900 dark:text-white">
                Chocolate Deals to Satisfy Your Sweet Tooth!
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Buy 2 bars of any chocolate, get one free!
              </p>
            </Card>
          </li>
          <li>
            <Card
              key={7}
              className="max-w-sm pictures"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={Chocolate}
            >
              <h5 className="text-m font-bold tracking-tight text-gray-900 dark:text-white">
                Chocolate Deals to Satisfy Your Sweet Tooth!
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Buy 2 bars of any chocolate, get one free!
              </p>
            </Card>
          </li> */}
        </ul>
     
    </article>

  );
}

export default Product;