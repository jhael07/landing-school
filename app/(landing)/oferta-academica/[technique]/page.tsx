import React from "react";
import Content from "./components/Content";

const page = ({ params }: { params: { technique: string } }) => {
  return (
    <div>
      <Content technique={params.technique} />
    </div>
  );
};

export default page;
