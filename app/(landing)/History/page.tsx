import Image from "next/image";
import InformationBlock from "../shared/components/InformationBlock";

const page = () => {
  const info = `El Politécnico Nuestra Señora del Carmen fue construido durante el gobierno del Dr. Joaquín Balaguer con el acuerdo del Ministerio de Educación (MINERD) previa consulta a la Congregación de las Hermanas de Nuestra Señora del Perpetuo Socorro para que se hicieran cargo de la dirección del mismo.
  
  Fue el Ingeniero Francisco Caonabo Javier Castillo quien estuvo a cargo esta obra que fue inaugurada el día 13 de marzo de 1977. Este Centro Educativo está ubicado en la calle Jesús de Galíndez, esquina Jerusalén, en el barrio Simón Bolívar, Distrito Nacional. 
  
  Antes de iniciar las labores del Politécnico en 1977, las Hermanas del Perpetuo Socorro hicieron una evaluación del sector para poder determinar los objetivos a seguir en la educación y así capacitar a las personas del entorno según sus necesidades; se hizo un análisis para ver cuáles eran los oficios y carreras que le resultarían más beneficiosas y un estudio para ver cuáles labores les permitían entrar directamente en el mercado laboral.
  
  La idea original de crear este Politécnico en principio incluía construir viviendas diferentes a las que había en el barrio Simón Bolívar para darle una mejor visión a éste. Al llegar las Hermanas de la Congregación del Perpetuo Socorro y enterarse cuál era la situación del sector acudieron de inmediato a las autoridades competentes para que no llevaran a cabo el plan del desalojo que estaba planeado, puesto que los habitantes eran personas de escasos recursos económicos casi en su totalidad, y la urgencia y razón del Centro Educativo era y sigue siendo disminuir el grado de analfabetismo y preparar técnicamente a los/as adolescentes y jóvenes del barrio.`;

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
        <div className="w-11/12 mx-auto flex flex-col gap-4  p-2 py-10 max-w-7xl mt-80 ">
          <h1 className="text-4xl font-bold">Historia</h1>
          <InformationBlock paragraphs={info} />
        </div>
      </div>
    </main>
  );
};

export default page;
