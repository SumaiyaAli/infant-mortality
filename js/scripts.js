//create an epty data array for our converted json
var dataArray = [];
//create headers for the data array
var headers = ['Year','Total','Boys','Girls'];
//push the headers with data array
dataArray.push(headers);
//loop through the json,converting each objct into an apropriate array
json.forEach(function(d){
  dataArray.push([d.Year.toString(),d.Total,d.Boys,d.Girls]);

});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable(dataArray);

  var options = {
    chartArea: {
      left:50,
      top:20,
      bottom:50,
      right:100,
    },
    colors: ['#888','#2c7bb6','#d7191c'],
    focusTarget: "category",
    hAxis: {
      title: 'Year'

    },
    vAxis: {
      title: 'Infant mortality rate'

    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}
