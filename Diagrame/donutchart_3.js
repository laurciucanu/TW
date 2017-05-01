
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['<1000 m adâncime', 6],
          ['între 1000 şi 5000 m adâncime', 23],
          ['peste 5000 m adâncime', 5],
          ]);

        var options = {
          title: 'Magnitudinea cutremurelor din Nepal',
          pieHole: 0.4,
          colors:['green', '#E8CF00', 'orange'],
          backgroundColor: '#ffffb3',
          titleTextStyle: {
                  fontSize: 18, 
                  bold: true,     
            }
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart3'));
        chart.draw(data, options);
      }
