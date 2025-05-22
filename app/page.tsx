import Link from "next/link";

export default function Home() {
  return (
    <section className="flex items-center mt-5 mx-5">
      
      {/*Page Title*/}
      <div className="text-3xl "> 
        <h1 className="">Welcome, I&apos;m Joshua!</h1>
      </div>
      
      {/*About me Paragraph*/}
      <div className="">
        <p className="">
          I am a Software Engineer and first generation undergraduate
          senior at the{" "}<Link href={"https://ucf.edu/"} target="_blank" className="underline">Univeristy of Central Florida</Link>.<br/>
          
        </p>
      </div>

    </section>
  );
}
