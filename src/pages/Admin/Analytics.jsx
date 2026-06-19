import AnalyticsCards from "../../components/admin/AnalyticsCards";

const Analytics = () => {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Analytics Dashboard
      </h1>

      <AnalyticsCards />

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        <div className="bg-white p-8 rounded-3xl shadow h-96">

          <h2 className="text-2xl font-bold">
            User Growth
          </h2>

          <div className="h-full flex items-center justify-center text-gray-400">
            Chart Coming Soon
          </div>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow h-96">

          <h2 className="text-2xl font-bold">
            Event Registrations
          </h2>

          <div className="h-full flex items-center justify-center text-gray-400">
            Chart Coming Soon
          </div>

        </div>

      </div>

    </div>
  );
};

export default Analytics;