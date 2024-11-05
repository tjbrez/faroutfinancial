interface KeyPoint {
  question: string;
  answer: string;
}

interface ContentSection {
  subtitle?: string;
  text?: string;
  list?: string[];
}

interface PrivacySection {
  title: string;
  content: ContentSection[];
}

const keyPoints: KeyPoint[] = [
  {
    question: "What personal information do we process?",
    answer: "When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use."
  },
  {
    question: "Do we process any sensitive personal information?",
    answer: "We do not process sensitive personal information."
  },
  {
    question: "Do we collect any information from third parties?",
    answer: "We do not collect any information from third parties."
  },
  {
    question: "How do we process your information?",
    answer: "We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law."
  },
  {
    question: "In what situations and with which parties do we share personal information?",
    answer: "We may share information in specific situations and with specific third parties."
  },
  {
    question: "How do we keep your information safe?",
    answer: "We have adequate organizational and technical processes and procedures in place to protect your personal information."
  },
  {
    question: "What are your rights?",
    answer: "Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information."
  },
  {
    question: "How do you exercise your rights?",
    answer: "Submit a data subject access request or contact us directly."
  }
];

const privacySections: PrivacySection[] = [
  {
    title: "1. WHAT INFORMATION DO WE COLLECT?",
    content: [
      {
        subtitle: "Personal Information You Disclose to Us",
        text: "We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, or otherwise contact us.",
        list: [
          "Names",
          "Phone numbers",
          "Email addresses",
          "Passwords",
          "Contact preferences"
        ]
      },
      {
        subtitle: "Information Automatically Collected",
        text: "We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as:",
        list: [
          "IP address",
          "Browser and device characteristics",
          "Operating system",
          "Language preferences",
          "Referring URLs",
          "Device name",
          "Country and location",
          "Information about how and when you use our Services"
        ]
      }
    ]
  },
  {
    title: "2. HOW DO WE PROCESS YOUR INFORMATION?",
    content: [
      {
        text: "We process your personal information for a variety of reasons, including:",
        list: [
          "To facilitate account creation and authentication",
          "To deliver and facilitate delivery of services",
          "To respond to user inquiries/offer support",
          "To send marketing and promotional communications",
          "To protect our Services"
        ]
      }
    ]
  },
  {
    title: "3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?",
    content: [
      {
        text: "We only process your personal information when we believe it is necessary and we have a valid legal reason:",
        list: [
          "Consent: When you have given us permission",
          "Legal Obligations: When necessary for compliance with laws",
          "Vital Interests: To protect your vital interests or those of others",
          "Legitimate Interests: To operate and improve our business"
        ]
      }
    ]
  },
  {
    title: "4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
    content: [
      {
        text: "We may share information in specific situations:",
        list: [
          "Business Transfers: During mergers, sales, or acquisitions",
          "When Legally Required: To comply with applicable law",
          "With Your Consent: When you have given us specific permission"
        ]
      }
    ]
  },
  {
    title: "5. HOW DO WE KEEP YOUR INFORMATION SAFE?",
    content: [
      {
        text: "We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.",
      }
    ]
  },
  {
    title: "6. HOW LONG DO WE KEEP YOUR INFORMATION?",
    content: [
      {
        text: "We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it."
      }
    ]
  },
  {
    title: "7. DO WE COLLECT INFORMATION FROM MINORS?",
    content: [
      {
        text: "We do not knowingly collect data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services."
      }
    ]
  },
  {
    title: "8. WHAT ARE YOUR PRIVACY RIGHTS?",
    content: [
      {
        subtitle: "Your Rights Include:",
        list: [
          "Access: Request access to your personal data",
          "Rectification: Request correction of inaccurate data",
          "Erasure: Request deletion of your data",
          "Restriction: Request restriction of processing",
          "Data Portability: Request transfer of your data",
          "Objection: Object to processing of your data"
        ]
      }
    ]
  },
  {
    title: "9. HOW CAN YOU CONTACT US?",
    content: [
      {
        text: "If you have questions or comments about this notice, you may email us at privacy@faroutfinancial.com"
      }
    ]
  }
];

export default function Privacy() {
  return (
    <main className="min-h-screen relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("/images/background.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff7e45]/30 to-[#2a9d8f]/30 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="bg-[#f5e6d3]/90 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
          <h1 className="font-original-surfer text-4xl text-[#2a9d8f] mb-6">Privacy Policy</h1>
          <p className="text-sm text-[#2a9d8f]/70 mb-8">Last updated November 5, 2024</p>

          <div className="prose prose-lg max-w-none text-[#2a9d8f]/80">
            {/* Introduction */}
            <p className="mb-6">
              This Privacy Notice for Far Out Financial LLC ("we," "us," or "our"), describes how and why we might process your personal information when you use our services ("Services").
            </p>

            {/* Key Points */}
            <div className="bg-[#2a9d8f]/10 p-6 rounded-lg mb-8">
              <h2 className="font-original-surfer text-2xl text-[#2a9d8f] mb-4">Summary of Key Points</h2>
              <div className="space-y-4">
                {keyPoints.map((point, index) => (
                  <div key={index} className="border-l-4 border-[#ff7e45]/50 pl-4">
                    <p className="font-semibold mb-2">{point.question}</p>
                    <p>{point.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Sections */}
            {privacySections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="font-original-surfer text-2xl text-[#2a9d8f] mb-4">{section.title}</h2>
                {section.content.map((content, contentIndex) => (
                  <div key={contentIndex} className="mb-4">
                    {content.subtitle && (
                      <h3 className="font-semibold text-xl mb-2">{content.subtitle}</h3>
                    )}
                    {content.text && <p className="mb-4">{content.text}</p>}
                    {content.list && (
                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        {content.list.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}

            {/* Return Home Link */}
            <div className="mt-8 text-center">
              <a
                href="/"
                className="text-[#ff7e45] hover:text-[#ff7e45]/80 transition-colors"
              >
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}