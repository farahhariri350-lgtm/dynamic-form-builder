import React, { useState } from 'react';
import DynamicForm from './components/DynamicForm';
import './App.css'; 

const sampleConfig = [
  {
    type: 'text',
    label: 'Full Name',
    name: 'fullName',
    placeholder: 'Enter your full name',
    validation: { required: true, minLength: 2, maxLength: 50 }
  },
  {
    type: 'email',
    label: 'Email Address',
    name: 'email',
    placeholder: 'example@domain.com',
    validation: { required: true, pattern: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$' }
  },
  {
    type: 'select',
    label: 'Country',
    name: 'country',
    options: [
      { value: 'sy', label: 'Syria' },
      { value: 'ae', label: 'UAE' },
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' }
    ],
    validation: { required: true }
  },
  {
    type: 'textarea', 
    label: 'Bio',
    name: 'bio',
    placeholder: 'Tell us about yourself',
    validation: { maxLength: 200 }
  },
  {
    type: 'number',
    label: 'Age',
    name: 'age',
    placeholder: '18+',
    validation: { min: 18, max: 99 }
  },
  {
    type: 'checkbox',
    label: 'I accept the terms and conditions',
    name: 'terms',
    validation: { required: true }
  }
];

function App() {
  const [userData] = useState({}); 

  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
  };

 return (
  <div className="app-wrapper">
  
    <div className="birds-container magic-layer">
     
      <span className="cloud" style={{ top: '5%', animationDelay: '0s' }}>☁️</span>
      <span className="cloud" style={{ top: '25%', animationDelay: '-10s' }}>☁️</span>
      
   
      <span className="bird" style={{ top: '15%', animationDelay: '0s' }}>🕊️</span>
      <span className="bird" style={{ top: '45%', animationDelay: '5s' }}>🕊️</span>
     
      <span className="star" style={{ top: '10%', left: '15%' }}>✨</span>
      <span className="star" style={{ bottom: '15%', right: '15%' }}>✨</span>
      <span className="star" style={{ top: '35%', left: '5%' }}>⭐</span>
    </div>

    <DynamicForm config={sampleConfig} onSubmit={handleSubmit} initialValues={userData} />
  </div>
);
}
export default App;