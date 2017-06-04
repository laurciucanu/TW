	  google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['<10 decedaţi', 19],
          ['între 10 şi 100 decedaţi', 6],
          ['între 100 şi 1000 decedaţi', 6],
          ['peste 1000 decedaţi', 3]                                           
        ]);

        var options = {
          title: 'DECEDAȚI ÎN NEPAL',
          is3D: true,
          colors:['green','#E8CF00','orange','red'],
          backgroundColor: '#F8F8F8',
          titleTextStyle: {
                  fontSize: 22, 
                  bold: true,     
            }

        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }
