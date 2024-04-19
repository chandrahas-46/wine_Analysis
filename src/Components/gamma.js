import React from 'react';
import { wine_data } from "../Assets/data";
import { calculateStatistics } from './utils';
import "../index.css";

const Gamma = () => {
    const gammaData = wine_data.map(item => (parseFloat(item.Ash) * parseFloat(item.Hue)) / parseFloat(item.Magnesium));
    const gammaStats = calculateStatistics(wine_data.map((item, index) => ({ ...item, Gamma: gammaData[index] })), 'Gamma');

  return (
    <div className='table_component'>
        <table border="1">
          <thead>
            <tr>
              <th>Measure</th>
              <th>Class 1</th>
              <th>Class 2</th>
              <th>Class 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gamma Mean</td>
              <td>{gammaStats.class1Mean}</td>
              <td>{gammaStats.class2Mean}</td>
              <td>{gammaStats.class3Mean}</td>
            </tr>
            <tr>
              <td>Gamma Median</td>
              <td>{gammaStats.class1Median}</td>
              <td>{gammaStats.class2Median}</td>
              <td>{gammaStats.class3Median}</td>
            </tr>
            <tr>
              <td>Gamma Mode</td>
              <td>{gammaStats.class1Mode}</td>
              <td>{gammaStats.class2Mode}</td>
              <td>{gammaStats.class3Mode}</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default Gamma;
