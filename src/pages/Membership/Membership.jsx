import MembershipCard from "../../components/membership/MembershipCard";
import { membershipPlans } from "../../data/membershipPlans";

const Membership = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      <section
        className="
        bg-gradient-to-r
        from-blue-700
        to-indigo-700
        text-white
        py-24
        "
      >
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold">
            BCE Alumni Membership
          </h1>

          <p className="mt-6 text-xl">
            Join thousands of BCE alumni and
            strengthen our community for life.
          </p>

        </div>
      </section>

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-8">

            {membershipPlans.map((plan) => (
              <MembershipCard
                key={plan.id}
                plan={plan}
              />
            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Membership;