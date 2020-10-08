import React from 'react';  
import { useForm } from 'react-hook-form';

const Form = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className="form row">

    <div className="col-12 heading center">
        <h2>inscribirme:</h2>
    </div>

    <div className="col-lg-4 sm-0"></div>
    <form className="col-lg-4 sm-12" onSubmit={handleSubmit(onSubmit)}>

        <label>Nombre Completo:</label>
      <input type="text" placeholder="Nombre completo" name="name" ref={register({required: true, maxLength: 180})} />

      <label>Email:</label>
      <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />

      <label>Usuario de lichess.org:</label>
      <input type="text" placeholder="Usuario de lichess.org" name="lichess" ref={register({required: true})} />

      <label>Celular:</label>
      <input type="number" placeholder="Celular" name="celular" ref={register({required: true, minLength: 6, maxLength: 12})} />

      <label>País:</label>
      <input type="text" placeholder="País" name="pais" ref={register({required: true})} />

      <label>Elo FIDE:(opcional)</label>
      <input type="text" name="eloFide" ref={register()} />

      <label>Grupo:</label>
      <input name="grupo" type="radio" value="sub1800" ref={register({ required: true })}/>Sub 1800
      <input name="grupo" type="radio" value="supra1800" ref={register({ required: true })}/>Supra 1800<br/>

      <label>Plan:</label>
      <input name="plan" type="radio" value="completo" ref={register({ required: true })}/>Curso completo
      <input name="plan" type="radio" value="clase" ref={register({ required: true })}/>Una clase<br/>

        <label>Elija la clase:</label>
      <select name="clase" ref={register({ required: true })}>
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
      <input name="plan" type="radio" value="completo" ref={register({ required: true })}/>Paypal<br/>
      <input name="plan" type="radio" value="clase" ref={register({ required: true })}/>Transferencia bancaria<br/>
      <input name="plan" type="radio" value="clase" ref={register({ required: true })}/>Mercado Pago ARG<br/>



      <button type="submit">Registrarme</button>
    </form>
    <div className="col-lg-4 sm-0"></div>

    

        </section>
    )

}

export default Form;