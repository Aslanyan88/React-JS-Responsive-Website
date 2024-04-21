import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img className="about-img" src={about_img} alt="about" />
        <img className="play-icon" src={play_icon} alt="about" />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurtuting Tomorrow's Leaders Today</h2>
        <p>
          At Edusity, we believe in the power of education to transform lives.
          Our mission is to make learning accessible to everyone, anytime,
          anywhere. Whether you're a student looking to expand your knowledge, a
          professional aiming to upskill, or an institution seeking innovative
          solutions, we've got you covered.
        </p>
        <p>
          What sets us apart is our commitment to excellence, innovation, and
          inclusivity. We offer a diverse range of courses taught by industry
          experts, curated to meet the needs of learners at every stage of their
          journey. From interactive live sessions to engaging multimedia
          content, we strive to make learning an immersive and enriching
          experience
        </p>
        <p>
          But Edusity is more than just a platform—it's a community. A community
          of learners, educators, and innovators united by a passion for
          knowledge and a desire to make a difference. Join us as we embark on a
          journey of discovery, growth, and lifelong learning.
        </p>
      </div>
    </div>
  );
};

export default About;
