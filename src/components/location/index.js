import React from "react";

const location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14128.801817710919!2d85.3165456!3d27.7110965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x98eccd6cf32b17f9!2sHotel+Annapurna!5e0!3m2!1sen!2snp!4v1544854626994"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default location;
