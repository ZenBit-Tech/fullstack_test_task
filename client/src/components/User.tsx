import React from 'react'
import { IUser } from '../models';

interface UserProps {
  user: IUser
}

export function User(props: UserProps) {
  console.log(props);
  
  return(
    <div
      className='border item-center mb-2 user-cart'
    >
      <img className='w-300' src="http://localhost:8000/user-logo.png" alt="" />
      <h1 className='name'>{props.user.name}</h1>
      <p>{props.user.email}</p>
      <p>{props.user.password}</p>
    </div>
  )
}