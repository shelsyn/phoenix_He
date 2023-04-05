import Footer from "@/components/Footer";
import Politicas from "@/components/QuienesSomos/Politicas";
import QuienesSomos from "@/components/QuienesSomos/QuienesSomos";

export default function SobreNosotros(){
  return(
    <>
    {/* Seccion Header */}
        <QuienesSomos />
        <Politicas />
        <Footer />
    </>
);
}