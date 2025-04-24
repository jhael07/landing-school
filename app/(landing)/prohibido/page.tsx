import Image from "next/image";
import BasicList from "../shared/components/List/BasicList";

const page = () => {
  const prohibited = [
    "Comer dentro de los cursos (chiclets, golosinas, galletas u otros comestibles)",
    "Tirar basura fuera de los zafacones sea dentro o fuera de las aulas",
    "Escupir en los zafacones",
    "Fumar todo tipo de sustancias dentro o fuera de las aulas",
    "Ingerir bebidas alcohólicas dentro del plantel y/o fuera de él con el uniforme del Centro Educativo",
    "Traer objetos que no sean propios de las clases diarias, a menos que una persona de autoridad conceda el permiso (radio, videos, discos compactos, Nintendo, juegos, fotos, revistas u otros que interfieran en el orden y desarrollo de clases)",
    "Revisar libros de registros, materiales o escritorios de los/as profesores/as o útiles de los/as compañeros/as",
    "Usar el nombre de la Institución para beneficio propio o grupal",
    "Vender objetos, dulces o cualquier tipo de artículo sin el consentimiento de la Dirección",
    "Usar escondrijos en el recinto escolar",
    "Jugar de mano y/o de palabras que ofendan a los demás",
    "Emplear vocabulario y gestos vulgares",
    "Hacer bulling de cualquier tipo a ninguna persona",
    "Boicotear las clases con actos de indisciplina, como es ponerse de pie sin permiso, hacer chistes, interrumpir a propósito, burlarse de los compañeros o maestros, etc.",
    "Quedarse dentro de las aulas en el recreo",
    "Decir o hacer manifestaciones amorosas",
    "Apostar a cualquier tipo de juego",
    "Planificar fiestas u otras actividades sin permiso de la Dirección",
    "Usar los baños para comer, hablar, estudiar o cualquier otra actividad que no sea la realización de las necesidades fisiológicas o lavarse las manos",
    "Realizar celebraciones de cumpleaños en los cursos, (excepto en el Nivel Inicial, con el permiso previo de la maestra y la coordinadora), mojar con agua u otro líquido a los compañeros.",
    "Salir a la calle hasta que no haya finalizado el período de clases",
    "Asistir impuntualmente a cada actividad. Para la entrada al Centro Educativo debemos estar por lo menos 5 minutos antes en el recinto",
    "Presentar corte de pelo inadecuado al ambiente escolar y según los lineamientos del Ministerio de Educación.",
    "Teñirse se pelo de colores llamativos",
    "Usar gelatinas o fijadores en el pelo, esmalte de uñas, accesorios llamativos, maquillajes, etc.",
    "Usar incompleto el uniforme exigido en cada caso",
    "Copiar las tareas o trabajos de compañeros u otras personas",
    "Copiar y pegar las clases integrales del internet. Éste es un medio para aprender, no para copiar",
    "Copiar o sacar fraude en los exámenes",
    "Tomar útiles escolares prestados durante los exámenes",
    "Dejar los sanitarios cargados después de usarlos",
    "Malgastar el papel de baño, papel de mano, jabón de las manos",
    "Falsificar o alterar cualquier tipo de documento de la Institución ni de otra fuente",
    "Otras faltas que atenten contra la moral y el buen nombre de sus hogares y de la Institución",
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
          <h1 className="text-4xl font-bold mb-8">Esta prohibido</h1>
          <BasicList items={prohibited} />
        </div>
      </div>
    </main>
  );
};

export default page;
