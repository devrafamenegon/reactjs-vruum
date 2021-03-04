import Head from 'next/head'
import React from 'react'
import { Navbar } from '../components/Navbar';

import styles from '../styles/pages/Dashboard.module.css'

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <nav>
        <Navbar />
      </nav>
    </div>
  );
}