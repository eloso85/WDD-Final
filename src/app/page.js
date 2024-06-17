import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import ServiceSelector from "@/components/serviceCard/ServiceCard";


export default function Home() {
  return <main className="home_main">
    <Hero />
    <ServiceSelector />
  </main>;
}
