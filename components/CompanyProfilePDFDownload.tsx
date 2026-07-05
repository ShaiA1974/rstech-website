"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";

interface Props {
  locale: string;
}

export default function CompanyProfilePDFDownload({ locale }: Props) {
  const [busy, setBusy] = useState(false);

  const handleDownloadPDF = async () => {
    const element = document.getElementById("company-profile-content");
    if (!element || busy) return;

    setBusy(true);
    try {
      // html2pdf.js touches `window` at import time, so it must be loaded
      // in the browser only — a top-level import breaks the server build.
      const html2pdf = (await import("html2pdf.js")).default;

      const filename =
        locale === "he" ? "RSTECH-Profile-HE.pdf" : "RSTECH-Profile-EN.pdf";

      await html2pdf()
        .set({
          margin: 0,
          filename,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { format: "a4", orientation: "portrait", unit: "mm" },
        })
        .from(element)
        .save();
    } finally {
      setBusy(false);
    }
  };

  return (
    <button
      onClick={handleDownloadPDF}
      disabled={busy}
      className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold disabled:opacity-60 cursor-pointer"
    >
      {busy ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
      {locale === "he" ? "הורד PDF" : "Download PDF"}
    </button>
  );
}
