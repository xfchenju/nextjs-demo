'use client';

import Link from 'next/link'
import { useRouter } from 'next/navigation'
 
export default function Dashboard() {
  const router = useRouter();

  function routerTo(url: string) {
    router.push(url)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/dashboard/settings">Dashboard</Link>
      <div onClick={() => routerTo('/dashboard/settings')}>跳转测试</div>
    </main>
  )
}
