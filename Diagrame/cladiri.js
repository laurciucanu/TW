
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
          backgroundColor: '#ECECEA',
          titleTextStyle: {
                  fontSize: 22, 
                  bold: true,     
            },
          width: '2000',
          height:'500',
          chartArea:{left:400,top:40},

        };

        var chart = new google.visualization.PieChart(document.getElementById('cladiri'));
        chart.draw(data, options);
      }
