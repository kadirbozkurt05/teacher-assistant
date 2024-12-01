import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';

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
      <Textarea
        id="syllableInput"
        value={input}
        onChange={handleInputChange}
        placeholder="Hecelere ayrılmış kelimeleri girin (her kelime için yeni satır):&#10;ke li me&#10;ör nek&#10;he ce"
        className="min-h-[200px] font-mono"
      />
    </div>
  );
}