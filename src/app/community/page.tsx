import { Header } from "@modules/shared/components/Header";
import { Separator } from "@modules/shared/components/ui/separator";
import { Footer } from "@modules/shared/components/Footer";

export default function page() {
  return (
    <div>
      <Header />
      <div className="grid lg2:grid-cols-2 lg2:p-16 pt-10 pb-10 items-center">
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
      <div className="lg2:p-10 pt-5 pb-5">
        <span className="font-bold text-[36px]">
          Join the <br />
          Community
        </span>
      </div>
      <Footer inPage />
    </div>
  );
}
