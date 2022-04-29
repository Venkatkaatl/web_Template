import React, { Component, Fragment } from "react";
import ofcbuildon from "../images/office-buildings.jpg";
import ofcbuildtw from "../images/plain-concrete-structure-city-with-copy-space.jpg";
import ofcbuildth from "../images/low-angle-building-city.jpg";

class main extends Component {
    render() {
        return(
            <Fragment>
            <div className="MainCmp">
              <div className="main">
                <div className="left-main"></div>
                <div className="right-main"></div>
              </div>
              <div className="imgs">
                <img
                  src={ofcbuildon}
                  className="ofcbuild1"
                  alt="office building1"
                />
                <img
                  src={ofcbuildtw}
                  className="ofcbuild2"
                  alt="office building2"
                />
                <img
                  src={ofcbuildth}
                  className="ofcbuild3"
                  alt="office building3"
                />
                <div className="ofc-content">
                  <h1>WHAT WE DO</h1>
                  <p className="ofc-con-1">
                    Integrated design practice of architecture, landscape, interiors
                  </p>
                  <p className="ofc-con-2">
                    image from <a href="#">Freepik</a>
                  </p>
    
                  <button
                    variant="contained"
                    style={{
                      borderRadius: "100px",
                      width: "112px",
                      backgroundColor: "rgb(3, 7, 64)",
                      textTransform: "lowercase",
                      fontWeight: "bold",
                    }}
                  >
                    learn more
                  </button>
                </div>
              </div>
            </div>
          </Fragment>
        )
    }
}

export default main