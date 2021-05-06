import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="row">
        <div className="img-container col-sm-4 p-3">
          <img className="card-img" alt={props.name} src={props.image} style={{maxWidth: "190px"}} />
        </div>
        <div className="col-sm-8 px-2">
          <div className="card-body px-2">
            <h4 className="card-title"><strong>{`${props.firstName} ${props.lastName}`}</strong></h4>
            <div className="mx-3">
              <div className="card-text">
                <strong>Employee Id:</strong> {props.employeeId}
              </div>
              <div className="card-text">
                <strong>Title: </strong>{props.title}
              </div>
              <div className="card-text">
                <strong>Supervisor: </strong>Spencer Creer
              </div>
              <div className="card-text">
                <strong>Department: </strong>Software Engineering
              </div>
              <div className="card-text">
                <strong>Email: </strong><a href={`mailto:${props.email[0]}.${props.email.split(/[.@]/gi)[1]}@deverest.com`} target="_blank">{`${props.email[0]}.${props.email.split(/[.@]/gi)[1]}@deverest.com`}</a>
              </div>
              <div className="card-text">
                <strong>Extension: </strong><a href={`tel:555-555-${props.extension}`}>{props.extension}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
