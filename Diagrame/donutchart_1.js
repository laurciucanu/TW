
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
          title: 'Câţi oameni au dispărut în cutremurul din Nepal?',
          pieHole: 0.4,
          backgroundColor: '#ffffb3',
          titleTextStyle: {
                  fontSize: 18, 
                  bold: true,     
            }
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
