'use client';
import { useEffect, useRef } from "react"
import Image from "next/image";
import gsap from "gsap"
import CustomEase from "gsap/CustomEase"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Vivo() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline()
    gsap.to(".img", {
      // rotate: 360,
      scale: 0.5,
      scrollTrigger: {
        trigger: ".img",
        start: "top bottom-=100px",
        end: "center 10%",
        markers: true,
        scrub: true,
      },
    });
  }, [])
  


  return (
  <div className="w-full h-full">
    <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    2222
    <Image className="img block" width="922" height="1210" src="/images/iqooneo7-color-img1-md-x2.png" alt=""></Image>
    {/* <div className="w-[100px] h-[100px] rounded-xl bg-green-800 green m-4"></div> */}
    <Image className="img block" width="922" height="1210" src="/images/iqooneo7-color-img2-md-x2.png" alt=""></Image>
    <Image className="img block" width="922" height="1210" src="/images/iqooneo7-color-img3-md-x2.png" alt=""></Image>
  </div>)
}