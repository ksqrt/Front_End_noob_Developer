import React from 'react'
import { Navigate } from 'react-router-dom'

export default function MyPage() {
    const isLoggedIn =false;
    // 
    if(!isLoggedIn) {
        return <Navigate to="/login" replace ={true}></Navigate>
    }
  return (
    <div>마이페이지</div>
  )
}
