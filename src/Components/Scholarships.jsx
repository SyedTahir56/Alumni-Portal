import React from "react";
import Data from "./../Data.json";

const Scholarships = () => {
  // Ensure Data.scholarships exists and is an array
  if (!Array.isArray(Data.scholarships)) {
    return <p>Error: Scholarships data is missing or incorrect.</p>;
  }

  return (
    <>
      <p className="mt-3 text-center fw-bold fs-1">International Scholarships</p>

      <div className="container d-flex flex-column py-3">
        {Data.scholarships.length === 0 ? (
          <p>No scholarships available at the moment.</p>
        ) : (
          Data.scholarships.map((scholarship, index) => (
            <div key={index} className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">{scholarship.title}</h5>
                <p className="card-text">
                  {scholarship.description}
                </p>
                <button type="button" className="btn btn-primary">Learn More</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Scholarships;
