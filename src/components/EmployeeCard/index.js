import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="img-container col-md-4">
          <img className="card-img" alt={props.name} src={props.image} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"><strong>Name:</strong> {props.name}</h5>
            <ul>
              <li className="card-text">
                <strong>Occupation:</strong> {props.occupation}
              </li>
              <li className="card-text">
                <strong>Location:</strong> {props.location}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <span onClick={() => props.removeEmployee(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default EmployeeCard;
