import Head from 'next/head'
import React from 'react'
import { CardConsumption } from '../../components/CardConsumption';
import { DashNavbar } from '../../components/DashNavbar';

export default function Consumption() {
  return (
    <div>

      <Head>
        <title>Dashboard/Consumption</title>
      </Head>

      <DashNavbar />
      <CardConsumption />

    </div>
  );
}