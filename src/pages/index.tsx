import Image from 'next/image'
import useNavigation from '@/context/nav'
import { useState } from 'react'
import Link from 'next/link'
export default function Home() {
  const [getter, setter] = useState("")
  const { navigateTo } = useNavigation()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<Link href='/users'>users</Link>
<Link href='/posts'>posts</Link>
    </main>
  )
}
