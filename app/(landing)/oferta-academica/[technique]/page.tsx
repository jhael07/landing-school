import React from "react";
import Content from "./components/Content";
import { Metadata } from "next";
import useTechniques from "./hooks/useTechniques";

type Props = { params: Promise<{ technique: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { techniques } = useTechniques();
  return {
    title: techniques[(await params).technique]?.name,
  };
}
const page = ({ params }: { params: { technique: string } }) => {
  return <Content technique={params.technique} />;
};

export default page;
