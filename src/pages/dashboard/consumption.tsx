import Head from 'next/head'
import React from 'react'
import { CardConsumption } from '../../components/CardConsumption';
import { DashNavbar } from '../../components/DashNavbar';

export default function Consumption() {
  return (
    <div>

      <Head>
        <title>Consumption | Vruum</title>
      </Head>

      <DashNavbar color="var(--red)"/>
      <CardConsumption />

    </div>
  );
}