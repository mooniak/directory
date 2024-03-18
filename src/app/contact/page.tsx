import { Header } from "@modules/shared/components/Header";
import { Separator } from "@modules/shared/components/ui/separator";
import { Input } from "@modules/shared/components/ui/input";
import { Textarea } from "@modules/shared/components/ui/textarea";
import { Button } from "@modules/shared/components/ui/button";
import { Footer } from "@modules/shared/components/Footer";
import Link from "next/link";
import { SocialMediaIcon } from "@modules/shared/components/SocialMediaIcon";

export default function Contact() {
  return (
    <div className="max-xl2:container xl2:pl-[5%] xl2:pr-[5%]">
      <Header />
      <div className="container grid lg2:grid-cols-2 items-center justify-center sm2:pt-16 pt-10 sm2:pb-16  ">
        <div className="justify-center flex">
          <svg
            className="w-suto h-auto p-5 lg2:w-[478px] lg2:h-[140px]"
            viewBox="0 0 475 139"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.0206 131.406L0.864347 0.795447H20.4134L55.5696 131.406H36.0206ZM71.5098 71.2678C71.5098 58.0575 73.2676 45.8949 76.7832 34.7798C80.3343 23.6648 85.7498 13.3665 93.0297 3.88494H114.709C111.939 7.40057 109.365 11.6974 106.986 16.7756C104.606 21.8182 102.529 27.358 100.753 33.3949C98.9778 39.4318 97.5929 45.6818 96.5985 52.1449C95.6042 58.5724 95.1071 64.9467 95.1071 71.2678C95.1071 79.6839 95.9593 88.1889 97.6639 96.7827C99.4039 105.341 101.748 113.295 104.695 120.646C107.678 127.997 111.016 134.016 114.709 138.704H93.0297C85.7498 129.222 80.3343 118.924 76.7832 107.809C73.2676 96.6939 71.5098 84.5135 71.5098 71.2678ZM153.448 17.7344H157.283V23.5405H153.448V17.7344ZM123.778 55.3409L146.203 8.30611H164.527L187.006 55.3409H169.854L154.886 21.4098H155.898L141.037 55.3409H123.778ZM237.943 116.598C229.669 116.598 222.513 114.84 216.476 111.325C210.475 107.773 205.84 102.837 202.573 96.5163C199.306 90.1598 197.673 82.7912 197.673 74.4105C197.673 65.9588 199.306 58.5724 202.573 52.2514C205.84 45.8949 210.475 40.9588 216.476 37.4432C222.513 33.892 229.669 32.1165 237.943 32.1165C246.217 32.1165 253.355 33.892 259.356 37.4432C265.393 40.9588 270.045 45.8949 273.312 52.2514C276.579 58.5724 278.213 65.9588 278.213 74.4105C278.213 82.7912 276.579 90.1598 273.312 96.5163C270.045 102.837 265.393 107.773 259.356 111.325C253.355 114.84 246.217 116.598 237.943 116.598ZM238.049 99.0199C241.813 99.0199 244.956 97.9545 247.477 95.8239C249.999 93.6577 251.899 90.7102 253.177 86.9815C254.491 83.2528 255.148 79.0092 255.148 74.2507C255.148 69.4922 254.491 65.2486 253.177 61.5199C251.899 57.7912 249.999 54.8437 247.477 52.6776C244.956 50.5114 241.813 49.4283 238.049 49.4283C234.249 49.4283 231.053 50.5114 228.461 52.6776C225.904 54.8437 223.969 57.7912 222.655 61.5199C221.377 65.2486 220.737 69.4922 220.737 74.2507C220.737 79.0092 221.377 83.2528 222.655 86.9815C223.969 90.7102 225.904 93.6577 228.461 95.8239C231.053 97.9545 234.249 99.0199 238.049 99.0199ZM318.536 17.7344H322.371V23.5405H318.536V17.7344ZM288.866 55.3409L311.291 8.30611H329.615L352.094 55.3409H334.942L319.974 21.4098H320.986L306.124 55.3409H288.866ZM404.309 71.2678C404.309 84.5135 402.533 96.6939 398.982 107.809C395.467 118.924 390.069 129.222 382.789 138.704H361.109C363.879 135.188 366.454 130.891 368.833 125.813C371.212 120.735 373.29 115.195 375.065 109.194C376.841 103.157 378.226 96.907 379.22 90.4439C380.214 83.9808 380.712 77.5888 380.712 71.2678C380.712 62.8516 379.842 54.3643 378.102 45.8061C376.397 37.2124 374.053 29.2578 371.07 21.9425C368.123 14.5916 364.803 8.57244 361.109 3.88494H382.789C390.069 13.3665 395.467 23.6648 398.982 34.7798C402.533 45.8949 404.309 58.0575 404.309 71.2678ZM474.954 0.795447L439.798 131.406H420.249L455.405 0.795447H474.954Z"
              fill="black"
            />
          </svg>
        </div>
        <span className="sm2:text-[28px] text-[20px] lg2:w-[504px] lg2:h-[200px] w-auto h-auto lg2:text-start sm2:pt-10 lg2:pt-0 mb-10">
          Looking to get a high quality type-work done? or Interested in
          collaborating with us on a project? We are interested too... <br />{" "}
          Get in touch with us.
        </span>
      </div>
      <Separator className="container" />
      <div className="grid lg2:grid-cols-2 lg2:container">
        <div className="flex items-center">
          <div className="w-[100%] pt-20 pb-20 lg2:pr-40">
            <span className="font-bold text-[22px]">
              Let us hear <br /> from you
            </span>
            <div className="space-y-5 pt-10">
              <div>
                <span className="text-sm">Subject </span> <br />
                <Input className="border-black  focus-visible:ring-0" />
              </div>
              <div>
                <span className="text-sm">Your Email </span> <br />
                <Input
                  className="border-black  focus-visible:ring-0"
                  type="email"
                />
              </div>
              <div>
                <span className="text-sm">Message </span> <br />
                <Textarea className="border-black focus-visible:ring-0" />
              </div>
              <div className="flex lg2:justify-end">
                <Button
                  variant="ghost"
                  className='w-[135px]  border  hover:bg-black hover:text-white p-2 rounded-full border-black"'
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1" />
          <Separator
            orientation="vertical"
            className="h-full hidden lg2:block"
          />
        </div>
        <Separator className="lg2:hidden block container p-0" />

        <div className="flex lg2:p-20">
          <div className="lg2:w-[60%] w-[100%] lg2:pt-0 pt-10">
            <span className="font-bold text-[22px]">
              Get
              <br /> in touch
            </span>
            <div className="space-y-2 pt-10">
              <Separator className="bg-border" />
              <div className="flex items-center gap-10">
                <span className="text-sm">Whatsapp </span>
                <Link
                  className="text-sm font-bold"
                  href="https://wa.me//+94771234567"
                >
                  077 123 4567
                </Link>
              </div>
              <Separator className="bg-border" />
              <div className="flex items-center gap-10">
                <span className="text-sm">Email </span>
                <Link
                  className="text-sm font-bold pl-7"
                  href="mailto:hello@mooniak.com"
                >
                  hello@mooniak.com
                </Link>
              </div>
              <Separator className="bg-border" />
              <div className="lg2:pt-1 pb-16">
                <SocialMediaIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer inPage />
    </div>
  );
}
