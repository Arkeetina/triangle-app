import React, { Component } from 'react';
import { getTriangleTypeByAngle, getTriangleTypeBySide } from './helpers/formulas';
import FieldSet from './Fieldset';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triangleSideA: 0,
      triangleSideB: 0,
      triangleSideC: 0,
      triangleTypeResult: '',
      error: '',
    };
  }

  setSideValue = (side, value) => {
    const { error } = this.state;
    if (error) this.setState(() => ({ error: '' }));
    this.setState(() => ({ [side]: value }));
  }

  selectText = (event) => {
    event.currentTarget.select();
  }

  sideInputsAreFilled = () => {
    const {
      triangleSideA,
      triangleSideB,
      triangleSideC,
      error,
    } = this.state;

    const inputsNotZero = [triangleSideA, triangleSideB, triangleSideC]
      .every(side => side > 0);

    if (!inputsNotZero) {
      this.setState(() => ({
        error: 'Please enter all three sides value',
      }));

      return false;
    }

    if (error) this.setState(() => ({ error: '' }));
    return true;
  }

  getTriangleTypeByAngle = () => {
    const {
      triangleSideA,
      triangleSideB,
      triangleSideC,
      triangleTypeResult,
    } = this.state;

    if (triangleTypeResult) this.setState(() => ({ triangleTypeResult: '' }));

    if (this.sideInputsAreFilled()) {
      const type = getTriangleTypeByAngle([triangleSideA, triangleSideB, triangleSideC]);
      this.setState(() => ({ triangleTypeResult: type }));
    }
  }

  getTriangleTypeBySide = () => {
    const {
      triangleSideA,
      triangleSideB,
      triangleSideC,
      triangleTypeResult,
    } = this.state;

    if (triangleTypeResult) this.setState(() => ({ triangleTypeResult: '' }));
    if (this.sideInputsAreFilled()) {
      const type = getTriangleTypeBySide([triangleSideA, triangleSideB, triangleSideC]);
      this.setState(() => ({ triangleTypeResult: type }));
    }
  }

  render() {
    const {
      triangleSideA,
      triangleSideB,
      triangleSideC,
      triangleTypeResult,
      error,
    } = this.state;

    return (
      <div className="App">
        <div data-ts="MainContent">
          <div className="content-container">
            <h1 className="title">Enter sides to check triangle type</h1>

            {triangleTypeResult && (
              <div className="triangle-type-container">
                <div className="triangle-type-logo-container">
                  <img
                    alt="triangle-type"
                    src={`images/${triangleTypeResult.toLowerCase()}.png`}
                  />
                </div>
                <p className="form-text">{`${triangleTypeResult} Triangle`}</p>
              </div>
            )}

            <div className="form-container">
              <form data-ts="Form">
                <div className="form-inputs-container">

                  <FieldSet
                    style={{ paddingTop: '10px' }}
                    selectText={this.selectText}
                    triangleSideValue={triangleSideA}
                    triangleSideName="triangleSideA"
                    setSideValue={this.setSideValue}
                    sideNumber="1"
                    error={error}
                  />

                  <FieldSet
                    selectText={this.selectText}
                    triangleSideValue={triangleSideB}
                    triangleSideName="triangleSideB"
                    setSideValue={this.setSideValue}
                    sideNumber="2"
                    error={error}
                  />

                  <FieldSet
                    selectText={this.selectText}
                    triangleSideValue={triangleSideC}
                    triangleSideName="triangleSideC"
                    setSideValue={this.setSideValue}
                    sideNumber="3"
                    error={error}
                  />

                </div>

                {error && <p className="form-text">{error}</p>}

                <div className="button-container">

                  <button
                    type="button"
                    onClick={this.getTriangleTypeBySide}
                    data-ts="Button"
                    className="ts-primary calculate-button"
                  >
                    <span>Type by sides</span>
                  </button>

                  <button
                    type="button"
                    onClick={this.getTriangleTypeByAngle}
                    data-ts="Button"
                    className="ts-primary calculate-button"
                  >
                    <span>Type by angle</span>
                  </button>

                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
