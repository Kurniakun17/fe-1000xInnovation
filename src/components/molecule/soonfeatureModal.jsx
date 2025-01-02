// eslint-disable-next-line react/prop-types
export default function SoonFeatureModal({ setVisible, soonFeature }) {
  let title = "";
  let description = "";

  if (soonFeature === "realtime") {
    title = "Real-time Water & Soil";
  } else if (soonFeature === "manual") {
    title = "Manual Adjustment";
  } else if (soonFeature == "water") {
    title = "Community-Driven Features for Water Sharing and Efficiency";
  }

  if (soonFeature === "realtime") {
    description = (
      <div className="text-justify">
        <p>
          The Real-time Water & Soil feature allows farmers to monitor water and
          soil conditions instantly with up-to-date data. This feature provides:
        </p>
        <ul className="list-disc list-outside ml-4">
          <li>
            Water Availability Monitoring: Real-time updates on irrigation water
            levels, ensuring adequate supply for crops.
          </li>
          <li>
            Soil Moisture Tracking: Measures soil moisture levels continuously,
            allowing farmers to adjust irrigation schedules based on the crops
            needs.
          </li>
          <li>
            Drought Alerts: Notifications are sent when water levels drop
            significantly or drought conditions are detected, enabling timely
            interventions.
          </li>
          <li>
            Irrigation Recommendations: Using data from water availability and
            soil moisture, the system offers daily water usage recommendations
            to optimize irrigation efficiency.
          </li>
        </ul>
        <p>
          This feature helps farmers make data-driven decisions, conserve water,
          and maintain healthy soil conditions to improve crop yield and
          sustainability.
        </p>
      </div>
    );
  } else if (soonFeature === "manual") {
    description = (
      <div className="text-justify">
        <p>
          The Manual Adjustment feature allows farmers to customize various
          irrigation and land management parameters with flexibility, similar to
          Notion&apos;s modular concept. This feature provides full control for
          farmers to:
        </p>
        <ul className="list-disc list-outside ml-4">
          <li>
            Custom Settings: Farmers can manually adjust irrigation settings
            such as daily water volume, irrigation duration, and water
            allocation per land zone, based on specific crop needs or weather
            conditions.
          </li>
          <li>
            Drag-and-Drop Interface: With an intuitive drag-and-drop interface,
            farmers can add, remove, or modify irrigation modules, allowing easy
            customization according to field dynamics.
          </li>
          <li>
            Real-time Feedback: Every change made is synced with real-time data,
            providing immediate feedback on the impact of adjustments, such as
            changes in water availability or soil moisture conditions.
          </li>
          <li>
            Template Adjustment: The system also offers customizable scheduling
            templates, enabling farmers to tailor irrigation plans without
            starting from scratch.
          </li>
        </ul>
        <p>
          This feature provides high flexibility, allowing farmers to fine-tune
          their irrigation system based on their preferences, enhancing control
          and resource efficiency.
        </p>
      </div>
    );
  } else if (soonFeature == "water") {
    description = (
      <div className="text-justify">
        <p className="text-justify">
          Encouraging neighboring farmers to collaborate in regions facing water
          scarcity. Farmers can trade water credits or share resources,
          fostering a cooperative network where water is treated as a shared
          commodity. This system allows farmers with excess water to offer it to
          others in need, balancing the supply and ensuring that no farm is left
          behind during droughts or critical periods.
        </p>
        <br />
        <p className="text-justify">
          The feature brings a social dimension to water management, which is
          rarely seen in agricultural technology. It shifts the focus from
          isolated, farm-level strategies to a collective approach, empowering
          local communities to make the most of their water resources. Through
          this collaboration, farmers can not only sustain their own crops but
          also contribute to regional resilience in the face of climate
          variability.
        </p>
        <br />
        <p className="text-justify">
          Elnia also gamifies this process, making water conservation efforts
          engaging. Farmers receive incentives for efficient usage and
          contributions to the community, such as badges or rewards for saving
          water or helping neighbors. This adds an element of fun while
          reinforcing sustainable practices, encouraging farmers to use water
          wisely. By combining social cooperation with technology, Elnia helps
          solve the collective challenges of resource scarcity, improving both
          farm productivity and sustainability.
        </p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-white">
      <div className="bg-background shadow-lg max-w-3xl w-full z-60 rounded-2xl">
        <div className="flex justify-between bg-stone-800 px-6 py-3 rounded-t-2xl">
          <h2 className="text-md font-semibold">Soon Feature</h2>
          <button
            className="text-white rounded font-bold"
            onClick={() => setVisible(false)}
          >
            X
          </button>
        </div>
        <div className="px-6 py-2">
          <p className="text-white mt-2">{title}</p>
          <p className="text-xs text-gray-300 mt-2 mb-4">{description}</p>
          <div className="flex justify-end"></div>
        </div>
      </div>
    </div>
  );
}
