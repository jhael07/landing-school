import Image from "next/image";
import BasicList from "../shared/components/List/BasicList";

const page = () => {
  const notAllow = [
    "Tener un rendimiento académico inadecuado y reprobar materias e ir a recuperación por negligencia, falta de esfuerzo, rebeldía o tardanzas",
    "Participar o propiciar peleas, disturbios o riñas",
    "Irrespetar a las autoridades educativas ni a ninguna persona de la Institución",
    "Consumir, alquilar o vender sustancias controladas de cualquier tipo",
    "Revisar, sustraer pertenencias de sus compañeros ni de ninguna otra persona",
    "Visitar los cursos ajenos sin ningún motivo y sin previo consentimiento de la persona adulta de autoridad",
    "Propiciar o realizar escándalos públicos que atenten contra la moral y las buenas costumbres",
    "Realizar manifestaciones amorosas públicas, dentro del Centro Educativo y zonas aledañas",
    "Dar escándalos de ningún tipo dentro del Centro Educativo o fuera de él con nuestro uniforme",
    "Alterar los registros, calificaciones, comunicaciones y demás documentos oficiales",
    "Falsificar firma de profesores, dirección, padres, madres y/o tutores",
    "Fingir y mentir inventando enfermedad para justificarse ante cualquier falta",
    "Sustraer exámenes, libros, cuadernos o cualquier pertenencia ajena",
    "Participar en juegos de azar donde se realicen apuestas o juegos vedados para su edad o condición de estudiante",
    "Participar activa o pasivamente en asociaciones o grupos satánicos",
    "Formar o pertenecer a gangas, pandillas o cualquier otro tipo de grupos que tengan fines similares",
    "Convivir con una pareja de manera pública, mientras se es estudiante de la Institución",
    "Tomar el nombre de la Institución con fines de engaño para recaudar dinero, intimidar, difamar, etc. a los compañeros o a cualquier otra persona",
    "Hacer mal uso del internet, entrando a lugares de contenido pornográficos, satánico o de contenido nocivo",
    "Crear páginas en las redes sociales con el nombre o las siglas del Centro Educativo, escribir y/o publicar mensajes que dañen la moral y reputación de personas e instituciones",
    "Utilizar el área de los estudiantes de los Niveles Inicial y Primario para merendar, dialogar ni cualquier otra acción que distraiga a esos estudiantes ni atente contra la moral y los buenos principios (Específicamente los estudiantes de Secundaria y del segundo Ciclo de Primaria)",
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
          <h1 className="text-4xl font-bold mb-8">Lo que no esta permitido</h1>
          <BasicList items={notAllow} />
        </div>
      </div>
    </main>
  );
};

export default page;
