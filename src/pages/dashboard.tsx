import instance from '@/context/holder'
import { IData } from '@/interfaces'
import React from 'react'

export default function Dashboard() {
 
const [isL , setL] = React.useState(true)
const [data , setdata] = React.useState<null | IData>(null)
React.useEffect(() => {
async function D()  {
    const res = (await instance.get("/dashboard")).data
    setdata(res)
    setL(false)

}
D()
}, []) 
if (isL) <h2>Loading...</h2>
return (
    <div>dashboard 
        {data?.likes} <br />
        {data?.posts} <br />
        {data?.followers} <br />
        {data?.following}
    </div>
  )
}
