import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen text-center">

      {/*Graphic Section*/}

      {/*Page Title*/}
      <div className="text-3xl pt-40"> 
        <h1 className="">Hi I&apos;m Joshua & welcome to my portfolio!</h1>
      </div>

      {/**/}
      <div>
        <p className="text-lg">
          Checkout some of my {""}<Link href={"/projects"} className="underline hover:"> projects</Link>{""} or 
          even {""}<Link href={"/aboutme"} className="underline hover:">about me</Link>{""} and what I've done.
        </p>
      </div>


    </section>
  );
}
