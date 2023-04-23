import instance from '@/context/holder'
import { IParams, IProduct } from '@/interfaces'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'

export default function ProductId({ product }: { product: IProduct }) {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>loading...</h1>
  }
  return (
    <div>
      <h2>{product.title}</h2>
      <b>{product.price}</b>
      <p>{product.description}</p>
    </div>
  )
}

export async function getStaticProps() {
  const res = (await instance("/products")).data
  return {
    props: {
      products: res
    }
  }
}

export async function getStaticPaths(context: IParams) {
  const { productId } = context.params || {} as IParams['params']
  if (!productId) return { paths: [], fallback: true }
  const res = await axios.get(`http://localhost:5000/product/${productId}`)
  const paths = res.data.map((p: IProduct) => {
    return {
      params: {
        productId: `${p.id}`
      }
    }
  })
  return {
    paths,
    fallback: true
  }
}
