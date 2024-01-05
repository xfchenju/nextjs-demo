'use client';
import { useEffect, useRef } from "react"
import Image from "next/image";
import gsap from "gsap"
import CustomEase from "gsap/CustomEase"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import './vivo.css'

export default function Vivo() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline()
    // gsap.to('.box-wrap', {
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: '.box-wrap',
    //     start: 'top top',
    //     end: '240%',
    //     scrub: true,
    //     pin: true,
    //     markers: true,
    //   }
    // })


    // gsap.to(".box0 .box-container", {
    //   // opacity: 1,
    //   height: '100%',
    //   scrollTrigger: {
    //     trigger: ".box0",
    //     start: "bottom bottom",
    //     end: "bottom top",
    //     markers: true,
    //     scrub: true,
    //     pin: true
    //   },
    // })
    // gsap.to(".box1 .box-container", {
    //   // opacity: 1,
    //   height: '100%',
    //   scrollTrigger: {
    //     trigger: ".box1",
    //     start: "bottom bottom",
    //     end: "bottom top",
    //     markers: true,
    //     scrub: true,
    //     pin: true
    //   },
    // })
    // gsap.to(".box0 .box-container", {
    //   height: '100%',
    //   // background: 'blue'
    //   scrollTrigger: {
    //     trigger: ".box0",
    //     start: "bottom bottom",
    //     end: "bottom top",
    //     markers: true,
    //     scrub: true,
    //     pin: true
    //   },
    //   // y: 500
    // });

    // gsap.to(".box1 .box-container", {
    //   height: '100%',
    //   // background: 'blue'
    //   scrollTrigger: {
    //     trigger: ".box1",
    //     start: "bottom bottom",
    //     end: "bottom top",
    //     markers: true,
    //     scrub: true,
    //     pin: true
    //   },
    //   // y: 500
    // });

    // gsap.to(".box2 .box-container", {
    //   height: '100%',
    //   // background: 'blue'
    //   scrollTrigger: {
    //     trigger: ".box2",
    //     start: "bottom bottom",
    //     end: "bottom top",
    //     markers: true,
    //     scrub: true,
    //     pin: true
    //   },
    //   // y: 500
    // });
  }, [])



  return (
    <div className="w-full vivo-container">
      <div className="img-container">
        <div className=""></div>
      </div>



      <div className="box box0">
        <div className="box-container">
          <Image className="img block object-contain" width="922" height="1210" src="/images/iqooneo7-color-img1-md-x2.png" alt=""></Image>
        </div>
        {/* <Image className="img block" width="922" height="1210" src="/images/iqooneo7-color-img1-md-x2.png" alt=""></Image> */}
      </div>
      <div className="box box1">
        <div className="box-container">
          <Image className="img block object-contain" width="922" height="1210" src="/images/iqooneo7-color-img2-md-x2.png" alt=""></Image>
        </div>
      </div>
      <div className="box box2">
        <div className="box-container">
        <Image className="img block object-contain" width="922" height="1210" src="/images/iqooneo7-color-img3-md-x2.png" alt=""></Image>

        </div>
      </div>
      {/* <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    2222
    
    <div className="w-[100px] h-[100px] rounded-xl bg-green-800 green m-4"></div> */}
      {/* <Image className="img block" width="922" height="1210" src="/images/iqooneo7-color-img2-md-x2.png" alt=""></Image> */}
      {/* <Image className="img block" width="922" height="1210" src="/images/iqooneo7-color-img3-md-x2.png" alt=""></Image> */}
    </div>)
}