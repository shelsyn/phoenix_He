import { Head, Html, Main, NextScript } from 'next/document'

export default function Document(props) {

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
        <meta name="keywords" content="alquiler de carros, renta de autos, alquiler de camiones, alquiler de automóviles, alquiler de vehículos" />
         <meta name="description" content="¿Necesitas alquilar un carro en Colombia? En Phoenixcar ofrecemos una amplia selección de vehículos a precios asequibles. ¡Reserva hoy mismo y disfruta de la comodidad y libertad de explorar la ciudad a tu propio ritmo!" />
        <meta name="author" content="Phoenixcar" />

      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
