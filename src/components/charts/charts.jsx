import React, { Component } from 'react';
import ChartBar from './Chart';

class Charts extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }
  componentWillMount() {
    this.getChartData();
  }
  getChartData() {

    this.setState({
      chartData: {
        labels: ['Эр-Рияд, Саудовская Аравия', 'Чианг-Май, Тайланд', 'Дакка, Бангладеш', 'Мумбаи, Индия'],
        datasets: [
          {
            label: 'AQI',
            data: [
              261,
              173,
              171,
              0,
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }
  render() {
    return (
      <div className="Chart">
        <ChartBar chartData={this.state.chartData} location="Эр-Рияд, Саудовская Аравия" legendPosition="bottom" />
      </div>
    );
  }

}
export default Charts;