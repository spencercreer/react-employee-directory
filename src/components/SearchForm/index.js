import React from 'react'
import "./style.css";

export default function SearchForm({ handleSearchChange }) {
    return (
        <div className="card p-3">
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Name</label>
                <input
                    onChange={e => handleSearchChange(e)}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name" />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Employee Id</label>
                <input
                    onChange={e => handleSearchChange(e)}
                    type="text"
                    className="form-control"
                    id="employee-id"
                    placeholder="Employee Id" />
            </div>
        </div>
    )
}
