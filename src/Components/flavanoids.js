import React from 'react';
import { wine_data } from "../Assets/data";
import { calculateStatistics } from './utils';
import "../index.css";

const Flavanoids = () => {
    const flavanoidsStats = calculateStatistics(wine_data, 'Flavanoids');
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
                        <td>Flavanoids Mean</td>
                        <td>{flavanoidsStats.class1Mean}</td>
                        <td>{flavanoidsStats.class2Mean}</td>
                        <td>{flavanoidsStats.class3Mean}</td>
                    </tr>
                    <tr>
                        <td>Flavanoids Median</td>
                        <td>{flavanoidsStats.class1Median}</td>
                        <td>{flavanoidsStats.class2Median}</td>
                        <td>{flavanoidsStats.class3Median}</td>
                    </tr>
                    <tr>
                        <td>Flavanoids Mode</td>
                        <td>{flavanoidsStats.class1Mode}</td>
                        <td>{flavanoidsStats.class2Mode}</td>
                        <td>{flavanoidsStats.class3Mode}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Flavanoids;