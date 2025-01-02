export const riskProfile = [
  {
    crop: "Soybean",
    risks: [
      {
        category: "Max Temperature",
        issues: [
          {
            description: "Extreme heat affects pod filling",
            threshold: "Maximum temperature above 35°C for 5 consecutive days",
            recommendation: "Flowering",
          },
          {
            description: "Insufficient heat during early growth",
            threshold: "Maximum temperature below 20°C for 10 consecutive days",
            recommendation: "Growth",
          },
        ],
      },
      {
        category: "Min Temperature",
        issues: [
          {
            description: "Frost damage during flowering",
            threshold: "Minimum temperature below 0°C for 2 consecutive days",
            recommendation: "Flowering",
          },
          {
            description: "Insufficient heat units for maturity",
            threshold: "Temperature below 15°C for 7 consecutive days",
            recommendation: "Harvest",
          },
        ],
      },
      {
        category: "Precipitation",
        issues: [
          {
            description: "Excessive rainfall causing waterlogging",
            threshold: "Rainfall more than 100mm in 48 hours",
            recommendation: "Harvest",
          },
          {
            description: "Insufficient rainfall during pod setting",
            threshold: "Rainfall less than 25mm over 14 days",
            recommendation: "Growth",
          },
        ],
      },
    ],
  },
  {
    crop: "Rice",
    risks: [
      {
        category: "Max Temperature",
        issues: [
          {
            description: "Extreme heat affects grain filling",
            threshold: "Maximum temperature above 35°C for 3 consecutive days",
            recommendation: "Planting",
          },
          {
            description: "Insufficient heat during vegetative stage",
            threshold: "Maximum temperature below 20°C for 7 consecutive days",
            recommendation: "Planting",
          },
        ],
      },
      {
        category: "Min Temperature",
        issues: [
          {
            description: "Frost damage during early stages",
            threshold: "Minimum temperature below 0°C for 1 day",
            recommendation: "Growth",
          },
          {
            description: "Insufficient heat units for tillering",
            threshold: "Temperature below 15°C for 5 consecutive days",
            recommendation: "Growth",
          },
        ],
      },
      {
        category: "Precipitation",
        issues: [
          {
            description: "Excessive rainfall causing waterlogging",
            threshold: "Rainfall more than 150mm in 48 hours",
            recommendation: "Harvest",
          },
          {
            description: "Insufficient rainfall during panicle initiation",
            threshold: "Rainfall less than 50mm in 10 days",
            recommendation: "Growth",
          },
        ],
      },
    ],
  },
  {
    crop: "Wheat",
    risks: [
      {
        category: "Max Temperature",
        issues: [
          {
            description: "Extreme heat affects grain filling",
            threshold: "Maximum temperature above 32°C for 5 consecutive days",
            recommendation: "Planting",
          },
          {
            description: "Insufficient heat during early growth",
            threshold: "Maximum temperature below 15°C for 7 consecutive days",
            recommendation: "Growth",
          },
        ],
      },
      {
        category: "Min Temperature",
        issues: [
          {
            description: "Frost damage during flowering",
            threshold: "Minimum temperature below -2°C for 1 day",
            recommendation: "Flowering",
          },
          {
            description: "Insufficient warmth for tillering",
            threshold: "Temperature below 5°C for 5 consecutive days",
            recommendation: "Growth",
          },
        ],
      },
      {
        category: "Precipitation",
        issues: [
          {
            description: "Excessive rainfall leading to root diseases",
            threshold: "Rainfall more than 100mm in 3 consecutive days",
            recommendation: "Harvest",
          },
          {
            description: "Insufficient rainfall during grain filling",
            threshold: "Rainfall less than 30mm over 14 days",
            recommendation: "Growth",
          },
        ],
      },
    ],
  },
  {
    crop: "Corn",
    risks: [
      {
        category: "Max Temperature",
        issues: [
          {
            description: "Extreme heat affects pollination",
            threshold: "Maximum temperature above 35°C for 3 consecutive days",
            recommendation: "Flowering",
          },
          {
            description: "Insufficient heat during germination",
            threshold: "Maximum temperature below 18°C for 5 consecutive days",
            recommendation: "Planting",
          },
        ],
      },
      {
        category: "Min Temperature",
        issues: [
          {
            description: "Frost damage during early growth",
            threshold: "Minimum temperature below 0°C for 1 day",
            recommendation: "Growth",
          },
          {
            description: "Insufficient warmth for pollination",
            threshold: "Temperature below 10°C for 7 consecutive days",
            recommendation: "Flowering",
          },
        ],
      },
      {
        category: "Precipitation",
        issues: [
          {
            description: "Excessive rainfall leading to waterlogging",
            threshold: "Rainfall more than 120mm in 48 hours",
            recommendation: "Harvest",
          },
          {
            description: "Insufficient rainfall during grain filling",
            threshold: "Rainfall less than 40mm over 14 days",
            recommendation: "Growth",
          },
        ],
      },
    ],
  },
];
