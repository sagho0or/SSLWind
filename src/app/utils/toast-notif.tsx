import { Toaster } from 'react-hot-toast';
import React from 'react';

export default function IToastNotif() {
  return (<Toaster position="top-right"
                   reverseOrder={false} />);
}