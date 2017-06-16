
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['<10 dispăruţi', 3],
          ['între 10 şi 100 dispăruţi', 18],
          ['între 100 şi 1000 dispăruţi', 13],
          ]);

        var options = {
          title: 'DISPĂRUȚI',
          pieHole: 0.4,
          backgroundColor: '#ECECEA',
          titleTextStyle: {
                  fontSize: 18, 
                  bold: true,     
            },
          width: '2000',
          height:'500',
          chartArea:{left:400,top:40},
        };

        var chart = new google.visualization.PieChart(document.getElementById('disparuti'));
        chart.draw(data, options);
      }
