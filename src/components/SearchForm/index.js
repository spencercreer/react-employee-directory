import React from 'react'
import "./style.css";

export default function SearchForm() {
    return (
        <div className="card p-3">
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Employee Id</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Employee Id" />
                </div>
        </div>
    )
}
