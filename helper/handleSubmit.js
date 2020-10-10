
import axios from 'axios';
import Swal from 'sweetalert2';

export default function onSubmit (data, e) {

  if(data.metodoPago === 'paypal'){
    if(parseInt(localStorage.getItem('payment_approved')) !== 1 ){
      Swal.fire('Error!','Debe completar el pago a través de Paypal antes de poder continuar','error');
      return false;
    }
  }

      Swal.fire({
        title: 'Registrando...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
        Swal.showLoading();
        }
    });

    const url = 'https://ajedrezlatino.com/entrenamientointegral/api/index.php';

    console.log(data.metodo_de_pago);

    let error;
    try {

      axios({
        method: 'POST',
        url: url,
        data: JSON.stringify(data)
      }).then(function (res) {
        console.log(res.data);
  
        if(res.data.result){
          Swal.fire({
            title: 'Correcto!',
            allowEscapeKey: false,
            allowOutsideClick: false,
            text: res.data.message,
            icon: 'success'
          });
          localStorage.removeItem('payment_approved')
          e.target.reset();
 
        }else{

          Swal.fire('Error!','Ha ocurrido un error inesperado!, pruebe más tarde','error');
        }
  
      }).catch(err => {

        Swal.fire('Error!','Ha ocurrido un error inesperado!, pruebe más tarde','error');
      });


    } catch (err) {

      Swal.fire('Error!','Ha ocurrido un error inesperado!, pruebe más tarde','error');
    }

  };

/*   export default onSubmit; */