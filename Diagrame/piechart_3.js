      
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['<10000 pagube materiale', 10],
          ['peste 100000 pagube materiale', 24]
          ]);

        var options = {
          title: 'Numărul de pagube materiale ca urmare a cutremurul din Nepal',
          legend: 'none',
          pieSliceText: 'label',
          backgroundColor: '#ffffb3',
          slices: {  4: {offset: 0.2},
                    12: {offset: 0.3},
                    14: {offset: 0.4},
                    15: {offset: 0.5},
          },
          colors:['orange', 'red'],
          titleTextStyle: {
                  fontSize: 18, 
                  bold: true,     
            },
          
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));
        chart.draw(data, options);
      }
