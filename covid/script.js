const data = fetch(
  "https://api.covid19api.com/country/poland/status/confirmed?from=2020-10-01T00:00:00Z&to=2020-10-08T00:00:00Z"
)
  .then((respone) => respone.json())
  .then((data) => data.map((e) => ({ cases: e.Cases, date: e.Date })))
  .then((data) => {
    const apiData = [];
    for (let i = 1; i < data.length; i++) {
      const currElem = data[i].cases;
      const prevElem = data[i - 1].cases;
      const cases = currElem - prevElem;
      const date = data[i].date.slice(0, 10);
      apiData.push({ cases, date });
    }
    console.log(apiData);
    return apiData;
  })
  .then((data) => {
    let ctx = document.getElementById("myChart").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          data[0].date,
          data[1].date,
          data[3].date,
          data[4].date,
          data[5].date,
          data[6].date,
        ],
        datasets: [
          {
            label: "All Poland Covid-19 cases",
            data: [
              data[0].cases,
              data[1].cases,
              data[3].cases,
              data[4].cases,
              data[5].cases,
              data[6].cases,
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  });

// const data2 = fetch(
//   "https://api.covid19api.com/country/poland/status/confirmed?from=2020-10-01T00:00:00Z&to=2020-10-08T00:00:00Z"
// )
//   .then((respone) => respone.json())
//   .then((data) =>
//     data.map((el) => {
//       const date = el.Date.slice(0, 10);
//       return { cases: el.Cases, date };
//     })
//   )
//   .then((data) => {
//     for (var i = 1; i < data.length; i++) {
//       var currentElement = data[i];
//       var previousElement = data[i - 1];
//       newDiv = document.createElement("div");
//       newDiv.innerHTML = `<p>Przypadki: ${currentElement - previousElement}
//         </p>`;
//       myDiv = document.getElementById("stats");
//       document.body.insertBefore(newDiv, myDiv);
//     }
//   });
