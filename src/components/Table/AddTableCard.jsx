import React, { useState } from "react";
import { database } from "../../firebase-config/firebase-keys";
import { useAuth } from "../../authTools/AuthHandler";

export default function AddFolderButton({ currentFolder }) {
  const { currentUser } = useAuth();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [pageLoading, setPageLoading] = useState(false);

  const restaurantSubmit = (e) => {
    e.preventDefault();
    setPageLoading(true);

    database.folders.add({
      name: name,
      city: city,
      description: description,
      userId: currentUser.uid,
      parentId: currentFolder.id,
      createdAt: database.getCurrentTimestamp(),
    });
    setName("");
    setCity("");
    setDescription("");
    setPageLoading(false);
  };

  return (
    <>
      <div className="card p-3 text-dark">
        <form onSubmit={restaurantSubmit}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Name</label>
            <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" id="nameInput" placeholder="Foodly" required />
          </div>
          <div className="mb-3">
            <label htmlFor="cityInput" className="form-label">City</label>
            <input value={city} onChange={e => setCity(e.target.value)} type="text" className="form-control" id="cityInput" placeholder="Chicago" required />
          </div>
          <div className="mb-3">
            <label htmlFor="descriptionInput" className="form-label">Description</label>
            <input value={description} onChange={e => setDescription(e.target.value)} type="text" className="form-control" id="descriptionInput" placeholder="Tasty Burgers" required />
          </div>
          <div className="d-flex justify-content-around align-items-center">
            {pageLoading ? (
              <button className="btn btn-success w-100 m-1" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="visually-hidden">Loading...</span>
              </button>
            ) : (
              <button type="submit" className="btn btn-primary m-1 w-100">Add New</button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
