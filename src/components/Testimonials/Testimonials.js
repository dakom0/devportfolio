import React from "react";
import "./Testimonials.css";
import quote from "../../images/quote-right-solid.png"
import star from "../../images/star-solid.png"
import a1 from "../../images/a1.png"
import a2 from "../../images/a2.png"
import a3 from "../../images/a3.png"

function Testimonials() {
  return (
    <div className="Testimonials">
      <div className="Testimonials__container">
        <div className="testimonials__top">
          <p className="testimonials__title">Testimonials</p>
          <p className="testimonials__subtitle">What clients say about me</p>
        </div>
        <div className="testimonials__card" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">
          <div className="testimonials__rating">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <p>5.0 Rating</p>
          </div>
          <img src={quote} alt="quote" className="testimonials__quote" />
          <div className="testimonials__card__info">
            Daniel was a real pleasure to work with and we look forward to
            working with him again. He's definitely the kind of designer you can
            trust with a project from start to finish.
          </div>
        </div>
        <div className="testimonials__people__container" data-aos="fade-up-right"  data-aos-duration="1500" data-aos-delay="500">
          <div className="testimonials__people">
            <div className="testimonials__left">
              <img src={a1} alt="a1" className="testimonials__Avatar" />
            </div>
            <div className="testimonials__people__right">
              <p className="testimonials__name">John Doe</p>
              <p className="testimonials__company">
                VP & Co Founder, <span>Wiser</span>
              </p>
            </div>
          </div>

          <div className="testimonials__people">
            <div className="testimonials__left">
              <img src={a2} alt="a2" className="testimonials__Avatar" />
            </div>
            <div className="testimonials__people__right">
              <p className="testimonials__name">John Doe</p>
              <p className="testimonials__company">
                Project Manager, <span>Focuslab</span>
              </p>
            </div>
          </div>

          <div className="testimonials__people">
            <div className="testimonials__left">
              <img src={a3} alt="a3" className="testimonials__Avatar" />
            </div>
            <div className="testimonials__people__right">
              <p className="testimonials__name">John Doe</p>
              <p className="testimonials__company">
                UI/UX Designer, <span>LoganCee</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
