"use client";

import React, { useRef, useState } from "react";

const Home = () => {
  // storing the data in the state variable details as an array
  const [details, setDetails] = useState([]);
  const postCode = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredPostCode = postCode.current.value;

    const response = await fetch(
      `https://api-shipx-pl.easypack24.net/v1/points?relative_post_code=${enteredPostCode}&limit=10`
    );
    const data = await response.json();
    setDetails(data.items);

    console.log(details);

    postCode.current.value = "";
  };

  return (
    <div className="max-w-6xl mx-auto text-white">
      <div className="mt-20">
        <h2 className="text-4xl font-bold">Testing InPost API</h2>
      </div>
      <div className="mt-4">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            ref={postCode}
            placeholder="Provide your postcode"
            className="h-14 w-[400px] p-4 rounded-l-lg bg-slate-500 text-white focus:outline-none"
          />
          <button className="bg-rose-400 p-4 rounded-r-lg font-bold">OK</button>
        </form>

        <hr className="mt-20" />
        <h1 className="text-4xl font-semibold">Results:</h1>
        <div className="mt-10 flex flex-wrap justify-around items-flex gap-8">
          {details.map((detail) => (
            <div
              key={detail.name}
              className="flex w-[400px] rounded-lg bg-blue-800 hover:bg-blue-900 p-4 cursor-pointer justify-between"
            >
              <div>
                <img src={detail.image_url} className="h-32 w-36" alt="image" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Details</h1>
                <p>{detail.name}</p>
                <p>{detail.address.line1}</p>
                <p>{detail.address.line2}</p>
                <p>{detail.location_description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="mt-20 mb-32 flex justify-center items-center">
        <h1 className="text-2xl">
          Developed by{" "}
          <a
            href="https://www.piotrmaciejewski.com"
            className="text-rose-400 font-bold"
          >
            Piotr
          </a>
        </h1>
      </footer>
    </div>
  );
};

export default Home;
