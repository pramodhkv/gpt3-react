import React from "react";

import "./styles.scss";

interface IFeature {
  title: string;
  content: string;
  className?: string;
}

const Feature = (props: IFeature) => {
  const { title, content, className = "flex-row" } = props;

  return (
    <div className={`Feature d-flex justify-content-between ${className}`}>
      <div className="Feature__header w-50">
        <div className="Feature__gradient-line"></div>
        <span className="Feature__title">{title}</span>
      </div>
      <p className="Feature__text-content">{content}</p>
    </div>
  );
};

export default Feature;
