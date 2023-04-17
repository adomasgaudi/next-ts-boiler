import { Inter } from "next/font/google";
import CompApp from "./CompApp";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <h1 className={inter.className}>Empty</h1>
      <CompApp />
    </main>
  );
}
