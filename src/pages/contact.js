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
            setName('')
            setEmail('')
            setMessage('')
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='div' id='contact'>
        <div className='card1'>
            <p>Please Contact Me</p>
            <div className='flex-div'>
                <div className='flex-items'>
        <form ref={form} onSubmit={sendEmail}>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="label">Name</label>
  <input type="text" class="form-control" name='user_name' value={name}  onChange={(e)=>{setName(e.target.value)}}/>
</div>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="label">Email address</label>
  <input type="email" class="form-control" name='user_email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="label">Message</label>
  <textarea class="form-control" name='message' value={message} onChange={(e)=>{setMessage(e.target.value)}} rows="3"></textarea>
</div>
      <button class="btn btn-primary" type="submit">Submit form</button>
    </form>
    </div>

    <div className='flex-items'>
       
        <div className='flex-img'> 
    <a href="https://mobile.facebook.com/abdulmanan.maulana"><img src={require('./logo/fb.png')} /></a>
    <a href="https://www.instagram.com/abdulmananmaulana/"><img src={require('./logo/ig.png')} /></a>
    <a href="https://wa.me/62895344014457"><img src={require('./logo/wa.png')} className='img-wa'  /></a>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Contact