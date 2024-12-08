import React, { useState } from 'react';
import { Mail, Apple, Facebook, ChevronRight } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { toast } from 'react-hot-toast';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const { signup } = useAuth();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !name) {
      toast.error('Please fill in all fields');
      return;
    }
    
    const success = await signup(email, password, name);
    if (success) {
      setShowEmailForm(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    toast.error(`${provider} sign up not implemented yet`);
  };

  // ... (rest of the component code remains the same)