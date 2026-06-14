export interface ArticleContent {
  title: string;
  description: string;
  categoryLabel: string;
  backToKB: string;
  readTime: string;
  sections: ArticleSection[];
  checklist: ChecklistItem[];
  conclusion: {
    title: string;
    paragraphs: string[];
  };
  cta: {
    title: string;
    paragraphs: string[];
    buttonText: string;
  };
  share: string;
}

interface ArticleSection {
  id: string;
  title: string;
  content: string[];
  subsections?: ArticleSubsection[];
  box?: {
    type: "info" | "warning" | "success" | "tip";
    title?: string;
    items?: string[];
    content?: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
}

interface ArticleSubsection {
  title: string;
  content?: string[];
  items?: string[];
}

interface ChecklistItem {
  id: string;
  label: string;
  description: string;
}

export const articleContentEN: ArticleContent = {
  title: "How to Choose the Right Cable Carrier for Your System",
  description: "A complete engineering guide to selecting cable carriers based on number of cables, bending radius, travel length, and total cost of ownership.",
  categoryLabel: "Cable Carriers",
  backToKB: "Back to Knowledge Base",
  readTime: "8 min read",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      content: [
        "Cable carriers—also called energy chains or cable management systems—are critical components in industrial automation, manufacturing, and machinery. Yet many engineers and procurement teams still approach cable carrier selection reactively, choosing based on price alone or defaulting to what \"worked last time.\"",
        "The reality? Selecting the right cable carrier can reduce downtime by 40%, extend system lifespan by 5+ years, and lower total cost of ownership significantly. This guide walks you through the systematic approach that leading manufacturers use."
      ]
    },
    {
      id: "requirements",
      title: "1. Understand Your Application Requirements",
      content: [
        "Before evaluating any cable carrier, map out what your system actually demands."
      ],
      box: {
        type: "info",
        title: "Ask these questions:",
        items: [
          "Motion type: Is this linear motion, rotary, or hybrid? A pick-and-place robotic arm has different demands than a rotating turntable.",
          "Cycle speed: How many cycles per minute? High-speed operations (100+ cycles/min) need carriers designed for fatigue resistance.",
          "Travel distance: Short strokes (under 1m) vs. long-range travel (10m+) affect material choice and chain design.",
          "Environmental exposure: Will the carrier face temperature extremes, moisture, oils, chemicals, or UV?",
          "Space constraints: How much room do you have for the carrier system?",
          "Duty cycle: Is this 8-hour, 24/7, or episodic operation?"
        ]
      }
    },
    {
      id: "material",
      title: "2. Select the Right Material and Profile",
      content: [
        "Once you understand your application, material selection becomes logical rather than arbitrary."
      ],
      subsections: [
        {
          title: "Material Options",
          items: [
            "Plastic (Thermoplastic Polymer) - Best for: General industrial automation, food/beverage, pharmaceutical. Lifespan: 3-7 years depending on duty cycle",
            "Steel - Best for: Heavy industrial, foundries, extreme temperature. Lifespan: 7-15+ years with proper maintenance",
            "Composite (Hybrid) - Best for: Demanding environments needing balanced performance"
          ]
        }
      ]
    },
    {
      id: "parameters",
      title: "3. The Three Critical Decision Parameters",
      content: [
        "Before you evaluate performance metrics, nail down these three numbers. They drive everything and determine which carriers are physically compatible."
      ],
      subsections: [
        {
          title: "Parameter 1: Number of Cables",
          content: [
            "Count every single cable that will run through the carrier: power cables, signal cables, hydraulic hoses, pneumatic tubing, fiber optic lines, cooling lines.",
            "Why this matters: Under-sizing forces cables to compress, creating EMI interference, insulation damage, reduced lifespan (30-50% shorter), and intermittent connection failures."
          ]
        },
        {
          title: "Parameter 2: Bending Radius",
          content: [
            "The radius is the tightest curve your cable carrier will bend around. Get this wrong and you'll overstress the structure and cables."
          ],
          box: {
            type: "warning",
            title: "Critical measurement mistake:",
            content: "Many engineers measure from the motor or pivot point to the edge of the cable carrier, not the center. Measure to the cable centerline, not the carrier edge."
          }
        },
        {
          title: "Parameter 3: Travel Length",
          content: [
            "This is the total distance the cables move per cycle. It affects cost, speed, stress, and room requirements."
          ],
          box: {
            type: "success",
            title: "Real-world example (Assembly Robot):",
            items: [
              "Robot base to work table: 2.8m horizontal travel → 3.5m carrier needed",
              "Drop height: 0.6m vertical travel → 1.0m carrier needed",
              "Budget: 4.5m × $100/meter = $450 in carrier material"
            ]
          }
        }
      ]
    }
  ],
  checklist: [
    { id: "1", label: "Cable count documented", description: "Listed all cables" },
    { id: "2", label: "Bending radius measured", description: "Found tightest curve and measured to cable centerline" },
    { id: "3", label: "Travel length calculated", description: "Added full range + slack for each axis" },
    { id: "4", label: "Carrier minimum radius verified", description: "Selected carrier's minimum ≥ your radius" },
    { id: "5", label: "Load capacity confirmed", description: "Total cable weight fits within rating" },
    { id: "6", label: "Cable accommodation verified", description: "All cables fit safely with 20% spare capacity" }
  ],
  conclusion: {
    title: "Conclusion",
    paragraphs: [
      "Choosing a cable carrier isn't a commodity purchase—it's a systems decision affecting reliability, maintenance costs, and operational uptime for years. Engineers who approach it methodically consistently report 30-40% fewer cable-related failures.",
      "The best cable carrier is the one designed specifically for your application, not the cheapest option."
    ]
  },
  cta: {
    title: "Ready to Select Your Cable Carrier?",
    paragraphs: [
      "At RSTECH Electronics, we specialize in matching Tsubaki Kabelschlepp cable carrier systems to complex industrial applications across Israel.",
      "With your three critical parameters (cable count, radius, travel length), our engineering team can quickly recommend the optimal solution."
    ],
    buttonText: "Schedule a Consultation"
  },
  share: "Share:"
};

export const articleContentHE: ArticleContent = {
  title: "כיצד לבחור את נושא הכבלים הנכון למערכת שלך",
  description: "מדריך הנדסי מלא לבחירת נושאי כבלים על בסיס מספר כבלים, רדיוס כיפוף, אורך נסיעה ועלות בעלות כוללת.",
  categoryLabel: "נושאי כבלים",
  backToKB: "חזור לבסיס הידע",
  readTime: "8 דקות קריאה",
  sections: [
    {
      id: "introduction",
      title: "הקדמה",
      content: [
        "נושאי כבלים — הנקראים גם שרשראות אנרגיה או מערכות ניהול כבלים — הם רכיבים קריטיים באוטומציה תעשייתית, ייצור ומכונות. עם זאת, הרבה מהנדסים וצוותי רכש עדיין מתקרבים לבחירת נושא הכבלים בצורה תגובתית, בוחרים על בסיס מחיר בלבד או חוזרים לחלופה שכבר עבדה בעבר.",
        "המציאות? בחירת נושא כבלים נכון יכולה להפחית זמן סרק ב-40%, להאריך את אורך חיי המערכת ב-5+ שנים, ולהוריד באופן משמעותי את העלות הכוללת של ההחזקה. המדריך הזה מלווה אתכם דרך הגישה השיטתית שהיצרנים המובילים משתמשים בה."
      ]
    },
    {
      id: "requirements",
      title: "1. הבנת דרישות היישום שלך",
      content: [
        "לפני הערכת כל נושא כבלים, תמפו מה המערכת שלכם בעצם דורשת."
      ],
      box: {
        type: "info",
        title: "שאלו את השאלות האלה:",
        items: [
          "סוג התנועה: האם זו תנועה ליניארית, סיבובית או היברידית? זרוע רובוט בחירה והנחה שונה מטרנספורמטור סיבובי.",
          "מהירות מחזור: כמה מחזורים לדקה? פעולות במהירות גבוהה (100+ מחזורים/דקה) דורשות נשאים שעוצבו לעמידה בעייפות.",
          "מרחק הנסיעה: מהלכים קצרים (פחות מ-1 מטר) מול נסיעה למרחקים ארוכים (10+ מטרים) משפיעים על בחירת החומר ועיצוב השרשרת.",
          "חשיפה סביבתית: האם הנושא יתמודד עם טמפרטורות קיצוניות, לחות, שמנים, כימיקלים או קרינה UV?",
          "אילוצי מרחב: כמה מקום יש לכם עבור מערכת הנושא?",
          "מחזור חובה: האם זו פעולה 8 שעות, 24/7 או אפיזודית?"
        ]
      }
    },
    {
      id: "material",
      title: "2. בחירת החומר והפרופיל הנכונים",
      content: [
        "ברגע שאתם מבינים את היישום שלכם, בחירת החומר הופכת להיות לוגית ולא שרירותית."
      ],
      subsections: [
        {
          title: "אפשרויות חומר",
          items: [
            "פלסטיק (פולימר תרמופלסטי) - מתאים ל: אוטומציה תעשייתית כללית, מזון ומשקאות, תרופות. אורך חיים: 3-7 שנים תלוי במחזור החובה",
            "פלדה - מתאימה ל: תעשייה כבדה, יציקות, טמפרטורה קיצונית. אורך חיים: 7-15+ שנים עם תחזוקה תקינה",
            "מרוכב (היברידי) - מתאים ל: סביבות דורשניות הצריכות ביצועים מאוזנים"
          ]
        }
      ]
    },
    {
      id: "parameters",
      title: "3. שלושת פרמטרי ההחלטה הקריטיים",
      content: [
        "לפני שתעריכו מדדי ביצוע, קבעו את שלושת המספרים האלה. הם מניעים הכל וקובעים אילו נשאים תואמים פיזית."
      ],
      subsections: [
        {
          title: "פרמטר 1: מספר כבלים",
          content: [
            "ספרו כל כבל אחד שיעבור דרך הנושא: כבלי חשמל, כבלי אות, צינורות הידראוליים, צינורות פנאומטיים, קווי סיב אופטי, קווי קירור.",
            "למה זה משנה: הצמצום של גודל גורם לכבלים להידחס, יוצר הפרעות EMI, נזק לבידוד, אורך חיים מופחת (30-50% קצר יותר), וכשלונות חיבור לסירוגין."
          ]
        },
        {
          title: "פרמטר 2: רדיוס כיפוף",
          content: [
            "הרדיוס הוא העקומה הצמודה ביותר שנושא הכבלים שלכם יתכופף סביבה. קבלו זאת בטעות וגם תדחקו יתר על המידה את המבנה והכבלים."
          ],
          box: {
            type: "warning",
            title: "שגיאת מדידה קריטית:",
            content: "הרבה מהנדסים מודדים מנקודת המנוע או הציר לקצה נושא הכבלים, לא מהמרכז. מודדו למרכז הכבל, לא לקצה הנושא."
          }
        },
        {
          title: "פרמטר 3: אורך הנסיעה",
          content: [
            "זהו המרחק הכולל שהכבלים עוברים לכל מחזור. זה משפיע על עלות, מהירות, מתח ודרישות חדרים."
          ],
          box: {
            type: "success",
            title: "דוגמה מעולם האמת (רובוט הרכבה):",
            items: [
              "בסיס רובוט לשולחן עבודה: 2.8 מטרים נסיעה אופקית → נושא של 3.5 מטרים הדרוש",
              "גובה הנפילה: 0.6 מטרים נסיעה אנכית → נושא של 1.0 מטרים הדרוש",
              "תקציב: 4.5 מטרים × 100$/מטר = $450 בחומר נושא"
            ]
          }
        }
      ]
    }
  ],
  checklist: [
    { id: "1", label: "מספר כבלים תואם", description: "רשמתם את כל הכבלים" },
    { id: "2", label: "רדיוס כיפוף נמדד", description: "מצאתם את העקומה הצמודה ביותר ומדדתם למרכז הכבל" },
    { id: "3", label: "אורך נסיעה מחושב", description: "הוספתם טווח מלא + עודף עבור כל ציר" },
    { id: "4", label: "רדיוס מינימלי של נושא אומת", description: "הנושא שבחרתם מינימלי ≥ הרדיוס שלכם" },
    { id: "5", label: "קיבולת עומס אומתה", description: "משקל הכבל הכולל מתאים לדירוג" },
    { id: "6", label: "הסמוּק כבלים אומת", description: "כל הכבלים מתאימים בבטחה עם קיבולת עודף של 20%" }
  ],
  conclusion: {
    title: "סיכום",
    paragraphs: [
      "בחירת נושא כבלים היא לא קנייה ברמת סחורה — זו החלטה במערכות המשפיעה על אמינות, עלויות תחזוקה וזמן פעולה למשך שנים. מהנדסים שמתקרבים לזה בשיטתיות דיווחו בעקביות על 30-40% פחות כשלים הקשורים לכבלים.",
      "נושא הכבלים הטוב ביותר הוא זה שעוצב במיוחד עבור היישום שלכם, לא האפשרות הזולה ביותר."
    ]
  },
  cta: {
    title: "מוכנים לבחור את נושא הכבלים שלכם?",
    paragraphs: [
      "ב-RSTECH Electronics, אנו מתמחים בהתאמת מערכות נושא כבלים של Tsubaki Kabelschlepp ליישומים תעשייתיים מורכבים בכל ישראל.",
      "עם שלושת הפרמטרים הקריטיים שלכם (מספר כבלים, רדיוס, אורך נסיעה), הצוות ההנדסי שלנו יכול במהירות להמליץ על הפתרון האופטימלי."
    ],
    buttonText: "קבע התייעצות"
  },
  share: "שתף:"
};

export function getArticleContent(locale: string): ArticleContent {
  return locale === "he" ? articleContentHE : articleContentEN;
}
