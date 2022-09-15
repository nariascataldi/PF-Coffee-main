import { useForm } from "react-hook-form";
import { edadValidator } from "./validator";


const FormularioUsuario = () => {

  const { register, formState: { errors }, watch, handleSubmit } = useForm({
    defaultValues: {
      nombre: '',
      apellido: '',
      direccion: '',
    }
  });

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  }

  const incluirCUIT = watch('incluirCUIT');

  return <div>
    <h2>Editar Perfil</h2>
    {/* <p>Nombre: {watch('nombre')}</p> */}
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre</label>
        <input type="text" placeholder="Brendan" {...register('nombre', {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,

        })} />
        {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
        {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 20 caracteres</p>}
        {errors.nombre?.type === 'pattern' && <p>El campo nombre debe tener menos de 20 caracteres</p>}
      </div>
      <div>
        <label>Apellido</label>
        <input type="text" placeholder="Eich" {...register('apellido', {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i
        })} />
        {errors.apellido?.type === 'required' && <p>El campo apellido es requerido</p>}
        {errors.apellido?.type === 'maxLength' && <p>El campo apellido debe tener menos de 20 caracteres</p>}
        {errors.apellido?.type === 'pattern' && <p>El campo apellido debe tener menos de 20 caracteres</p>}
      </div>
      <div>
        <label>Dirección</label>
        <input type="text" placeholder="Calle Mocha 1995, Salta, Argentina" {...register('direccion', {
          required: true
        })} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" placeholder="javascript@brave.etc" {...register('email', {
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
        })} />
        {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
      </div>
      <div>
        <label>Teléfono</label>
        <input type="tel" placeholder="+54 9 387 123 1234" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
      </div>
      <div>
        <label>Fecha Nacimiento</label>
        <input type="text" placeholder="javascript@brave.etc" {...register('edad', {
          validate: edadValidator
        })} />
        {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
      </div>
      <div>
        <label>¿Incluir CUIT?</label>
        <input type="checkbox" {...register('incluirCUIT')} />
      </div>
      {incluirCUIT && (
        <div>
          <label>CUIT</label>
          <input type="number" placeholder="javascript@brave.etc" {...register('CUIT')} />
        </div>
      )}
      <input type="submit" value="Enviar" />
    </form>
  </div>
}

export default FormularioUsuario;