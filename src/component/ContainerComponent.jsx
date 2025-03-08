import React from "react";

const ContainerComponent = ({ children, className, ...props }) => {
  return (
    <div
      className={`max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ContainerComponent;
