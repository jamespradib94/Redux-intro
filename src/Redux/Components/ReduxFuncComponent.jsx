import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ReduxFuncComponent(props) {
  const dispatch = useDispatch();
  const [data, setData] = React.useState("");

  const singleUSerData = useSelector((state) => state.data);
  const allUserData = useSelector((state) => state.allUserData);
  const loading = useSelector((state) => state.loading);
  const counter = useSelector((state) => state.counter);
  const errorMessage = useSelector((state) => state.errorMessage);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    if (data) {
      dispatch({ type: "GETDATASINGLEUSER", payload: data });
    } else {
      dispatch({ type: "GETDATAALLUSERS", payload: data });
    }
  };

  const handleCounterClick = () => {
    dispatch({ type: "COUNTER" });
  };

  const handleClearClick = () => {
    setData("");
    dispatch({ type: "CLEAR" });
  };

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="form-group">
          <div className="form-row">
            <span style={{ fontSize: "20px" }}>Functional Component</span>
          </div>
          <div className="form-row">
            <input
              id="input"
              className="form-control"
              onChange={handleChange}
              value={data}
            />
          </div>
          <div className="col">
            <button
              id="button"
              className="btn btn-secondary"
              onClick={handleClick}
            >
              Submit
            </button>
            <button
              id="button"
              className="btn btn-secondary"
              onClick={handleClearClick}
            >
              Clear
            </button>
          </div>
          <div className="form-row" role="alert">
            <span className="pl-55">{data}</span>
          </div>
          {singleUSerData ? (
            <>
              <div className="form-row ml">
                <span>{singleUSerData.id}</span>
              </div>
              <div className="form-row ml">
                <span>{singleUSerData.name}</span>
              </div>
              <div className="form-row ml">
                <span>{singleUSerData.url}</span>
              </div>
            </>
          ) : (
            <div> {errorMessage} </div>
          )}
          {allUserData &&
            allUserData.map((x, i) => {
              return (
                <div key={i}>
                  <div className="form-row ml">
                    <span>{x.id} </span>
                    <span> {x.login}</span>
                  </div>
                  <div className="form-row ml">
                    <span> {x.url}</span>
                  </div>
                </div>
              );
            })}
          {/* <button
            id="button"
            className="btn btn-secondary"
            onClick={handleCounterClick}
          >
            Counter
          </button>
          <div className="form-row">
            <span style={{ fontSize: "20px"}}>
              {counter}
            </span>
          </div> */}
        </div>
      )}
    </>
  );
}

export { ReduxFuncComponent };
