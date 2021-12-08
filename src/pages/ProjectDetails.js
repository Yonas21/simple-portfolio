import React from "react";
import { useLocation } from "react-router-dom";

function ProjectDetails() {
  const state = useLocation();

  const item = state?.state;
  return (
    <div className="container">
      <div className="card" style={{ marginLeft: "10%", width: "50%" }}>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {item?.tech_stacks?.map((item, _idx) => (
              <li className="list-group-item" key={_idx}>
                <div className="row">
                  <img
                    src={item.image}
                    style={{ width: "100px", margin: "auto" }}
                  />
                  <div className="card-body">
                    <p>{item.name}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
