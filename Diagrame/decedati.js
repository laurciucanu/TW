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
          title: 'DECEDAȚI',
          is3D: true,
          colors:['green','#E8CF00','orange','red'],
          backgroundColor: '#ECECEA',
          titleTextStyle: {
                  fontSize: 22, 
                  bold: true,     
            },
          width: '2000',
          height:'500',
          chartArea:{left:400,top:40},
        };

        var chart = new google.visualization.PieChart(document.getElementById('decedati'));
        chart.draw(data, options);
      }