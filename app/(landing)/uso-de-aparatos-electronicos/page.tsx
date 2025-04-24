import Image from "next/image";
import InformationBlock from "../shared/components/InformationBlock";

const page = () => {
  const electronicDeviceUser = `El uso de aparatos electrónicos, como son celulares, Tablet, laptops, airpods, etc. está regulado de la siguiente forma: 
  
  
  <b>1.</b> Se permite que sean traídos al Centro Educativo, pero antes de que inicien los actos normales (filas) deben ser guardados en las mochilas, de modo que no estén en uso (ni en las manos) al momento de la formación obligatoria. 
  
  <b>2.</b> Al entrar a las aulas, se colocan en el lugar destinado para los mismos. En el Nivel Secundario se depositan en una caja previamente identificada. Al final de las clases les son remitidos nuevamente. Todo equipo debe ser entregado apagado. 
  
  <b>3.</b> Los aparatos electrónicos son permitidos en clase únicamente para fines educativos siempre que sean requeridos puntualmente por alguna asignatura, previo aviso del maestro a la coordinadora del Grado. Al estudiante que incumple esta norma se le retiene el aparato electrónico y luego se le entrega a los padres o tutores.`;

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
          <h1 className="text-4xl font-bold mb-8">Uso de aparatos electronicos</h1>
          <InformationBlock paragraphs={electronicDeviceUser} />
        </div>
      </div>
    </main>
  );
};

export default page;
