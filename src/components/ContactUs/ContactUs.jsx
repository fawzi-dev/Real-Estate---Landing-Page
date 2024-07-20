import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { BsFillChatDotsFill, BsFillChatSquareFill } from "react-icons/bs";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="cu-wrapper">
      <div className="paddings flexCenter innerWidth cu-container">
        {/* right side */}
        <div className="flexColStart cu-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good <br /> blace to live can make your life better
          </span>

          <div className="flexStart row">
            <ContacCard icon={<MdLocalPhone size={20} />} title={"Call"} />
            <ContacCard
              icon={<BsFillChatDotsFill size={20} />}
              title={"Chat"}
            />
          </div>
          <div className="flexStart row">
            <ContacCard
              icon={<MdLocalPhone size={20} />}
              title={"Video Call"}
            />
            <ContacCard
              icon={<BsFillChatSquareFill size={20} />}
              title={"Message"}
            />
          </div>
        </div>

        {/* left side */}
        <div className="flexEnd cu-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

const ContacCard = (props) => {
  return (
    <div className="flexColStart  cu-card">
      <div className="flexCenter cu-card-heading">
        <div className="flexCenter icon">{props.icon}</div>
        <div className="flexColStart cu-mode">
          <span className="primaryText">{props.title}</span>
          <span className="secondaryText">021 123 145 14</span>
        </div>
      </div>
      <button className="button">Message Now</button>
    </div>
  );
};
