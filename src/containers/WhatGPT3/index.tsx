import React from "react";
import { Feature } from "../../components";

import "./styles.scss";

const WhatGPT3 = () => {
  return (
    <div className="WhatGPT3 p-4">
      <div className="container-fluid">
        <div className="WhatGPT3__container">
          <div className="WhatGPT3__header">
            <Feature
              title="What is GPT-3?"
              content="We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by."
            />
          </div>

          <div className="WhatGPT3__possibilities d-flex align-items-center justify-content-between">
            <span className="gradient-text">
              The possibilities are beyond your imagination
            </span>

            <a href="#">Explore the Library</a>
          </div>

          <div className="WhatGPT3__features d-flex gap-4 align-items-center">
            <Feature
              title="Chatbots"
              content="We so opinion friends me message as delight. Whole front do of
                plate heard oh ought."
              className="flex-column"
            />

            <Feature
              title="Knowledgebase"
              content="At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments b"
              className="flex-column"
            />

            <Feature
              title="Education"
              content="At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments b"
              className="flex-column"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
