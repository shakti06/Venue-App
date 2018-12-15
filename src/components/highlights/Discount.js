import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_porcentage">
              <span> {this.state.discountStart}%</span>
              <span> OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase Tickets </h3>
              <p>
                Purchase the tickets before December 30.There will be heavy
                discount price for the package tickets.Tickets will be available
                from the nearest store.
              </p>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
