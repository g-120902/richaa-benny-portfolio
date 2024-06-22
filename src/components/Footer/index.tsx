import Image from "next/image"

export default function Footer(): JSX.Element {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="flex flex-col h-fit bg-black w-screen items-center gap-8 text-white md:px-20 py-10 mt-20 md:mt-0">
      <div className="flex md:w-8/12 md:justify-between gap-10">
        <div className="flex self-start">
          <Image src="/assets/images/logos/logo3.png" width={600} height={600} alt="logo" className="h-20 w-20"/>
          <div className="font-primary">
            <p className="text-xl">
              RICHAA
            </p>
            <p className="text-xl">
              BENNY
            </p>
            <p className="font-bold">
              vfx & motion graphics
            </p>
          </div>
        </div>
        <div className="flex items-center md:text-xl gap-8 md:flex-row flex-col">
          <a href="https://www.youtube.com/channel/UCSu3O2_R_ivGYYGP2yuSVwQ" target="_blank" className="">
            Youtube
          </a>
          <a href="https://www.instagram.com/richaabny/" target="_blank" className="">
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/richaa-benny-54a443254/" target="_blank" className="">
            LinkedIn
          </a>
        </div>
      </div>
      <span className="h-0.5 bg-red-800 w-9/12" />
      <p className="font-bold">
      &copy; {currentYear} | Richaa Benny | Motion Graphics Designer
      </p>
    </div>
  );
}
