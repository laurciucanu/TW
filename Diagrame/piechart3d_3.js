
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['0 replici', 6],
          ['între 0 şi 5 replici', 21], 
          ['peste 5 replici', 7],                                        
        ]);

        var options = {
          title: 'REPLICILE CUTREMURELOR',
          is3D: true,
          colors:['green','#E8CF00','red'],
          backgroundColor: '#F8F8F8',
            titleTextStyle: {
                  fontSize: 22, 
                  bold: true,     
            }
          
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d3'));
        chart.draw(data, options);
      }