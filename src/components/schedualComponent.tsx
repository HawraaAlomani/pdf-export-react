import React, { useState } from "react";
import StudentNameComponent from "./studentNameComponent";

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
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Sunday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Sunday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Sunday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Sunday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Monday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Monday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Monday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Monday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Tuesday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Tuesday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Tuesday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Tuesday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Wednesday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Wednesday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Wednesday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Wednesday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Wednesday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Thursday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
  {
    day: "Thursday",
    time: "9:00 - 8:00",
    description: "Advance mathmatics",
    instructor: "prof. Khalid Abdullah",
  },
];
const SchedualComponent = () => {
  const [data, setData] = useState(studentWeeklySchedual);

  return (
    <div className="flex flex-col">
      <StudentNameComponent />
      <div className="flex flex-row justify-center items-start gap-[8px]">
        {/* Sunday */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center w-[105.4px] h-[27px] rounded-[4px] bg-[#e6f7fd] text-[#0369A1] font-bold">
            {" "}
            Sunday{" "}
          </div>
          {data.map((info) => {
            if (info.day === "Sunday") {
              return (
                <div
                  className="flex flex-col  justify-evenly h-[60px] w-[105.4px] bg-[#f9f9f9] rounded-[8px] px-[4px] py-[2px]"
                >
                  <div className="text-[6px] text-[#6B7280]">{info.time}</div>
                  <div className="text-[8px] text-[#0369A1]">{info.description}</div>
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
          <div
            className="flex justify-center items-center w-[105.4px] h-[27px] rounded-[4px] bg-[#e6f7fd] text-[#0369A1] font-bold"
          >
            {" "}
            Monday{" "}
          </div>
          {data.map((info) => {
            if (info.day === "Monday") {
              return (
                <div className="flex flex-col  justify-evenly h-[60px] w-[105.4px] bg-[#f9f9f9] rounded-[8px] px-[4px] py-[2px]">
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
          <div
            className="flex justify-center items-center w-[105.4px] h-[27px] rounded-[4px] bg-[#e6f7fd] text-[#0369A1] font-bold"
          >
            {" "}
            Tuesday{" "}
          </div>
          {data.map((info) => {
            if (info.day === "Tuesday") {
              return (
                <div className="flex flex-col  justify-evenly h-[60px] w-[105.4px] bg-[#f9f9f9] rounded-[8px] px-[4px] py-[2px]">
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
          <div
            className="flex justify-center items-center w-[105.4px] h-[27px] rounded-[4px] bg-[#e6f7fd] text-[#0369A1] font-bold"
          >
            {" "}
            Wednesday{" "}
          </div>
          {data.map((info) => {
            if (info.day === "Wednesday") {
              return (
                <div className="flex flex-col  justify-evenly h-[60px] w-[105.4px] bg-[#f9f9f9] rounded-[8px] px-[4px] py-[2px]">
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
          <div
            className="flex justify-center items-center w-[105.4px] h-[27px] rounded-[4px] bg-[#e6f7fd] text-[#0369A1] font-bold"
          >
            {" "}
            Thursday{" "}
          </div>
          {data.map((info) => {
            if (info.day === "Thursday") {
              return (
                <div
                  className="flex flex-col  justify-evenly h-[60px] w-[105.4px] bg-[#f9f9f9] rounded-[8px] px-[4px] py-[2px]"
                >
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

export default SchedualComponent;
