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
                <li>Paypal, tarjeta débito o crédito internacional <span className="precio-tachado">USD 80</span> USD 68</li>
                <li>Transferencia bancaria solo Argentinos <span className="precio-tachado">$AR 9600</span> $AR 8160</li>
                <li>Mercado Pago Argentinos <span className="precio-tachado">$AR 9600</span> $AR 8160</li>
            </ul>
            <h4>Precio por clase</h4>
            <ul>
                <li>Paypal, tarjeta débito o crédito internacional USD 10</li>
                <li>Transferencia bancaria solo Argentinos $AR 1200</li>
                <li>Mercado Pago Argentinos $AR 1200</li>
            </ul>
        </div>


        <hr className="hr" />

        </section>
    )

}

export default Pricing;