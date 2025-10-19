import "../assets/css/Contacto.css";

const Contacto = () => {
   return (
      <div className="contacto">
         <div className="content-cotacto">
            <div className="contato-datos">
               <h3>Contacto</h3>
               <p className="contacto-descripcion">
                  Estamos listos para escuchar sobre tu próximo proyecto. Ya sea
                  que necesites mejorar tu presencia en línea, lanzar un nuevo
                  producto o rediseñar tu sitio web, nuestro equipo está aquí
                  para ayudarte. Completa el formulario o utiliza nuestros
                  datos de contacto para comunicarte con nosotros.
               </p>
               <h5>Correo</h5>
               <p>gaston_mori_96@hotmail.com</p>
               <h5>Telefono</h5>
               <p>3536560562</p>
               <h5>Direccion</h5>
               <p>Santa Fe</p>
            </div>
            <div className="content-form">
               <form className="formulario">
                  <h2 className="titulo-formulario">Formulario de contacto</h2>
                  <label className="label-input" htmlFor="Nombre">
                     Nombre
                  </label>
                  <input type="text" className="inputUno" name="nombre" />
                  <label className="label-input" htmlFor="Nombre">
                     Cuidad
                  </label>
                  <input type="text" className="inputUno" name="nombre" />
                  <label className="label-input" htmlFor="Nombre">
                     Correo
                  </label>
                  <input type="text" className="inputUno" name="nombre" />
                  <label className="label-input" htmlFor="Nombre">
                     Mensaje
                  </label>
                  <input type="text" className="inputUno" name="nombre" />
                  <button className="btn-enviar" type="submit">Enviar</button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Contacto;
