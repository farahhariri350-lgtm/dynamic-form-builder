import React, { useState } from 'react';
import { useFormBuilder } from '../hooks/useFormBuilder';
import FormField from './FormField';

const DynamicForm = ({ config, onSubmit, initialValues = {} }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  
  // المنطق يبقى كما هو: مراقبة القيم الأولية وتدفق البيانات
  const context = useFormBuilder(config, initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    if (context.validateAll()) {
      onSubmit(context.values);
      setShowSuccess(true);     
      
   
      setTimeout(() => setShowSuccess(false), 4000);
    }
  };

  return (
    <div className="form-container">
    
      <h1 style={{ textAlign: 'center', color: '#be185d', marginBottom: '30px' }}>
        Dynamic Form Builder
      </h1>

 
      {showSuccess && (
        <div className="success-msg">
          ✅ تم إرسال البيانات بنجاح (وهي محفوظة الآن)!
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
       
        {config.map((field, index) => (
          <div key={`${field.name}-${index}`} className="field-wrapper">
            <FormField field={field} context={context} />
          </div>
        ))}
        
      
        <div className="button-group">
          <button type="submit" className="btn-submit">
            Submit
          </button>
          
          <button 
            type="button" 
            onClick={context.resetForm} 
            className="btn-reset"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;