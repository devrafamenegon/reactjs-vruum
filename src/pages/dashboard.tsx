import Head from 'next/head'
import React from 'react'
import { DashNavbar } from '../components/DashNavbar';

import styles from '../styles/pages/Dashboard.module.css'

export default function Dashboard() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Dashboard</title>
      </Head>

      <DashNavbar color="light-gray"/>
    </div>
  );
}