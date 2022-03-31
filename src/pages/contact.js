import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6nfah8x', 'template_zcwzhml', form.current, '3pyQkdjSwmy5SPOPW')
        .then((result) => {
            console.log(result.text);
            
        }, (error) => {
            console.log(error.text);
        });
        setName('')
        setEmail('')
        setMessage('')
    };
  return (
    <div className='div' id='contact'>
        <div className='card1'>
            <span>Please Contact Me</span>
            <div className='flex-div'>
                <div className='flex-items'>
        <form ref={form} onSubmit={sendEmail}>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="label">Name</label>
  <input type="text" className="form-control" name='user_name' value={name}  onChange={(e)=>{setName(e.target.value)}}/>
</div>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="label">Email address</label>
  <input type="email" className="form-control" name='user_email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="label">Message</label>
  <textarea className="form-control" name='message' value={message} onChange={(e)=>{setMessage(e.target.value)}} rows="3"></textarea>
</div>
      <button className="btn btn-primary" type="submit">Submit form</button>
    </form>
    </div>

    
    </div>
    </div>
    </div>
  )
}

export default Contact