import { AnySrvRecord } from 'dns';
import { calculate } from './utils'
import { useRef, useEffect, useState } from 'react';
import './box.css'

export default function Box() {
  const myRef = useRef(null);
  // useEffect(() => {
  //   // 通过 myRef.current 获取 DOM 元素
  //   console.log(myRef.current);
  // }, []);
  const [maskCls, setMaskCls] = useState('')
  
  const handleMouseEnter = (e) => {
    const dir = calculate(myRef.current as any, e)
    console.log('dir', dir)
    setMaskCls(`box-over-in--${dir}`)
    setTimeout(() => { 
      setMaskCls('box-over-in')
    }, 100)
  }
  const handleMouseLeave = (e) => {
    const dir = calculate(myRef.current as any, e)
    console.log('out dir', dir)
    setMaskCls(`box-over-out--${dir}`)
    setTimeout(() => { 
      setMaskCls('')
    }, 300)
  }

  const text = (Math.random() * 10000).toFixed()

  return (
    <div ref={myRef} id="box" className="w-1/5 relative box-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img className="w-full h-full" src="https://images.unsplash.com/photo-1611605645802-c21be743c321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" />
      <div className={`w-full h-full absolute bg-gray-950/80 box-over ${maskCls}`}>+{text}</div>
    </div>
  )
}