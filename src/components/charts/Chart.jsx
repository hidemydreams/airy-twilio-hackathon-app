import React, {Component} from 'react';
import {Bar, Pie} from 'react-chartjs-2';

class ChartBar extends Component{
    constructor(props){
      super(props);
      this.state = {
        chartData:props.chartData,
        chartData1:props.chartData1,
        chartData2:props.chartData2,
      }
    }
    static defaultProps = {
      displayTitle:true,
    
      location:'City'
    }
  
    render(){
      return (
        <div className="chart">
          <Bar
            data={this.state.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Еhe most polluted air in '+this.props.location,
                fontSize:25
              },
              
            }}
          />
  
          <Bar
            data={this.state.chartData1}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'The cleanest air in '+this.props.location,
                fontSize:25
              },
              
            }}
          />
  
          <Pie
            data={this.state.chartData2}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Human influence on air condition,% ',
                fontSize:25
              },
              
            }}
          />
        </div>
      )
    }
  }
    
     



  export default ChartBar;  