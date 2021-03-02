import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Content
import Content from "../../content/contact.json";

// Context
import LanguageContext from "../../context/LanguageContext";

// Components
import { TextInput, TextArea } from "./ContactComponents";

// Styles
import { ContactFormDiv, Button, ContactDetails, Message } from "../../styles/components/contactStyles.js";


const ContactForm = ({transition}) => {

  const history = useHistory();

  // App language
  const [language] = useContext(LanguageContext);

  // Content
  const data = Content[language];

  // Message states
  const [messageSent, setMessageSent] = useState(false);
  const [messageFailed, setMessageFailed] = useState(false);
  const [counter, setCounter] = useState(10);

  // Regex for phone validation
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  // Variables for obfuscation
  const emailName = "contact";
  const emailDomain = "alejandrologuercio.com"

  // Send email with EmailJS
  const sendEmail = (values) => {
    
    let templateParams = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      message: values.message,
      to: "Alejandro"
    }

    emailjs.send(
      "alejandro_loguercio",
      "contact_form",
      templateParams,
      "user_uriqfbnnMSH3UzcLOyyIR"
    ).then(() => {
      // setMessageSent(true);
      // setMessageFailed(false);
      history.push("/thank-you");
      
    }, () => {
        setMessageSent(false);
        setMessageFailed(true);
    });
  }

  // Show appropriate message when contact form submitted
  useEffect(() => {
    if((messageSent || messageFailed) && counter >= 0) {
      const interval = setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);

      setTimeout(() => {
        setMessageSent(false);
        setMessageFailed(false);
      }, 10000)

      return () => {
        clearInterval(interval);
      }
 
    }
  }, [messageSent, messageFailed, counter]);


  return (
    <ContactFormDiv
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{transition, duration: 1, delay: 1}}
    >
        <h2>{data.title}</h2>
        <Formik 
          initialValues={{
            name: "",
            email: "",
            phone: "",
            message: ""
          }}
          validationSchema={Yup.object({
            name: Yup.string()
            .required(`${data.required}`),
            email: Yup.string()
            .email(`${data.errors.email}`)
            .required(`${data.required}`),
            phone: Yup.string()
            .matches(phoneRegExp, `${data.errors.phone}`),
            message: Yup.string()
            .required(`${data.required}`)
          })} 
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            sendEmail(values);
            resetForm();
          }}
        >
        <Form>
          <div>
            <TextInput
              req={data.required}
              label={data.name}
              name="name"
              type="text"
              placeholder="e.g. Alejandro Loguercio"
            />
          </div>
          <div>
            <TextInput
              req={data.required}
              label={data.email}
              name="email"
              type="email"
              placeholder="e.g. contact@alejandrologuercio.com"
            />
          </div>
          <div>
            <TextInput
              label={data.phone}
              name="phone"
              type="tel"
              placeholder="e.g. 069910511139"
            />
          </div>
          <div>
            <TextArea 
              req={data.required}
              label={data.message}
              name="message"
              
            />
          </div>
          <div>
            <Button type="submit">Send Message</Button>
          </div>
        </Form>
      </Formik>
      {messageSent && (
          <Message className="success">
            <span>{data.success}</span>
            <span>{data.count} {counter} {data.seconds}</span>
          </Message>
        )}
        {messageFailed && (
          <Message className="error">
            <span>{data.error}</span>
            <span>{data.count} {counter} {data.seconds}</span>
          </Message>
        )}
        <p className="privacy">
         <Link to="/privacy-policy">{data.privacyLink}</Link> {data.privacyText}
        </p>
        <hr/>
        <ContactDetails>
          <h2>{data.subtitle}</h2>
          <a href="tel:+4369910511139">
            <span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
              >
                <path d="M20.487,17.14l-4.065-3.696c-0.399-0.363-1.015-0.344-1.391,0.043l-2.393,2.461c-0.576-0.11-1.734-0.471-2.926-1.66 c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394c0.388-0.376,0.406-0.991,0.043-1.391L6.859,3.513 c-0.363-0.401-0.98-0.439-1.391-0.087l-2.17,1.861C3.125,5.461,3.022,5.691,3.008,5.936c-0.015,0.25-0.301,6.172,4.291,10.766 C11.305,20.707,16.323,21,17.705,21c0.202,0,0.326-0.006,0.359-0.008c0.245-0.014,0.475-0.117,0.648-0.291l1.86-2.171 C20.926,18.119,20.887,17.503,20.487,17.14z">
                </path>
              </svg>
            </span>
            <span style={{direction: "rtl", unicodeBidi: "bidi-override"}}>93111501996 3400</span>
          </a>
          
          <a href={`mailto: ${emailName}@${emailDomain}`}>
            <span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
            >
              <path d="M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z">
              </path>
              <path d="M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z"></path>
            </svg>
            </span>
            <span>{emailName}@{emailDomain}</span>
          </a>
        </ContactDetails>
    
  </ContactFormDiv>
  )
}

export default ContactForm
