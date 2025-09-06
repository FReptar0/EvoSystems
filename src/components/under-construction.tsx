import { title, subtitle } from "@/components/primitives";

export const UnderConstruction = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-slate-900">
      <div className="inline-block max-w-xl text-center">
        <span className={title({ class: "text-white" })}>¡Bienvenido a&nbsp;</span>
        <span className={title({ color: "blue" })}>EvoSystems!&nbsp;</span>
        <br />
        <span className={title({ class: "text-white" })}>Estamos construyendo algo increíble.</span>
        <div className={subtitle({ class: "mt-4 text-slate-400" })}>
          Pronto podrás explorar nuestros servicios de desarrollo de software 
          y soluciones tecnológicas innovadoras.
        </div>
      </div>
    </section>
  );
};