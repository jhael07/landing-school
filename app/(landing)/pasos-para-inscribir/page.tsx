import Image from "next/image";

const page = () => {
  const steps = [
    "La admisión inicia en abril, con un formulario en la web y entrega de documentos requeridos.",
    "El estudiante debe realizar una serie de evaluaciones incluyen materias como español, matemática, sociales y naturales, además de la prueba C.A.P.A.",
    "El equipo de admisiones revisará los resultados de las pruebas para determinar si el estudiante es admitido.",
  ];

  return (
    <main>
      <div className="w-full  h-[100vh] overflow-hidden top-0 fixed -z-10">
        <Image
          fill
          alt="Student Admission"
          objectFit="cover"
          className="object-center brightness-75"
          unoptimized
          src={
            "https://us.images.westend61.de/0001411501pw/portrait-of-confident-young-male-student-in-corridor-of-university-MASF19101.jpg"
          }
        />
      </div>
      <div className="bg-white">
        <div className="w-11/12 mx-auto  p-2 py-10 max-w-7xl mt-80 ">
          <h1 className="text-4xl font-bold">Pasos para inscribir</h1>
          <div className="my-10 mx-auto flex-col flex w-full gap-10">
            {steps.map((item, i) => (
              <div
                key={item}
                className="p-6 px-4 w-full border rounded-lg items-center flex gap-x-4"
              >
                <h2 className="text-lg font-bold flex-shrink-0  w-10 h-10 items-center justify-center text-center bg-primary-600 flex rounded-full text-primary-950">
                  {i + 1}
                </h2>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
