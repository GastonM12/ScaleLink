import { useEffect, useState } from "react";

const phrases = [
   "your web design team",
   "soluciones de IA",
   "diseño estratégico digital",
];

const Typewriter = () => {
   const [text, setText] = useState("");
   const [isDeleting, setIsDeleting] = useState(false);
   const [phraseIndex, setPhraseIndex] = useState(0);
   const [speed, setSpeed] = useState(100);

   useEffect(() => {
      const currentPhrase = phrases[phraseIndex];

      let timeout;

      if (!isDeleting) {
         // Escribiendo
         if (text.length < currentPhrase.length) {
            timeout = setTimeout(() => {
               setText(currentPhrase.substring(0, text.length + 1));
            }, speed);
         } else {
            // Espera antes de borrar
            timeout = setTimeout(() => {
               setIsDeleting(true);
            }, 2000);
         }
      } else {
         // Borrando
         if (text.length > 0) {
            timeout = setTimeout(() => {
               setText(currentPhrase.substring(0, text.length - 1));
            }, speed / 2);
         } else {
            // Cambia de frase
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
         }
      }

      return () => clearTimeout(timeout);
   }, [text, isDeleting, phraseIndex]);

   return <span className="lineaHomeTeam">{text}</span>;
};

export default Typewriter;
