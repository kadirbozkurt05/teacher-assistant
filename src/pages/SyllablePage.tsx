import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SyllableInput } from "@/components/SyllableInput";
import { SyllableDisplay } from "@/components/SyllableDisplay";
import { Printer } from "lucide-react";
import { printContent } from "@/lib/print-utils";
import SyllableSentecenePage from "./SyllableSentecenePage";

export function SyllablePage() {
  const [words, setWords] = useState<string[]>([]);
  const [isSentence, setIsSentence] = useState<boolean>(false);

  const handlePrint = () => {
    const printArea = document.getElementById("printArea");
    if (printArea && words.length > 0) {
      printContent(printArea);
    }
  };

  return (
    <div>





      <header className="mb-8 text-center">

              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Hece Çalışması
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Kelimeleri ve cümleleri hecelerine ayırarak öğretim materyali oluşturun.
              </p>
            </header>
            <div className="container mx-auto py-8 px-4">
            <div className="max-w-4xl mx-auto">
            <label className="inline-flex mt-6 items-center cursor-pointer">
  <input type="checkbox" onClick={()=>setIsSentence(!isSentence)} className="sr-only peer"/>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{!isSentence?"Kelime Çevir" : "Cümle Çevir"}</span>
</label>
      {!isSentence ? (



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

      ) : (
        <SyllableSentecenePage />  
      )}
                </div>

              </div>
    </div>
  );
}
