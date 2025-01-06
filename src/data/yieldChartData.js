const mockChartData = {
  Wheat: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Harga Padi (IDR)",
        data: [
          520000, 525000, 530000, 510000, 520000, 540000, 530000, 550000,
          540000, 560000, 550000, 570000,
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.1,
        elements: {
          point: {
            radius: 0,
          },
        },
        segment: {
          borderColor: (context) => {
            const index = context.p0DataIndex;
            const label = context.chart.data.labels[index];

            const today = new Date();
            const monthNames = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ];
            const todayDate = monthNames[today.getMonth()];

            if (
              label === todayDate ||
              index > context.chart.data.labels.indexOf(todayDate)
            ) {
              return "blue";
            }
            return "green";
          },
        },
      },
    ],
  },
  Soybean: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Harga Kedelai (IDR)",
        data: [
          850000, 860000, 850000, 870000, 880000, 875000, 890000, 880000,
          890000, 910000, 900000, 895000,
        ],
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        fill: true,
        tension: 0.1,
        elements: {
          point: {
            radius: 0,
          },
        },
        segment: {
          borderColor: (context) => {
            const index = context.p0DataIndex;
            const label = context.chart.data.labels[index];

            const today = new Date();
            const monthNames = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ];
            const todayDate = monthNames[today.getMonth()];

            if (
              label === todayDate ||
              index > context.chart.data.labels.indexOf(todayDate)
            ) {
              return "blue";
            }
            return "green";
          },
        },
      },
    ],
  },
  Corn: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Harga Jagung (IDR)",
        data: [
          460000, 470000, 480000, 490000, 500000, 520000, 530000, 540000,
          520000, 510000, 495000, 480000,
        ],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.1,
        elements: {
          point: {
            radius: 0,
          },
        },
        segment: {
          borderColor: (context) => {
            const index = context.p0DataIndex;
            const label = context.chart.data.labels[index];

            const today = new Date();
            const monthNames = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ];
            const todayDate = monthNames[today.getMonth()];

            if (
              label === todayDate ||
              index > context.chart.data.labels.indexOf(todayDate)
            ) {
              return "blue";
            }
            return "green";
          },
        },
      },
    ],
  },
  Rice: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Harga Beras (IDR)",
        data: [
          1180000, 1190000, 1185000, 1200000, 1220000, 1240000, 1255000,
          1260000, 1235000, 1220000, 1205000, 1190000,
        ],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
        tension: 0.1,
        elements: {
          point: {
            radius: 0,
          },
        },
        segment: {
          borderColor: (context) => {
            const index = context.p0DataIndex;
            const label = context.chart.data.labels[index];

            const today = new Date();
            const monthNames = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ];
            const todayDate = monthNames[today.getMonth()];

            if (
              label === todayDate ||
              index > context.chart.data.labels.indexOf(todayDate)
            ) {
              return "blue";
            }
            return "green";
          },
        },
      },
    ],
  },
};

export const cropPrices = {
  Wheat: [
    520000, 530000, 540000, 510000, 520000, 540000, 530000, 550000, 540000,
    560000, 550000, 570000,
  ],
  Soybean: [
    850000, 860000, 850000, 870000, 880000, 875000, 890000, 880000, 890000,
    910000, 900000, 895000,
  ],
  Corn: [
    460000, 470000, 480000, 490000, 500000, 520000, 530000, 540000, 520000,
    510000, 495000, 480000,
  ],
  Rice: [
    1180000, 1190000, 1185000, 1200000, 1220000, 1240000, 1255000, 1260000,
    1235000, 1220000, 1205000, 1190000,
  ],
};

export default mockChartData;
