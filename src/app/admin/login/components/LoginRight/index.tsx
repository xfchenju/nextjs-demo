import Image from "next/image"

export default function LoginRight() {
  return <div className="w-[576px] bg-white relative">
    login right
    <img className="absolute bottom-0 right-0 w-full h-auto z-10" src="/images/admin/login/bg_right.png" alt=""></img>

    {/* <Image className="absolute bottom-0 right-0" width="100" height="700" src="/images/admin/login/bg_right.png" alt=""></Image> */}
  </div>
}