import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginPage = () => {
  const navigate = useNavigate();

  const loginSchema = z.object({
    email: z.string().email().nonempty(),
    password: z.string().min(6, 'Password must be at least 6 characters long').nonempty(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          type="email" 
          placeholder="Email" 
          {...register('email')} 
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

        <input 
          type="password" 
          placeholder="Password" 
          {...register('password')} 
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}

        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
};

export default LoginPage;
