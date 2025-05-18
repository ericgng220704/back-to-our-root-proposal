import { FiArrowUpRight } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="mt-20">
      <div className="w-full flex flex-col">
        <div className="col-span-3 flex flex-col gap-1">
          <span className="text-2xl md:text-3xl text-black/70">
            Crafting digital experiences that inspire,
          </span>
          <p className="text-black text-3xl md:text-4xl font-medium">
            Contact me
          </p>
          <div className="w-full h-16"></div>
        </div>
        <div className="sm:grid sm:grid-cols-2 flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <a
              className="flex items-center gap-1 hover:text-black/60 transition-all duration-300"
              href="mailto:giahaonguyen2207@gmail.com"
            >
              <IoIosMail />
              <span>giahaonguyen2207@gmail.com</span>
            </a>
            <a
              className="flex items-center gap-1 hover:text-black/60 transition-all duration-300"
              href="/Eric_Nguyen_Resume.pdf"
            >
              <FaDownload />
              <span>Resume</span>
            </a>
          </div>
          <div className="flex flex-col  gap-1">
            <a
              className="flex items-center gap-1 hover:text-black/60 transition-all duration-300"
              href="https://www.linkedin.com/in/eric-nguyen-953740261/"
            >
              <FiArrowUpRight />
              <span>LinkedIn</span>
            </a>
            <a
              className="flex items-center gap-1 hover:text-black/60 transition-all duration-300"
              href="https://github.com/ericgng220704"
            >
              <FiArrowUpRight />
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
