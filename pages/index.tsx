import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <h1>Stripe Payments</h1>
    <p>A consultancy session</p>
    <a 
    href="https://buy.stripe.com/test_bIY4h60Tvbg95JSbII"
    className="bg-black text-white font-bold py-2 px-4"
    >
      Buy Now</a>
    </main>
  );
}
