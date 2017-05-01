
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
          title: 'Câte clădiri au fost distruse în cutremurul din Nepal?',
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
            },

        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
        chart.draw(data, options);
      }
