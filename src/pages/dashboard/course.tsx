import Head from 'next/head'
import React from 'react'
import { CardCourse } from '../../components/CardCourse';
import { DashNavbar } from '../../components/DashNavbar';

import styles from '../styles/pages/Dashboard.module.css'

export default function Course() {
  return (
    <div>

      <Head>
        <title>Dashboard/Course</title>
      </Head>

      <DashNavbar />
      <CardCourse />

    </div>
  );
}