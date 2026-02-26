import "./Countries.css";
import Country from "../country/Country";
import React, { use } from "react";

const Countries = ({CountriesPromise}) => {
    const countriesData = use(CountriesPromise);
    const countries = countriesData.countries;
    
    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <div className="countries">
            {countries.map(country => <Country key={country.name} country={country}></Country>)}
            </div>
        </div>
    );
};

export default Countries;