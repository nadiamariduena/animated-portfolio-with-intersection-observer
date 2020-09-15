import React from "react";
import Img1 from "../img/ignant-photography-christian-colomer-new-011-720x581.jpg";
import Img2 from "../img/ignant-photography-christian-colomer-011-720x929.jpg";
import Img3 from "../img/ignant-photography-christian-colomer-03-720x905.jpg";

//
//
//
const HomeContent = () => {
  return (
    <React.Fragment>
      <div className="TopSection">
        <h1>text</h1>

        <img className="img-box" src={Img1} alt="" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dolores
          facere ea blanditiis minima expedita vero quasi, neque ducimus eum
          molestias ullam alias libero assumenda adipisci perferendis, enim
          quod. Expedita voluptates at voluptas fugit id deserunt perspiciatis
          dolore numquam. Beatae aspernatur cupiditate minima fugiat
          exercitationem illo sint nam repellat hic?
        </p>

        <div className="twin-img">
          <img className="img-box" src={Img2} alt="" />
          <img className="img-box" src={Img3} alt="" />
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dolores
          facere ea blanditiis minima expedita vero quasi, neque ducimus eum
          molestias ullam alias libero assumenda adipisci perferendis, enim
          quod. Expedita voluptates at voluptas fugit id deserunt perspiciatis
          dolore numquam. Beatae aspernatur cupiditate minima fugiat
          exercitationem illo sint nam repellat hic?
        </p>
      </div>
    </React.Fragment>
  );
};

export default HomeContent;
