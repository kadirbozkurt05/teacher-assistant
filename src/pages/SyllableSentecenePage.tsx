import React, { useState } from "react";
import { Printer } from "lucide-react";
import { processText } from "@/lib/textProcesser";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { printContentSentence } from "@/lib/print-utils";

function SyllableSentecenePage() {
  const [inputText, setInputText] = useState("");

  const handlePrint = () => {
    const printArea = document.getElementById("output");
    if (printArea && inputText.length > 0) {
      printContentSentence(printArea);
    }
  };

  return (
    <div>
      <Textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="min-h-[200px] font-mono"
        placeholder="Heceleri ayırmak için tire (-) kullanarak metninizi buraya yazın.&#10;Örnek:&#10;A-li bak.&#10;A-li a-ta bak.&#10;A-li si-yah a-ta bak."
      />

      <div className="mt-4 flex justify-end print:hidden">
        <Button
          onClick={handlePrint}
          className="w-full"
          disabled={inputText.length === 0}
        >
          <Printer className="mr-2 h-4 w-4" />
          Yazdır
        </Button>
      </div>

      <div className="mt-8 text-center space-y-2 font-comic" id="output">
  {inputText.split("\n").map((line, index) => {
    let isRed = true; // Track color across words in a line

    return (
      <div key={index} className="text-lg">
        {processText(line).map((word, wordIndex) => (
          <React.Fragment key={wordIndex}>
            <span className="inline-block mr-2"> {/* Adjust spacing here */}
              {word.syllables.map((syllable, syllableIndex) => {
                const syllableClass = isRed ? "text-red-600" : "text-black";
                isRed = !isRed; // Alternate the color
                return (
                  <span key={syllableIndex} className={syllableClass}>
                    {syllable}
                  </span>
                );
              })}
            </span>
          </React.Fragment>
        ))}
      </div>
    );
  })}
</div>

    </div>
  );
}

export default SyllableSentecenePage;
