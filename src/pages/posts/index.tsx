import { IPost } from "@/interfaces"
import axios from "axios"
import Link from "next/link"

export default function Index({posts} : {posts: IPost[]}) {
  return (
    <>
        {posts.map((post) => <b key={post.userId}><li >{post.title}</li>
        <Link href={`posts/${post.id}`} >here</Link>
        </b>)}
    </>
  )
}

export async function getStaticProps() {
    const res = (await axios.get("https://jsonplaceholder.typicode.com/posts")).data
    return {
        props:{
            posts: res
        }
    }
}