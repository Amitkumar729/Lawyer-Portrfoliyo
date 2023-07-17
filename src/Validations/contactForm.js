import * as  yup from 'yup';
export const FormValidation = yup.object().shape({
    name:yup.string()
    .required("Please enter the your name ")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email:yup.string().email("Please enter valid email id").required(" Please enter your email"),
    phone:yup.number().required('Please enter phone number')
    .typeError('Please enter phone number') 
    .test('len', 'Number must be of 10 digit', val => val.toString().length === 10),
    company:yup.string().required("Company name is required").min(4),
    message:yup.string().required("Please enter some message").min(10)

}).required()