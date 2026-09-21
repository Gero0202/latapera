import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./component/Header";
import { Hero } from "./component/Hero";
import { HowToOrder } from "./component/HowToOrder";
import { MenuItem, MenuSection } from "./component/MenuSection";
import pizzas from '@/app/data/pizzas.json'
import { InfoSection } from "./component/InfoSection";
import { WhatsAppFAB } from "./component/WhatsAppFAB";
import { Footer } from "./component/Footer";
import { AboutSection } from "./component/AboutSection";
import { FinalCta } from "./component/FinalCta";



export default function Home() {

  const items: MenuItem[] = pizzas as unknown as MenuItem[];

  return (
    <>
      <Header/>
      <Hero whatsappNumber="5492214347124"/>
      <HowToOrder/>
      <MenuSection />
      <InfoSection
        address="Av. 66 e/ 16 y 17, La Plata"
        hours="Martes a Domingo: 18:00 - 22:00"
        deliveryTypes={["Delivery", "Takeaway"]}
        instagramUser="lataperia"
      />
      <WhatsAppFAB whatsappNumber="5492214347124"/>
      <AboutSection imageSrc="/aboutus.jpg" />
      <FinalCta/>
      <Footer/>
    </>
  );
}
