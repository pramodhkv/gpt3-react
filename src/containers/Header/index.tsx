import React from "react";

import "./styles.scss";

const Header = () => {
  return (
    <div className="Header my-5 mx-3">
      <div className="container-fluid">
        <div className="row">
          <div className="Header__left-section col-lg-6 d-flex flex-column gap-4 py-5">
            <h1 className="Header__title">
              Let’s Build Something amazing with GPT-3 OpenAI
            </h1>

            <p className="Header__description my-4 py-3">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>

            <div className="Header__input-group input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email Address"
                aria-label="Your Email Address"
                aria-describedby="button-addon2"
              />
              <button className="custom-btn" type="button" id="button-addon2">
                Get Started
              </button>
            </div>

            <div className="Header__social-stats my-4">
              <div className="d-flex gap-3 align-items-center">
                <img src="/assets/people.png" alt="People" />

                <span>
                  1,600 people requested access a visit in last 24 hours
                </span>
              </div>
            </div>
          </div>

          <div className="Header__right-section col-lg-6">
            <img src="/assets/ai.png" alt="OpenAI" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
