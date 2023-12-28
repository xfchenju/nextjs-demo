'use client';
import { useEffect, useRef } from "react"
import gsap from "gsap"
import CustomEase from "gsap/CustomEase"
import { ScrollTrigger } from "gsap/ScrollTrigger"
export default function Gsap() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".green", {
      rotate: 360,
      scale: 0.5,
      x: '-30vw',
      ping: true,
      scrollTrigger: {
        trigger: ".green",
        start: "top bottom-=100px",
        end: "top 10%",
        markers: true,
        scrub: true,
      },
    });


    // gsap
    //   .from(q(".singleProject:nth-child(2)"), {
    //     y: 2000,
    //     ease: Linear.easeNone,
    //     opacity: 1,
    //     duration: 20,
    //     repeat: -1,
    //     paused: false,
    //   })
    //   .to(q(".singleProject:nth-child(2)"), {
    //     y: -2000,
    //     ease: Linear.easeNone,
    //     opacity: 1,
    //     duration: 20,
    //     repeat: -1,
    //     paused: false,
    //   });
  }, [])

  return (<div className="w-screen h-[200vh] ">
    <div className="w-[100vw] h-[90vh]"></div>
    {/* <div className="flex flex-wrap items-end"> */}
    <div className="flex flex-wrap items-end">
      <div className="w-[100px] h-[100px] rounded-xl bg-orange-400 orange m-4"></div>
      <div className="w-[100px] h-[100px] rounded-xl bg-purple-500 purple m-4"></div>
      <div className="w-[100px] h-[100px] rounded-xl bg-red-800 red m-4"></div>
      <div className="w-[100px] h-[100px] rounded-xl bg-green-800 green m-4"></div>
      <div className="w-[100px] h-[100px] rounded-xl bg-green-800 box m-4"></div>
      <div className="w-[100px] h-[100px] rounded-xl bg-green-800 box m-4"></div>
    </div>
    <div className="w-[100vw] h-[100vh]"></div>
    {/* </div> */}
  </div>)
}