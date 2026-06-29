import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Printer } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "he" ? "פרופיל חברה - RSTECH" : "Company Profile - RSTECH",
    robots: { index: false, follow: false },
  };
}

export default async function CompanyProfilePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isHe = locale === "he";

  return (
    <>
      {/* Print Button */}
      <div className="print:hidden bg-gray-100 p-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            {isHe ? "דפוס פרופיל החברה" : "Print Company Profile"}
          </h1>
          <p className="text-sm text-gray-600">
            {isHe ? "לחץ על הדפסה כדי להדפיס או לשמור כ-PDF" : "Click Print to save as PDF"}
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
        >
          <Printer className="w-5 h-5" />
          {isHe ? "הדפס" : "Print"}
        </button>
      </div>

      <div className="w-full min-h-screen bg-white p-0 m-0">
        {/* A4 Size Container - 210mm x 297mm */}
        <div className="mx-auto" style={{ width: "210mm", minHeight: "297mm" }}>
          {isHe ? <CompanyProfileHE /> : <CompanyProfileEN />}
        </div>

        {/* Print Styles */}
        <style jsx global>{`
          @media print {
            body {
              margin: 0;
              padding: 0;
              background: white;
            }
            .print-hide {
              display: none !important;
            }
            .company-profile {
              margin: 0;
              padding: 0;
              page-break-after: avoid;
              width: 210mm;
              height: 297mm;
              box-sizing: border-box;
            }
            @page {
              size: A4;
              margin: 0;
              padding: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
}

function CompanyProfileEN() {
  return (
    <div className="company-profile w-full h-full bg-white flex flex-col p-8 text-gray-800">
      {/* Header with Logo */}
      <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-blue-900">
        <Image
          src="/logo.svg"
          alt="RSTECH Logo"
          width={80}
          height={48}
          className="h-12 w-auto"
        />
        <div>
          <h1 className="text-2xl font-bold text-blue-900">RSTECH Electronics</h1>
          <p className="text-xs text-gray-600">Authorized Technology Representative in Israel</p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="mb-5">
        <h2 className="text-sm font-bold text-blue-900 mb-2">ABOUT US</h2>
        <p className="text-xs leading-relaxed">
          RSTECH Electronics Ltd is the authorized Israeli representative of three world-leading technology companies: W.L. Gore & Associates, Tsubaki Kabelschlepp, and JAE. We bring cutting-edge solutions to Israeli industries in medical devices, semiconductors, defense, aerospace, and industrial automation.
        </p>
      </div>

      {/* Products */}
      <div className="mb-5">
        <h2 className="text-sm font-bold text-blue-900 mb-2">PRODUCTS & SOLUTIONS</h2>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <h3 className="text-xs font-semibold text-gray-700 mb-1">W.L. Gore</h3>
            <ul className="text-xs text-gray-600 space-y-0.5">
              <li>• Cable assemblies & wires</li>
              <li>• Vents & membranes</li>
              <li>• High-frequency cables</li>
              <li>• Aerospace solutions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-gray-700 mb-1">Tsubaki Kabelschlepp</h3>
            <ul className="text-xs text-gray-600 space-y-0.5">
              <li>• Cable carriers</li>
              <li>• Cabling solutions</li>
              <li>• System integration</li>
              <li>• Technical support</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-xs font-semibold text-gray-700 mb-1">JAE (Japan Aviation Electronics)</h3>
            <p className="text-xs text-gray-600">Precision connectors & electronics for demanding applications</p>
          </div>
        </div>
      </div>

      {/* Strengths */}
      <div className="mb-5">
        <h2 className="text-sm font-bold text-blue-900 mb-2">OUR STRENGTHS</h2>
        <ul className="text-xs text-gray-700 space-y-1">
          <li className="flex gap-2">
            <span className="font-bold text-blue-900">✓</span>
            <span><strong>Authorized Distributor</strong> - Direct partnership with global leaders</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-blue-900">✓</span>
            <span><strong>Local Expertise</strong> - Israeli team with deep technical knowledge</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-blue-900">✓</span>
            <span><strong>Fast Support</strong> - Same-day quotes and technical assistance</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-blue-900">✓</span>
            <span><strong>Custom Solutions</strong> - Engineering support for specific applications</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-blue-900">✓</span>
            <span><strong>Quality Assured</strong> - 100% genuine, certified products</span>
          </li>
        </ul>
      </div>

      {/* Contact Information */}
      <div className="mt-auto pt-4 border-t border-gray-300">
        <h2 className="text-sm font-bold text-blue-900 mb-2">CONTACT INFORMATION</h2>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <p className="font-semibold text-gray-700">Address</p>
            <p className="text-gray-600">64 Ashkenazy St., Tel Aviv 6986928, Israel</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Phone</p>
            <p className="text-gray-600">+972-3-6490454</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Email</p>
            <p className="text-gray-600">info@rstech.co.il</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Website</p>
            <p className="text-gray-600">www.rstech.co.il</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 mt-3 pt-2 border-t border-gray-200">
        <p>RSTECH Electronics Ltd | Authorized Technology Representative</p>
      </div>
    </div>
  );
}

function CompanyProfileHE() {
  return (
    <div className="company-profile w-full h-full bg-white flex flex-col p-8 text-gray-800" dir="rtl">
      {/* Header with Logo */}
      <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-blue-900">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-blue-900">RSTECH אלקטרוניקס</h1>
          <p className="text-xs text-gray-600">נציג טכנולוגיה מורשה בישראל</p>
        </div>
        <Image
          src="/logo.svg"
          alt="RSTECH Logo"
          width={80}
          height={48}
          className="h-12 w-auto"
        />
      </div>

      {/* Company Overview */}
      <div className="mb-5">
        <h2 className="text-sm font-bold text-blue-900 mb-2">אודות החברה</h2>
        <p className="text-xs leading-relaxed">
          RSTECH אלקטרוניקס בע"מ היא הנציגה המורשה בישראל של שלוש חברות טכנולוגיה מובילות בעולם: W.L. Gore & Associates, Tsubaki Kabelschlepp ו-JAE. אנו מביאים פתרונות חדישים לתעשיות בישראל בתחומי רפואה, מוליכים למחצה, הגנה, אוויוקוסמוס ואוטומציה תעשייתית.
        </p>
      </div>

      {/* Products */}
      <div className="mb-5">
        <h2 className="text-sm font-bold text-blue-900 mb-2">מוצרים וחלופות</h2>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <h3 className="text-xs font-semibold text-gray-700 mb-1">W.L. Gore</h3>
            <ul className="text-xs text-gray-600 space-y-0.5">
              <li>• כבלים וחיתוך</li>
              <li>• פתחים וממברנות</li>
              <li>• כבלים בתדר גבוה</li>
              <li>• פתרונות אוויוקוסמוס</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-gray-700 mb-1">Tsubaki Kabelschlepp</h3>
            <ul className="text-xs text-gray-600 space-y-0.5">
              <li>• נושאי כבלים</li>
              <li>• פתרונות כבלים</li>
              <li>• אינטגרציית מערכות</li>
              <li>• תמיכה טכנית</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-xs font-semibold text-gray-700 mb-1">JAE (Japan Aviation Electronics)</h3>
            <p className="text-xs text-gray-600">מחברים ודיוק אלקטרוניקה ליישומים דורשיים</p>
          </div>
        </div>
      </div>

      {/* Strengths */}
      <div className="mb-5">
        <h2 className="text-sm font-bold text-blue-900 mb-2">הכוחות שלנו</h2>
        <ul className="text-xs text-gray-700 space-y-1">
          <li className="flex gap-2">
            <span className="font-bold text-blue-900">✓</span>
            <span><strong>מפיץ מורשה</strong> - שותפות ישירה עם מובילים גלובליים</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-blue-900">✓</span>
            <span><strong>מומחיות מקומית</strong> - צוות ישראלי עם ידע טכני עמוק</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-blue-900">✓</span>
            <span><strong>תמיכה מהירה</strong> - הצעות מחיר וסיוע טכני באותו יום</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-blue-900">✓</span>
            <span><strong>פתרונות מותאמים</strong> - תמיכה הנדסית ליישומים ספציפיים</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-blue-900">✓</span>
            <span><strong>איכות מובטחת</strong> - מוצרים אותנטיים מתואמים 100%</span>
          </li>
        </ul>
      </div>

      {/* Contact Information */}
      <div className="mt-auto pt-4 border-t border-gray-300">
        <h2 className="text-sm font-bold text-blue-900 mb-2">פרטי יצירת קשר</h2>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <p className="font-semibold text-gray-700">כתובת</p>
            <p className="text-gray-600">רחוב אשכנזי 64, תל אביב 6986928, ישראל</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">טלפון</p>
            <p className="text-gray-600">972-3-6490454+</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">דוא״ל</p>
            <p className="text-gray-600">info@rstech.co.il</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">אתר</p>
            <p className="text-gray-600">www.rstech.co.il</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 mt-3 pt-2 border-t border-gray-200">
        <p>RSTECH אלקטרוניקס בע״מ | נציג טכנולוגיה מורשה</p>
      </div>
    </div>
  );
}
