"use client";
import { useState } from 'react';
import Card from './Card';
import Button from './Button';
import styles from './Signup.module.css';

interface SignupProps {
  onAddUserAction: (newUser: {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    imageUrl: string;
  }) => void;
}

export default function Signup({ onAddUserAction }: SignupProps) {
  // State for form fields
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Form submit handler
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Basic validation to ensure username and password are provided
    if (!username || !password) return;

    // Create a new user object
    const newUser = {
      id: Date.now(), // Use timestamp for a simple unique id
      name,
      username,
      email,
      password,
      imageUrl,
    };

    // Pass the new user data to the parent handler
    onAddUserAction(newUser);

    // Clear form fields
    setName('');
    setUsername('');
    setEmail('');
    setPassword('');
    setImageUrl('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-3">
      <Card className={`${styles.input} w-full max-w-lg p-3 bg-white shadow-md rounded-md`}>
        <h1 className="text-4xl font-bold mb-6 text-center">Signup</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="username">Username</label>
          <input
            className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="imageLink">Image Link</label>
          <input
            className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            id="imageLink"
            type="url"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <Button type="submit">Sign Up</Button>
        </form>
      </Card>
    </div>
  );
}
