import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ReduxFuncComponent(props) {
  const dispatch = useDispatch();
  const [data, setData] = React.useState("");

  const singleUSerData = useSelector((state) => state.user.data);
  const allUserData = useSelector((state) => state.user.allUserData);
  const loading = useSelector((state) => state.user.loading);
  const counter = useSelector((state) => state.user.counter);
  const errorMessage = useSelector((state) => state.user.errorMessage);

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

          {allUserData.length > 0 && (
            <table className="table">
              <thead>
                <tr>
                <th>#</th>
                <th>ID</th>
                <th>URL</th>
                </tr>
              </thead>
              <tbody>
                {allUserData &&
                  allUserData.map((x, i) => {
                    return (
                      <tr key={i}>
                        <td>{x.id}</td>
                        <td>{x.login}</td>
                        <td>{x.url}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          )}
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
