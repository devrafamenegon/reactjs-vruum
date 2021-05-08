import Head from 'next/head'
import React from 'react'
import { CardCourse } from '../../components/CardCourse';
import { DashNavbar } from '../../components/DashNavbar';

export default function Course() {
  return (
    <div>

      <Head>
        <title>Course | Vruum</title>
      </Head>

      <DashNavbar color="var(--blue)"/>
      <CardCourse />

    </div>
  );
}