import React from 'react';

const handleChange = (e) =>{
    const {name,value} = e.target;
    
}

const handleSubmit = (e) => {
    e.preventDefault();
    
} 

const contactPage = () => (
    <div className='contact-page'>
     Contact Page
     <form onSubmit={handleSubmit}>
        <input type='text' className ='name' placeholder='Full Name'/>
        <input type='email' className ='email' placeholder='Email'/>
        <input type='text' className ='subject' placeholder='Subject'/>
        <textarea className='text-area' placeholder='Message'/>
        <input type='submit' className='submit' value='SEND' />
     </form>
    </div>
)

export default contactPage