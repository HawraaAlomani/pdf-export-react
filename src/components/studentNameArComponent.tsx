import React from 'react'

const StudentNameArComponent = () => {
  return (
    <div className="flex flex-row gap-[4px] items-center pr-[18px] py-[10px]">
      <div className="flex items-center justify-center h-[28px] w-[28px] bg-[#e6f7fd] rounded-full">
        <img
          className="h-[14px] w-[14px]"
          src="/assets/icons/personIcon.png"
        ></img>
      </div>
      <p className="text-[#0369A1] text-[14px] font-cairo"> محمد عبدالله </p>
    </div>
  );
}

export default StudentNameArComponent;