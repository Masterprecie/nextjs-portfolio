"use client";
/* eslint-disable @next/next/no-img-element */
import { socialMedia } from "@/utils/data";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import Image from "next/image";
import BookingModal from "./Modal";
import { useState } from "react";
import { RiCalendarScheduleFill } from "react-icons/ri";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLinkClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setShowModal(true);
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      {/* <div className="w-full  absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[65vw]" style={{ lineHeight: 1.2 }}>
          Are you prepared to <span className="text-purple">elevate</span> your
          digital presence ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contact me today, and let&apos;s discuss how I can assist you in
          achieving your goals.
        </p>

        <MagicButton
          title=" Book a session"
          icon={<RiCalendarScheduleFill />}
          position="right"
          href="https://calendar.app.google/tTvKFX2mt2ovM5Ru8"
          handleClick={handleLinkClick}
        />

        <BookingModal
          show={showModal}
          onClose={() => setShowModal(false)}
          url="https://calendar.app.google/tTvKFX2mt2ovM5Ru8"
        />
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Precious Ikpa
        </p>

        <div className="flex mt-3 items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link href={info.link} target="_blank">
                <Image src={info.img} alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
