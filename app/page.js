import EventList from '@/components/HomePage/EventList';
import Header from '@/components/HomePage/Header';
import Image from 'next/image';
// import React from 'react';
// import NextImage from "@/public/logo.svg"

const page = () => {
  return (
    <>
      <Header />
      <EventList />
    </>
  );
};

export default page;