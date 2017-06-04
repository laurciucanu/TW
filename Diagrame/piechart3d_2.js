
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['<1000 clădiri distruse', 15],
          ['între 1000 şi 10000 clădiri distruse', 7],
          ['peste 10000 clădiri distruse', 12]
          ]);

        var options = {
          title: 'CLĂDIRI DISTRUSE',
          is3D: true,
          colors:['green','#E8CF00','red'],
          backgroundColor: '#F8F8F8',
          titleTextStyle: {
                  fontSize: 22, 
                  bold: true,     
            }
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d2'));
        chart.draw(data, options);
      }
