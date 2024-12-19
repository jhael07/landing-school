import Image from "next/image";
import BasicList from "../components/List/BasicList";

const page = () => {
  const requirements = [
    "ACTA DE NACIMIENTO ORIGINAL y Certificada dos copias.",
    "Certificado original de conclusión de PRIMARIA, firmado y sellado por el DISTRITO EDUCATIVO correspondiente.",
    "RÉCORD DE NOTAS ORIGINAL de 1er y 2do grado del Primer Ciclo del Nivel Secundario, con sus ACTAS DE CALIFICACIONES en original, todo firmado y sellado por el DISTRITO EDUCATIVO correspondiente.",
    "Certificación de BUENA CONDUCTA del Centro Educativo de procedencia",
    "Historial del SIGERD",
    "2 fotos 2×2",
    "Copia de cédula de los padres y/o tutores.",
    "Copia del seguro médico del estudiante.",
    "Certificado médico y tipo de sangre.",
    "Copia del historial de vacuna infantil.",
    "1 folder",
  ];

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
        <div className="w-11/12 mx-auto  p-2 py-10 max-w-7xl mt-80 ">
          <h1 className="text-4xl font-bold">Requisitos de admision</h1>
          <BasicList items={requirements} />
        </div>
      </div>
    </main>
  );
};

export default page;
