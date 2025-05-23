'use client';
import { useEffect, useState } from 'react';

interface TerminalProps {
  lines: string[];
  typingSpeed?: number; // ms per character
  lineDelay?: number;   // ms between lines
}

export default function Terminal({
  lines,
  typingSpeed = 30,
  lineDelay = 400,
}: TerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const fullLine = lines[currentLineIndex];
    let charIndex = 0;

    const interval = setInterval(() => {
      setCurrentText((prev) => prev + fullLine[charIndex]);
      charIndex++;

      if (charIndex >= fullLine.length) {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayedLines((prev) => [...prev, fullLine]);
          setCurrentText('');
          setCurrentLineIndex((prev) => prev + 1);
        }, lineDelay);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentLineIndex]);

  return (
    <div className="h-64 overflow-y-auto bg-black p-4 font-mono text-green-500 rounded-md shadow-md border border-green-700 space-y-1 text-sm sm:text-base">
      {displayedLines.map((line, i) => (
        <p key={i}>&gt; {line}</p>
      ))}
      {currentText && (
        <p>
          &gt; {currentText}
          <span className="inline-block w-2 bg-green-500 ml-1" style={{ opacity: cursorVisible ? 1 : 0 }} />
        </p>
      )}
    </div>
  );
}
