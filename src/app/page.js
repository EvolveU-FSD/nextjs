import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Main page</div>
      <Link href="/users">Users</Link>
      <Link href="/todos">Todos</Link>
      <p>Timestamp: {new Date().toLocaleTimeString()}</p>
    </>
  );
}
