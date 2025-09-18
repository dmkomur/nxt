'use client';
import { Button } from '@headlessui/react';

import React from 'react';
interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <div>
      <h1>{`Shit happens ${error.message}`}</h1>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
