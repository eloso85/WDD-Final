import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";


export default function Home() {
  return <main className="home_main">
    <Hero />
  </main>;
}
