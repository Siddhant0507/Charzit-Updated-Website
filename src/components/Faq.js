import React, { useState } from "react";
import "../css/faq.css";
import { GrFormAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr";
function Faq() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const data = [
    {
      question: "What is CharzIt ?",
      answer:
        "charzit is a platform that provides charging stations for electric vehicals from various trusted and well-known brands. Our charging stations are affordable and won't break the bank, and we are committed to being environmentally friendly.",
    },
    {
      question: "What charging options does charzit offer? ",
      answer:
        "Charzit's charging solutions also cater to different types of electric vehicles, including two-wheelers, three-wheelers, and four-wheelers. By offering charging infrastructure for various types of EVs, Charzit aims to make it easier for people to charge their vehicles, regardless of the type of electric vehicle they own.",
    },
    {
      question: "How does charzit prioritize sustainability? ",
      answer:
        "At charzit, we prioritize environmental sustainability by providing affordable, high-quality charging stations that reduce carbon emissions. We also encourage the use of electric vehicles as an eco-friendly transportation option.",
    },
  ];
  return (
    <>
      <h3 className="faq">FAQ</h3>
      <h1 className="faq-heading">Do You Have Any Questions ?</h1>

      <div className="wrapper">
        <div className="accordian">
          {data.map((item, i) => (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>{" "}
                <span>
                  {selected === i ? (
                    <div className="icon-size">
                      <GrFormSubtract />
                    </div>
                  ) : (
                    <div className="icon-size">
                      <GrFormAdd />
                    </div>
                  )}
                </span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;
