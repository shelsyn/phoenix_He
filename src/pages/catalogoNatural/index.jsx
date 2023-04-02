import HeaderNatural from "@/components/CatalogoNatural/HeaderNatural";
import RentingNatural from "@/components/CatalogoNatural/RentingNatural";
import Footer from "@/components/Footer";
import Productos from "@/components/Productos";
import Head from "next/head";

const products = [
  {
    id: 1,
    name: 'Vitara Mc 2Wd At Gl+',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Suzuki+Vitara+Mc,+gracias.',
    imageSrc: './suzuki-Vitara.jpg',
    precio: '$3´110.900 mensual',
    marca: 'Suzuki',
    tipo: 'Camioneta - SUV',
    ficha: 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8d0a4fa4-b9c5-4db4-9c69-37acc2cdfa1e'
  },

  {
    id: 1,
    name: 'Tracker Turbo Ls At',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Chevrolet+Tracker+Turbo+Ls,+gracias.',
    imageSrc: './trackerTurbo.webp',
    precio: '$3´151.900 mensual',
    marca: 'Chevrolet',
    tipo: 'Camioneta - SUV',
    ficha:''
  },
  {
    id: 1,
    name: 'Nueva Duster Zen 1.6 4X2 Mt',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Renault+Duster+Zen+1.6+2024,+gracias.',
    imageSrc: './duster.jpg',
    precio: '$3´111.900 mensual',
    marca: 'Renault',
    tipo: 'Camioneta - SUV',
    ficha:''
  },
  {
    id: 1,
    name: ' Pulse Impetus At',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Renault+ZOE,+gracias.',
    imageSrc: './fiat.png',
    precio: '$3´659.900 mensual',
    marca: 'Fiat',
    tipo: 'Camioneta – SUV',
    ficha:''
  },
  {
    id: 1,
    name: 'Cx5 Touring 2.0 At 4X2',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Mazda+Cx5+grand+touring+2.0,+gracias.',
    imageSrc: './mazda2-0.webp',
    precio: '$4´204.900 mensual',
    marca: 'Mazda',
    tipo: 'Camioneta – SUV',
    ficha:''
  },
  {
    id: 1,
    name: 'T-Cross Trendline Sense 170 Tsi Mt',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+T-Cross+Trendline+Sense+SE+170,+gracias.',
    imageSrc: './t-cross.jpg',
    precio: '$3´280.900 mensual',
    marca: 'Volkswagen',
    tipo: 'Camioneta - SUV',
    ficha:''
  },
  {
    id: 1,
    name: 'Nueva Koleos Intens 4X4 Ph2',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Koleos+Intens+4x4+,gracias.',
    imageSrc: './koleos.webp',
    precio: '$4´827.900 mensual',
    marca: 'Renault',
    tipo: 'Camioneta – SUV',
    ficha:''
  },
  {
    id: 1,
    name: 'Cx5 Grand Touring 2.5 At 4X2',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Mazda+Cx5+grand+touring+2.5,+gracias.',
    imageSrc: './mazda2-5.webp',
    precio: '$4´709.900 mensual',
    marca: 'Mazda',
    tipo: 'Camioneta - SUV',
    ficha:''
  },

///////////////AUTOMOVIL////////
  {
    id: 1,
    name: 'Logan Life Ph2',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Kia+RIO+,gracias.',
    imageSrc: './logan.jpg',
    imageAlt: 'Renault ',
    precio: '$2´010.900 mensual',
    marca: 'Renault ',
    tipo: 'Automovil',
    ficha:''
  },

  {
    id: 1,
    name: ' Kwid Zen',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Mazda+CX5+,gracias.',
    imageSrc: './kwid.jpg',
    precio: '$1´982.900 mensual',
    marca: 'Renault',
    tipo: 'Automovil',
    ficha:''
  },
  {
    id: 1,
    name: 'Logan Life Fleet Cvt',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Mazda+MX30+,gracias.',
    imageSrc: './logan2.jpg',
    imageAlt: 'Renault Logan Life Fleet Cvt',
    precio: '$2´466.900 mensual',
    marca: 'Renault ',
    tipo: 'Automovil',
    ficha:''
  },
  {
    id: 1,
    name: ' New Swift 1.2 Hybrid',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+nissan+panel+NV-350,+gracias.',
    imageSrc: './susukiSwift.png',
    precio: '$2´483.900 mensual',
    marca: 'Suzuki',
    tipo: 'Automovil',
    ficha:''
  },
  {
    id: 1,
    name: 'Onix Nb Lt Turbo At',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+mercedez+GLB,+gracias.',
    imageSrc: './onix.png',
    precio: '$2´599.900 mensual',
    marca: 'Chevrolet',
    tipo: 'Automovil',
    ficha:''
  },
  {
    id: 1,
    name: ' Logan Intens Cvt Ph2',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Nissan+KICKS,+gracias.',
    imageSrc: './logan3.png',
    precio: '$2´505.900 mensual',
    marca: 'Renault',
    tipo: 'Automovil',
    ficha:''
  },
  {
    id: 1,
    name: ' Virtus Trendline 1.6L 110Hp 5Mt',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Nissan+NEW+SENTRA,+gracias.',
    imageSrc: './wwagen.jpg',
    precio: '$2´657.900 mensual',
    marca: 'Volkswagen',
    tipo: 'Automovil',
    ficha:''
  },
  {
    id: 1,
    name: 'Renault TWIZY TECHNIC',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Renault+TWIZY,+gracias.',
    imageSrc: './twzy.jpg',
    precio: '$1´400.000 mensual',
    marca: 'Renault',
    tipo: 'Automovil',
    ficha:''
  },
  ///////////////////////////CAMPEROS/////////////////////////////////
  {
    id: 1,
    name: ' Nivus Comfortline 1.0L 200Tsi 6At',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Suzuki+NEW+ALTO+800,+gracias.',
    imageSrc: './nivus.webp',
    precio: '$3´193.900 mensual',
    marca: 'Volkswagen',
    tipo: 'Campero',
    ficha:''
  },
  {
    id: 1,
    name: ' Prado 5 Puertas Diesel 2.8 Tx',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Subaru+XV,+gracias.',
    imageSrc: './prado.png',
    precio: '$9´296.900 mensual',
    marca: 'Toyota ',
    tipo: 'Campero',
    ficha:''
  },
  {
    id: 1,
    name: ' Duster Iconic 1.3T 4X4 Mt',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Renault+LOGAN,+gracias.',
    imageSrc: './duster3.jpg',
    precio: '$3´419.900 mensual',
    marca: 'Renault',
    tipo: 'Campero',
    ficha:''
  },
  {
    id: 1,
    name: ' Nueva Duster Intens 1.3T 4X4 Mt',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Peugeot+2008,+gracias.',
    imageSrc: './duster2.jpg',
    precio: '$3´000.000 mensual',
    marca: 'Renault',
    tipo: 'Campero',
    ficha:''
  },
  {
    id: 1,
    name: ' Crossland Edition',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Suzuki+XL7,+gracias.',
    imageSrc: './opel.jpg',
    precio: '$3´361.900 mensual',
    marca: 'Opel',
    tipo: 'Campero',
    ficha:''
  },
 
];
export default function CatalogoPersonaNatural() {
  return (
    <>
      <Head>
        <title>Phoenix Car | Catalogo Natural</title>
        <meta
          name="description"
        />
      </Head>
      <HeaderNatural />
      <RentingNatural />
      <section id="catalogoEmpresa">
        <div className="bg-white">
          <div className="mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl text-gold-goldTitle font-bold ">Nuestro Catálogo</h2>
            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id}>
                  <div className="relative rounded-xl shadow-lg">
                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                      <img src={product.imageSrc} alt={product.imageAlt} className="h-fit w-fit object-cover object-center" />
                    </div>
                    <div className="relative p-2">
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <span className="flex flex-row items-center space-x-2 mt-1">
                        <p className="text-sm text-gray-900 bg-gold-goldWhite rounded-xl py-0.5 px-1">{product.marca}</p>
                        <p className="text-sm text-gray-900 bg-gold-goldWhite rounded-xl py-0.5 px-1">{product.year}</p>
                      </span>
                      <p className="mt-1 text-sm text-gray-500">{product.tipo}</p>
                      <p className="mt-1 text-lg font-semibold text-slate-700">{product.precio}</p>
                    </div>
                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50" />
                      {/* <p className="relative text-lg font-semibold text-white">{product.precio}</p> */}
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-2">
                  <a
                      href={product.ficha}
                      target="_blank"
                      className="col-span-1 relative flex items-center justify-center rounded-md border border-transparent bg-gold-goldButton py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gold-goldHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-goldSubtitle"
                      rel="noreferrer"
                    >
                      Ficha técnica<span className="sr-only">, {product.name}</span>
                    </a>
                    <a
                      href={product.href}
                      target="_blank"
                      className="col-span-1 relative flex items-center justify-center rounded-md border border-transparent bg-gold-goldButton py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gold-goldHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-goldSubtitle"
                      rel="noreferrer"
                    >
                      Más información<span className="sr-only">, {product.name}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Productos />
      {/* <Contacto /> */}
      <Footer />
    </>
  );
}
