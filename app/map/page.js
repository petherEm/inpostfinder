"use client";

import React, { useState, useEffect } from "react";
import MapAll from "../../components/MapAll";

const Map = () => {
  const [details, setDetails] = useState([]);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api-shipx-pl.easypack24.net/v1/points?per_page=28000`
      );

      const data = await response.json();
      setDetails(data.items);

      // Create an array of geo coordinates pairs
      const coords = data.items.map((item) => [
        item.location.longitude,
        item.location.latitude,
      ]);
      setCoordinates(coords);
    };
    getData();
    console.log(coordinates);
  }, []);

  console.log(coordinates);

  return (
    <div className="relative h-screen">
      <MapAll data={coordinates} />
    </div>
  );
};

export default Map;
