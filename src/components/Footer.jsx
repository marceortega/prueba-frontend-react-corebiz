import React from 'react'
import logo_alt from '../statics/logo_alt.png'
import vtex from '../statics/vtex.png'
import mail from '../statics/mail.png'
import heatset from '../statics/heatset.png'
import '../styles/Footer.css'
const Footer = () => {
    return (
      
      <div className="container-footer">
     
        <div className="row ">
          <div className="col-md-8 offset-md-2  ">
          
            <div className="container">
              <div className="row">
                 <div className="col-4 titulo">
              <h1>Localizacao</h1>
              <div className="paragraphFooter">
                  <p>Avenida Andromeda,2000. Bloco 6 e 8</p>
                  <p>Alphavile SP</p>
                  <p>brasil@corebiz.ag</p>
                  <p>+55 11 3090 1039</p>
              </div>
          </div>
          <div className="col-4 d-grid gap-2  colBtn">
              
              < button type="button" class="btn btn-light">
              <img className="mail" src={mail} alt="mail" />
              ENTRE EM CONTACTO 
              </button>
              
              <button type="button" class="btn btn-light">
              <img className="heatset" src={heatset} alt="heatset" />
                FALE COM O NOSSO CONSULTOR ONLINE </button>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-6">
              <p className="CreateBy">Create by </p>
            <img className="logo_alt" src={logo_alt} alt="logoCorebiz" />
              </div>
              <div className="col-6">
              <p className="CreateBy">Powered by</p>
              <img className="vtex" src={vtex} alt="logoVtex" />
              </div>

            </div>
            {/* <p className="CreateBy">Create by </p>
            <img className="logo_alt" src={logo_alt} alt="logoCorebiz" />
              <p>Powered by</p>
              <img className="vtex" src={vtex} alt="logoVtex" /> */}
          </div>

              </div>

            </div>



          </div>














          {/* <div className="col-4">
              <h1>Localizacao</h1>
              <div>
                  <p>Avenida Andromeda,2000. Bloco 6 e 8</p>
                  <p>Alphavile SP</p>
                  <p>brasil@corebiz.ag</p>
                  <p>+55 11 3090 1039</p>
              </div>
          </div>
          <div className="col-4">
              <p>icono correo</p>
              <button>
              ENTRE EM CONTACTO 
              </button>
              <p>icono fono</p>
              <button>FALE COM O NOSSO CONSULTOR ONLINE </button>
          </div>
          <div className="col-4">
            <p>Create by </p>
            <img className="logo_alt" src={logo_alt} alt="logoCorebiz" />
              <p>Powered by</p>
              <img className="vtex" src={vtex} alt="logoVtex" />
          </div> */}







        </div>
      </div>
    );
}

export default Footer
