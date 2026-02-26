import "./Country.css";
import React, { useState } from "react";

const Country = ({country}) => {
    const [visited , setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited  && "country-visited"}`}>
            <img src={country.flags.flags.png} alt="Country Flag" />
            <h3>Country Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000? "Large Country" : "Small Country"}</p>
            <button onClick={handleVisited}>{visited ? "Visited" : "Not Visited"}</button>

        </div>
    );
};

export default Country;