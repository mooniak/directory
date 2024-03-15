import { Header } from "@modules/shared/components/Header";
import { Separator } from "@modules/shared/components/ui/separator";
import { Footer } from "@modules/shared/components/Footer";
import { FounderInfo } from "@modules/shared/components/FounderInfo";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="pt-10 pb-10 grid lg2:grid-cols-2 gap-10">
        <div className="pt-5 pb-5 flex justify-center lg:justify-start">
          <svg
            className="lg2:w-[543px] w-[70vw]  "
            viewBox="0 0 543 511"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M120.676 501.963H98.5514C53.3014 501.963 0 479.876 0 399.565V203.808C0 144.572 26.1432 103.41 80.4459 103.41C122.678 103.41 145.804 137.547 145.804 175.696V196.784H154.857V175.696C154.857 137.547 174.965 103.41 224.247 103.41C291.622 103.41 304.693 162.647 304.693 193.758V303.18H259.443C226.264 303.18 200.107 324.267 200.107 362.416V409.602C200.107 434.702 215.195 453.776 242.339 453.776C269.484 453.776 280.553 436.715 280.553 384.503V328.279H337.873V384.503C337.873 436.701 350.945 453.776 381.107 453.776C408.265 453.776 418.319 434.702 418.319 409.602V360.417C418.319 310.218 387.142 303.193 353.962 303.193H313.732V252.994C313.732 227.895 315.749 182.721 369.036 182.721H415.288V174.683H389.145C345.911 174.683 306.682 158.621 306.682 93.3598C306.682 50.1855 327.805 0 391.147 0C447.466 0 476.627 35.1366 476.627 90.3473V233.906H485.68V10.0506H543V259.019H461.539V126.497C461.539 70.2732 439.415 57.2236 406.235 57.2236C371.039 57.2236 356.966 79.3106 356.966 104.41C356.966 127.497 369.036 147.584 405.234 147.584H435.396V197.783H403.218C370.038 197.783 360.985 214.845 360.985 242.957V250.995H375.058C443.434 250.995 475.626 293.156 475.626 338.33V427.677C475.626 477.876 444.449 511 387.128 511C352.934 511 313.719 491.925 313.719 444.739V353.379H304.666V444.739C304.666 491.925 268.469 511 235.276 511C176.954 511 143.761 477.876 143.761 427.677V353.392C143.761 331.305 150.797 305.206 184.992 301.194L228.239 296.182V289.157L142.759 297.195H83.4229V246.996H254.382V196.797C254.382 177.723 244.328 160.661 221.203 160.661C199.078 160.661 189.024 177.723 189.024 196.797V221.897H132.705V204.808C132.705 175.696 118.632 160.634 94.4919 160.634C70.3513 160.634 57.2797 179.708 57.2797 212.832V391.528C57.2797 430.676 71.3526 444.739 105.547 444.739H120.635V501.963H120.676Z"
              fill="#161616"
            />
          </svg>
        </div>
        <div className="sm2:hidden block pt-5">
          <Separator />
        </div>
        <h2 className="text-[50px] sm2:hidden block pt-10">
          Mooniak: <br />
          The Sri Lankan Type Foundry
        </h2>
        <div
          className="lg2:w-[90%]   sm2:text-[20px]"
          style={{
            fontSize: "clamp(18px, 2vw, 25px)",
          }}
        >
          With a global view and local roots, Mooniak specializes in producing
          multi-script fonts and typography for Lankan audiences in Sinhala,
          Tamil, and English languages. In addition to incubating and releasing
          open-source fonts, we also provide custom typeface design, logotype
          design, lettering, and editorial design services for select clients.
          Almost all of Mooniak's work is published under Libre/Open source
          licenses. We take pride in building a thriving community of letterform
          lovers in Sri Lanka, and with a small team of full-timers and
          collaborators from all around the world, we are advancing the Lankan
          visual identity.
        </div>
      </div>
      <Separator />
      <div className="grid xl2:grid-cols-2 sm2:pb-20 pb-10">
        <div className="">
          <div className="sm2:pt-20 pt-10 sm2:pb-20 pb-10">
            <span className=" font-bold text-start text-[26px] xl2:block hidden">
              A Brief History <br />
              of a Foundry
            </span>
            <span className=" text-start text-[26px] xl2:hidden block">
              A Brief History
            </span>
          </div>

          <p className="text-[20px] lg2:w-[80%] ">
            In its first decade Mooniak was a point of collaboration which
            launched many projects. Mooniak has been operating as a collective
            of creatives focusing on community impact design projects since
            2010. While the team consists of a multidisciplinary team, our
            primary focus is on typography and type design projects and
            providing services to commercial entities to enable effective
            communications in all three official languages of Sri Lanka.
            <br /> <br />
            In 2015 Mooniak received funds from Google to produce a set of
            Sinhala, Tamil and Latin fonts and was subsequently incorporated as
            a private limited company in Sri Lanka. In 2015–2016 Mooniak
            exclusively worked on producing the first ever web font families to
            support Sinhala, Tamil and Latin scripts enabling better
            communications in Sinhala, Tamil and English. Mooniak developed and
            released tools, workflows and research relating to the projects
            under open licenses making it one of the biggest open culture
            projects in Sri Lanka.
            <br />
            <br />
            Since 2016 Mooniak has focused on editorial design projects and
            introduced building awareness in multilingual typography among the
            Sri Lanka community and has focused on knowledge exchange projects.
            The design studio works on selected commercial projects, mostly
            focusing on CSR related projects. Mooniak takes pride in
            participating in a number of international design projects, such as
            designing for International Unicode Consortium, MICT international
            and consulting on a number of international type design projects.
          </p>
        </div>
        <div className="pt-[1px] max-[1600px]:hidden">
          <div className="grid grid-rows-2">
            <div>
              <img
                src="/about_book.png"
                alt="about_book"
                className="w-[864px] h-[549px]"
              />
            </div>
            <div className="bg-black">
              <img src="/about_books.png" alt="about_books" className="pt-10" />
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <h2 className="pt-20 pb-5 text-[36px]">People</h2>
      <FounderInfo />
      <Footer inPage />
    </div>
  );
}
