"use client";

import { Download } from "lucide-react";
import html2pdf from "html2pdf.js";

interface Props {
  locale: string;
}

export default function CompanyProfilePDFDownload({ locale }: Props) {
  const handleDownloadPDF = () => {
    const element = document.getElementById("company-profile-content");
    if (!element) return;

    const filename = locale === "he" ? "RSTECH-Profile-HE.pdf" : "RSTECH-Profile-EN.pdf";

    const options = {
      margin: 0,
      filename: filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { format: "a4", orientation: "portrait", unit: "mm" },
      pagebreak: { mode: "avoid", before: ".pagebreak" },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <button
      onClick={handleDownloadPDF}
      className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
    >
      <Download className="w-5 h-5" />
      {locale === "he" ? "הורד PDF" : "Download PDF"}
    </button>
  );
}
