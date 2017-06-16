
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
          title: 'NUMĂR REPLICI',

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

        var chart = new google.visualization.PieChart(document.getElementById('replici'));
        chart.draw(data, options);
      }