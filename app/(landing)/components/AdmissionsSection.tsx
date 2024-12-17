const AdmissionsSection = () => {
  return (
    <section className="xl:h-[100dvh] 2xl:max-h-[44rem] relative">
      <div className="xl:flex gap-4  px-6 sm:px-14 2xl:max-w-[100rem] mx-auto">
        <div className=" gap-8 flex flex-col w-full">
          <h1 className="text-5xl font-bold">Admisiones</h1>
          <p className="text-justify leading-7 text-gray-700">
            ¡Bienvenido al Politécnico PONSCA! Nuestro proceso de admisiones está diseñado para
            brindarte la oportunidad de formar parte de una institución comprometida con la
            excelencia académica y el desarrollo integral de sus estudiantes. En PONSCA, ofrecemos
            una educación técnica y profesional de calidad, enfocada en prepararte para los retos
            del mundo laboral y fomentar tus habilidades personales. Únete a nuestra comunidad
            educativa y da el primer paso hacia un futuro lleno de oportunidades. ¡Tu camino hacia
            el éxito comienza aquí!
          </p>

          <button
            className="mt-4 p-4 border-primary-600 bg-primary-600 hover:bg-secondary-50 hover:text-secondary-700 hover:text-2xl active:scale-90
          hover:border-secondary-600 transition-all text-primary-50 border font-semibold text-xl rounded-lg"
          >
            Iniciar proceso de admision
          </button>
        </div>
        <div className="w-full  relative h-96 mt-10">
          <img
            src="https://www.uwinnipeg.ca/accepted-students/images/whats-university-like-accepted-students.jpg"
            className="w-full h-full object-cover rounded-2xl xl:absolute xl:-right-16"
          />
        </div>

        <div className="w-full absolute left-0 bottom-0 -z-10 bg-[url('/wave.svg')] bg-no-repeat bg-cover h-[70%] 3xl:h-full"></div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
