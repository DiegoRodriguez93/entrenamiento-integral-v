import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'

import { PayPalButton } from "react-paypal-button-v2";

const PaypalButtonDivClase = () => {

  const CLIENT_ID = "AUd6ud49pxERqxa7_S54l0Rhh8hL8rciXBhwr80csg8kATSVnTV_d_7zpapy6y80-z9vhkLpgLggSMWA&currency=USD";
  const CLIENT_ID_NOSUB = "AVTSeFtXLGY82yWbCkIGVszUS8kzbjkB6L5WcGu0cDXEw-esRje4lYYAqbIXJLmFdUTUGZ16kVBYUfsc&currency=USD"; 

  return (
      <div className="input-group cien"  >
        <div>
          <PayPalButton
            amount="10"
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {

              Swal.fire({
                title: 'Correcto!',
                text: 'Hemos procesado el pago correctamente',
                icon: 'success'
              });

              localStorage.setItem('payment_approved', 1);

            }}
            options={{
              clientId: CLIENT_ID_NOSUB
            }}
          />
        </div>
      </div>

 )
}

export default PaypalButtonDivClase;
