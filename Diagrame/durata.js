
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['<5 secunde', 18],
          ['între 5 şi 10 secunde', 16],                                         
        ]);

        var options = {
          title: 'DURATA',
          is3D: true,
          colors:['green','orange'],
          backgroundColor: '#ECECEA',
          titleTextStyle: {
                  fontSize: 18, 
                  bold: true,     
            },
          width: '2000',
          height:'500',
          chartArea:{left:400,top:40},
        };

        var chart = new google.visualization.PieChart(document.getElementById('durata'));
        chart.draw(data, options);
      }
