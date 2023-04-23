import Image from 'next/image'
import useNavigation from '@/context/nav'
import { useState } from 'react'
export default function Home() {
  const [getter, setter] = useState("")
  const { navigateTo } = useNavigation()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <input type="text" onChange={(e) => setter(e.target.value)}/>
   <button disabled={getter == ""} type='submit' onClick={()=> {
  navigateTo('/nice')
   }}>submit</button>
    </main>
  )
}
