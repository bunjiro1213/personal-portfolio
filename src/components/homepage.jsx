import React from "react";
import "./homepage.module.css";

export const Homepage = () => {
  return (
    <div className="homepage" data-model-id="1:2">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />

          <p className="bunjiro-yamada">
            <span className="text-wrapper">
              Bunjiro <br />
            </span>

            <span className="span">Yamada</span>
          </p>
        </div>

        <img
          className="img"
          alt="Rectangle"
          src="https://c.animaapp.com/mcjh3hguLTu7SD/img/rectangle-4.png"
        />

        <div className="overlap-group">
          <p className="see-my-latest-work">
            <span className="text-wrapper-2">See my latest </span>

            <span className="text-wrapper-3">work</span>
          </p>

          <div className="overlap-2">
            <img
              className="arrow"
              alt="Arrow"
              src="https://c.animaapp.com/mcjh3hguLTu7SD/img/arrow-11.svg"
            />

            <div className="rectangle-2" />
          </div>

          <div className="text-wrapper-4">All Projects</div>
        </div>

        <div className="div-wrapper">
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            odio arcu, efficitur nec risus ut, porta auctor lorem. Phasellus
            rutrum quam sed tincidunt varius. Suspendisse.
          </p>
        </div>

        <div className="ellipse-wrapper">
          <img
            className="ellipse"
            alt="Ellipse"
            src="https://c.animaapp.com/mcjh3hguLTu7SD/img/ellipse-1.png"
          />
        </div>

        <div className="overlap-group-2">
          <div className="rectangle-3" />

          <p className="contact-me">
            <span className="text-wrapper">
              Contact
              <br />
            </span>

            <span className="span">me</span>
          </p>

          <img
            className="image"
            alt="Image"
            src="https://c.animaapp.com/mcjh3hguLTu7SD/img/image-1.png"
          />

          <img
            className="image-2"
            alt="Image"
            src="https://c.animaapp.com/mcjh3hguLTu7SD/img/image-2.png"
          />
        </div>
      </div>
    </div>
  );
};

