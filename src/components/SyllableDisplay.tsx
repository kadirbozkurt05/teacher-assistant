import { Card } from '@/components/ui/card';

interface SyllableDisplayProps {
  words: string[];
}

const colors = [
  'bg-pink-100',
  'bg-blue-100',
  'bg-green-100',
  'bg-purple-100',
  'bg-yellow-100',
];

export function SyllableDisplay({ words }: SyllableDisplayProps) {
  return (
    <div id="printArea" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {words.map((word, wordIndex) => (
        <Card key={wordIndex} className="print-card p-4 flex justify-center items-center hover:shadow-lg transition-shadow duration-200">
          <div className="syllable-container flex gap-2 flex-wrap justify-center">
            {word.split(' ').map((syllable, syllableIndex) => (
              <span
                key={syllableIndex}
                className={`syllable ${colors[syllableIndex % colors.length]} px-3 py-1 rounded-lg text-lg font-semibold transform hover:scale-105 transition-transform duration-200`}
              >
                {syllable}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}