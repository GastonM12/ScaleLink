import "../assets/css/Contacto.css";

const Contacto = () => {
   return (
      <section className="contacto">
         <div className="content-cotacto">
            <div className="contato-datos">
               <h2>Contacto</h2>
               <p className="contacto-descripcion">
                  Estamos listos para escuchar sobre tu próximo proyecto. Ya sea
                  que necesites mejorar tu presencia en línea, lanzar un nuevo
                  producto o rediseñar tu sitio web, nuestro equipo está aquí
                  para ayudarte. Completa el formulario o utiliza nuestros
                  datos de contacto para comunicarte con nosotros.
               </p>
               <h4>Correo</h4>
               <p>gaston_mori_96@hotmail.com</p>
               <h4>Telefono</h4>
               <p>3536560562</p>
               <h4>Direccion</h4>
               <p>Santa Fe</p>
            </div>
            <div className="content-form">
               <form className="formulario">
                  <h3 className="titulo-formulario">Formulario de contacto</h3>
                  <label className="label-input" htmlFor="nombre">
                     Nombre
                  </label>
                  <input type="text" id="nombre" className="inputUno" name="nombre" />
                  <label className="label-input" htmlFor="ciudad">
                     Ciudad
                  </label>
                  <input type="text" id="ciudad" className="inputUno" name="ciudad" />
                  <label className="label-input" htmlFor="correo">
                     Correo
                  </label>
                  <input type="email" id="correo" className="inputUno" name="correo" />
                  <label className="label-input" htmlFor="mensaje">
                     Mensaje
                  </label>
                  <textarea id="mensaje" className="inputUno" name="mensaje" />
                  <button className="btn-enviar" type="submit">Enviar</button>
               </form>
            </div>
         </div>
      </section>
   );
};

export default Contacto;
