import React from 'react';

import './form-input.styles.scss'

const FormInput = ({ handleChange, Label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {
      Label ?
        (<label className={`${otherProps.value ? 'shrink' : ''} form-input-label`}>
          {Label}
        </label>)
      : null
    }
  </div>
)

export default FormInput;