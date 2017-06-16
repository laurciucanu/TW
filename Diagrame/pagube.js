      
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['<25000 pagube materiale', 3],
          ['intre 100 000 si 250 000 pagube materiale', 15],
          ['peste 250 000', 7],
          ]);

        var options = {
          title: 'PAGUBE MATERIALE',
          
          pieSliceText: 'label',
          backgroundColor: '#ECECEA',
          slices: {  4: {offset: 0.2},
                    12: {offset: 0.3},
                    14: {offset: 0.4},
                    15: {offset: 0.5},
          },
          colors:['green', 'orange', 'red'],
          titleTextStyle: {
                  fontSize: 18, 
                  bold: true,     
            },
          width: '2000',
          height:'500',
          chartArea:{left:400,top:40},
        };

        var chart = new google.visualization.PieChart(document.getElementById('pagube'));
        chart.draw(data, options);
      }
