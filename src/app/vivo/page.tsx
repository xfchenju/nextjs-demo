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

    gsap.to('.vi-img-container', {
      // background: 'rgba(23, 43, 22, 0.3)',
      scrollTrigger: {
        trigger: '.vi-img-container',
        start: 'top top',
        end: '240%',
        scrub: true,
        pin: true,
        markers: true,
        id: 'container'
      }
    })


    gsap.to('.mask-blue', {
      height: '100%',
      scrollTrigger: {
        trigger: '.mask-blue',
        scrub: true,
      }
    })

    gsap.to('.mask-black', {
      height: '100%',
      scrollTrigger: {
        trigger: ".mask-blue",
          start: "top top",
          end: "+1200",
          scrub: true,
      }
    })


    // ScrollTrigger.create({
    //   trigger: '.img-container',
    //   start: 'bottom bottom-=10px',
    //   end: 'bottom top',
    //   // scrub: 0.5,
    //   pin: true,
    //   markers: true,
    // })

    // gsap.to('.img-container', {
    //   // opacity: 1,
    //   // rotate: 360,
    //   // scale: 0.5,
    //   scrollTrigger: {
    //     trigger: '.img-container',
    //     start: 'bottom bottom-=100px',
    //     end: 'bottom top',
    //     scrub: true,
    //     pin: true,
    //     markers: true,
    //   }
    // })


    //  gsap.to(".img-box.img-box2", {
    //   height: '100%',
    //   scrollTrigger: {
    //     trigger: ".img-box2",
    //     start: "bottom bottom",
    //     end: "bottom top",
    //     markers: true,
    //     scrub: true,
    //     // pin: true
    //   },
    // })

    // gsap.to(".img-box.img-box3", {
    //   height: '100%',
    //   scrollTrigger: {
    //     trigger: ".img-box3",
    //     start: "bottom bottom",
    //     end: "bottom top",
    //     markers: true,
    //     scrub: true,
    //     // pin: true
    //   },
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
      <div className="vi-img-container">
        <div className="vi-mask mask-orange">
          <div className="vi-box">
            <Image className="vi-img vi-f1 block object-contain" width="922" height="1210" src="/images/iqooneo7-color-img1-md-x2.png" alt="" />
          </div>
        </div>
        <div className="vi-mask mask-blue" style={{height: 0}}>
          <div className="vi-box">
            <Image className="vi-img vi-f2 block object-contain" width="922" height="1210" src="/images/iqooneo7-color-img2-md-x2.png" alt="" />
          </div>
        </div>
        <div className="vi-mask mask-black" style={{height: 0}}>
          <div className="vi-box">
            <Image className="vi-img vi-f3 block object-contain" width="922" height="1210" src="/images/iqooneo7-color-img3-md-x2.png" alt="" />
          </div>
        </div>
      </div>
     


      {/* <div className="container">
        <div className="img-container">
          <div className="img-wrap img-box1">
            <Image className="img img1 block object-contain" width="922" height="1210" src="/images/iqooneo7-color-img1-md-x2.png" alt="" />
          </div>
        </div>
        <div className="img-container">
          <div className="img-wrap img-box2">
            <Image className="img img2 block object-contain" width="922" height="1210" src="/images/iqooneo7-color-img2-md-x2.png" alt="" />
          </div>
        </div>
        <div className="img-container">
          <div className="img-wrap img-box3">
            <Image className="img img3 block object-contain" width="922" height="1210" src="/images/iqooneo7-color-img3-md-x2.png" alt="" />
          </div>
        </div>
      </div> */}
      {/* <div className="img-container"> */}
        {/* <div className="img-wrapper">
          <div className="img-box img-box1">
            <div className="img-wrap">
              <Image className="img img1 block object-contain" width="922" height="1210" src="/images/iqooneo7-color-img1-md-x2.png" alt="" />
            </div>
          </div>
          <div className="img-box img-box2">
            <div className="img-wrap">
              <Image className="img img2 block object-contain" width="922" height="1210" src="/images/iqooneo7-color-img2-md-x2.png" alt="" />
            </div>
          </div>
          <div className="img-box img-box3">
            <div className="img-wrap">
              <Image className="img img3 block object-contain" width="922" height="1210" src="/images/iqooneo7-color-img3-md-x2.png" alt="" />
            </div>
          </div>
        </div> */}
      {/* </div> */}
      {/* <section className="banner"></section> */}
      {/* <section className="banner"></section> */}
      {/* <section className="banner"></section> */}


      {/* <div className="box box0">
        <div className="box-container">
          <Image className="img block object-contain" width="922" height="1210" src="/images/iqooneo7-color-img1-md-x2.png" alt=""></Image>
        </div>
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
      </div> */}
      {/* <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    2222
    
    <div className="w-[100px] h-[100px] rounded-xl bg-green-800 green m-4"></div> */}
      {/* <Image className="img block" width="922" height="1210" src="/images/iqooneo7-color-img2-md-x2.png" alt=""></Image> */}
      {/* <Image className="img block" width="922" height="1210" src="/images/iqooneo7-color-img3-md-x2.png" alt=""></Image> */}
    </div>)
}