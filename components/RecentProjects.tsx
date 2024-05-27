import { projects } from "@/utils/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-10" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple"> recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center lg:my-16 p-4 gap-x-24 gap-y-10 xl:gap-y-10 2xl:gap-y-24">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="h-[25rem] md:h-[32.5rem] flex items-center justify-center sm:w-[500px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              {/* <Link href={link} target="_blank"> */}
              <div className="relative flex items-center justify-center sm:w-[500px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                {/* <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div> */}
                <Image
                  src={img}
                  alt={title}
                  width={500}
                  height={500}
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        width={100}
                        height={100}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <Link
                    href={link}
                    target="_blank"
                    className="flex lg:text-sm text-xs  text-purple"
                  >
                    Check Live Site
                  </Link>
                  <FaLocationArrow className="ms-3 color='#CBACF9" />
                </div>
              </div>
              {/* </Link> */}
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecentProjects;
