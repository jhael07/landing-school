/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Image from "next/image";
import BasicList from "../shared/components/List/BasicList";
import { useState } from "react";
import ArticleOptions from "../shared/components/ArticleOptions";

type Options = "derechos" | "deberes";

const page = () => {
  const [optionSelected, setOptionSelected] = useState<Options>("derechos");

  const rights = [
    "Recibir una formación que anuncie con alegría la Buena Nueva, inspire la aceptación de Cristo y guíe hacia una auténtica liberación cristiana.",
    "Recibir una educación actualizada que prepare a los estudiantes para enfrentar los retos del siglo XXI",
    "Recibir una educación integral que combine conocimientos dinámicos y comunicación abierta entre todos los involucrados.",
    "Recibir una educación que fomente el respeto por la vida, la dignidad humana y los derechos de todos, sin distinciones.",
    "Participar en olimpiadas, clubes y actividades extracurriculares según habilidades e interés.",
    "Ser tratado con respeto y dignidad en todo momento.",
    "Poder solicitar justicia ante cualquier situación injusta en la Institución.",
    "Participar en excursiones educativas según el currículo y las condiciones.",
    "Disfrutar de una celebración navideña organizada con el profesor titular.",
    "Participar en una jornada de reflexión y celebración por la amistad y el estudiante en el Centro Educativo.",
    "Participar en una reflexión especial durante el Adviento y la Cuaresma, organizada por el Departamento de Formación Integral, Humana y Religiosa.",
    "Recibir preparación para el bautismo, la confirmación y la primera comunión si aún no los ha recibido y tiene interés.",
    "En 5to. y 6to. de Secundaria, organizar una actividad por semestre, aprobada por la Dirección y el Equipo de Gestión, para recaudar fondos para la clase graduanda y la despedida de los compañeros de 5to.",
    "Recibir los cuidados necesarios en la Enfermería del centro cuando lo requiera.",
    "Ser informado de los resultados de sus evaluaciones según los períodos establecidos por el MINERD y el calendario del Centro Educativo.",
    "Poder solicitar una revisión de exámenes y calificaciones si no está conforme con los resultados.",
  ];

  const duties = [
    "Amar a Dios y a su creación y reconocer la importancia y la necesidad de cuidarla en todo momento y lugar.",
    "Acogerse a los lineamientos filosóficos de la Institución.",
    "Respetar las normas establecidas por el Centro Educativo, expresadas ampliamente en este documento.",
    "Velar por el cumplimiento de los aspectos conductuales que al respecto se mencionan en dicho acápite.",
    "Crear un ambiente de armonía, solidaridad, positivismo y paz, entre sus compañeros/as, docentes y demás personal de su Centro Educativo.",
    "Cultivar, desarrollar y demostrar su crecimiento en la puntualidad, honradez, honestidad, responsabilidad, sinceridad, servicio al bien común, capacidad de ser agente de paz.",
    "Desarrollar capacidad de reflexión y oración y manifestarla en una buena convivencia humana.",
    "Integrar la formación académico-intelectual con la humano-religiosa para lograr un adecuado desarrollo espiritual y profesional.",
    "Aceptarse y respetarse como individuo importante, amado por Dios, miembro de una familia y de una sociedad específica, como también aceptar y respetar a los demás como personas únicas, diferentes y valiosas.",
    "Cuidar la edificación, mobiliario, materiales y equipos educativos.",
    "Manifestar una actitud de apertura y flexibilidad en el proceso educativo.",
    "Asistir a clases en forma regular y con puntualidad y con el uniforme exigido en el día según el horario de clases que le corresponde en el día.",
    "Estudiar diariamente sus lecciones, entregar a tiempo y con nitidez sus trabajos, participar activamente en el desarrollo de sus clases.",
    "Exhibir un comportamiento sin discriminación racial, sexista o clasista.",
    "Vivir en un ambiente de alegría y optimismo, de ayuda mutua y cooperación con la Institución, no sólo para el beneficio de ésta sino para desarrollar el espíritu de sensibilización al exterior de ella, especialmente con los más desposeídos.",
    "Desafiarse poniendo de manifiesto sus talentos en las diferentes actividades programadas tanto en las aulas como en los diferentes actos del Centro Educativo y fuera de él cuando la ocasión lo requiere.",
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
        <div className="w-11/12 mx-auto  p-2 py-10 max-w-7xl mt-80 relative">
          <ArticleOptions.Simple
            defaultValue={optionSelected}
            subTitle="Selecciona una categoria:"
            buttons={{
              Derechos: {
                key: "derechos",
                onClick: () => setOptionSelected("derechos"),
              },
              Deberes: {
                key: "deberes",
                onClick: () => setOptionSelected("deberes"),
              },
            }}
          />

          {optionSelected === "derechos" ? (
            <>
              <h1 className="text-4xl font-bold">Derechos de los estudiantes</h1>
              <BasicList items={rights} />
            </>
          ) : null}
          {optionSelected === "deberes" ? (
            <>
              <h1 className="text-4xl font-bold">Deberes de los estudiantes</h1>
              <BasicList items={duties} />
            </>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default page;
