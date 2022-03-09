import React from "react";
import { useParams } from "react-router-dom";
import data from "../api/api.json";

function CarDetail() {
  const { id } = useParams();

  return (
    <>
      <div>
        {data.vehicles
          .filter((car) => car.id === id)
          .map((car, index) => (
            <div className="car-detail" key={index}>
              <h1 className="car-detail__name">
                {car.brand} {car.model} {car.yearOfManufacture} {car.color}
              </h1>
              <img
                className="car-detail__image"
                src={car.images[0]}
                alt={car.brand}
              />
              <div className="car-detail__info">
                <h2>Informatie</h2>
                <p className="car-detail__price">
                  Prijs: <span>€ {car.price}</span>
                </p>
                <p className="car-detail__mileage">
                  Aantal kilometer: <span>{car.mileage}</span>
                </p>
                <p className="car-detail__fuelType">
                  Soort brandstof: <span>{car.fuelType}</span>
                </p>
                <p className="car-detail__transmission">
                  Transmissie: <span>{car.transmission}</span>
                </p>
                <p className="car-detail__bodyType">
                  Carrosserie: <span>{car.bodyType}</span>
                </p>
                <p className="car-detail__doorCount">
                  Aantal deuren: <span>{car.doorCount}</span>
                </p>
                <p className="car-detail__gearCount">
                  Aantal versnellingen: <span>{car.gearCount}</span>
                </p>
              </div>
              <ul className="car-detail__accesories">
                <h2>Accessoires</h2>
                {car.accessories.map((accessory) => (
                  <li>{accessory}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </>
  );
}

export default CarDetail;
