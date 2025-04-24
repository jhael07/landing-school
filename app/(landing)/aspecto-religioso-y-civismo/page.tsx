import Image from "next/image";
import InformationBlock from "../shared/components/InformationBlock";

const page = () => {
  const religiosidad = `Los/as alumnos/as y el personal de la Institución debe participar en todas las actividades relacionadas con la religión católica que en ella se desarrollen para su formación cristiana.

  Todos los días iniciamos con una oración en la fila y una lectura bíblica en cada curso.

  En nuestro programa, para todos los padres, madres y tutores que lo deseen, si sus hijos no han recibido los Sacramentos de la Iniciación Cristiana, es decir, Bautismo, Confirmación y Primera Comunión, se les prepara y los reciben en la Institución.`;

  const civismo = `Los símbolos patrios son importantes y debemos honrarlos, por tanto, todos debemos: 
  <b>1.</b> Respetar nuestra Bandera. Hacer la fila correctamente o ponerse de pie si se está en las aulas, manteniendo una postura adecuada al momento de izar la Bandera Nacional y la de nuestro Centro Educativo.
   
  <b>2.</b> Cantar el Himno Nacional completo y el del Centro Educativo los días asignados.
   
  <b>3.</b> Participar de los actos patrios organizados dentro y fuera del Centro Educativo cuando se les solicita representarnos.`;

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
        <div className="w-11/12 mx-auto  p-2 py-10 max-w-7xl mt-80 leading-7">
          <h1 className="text-4xl font-bold mb-10">Aspecto Religioso</h1>
          <InformationBlock paragraphs={religiosidad} />

          <hr className="mt-10 mb-8" />

          <h1 className="text-4xl font-bold mb-10">Civismo</h1>
          <InformationBlock paragraphs={civismo} />
        </div>
      </div>
    </main>
  );
};

export default page;
