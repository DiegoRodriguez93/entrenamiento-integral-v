import React, { useState } from 'react';  
import { useForm } from 'react-hook-form';
import PaypalButtonDiv from './PaypalButtonDiv';
import MercadoPagoButton from './MercadoPagoButton';
import PaypalButtonDivClase from './PaypalButtonDivClase';
import onSubmit from './../../../helper/handleSubmit'

const Form = () => {

    const [ chooseClass, setChooseClass ] = useState(false);
    const [metodoDePago, setMetodoDePago] = useState(null);
    const [plan, setPlan] = useState(null);

    const { register, handleSubmit, errors,  formState } = useForm();
/*     const onSubmit = data => console.log(data); */

    if(formState.isSubmitSuccessful && metodoDePago != null){
      setMetodoDePago(null);
      setChooseClass(false); 
      setPlan(null); 
    } 

    return (
        <section className="form row">

    <div className="col-12 heading center">
        <h2>inscribirme:</h2>
    </div>

    <div className="col-lg-4 sm-0"></div>
    <form className="col-lg-4 sm-12" onSubmit={handleSubmit(onSubmit)}>

        <label>Nombre Completo:</label>
      <input type="text" placeholder="Nombre completo" name="name" ref={register({required: "Ingrese su nombre completo", maxLength: 180})} />
      <div className="error-input">{errors.name && errors.name.message}</div>

      <label>Email:</label>
      <input type="text"
                    name="email"
                    ref={register({ pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, required: "Ingrese un email válido" })}
                />
      <div className="error-input">{errors.email && errors.email.message}</div>

      <label>Usuario de lichess.org:</label>
      <input type="text" placeholder="Usuario de lichess.org" name="lichess" ref={register({required: "Ingrese un Usuario de lichess.org",})} />
      <div className="error-input">{errors.lichess && errors.lichess.message}</div>

      <label>Celular:</label>
      <input type="number" placeholder="Celular" name="celular" ref={register({required: "Ingrese un celular de contacto"})} />
      <div className="error-input">{errors.celular && errors.celular.message}</div>

      <label>País:</label>
      <input type="text" placeholder="País" name="pais" ref={register({required: "Ingrese su país de residencia"})} />
      <div className="error-input">{errors.pais && errors.pais.message}</div>

      <label>Elo FIDE:(opcional)</label>
      <input type="number" name="eloFide" ref={register()} />

      <label>Grupo:</label>
      <input name="grupo" type="radio" value="sub1800" ref={register({ required: "Seleccione un grupo" })}/>Sub 1800
      <input name="grupo" type="radio" value="supra1800" ref={register({ required: "Seleccione un grupo" })}/>Supra 1800<br/>
      <div className="error-input">{errors.grupo && errors.grupo.message}</div>

      <label>Plan:</label>
      <input name="plan" onClick={(e)=>{setChooseClass(false);setPlan(e.target.value)}} type="radio" value="completo" ref={register({ required: "Seleccione un plan" })}/>Curso completo
      <input name="plan" onClick={(e)=>{setChooseClass(true);setPlan(e.target.value)}} type="radio" value="clase" ref={register({ required: "Seleccione un plan" })}/>Una clase<br/>
      <div className="error-input">{errors.plan && errors.plan.message}</div>
      
        <label style={{display : chooseClass ? 'block' : 'none' }}>Elija la clase:</label> 
      <select name="clase" style={{display : chooseClass ? 'block' : 'none' }} ref={register({ required: true })}>
        <option value="El cambio de plan">El cambio de plan</option>
        <option value="Ataque Fegatello">Ataque Fegatello</option>
        <option value="La pareja de Alfiles">La pareja de Alfiles</option>
        <option value="Sacrificios de Dama">Sacrificios de Dama</option>
        <option value="Ideas originales en la escocesa">Ideas originales en la escocesa</option>
        <option value="El método de eliminación">El método de eliminación</option>
        <option value="Sacrificios de piezas menores">Sacrificios de piezas menores</option>
        <option value="Petrosian India de Rey">Petrosian India de Rey</option>
        <option value="Atancando como Alphazero">Atancando como Alphazero</option>
      </select>

      <label>Método de pago:</label>
      <input name="metodoPago" onClick={(e) => setMetodoDePago(e.target.value)} type="radio" value="paypal" ref={register({ required: "Seleccione un método de pago" })}/>Paypal<br/>
      <input name="metodoPago" onClick={(e) => setMetodoDePago(e.target.value)} type="radio" value="transferenciaBancaria" ref={register({ required: "Seleccione un método de pago" })}/>Transferencia bancaria<br/>
      <input name="metodoPago" onClick={(e) => setMetodoDePago(e.target.value)} type="radio" value="mercadoPago" ref={register({ required: "Seleccione un método de pago" })}/>Mercado Pago ARG<br/>
      <div className="error-input">{errors.metodoPago && errors.metodoPago.message}</div>

      {metodoDePago === 'mercadoPago' && plan === 'completo' ? <MercadoPagoButton plan="completo" /> : '' }  
      {metodoDePago === 'mercadoPago' && plan === 'clase' ? <MercadoPagoButton plan="clase" /> : '' }  

      {metodoDePago === 'paypal' && plan === 'completo' ? <PaypalButtonDiv/> : '' }    
      {metodoDePago === 'paypal' && plan === 'clase' ? <PaypalButtonDivClase/> : '' }    

      {metodoDePago === 'transferenciaBancaria' ? (<b className="transferencia-bancaria">Los datos para la transferencia le serán enviados por mail.</b>) : ''}


      <button className="button" type="submit">Registrarme</button>
    </form>
    <div className="col-lg-4 sm-0"></div>

    

        </section>
    )

}

export default Form;