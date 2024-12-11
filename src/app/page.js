import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import CheckTipOfTheDay from "./components/TipOfTheDay";

export default function Home() {
  return (
    <>
      <div>Main page</div>
      <Link href="/users">See Users</Link>
      <p></p>
      <Link href="/todos">See Todos</Link>
      <p>Timestamp: {new Date().toLocaleTimeString()}</p> 
      {/* The above timestamp is to show the difference between SSG vs SSR (running as dev vs running off build) */}
      <CheckTipOfTheDay/>
      {/* The above component is to show how to create your own API routes */}
    </>
  );
}
