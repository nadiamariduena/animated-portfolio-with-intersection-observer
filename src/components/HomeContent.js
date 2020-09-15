import React, { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";
//
//
//
import Img1 from "../img/adam-peter-johnson_metalmagazine-3.jpg";
import Img2 from "../img/adam-peter-johnson_metalmagazine-1.jpg";
// import Img3 from "../img/ignant-photography-christian-colomer-03-720x905.jpg";

//
//
//
const HomeContent = () => {
  //
  // _1_
  // Ref for our element
  const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  // Animation for fading in
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -100,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  // Animation for fading out
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < 0.2
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");

  return (
    <React.Fragment>
      <div id="TopSection">
        <div ref={sectionRef} className="inner">
          <h5 className="fadeIn">Books</h5>
          <h2 className="fadeIn">
            Quick Thoughts: Friedrich Schiller - On the Aesthetic Education of
            Man
          </h2>

          <img className="img-box fadeIn" src={Img1} alt="img" />

          <p className="fadeIn">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            voluptatibus labore eveniet fugiat enim nostrum reiciendis fuga
            saepe ratione corporis est reprehenderit sed eaque quo, mollitia aut
            repellat, consequuntur rem quae? Consequuntur recusandae sunt
            voluptatibus repellat placeat autem cum repudiandae dolores error
            minima libero eos, ducimus fugit hic quo, accusamus expedita iste
            cumque quidem odio? Molestiae accusantium eligendi, ipsam velit
            cumque iste, odio architecto rem nesciunt dolorem quae! Non quis
            reiciendis dolore nostrum repellat eos provident magni? Sed,
            inventore. Sit cupiditate, omnis, rerum minus eveniet eaque dolore
            dolor dignissimos tempore unde repellendus aspernatur nihil,
            praesentium quae assumenda quaerat vitae sint?
          </p>

          <div className="twin-img">
            <img className="img-box fadeIn" src={Img2} alt="img " />
            <img className="img-box fadeIn" src={Img2} alt="img" />
          </div>

          <p className="fadeIn">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            dolores facere ea blanditiis minima expedita vero quasi, neque
            ducimus eum molestias ullam alias libero assumenda adipisci
            perferendis, enim quod. Expedita voluptates at voluptas fugit id
            deserunt perspiciatis dolore numquam. Beatae aspernatur cupiditate
            minima fugiat exercitationem illo sint nam repellat hic?
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeContent;

/*
  
  FIRST THING we are going to do, is target the elements we want to animate/intersect
  , for that you will have to set up the REF/references and add them to the divs you are
  going to target for the animation.

const sectionRef = useRef(null);

Typically with useRef you want to use a useEffect and a useEffect is what actually Component 
DID MOUNT used to be, in this case we dont want to use that because we dont want anything to 
run on the DOM loading or the DID MOUNT, in this case we are not using it because the function 
is being called after the component has MOUNTED and in this case it doesnt concern us.



                _ then use a USE EFFECT

                ADD the REF/references to the divs, like so:

                  <div  ref={sectionRef}    className="sectionSecond">


                _  Next we are going to use THE USE INTERSECTION HOOK and
                    specifically "pass in" the section ref as our argument:
                    
                    useIntersection(sectionRef)

                    Once you pass in the sectionRef you re going to pass in 
                    some options:

                      const intersection = useIntersection(sectionRef, {
                            root: null,
                            rootMargin: "0px",
                            // rootMargin makes sure that we kind of highlighted everything 
                            before we start building.
                            threshold: 1,
                      });




                    _  We are going to write a ternary operator, you can also
                    use "if else":
                    
                    WHAT this is going to do, is that its going to check
                    IF we have REACHED the end of the threshold: 1, which is "one" and means
                    that if we have reached a 100% of our DIV we are going to execute 
                    certain functions/animations


                    // TERNARY OPERATOR for the animation functions

                    intersection && intersection.intersectionRatio < 1
                      ? // IF not reached: fadeOut()
                        fadeOut()
                      : fadeIn(); 
                      
                      //else: when it reached the threshold, so animate  fadeIn()
                    




                              --------------------
                                4 THE FUNCTIONS
                              --------------------



                                const fadeIn = (element) => {

                                  //5 use GSAP, write GSAP for both functions
                                        // This specifies the duration: to(Element, 1, {  here you will write certain functions }
                                  gsap.to(Element, 1, {

                                      // this work like css anim opacity 1 to show and 0 to hide
                                    opacity: 1,
                                    // y AXE
                                    y: -60,
                                    ease: "power4.out",

                                    // what the stagger is going to do, it will animate like in layers, first 
                                    the one and then when the one is done, 0.3 seconds later the second is going to run
                                    stagger: {
                                      amount: 0.3,
                                    },

                                  });
                                };

                                const fadeOut = (element) => {
                                
                                  gsap.to(Element, 1, {
                                    opacity: 0,
                                    // y AXE
                                    y: -20,
                                    ease: "power4.out",
                                  });
                                };
                                //



  
  */
