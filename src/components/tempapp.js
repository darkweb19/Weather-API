import React, { useState, useEffect } from "react";

import "./style/style.css";
const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Kathmandu");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6e9e49ef4b0031d9bc27df5e8fff87ce`;
      const response = await fetch(url);
      const resJson = await response.json();

      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            defaultValue={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg"> No Data found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location ">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max"> Min : {city.temp_min}° Cel | Max : {city.temp_max}° Cel </h3>
            </div>

            <div className="hello"></div>

            <div className="wave_one"></div>
            <div className="wave_two"></div>
            <div className="wave_three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default TempApp;
