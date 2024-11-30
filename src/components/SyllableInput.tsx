import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

interface SyllableInputProps {
  onWordsChange: (words: string[]) => void;
}

export function SyllableInput({ onWordsChange }: SyllableInputProps) {
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
    
    // Split by newlines and filter empty lines
    const words = value
      .split('\n')
      .filter(line => line.trim() !== '');
      
    onWordsChange(words);
  };

  return (
    <div className="space-y-2">
      <label 
        htmlFor="syllableInput" 
        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        Hecelere ayrılmış kelimeleri girin (her kelime için yeni satır):
      </label>
      <Textarea
        id="syllableInput"
        value={input}
        onChange={handleInputChange}
        placeholder="ke li me&#10;ör nek&#10;he ce"
        className="min-h-[200px] font-mono"
      />
    </div>
  );
}