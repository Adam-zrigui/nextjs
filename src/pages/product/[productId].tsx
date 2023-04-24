import instance from '@/context/holder'
import { IParams, IPost, IProduct } from '@/interfaces'
import { useRouter } from 'next/router'
import React from 'react'

export default function PostId({product} : {product : IProduct}) {
    const router = useRouter()
    if (router.isFallback) {
    return <h1>Loading...</h1>
    }
  return (
    <div>
        {product.id }
    </div>
  )
}
export async function getStaticPaths() {
    const res = (await instance.get(`/products`)).data
  
    const paths = res.map((p : IProduct) => {
        return {
params:{
    productId:`${p.id}`
}
        }
    })
    return {
    paths,
    fallback:true
    }
}

export async function getStaticProps(context : IParams) {
    const {productId} = context.params
    const res = (await instance.get(`/products/${productId}`)).data
return {
    props:{
        product: res
    },
}
}