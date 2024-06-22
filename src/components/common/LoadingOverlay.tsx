import Image from "next/image";

function LoadingOverlay({ disabled }: { disabled: boolean }) {

    return <div className={disabled ? "flex justify-center items-center h-full z-40 w-full bg-opacity-40 top-0 fixed bg-white right-0" : "hidden"}>
        <Image
          src="/assets/images/loading-spinner.gif"
          width={400}
          height={400}
          alt="Loading..."
        />
    </div>

}

export default LoadingOverlay;