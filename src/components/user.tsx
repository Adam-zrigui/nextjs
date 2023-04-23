import IUser from "@/interfaces";

export default function User({users} : {users : IUser[]}) {
  return (
    <>{users.map((el ) => <li key={el.id}>{el.name}</li>)}</>
  )
}
