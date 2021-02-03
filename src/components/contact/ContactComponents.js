import { useField } from 'formik';

// Styles
import { Label, Input, Textarea, Error } from "../../styles/components/contactStyles";

export const TextInput = ({label, req, ...props }) => {
  const [field, meta] = useField(props);
  return(
    <>
      <Label htmlFor={props.id || props.name}>
        <span>{label}</span> 
        {req && <span className="required">{`*${req}`}</span>}
      </Label>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? 
        (<Error className="error">{meta.error}</Error>)
        : null
      }
    </>
  );
}

export const TextArea = ({label, req, ...props}) => {
  const [field, meta] = useField(props);
  return(
    <>
      <Label htmlFor={props.id || props.name}>
        <span>{label}</span> 
        {req && <span className="required">{`*${req}`}</span>}
      </Label>
      <Textarea {...field} {...props}></Textarea>
      {meta.touched && meta.error ? 
        (<Error className="error">{meta.error}</Error>)
        : null
      }
    </>
  );
}