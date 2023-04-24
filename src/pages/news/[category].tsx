import instance from '@/context/holder'
import { INews, IParams } from '@/interfaces'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import React from 'react'

export default function newsId({news , category} : {news : INews[] , category : string}) {
  return (
    <>
    showing cate <i>{category}</i>
    {news.map((n) => {
      return (
        <div key={n.id}>
        <h2>{n.title}</h2>,
        <p>{n.description}</p>
        </div>
      )
    })}
    </>
  )
}
export const getServerSideProps = async (context : GetServerSidePropsContext) => {
  const { req , res } = context
  res.setHeader("Set-Cookie",['name=Vishwas'])
  const category = context.params?.category as string | undefined;
  if (!category) {
    return {
      notFound: true,
    };
  }
 const resp = (await instance.get(`/news?category=${category}`)).data

  return {
    props:{
      news: resp,
      category
    }
  }
}