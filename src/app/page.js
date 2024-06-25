/** 
*@author 楊淨媮 <B11200013@gemail.yuntech.edu.tw>
 */
'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, 
  Footer, FooterCopyright, FooterLink, FooterLinkGroup,
  Carousel,
  Card, Button,
  DarkThemeToggle
} from "flowbite-react";
import CustomCard from "./components/Card"; 
/*import CustomCard from "@app/components/Card";*/

export default function Home(){
  
  const [item, setItems] = useState([]);
  const tokenUrl = '';
  const apiUrl = 'https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/YunlinCounty';

  useEffect(() => {
    async function fetchData(){
      const response = await fetch('api/items');
      const data = await response.json();
      console.log(data);
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <>

      <div className="bg-cyan-800">
        <div className="container max-auto">
          <Navbar fluid>
            <NavbarBrand as={Link} href="https://flowbite-react.com">
              <img src="https://www.cakeresume.com/cdn-cgi/image/fit=scale-down,format=auto,w=1200/https://images.cakeresume.com/BOY0b/yu-sheng-hong/e82e21e5-bb8e-4dfd-a7b6-171150a78c02.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">網頁設計練習</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
              <NavbarLink href="#" className="">
                <span className="py-4 px-2 hover:text-red-500 hover:boder-red-500 hover:boorder-b-2">交通</span>
              </NavbarLink>
              <NavbarLink as={Link} href="#">
                景點
              </NavbarLink>
              <NavbarLink href="#">關於我們</NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle/>
          </Navbar>
          </div>
      </div>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div>

      <div className="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4">
          {items.map((item, index) =>
            <CustomCard item={item} key={index}/>
          )}
        </div>
       </div>
      

      <Footer container>
      <FooterCopyright href="#" by="Flowbite™" year={2022}/>
      <FooterLinkGroup>
        
      </FooterLinkGroup>
      </Footer>
      <div className="bg-white py-16">
        <div className="container max-auto grid grid-cols gap-4">
          { item.map( item =>
          <Card
          className="max-w-sm"
          imgAlt={item.Picture}
          imgSrc={item.Picture.PictureUrl1}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.description}           
            </p>
            <Button>
              Read more
              <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
          )}
        </div>
      </div>

    </>
  )
  }