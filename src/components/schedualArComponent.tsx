import React, { useState } from "react";
import StudentNameArComponent from "./studentNameArComponent";

interface ISchedual {
  day: string;
  time: string;
  description: string;
  instructor: string;
}

const studentWeeklySchedual: ISchedual[] = [
  {
    day: "Sunday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Sunday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Sunday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Sunday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Sunday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Monday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Monday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Monday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Monday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Tuesday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Tuesday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Tuesday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Tuesday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Wednesday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Wednesday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Wednesday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Wednesday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Wednesday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Thursday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
  {
    day: "Thursday",
    time: "9:00 - 8:00",
    description: "الرياضيات المتقدمة لحل المعادلات",
    instructor: "أ. خالد عبدالله",
  },
];
const SchedualArComponent = () => {
  const [data, setData] = useState(studentWeeklySchedual);

  return (
    <div className="flex flex-col">
      <StudentNameArComponent />
      <div className="flex flex-row justify-center items-start gap-[8px]">
        {/* Sunday */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center w-[105.4px] h-[27px] rounded-[4px] bg-[#e6f7fd] text-[#0369A1] font-cairo">
            {" "}
            الأحد{" "}
          </div>
          {data.map((info) => {
            if (info.day === "Sunday") {
              return (
                <div className="flex flex-col  justify-evenly h-[60px] w-[105.4px] bg-[#f9f9f9] rounded-[8px] px-[4px] py-[2px] font-cairo">
                  <div className="text-[6px] text-[#6B7280]">{info.time}</div>
                  <div className="text-[8px] text-[#0369A1]">
                    {info.description}
                  </div>
                  <div className="text-[6px] text-[#B45309]">
                    {info.instructor}
                  </div>
                </div>
              );
            } else {
              return <></>;
            }
          })}
        </div>

        {/* Monday */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center w-[105.4px] h-[27px] rounded-[4px] bg-[#e6f7fd] text-[#0369A1] font-cairo">
            {" "}
            الاثنين{" "}
          </div>
          {data.map((info) => {
            if (info.day === "Monday") {
              return (
                <div className="flex flex-col  justify-evenly h-[60px] w-[105.4px] bg-[#f9f9f9] rounded-[8px] px-[4px] py-[2px] font-cairo">
                  <div className="text-[6px] text-[#6B7280]">{info.time}</div>
                  <div className="text-[8px] text-[#0369A1]">
                    {info.description}
                  </div>
                  <div className="text-[6px] text-[#B45309]">
                    {info.instructor}
                  </div>
                </div>
              );
            } else {
              return <></>;
            }
          })}
        </div>

        {/* Tuesday */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center w-[105.4px] h-[27px] rounded-[4px] bg-[#e6f7fd] text-[#0369A1] font-cairo">
            {" "}
            الثلاثاء{" "}
          </div>
          {data.map((info) => {
            if (info.day === "Tuesday") {
              return (
                <div className="flex flex-col  justify-evenly h-[60px] w-[105.4px] bg-[#f9f9f9] rounded-[8px] px-[4px] py-[2px] font-cairo">
                  <div className="text-[6px] text-[#6B7280]">{info.time}</div>
                  <div className="text-[8px] text-[#0369A1]">
                    {info.description}
                  </div>
                  <div className="text-[6px] text-[#B45309]">
                    {info.instructor}
                  </div>
                </div>
              );
            } else {
              return <></>;
            }
          })}
        </div>

        {/* Wednesday */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center w-[105.4px] h-[27px] rounded-[4px] bg-[#e6f7fd] text-[#0369A1] font-cairo">
            {" "}
            الأربعاء{" "}
          </div>
          {data.map((info) => {
            if (info.day === "Wednesday") {
              return (
                <div className="flex flex-col  justify-evenly h-[60px] w-[105.4px] bg-[#f9f9f9] rounded-[8px] px-[4px] py-[2px] font-cairo">
                  <div className="text-[6px] text-[#6B7280]">{info.time}</div>
                  <div className="text-[8px] text-[#0369A1]">
                    {info.description}
                  </div>
                  <div className="text-[6px] text-[#B45309]">
                    {info.instructor}
                  </div>
                </div>
              );
            } else {
              return <></>;
            }
          })}
        </div>

        {/* Thursday */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center w-[105.4px] h-[27px] rounded-[4px] bg-[#e6f7fd] text-[#0369A1] font-cairo">
            {" "}
            الخميس{" "}
          </div>
          {data.map((info) => {
            if (info.day === "Thursday") {
              return (
                <div className="flex flex-col  justify-evenly h-[60px] w-[105.4px] bg-[#f9f9f9] rounded-[8px] px-[4px] py-[2px] font-cairo">
                  <div className="text-[6px] text-[#6B7280]">{info.time}</div>
                  <div className="text-[8px] text-[#0369A1]">
                    {info.description}
                  </div>
                  <div className="text-[6px] text-[#B45309]">
                    {info.instructor}
                  </div>
                </div>
              );
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default SchedualArComponent;
