import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import LandingImg from "@/assets/main.svg";

export default function Home() {
  return (
    <main className="">
      <header className=" max-w-6xl mx-auto py-6 px-8 md:px-4">
        <Image src={Logo} alt={"Header Logo Image"} />
      </header>
      <section className=" max-w-6xl mx-auto px-6 grid h-[clac(100vh - 80px)] items-center gap-4 md:px-4 md:grid-cols-2 ">
        <div>
          <h1 className=" capitalize text-4xl font-bold md:text-7xl">
            job <span className="text-primary">tracking</span>
          </h1>
          <p className=" leading-loose max-w-md mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            assumenda dolore quae temporibus ducimus laboriosam inventore dicta,
            eum soluta perspiciatis nemo nesciunt dignissimos rem dolor beatae,
            cum incidunt expedita aliquam?
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt="Main Hero Image" />
      </section>
    </main>
  );
}
