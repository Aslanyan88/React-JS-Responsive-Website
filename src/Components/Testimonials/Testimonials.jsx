import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    } else if (tx === -50) {
      tx = 0;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackForward = () => {
    if (tx < 0) {
      tx += 25;
    } else if (tx === 0) {
      tx = -50;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="next_icon "
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="back_icon "
        className="back-btn"
        onClick={slideBackForward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user_1" />
                <div>
                  <h3>Emma Johnson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Edusity has completely changed my approach to learning. The
                interactive courses and knowledgeable instructors have helped me
                grasp complex concepts with ease. I highly recommend Edusity to
                anyone looking to excel in their studies
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user_2" />
                <div>
                  <h3>Michael Chen</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                I've tried many online learning platforms, but none have come
                close to the quality of education provided by Edusity. The
                flexibility of scheduling and the variety of courses available
                make it the perfect choice for busy students like me.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user_3" />
                <div>
                  <h3>Sophia Patel</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Thanks to Edusity, I was able to enhance my skills and advance
                my career. The platform's user-friendly interface and engaging
                content made learning enjoyable and productive. I'm grateful for
                the opportunity to learn and grow with Edusity
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user_4" />
                <div>
                  <h3>David Lee</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                As a working professional, finding time for learning can be
                challenging. Edusity's on-demand courses allowed me to pursue my
                interests at my own pace. The supportive community and expert
                guidance made my learning journey rewarding and fulfilling
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
