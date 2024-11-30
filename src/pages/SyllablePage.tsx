import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SyllableInput } from '@/components/SyllableInput';
import { SyllableDisplay } from '@/components/SyllableDisplay';
import { Printer } from 'lucide-react';
import { printContent } from '@/lib/print-utils';

export function SyllablePage() {
  const [words, setWords] = useState<string[]>([]);

  const handlePrint = () => {
    const printArea = document.getElementById('printArea');
    if (printArea && words.length > 0) {
      printContent(printArea);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Hece Çalışması
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Kelimeleri hecelerine ayırarak öğretim materyali oluşturun
          </p>
        </header>

        <div className="space-y-8">
          <div className="space-y-4">
            <SyllableInput onWordsChange={setWords} />
            <Button 
              onClick={handlePrint}
              className="w-full"
              disabled={words.length === 0}
            >
              <Printer className="mr-2 h-4 w-4" />
              Yazdır
            </Button>
          </div>

          <div className="space-y-4">
            <SyllableDisplay words={words} />
          </div>
        </div>
      </div>
    </div>
  );
}