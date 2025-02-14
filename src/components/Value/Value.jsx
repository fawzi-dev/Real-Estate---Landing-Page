import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import accordionData from "../../utils/accordion";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        <div className="flexColStart v-right">
          <span className="orangeText">Our Plan</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            <br />
            We beleive a good place to live can make your life better
          </span>

          <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className="accordion"
          >
            {accordionData.map((item, index) => {
              const [className, setClassnName] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItem ${className} `}
                  key={index}
                  uuid={index}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassnName("expanded")
                            : setClassnName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="accordion-leading-title flexCenter">
                        {/* Leading icon */}
                        <div className="flexCenter icon">{item.icon}</div>
                        {/* Heading */}
                        <span className="primaryText">{item.heading}</span>
                      </div>
                      {/* Expand/Collapse icon */}
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  {/* Panel/Details */}
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
