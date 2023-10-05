import React from "react";

function AddBook() {
  return (
    <div className="bg-dark">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minheight: "91.5vh" }}
      >
        <div className="container p-4">
          <div className="mb-3">
            <label
              for="exampleFormControlInput1"
              className="form-label text-white"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label
              for="exampleFormControlInput1"
              className="form-label text-white"
            >
              Book Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Book Name"
            />
          </div>
          <div className="mb-3">
            <label
              for="exampleFormControlInput1"
              className="form-label text-white"
            >
              Author
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Name of Author"
            />
          </div>
          <div className="mb-3">
            <label
              for="exampleFormControlInput1"
              className="form-label text-white"
            >
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter  Description of The Book"
            />
          </div>
          <div className="mb-3">
            <label
              for="exampleFormControlInput1"
              className="form-label text-white"
            >
              Image
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter  The  URL Of The Image"
            />
          </div>
          <div className="mb-3">
            <label
              for="exampleFormControlInput1"
              className="form-label text-white"
            >
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter The Price"
            />
            <button className="btn btn-success mt-5">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
