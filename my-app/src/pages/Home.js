import React from "react";
import Car from "../components/Car";

function Home() {
  return (
    <div>
      <h1>Onze occasions</h1>
      <div className="car-wrapper">
        <Car></Car>
      </div>
    </div>
  );
}

export default Home;
