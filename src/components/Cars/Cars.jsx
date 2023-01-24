import React from "react";
import "./Cars.scss"
import Car from "./Car/Car";
import { context } from "../../hoc/Layout/Layout";

function Cars() {

    function renderCars(carsArray) {
        return carsArray.map((car, index) => {
            return (
                <Car
                    key={index}
                    brand={car.brand}
                    year={car.year}
                />
            )
        })
    }

    return (
        <div className="Cars">
            <context.Consumer>
                {(cars) => cars ? renderCars(cars) : null}
            </context.Consumer>
        </div>
    );
}

export default Cars;