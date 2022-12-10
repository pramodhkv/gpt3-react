import React from "react";

import "./styles.scss";

const Brand = () => {
  return (
    <div className="Brand d-flex align-items-center justify-content-center gap-5 py-3">
      <img src="/assets/google.png" alt="Google" />
      <img src="/assets/slack.png" alt="Slack" />
      <img src="/assets/atlassian.png" alt="Atlassian" />
      <img src="/assets/dropbox.png" alt="Dropbox" />
      <img src="/assets/shopify.png" alt="shopify" />
    </div>
  );
};

export default Brand;
