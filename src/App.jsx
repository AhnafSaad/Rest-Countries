import "./App.css";
import Countries from "./components/countries/Countries";
import { Suspense } from "react";

function App() {

  return (
    <>
      
      <h1>React World On The Go</h1>

      <Suspense fallback={<h2>Loading countries...</h2>}>
      <Countries CountriesPromise={CountriesPromise}></Countries>
      </Suspense>
      
    </>
  )
}

const CountriesPromise = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json())

export default App
