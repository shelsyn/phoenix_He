/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'
import React from "react"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="PhoenixCar - ¿Necesitas alquilar un carro en Colombia? En Phoenixcar ofrecemos una amplia selección de vehículos a precios asequibles. ¡Reserva hoy mismo y disfruta de la comodidad y libertad de explorar la ciudad a tu propio ritmo!." />
        <title>PhoenixCar - renta de carros Colombia</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
