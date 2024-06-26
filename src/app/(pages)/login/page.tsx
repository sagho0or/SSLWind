'use client'
import React from 'react';
import isMobileView from "@/app/utils/isMobileView";
import LoginComponent from "@/app/components/Login";

export default function Login() {
  return (
    <>
      {
        isMobileView ?
          <LoginComponent />
          :
          <div className={"w-full h-screen bg-primary-00 flex items-center justify-between relative overflow-hidden"}>
            <div className={"absolute inset-0"}>
              <img
                src={"/images/login-promotion.png"}
                alt={"Background"}
                className={"w-full h-full object-cover blur-2px"}
              />
            </div>
            <div className={"flex w-3/6 justify-center relative z-10"}>
              <div className={'bg-white max-w-xl rounded-3xl overflow-hidden h-[35rem] w-[500px]'}>
                <LoginComponent />
              </div>
            </div>
          </div>


      }

    </>

  )
}