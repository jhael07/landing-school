import {
  NavbarGroupOptionContent,
  NavbarOption,
  SubMenuSectionTitle,
} from "@/app/(landing)/components/navbar/Navbar";
import useNavStore from "@/app/stores/NavStore";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const useNavbar = () => {
  const { closeSubMenu, setOptionHover } = useNavStore();

  const handleOptionSelect = () => {
    setOptionHover("");
    closeSubMenu();
  };

  const generateMenuOption = (name: string, path: string, key?: string): NavbarOption => ({
    name,
    path,
    id: key ?? path,
  });

  const AcademicOfferOptions = [
    generateMenuOption(
      "Técnico en Comercio y Mercadeo",
      "tec-comercio-mercadeo",
      "tec-comercio-mercadeo"
    ),
    generateMenuOption(
      "Técnico en Gestión Logística y Transporte",
      "tec-logistica-transporte",
      "tec-logistica-transporte"
    ),
    generateMenuOption(
      "Técnico en Servicios Turísticos",
      "tec-servicios-turisticos",
      "tec-servicios-turisticos"
    ),
    generateMenuOption(
      "Técnico en Desarrollo y Administración de Aplicaciones Informáticas",
      "tec-desarollo-apps-informaticas",
      "tec-desarollo-apps-informaticas"
    ),
    generateMenuOption(
      "Técnico en Cuidados de Enfermería y Promoción de la Salud",
      "tec-enfermeria",
      "tec-enfermeria"
    ),
    generateMenuOption(
      "Técnico en Gestión Administrativa y Tributaria",
      "tec-administrativa-tributaria",
      "tec-administrativa-tributaria"
    ),
    generateMenuOption(
      "Técnico en Instalaciones Eléctricas",
      "tec-instalaciones-electricas",
      "tec-instalaciones-electricas"
    ),
  ];

  const admissionsOptions = [
    generateMenuOption("Requisitos de admision", "/requisitos-admision"),
    generateMenuOption("Pasos para inscribir", "/pasos-para-inscribir"),
    generateMenuOption("Formulario de admision", "Formulario-de-admision"),
  ];

  const rightsAndResponsibilities = [
    generateMenuOption("Derechos de los estudiantes", "/derechos-estudiantes"),
    generateMenuOption("Deberes de los estudiantes", "/deberes-estudiantes"),
    generateMenuOption("Aspecto religioso", "/aspecto-religioso"),
    generateMenuOption("Civismo", "/civismo"),
    generateMenuOption("Uso de los uniformes", "/uso-uniformes"),
    generateMenuOption("Apariencia de los estudiantes", "/apariencia-estudiantes"),
  ];

  const rulesOptions = [
    generateMenuOption("Evaluaciones", "/Evaluaciones"),
    generateMenuOption("Aspectos conductuales", "/aspectos-conductuales"),
    generateMenuOption("Lo que no está permitido", "/no-esta-permitido"),
    generateMenuOption("El uso de aparatos electrónicos", "/uso-de-aparatos-electronicos"),
    generateMenuOption("Lo que está prohibido", "/prohibido"),
    generateMenuOption("Sanciones por incumplimiento", "/sanciones"),
  ];

  const InstitutionOptions = [
    generateMenuOption("Misión, visión y valores", "/mission-vission-values"),
    generateMenuOption("Historia", "/History"),
    generateMenuOption("Equipo", "/staff"),
  ];

  const logoImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pnDEctbmpFBsNN3LJ2jUQlqvMXjy_saqZA&s";

  const navbarOptions: NavbarOption[] = [
    {
      name: "Oferta Academica",
      id: "oferta-academica",
      children: (
        <NavbarGroupOptionContent
          currentOptionSelected="Oferta Academica"
          style={{ right: -100, padding: 10, width: "50dvw" }}
        >
          <div className="flex gap-x-4 items-center">
            <div className="p-2 grid gap-1 w-6/12 ">
              {AcademicOfferOptions.map(({ path, name }) => (
                <Link
                  key={name}
                  onClick={handleOptionSelect}
                  href={`/oferta-academica/${path!}`}
                  className="navbar-link "
                >
                  {name}
                  <FaAngleRight />
                </Link>
              ))}
            </div>

            <div className="w-6/12 h-full  rounded-lg overflow-hidden">
              <img src={logoImg} className="w-full h-full object-cover" />
            </div>
          </div>
        </NavbarGroupOptionContent>
      ),
    },
    {
      name: "Admisiones",
      id: "admisiones",
      children: (
        <NavbarGroupOptionContent
          currentOptionSelected="Admisiones"
          style={{ right: -200, padding: 10, width: "40dvw" }}
        >
          <div className="flex gap-x-4 items-start">
            <div className="p-2 grid gap-1 w-6/12">
              {admissionsOptions.map(({ path, name }) => (
                <Link key={name} href={path!} onClick={handleOptionSelect} className="navbar-link">
                  {name}
                  <FaAngleRight />
                </Link>
              ))}
            </div>
            <div className="w-6/12 h-40  rounded-lg overflow-hidden">
              <img
                src="https://us.images.westend61.de/0001411501pw/portrait-of-confident-young-male-student-in-corridor-of-university-MASF19101.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </NavbarGroupOptionContent>
      ),
    },
    {
      name: "Reglamentos",
      id: "reglamentos",
      children: (
        <NavbarGroupOptionContent
          currentOptionSelected="Reglamentos"
          style={{ right: -100, padding: 10, width: "50dvw" }}
        >
          <div className="flex gap-x-4 items-start">
            <div className="p-2 grid gap-1 w-6/12">
              <SubMenuSectionTitle>Derechos, Deberes y Responsabilidades</SubMenuSectionTitle>
              {rightsAndResponsibilities.map(({ path, name }) => (
                <Link key={name} href={path!} className="navbar-link" onClick={handleOptionSelect}>
                  {name}
                  <FaAngleRight />
                </Link>
              ))}
            </div>

            <div className="p-2 grid gap-1 w-6/12">
              <SubMenuSectionTitle>Reglamentos</SubMenuSectionTitle>
              {rulesOptions.map(({ path, name }) => (
                <Link key={name} href={path!} className="navbar-link" onClick={handleOptionSelect}>
                  {name}
                  <FaAngleRight />
                </Link>
              ))}
            </div>
          </div>
        </NavbarGroupOptionContent>
      ),
    },
    { name: "Egresados", path: "/egresados", id: "egresados" },
    {
      name: "Nosotros",
      id: "nosostros",
      children: (
        <NavbarGroupOptionContent
          currentOptionSelected="Nosotros"
          style={{ right: 0, padding: 10, width: "20dvw" }}
        >
          <div className="p-2 grid gap-1 w-full">
            {InstitutionOptions.map(({ path, name }) => (
              <Link key={name} href={path!} className="navbar-link" onClick={handleOptionSelect}>
                {name}
                <FaAngleRight />
              </Link>
            ))}
          </div>
        </NavbarGroupOptionContent>
      ),
    },
  ];

  return {
    navbarOptions,
    logoImg,
  };
};

export default useNavbar;
