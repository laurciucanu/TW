
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['0 replici secunde', 6],
          ['între 0 şi 5 replici', 21], 
          ['peste 5 replici', 7],                                        
        ]);

        var options = {
          title: 'Numărul de replici al cutremurelor',
          is3D: true,
          colors:['green','#E8CF00','red'],
          backgroundColor: '#ffffb3',
            titleTextStyle: {
                  fontSize: 18, 
                  bold: true,     
            }
          
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d3'));
        chart.draw(data, options);
      }