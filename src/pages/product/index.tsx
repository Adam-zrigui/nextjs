import instance from '@/context/holder'
import { IProduct } from '@/interfaces'
import Link from 'next/link'
import React from 'react'

export default function index({products} : { products : IProduct[]}) {
  return (
    <>
<h1>list of products</h1>
{products.map(p => <b key={p.id}><h4>{p.title}</h4> <p>{p.description}</p>      <Link href={`product/${p.id}`} >here</Link></b>)}
    </>
  )
}
export async function getStaticProps() {
    const res = (await instance.get("/products")).data
    return {
        props:{
            products: res
        }
    }
}