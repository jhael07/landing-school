import Image from "next/image";
import InformationBlock from "../shared/components/InformationBlock";

const page = () => {
  const conductualAspects = `El Politécnico Nuestra Señora del Carmen como Institución cristiana católica, está apegada a sus normas académicas y a los principios morales que emanan de su filosofía educativa. Una conducta adecuada es determinante para la promoción y permanencia en el Centro Educativo. También se toma en cuenta para otorgar reconocimientos. Toda la comunidad educativa debe:
  

  <b>a.</b> Cumplir sus deberes y respetar el derecho de los demás.

  <b>b.</b> Mantener una actitud democrática frente a las decisiones grupales.

  <b>c.</b> Mantener las aulas y demás lugares limpios. Utilizar los zafacones en las aulas y en todos los espacios.

  <b>d.</b> Cuidar y mantener en condiciones adecuadas los materiales didácticos, libros, butacas, escritorios, útiles deportivos, plantas físicas, jardín, bebedero, paredes, pizarras, baños, zafacones, televisores, computadoras, equipos deportivos, abanicos de pedestal, control de los abanicos, juegos, etc.

  <b>e.</b> Usar el teléfono con moderación y en caso de necesidad real. Los estudiantes, en hora de clase, deben tener autorización del profesor para hacer llamadas telefónicas y las mismas se hacen desde la recepción del Centro Educativo.

  <b>f.</b> Planificar toda ausencia fuera del calendario escolar, salvo los casos de extrema necesidad, previa comunicación a la dirección o coordinadora del Nivel.

  <b>g.</b> Preparar en forma dinámica las lecciones de cada día.

  <b>h.</b> Presentar los trabajos y tareas asignadas completas, con esmero y nitidez.

  <b>i.</b> Evitar las agresiones verbales, físicas y /o emocionales con sus compañeros, otros estudiantes, personal docente, administrativo y de apoyo.

  <b>j.</b> Mostrar caballerosidad, gentileza, buenos modales y respeto mutuo entre compañeros y personas de autoridad.

  <b>k.</b> Manifestar un comportamiento adecuado en las actividades que se realicen dentro y fuera de las aulas. (formación, cafetería, presentaciones, competencias, excursiones, paseos, desfiles, actividades familiares, fiestas, etc.).

  <b>l.</b> Respetar a los delegados o representantes del consejo de curso; éstos son los intermediarios entre alumnos, profesores, dirección y coordinación.
`;

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
          <h1 className="text-4xl font-bold mb-8">Aspectos Conductuales</h1>
          <InformationBlock paragraphs={conductualAspects} />
        </div>
      </div>
    </main>
  );
};

export default page;
