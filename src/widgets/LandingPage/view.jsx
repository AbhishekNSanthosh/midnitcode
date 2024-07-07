import Image from "next/image";
import React from "react";

export default function LandingPage() {
  return (
    <div className="w-screen h-screen px-[5vw] overflow-hidden flex flex-col items-start justify-start gap-4 relative">
      <div className="w-full">
        <div className="flex flex-row w-full items-center justify-between py-4 top-0">
          <div className="">
            <Image
              src={"/logo.svg"}
              height={400}
              width={400}
              className="flex w-full h-[9vh] md:h-[12vh] lg:h-[12vh]"
            />
          </div>
          <div className="">
            <a href="https://wa.me/+917907247909" target="_blank">
              <span className="hidden lg:flex md:flex md:text-2xl lg:text-2xl">
                Let's Talk
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-[70vh] items-start justify-center gap-4 self-center">
        <span className="text-5xl md:text-8xl lg:text-8xl font-medium">
          Make Your
        </span>
        <div className="flex flex-row relative w-full">
          <span className="text-5xl md:text-8xl lg:text-8xl font-medium">
            Awesome{" "}
          </span>
          <Image
            src={"/emoji.png"}
            height={200}
            width={200}
            className="absolute bottom-[-20px] right-[2vw] md:right-[50vw] lg:right-[50vw]  flex w-[10vh] md:w-[20vh] lg:w-[20vh] h-[10vh] md:h-[20vh] lg:h-[20vh]"
          />
        </div>
        <span className="text-5xl md:text-8xl lg:text-8xl font-medium">
          Digital{" "}
          <span className="text-5xl md:text-8xl lg:text-8xl font-medium text-purple">
            product
          </span>
        </span>
        <div className="mt-5">
          <span className="text-xl">
            Stay tuned for exciting surprises while we prepare to launch!🚀
          </span>
        </div>
      </div>
      <div className="">
        <Image
          src={"/space.svg"}
          height={400}
          width={400}
          className="absolute hidden right-[10vw] bottom-[20%] md:flex lg:flex w-[23rem] h-[23rem]"
        />
      </div>
      <div className="p-1 cursor-pointer md:hidden lg:hidden right-[5vw] bottom-[5vw] absolute items-center justify-center border flex border-purple rounded-full">
      <a href="https://wa.me/+917907247909" target="_blank">
        <Image
          src={"/whatsapp.png"}
          height={400}
          width={400}
          className="h-[3rem] w-[3rem]"
        />
        </a>
      </div>
    </div>
  );
}
