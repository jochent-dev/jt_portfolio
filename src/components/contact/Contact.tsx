import Typed from 'react-typed'
import './index.css'
import { useState } from 'react'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/c0736760-11b7-11ee-b0a7-9f000c4c1540"; // TODO - update to the correct endpoint

export default function Contact(){
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e: any) {
    e.preventDefault();

    const inputs = e.target.elements;
    const data: { [key: string]: string } = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err)
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
      <div className='thanks_page'>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
        </div>
      </>
    );
  }

  return (
    <>
    <h1><Typed strings={[
                "Cont."]}
                typeSpeed={100}
                backSpeed={50}
                loop /></h1>
    <div className='contact_main'>
        <form className='contact_form'
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
        >

            <input className='contact_input' type="text" placeholder="Name" name="name" required />


            <input className='contact_input' type="email" placeholder="Email" name="email" required />


            <textarea className='contact_input' placeholder="Message" name="message" required />

            <button className='contact_btn' type="submit"> Send a message </button>
        </form>
    </div>
    </>
  );
};