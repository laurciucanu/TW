
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
          title: 'RĂNIȚI',
          pieSliceText: 'label',
          backgroundColor: '#ECECEA',
          slices: {  4: {offset: 0.2},
                    12: {offset: 0.3},
                    14: {offset: 0.4},
                    15: {offset: 0.5},
          },
          titleTextStyle: {
                  fontSize: 18, 
                  bold: true,
                  left:100,     
            },
          width: '2000',
          height:'500',
          chartArea:{left:400,top:40},
        };

        var chart = new google.visualization.PieChart(document.getElementById('raniti'));
        chart.draw(data, options);
      }
 