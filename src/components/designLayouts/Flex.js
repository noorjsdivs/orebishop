import React from "react";

const Flex = ({ children }) => {
  return (
    <div className="flex items-center justify-between h-full">{children}</div>
  );
};

export default Flex;
