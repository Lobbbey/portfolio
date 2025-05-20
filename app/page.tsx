import Link from "next/link";

export default function Home() {
  return (
    <section className="flex items-center justify-center h-full px-2 md:px-8">
      {/*Page Title*/}
      <div> 
        <h1 className="text-2xl">Welcome, I&apos;m Joshua!</h1>
      </div>
      
      {/*About me Paragraph*/}
      <div className="pt-20 space-y-4 md:pb-0 pb-12">
        <p className="text-lg">
          I am a Software Engineer and first generation undergraduate
          senior at the{" "}<Link href={"https://ucf.edu/"} className="underline">Univeristy of Central Florida</Link>{" "}
        </p>
      </div>

    </section>
  );
}
