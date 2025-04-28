new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Unintentional injuries", "Alzheimer's disease", "Stroke", "Diabetes", "Heart disease", "Cancer"],
      datasets: [
        {
          label: "Leading causes of death in the USA",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#ccff66"],
          data: [169936,121404,146383,83564,647457,599108]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Leading causes of death in the USA by Roma Yermakova'
      }
    }
});


new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Unintentional injuries", "Alzheimer's disease", "Stroke", "Diabetes", "Heart disease", "Cancer", "Suicide"],
      datasets: [
        {
          label: "Leading causes of death in the USA",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#ccff66", "#ffce56"],
          data: [169936,121404,146383,83564,647457,599108,47173]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Leading causes of death in the USA by Roma Yermakova'
      }
    }
});
