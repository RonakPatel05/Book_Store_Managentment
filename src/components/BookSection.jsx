import React from "react";

function BookSection({ data }) {
  console.log(data);
  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap">
      {data &&
        data.map((items, index) => (
          <div
            className=""
            style={{
              width: "200px0",
              height: "350px",
              backgroundColor: "orang",
            }}
          >
            <div>
              <img
                style={{ width: "200px", height: "120px" }}
                className="img-fluid"
                src={item.image}
                alt="/"
              ></img>
            </div>
            <h5 className="">{items.bookname}</h5>
          </div>
        ))}
    </div>
  );
}

export default BookSection;
