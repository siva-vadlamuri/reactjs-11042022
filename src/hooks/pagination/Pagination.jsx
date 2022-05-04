import React, { useEffect, useState, useRef } from "react";

const Pagination = () => {
  const [usersData, setUsersData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const btnRef = useRef(null);

  const handleBtnClick = () => {
    // console.dir(btnRef.current);
    // if you mutate the reference object 'n' no of times the component will not rerender
    btnRef.current.innerText = "Clicked";
  };

  const getPaginationData = async () => {
    const response = await fetch(
      `https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
      {
        method: "GET",
        headers: {
          "app-id": "61421a5a6a9b4d3ad64b8cb1",
        },
      }
    );
    const data = await response.json();
    setUsersData(data.data);
  };
  // How you differeiacte between componentDidMount and ComponentDidUpdate

  // componentDidMount, componentDidUpdate,componentWillUnmount
  useEffect(() => {
    getPaginationData();

    return () => {
      // cleanup the resources
    };
  }, [pageNumber]);

  // When you update the state the component will rerender

  return (
    <div>
      <button onClick={handleBtnClick} ref={btnRef}>
        Click Me
      </button>
      <div>
        {usersData.length ? (
          <div>
            <div className="container mt-4">
              <div className="row">
                {usersData.map((user) => (
                  <div className="col-md-6 mt-3">
                    <div className="card p-5">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            className="img-fluid"
                            src={user.picture}
                            alt=""
                          />
                        </div>
                        <div className="col-md-8">
                          <div>
                            <p>Id : {user.id}</p>
                            <strong>
                              {user.title} {user.firstName} {user.lastName}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                className="btn btn-info ml-2"
                onClick={() => {
                  setPageNumber(num);
                }}
              >
                {num}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <img
              src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
              alt="loader"
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Pagination;
