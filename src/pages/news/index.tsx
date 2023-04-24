import instance from '@/context/holder'
import { INews } from '@/interfaces'
import React from 'react'

export default function index({news} : {news : INews[]}) {
  return (
    <div>
        {
            news.map(n => <div key={n.id}>
                <h2>{n.title} | {n.category}</h2>
        
            </div> )
        }
    </div>
  )
}
export async function getServerSideProps(){
    const res = (await instance.get("/news")).data
    return {
        props: {
            news: res
        }
    }
}