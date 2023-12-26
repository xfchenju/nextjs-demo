'use client';

import { useRouter } from "next/navigation";
import { useState } from "react"
import Box from "./components/Box";

interface ImgItem {
  id: number;
  src: string;
}

export default function Home() {
  const router = useRouter()

  const [current, setCurrent] = useState(1)
  const [imgList, setImgList] = useState<ImgItem[]>([
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2902&q=80'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'
    }
  ])

  const handleNext = () => {
    if (current < imgList.length) {
      setCurrent(current + 1)
    } else {
      setCurrent(imgList[0].id)
    }
    scrollTo(`img${current}`)
    // router.push(`/home/#img${current}`)
  }

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    console.log('element', element)
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const Navbar = () => {
    return (
      <div className="w-screen h-[56px] bg-gray-100 opacity-50 flex justify-between items-center px-[24px] fixed top-0">
        <div className="">{current}</div>
        <div className="">Home</div>
      </div>
    )
  }
  return (<main className="flex min-h-screen flex-col items-center justify-start">
    {Navbar()}
    <div className="w-screen">
      {imgList.map((item, index) => (
        <img key={index} id={`img${item.id}`} className="w-screen h-screen object-cover" src={item.src} />
      ))}

      <div className="fixed bottom-[24px] right-[24px] w-[100px] h-[100px] bg-orange-300" onClick={handleNext}></div>
    </div>
    <div className="w-screen h-[calc(100vh - 56px)] flex flex-wrap relative">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  </main>)
}