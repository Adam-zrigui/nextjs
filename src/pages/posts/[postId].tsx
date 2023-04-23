import { IParams, IPost } from '@/interfaces'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'

export default function PostId({post} : {post : IPost}) {
    const router = useRouter()
  return (
    <div>
        {post.id }
    </div>
  )
}
export async function getStaticPaths() {
    const res = (await axios.get(`https://jsonplaceholder.typicode.com/posts`)).data
    const paths = res.map((p : IPost) => {
        return {
params:{
    postId:`${p.id}`
}
        }
    })
    return {
    paths,
    fallback:true
    }
}

export async function getStaticProps(context : IParams) {
    const {postId} = context.params
    const res = (await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)).data
return {
    props:{
        post: res
    }
}
}