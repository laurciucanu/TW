google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['<5 grade pe scara Richter', 18],
  ['peste 5 grade pe scara Richter', 16],
  ]);

  var options = {
  title: 'Magnitudinea cutremurelor din Nepal',
  pieHole: 0.4,
  backgroundColor: '#ffffb3',
  titleTextStyle: {
    fontSize: 18, 
    bold: true,     
  }
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart2'));
  chart.draw(data, options);
  }
