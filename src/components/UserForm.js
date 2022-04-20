import Input from './Input'
import Button from './Button'
import useFormulario from '../hooks/useFormulario'


const UserForm = ({submit}) =>{
    const[formulario,handleChange, reset]= useFormulario({
        name:'',
        lastname:'',
        email:''
      })
      const handleSubmit=(e) =>{
        e.preventDefault()
        submit(formulario)
        reset()
      }
      return(
        <form onSubmit={handleSubmit}>
              <Input
              label="Name"
              name="name"
              value={formulario.name}
              onChange={handleChange}
              placeholder='Name'
              />
              <Input
              label="Surname"
              name="lastname"
              value={formulario.lastname}
              onChange={handleChange}
              placeholder='Surname'
              />
              <Input
              label="Email"
              name="email"
              value={formulario.email}
              onChange={handleChange}
              placeholder='Email'
              />
              <Button>Send</Button>

            </form>
      )
    
}

export default UserForm