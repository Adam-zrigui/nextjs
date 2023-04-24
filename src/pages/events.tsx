import instance from '@/context/holder'
import { IEvent } from '@/interfaces'
import React, { useState } from 'react'

export default function Events({eventList} : {eventList : IEvent[]}) {
const [e , se] =useState(eventList)
    return (
    <>
    <button onClick={async () => {
        const res = (await instance.get("/events?category=CategoryA")).data
se(res)
    }}>click</button>
    list
    {e.map(e => {
        return (
            <div key={e.id}>
                <h2>{e.title} |  {e.date}</h2>
                <p>{e.description}</p>
            </div>
        )
    })}
    </>
  )
}
export const getServerSideProps = async () => {
const res = (await instance.get("/events")).data

    return {
        props:{
 eventList:res
        }
    }
}