import type { FormTableType } from './types';

const formTableData: FormTableType = {
  title: 'User Information',
  subtitle: 'Please fill out the form below:',
  inputs: [
    {
      htmlFor: 'firstName',
      label: 'First Name',
      id: 'firstName',
      isRequired: true,
      placeholder: 'Enter your first name',
    },
    {
      htmlFor: 'lastName',
      label: 'Last Name',
      id: 'lastName',
      isRequired: true,
      placeholder: 'Enter your last name',
    },
    {
      htmlFor: 'email',
      label: 'Email Address',
      id: 'email',
      isRequired: true,
      placeholder: 'Enter your email address',
    },
    {
      htmlFor: 'phone',
      label: 'Phone Number',
      id: 'phone',
      placeholder: 'Enter your phone number',
    },
  ],
  textArea: {
    htmlFor: 'message',
    label: 'Enter your message',
    id: 'message',
      placeholder: 'Type your message here...',
        rows: 4,    
  },
  cancel: 'Cancel',
  save: 'Save Changes',
};

export default formTableData;