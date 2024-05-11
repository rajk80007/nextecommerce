"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    getDefaultData()
  },[])
  const getDefaultData=()=>{
    GlobalApi.getDefault().then((res)=>console.log(res));
  }
  return (
    <div>
      <Hero />

    </div>
  );
}
