import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Trophy, AlarmClock, Smile } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      value: "528",
      label: "Projects Completed",
      icon: <CheckCircle2 className="text-primary" size={40} strokeWidth={1.5} />,
      position: "left",
    },
    {
      id: 2,
      value: "15",
      label: "National Awards",
      icon: <Trophy className="text-primary" size={40} strokeWidth={1.5} />,
      position: "left",
    },
    {
      id: 3,
      value: "2,400",
      label: "Workers Employed",
      icon: <AlarmClock className="text-primary" size={40} strokeWidth={1.5} />,
      position: "right",
    },
    {
      id: 4,
      value: "350",
      label: "Happy Clients",
      icon: <Smile className="text-primary" size={40} strokeWidth={1.5} />,
      position: "right",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1660px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 inline-block relative">
            Leading Construction in Bangladesh
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary"></div>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto outfit">
            Trusted by hundreds of clients across Dhaka, Chittagong, Sylhet & beyond for 28+ years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-2">
          
          {/* Left Column Stats */}
          <div className="space-y-20 text-center md:text-right order-2 md:order-1">
            {stats.filter(s => s.position === "left").map((stat) => (
              <div key={stat.id} className="flex flex-col items-center md:items-end group">
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-5xl font-black text-gray-900 tracking-tighter mb-1">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-bold text-sm uppercase tracking-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="col-span-3 relative h-[450px] w-full order-1 md:order-2">
            <Image
              src="https://www.themesindustry.com/html/buildingx/images/fun-facts.png"
              alt="Architectural Blueprint House"
              fill
              className="object-contain w-full h-full"
              unoptimized // Used since we are linking directly to an external asset
            />
          </div>

          {/* Right Column Stats */}
          <div className="space-y-20 text-center md:text-left order-3">
            {stats.filter(s => s.position === "right").map((stat) => (
              <div key={stat.id} className="flex flex-col items-center md:items-start group">
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-5xl font-black text-gray-900 tracking-tighter mb-1">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-bold text-sm uppercase tracking-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;