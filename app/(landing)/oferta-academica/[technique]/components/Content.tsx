import React, { ReactNode } from "react";
import { FaComputer, FaHotel, FaTruck } from "react-icons/fa6";
import { IoIosCart } from "react-icons/io";
import { FaHospital } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";

type TechniqueContent = {
  name: string;
  icon: ReactNode;
  content: { title: string; information: string };
  colors: { [key in string]: string };
};

type TechniquesContents = { [x in string]: TechniqueContent };

const Content = ({ technique }: { technique: string }) => {
  const techniques: TechniquesContents = {
    "tec-servicios-turisticos": {
      name: "Hoteleria y Turismo",
      icon: <FaHotel className="techniques-hover-effect text-[7.5rem]" />,
      content: {
        title: "Técnico en Servicios Turísticos",
        information: `La técnica de Hotelería y Turismo en el Politecnico Nuestra Señora del Perpetuo Socorro (PONSCA) es un programa académico que ofrece a los estudiantes una formación integral orientada a la industria de la hospitalidad y los viajes. Este técnico está diseñado para preparar a los jóvenes con las competencias necesarias para desenvolverse en un sector que demanda habilidades prácticas y teóricas en atención al cliente, administración de servicios y promoción del turismo local e internacional.

El programa incluye asignaturas enfocadas en la gestión hotelera, organización de eventos, guía turística y servicio de alimentos y bebidas. Estas materias permiten a los estudiantes adquirir conocimientos sobre la operación diaria de hoteles, restaurantes y agencias de viajes, además de desarrollar habilidades en comunicación, trabajo en equipo y resolución de problemas. De igual manera, se promueve el uso de tecnologías modernas aplicadas al sector para garantizar una formación actualizada y alineada a las demandas del mercado.

La formación práctica es un pilar fundamental del técnico en Hotelería y Turismo. Los estudiantes realizan pasantías en reconocidas empresas del sector, donde tienen la oportunidad de aplicar lo aprendido en un entorno real y adquirir experiencia profesional. Esta experiencia laboral temprana no solo fortalece sus competencias, sino que también les abre las puertas a futuras oportunidades de empleo, facilitando una transición fluida al mundo laboral.

En el Politecnico Nuestra Señora del Perpetuo Socorro, la enseñanza de esta técnica también se enfoca en la promoción de valores como la responsabilidad, la empatía y la vocación de servicio. Los egresados no solo son técnicos competentes, sino también profesionales comprometidos con el desarrollo sostenible del turismo, respetando el medio ambiente y fomentando la cultura y tradiciones locales. De esta manera, el programa contribuye al crecimiento del sector turístico y a la generación de impacto positivo en las comunidades.

`,
      },
      colors: {
        1: "#e64545",
        2: "#d93f3f",
        3: "#bd2d2d",
        4: "#941818",
      },
    },
    "tec-logistica-transporte": {
      name: "Gestión Logística y Transporte",
      icon: <FaTruck className="techniques-hover-effect xl:text-[10rem] text-8xl" />,
      colors: {
        1: "#a955f7",
        2: "#9142db",
        3: "#7d31c4",
        4: "#5b1899",
      },
      content: {
        title: "Técnico en Gestión Logística y Transporte",
        information: `La técnica de Logística en el Politecnico Nuestra Señora del Perpetuo Socorro (PONSCA) es un programa académico que brinda a los estudiantes las habilidades necesarias para enfrentar los retos de la gestión y distribución de bienes y servicios. Este programa se centra en preparar profesionales capacitados para optimizar procesos, mejorar la cadena de suministro y asegurar la eficiencia en las operaciones logísticas de empresas locales e internacionales.

        El plan de estudios incluye asignaturas claves como gestión de inventarios, transporte y distribución, almacenamiento, planificación logística y uso de herramientas tecnológicas. Estas materias permiten a los estudiantes desarrollar competencias en el manejo de sistemas logísticos, administración de recursos y toma de decisiones estratégicas para mejorar los flujos de trabajo en una organización.

        La formación práctica es una parte esencial del programa de Logística en el PONSCA. Los estudiantes tienen la oportunidad de realizar pasantías en empresas reconocidas del sector logístico y de transporte, donde aplican los conocimientos adquiridos en un entorno real. Esta experiencia no solo fortalece sus habilidades, sino que también les permite establecer contactos profesionales y acceder a futuras oportunidades laborales.

        El Politecnico Nuestra Señora del Perpetuo Socorro fomenta valores como la responsabilidad, el trabajo en equipo y la eficiencia en la cadena de suministro. Los egresados de la técnica en Logística se destacan por ser profesionales competentes y comprometidos con el desarrollo sostenible, promoviendo prácticas empresariales responsables y optimizando recursos para minimizar el impacto ambiental. De esta manera, el programa contribuye al crecimiento económico y la competitividad en un mercado globalizado.`,
      },
    },
    "tec-comercio-mercadeo": {
      name: "Comercio y Mercardeo",
      icon: <IoIosCart className="techniques-hover-effect xl:text-[10rem] text-8xl" />,
      colors: {
        1: "#ff8a39",
        3: "#f17f30",
        2: "#ff832d",
        4: "#f97316",
      },
      content: {
        title: "Técnico en Comercio y Mercadeo",
        information: `La técnica de Logística en el Politecnico Nuestra Señora del Perpetuo Socorro (PONSCA) es un programa académico que brinda a los estudiantes las habilidades necesarias para enfrentar los retos de la gestión y distribución de bienes y servicios. Este programa se centra en preparar profesionales capacitados para optimizar procesos, mejorar la cadena de suministro y asegurar la eficiencia en las operaciones logísticas de empresas locales e internacionales.

        El plan de estudios incluye asignaturas claves como gestión de inventarios, transporte y distribución, almacenamiento, planificación logística y uso de herramientas tecnológicas. Estas materias permiten a los estudiantes desarrollar competencias en el manejo de sistemas logísticos, administración de recursos y toma de decisiones estratégicas para mejorar los flujos de trabajo en una organización.

        La formación práctica es una parte esencial del programa de Logística en el PONSCA. Los estudiantes tienen la oportunidad de realizar pasantías en empresas reconocidas del sector logístico y de transporte, donde aplican los conocimientos adquiridos en un entorno real. Esta experiencia no solo fortalece sus habilidades, sino que también les permite establecer contactos profesionales y acceder a futuras oportunidades laborales.

        El Politecnico Nuestra Señora del Perpetuo Socorro fomenta valores como la responsabilidad, el trabajo en equipo y la eficiencia en la cadena de suministro. Los egresados de la técnica en Logística se destacan por ser profesionales competentes y comprometidos con el desarrollo sostenible, promoviendo prácticas empresariales responsables y optimizando recursos para minimizar el impacto ambiental. De esta manera, el programa contribuye al crecimiento económico y la competitividad en un mercado globalizado.`,
      },
    },
    "tec-desarollo-apps-informaticas": {
      name: "Desarrollo de Aplicaciones Informáticas",
      icon: <FaComputer className="techniques-hover-effect xl:text-[10rem] text-9xl" />,
      colors: {
        1: "#151d2f",
        2: "#111827",
        3: "#0e1420",
        4: "#06080e",
      },
      content: {
        title: "Técnico en Desarrollo y Administración de Aplicaciones Informáticas",
        information: `La técnica de Logística en el Politecnico Nuestra Señora del Perpetuo Socorro (PONSCA) es un programa académico que brinda a los estudiantes las habilidades necesarias para enfrentar los retos de la gestión y distribución de bienes y servicios. Este programa se centra en preparar profesionales capacitados para optimizar procesos, mejorar la cadena de suministro y asegurar la eficiencia en las operaciones logísticas de empresas locales e internacionales.

        El plan de estudios incluye asignaturas claves como gestión de inventarios, transporte y distribución, almacenamiento, planificación logística y uso de herramientas tecnológicas. Estas materias permiten a los estudiantes desarrollar competencias en el manejo de sistemas logísticos, administración de recursos y toma de decisiones estratégicas para mejorar los flujos de trabajo en una organización.

        La formación práctica es una parte esencial del programa de Logística en el PONSCA. Los estudiantes tienen la oportunidad de realizar pasantías en empresas reconocidas del sector logístico y de transporte, donde aplican los conocimientos adquiridos en un entorno real. Esta experiencia no solo fortalece sus habilidades, sino que también les permite establecer contactos profesionales y acceder a futuras oportunidades laborales.

        El Politecnico Nuestra Señora del Perpetuo Socorro fomenta valores como la responsabilidad, el trabajo en equipo y la eficiencia en la cadena de suministro. Los egresados de la técnica en Logística se destacan por ser profesionales competentes y comprometidos con el desarrollo sostenible, promoviendo prácticas empresariales responsables y optimizando recursos para minimizar el impacto ambiental. De esta manera, el programa contribuye al crecimiento económico y la competitividad en un mercado globalizado.`,
      },
    },
    "tec-enfermeria": {
      name: " Enfermería",
      icon: <FaHospital className="techniques-hover-effect xl:text-[9rem] text-8xl" />,
      colors: {
        1: "#ff8dc8",
        2: "#f472b6",
        3: "#d84a93",
        4: "#9d1c5e",
      },
      content: {
        title: "Técnico en Cuidados de Enfermería y Promoción de la Salud",
        information: `La técnica de Logística en el Politecnico Nuestra Señora del Perpetuo Socorro (PONSCA) es un programa académico que brinda a los estudiantes las habilidades necesarias para enfrentar los retos de la gestión y distribución de bienes y servicios. Este programa se centra en preparar profesionales capacitados para optimizar procesos, mejorar la cadena de suministro y asegurar la eficiencia en las operaciones logísticas de empresas locales e internacionales.

        El plan de estudios incluye asignaturas claves como gestión de inventarios, transporte y distribución, almacenamiento, planificación logística y uso de herramientas tecnológicas. Estas materias permiten a los estudiantes desarrollar competencias en el manejo de sistemas logísticos, administración de recursos y toma de decisiones estratégicas para mejorar los flujos de trabajo en una organización.

        La formación práctica es una parte esencial del programa de Logística en el PONSCA. Los estudiantes tienen la oportunidad de realizar pasantías en empresas reconocidas del sector logístico y de transporte, donde aplican los conocimientos adquiridos en un entorno real. Esta experiencia no solo fortalece sus habilidades, sino que también les permite establecer contactos profesionales y acceder a futuras oportunidades laborales.

        El Politecnico Nuestra Señora del Perpetuo Socorro fomenta valores como la responsabilidad, el trabajo en equipo y la eficiencia en la cadena de suministro. Los egresados de la técnica en Logística se destacan por ser profesionales competentes y comprometidos con el desarrollo sostenible, promoviendo prácticas empresariales responsables y optimizando recursos para minimizar el impacto ambiental. De esta manera, el programa contribuye al crecimiento económico y la competitividad en un mercado globalizado.`,
      },
    },
    "tec-administrativa-tributaria": {
      name: "Gestión Administrativa y Tributaria",
      icon: <FaTruck className="techniques-hover-effect xl:text-[10rem] text-8xl" />,
      colors: {
        1: "#ff4497",
        2: "#db2777",
        3: "#b4175c",
        4: "#860d42",
      },
      content: {
        title: "Técnico en Gestión Administrativa y Tributaria",
        information: `La técnica de Logística en el Politecnico Nuestra Señora del Perpetuo Socorro (PONSCA) es un programa académico que brinda a los estudiantes las habilidades necesarias para enfrentar los retos de la gestión y distribución de bienes y servicios. Este programa se centra en preparar profesionales capacitados para optimizar procesos, mejorar la cadena de suministro y asegurar la eficiencia en las operaciones logísticas de empresas locales e internacionales.

        El plan de estudios incluye asignaturas claves como gestión de inventarios, transporte y distribución, almacenamiento, planificación logística y uso de herramientas tecnológicas. Estas materias permiten a los estudiantes desarrollar competencias en el manejo de sistemas logísticos, administración de recursos y toma de decisiones estratégicas para mejorar los flujos de trabajo en una organización.

        La formación práctica es una parte esencial del programa de Logística en el PONSCA. Los estudiantes tienen la oportunidad de realizar pasantías en empresas reconocidas del sector logístico y de transporte, donde aplican los conocimientos adquiridos en un entorno real. Esta experiencia no solo fortalece sus habilidades, sino que también les permite establecer contactos profesionales y acceder a futuras oportunidades laborales.

        El Politecnico Nuestra Señora del Perpetuo Socorro fomenta valores como la responsabilidad, el trabajo en equipo y la eficiencia en la cadena de suministro. Los egresados de la técnica en Logística se destacan por ser profesionales competentes y comprometidos con el desarrollo sostenible, promoviendo prácticas empresariales responsables y optimizando recursos para minimizar el impacto ambiental. De esta manera, el programa contribuye al crecimiento económico y la competitividad en un mercado globalizado.`,
      },
    },
    "tec-instalaciones-electricas": {
      name: "Instalaciones Eléctricas",
      icon: <MdElectricBolt className="techniques-hover-effect xl:text-[10rem] text-8xl" />,
      colors: {
        1: "#3171ff",
        2: "#2563eb",
        3: "#1047bf",
        4: "#0d3489",
      },
      content: {
        title: "Técnico en Instalaciones Eléctricas",
        information: `La técnica de Logística en el Politecnico Nuestra Señora del Perpetuo Socorro (PONSCA) es un programa académico que brinda a los estudiantes las habilidades necesarias para enfrentar los retos de la gestión y distribución de bienes y servicios. Este programa se centra en preparar profesionales capacitados para optimizar procesos, mejorar la cadena de suministro y asegurar la eficiencia en las operaciones logísticas de empresas locales e internacionales.

        El plan de estudios incluye asignaturas claves como gestión de inventarios, transporte y distribución, almacenamiento, planificación logística y uso de herramientas tecnológicas. Estas materias permiten a los estudiantes desarrollar competencias en el manejo de sistemas logísticos, administración de recursos y toma de decisiones estratégicas para mejorar los flujos de trabajo en una organización.

        La formación práctica es una parte esencial del programa de Logística en el PONSCA. Los estudiantes tienen la oportunidad de realizar pasantías en empresas reconocidas del sector logístico y de transporte, donde aplican los conocimientos adquiridos en un entorno real. Esta experiencia no solo fortalece sus habilidades, sino que también les permite establecer contactos profesionales y acceder a futuras oportunidades laborales.

        El Politecnico Nuestra Señora del Perpetuo Socorro fomenta valores como la responsabilidad, el trabajo en equipo y la eficiencia en la cadena de suministro. Los egresados de la técnica en Logística se destacan por ser profesionales competentes y comprometidos con el desarrollo sostenible, promoviendo prácticas empresariales responsables y optimizando recursos para minimizar el impacto ambiental. De esta manera, el programa contribuye al crecimiento económico y la competitividad en un mercado globalizado.`,
      },
    },
  };

  const techniqueSelected = techniques[technique];

  if (!techniqueSelected) throw new Error("No se encontro niguna tecnica con " + technique);

  return (
    <div>
      <div
        className={`fixed top-0 w-full  text-white 
        -z-10`}
      >
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0 115L13.7 121C27.3 127 54.7 139 82 136C109.3 133 136.7 115 163.8 110C191 105 218 113 245.2 109C272.3 105 299.7 89 327 78C354.3 67 381.7 61 409 70C436.3 79 463.7 103 491 105C518.3 107 545.7 87 573 88C600.3 89 627.7 111 654.8 120C682 129 709 125 736.2 127C763.3 129 790.7 137 818 128C845.3 119 872.7 93 886.3 80L900 67L900 0L886.3 0C872.7 0 845.3 0 818 0C790.7 0 763.3 0 736.2 0C709 0 682 0 654.8 0C627.7 0 600.3 0 573 0C545.7 0 518.3 0 491 0C463.7 0 436.3 0 409 0C381.7 0 354.3 0 327 0C299.7 0 272.3 0 245.2 0C218 0 191 0 163.8 0C136.7 0 109.3 0 82 0C54.7 0 27.3 0 13.7 0L0 0Z"
            fill={techniqueSelected.colors["1"]}
          ></path>
          <path
            d="M0 217L13.7 231C27.3 245 54.7 273 82 288C109.3 303 136.7 305 163.8 294C191 283 218 259 245.2 254C272.3 249 299.7 263 327 262C354.3 261 381.7 245 409 250C436.3 255 463.7 281 491 294C518.3 307 545.7 307 573 300C600.3 293 627.7 279 654.8 274C682 269 709 273 736.2 291C763.3 309 790.7 341 818 349C845.3 357 872.7 341 886.3 333L900 325L900 65L886.3 78C872.7 91 845.3 117 818 126C790.7 135 763.3 127 736.2 125C709 123 682 127 654.8 118C627.7 109 600.3 87 573 86C545.7 85 518.3 105 491 103C463.7 101 436.3 77 409 68C381.7 59 354.3 65 327 76C299.7 87 272.3 103 245.2 107C218 111 191 103 163.8 108C136.7 113 109.3 131 82 134C54.7 137 27.3 125 13.7 119L0 113Z"
            fill={techniqueSelected.colors["2"]}
          ></path>
          <path
            d="M0 301L13.7 311C27.3 321 54.7 341 82 350C109.3 359 136.7 357 163.8 349C191 341 218 327 245.2 329C272.3 331 299.7 349 327 350C354.3 351 381.7 335 409 337C436.3 339 463.7 359 491 368C518.3 377 545.7 375 573 371C600.3 367 627.7 361 654.8 353C682 345 709 335 736.2 349C763.3 363 790.7 401 818 412C845.3 423 872.7 407 886.3 399L900 391L900 323L886.3 331C872.7 339 845.3 355 818 347C790.7 339 763.3 307 736.2 289C709 271 682 267 654.8 272C627.7 277 600.3 291 573 298C545.7 305 518.3 305 491 292C463.7 279 436.3 253 409 248C381.7 243 354.3 259 327 260C299.7 261 272.3 247 245.2 252C218 257 191 281 163.8 292C136.7 303 109.3 301 82 286C54.7 271 27.3 243 13.7 229L0 215Z"
            fill={techniqueSelected.colors["3"]}
          ></path>
          <path
            d="M0 385L13.7 392C27.3 399 54.7 413 82 429C109.3 445 136.7 463 163.8 451C191 439 218 397 245.2 394C272.3 391 299.7 427 327 441C354.3 455 381.7 447 409 446C436.3 445 463.7 451 491 449C518.3 447 545.7 437 573 440C600.3 443 627.7 459 654.8 455C682 451 709 427 736.2 430C763.3 433 790.7 463 818 481C845.3 499 872.7 505 886.3 508L900 511L900 389L886.3 397C872.7 405 845.3 421 818 410C790.7 399 763.3 361 736.2 347C709 333 682 343 654.8 351C627.7 359 600.3 365 573 369C545.7 373 518.3 375 491 366C463.7 357 436.3 337 409 335C381.7 333 354.3 349 327 348C299.7 347 272.3 329 245.2 327C218 325 191 339 163.8 347C136.7 355 109.3 357 82 348C54.7 339 27.3 319 13.7 309L0 299Z"
            fill={techniqueSelected.colors["4"]}
          ></path>
        </svg>

        <div className="absolute top-[15vh] w-full  flex flex-col gap-14 justify-center items-center">
          <h1 className="text-2xl xl:text-6xl font-bold mx-auto text-center">
            {techniqueSelected.name}
          </h1>
          {techniqueSelected.icon}
        </div>
      </div>

      <div className="py-16  bg-white p-4 w-full mt-[50vh] ">
        <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col p-4 gap-10">
          <h1 className="text-4xl font-bold pb-6 border-b border-b-gray-300 text-gray-900">
            {techniqueSelected.content.title}
          </h1>

          <div className="flex flex-col gap-4 text-justify">
            {techniqueSelected.content.information.split(/\r?\n/).map((pargraph, i) => (
              <p key={i} className="leading-7">
                {pargraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
