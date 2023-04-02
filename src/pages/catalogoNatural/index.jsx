import HeaderNatural from "@/components/CatalogoNatural/HeaderNatural";
import RentingNatural from "@/components/CatalogoNatural/RentingNatural";
import Footer from "@/components/Footer";
import Productos from "@/components/Productos";

const products = [
  {
    id: 1,
    name: 'Chevrolet TRACKER TURBO LTZ AT',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Chevrolet+TRACKER+TURBO+LTZ+AT+-Camioneta,+gracias.',
    imageSrc: './CHEVROLET-TRACKER-TURBO.jpg',
    imageAlt: 'Chevrolet TRACKER TURBO LTZ AT -Camioneta - SUV.',
    precio: '$1´400.000',
    marca: 'Chevrolet',
    tipo: 'Camioneta - SUV',
  },
  {
    id: 1,
    name: 'Chevrolet ONIX HB PREMIER TURBO',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Chevrolet+ONIX+HB+gracias.',
    imageSrc: './onix-HB.jpg',
    imageAlt: 'Chevrolet ONIX HB PREMIER TURBO AT -Automovil',
    precio: '$1´400.000',
    marca: 'Chevrolet',
    tipo: 'Automovil',
  },
  {
    id: 1,
    name: 'Chevrolet TAHOE 5.3L 4X4 LT',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Chevrolet+TAHOE++4X4+gracias.',
    imageSrc: './chevrolet_tahoe.jpg',
    imageAlt: 'Chevrolet TAHOE 5.3L 4X4 LT -Camioneta - SUV',
    precio: '$1´400.000',
    marca: 'Chevrolet',
    tipo: 'Camioneta - SUV',
  },
  {
    id: 1,
    name: 'Ford ESCAPE SE 4X2 ECOBOOST',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Ford+ESCAPE+SE+4X2+gracias.',
    imageSrc: './FORD-ESCAPE-SE-SPORT-4X2.jpg',
    imageAlt: 'Ford ESCAPE SE 4X2 ECOBOOST -Camioneta - SUV',
    precio: '$1´400.000',
    marca: 'Ford',
    tipo: 'Camioneta - SUV',
  },
  {
    id: 1,
    name: 'Hyundai HB20 Getz Advance AT',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Hyundai+HB20,gracias.',
    imageSrc: './HYUNDAI-HB20.jpeg',
    imageAlt: 'Hyundai HB20 Getz Advance AT -Automovil',
    precio: '$1´400.000',
    marca: 'Hyundai',
    tipo: 'Automovil',
  },
  {
    id: 1,
    name: 'Jeep COMPASS LONGITUDE PLUS',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Jeep+COMPASS+LONGITUDE,+gracias.',
    imageSrc: './Jeep COMPASS.jpeg',
    imageAlt: 'Jeep COMPASS LONGITUDE PLUS -Camioneta – SUV',
    precio: '$1´400.000',
    marca: 'Jeep',
    tipo: 'Camioneta – SUV',
  },
  {
    id: 1,
    name: 'Kia PICANTO VIBRANT MT',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Kia+PICANTO+,gracias.',
    imageSrc: './PICANTO.jpg',
    imageAlt: 'Kia PICANTO VIBRANT MT -Automovil',
    precio: '$1´400.000',
    marca: 'Kia',
    tipo: 'Automovil',
  },

  {
    id: 1,
    name: 'Kia RIO SEDÁN EMOTION MT',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Kia+RIO+,gracias.',
    imageSrc: './kia-rioo.jpeg',
    imageAlt: 'Kia RIO SEDÁN EMOTION MT -Automovil',
    precio: '$1´400.000',
    marca: 'Kia',
    tipo: 'Automovil',
  },

  {
    id: 1,
    name: 'Mazda CX5 TOURING 2.0 AT 4X2',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Mazda+CX5+,gracias.',
    imageSrc: './mazda-cx5.jpg',
    imageAlt: 'Mazda CX5 TOURING 2.0 AT 4X2 CUERO -Camioneta - SUV',
    precio: '$1´400.000',
    marca: 'Mazda',
    tipo: 'Camioneta',
  },
  {
    id: 1,
    name: 'Mazda MX30 GRAND TOURING',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Mazda+MX30+,gracias.',
    imageSrc: './mazda-MX30.jpg',
    imageAlt: 'Mazda MX30 GRAND TOURING -Camioneta - SUV',
    precio: '$1´400.000',
    marca: 'Mazda',
    tipo: 'Camioneta - SUV',
  },
  {
    id: 1,
    name: 'Mercedes Benz GLB 200 AMG LINE',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+mercedez+GLB,+gracias.',
    imageSrc: './GLB 200.jpg',
    imageAlt: 'Mercedes Benz GLB 200 AMG LINE -Campero',
    precio: '$1´400.000',
    marca: 'Mercedes Benz',
    tipo: 'Campero',
  },
  {
    id: 1,
    name: 'Mitsubishi Eclipse Cross AT 4x4',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+nissan+panel+NV-350,+gracias.',
    imageSrc: './mitsubishi-eclipse.jpg',
    imageAlt: 'Mitsubishi Eclipse Cross AT 4x4 -Camioneta - SUV',
    precio: '$1´400.000',
    marca: 'Mitsubishi',
    tipo: 'Camioneta',
  },

  {
    id: 1,
    name: 'Nissan KICKS ADVANCE AUT CVT',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Nissan+KICKS,+gracias.',
    imageSrc: './nissan_kicks.jpg',
    imageAlt: 'Nissan KICKS ADVANCE 1.6L 2WD AUT CVT -Camioneta - SUV',
    precio: '$1´400.000',
    marca: 'Nissan',
    tipo: 'Camioneta',
  },
  {
    id: 1,
    name: 'Nissan NEW SENTRA 2.0L SR AUT',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Nissan+NEW+SENTRA,+gracias.',
    imageSrc: './Nissan NEW.jpg',
    imageAlt: 'Nissan NEW SENTRA 2.0L SR AUT CVT -Automovil',
    precio: '$1´400.000',
    marca: 'Nissan',
    tipo: 'Automovil',
  },
  {
    id: 1,
    name: 'Peugeot GT-LINE 1.2 PURETECH',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Peugeot+2008,+gracias.',
    imageSrc: './Peugeot 2008.jpg',
    imageAlt: 'Peugeot 2008 GT-LINE 1.2 PURETECH -Camioneta - SUV',
    precio: '$1´400.000',
    marca: 'Peugeot',
    tipo: 'Camioneta - SUV',
  },

  {
    id: 1,
    name: 'Renault LOGAN LIFE',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Renault+LOGAN,+gracias.',
    imageSrc: './Renault LOGAN LIFE.jpg',
    imageAlt: 'Renault LOGAN LIFE + PH2 -Automovil',
    precio: '$1´400.000',
    marca: 'Renault',
    tipo: 'Automovil',
  },

  {
    id: 1,
    name: 'Renault TWIZY TECHNIC',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Renault+TWIZY,+gracias.',
    imageSrc: './Renault TWIZY.jpeg',
    imageAlt: 'Renault TWIZY TECHNIC -Automovil',
    precio: '$1´400.000',
    marca: 'Renault',
    tipo: 'Automovil',
  },
  {
    id: 1,
    name: 'Subaru XV HYBRID',
    year: '2022',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Subaru+XV,+gracias.',
    imageSrc: './Subaru XV.jpeg',
    imageAlt: 'Subaru XV HYBRID -Campero',
    precio: '$1´400.000',
    marca: 'Subaru',
    tipo: 'Campero',
  },
  {
    id: 1,
    name: 'Suzuki NEW ALTO 800 STD ABS',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Suzuki+NEW+ALTO+800,+gracias.',
    imageSrc: './alto.jpg',
    imageAlt: 'Suzuki NEW ALTO 800 STD AC ABS -Automovil',
    precio: '$1´400.000',
    marca: 'Suzuki',
    tipo: 'Automovil',
  },
  {
    id: 1,
    name: 'Suzuki XL7 GL MT',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Suzuki+XL7,+gracias.',
    imageSrc: './Suzuki XL7.jpg',
    imageAlt: 'Suzuki XL7 GL MT -Camioneta - SUV',
    precio: '$1´400.000',
    marca: 'Suzuki',
    tipo: 'Camioneta - SUV',
  },
  {
    id: 1,
    name: 'Renault ZOE (Eléctrico)',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Renault+ZOE,+gracias.',
    imageSrc: './Renault ZOE.jpeg',
    imageAlt: 'Renault ZOE (Eléctrico) -Automovil',
    precio: '$1´400.000',
    marca: 'Renault',
    tipo: 'Automovil',
  },
  {
    id: 1,
    name: 'Ford BRONCO SPORT WILDTRACK',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Ford+BRONCO+SPORT,+gracias.',
    imageSrc: './Ford-Bronco.jpg',
    imageAlt: 'Ford BRONCO SPORT WILDTRACK 4X4 -Camioneta - SUV.',
    precio: '$1´400.000',
    marca: 'Ford',
    tipo: 'Camioneta - SUV',
  },
  {
    id: 1,
    name: 'Mazda CX50 GRAND TOURING 4X2',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Mazda+CX50+GRAND,+gracias.',
    imageSrc: './mazda_cx_50.jpg',
    imageAlt: 'Mazda CX50 GRAND TOURING 2.5 AT 4X2 -Camioneta - SUV',
    precio: '$1´400.000',
    marca: 'Mazda',
    tipo: 'Camioneta - SUV',
  },
  {
    id: 1,
    name: 'Mazda CX5 TOURING 2.0 AT 4X2',
    year: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Mazda+CX5+TOURING,+gracias.',
    imageSrc: './mazda-cx5.jpg',
    imageAlt: 'Mazda CX5 TOURING 2.0 AT 4X2 CUERO -Camioneta - SUV',
    precio: '$1´400.000',
    marca: 'Mazda',
    tipo: 'Camioneta - SUV',
  },
];
export default function CatalogoPersonaNatural() {
  return (
    <>
      <HeaderNatural />
      <RentingNatural />
      <section id="catalogoEmpresa">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl text-gold-goldTitle font-bold ">Nuestro Catálogo</h2>
            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id}>
                  <div className="relative rounded-xl shadow-lg">
                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                      <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center" />
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
                      href={product.href}
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
