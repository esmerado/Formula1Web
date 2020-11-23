import React, { Component } from "react";
import { lgBBtn, lgBCol, lgBContainer, lgBRow } from "lgbreact";
import "./index.css";
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <lgBContainer>
        <lgBRow center style={{ height: "100vh" }}>
          <lgBCol middle={true} lg="6" className="text-center">
            <img src={logo} alt="logo" style={{ width: "10rem" }} />
            <h1 className="text-white">Welcome to Your lgB React App</h1>
            <p className="mb-2 text-white">
              The application is configured and ready to import our components.
            </p>
            <lgBBtn
              href="https://lgbootstrap.com/docs/react/"
              target="blank"
              color="light-blue"
            >
              <strong>Check out our docs!</strong>
            </lgBBtn>
          </lgBCol>
          <lgBCol middle={true} lg="6" className="text-center">
            <div className="d-flex mt-5">
              <div className="text-center">
                <h2 className="h1 text-poppy-red">BLACK NOVEMBER SURPRISE!</h2>
                <i className="fas fa-shopping-basket text-white fa-10x"></i>
                <p className="mt-2 text-white">
                  Check what we have prepared and start using the richest UI Kit
                  today.
                  <br />
                  Hurry up & don't loose your chance.
                </p>
                <p>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    type="button"
                    className="btn btn-danger btn-rounded btn-lg text-white bg-poppy-red"
                    href="https://lgbootstrap.com/sale/"
                  >
                    <i className="fas fa-cart-arrow-down"></i> CLAIM OFFER
                  </a>
                </p>
              </div>
            </div>
          </lgBCol>
        </lgBRow>
      </lgBContainer>
    );
  }
}

export default App;
