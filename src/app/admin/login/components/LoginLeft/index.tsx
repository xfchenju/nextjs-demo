import Image from "next/image"

export default function LoginLeft() {
  return <div className="flex-1 flex flex-col justify-center items-center bg-gradient-to-t from-primary-100 to-primary-600">
    <img className="absolute left-[10px] top-[10px] h-[50px]" src="/images/admin/logo.png" alt=""></img>
    {/* <Image className="absolute left-[10px] top-[10px]" height="50" src="/images/admin/logo.png" alt=""></Image> */}
    <Image  width="700" height="700" src="/images/admin/login/bg_left.png" alt=""></Image>
  </div>
}