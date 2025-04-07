import React from "react";
import client1 from "../assets/img/clients/client1.svg";
import client2 from "../assets/img/clients/client2.jpg";
import client3 from "../assets/img/clients/client3.jfif";
import client4 from "../assets/img/clients/client4.jpg";

const clients = [
  { name: "Delhi Metro Rail Corporation", img: client1 },
  { name: "SS SS Constructions", img: client2 },
  { name: "Hindustan Construction Company Limited", img: client3 },
  { name: "YFC PROJECTS PRIVATE LTD", img: client4 },
];

const Clients = () => {
  return (
    <div className="bg-[#010a2c] text-white min-h-screen py-12 pt-24">
      <div className="container mx-auto px-6 lg:px-20">
        <p className="text-4xl flex justify-center pt-14 pb-6">Clients</p>
        <div className="mt-4 w-full h-1 bg-orange-500 pb-2"></div>
      </div>

      <div className="bg-[#010a2c] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white pb-2">
            <span className="text-amber-600">Building</span> Dreams with Our
            Clients
          </h2>
          <div className="mb-8 w-30 h-1 bg-orange-500"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg flex flex-col items-center justify-between p-4 h-48"
              >
                {/* Client Logo */}
                <div className="flex-grow flex items-center justify-center">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="max-h-24 object-contain"
                  />
                </div>
                {/* Client Name at Bottom (Aligned Properly) */}
                <p className="text-gray-900 font-extrabold text-xl mt-4 text-center w-full">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
