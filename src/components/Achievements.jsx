import React, { useEffect, useState } from "react";

const Achievements = () => {
  const achievements = [
    {
      img: "https://res.cloudinary.com/alphaimages/image/upload/v1719861175/Experience_kuf04w.svg",
      label: "Years of Experience",
      value: 6,
    },
    {
      img: "https://res.cloudinary.com/alphaimages/image/upload/v1719862016/4187094_16528_xcmkpj.svg",
      label: "Happy Trekkers",
      value: 5000,
    },
    {
      img: "https://res.cloudinary.com/alphaimages/image/upload/v1719861175/SuccessfullTreks_y59kgf.svg",
      label: "Successfully Treks",
      value: 100,
    },
  ];

  const [counters, setCounters] = useState(achievements.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("achievements");
      if (element) {
        const top = element.getBoundingClientRect().top;
        const bottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        // Trigger when the component is within the viewport
        if (top < windowHeight && bottom > 0) {
          const interval = setInterval(() => {
            setCounters((prevCounters) =>
              prevCounters.map((counter, index) =>
                counter < achievements[index].value
                  ? counter + 2
                  : achievements[index].value
              )
            );
          }, 2); // Adjust the interval speed as needed

          // Clear interval when component is out of view
          return () => clearInterval(interval);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [achievements]);

  return (
    <div id="achievements" className="bg-white py-4 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full text-center">
        <h1 className="text-5xl font-bold mb-10 text-slate-700">
          Alpha Adventures By the Numbers
        </h1>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 text-center lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <div key={index} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <div className="flex justify-center items-center">
                <img className="h h-60 w-60 " src={achievement.img} alt="" />
              </div>
              <div>
                <dt className="text-2xl leading-7 text-gray-600">
                  {achievement.label}
                </dt>
              </div>
              <div>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {counters[index]}+
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Achievements;
