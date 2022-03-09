import React from "react";
import data from "../api/api.json";
import { Link } from "react-router-dom";

function Car() {
  return (
    <>
      {data.vehicles.map((car, index) => (
        <div className="car" key={index}>
          <h3 className="car__name">
            {car.brand} {car.model} {car.yearOfManufacture}
          </h3>
          <img className="car__image" src={car.images[0]} alt={car.brand} />
          <div className="car__info">
            <p className="car__price">€ {car.price}</p>
            <p className="car__mileage">Aantal kilometer: {car.mileage}</p>
          </div>
          <Link className="car__button" to={`/detail/${car.id}`}>
            Bekijk meer
          </Link>
        </div>
      ))}
    </>
  );
}

export default Car;
