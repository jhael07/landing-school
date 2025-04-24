import Image from "next/image";
import InformationBlock from "../shared/components/InformationBlock";

const page = () => {
  const info = `El incumplimiento del Reglamento escolar trae como consecuencia sanciones, que van desde la amonestación hasta el retiro del Centro Educativo por unos días o la expulsión definitiva del Centro educativo, según la gravedad del caso. 
  
  Ante el incumplimiento de las normas, se procede de la siguiente forma: 
  
  a. La persona encargada de disciplina en el Centro Educativo, el profesor o la coordinadora, llama la atención del estudiante que comete una falta, llena la ficha que se utiliza para tal fin y la remite al departamento de coordinación pertinente. 
  
  b. Después de tres fichas por faltas leves se convoca al tutor del estudiante y se le da a conocer el caso. 
  
  c. Si la falta es grave, se llena la ficha y se convoca al tutor a la brevedad posible. 
  
  d. Las personas que aplican las sanciones en las faltas leves, graves o gravísimas: 
  
  ❖ En los casos LEVES es la Coordinadora y la persona encargada de la Disciplina quienes se reúnen con el estudiante, dialogan y aplican la sanción. 
  
  ❖ En las faltas GRAVES es el equipo formado por la Directora, la Coordinadora y la Psicóloga del Nivel quienes se reúnen con el estudiante y aplican la sanción. 
  
  ❖ Los casos GRAVÍSIMOS de indisciplina son vistos en el Equipo de MEDIACIÓN y es éste quien las aplica. 
  
  
  Seguimos las pautas dictadas por el Ministerio de Educación de la República Dominicana (MINERD) “En las NORMAS DEL SISTEMA EDUCATIVO DOMINICANO para la Convivencia Armonioso en los Centros Educativos Públicos y Privados. El EQUIPO de MEDIACIÓN está integrado por: 
  1. Un/a Psicólogo/a 
  2. La Coordinadora Pedagógica 
  3. Un Maestro Elegido por la Dirección 
  4. Dos Estudiantes representantes de los Consejos de Cursos 
  
  (Pág. 36, Artículo 33 de las NORMAS)`;

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
          <h1 className="text-4xl font-bold mb-6">Sanciones</h1>
          <InformationBlock paragraphs={info} />
        </div>
      </div>
    </main>
  );
};

export default page;
