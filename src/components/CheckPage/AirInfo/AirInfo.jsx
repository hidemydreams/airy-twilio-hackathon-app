import React from 'react';
import BeforeStart from '../BeforeStart/BeforeStart';
import "./AirInfo.scss"
import { motion } from 'framer-motion'

export default function AirInfo({ airInfo }) {

  return (
    <div className="info-section">
      {airInfo ? (<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className={`info-card ${airInfo?.list[0].main.aqi === 1 ? "green-card" : null || airInfo?.list[0].main.aqi === 2 ? "yellow-card" : null || airInfo?.list[0].main.aqi === 3 ? "orange-card" : null || airInfo?.list[0].main.aqi === 4 ? "dark_orange-card" : null || airInfo?.list[0].main.aqi === 5 ? "red-card" : null}`}>
        <div className="card-row">
          <div className="left-side">
            <h1>{airInfo?.list[0].main.aqi === 1 ? "Clean Air" : null || airInfo?.list[0].main.aqi === 2 ? "Moderate" : null || airInfo?.list[0].main.aqi === 3 ? "Unhealthy" : null || airInfo?.list[0].main.aqi === 4 ? "Very Unhealthy" : null || airInfo?.list[0].main.aqi === 5 ? "Hazardous" : null}</h1>
            <div className="left-side__info">
              {airInfo?.list[0].main.aqi === 1 ? <p>Air quality is satisfactory, and air pollution poses little or no risk. Enjoy your usual outdoor activities. </p> : null || airInfo?.list[0].main.aqi === 2 ? <p>Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.</p> : null || airInfo?.list[0].main.aqi === 3 ? <p>Members of sensitive groups may experience health effects. The general public is not likely to be affected.	Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.</p> : null || airInfo?.list[0].main.aqi === 4 ? <p>Health warnings of emergency conditions. The entire population is more likely to be affected.	Active children and adults, and people with respiratory disease, such as asthma. </p> : null || airInfo?.list[0].main.aqi === 5 ? <p>Health alert: everyone may experience more serious health effects.	Everyone should avoid all outdoor exertion. Should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.</p> : null}
            </div>
          </div>
          <div className="right-side">
            <h3>Chemical Compounds</h3>
            <ul className="chemical-list">
              <li><span>CO</span>: {airInfo.list[0].components.co}, μg/m<sup>3</sup></li>
              <li><span>NO</span>: {airInfo.list[0].components.no}, μg/m<sup>3</sup></li>
              <li><span>NO<sub>2</sub></span>: {airInfo.list[0].components.no2}, μg/m<sup>3</sup></li>
              <li><span>O<sub>3</sub></span>: {airInfo.list[0].components.o3}, μg/m<sup>3</sup></li>
              <li><span>SO<sub>2</sub></span>: {airInfo.list[0].components.so2}, μg/m<sup>3</sup></li>
              <li><span>PM<sub>2.5</sub></span>: {airInfo.list[0].components.pm2_5}, μg/m<sup>3</sup></li>
              <li><span>PM<sub>10</sub></span>: {airInfo.list[0].components.nh3}, μg/m<sup>3</sup></li>
              <li><span>NH<sub>3</sub></span>: {airInfo.list[0].components.pm10}, μg/m<sup>3</sup></li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <p>** You can get information on any chemical compound  and normal value of it just by clicking on it</p>
          <p>Last Information Update: 03/11/2021 @ 3:56pm</p>
        </div>
      </motion.div>) : <BeforeStart />}
    </div>
  )
}
