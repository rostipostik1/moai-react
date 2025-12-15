import React from 'react'
import { ServiceButtons } from './ServiceButtons'
import { formConfig, formFields, serviceOptions } from '../../utils/data'
import { InputField } from './InputField'
import { FormField } from './FormField'

const ContactForm = () => {
    return (
        <form>
            {formConfig.map((section) => (
                <div key={section.section} className="form-group">
                    {section.fields.map((field) => (
                        <InputField key={field.name} {...field} />
                    ))}
                </div>
            ))}

            <h4>service</h4>
            <ServiceButtons services={serviceOptions} />
            {formFields.map((field) => (
                <FormField key={field.id} field={field} />
            ))}

            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm