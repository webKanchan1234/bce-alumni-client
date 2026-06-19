import { useEffect, useState } from "react";

const EventCountdown = ({ targetDate }) => {
  const calculate = () => {
    const difference =
      new Date(targetDate) - new Date();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] =
    useState(calculate());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      className="
      grid
      grid-cols-2
      sm:grid-cols-4
      gap-4
      mt-8
      "
    >
      {Object.entries(timeLeft).map(
        ([label, value]) => (
          <div
            key={label}
            className="
            bg-blue-600
            text-white
            rounded-2xl
            p-4
            text-center
            shadow-lg
            "
          >
            <h3
              className="
              text-3xl
              md:text-4xl
              font-bold
              "
            >
              {value}
            </h3>

            <p
              className="
              capitalize
              text-sm
              md:text-base
              mt-2
              "
            >
              {label}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default EventCountdown;