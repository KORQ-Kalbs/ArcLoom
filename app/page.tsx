import "./globals.css";
import { gsap } from "gsap/gsap-core";
import Navbar from "./components/Navbar";

gsap.registerPlugin();

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </main>
  );
}
