
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
          title: 'ADÂNCIME',
          pieHole: 0.4,
          colors:['green', '#E8CF00', 'orange'],
          backgroundColor: '#ECECEA',
          titleTextStyle: {
                  fontSize: 18, 
                  bold: true,     
            },
            width: '2000',
          height:'500',
          chartArea:{left:400,top:40},
        };

        var chart = new google.visualization.PieChart(document.getElementById('adancime'));
        chart.draw(data, options);
      }
