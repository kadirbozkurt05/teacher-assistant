export function printContent(content: HTMLElement | null) {
  if (!content) {
    console.error("Content is null or undefined.");
    return;
  }

  // Open a new window
  const printWindow = window.open('', '_blank', 'width=1024,height=768');
  if (!printWindow || !printWindow.document) {
    alert("Pop-ups izinleri kapalıç Lütfen bu site içib pop-up'lara izin verin");
    return;
  }

  // Define styles and HTML for the printable content
  const styles = `
    <style>
      @media print {
        @page { 
          size: A4;
          margin: 1.5cm;
        }
        body { 
          font-family: system-ui, -apple-system, sans-serif;
          margin: 0;
          padding: 20px;
        }
        .print-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr); /* Two columns per row */
          gap: 1rem;
        }
        .print-card {
          break-inside: avoid;
          page-break-inside: avoid;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .syllable-container {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .syllable {
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 1.125rem;
          font-weight: 600;
        }
        .bg-pink-100 { background-color: #fce7f3 !important; -webkit-print-color-adjust: exact; }
        .bg-blue-100 { background-color: #dbeafe !important; -webkit-print-color-adjust: exact; }
        .bg-green-100 { background-color: #dcfce7 !important; -webkit-print-color-adjust: exact; }
        .bg-purple-100 { background-color: #f3e8ff !important; -webkit-print-color-adjust: exact; }
        .bg-yellow-100 { background-color: #fef9c3 !important; -webkit-print-color-adjust: exact; }
      }
    </style>
  `;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>www.esmaogretmen.com     Instagram:esmaogretmen35</title>
        ${styles}
      </head>
      <body>
        <div class="print-grid">
          ${content.innerHTML}
        </div>
        <script>
          window.onload = () => {
            setTimeout(() => {
              window.print();
              window.close();
            }, 500);
          };
        </script>
      </body>
    </html>
  `;

  // Write content to the new window
  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();

  // Focus on the new window to ensure the print dialog appears
  printWindow.focus();
}

export function printContentSentence(content: HTMLElement) {
  if (!content) {
    console.error("No content to print.");
    return;
  }

  const printWindow = window.open("", "_blank", "width=800,height=600");
  if (!printWindow) {
    console.error("Failed to open a new window. Pop-ups might be blocked.");
    return;
  }

  const styles = `
    <style>
      @media print {
        @page {
          size: A4;
          margin: 1.5cm;
        }
        body {
          font-family: "Comic Sans MS", "Comic Sans";
          margin: 0;
          padding: 20px;
          text-align:center;
          font-size:32px;
          word-spacing:0.3em;
        }
        .text-red-600 { color: #dc2626; }
        .text-black { color: #000; }
        .font-comic { font-family: "Comic Sans MS", cursive, sans-serif; }
        .mr-1 { margin-right: 0.25rem; }
      }
    </style>
  `;

  // Write the content to the new window
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Print</title>
        ${styles}
      </head>
      <body>
        <div>
          ${content.outerHTML}
        </div>
        <script>
          window.onload = () => {
            setTimeout(() => {
              window.print();
              window.close();
            }, 250);
          };
        </script>
      </body>
    </html>
  `);

  printWindow.document.close();
}

