// CHALLENGE: uncomment the code below and see the car stats rendered
import React, { useState } from "react";
import cars from "./cars";

let styleTable={
    border: '2px solid black',
}

function Car() {
    //desctruction of objects and array
  let [honda, tesla] = cars;
  let [hondaTopColour] =(honda.coloursByPopularity);
  let  [teslaTopColour]=(tesla.coloursByPopularity);
  let {speedStats:{topSpeed:teslaTopSpeed}}=tesla;
  let {speedStats:{topSpeed:hondaTopSpeed}}=honda;
  return (
    <div>
      <table style={styleTable}>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Color</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>
    </div>
  );
}
export default Car;
