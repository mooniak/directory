import { Header } from "@modules/app/Header";
import { Separator } from "@modules/shared/components/ui/separator";
import { Footer } from "@modules/app/Footer";
import { Button } from "@modules/shared/components/ui/button";
import { MoveRight } from "lucide-react";

export default function Community() {
  return (
    <div className="max-xl2:container xl2:pl-[5%] xl2:pr-[5%]">
      <Header />

      <div className="grid lg2:grid-cols-2 lg2:p-16 pt-10 pb-10 items-center xl2:container ">
        <div>
          <h1
            className="font-bold min-[1273px]:text-[200px] translate-y-2 duration-500 max-[1273px]:text-[150px] max-[992px]:leading-[9rem] max-[430px]:text-[25vw] max-[430px]:leading-[7rem] max-[1273px]:leading-[180px]  min-[1273px]:leading-[200px]"
            style={{
              fontFamily: '"Stick No Bills", "sans-serif"',
            }}
          >
            එකතු <br />
            වෙන්න
          </h1>
        </div>

        <div className="md2:w-full  w-auto">
          <h2 className="font-bold text-[36px] max-[992px]:pt-10 ">
            Mooniak Circle
          </h2>

          <p className="pt-10 text-[20px] ">
            Mooniak Circle is a private community hosted by Mooniak to
            collaborate on our mission to advance Lankan visual identity. Join
            our circle and collaborate on our projects around multilingual
            fonts, language technology, typography and visual culture of Sri
            Lanka and the region.
          </p>
          <br />
          <p className=" text-[20px]">Members of Mooniak Circle will get;</p>

          <ul className="list-disc pl-8 space-y-1 text-[20px]">
            <li>Test latest updates to our fonts</li>
            <li>Early Access to new work-in-progress fonts</li>
            <li>Training and workshops on typography</li>
          </ul>
        </div>
      </div>
      <Separator />

      <div className="lg2:p-10 pt-5 pb-5 xl2:container grid lg2:grid-cols-2 items-center lg2:gap-0 gap-10">
        <div>
          <span className="font-bold text-[36px]">Join the Community</span>
          <p>
            Let us know your interest by filling the form. <br /> follow the
            link to the google form
          </p>
        </div>
        <div>
          <Button variant="outline" className="rounded-full gap-5 p-5">
            To the form <MoveRight size={25} strokeWidth={1.25} />
          </Button>
        </div>
      </div>

      <Footer isPage />
    </div>
  );
}
