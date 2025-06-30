import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#D9D3CA] p-8 grid grid-cols-3 gap-4 font-sans">
      <div className="bg-white rounded-2xl p-6 flex flex-col justify-center">
        <h1 className="text-3xl font-black">Bunjiro</h1>
        <h2 className="text-2xl text-gray-500">Yamada</h2>
      </div>

      <div className="bg-white rounded-2xl flex items-center justify-center">
        <img
          src="my-portfolio/src/images/157149457.jpeg"
          alt="Bunjiro Yamada"
          className="rounded-full h-32 w-32 object-cover"
        />
      </div>

      <div className="bg-white rounded-2xl p-6 text-sm leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          odio arcu, efficitur nec risus ut, porta auctor lorem. Phasellus
          rutrum quam sed tincidunt varius. Suspendisse.
        </p>
      </div>

      <div className="bg-white rounded-2xl col-span-1 row-span-2 overflow-hidden">
        <img
          src="my-portfolio/src/images/52148898258_089d86bc03_o.jpg"
          alt="Building"
          className="object-cover h-full w-full"
        />
      </div>

      <div className="bg-white rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold">See my latest</h2>
          <p className="text-gray-400 text-xl">work</p>
        </div>
        <button className="mt-4 self-end text-2xl">→</button>
      </div>

      <div className="bg-white rounded-2xl p-6">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="text-gray-400">me</p>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com/bunjiro1213" target="_blank">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
