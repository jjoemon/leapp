"use client";

import { useState } from "react";
import Image from "next/image";
import styles from '@/app/ui/home.module.css';
import { inter } from '@/app/ui/fonts';


export default function Page() {
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Submitting...');

    const res = await fetch('/api/test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, title, description }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      setStatus(`Failed: ${errorData.error || res.statusText}`);
      return;
    }

    setStatus('Entry submitted successfully!');
    setUserId('');
    setTitle('');
    setDescription('');
  }

  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Submit Entry</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <input type="text" placeholder="User ID" value={userId}
          onChange={(e) => setUserId(e.target.value)} required className="border p-2 rounded" />
        <input type="text" placeholder="Title" value={title}
          onChange={(e) => setTitle(e.target.value)} required className="border p-2 rounded" />
        <textarea placeholder="Description" value={description}
          onChange={(e) => setDescription(e.target.value)} required className="border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </main>
  );
}
