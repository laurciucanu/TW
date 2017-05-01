
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Raniti', 'Numar raniti'],
          ['<10 raniţi', 3],
          ['între 10 şi 100 raniţi', 18],
          ['între 100 şi 1000 raniţi', 11],
          ['peste 1000 raniţi', 1]
          ]);

        var options = {
          title: 'Câţi oameni au fost raniţi în cutremurul din Nepal?',
          legend: 'none',
          pieSliceText: 'label',
          backgroundColor: '#ffffb3',
          slices: {  4: {offset: 0.2},
                    12: {offset: 0.3},
                    14: {offset: 0.4},
                    15: {offset: 0.5},
          },
          titleTextStyle: {
                  fontSize: 18, 
                  bold: true,     
            }
          
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }
 