export const ensoInsightData = {
  navigation: [
    {
      id: 1,
      title: "Alert Insight",
      active: true,
      messages: [
        {
          id: 1,
          type: "alert_distribution",
          data: {
            criticalAlerts: 72,
            regularAlerts: 28,
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget magna at elit tempor porta id a tellus. In hac habitasse platea dictumst. Maecenas blandit maximus nunc, ac accumsan ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget magna at elit tempor porta id a tellus. In hac habitasse platea dictumst. Maecenas blandit maximus nunc, ac accumsan ex.",
          },
        },
        {
          id: 3,
          type: "location_breakdown",
          data: {
            title: "Critical alert breakdown by location",
            locations: [
              {
                location: "AAA",
                alerts: 2,
                extremeAlerts: 1,
              },
              {
                location: "BBB",
                alerts: 5,
                extremeAlerts: 2,
              },
              {
                location: "CCC",
                alerts: 7,
                extremeAlerts: 3,
              },
              {
                location: "DDD",
                alerts: 1,
                extremeAlerts: 1,
              },
              {
                location: "EEE",
                alerts: 10,
                extremeAlerts: 2,
              },
              {
                location: "FFF",
                alerts: 0,
                extremeAlerts: 0,
              },
              {
                location: "GGG",
                alerts: 4,
                extremeAlerts: 2,
              },
              {
                location: "HHH",
                alerts: 3,
                extremeAlerts: 0,
              },
            ],
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget magna at elit tempor porta id a tellus. In hac habitasse platea dictumst. Maecenas blandit maximus nunc, ac accumsan ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget magna at elit tempor porta id a tellus. In hac habitasse platea dictumst. Maecenas blandit maximus nunc, ac accumsan ex.",
          },
        },
        {
          id: 5,
          type: "water_resources",
          data: {
            resources: [
              {
                name: "Groundwater",
                amount: 85,
              },
              {
                name: "Rainwater",
                amount: 15,
              },
              {
                name: "Reservoir",
                amount: 70,
              },
              {
                name: "Total Storage Irrigation",
                amount: 5000,
              },
              {
                name: "Water Needs (Land)",
                amount: 4000,
              },
            ],
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget magna at elit tempor porta id a tellus. In hac habitasse platea dictumst. Maecenas blandit maximus nunc, ac accumsan ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget magna at elit tempor porta id a tellus. In hac habitasse platea dictumst. Maecenas blandit maximus nunc, ac accumsan ex.",
          },
        },
      ],
    },
    {
      id: 2,
      title: "El Nino or La Niña",
      active: false,
      messages: [],
    },
    {
      id: 3,
      title: "Water Supply Insight",
      active: false,
      messages: [],
    },
    {
      id: 4,
      title: "Climate Forecasting",
      active: false,
      messages: [],
    },
  ],
};

export const ccFusionInsightData = {
  navigation: [
    {
      id: 1,
      title: "Commodity Prices",
      active: true,
      messages: [
        {
          id: 1,
          type: "commodity_prediction_table",
          data: {
            predictions: {
              month: {
                price: 16216.39,
                percentage: -5.27,
              },
              quarter: {
                price: 15362.71,
                percentage: 4.36,
              },
              year: {
                price: 16030.88,
                percentage: -1.14,
              },
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget magna at elit tempor porta id a tellus. In hac habitasse platea dictumst. Maecenas blandit maximus nunc, ac accumsan ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget magna at elit tempor porta id a tellus. In hac habitasse platea dictumst. Maecenas blandit maximus nunc, ac accumsan ex.",
          },
        },
      ],
    },
    {
      id: 2,
      title: "Potential Crops",
      active: true,
      messages: [],
    },
    {
      id: 3,
      title: "Yield Prediction",
      active: true,
      messages: [],
    },
    {
      id: 4,
      title: "Financial Projection",
      active: true,
      messages: [],
    },
  ],
};
