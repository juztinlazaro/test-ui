import React, { Component } from "react";

class ColorScheme extends Component {
  render() {
    return (
      <section className="ColorScheme-section">
        <h2 className="page-title"> COLORS SCHEME </h2>
        <p className="description">
          Our variants are called primay, sky, jade, pumpkin, crimson; which is
          to Bootstrap's info, success, warning, danger respectively.
        </p>

        <div className="color-container">
          <h3 className="variable-name">Primary</h3>

          <div className="color-wrapper _primary">$primary</div>
          <div className="color-wrapper _primary-darker">$primary-darker</div>
          <div className="color-wrapper _primary-dark">$primary-dark</div>
          <div className="color-wrapper _primary-light">$primary-light</div>
          <div className="color-wrapper _primary-lighter">$primary-lighter</div>
        </div>

        <div className="color-container">
          <h3 className="variable-name">Sky</h3>

          <div className="color-wrapper _sky">$sky</div>
          <div className="color-wrapper _sky-darker">$sky-darker</div>
          <div className="color-wrapper _sky-dark">$sky-dark</div>
          <div className="color-wrapper _sky-light">$sky-light</div>
          <div className="color-wrapper _sky-lighter">$sky-lighter</div>
        </div>

        <div className="color-container">
          <h3 className="variable-name">Jade</h3>

          <div className="color-wrapper _jade">$jade</div>
          <div className="color-wrapper _jade-darker">$jade-darker</div>
          <div className="color-wrapper _jade-dark">$jade-dark</div>
          <div className="color-wrapper _jade-light">$jade-light</div>
          <div className="color-wrapper _jade-lighter">$jade-lighter</div>
        </div>

        <div className="color-container">
          <h3 className="variable-name">Pumpkin</h3>

          <div className="color-wrapper _pumpkin">$pumpkin</div>
          <div className="color-wrapper _pumpkin-darker">$pumpkin-darker</div>
          <div className="color-wrapper _pumpkin-dark">$pumpkin-dark</div>
          <div className="color-wrapper _pumpkin-light">$pumpkin-light</div>
          <div className="color-wrapper _pumpkin-lighter">$pumpkin-lighter</div>
        </div>

        <div className="color-container">
          <h3 className="variable-name">Crimson</h3>

          <div className="color-wrapper _crimson">$crimson</div>
          <div className="color-wrapper _crimson-darker">$crimson-darker</div>
          <div className="color-wrapper _crimson-dark">$crimson-dark</div>
          <div className="color-wrapper _crimson-light">$crimson-light</div>
          <div className="color-wrapper _crimson-lighter">$crimson-lighter</div>
        </div>

        <div className="color-container">
          <h3 className="variable-name">Ash</h3>

          <div className="color-wrapper _ash">$ash</div>
          <div className="color-wrapper _ash-darker">$ash-darker</div>
          <div className="color-wrapper _ash-dark">$ash-dark</div>
          <div className="color-wrapper _ash-light">$ash-light</div>
          <div className="color-wrapper _ash-lighter">$ash-lighter</div>
        </div>
      </section>
    );
  }
}

export default ColorScheme;
