"use client"

import { useForm } from 'react-hook-form';

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      to: '',
      subject: '',
      text: '',
    },
  });

  const onSubmit = (data:any) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="to">To:</label>
      <input id="to" {...register('to')} defaultValue="" />
      <label htmlFor="subject">Subject:</label>
      <input id="subject" {...register('subject')} defaultValue="" />
      <label htmlFor="text">Message:</label>
      <input id="text" {...register('text')} defaultValue="" />

      <input type="submit" />
    </form>
  );
};

export default EmailForm;
