
import logo from '../assets/metabnb.svg'
import './header.css'
import MetaModal from './Modal'
import { Link } from 'react-router-dom'


export default function Header(props) {
window.onload = function(){
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});}
  
  
  return (
    <>
    <nav class="p-4 max-w-7xl mx-auto ">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between items-center">

      <div class="flex justify-between w-[70%]">
        <div>
          <a href="#" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
            <img src={logo}/>
          </a>
        </div>

        <div class="hidden md:hidden lg:flex  items-center space-x-1 text-[20px]">
        <Link to="/" class="py-5 px-3 text-gray-700 hover:text-gray-900">Home</Link>
        <Link to="/place-to-stay" class="py-5 px-3 text-gray-700 hover:text-gray-900">Place to Stay</Link>
          <Link to='/'><a
            href="/"
            onClick={e => {
            let nft = document.getElementById("nft");
            e.preventDefault();  // Stop Page Reloading
            nft && nft.scrollIntoView();
            }}
            className='py-5 px-3 text-gray-700 hover:text-gray-900'
            >
            NFTs
            </a>
            </Link>
            <a
            href="/"
            onClick={e => {
            let comm = document.getElementById("comm");
            e.preventDefault();  // Stop Page Reloading
            comm && comm.scrollIntoView();
            }}
            className='py-5 px-3 text-gray-700 hover:text-gray-900'
            >
            Community
            </a>
        </div>
      </div>
      <div className='hidden lg:block md:block'>
      <MetaModal />
      </div>

      <div class="lg:hidden flex items-center ease-in duration-200">
        <button class="mobile-menu-button">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </div>
  </div>
  <div class="mobile-menu hidden flex flex-col lg:hidden  ">
          <Link to="/" class="py-3 px-3 text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/place-to-stay" class="py-3 px-3 text-gray-700 hover:text-gray-900">Place to Stay</Link>
          <a
            href="/"
            onClick={e => {
            let nft = document.getElementById("nft");
            e.preventDefault();  // Stop Page Reloading
            nft && nft.scrollIntoView();
            }}
            className='py-3 px-3 text-gray-700 hover:text-gray-900'
            >
            NFTs
            </a>
            <a
            href="/"
            onClick={e => {
            let comm = document.getElementById("comm");
            e.preventDefault();  // Stop Page Reloading
            comm && comm.scrollIntoView();
            }}
            className='py-3 px-3 text-gray-700 hover:text-gray-900'
            >
            Community
            </a>
          <div className='block md:hidden'>
          <MetaModal className='md:hidden'/>
          </div>
  </div>
</nav>
        {props.children}
     
    </>
  )
}
