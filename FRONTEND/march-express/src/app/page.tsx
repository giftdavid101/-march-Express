import Navbar from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import HomePage from "./home/page";

export default function Home() {


  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
        <Navbar/>
        <HomePage />
        <Footer />
    </div>
  );
}
