import React from "react";
import Material from "../assets/images/material.png";
import { data } from "../constants/mockdata";

function Section() {
  return (
    <div className="container">
      <div className="row">
        {data.map((item, _idx) => {
          return (
            <div class="card m-2" style={{ width: "18rem" }}>
              <img src={Material} class="card-img-top" alt="" />
              <div class="card-body">
                <p class="card-text">{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section;
