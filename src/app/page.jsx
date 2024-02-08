import Image from "next/image";



export default function Home() {
  return (
    <main >
     <header className="">
      <div className="flex items-center gap-[80px] ">
      <div>
      <h1 className="text-6xl text-white leading-normal w-[1000px] p-20" ><p>Hi there!</p> My name is Ma'mura and I'm a <span className="text-pink-500">front-end developer</span></h1>
      </div>
      <div className="relative">
      <Image
        src='/Skills1.svg'
        width={150}
        height={150}
        alt="Skills"
        className="absolute top-[520px] left-[-90px]"
        />
        <Image
        src='/computer.jpeg'
        width={530}
        height={300}
        alt="Designer Girl"
        className="rounded-lg p-8 "
       
        />
        <Image
        src='/Skills1.svg'
        width={150}
        height={150}
        alt="Skills"
        className="absolute top-[70px] right-[-90px]"
        />
      </div>
      </div>
     </header>
    </main>
  );
}
