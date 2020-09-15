import React from "react";
import Img1 from "../img/ignant-photography-christian-colomer-new-04.jpg";
import Img2 from "../img/ignant-photography-christian-colomer-011-720x929.jpg";
import Img3 from "../img/ignant-photography-christian-colomer-03-720x905.jpg";

//
//
//
const HomeContent = () => {
  return (
    <React.Fragment>
      <div id="TopSection">
      <h5>Books</h5>
        <h2>
          Quick Thoughts: Friedrich Schiller - On the Aesthetic Education of Man
        </h2>

        <img className="img-box" src={Img1} alt="img" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          voluptatibus labore eveniet fugiat enim nostrum reiciendis fuga saepe
          ratione corporis est reprehenderit sed eaque quo, mollitia aut
          repellat, consequuntur rem quae? Consequuntur recusandae sunt
          voluptatibus repellat placeat autem cum repudiandae dolores error
          minima libero eos, ducimus fugit hic quo, accusamus expedita iste
          cumque quidem odio? Molestiae accusantium eligendi, ipsam velit cumque
          iste, odio architecto rem nesciunt dolorem quae! Non quis reiciendis
          dolore nostrum repellat eos provident magni? Sed, inventore. Sit
          cupiditate, omnis, rerum minus eveniet eaque dolore dolor dignissimos
          tempore unde repellendus aspernatur nihil, praesentium quae assumenda
          quaerat vitae sint?
        </p>

        <div className="twin-img">
          <img className="img-box" src={Img2} alt="img " />
          <img className="img-box" src={Img3} alt="img" />
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
