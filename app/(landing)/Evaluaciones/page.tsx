import Image from "next/image";
import InformationBlock from "../shared/components/InformationBlock";

const page = () => {
  const tests = `Todos/as los/as estudiantes de este Centro Educativo deben esforzarse por mantener la excelencia académica. 
  
  <b>1.</b> Las notas de los periodos se obtienen usando los siguientes criterios:
  
  - 10 % de asistencia 
  - 10 % de conducta 
  - 80 % de tareas, corrección de cuadernos, participación, trabajos grupales, proyectos, Emprendimientos. 
  
  <b>2.</b> Cuando un alumno/a no asista a un examen mensual por causas justificadas, la casilla de la nota correspondiente se deja vacía y se le da el examen posteriormente, previo acuerdo con el/la maestro. 
  
  <b>3.</b> Las calificaciones se entregan por períodos, según los lineamientos del Ministerio de Educación y en las fechas fijadas por el Centro Educativo. Normalmente estas calificaciones se entregan a los padres, madres y/o tutores. En alguna ocasión las mismas pueden ser entregadas a los estudiantes, excepto si tienen asignaturas con notas inferiores a las requeridas. Nos reservamos el derecho de NO entregar las calificaciones cuando hay deudas pendientes. 
  
  <b>4.</b> En el Centro Educativo NO se aceptan estudiantes repitentes, por cuanto, todo estudiante que repita el grado no es reinscrito. 
  
  <b>5.</b> Nos reservamos el derecho de NO reinscribir a los alumnos/as que, por negligencia se les queden asignaturas pendientes para el siguiente Año Escolar. 
  
  <b>6.</b> No se inscriben estudiantes provenientes de Estados Unidos hasta que no hayan pasado tres (3) años residiendo en República Dominicana.`;

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
        <div className="w-11/12 mx-auto  p-2 py-10 max-w-7xl mt-80">
          <h1 className="text-4xl font-bold mb-8">Evaluaciones</h1>
          <InformationBlock paragraphs={tests} />
        </div>
      </div>
    </main>
  );
};

export default page;
