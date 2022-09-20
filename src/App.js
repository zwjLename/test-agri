import React from "react";
import "./App.less";
import "./App.scss";

import hightLight from "./imgs/light.png";
import target from "./imgs/target.png";
import moment from "moment";
import { Meteorology } from "./components/Meteorology";
import { FarmTime } from "./components/FarmTime";
import { MapComponent } from "./components/MapComponent";
import { TerminalManage } from "./components/TerminalManage";
import { TerminalData } from "./components/TerminalData";

const WEEK = ['星期日','星期一', '星期二', '星期三', '星期四','星期五','星期六']
function App() {
  return (
    <>
      <header>
        <div className="left">
          <div className="prefix-holder">
            <div className="header-pic-left"></div>
          </div>
          <div className="slash-holder"></div>
        </div>
        <div className="content flex-column">
          <div className="title">
            <div className="title-word"></div>
            <div className="title-word"></div>
            <div className="title-word"></div>
            <div className="title-word"></div>
            <div className="title-word"></div>
            <div className="title-word"></div>
            <div className="title-word"></div>
            <div className="title-word"></div>
          </div>
          <div className="subtitle">
            <img src={target} className="ml10" />
            <div className="ml10">INTELLTGENT</div>
            <div className="ml20">JIANGNING</div>
            <div className="ml20">PRODUCT</div>
          </div>
          {/*  */}
        </div>

        <div className="right">
          <div className="slash-holder"></div>
          <div className="prefix-holder">
            <div className="header-pic-right"></div>
          </div>
        </div>
      </header>
      <img src={hightLight} className="hight-light" />
      <div className="main-content">
        <div className="left">
          <div className="flex-column main mt10">
            <div className="flex left-main-top">
                {/* 气象走势 */}
              <Meteorology />
            </div>
            <div className="left-main-bottom">
              {/* 农时分析 */}
              <FarmTime />
            </div>
          </div>
        </div>
        <div className="left-slash-holder"></div>
        <div className="map">
          <div className="map-content mt20">
            <MapComponent />
          </div>
        </div>
        <div className="right-slash-holder"></div>
        <div className="right">
          <div className="flex-column main mt10">
            <div className="main-top ">
            {/* <ConditionRealTime /> */}
              <TerminalManage />
            </div>
            <div className="main-part-bottom">
              {/* <TodayStatistics /> */}
              <TerminalData />
            </div>
          </div>
        </div>
      </div>
      <footer className="flex">
        <div className="left">
          <div className="line"></div>
        </div>
        <div className="left-slash-holder"></div>
        <div className="map flex flex-center">
          <div>{moment().format("YYYY-MM-DD")}</div>
          <div className="ml10">{WEEK[moment().weekday()]}</div>
          <div className="ml10">{moment().format("HH:mm")}</div>
        </div>
        <div className="right-slash-holder"></div>
        <div className="right"><div className="line"></div></div>
      </footer>
    </>
  );
}

export default App;
