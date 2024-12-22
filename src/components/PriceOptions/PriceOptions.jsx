import PriceOption from "./../PriceOption/PriceOption";
const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Open gym hours only",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 49.99,
      features: [
        "Access to gym equipment",
        "Group fitness classes",
        "Locker room access",
        "Guest pass (1/month)",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 79.99,
      features: [
        "24/7 gym access",
        "Unlimited group fitness classes",
        "Personal training session (2/month)",
        "Access to sauna & spa",
        "Priority support",
      ],
    },
    {
      id: 4,
      name: "Elite Membership",
      price: 129.99,
      features: [
        "24/7 gym access",
        "Unlimited personal training sessions",
        "Private locker and towel service",
        "Nutrition consultation",
        "Access to exclusive gym events",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best prices in the home town</h2>
      <div className="gap-6 md:grid grid-cols-3">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
