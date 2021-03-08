import Head from 'next/head'
import React from 'react'
import { CardConsumption } from '../../components/CardConsumption';
import { DashNavbar } from '../../components/DashNavbar';

import styles from '../../styles/pages/Consumption.module.css'

export default function Consumption() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Dashboard/Consumption</title>
      </Head>

      <DashNavbar />
      <CardConsumption />

    </div>
  );
}