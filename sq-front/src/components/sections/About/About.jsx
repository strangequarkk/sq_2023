import "./about-style.css";
import VisibilitySensor from "react-visibility-sensor";
import PropTypes from "prop-types";

export const About = ({ setCurrentSection }) => {
  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible) {
          setCurrentSection("about");
        }
      }}
    >
      <section id='about'>
        <h2 className='font-heading'>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit
          scelerisque mauris pellentesque pulvinar pellentesque habitant morbi.
          Risus nec feugiat in fermentum posuere urna. Pretium fusce id velit ut
          tortor pretium. Volutpat lacus laoreet non curabitur gravida arcu ac
          tortor dignissim. Non odio euismod lacinia at quis risus sed
          vulputate.
        </p>
        <h3>Contact:</h3>
        <p>
          Fermentum iaculis eu non diam phasellus vestibulum lorem. Varius morbi
          enim nunc faucibus a pellentesque sit amet porttitor. Est lorem ipsum
          dolor sit amet consectetur adipiscing elit. Auctor urna nunc id cursus
          metus aliquam eleifend. Adipiscing bibendum est ultricies integer
          quis. Aliquam purus sit amet luctus. Sit amet facilisis magna etiam
          tempor orci. Quam nulla porttitor massa id neque. Convallis a cras
          semper auctor neque vitae tempus quam pellentesque. At imperdiet dui
          accumsan sit amet nulla facilisi morbi tempus.
        </p>
      </section>
    </VisibilitySensor>
  );
};
About.propTypes = {
  setCurrentSection: PropTypes.func,
};
