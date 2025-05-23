import Link from "next/link";

export default function Home() {

  return (
    <section className="flex flex-col justify-center items-center min-h-screen text-center">
      
      {/*Graphic Section*/}

      {/*Page Title*/}
      <div className="text-6xl sm:text-5xl pt-40">
        <h1 className="">Hi I&apos;m Joshua & welcome to my portfolio!</h1>
      </div>

      {/*Send too's*/}
      <div className="text-2xl">
        <p>
          If you want to know {""}<Link href={"/aboutme"} className="hover:underline duration-300 transition-all text-[#eb9c35] hover:animate-pulse">about me</Link>{" "}
          or checkout some of my previous {""}<Link href={"/projects"} className="hover:underline text-[#eb9c35] hover:animate-pulse"> projects</Link>{""}.
        </p>
      </div>
    </section>
  );
}
