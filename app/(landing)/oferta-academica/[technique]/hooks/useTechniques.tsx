import React, { ReactNode } from "react";
import { FaComputer, FaHotel, FaSackDollar, FaTruck } from "react-icons/fa6";
import { IoIosCart } from "react-icons/io";
import { FaHospital } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";

export type TechniqueContent = {
  name: string;
  icon: ReactNode;
  content: { title: string; information: string };
  colors: { [key in string]: string };
};

export type TechniquesContents = { [x in string]: TechniqueContent };

const useTechniques = () => {
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
        information: `La técnica de Comercio y Mercadeo en el Politecnico Nuestra Señora del Perpetuo Socorro (PONSCA) es un programa académico que proporciona a los estudiantes las herramientas necesarias para destacar en el mundo de los negocios. Este técnico está diseñado para formar profesionales capaces de desarrollar estrategias comerciales, gestionar empresas y adaptarse a las demandas de un mercado en constante evolución.
        
        El programa incluye asignaturas como gestión de ventas, mercadotecnia, comercio electrónico y análisis de mercado. Estas materias permiten a los estudiantes adquirir conocimientos fundamentales para comprender el comportamiento del consumidor, diseñar planes de marketing y optimizar procesos comerciales. Además, se fomenta el uso de herramientas digitales y plataformas tecnológicas para garantizar una formación moderna y acorde con las tendencias actuales.
        
        La formación práctica juega un papel crucial en este técnico. Los estudiantes tienen la oportunidad de realizar pasantías en empresas y organizaciones reconocidas, donde pueden aplicar sus conocimientos en situaciones reales. Estas experiencias fortalecen sus habilidades en negociación, trabajo en equipo y resolución de problemas, preparándolos para enfrentar los desafíos del entorno laboral con confianza y profesionalismo.
        
        En el Politecnico Nuestra Señora del Perpetuo Socorro, la formación en Comercio y Mercadeo también enfatiza la importancia de los valores éticos, la responsabilidad y la innovación. Los egresados no solo son técnicos competentes, sino también profesionales con un fuerte compromiso hacia el desarrollo empresarial sostenible. A través de sus conocimientos y habilidades, contribuyen al crecimiento de las empresas y al fortalecimiento de la economía local y nacional.
        
        `,
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
        information: `El técnico en Desarrollo y Administración de Aplicaciones Informáticas en el Politecnico Nuestra Señora del Perpetuo Socorro (PONSCA) está diseñado para formar profesionales competentes en el diseño, desarrollo y gestión de soluciones tecnológicas. Este programa ofrece a los estudiantes las habilidades necesarias para destacar en el sector de las tecnologías de la información, un ámbito en constante crecimiento y evolución.
        
                El plan de estudios incluye asignaturas enfocadas en lenguajes de programación, bases de datos, desarrollo de aplicaciones web y móviles, así como administración de sistemas y redes. Estas materias permiten a los estudiantes adquirir una sólida base técnica, además de fomentar el pensamiento lógico y la resolución de problemas complejos. Asimismo, se enfatiza el uso de herramientas y plataformas modernas para garantizar una formación actualizada.
        
                La formación práctica es un elemento clave en este programa. Los estudiantes tienen la oportunidad de desarrollar proyectos reales y realizar pasantías en empresas tecnológicas, donde pueden aplicar sus conocimientos en un entorno profesional. Estas experiencias no solo refuerzan sus habilidades técnicas, sino que también los preparan para enfrentar los desafíos del mercado laboral con confianza y creatividad.
        
                En el Politecnico Nuestra Señora del Perpetuo Socorro, la formación en Desarrollo y Administración de Aplicaciones Informáticas no solo se enfoca en el aspecto técnico, sino también en la promoción de valores éticos y la innovación. Los egresados son profesionales con una visión integral, capaces de contribuir al avance tecnológico de sus comunidades y de impulsar soluciones sostenibles que generen impacto positivo en la sociedad.`,
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
        information: `El técnico en Cuidados de Enfermería y Promoción de la Salud en el Politecnico Nuestra Señora del Perpetuo Socorro (PONSCA) está orientado a formar profesionales comprometidos con el bienestar y la salud de las personas. Este programa académico brinda a los estudiantes las competencias necesarias para desempeñarse en el ámbito de la atención primaria, cuidado integral del paciente y promoción de estilos de vida saludables.
        
                El plan de estudios incluye asignaturas relacionadas con anatomía, fisiología, farmacología, técnicas de enfermería y educación para la salud. Además, se aborda la prevención de enfermedades y la promoción de hábitos saludables en diferentes grupos de población. Estas materias permiten a los estudiantes adquirir una base sólida de conocimientos científicos y desarrollar habilidades prácticas esenciales para su desempeño profesional.
        
                La formación práctica es un componente esencial de este técnico. Los estudiantes realizan prácticas supervisadas en hospitales, clínicas y centros de salud, donde tienen la oportunidad de aplicar sus conocimientos en el cuidado directo de los pacientes. Estas experiencias fortalecen sus competencias en la atención sanitaria y los preparan para enfrentarse a situaciones reales con profesionalismo y empatía.
        
                En el Politecnico Nuestra Señora del Perpetuo Socorro, la formación en Cuidados de Enfermería y Promoción de la Salud está guiada por valores como la solidaridad, la responsabilidad y el respeto por la dignidad humana. Los egresados son profesionales íntegros y comprometidos con la mejora de la calidad de vida de las comunidades, contribuyendo al fortalecimiento del sistema de salud y promoviendo un impacto positivo en la sociedad.
        
        `,
      },
    },
    "tec-administrativa-tributaria": {
      name: "Gestión Administrativa y Tributaria",
      icon: <FaSackDollar className="techniques-hover-effect xl:text-[10rem] text-8xl" />,
      colors: {
        1: "#ff4497",
        2: "#db2777",
        3: "#b4175c",
        4: "#860d42",
      },
      content: {
        title: "Técnico en Gestión Administrativa y Tributaria",
        information: `El técnico en Gestión Administrativa y Tributaria en el Politecnico Nuestra Señora del Perpetuo Socorro (PONSCA) está diseñado para formar profesionales competentes en la organización y administración de procesos empresariales y fiscales. Este programa prepara a los estudiantes para enfrentar los desafíos de un entorno corporativo en constante cambio, brindándoles las herramientas necesarias para optimizar la gestión administrativa y garantizar el cumplimiento tributario.
        
                El plan de estudios incluye asignaturas como contabilidad general, gestión financiera, legislación tributaria, administración de recursos humanos y procesos organizacionales. Estas materias están orientadas a desarrollar competencias clave en la planificación, control y evaluación de actividades administrativas y fiscales, proporcionando una base sólida para la toma de decisiones estratégicas en empresas y organizaciones.
        
                La formación práctica es un componente fundamental del técnico en Gestión Administrativa y Tributaria. Los estudiantes realizan pasantías en empresas y entidades públicas, donde tienen la oportunidad de aplicar sus conocimientos en contextos reales. Estas experiencias permiten adquirir una visión integral del funcionamiento administrativo y fiscal, fortaleciendo sus habilidades en la resolución de problemas y el trabajo en equipo.
        
                En el Politecnico Nuestra Señora del Perpetuo Socorro, la formación en Gestión Administrativa y Tributaria se basa en principios éticos y de responsabilidad social. Los egresados son profesionales íntegros y comprometidos con la transparencia y el cumplimiento normativo, contribuyendo al desarrollo sostenible de las organizaciones y al fortalecimiento del sistema económico y fiscal. Su aporte es clave para garantizar la eficiencia y la legalidad en la gestión administrativa y tributaria.
        
        `,
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
        information: `El técnico en Instalaciones Eléctricas en el Politecnico Nuestra Señora del Perpetuo Socorro (PONSCA) está orientado a formar profesionales capaces de diseñar, instalar y mantener sistemas eléctricos en diversos entornos. Este programa ofrece a los estudiantes una formación integral que combina conocimientos teóricos y prácticos, garantizando su preparación para desempeñarse en el sector eléctrico con altos estándares de calidad y seguridad.
        
                El plan de estudios incluye asignaturas como circuitos eléctricos, sistemas de automatización, energías renovables, normas de seguridad eléctrica y mantenimiento preventivo. Estas materias están diseñadas para dotar a los estudiantes de las competencias necesarias para entender y gestionar proyectos eléctricos en entornos residenciales, comerciales e industriales.
        
                La formación práctica es un componente esencial en este programa. Los estudiantes participan en talleres especializados y realizan pasantías en empresas del sector eléctrico, donde tienen la oportunidad de aplicar sus conocimientos en proyectos reales. Estas experiencias refuerzan su capacidad para trabajar en equipo, resolver problemas técnicos y garantizar la ejecución segura de instalaciones eléctricas.
        
                El Politecnico Nuestra Señora del Perpetuo Socorro promueve en sus estudiantes la innovación y la sostenibilidad en el ámbito eléctrico. La formación incluye el uso de tecnologías avanzadas y un enfoque en energías limpias, contribuyendo así al desarrollo de soluciones responsables y eficientes. Los egresados de este programa son profesionales íntegros y comprometidos con la mejora de la infraestructura eléctrica y el cuidado del medio ambiente.`,
      },
    },
  };
  return {
    techniques,
  };
};

export default useTechniques;
