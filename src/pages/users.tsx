import React from 'react'
import axios from 'axios'
import IUser from '@/interfaces'
import User from '@/components/user'
export default function users({users} : {users : IUser[]}) {
  return (
<User users={users} />
  )
}
export async function getStaticProps() {
const res = await (await axios.get("https://jsonplaceholder.typicode.com/users")).data
console.log(res)
return {props : {users: res}}
}