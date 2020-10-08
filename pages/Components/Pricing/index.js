import React from 'react';  

const Pricing = () => {

    return(
        <section className="pricing">

        <div className="col-12 heading">
                <h2>precio:</h2>
        </div>

        <div className="pricing-subtitle">
            <span>Incluye 18 hs de clase en el grupo seleccionado (Sub 1800 o Supra 1800)<br/>
                    + 4 hs de actividades especiales <br/>
                    + la grabación de las mismas<br/>
                    + las actividades especiales
            </span>
        </div>

        <div className="pricing-metodos-de-pago">
            <h4>Métodos de pago</h4>
            <ul>
                <li>Paypal, tarjeta débito o crédito internacional USD 80</li>
                <li>Transferencia bancaria en todo Europa €75</li>
                <li>Transferencia bancaria solo Argentinos $AR 8000</li>
                <li>Mercado Pago Argentinos $AR 8000</li>
            </ul>
            <h4>Precio por clase</h4>
            <ul>
                <li>Paypal, tarjeta débito o crédito internacional USD 10</li>
                <li>Transferencia bancaria en todo Europa  €10 </li>
                <li>Transferencia bancaria solo Argentinos $AR 1000</li>
                <li>Mercado Pago Argentinos $AR 1000</li>
            </ul>
        </div>


        <hr className="hr" />

        </section>
    )

}

export default Pricing;