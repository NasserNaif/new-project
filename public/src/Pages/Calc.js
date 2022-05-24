import React from "react";
import style from "./styleCalc.css";

export default function Calc() {
  return (
    <div className="BodyDiv">
      <div className="wra">
        <form name="cal">
          <input
            type={"text"}
            name="display"
            is="display"
            className="DisplayC"
            placeholder="0"
            readOnly
          />
          <br />
          <div className="buttonBox">
            <input
              type={"button"}
              className="btn"
              value={"7"}
              onClick={"cal.diplay.value += 7"}
            />
            <input
              type={"button"}
              className="btn"
              value={"8"}
              onClick={"cal.diplay.value += 8"}
            />
            <input
              type={"button"}
              className="btn"
              value={"9"}
              onClick={"cal.diplay.value += 9"}
            />
            <input
              type={"button"}
              className="btn mbtn"
              value={"+"}
              onClick={"cal.diplay.value += +"}
            />
            <br />
            <input
              type={"button"}
              className="btn"
              value={"4"}
              onClick={"cal.diplay.value += 4"}
            />
            <input
              type={"button"}
              className="btn"
              value={"5"}
              onClick={"cal.diplay.value += 5"}
            />
            <input
              type={"button"}
              className="btn"
              value={"6"}
              onClick={"cal.diplay.value += 6"}
            />
            <input
              type={"button"}
              className="btn mbtn"
              value={"-"}
              onClick={"cal.diplay.value += -"}
            />
            <br />
            <input
              type={"button"}
              className="btn"
              value={"1"}
              onClick={"cal.diplay.value += 1"}
            />
            <input
              type={"button"}
              className="btn"
              value={"2"}
              onClick={"cal.diplay.value += 2"}
            />
            <input
              type={"button"}
              className="btn"
              value={"3"}
              onClick={"cal.diplay.value += 3"}
            />
            <input
              type={"button"}
              className="btn mbtn"
              value={"*"}
              onClick={"cal.diplay.value += *"}
            />
            <br />
            <input
              type={"button"}
              className="btn cbtn"
              value={"C"}
              onClick={"cal.diplay.value += C"}
            />
            <input
              type={"button"}
              className="btn"
              value={"0"}
              onClick={"cal.diplay.value += 0"}
            />
            <input
              type={"button"}
              className="btn mbtn"
              value={"\\"}
              onClick={"cal.diplay.value += \\"}
            />
            <input
              type={"button"}
              className="btn mbtn"
              value={"="}
              onClick={"cal.diplay.value += ="}
            />
            <br />
          </div>
        </form>
      </div>
    </div>
  );
}
