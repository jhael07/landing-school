/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Image from "next/image";
import InformationBlock from "../shared/components/InformationBlock";
import ArticleOptions from "../shared/components/ArticleOptions";
import { useState } from "react";
import BasicList from "../shared/components/List/BasicList";

const page = () => {
  const [option, setOption] = useState<"uniform-use" | "students-look">("uniform-use");

  const uniformUse = `Los alumnos deben asistir correctamente uniformados todos los días al Politécnico Nuestra Señora del Carmen. Igualmente deben utilizar el uniforme cuando nos representan en actividades fuera del plantel representando al Centro Educativo.

<b>Uniforme formal:</b>

T-shirt acorde a la técnica correspondiente en el caso de los grados de 4to a 6to de secundaria y amarillo para el 3er. Grado, con el logo del del Centro Educativo en el lado superior izquierdo
Pantalón azul marino
Correa completamente negra
Zapatos escolares negros
Medias blancas
 

<b>Uniforme para deportes:</b>

Camiseta blanca con el logo de la institución (de venta en el Centro Educativo)
Pantalón azul marino con rayas blancas en los laterales de cada pierna, con el nombre y el logo del Centro Educativo (de venta en el Centro Educativo)
Tenis negros, en caso de que no aparezcan totalmente negros, pueden tener la suela blanca
Medias blancas
El uniforme de Educación Física debe utilizarse exclusivamente los días de la semana que en el horario están asignados para esa asignatura.
`;

  const studentsLook = [
    "Los tamaños de los uniformes deben ser los adecuados a su cuerpo (no más anchos ni más estrechos de lo correcto; deben ser del largo normal). No se permite crear nuevos modelos. Deben estar limpios y en buenas condiciones.",
    "Está prohibido el uso de abrigo mientras no se esté en temporada de frio. En la temporada de frío sugerimos las siguientes especificaciones para los abrigos: color gris, crema o azul marino, con cierre delantero, de modo que permita ver el uniforme.",
    "Está prohibido el uso de gorras, sombreros, bandas de pelo deportivas o lentes de sol dentro de la Institución.",
    "Las uñas deben utilizarse recortadas y limpias; si se pintan, los colores deben ser pasteles.",
    "No está permitido el uso de maquillajes.",
    "No se permite el uso de prendas ostentosas ni accesorios muy llamativos (sujeto a la interpretación del Centro Educativo) tales como el uso de aretes grandes, varios aretes, collares grandes, ni varias pulseras, entre otros.",
    "El pelo debe estar debidamente aseado y peinado y con un corte formal (sujeto a la interpretación del Centro Educativo). Debe ser de color natural.",
    "Están prohibidas las trenzas de cualquier tipo.",
    "En el caso de los varones, el corte del pelo debe tener solamente dos números, en la parte superior el número 1 y la inferior la cero graduada.",
    "Las patillas largas que incluyen el bigote y la barba no están permitidas.",
    "No están permitidos tatuajes de ningún tipo.",
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
      <div className="bg-white relative">
        <div className="w-11/12 mx-auto  p-2 py-10 max-w-7xl mt-80 ">
          <ArticleOptions.Simple
            subTitle="Selecciona la categoria:"
            defaultValue={option}
            buttons={{
              "Uso de uniformes": {
                key: "uniform-use",
                onClick: () => setOption("uniform-use"),
              },
              "Apariencia de los estudiantes": {
                key: "students-look",
                onClick: () => setOption("students-look"),
              },
            }}
          />
          {option === "uniform-use" ? (
            <>
              <h1 className="text-4xl font-bold mb-8">Uso de los uniformes</h1>
              <InformationBlock paragraphs={uniformUse} />
              <div className="bg-gray-50 border p-4 rounded-md mt-5">
                <p>NOTAS:</p>
                <InformationBlock
                  paragraphs={`
                a. Los/as alumnos/as de 6to. de Secundaria pueden usar la camiseta de su promoción todos los martes y los viernes. 

            b. En caso de que un estudiante tenga una condición que le imposibilite usar el calzado establecido por el Centro, el padre, madre o tutor/a debe informarlo a la Coordinadora del Nivel para que se le otorgue el permiso de usar un calzado diferente. 

            c. Con el uniforme no se aceptan adornos, maquillaje, pintura en las uñas, doble o triple aretes, gorras, camiseta o t-shirt que no sea el del Centro Educativo.
              `}
                />
              </div>
            </>
          ) : null}

          {option === "students-look" ? (
            <>
              <h1 className="text-4xl font-bold mb-8">Apariencia de los estudiantes</h1>
              <BasicList items={studentsLook} />
            </>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default page;
