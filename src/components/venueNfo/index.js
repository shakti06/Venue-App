import React from "react";
import Zoom from "react-reveal/Zoom";
import calendar from "../../resources/images/icons/calendar.png";
import location from "../../resources/images/icons/location.png";

const VenueNfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red" />
                  <div
                    className="vn_icon"
                    style={{ background: `url(${calendar})` }}
                  />
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">30 Feb, 2019</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow" />
                  <div
                    className="vn_icon"
                    style={{ background: `url(${location})` }}
                  />
                  <div className="vn_title">Location</div>
                  <div className="vn_desc">Hotel Annapurna</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueNfo;
