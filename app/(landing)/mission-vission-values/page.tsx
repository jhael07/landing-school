import Image from "next/image";
import InformationBlock from "../shared/components/InformationBlock";

const page = () => {
  return (
    <main>
      <div className="w-full  h-[100vh] overflow-hidden top-0 fixed -z-10">
        <Image
          fill
          alt="Student Admission"
          objectFit="cover"
          className="object-center brightness-75"
          src={
            "https://www.globalcareercounsellor.com/blog/wp-content/uploads/2022/02/College-admission-process-that-fits-you.jpg"
          }
        />
      </div>
      <div className="bg-white">
        <div className="w-11/12 mx-auto flex flex-col gap-3.5 p-2 py-10 max-w-7xl mt-80 ">
          <h1 className="text-4xl font-bold">Mision</h1>
          <InformationBlock
            paragraphs={
              "Somos una institución educativa que forma a sus estudiantes en un modelo integral, orientado al desarrollo de competencias técnicas profesionales de acuerdo a las normas de calidad"
            }
          />
          <h1 className="text-4xl font-bold mt-5">Vision</h1>
          <InformationBlock
            paragraphs={
              "Completar el proceso educativo con calidad y competencia para transformar la sociedad."
            }
          />
          <h1 className="text-4xl font-bold mt-5">Valores</h1>
          <InformationBlock
            paragraphs={
              "Los Valores son la base de la formación que damos en este Centro Educativo para entregar a la sociedad a personas integradas en todas sus dimensiones son los siguientes: Fe, Justicia, Respeto, Responsabilidad y Solidaridad."
            }
          />
          <h1 className="text-4xl font-bold mt-5">Politica de calidad</h1>
          <InformationBlock
            paragraphs={
              "En el Politécnico Nuestra Señora del Carmen (PONSCA) estamos comprometidos con la satisfacción de las necesidades y expectativas de nuestros grupos de interés, en particular los estudiantes, por medio de la mejora continua de nuestros procesos de gestión e inserción al mercado laboral"
            }
          />
        </div>
      </div>
    </main>
  );
};

export default page;
