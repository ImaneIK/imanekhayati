import Image from "next/image"
import next_logo from "../assets/next_logo.svg"
import tailwind_logo from "../assets/tailwind_logo.svg"
import react_logo from "../assets/react_logo.svg"
import vue_logo from "../assets/vue_logo.svg"
import mongodb_logo from "../assets/mongodb_logo.svg"
import angular_logo from "../assets/angular_logo.svg"
import python_logo from "../assets/python_logo.svg"
import mysql_logo from "../assets/mysql_logo.svg"

export default function Carousel(){
return(
<div
    x-data="{}"
    x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
    class="my-6 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
>
    
    <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <Image src={next_logo} width={90} height={90} alt="Next.js"></Image>
        </li>
        <li>
            <Image src={tailwind_logo} width={80} height={80} alt="Tailwind CSS.js"></Image>
        </li>
        <li>
            <Image src={react_logo} width={70} height={70} alt="react.js"></Image>
        </li>
        <li>
            <Image src={vue_logo} width={70} height={70} alt="vue.js"></Image>
        </li>
        <li>
            <Image src={mongodb_logo} width={100} height={100} alt="mongoDB.js"></Image>
        </li>
        <li>
            <Image src={angular_logo} width={60} height={60} alt="angular.js"></Image>
        </li>
        <li>
            <Image src={python_logo} width={60} height={60} alt="python.js"></Image>
        </li>
        <li>
            <Image src={mysql_logo} width={80} height={80} alt="mysql"></Image>
        </li>
    </ul> 

    <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        <li>
            <Image src={next_logo} width={90} height={90} alt="next.js"></Image>
        </li>
        <li>
            <Image src={tailwind_logo} width={80} height={80} alt="Tailwind CSS"></Image>
        </li>
        <li>
            <Image src={react_logo} width={70} height={70} alt="react.js"></Image>
        </li>
        <li>
            <Image src={vue_logo} width={70} height={70} alt="vue.js"></Image>
        </li>
        <li>
            <Image src={mongodb_logo} width={100} height={100} alt="mongoDB"></Image>
        </li>
        <li>
            <Image src={angular_logo} width={60} height={60} alt="angular.js"></Image>
        </li>
        <li>
            <Image src={python_logo} width={60} height={60} alt="python"></Image>
        </li>
        <li>
            <Image src={mysql_logo} width={80} height={80} alt="mysql"></Image>
        </li>
    </ul>                
</div>
)
}