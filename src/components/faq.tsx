'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo son las fechas de vencimiento?",
    answer: "El período de vigencia es 31 días. Si abonás, por ejemplo, el día 20 del mes, tu cuota vence el 20 del próximo mes. Tenés un periodo de 5 días de tolerancia para abonar a partir de esa fecha. Luego de esos días, se cobra un recargo."
  },
  {
    question: "¿Qué pasa si pierdo la membresía (el carnet)?",
    answer: "Es necesario que presentes el carnet o membresía cada vez que venís a entrenar. Para abonar la cuota se debe presentar sí o sí. En caso de pérdida, se deberá abonar un recargo por la reposición."
  },
  {
    question: "Si soy menor de edad, ¿puedo ir al gimnasio?",
    answer: "Sí, con una autorización firmada por tus padres podés entrenar con nosotros. Las autorizaciones se piden directamente en la recepción al momento de inscribirte."
  },
  {
    question: "Si pago por mes, ¿cuántas veces por semana puedo venir?",
    answer: "Podés venir los días que prefieras. El pase es completamente libre, no hay límite de tiempo para entrenar ni para completar tu rutina."
  }
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function FAQ() {
  const { ref, inView } = useInView(0.15);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div 
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.1s',
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-600/40 bg-red-600/10 mb-6">
            <HelpCircle size={16} className="text-red-500" />
            <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Dudas</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Frecuentes</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Todo lo que necesitás saber antes de empezar a entrenar con nosotros.
          </p>
        </div>

        {/* Accordion list */}
        <div 
          className="space-y-4 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.3s',
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'bg-red-950/20 border-red-900/50' : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                >
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  <div 
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 bg-white/5 ${
                      isOpen ? 'rotate-180 bg-red-600 text-white' : 'text-gray-400'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
