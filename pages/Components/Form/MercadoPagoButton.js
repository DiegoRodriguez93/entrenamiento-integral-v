import React from 'react';
import useScript from './../../../hooks/useScript'

const MercadoPagoButton = (props) => {

   let paymentId = props.plan === 'clase' ? '159728357-9e943d64-a356-46aa-b513-aac38c23950d' : '159728357-31b0542a-afc3-4154-8e6f-f74f7f5b19bc';

    useScript(
        'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js',
        'mlButton',
        paymentId
        );

    return (
        <div id="mlButton">
        </div>
    )

}

export default MercadoPagoButton;