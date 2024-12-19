/* eslint-disable @typescript-eslint/no-unused-vars */
import useTechniques from "../hooks/useTechniques";
import HeaderSVG from "./HeaderSVG";

const Content = ({ technique }: { technique: string }) => {
  const { techniques } = useTechniques();

  const techniqueSelected = techniques[technique];

  if (!techniqueSelected) throw new Error("No se encontro niguna tecnica con " + technique);

  return (
    <div>
      <div
        className={`fixed top-0 w-full  text-white 
        -z-10`}
      >
        <HeaderSVG
          colors={Object.entries(techniqueSelected.colors ?? {}).map(([_, value]) => value)}
        />

        <div className="absolute top-[15vh] w-full  flex flex-col gap-14 justify-center items-center">
          <h1 className="text-2xl xl:text-6xl font-bold mx-auto text-center">
            {techniqueSelected.name}
          </h1>
          {techniqueSelected.icon}
        </div>
      </div>

      <div className="py-16  bg-white p-4 w-full mt-[20rem] sm:mt-[16rem] lg:mt-[20rem] xl:mt-[25rem] ">
        <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col p-4 gap-10">
          <h1 className="text-4xl font-bold pb-6 border-b border-b-gray-300 text-gray-900">
            {techniqueSelected.content.title}
          </h1>

          <div className="flex flex-col gap-4 text-justify">
            {techniqueSelected.content.information.split(/\r?\n/).map((pargraph, i) => (
              <p key={i} className="leading-7">
                {pargraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
