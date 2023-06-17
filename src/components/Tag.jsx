import React from 'react';

const Tag = ({ label, tagColor, textColor }) => {
  return (
    <span
      className={
        tagColor
          ? `rounded-full font-bold ${tagColor}  px-[.4rem] py-[.2rem] text-xs uppercase ${textColor}`
          : `rounded-full  bg-slate-300 px-[.4rem] py-[.2rem] text-xs font-bold uppercase text-slate-900 `
      }
    >
      {label}
    </span>
  );
};

export default Tag;
