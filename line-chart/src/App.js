import React, {useEffect, useRef, useState} from'react'
import Highcharts from 'highcharts';


export default function App() { 
   const refContainer = useRef(null);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const chart = Highcharts.chart(refContainer.current, {
      chart: {
        type: 'line'
      }, // type of the chart
      title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
      }, // title of the chart
      subtitle: {
        text: 'Source:thesolarfoundation.com'
      }, // subtitle of the chart
      yAxis: {
        title: {
          text: 'Number of Employees'
        }, // the title of the Y Axis
      },
      xAxis: {
        min: 0.9,
        categories: [2010,2011, 2012, 2013, 2014,2015,2016,2017],
         
      },
      tooltip: {
        headerFormat: '<span style="font-size:13px;font-weight:bold;">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      }, // tooltip appears when hovering over a point
      credits: {
        enabled: false
      },
      series: dataSource // set of the data
    });

    if (dataSource.length > 0) {
      chart.hideLoading();
    }
    else {
      chart.showLoading();
    }
  }, [dataSource]);

  useEffect(() => {
    setTimeout(() => {
      setDataSource([{
        name: 'Installation',
        data: [43934,52503, 57177, 97031, 111931, 137133, 154173]
      }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 28851, 34490, 30282, 38121, 40434]
      }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387 ]
      },
      {
        name: 'Project Development',
        data: [12908, 5498, 12169, 15112, 122452, 34400, 34227]
      },
      {
        name: 'Other',
        data: [12908, 5498, 8105, 8989, 11816, 18274, 18111]
      }
    ]);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>LINE CHART</h1>
      <div ref={refContainer} />

    </div>
  )
}

