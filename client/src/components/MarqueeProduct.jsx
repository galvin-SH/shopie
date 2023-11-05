
import Card from './Card';
import data from './data.json';


function Product() {
  return (
    <article className="w-full inline-flex flex-nowrap overflow-hidden"
    x-data="{}"
        x-init="$nextTick(() => {
            let ul = $refs.logos;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
        })" >
      
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {data.map((item) => 
            (
              <li className="marqueeItem" key={Math.random()}>
                <Card data={item}/>
                </li>
            )
            )}
        </ul>

        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {data.map((item) => 
            (
              <li className="marqueeItem" key={Math.random()}>
                <Card data={item}/>
                </li>
            )
            )}
        </ul>
     
    </article>

  );
}

export default Product;