import React, { useEffect, useState } from 'react';
import BeforeStart from '../BeforeStart/BeforeStart';
import "./AirInfo.scss"
import { motion } from 'framer-motion'

export default function AirInfo({ airInfo }) {

  return (
    <div className="info-section">
      {airInfo.list ? (<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className={`info-card ${airInfo?.list[0].main.aqi === 1 ? "green-card" : null || airInfo?.list[0].main.aqi === 2 ? "yellow-card" : null || airInfo?.list[0].main.aqi === 3 ? "orange-card" : null || airInfo?.list[0].main.aqi === 4 ? "dark_orange-card" : null || airInfo?.list[0].main.aqi === 5 ? "red-card" : null}`}>
        <div className="left-side">
          <h1>{airInfo?.list[0].main.aqi === 1 ? "Clean Air" : null || airInfo?.list[0].main.aqi === 2 ? "Moderate" : null || airInfo?.list[0].main.aqi === 3 ? "Unhealthy" : null || airInfo?.list[0].main.aqi === 4 ? "Very Unhealthy" : null || airInfo?.list[0].main.aqi === 5 ? "Hazardous" : null}</h1>
          <div className="left-side__info">
            {airInfo?.list[0].main.aqi === 1 ? <p>Air quality is satisfactory, and air pollution poses little or no risk.</p> : null || airInfo?.list[0].main.aqi === 2 ? <p>Moderate air you are good to go</p> : null || airInfo?.list[0].main.aqi === 3 ? <p>Unhealthy air not so good</p> : null || airInfo?.list[0].main.aqi === 4 ? <p>Very Unhealthy</p> : null || airInfo?.list[0].main.aqi === 5 ? <p>Get out of this place!!</p> : null}
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
      </motion.div>) : <BeforeStart />}
    </div>
  )
}
