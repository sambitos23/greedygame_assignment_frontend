import Head from "next/head";
import Footer from "../components/footer";
import Clients from "../components/landingPage/clients";
import Follwing from "../components/landingPage/following";
import Hero from "../components/landingPage/hero";
import Partners from "../components/landingPage/partners";
import SmallDetails from "../components/landingPage/smallDetails";
import Testimonials from "../components/landingPage/testimonials";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing Page GreedyGame</title>
        <meta name="description" content="Landing Page GreedyGame" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Follwing />
        <Partners />
        <Clients />
        <Testimonials />
        <SmallDetails />
        <Footer />
      </main>
    </div>
  );
}
