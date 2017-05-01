
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['<5 secunde', 18],
          ['între 5 şi 10 secunde', 16],                                         
        ]);

        var options = {
          title: 'Durata cutremurelor din Nepal',
          is3D: true,
          colors:['green','orange'],
          backgroundColor: '#ffffb3',
          titleTextStyle: {
                  fontSize: 18, 
                  bold: true,     
            }
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d2'));
        chart.draw(data, options);
      }
