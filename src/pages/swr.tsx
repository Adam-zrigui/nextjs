import instance from "@/context/holder"
import useSWR from "swr"
const fetcher =async () => {
    const res = (await instance.get("/dashboard")).data
return res
}
export default function Swr() {
const {data , error} = useSWR('dashboard' , fetcher)
if (error) return 'error'
if (!data) return 'Loading'
    return (
    <div>
          {data.likes} <br />
        {data.posts} <br />
        {data.followers} <br />
        {data.following}
    </div>
  )
}
