import { useEffect, useState } from "react";
import React from 'react'
import { useLoaderData } from "react-router-dom";

function Github() {
    const data=useLoaderData()
    // const [data,Setdata]=useState([])
    // useEffect(() => {
    //    fetch('https://api.github.com/users/Sourabh-Coder001')
    //    .then(response=>response.json())
    //    .then(data=>{
    //     console.log(data);
    //     Setdata(data)
    //    })
    // }, []);
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>Github Followers: {data.following}
    <img className="text-center" src={data.avatar_url} alt="Git Picture" width={380} />
    </div>
  )
}

export default Github

export const gitHubInfo=async()=>{
    const response=await fetch('https://api.github.com/users/Sourabh-Coder001')
    return response.json()
}