// app/privacy-policy/privacyContent.ts
// Edit the policy text here. The page layout in page.tsx does not need to change.

export type PolicyItem = { heading: string; body: string[] };
export type PolicySection = {
  id: string;
  title: string;
  intro?: string[];
  items?: PolicyItem[];
};

export const EFFECTIVE_DATE = "November 17, 2026";

export const sections: PolicySection[] = [
  {
    id: "introduction",
    title: "Introduction",
    intro: [
      "Urban Cruise – Car & Bus Rentals (“Urban Cruise”, “we”, “our”, “us”) respects your privacy and is fully committed to protecting your personal data. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, communicate with us, or use any of our car, bus, or travel-related rental services. We understand the importance of maintaining confidentiality and ensuring that your personal information is handled responsibly and securely.",
      "Our goal is to provide you with a transparent understanding of how your data is processed, stored, and used in connection with our services. By accessing our website, making an inquiry, or booking any service through Urban Cruise, you acknowledge that you have read, understood, and agreed to the terms outlined in this Privacy Policy.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    intro: [
      "At Urban Cruise – Car & Bus Rentals, we collect both personal and non-personal information to provide efficient, secure, and personalized services to our clients. The information we gather helps us confirm bookings, ensure smooth travel experiences, improve our website, and comply with legal and operational requirements. We collect this data directly from you when you fill out forms, contact us, or make a booking, and automatically through your interactions with our website.",
    ],
    items: [
      {
        heading: "A. Personal Information",
        body: [
          "When you inquire about or book our services, we may request certain personal details that allow us to identify and communicate with you. These include your full name, which helps us register your booking and issue confirmations; your contact number and email address, which are used for communication, confirmations, and service updates; and your pickup and drop locations, which are essential for scheduling your travel routes accurately.",
          "We may also collect details such as travel dates and specific requirements to customize your experience according to your preferences, group size, and trip duration. For billing and verification purposes, we may ask for your billing or invoice address and limited payment details (excluding sensitive card information such as the complete card number or CVV, which are processed securely through payment gateways).",
          "In certain cases, especially for commercial or interstate vehicle rentals, we may also request identification documents such as a driver’s license, Aadhaar card, passport, or any government-approved ID to comply with transportation and verification regulations. All such information is stored securely and used strictly for legitimate business and legal purposes.",
        ],
      },
      {
        heading: "B. Automatically Collected Data",
        body: [
          "When you browse our website, some data is collected automatically through standard internet technologies. This may include your IP address, which helps us identify the region from which you are visiting; browser type and version, which allows us to ensure compatibility with your device; and device information such as operating system, screen resolution, and model type to optimize your browsing experience.",
          "We also collect details such as pages visited, duration of stay, and navigation paths, which help us understand how users interact with our site. This enables us to improve our website’s layout, content, and performance for better usability. Additionally, we may collect data on the referring website or traffic source—for instance, whether you reached us through Google search, an advertisement, or a social media link. This helps us evaluate the effectiveness of our marketing channels while ensuring a smooth, user-friendly experience for visitors.",
        ],
      },
      {
        heading: "C. Cookies and Tracking Technologies",
        body: [
          "Our website uses cookies, small text files stored on your device, to enhance your browsing experience and improve our services. Cookies allow us to remember your preferences, keep track of your session, and display content relevant to your interests. For example, cookies may help us recognize returning visitors, pre-fill forms, and ensure faster page loading.",
          "We also use cookies and analytics tools (like Google Analytics) to understand user behavior, monitor traffic patterns, and identify areas for improvement. These tools collect anonymous statistical data only and do not personally identify you.",
          "You may choose to disable cookies at any time through your browser settings; however, please note that doing so may affect certain functionalities of our website, such as form submissions, login sessions, or personalized display features. By continuing to use our website without changing your cookie settings, you consent to our use of cookies as outlined in this Privacy Policy.",
        ],
      },
    ],
  },
  {
    id: "how-we-use-your-information",
    title: "How We Use Your Information",
    intro: [
      "At Urban Cruise – Car & Bus Rentals, the personal and non-personal information we collect is used responsibly and strictly for legitimate business, operational, and service-related purposes. We value your trust and ensure that your data is never misused, sold, or disclosed for unauthorized marketing. Below is a detailed explanation of how we use your information:",
    ],
    items: [
      {
        heading: "A. To Process Bookings, Reservations, or Inquiries",
        body: [
          "We use your personal details such as your name, contact number, email address, and travel information to process your booking or inquiry. This allows us to confirm vehicle availability, plan your travel itinerary, and deliver the services you requested efficiently. Our booking and support teams rely on this data to manage reservations, coordinate pickup and drop timings, and ensure a seamless rental experience from start to finish.",
        ],
      },
      {
        heading: "B. To Confirm Payments and Send Booking Details",
        body: [
          "Your payment information and contact details are used to confirm successful transactions, issue receipts or invoices, and send booking confirmations via email, SMS, or WhatsApp. For online transactions, we use secure payment gateways that comply with banking and data protection standards to ensure your financial data is processed safely. We never store sensitive card details like full card numbers or CVVs on our servers.",
        ],
      },
      {
        heading: "C. To Communicate Offers, Updates, or Changes to Your Service",
        body: [
          "We may use your email address or phone number to share important updates related to your booking—such as vehicle status, schedule changes, or driver contact information. Occasionally, we also inform you about special promotions, discounts, or new service offerings that may be relevant to your travel preferences. You can choose to opt out of receiving promotional communications at any time by contacting us or using the unsubscribe option.",
        ],
      },
      {
        heading: "D. To Improve Our Website, User Experience, and Customer Service",
        body: [
          "The information collected through cookies, analytics tools, and user feedback helps us analyze website performance and user behavior. This enables us to enhance the browsing experience, optimize page loading speeds, and make our platform more user-friendly. We also use feedback and communication data to train our staff, resolve customer queries faster, and maintain a high standard of service quality.",
        ],
      },
      {
        heading: "E. To Comply with Legal or Regulatory Requirements",
        body: [
          "In certain situations, we may be required by law or government authorities to retain or disclose specific information. This includes sharing data for tax purposes, vehicle registration verifications, travel permits, or other compliance-related documentation. We ensure that any such disclosure strictly adheres to applicable laws and is done in good faith for legitimate legal obligations.",
        ],
      },
      {
        heading: "F. To Prevent Fraud or Unauthorized Activities",
        body: [
          "Urban Cruise employs advanced monitoring systems and verification procedures to detect and prevent fraudulent transactions or misuse of our services. Your data helps us identify suspicious activity, confirm the authenticity of bookings, and safeguard both the customer and company from potential security risks or cyber threats.",
        ],
      },
      {
        heading: "G. We Do Not Sell, Rent, or Trade Your Information",
        body: [
          "We respect your privacy completely. Urban Cruise does not sell, rent, share, or trade your personal data with any third parties for independent marketing or profit purposes. Any information shared externally is strictly limited to service providers or partners directly involved in fulfilling your booking and is handled under confidentiality agreements.",
        ],
      },
    ],
  },
  {
    id: "data-sharing-and-disclosure",
    title: "Data Sharing & Disclosure",
    intro: [
      "At Urban Cruise – Car & Bus Rentals, we understand the importance of keeping your personal data safe and confidential. We only share your information with trusted third parties when it is absolutely necessary to provide our services, complete your bookings, or comply with legal requirements. Every third party we work with is bound by strict confidentiality and data protection agreements to ensure your information remains secure. Below is a detailed explanation of how and with whom your data may be shared:",
    ],
    items: [
      {
        heading: "A. Authorized Service Providers or Partners",
        body: [
          "To successfully deliver the travel services you book with us, we may share limited personal information with authorized service providers and operational partners such as professional drivers, vehicle owners, hotel partners, or logistics vendors. This information may include your name, contact number, travel dates, and pickup/drop details—solely for the purpose of ensuring proper coordination and timely service execution. These partners are only given access to the data necessary for their specific role and are prohibited from using it for any unrelated or personal purposes.",
        ],
      },
      {
        heading: "B. Payment Gateways or Banks for Secure Transactions",
        body: [
          "When you make online payments, certain personal and transactional information—such as your name, amount, and reference number—is securely shared with payment gateways, banks, or financial institutions involved in processing the transaction. These entities operate under stringent security protocols and comply with PCI-DSS (Payment Card Industry Data Security Standard) guidelines to ensure your financial information is handled safely. Urban Cruise itself does not store sensitive card information such as full card numbers, CVVs, or passwords.",
        ],
      },
      {
        heading: "C. Government Authorities or Law Enforcement Agencies",
        body: [
          "We may disclose personal data when required to do so by law, regulation, or legal process, or in response to valid requests by law enforcement agencies, courts, or government bodies. Such disclosures are made in good faith and only when necessary to comply with legal obligations, prevent fraud, ensure passenger safety, or protect the rights and property of Urban Cruise and its customers.",
        ],
      },
      {
        heading: "D. IT and Marketing Service Providers",
        body: [
          "We may engage trusted IT, web hosting, or digital marketing service providers to help us operate, maintain, and improve our website and communication systems. These third parties may have limited access to certain data for the purpose of managing servers, email systems, security monitoring, analytics, or digital campaigns. All such vendors are required to sign confidentiality agreements and adhere to strict data protection standards to ensure that your information is never misused, disclosed, or shared further.",
        ],
      },
      {
        heading: "E. Data Protection and Confidentiality Obligations",
        body: [
          "Every third party or partner that handles personal data on behalf of Urban Cruise is carefully vetted and required to follow industry-standard data security and privacy policies. They are strictly prohibited from using the information for any purpose other than the service for which it was shared. We also ensure that these entities maintain up-to-date security practices, encryption protocols, and restricted data access controls to protect your information from unauthorized use, disclosure, alteration, or destruction.",
        ],
      },
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    intro: [
      "At Urban Cruise – Car & Bus Rentals, protecting your personal information is a top priority. We take extensive technical and organizational measures to ensure that your data remains secure, confidential, and protected from unauthorized access or misuse. While no system can guarantee absolute safety, we are committed to maintaining the highest standards of data protection through constant monitoring and improvement of our security infrastructure.",
    ],
    items: [
      {
        heading: "A. Protection Against Unauthorized Access",
        body: [
          "We implement multiple layers of security to prevent unauthorized individuals from accessing your personal information. Access to customer data is restricted only to authorized employees, verified drivers, and trusted service providers who require the information to perform their duties. Internal access is controlled through secure logins, strong password policies, and access-level permissions. In addition, our website uses SSL (Secure Socket Layer) encryption technology to ensure that all information transmitted between your browser and our servers remains confidential and protected from interception.",
        ],
      },
      {
        heading: "B. Protection Against Accidental Loss or Alteration",
        body: [
          "We regularly back up our data and maintain secure server environments to prevent accidental loss, damage, or corruption of information. System logs and data monitoring tools are in place to detect any irregular activities or data modifications. In the event of any accidental data loss or system error, our IT team follows a well-defined recovery protocol to restore information quickly and accurately, ensuring minimal disruption to services.",
        ],
      },
      {
        heading: "C. Protection Against Misuse or Disclosure",
        body: [
          "Urban Cruise enforces strict confidentiality agreements with all employees, drivers, and partners who handle customer data. We ensure that personal information shared with third parties is used solely for legitimate business purposes and only for the duration necessary to complete the service. Any attempt to misuse, copy, or disclose customer information is treated as a serious breach of company policy and may result in disciplinary or legal action.",
        ],
      },
      {
        heading: "D. Continuous Security Enhancements",
        body: [
          "Our data protection systems are continuously reviewed and updated to counter emerging security threats, malware, and cyber risks. We employ firewalls, antivirus software, and intrusion detection systems to safeguard both our online and internal databases. Regular security audits and vulnerability assessments are conducted to identify and fix potential weaknesses before they can be exploited.",
        ],
      },
      {
        heading: "E. Acknowledgement of Limitations",
        body: [
          "While Urban Cruise makes every reasonable effort to protect your information through modern technology and best practices, it is important to understand that no method of online transmission, electronic storage, or cloud data transfer is completely immune to risks. Therefore, we cannot guarantee absolute security. However, we remain proactive in strengthening our digital defenses and promptly addressing any security concerns to maintain your trust and safeguard your personal data to the best possible extent.",
        ],
      },
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    intro: [
      "At Urban Cruise – Car & Bus Rentals, we believe in collecting only the information necessary for business operations and retaining it only for as long as required. We follow a clear, lawful, and secure data retention policy to ensure that personal data is not stored indefinitely and is removed responsibly once it has served its purpose.",
    ],
    items: [
      {
        heading: "A. Retention to Fulfill the Purpose of Collection",
        body: [
          "We retain your personal information for as long as it is needed to complete the activities for which it was originally collected. For example, data collected for booking a car, bus, or tour service is retained until your trip or rental service has been completed and any associated customer support or billing matters have been resolved. This retention period ensures smooth communication, service delivery, and post-service assistance in case of queries, refunds, or disputes.",
        ],
      },
      {
        heading: "B. Retention to Meet Legal, Accounting, or Regulatory Requirements",
        body: [
          "In addition to service-related needs, we are legally obligated to retain certain records for specific periods to comply with tax laws, transportation regulations, accounting standards, and other statutory requirements. This may include invoices, receipts, payment confirmations, or identification details required by government or transport authorities. Such information is securely stored for the minimum period mandated by applicable laws and deleted or archived once that duration expires.",
        ],
      },
      {
        heading: "C. Secure Deletion and Anonymization of Data",
        body: [
          "Once the information is no longer necessary for operational, legal, or compliance purposes, it is either securely deleted or anonymized so that it can no longer be linked to any individual. Secure deletion includes permanent removal from servers, backup systems, and local devices using recognized data-wiping techniques. In cases where anonymized data is retained—for instance, to analyze travel trends or improve services—it contains no personally identifiable information and cannot be traced back to a specific user.",
        ],
      },
      {
        heading: "D. Customer Rights Regarding Retention",
        body: [
          "If at any time you wish to have your personal data removed from our records, you may contact us at [insert official email address] with a verified request. We will review the request and, subject to any legal retention obligations, permanently delete or anonymize your data. This ensures that you maintain full control over how long your information remains with us.",
        ],
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    intro: [
      "At Urban Cruise – Car & Bus Rentals, we believe that our customers should have complete control over their personal data. We are committed to maintaining transparency and ensuring that your privacy rights are respected at every stage of our data handling process. You have several important rights related to the collection, use, and storage of your information, as explained below:",
    ],
    items: [
      {
        heading: "A. Right to Access",
        body: [
          "You have the right to request a copy of the personal information we hold about you. This includes data you provided to us directly (such as your contact details or booking information) as well as any records related to your service history. Upon receiving a valid access request, we will verify your identity and provide a summary of the data stored in our systems within a reasonable timeframe. This helps you stay informed about how your data is used and ensures transparency in our operations.",
        ],
      },
      {
        heading: "B. Right to Correction (Rectification)",
        body: [
          "If you believe that any of the information we hold about you is inaccurate, incomplete, or outdated, you have the right to request a correction. For example, if you have changed your phone number, email address, or billing information, we will promptly update our records to reflect the correct details. Maintaining accurate data helps us serve you better and avoid communication errors or service delays.",
        ],
      },
      {
        heading: "C. Right to Deletion (Right to be Forgotten)",
        body: [
          "You have the right to request the deletion of your personal data from our systems when it is no longer necessary for the purpose it was collected, or if you withdraw consent. However, please note that certain information may need to be retained temporarily to comply with legal, tax, or regulatory obligations (for example, maintaining invoice records as required by law). Once these obligations expire, your data will be securely deleted or anonymized in accordance with our Data Retention Policy.",
        ],
      },
      {
        heading: "D. Right to Opt-Out of Marketing Communications",
        body: [
          "We may occasionally send you promotional messages, offers, or service updates based on your previous interactions with Urban Cruise. If you no longer wish to receive such communications, you have the right to opt out at any time. You can do this by clicking the “Unsubscribe” link in our marketing emails or by contacting us directly. Once unsubscribed, you will continue to receive only essential transactional or booking-related communications.",
        ],
      },
      {
        heading: "E. How to Exercise Your Rights",
        body: [
          "To exercise any of the above rights, please contact us via email at [Insert Official Contact Email] with a written request and a valid proof of identity. This verification step helps us protect your data from unauthorized access or fraudulent requests. Once verified, our data protection team will respond to your request promptly and provide updates on the actions taken.",
        ],
      },
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    intro: [
      "At Urban Cruise, we aim to provide a smooth and informative online experience. However, our website may contain links to external or third-party websites, applications, or platforms for user convenience, promotions, or additional services. Since these websites are not controlled or operated by Urban Cruise, we strongly encourage visitors to understand the following points:",
    ],
    items: [
      {
        heading: "A. Presence of External Links",
        body: [
          "Our website may include links that lead to third-party platforms such as partner websites, hotel booking pages, travel blogs, payment gateways, or social media profiles. These links are provided solely for your convenience and to offer additional information or services related to your travel needs.",
        ],
      },
      {
        heading: "B. Independent Privacy Practices",
        body: [
          "Each third-party website operates under its own privacy policy, terms of use, and data protection standards. Urban Cruise does not control or oversee how these external platforms collect, use, or protect your personal information. Their data handling practices may differ from ours, including how they use cookies, share information, or process transactions.",
        ],
      },
      {
        heading: "C. No Responsibility for External Content",
        body: [
          "Urban Cruise is not responsible for the accuracy, reliability, or security of content found on external websites. Any information, offers, or services provided by such third parties are outside our control. Users are advised to engage with those platforms at their own discretion and risk.",
        ],
      },
      {
        heading: "D. User Responsibility and Caution",
        body: [
          "Before sharing any personal, financial, or sensitive information on a third-party website, we strongly recommend that you carefully review their privacy policy and terms of service. This ensures you understand how your data will be used, stored, or shared. Always check that the site is secure (look for “https://” at the start of the address) before submitting any details.",
        ],
      },
      {
        heading: "E. Links Do Not Imply Endorsement",
        body: [
          "The inclusion of a third-party link on our website does not imply endorsement, partnership, or affiliation with that website or its owners. These links are offered merely for informational purposes and do not represent official approval by Urban Cruise.",
        ],
      },
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children’s Privacy",
    intro: [
      "At Urban Cruise – Car & Bus Rentals, we prioritize the safety and privacy of all users, including minors. We follow strict policies to ensure that the personal data of children is protected and handled responsibly.",
    ],
    items: [
      {
        heading: "A. No Intentional Collection from Minors",
        body: [
          "Urban Cruise does not knowingly collect or solicit personal information from individuals under the age of 18. Our services, website forms, booking procedures, and communications are intended for adult users who can legally enter into contracts and consent to data processing.",
        ],
      },
      {
        heading: "B. Parental Consent",
        body: [
          "If a minor under 18 submits personal information inadvertently through our website or service booking, we require verifiable parental or guardian consent to retain or process such data. Without such consent, we will not store or use the information in any form.",
        ],
      },
      {
        heading: "C. Immediate Deletion if Detected",
        body: [
          "In the event that Urban Cruise becomes aware that personal information has been collected from a child without appropriate parental or guardian consent, we will delete or anonymize the data immediately from our systems. This ensures compliance with privacy best practices and protects minors from unintended exposure.",
        ],
      },
      {
        heading: "D. User Responsibility",
        body: [
          "Parents or guardians are encouraged to supervise their children’s use of the internet and online services. We recommend that minors do not provide personal information without the knowledge and consent of a responsible adult.",
        ],
      },
      {
        heading: "E. Commitment to Safety",
        body: [
          "Urban Cruise remains committed to maintaining a safe online environment. All practices and systems are designed to prevent unauthorized access to or collection of personal data from minors, ensuring their privacy is respected at all times.",
        ],
      },
    ],
  },
  {
    id: "updates-to-this-policy",
    title: "Updates to This Policy",
    intro: [
      "At Urban Cruise – Car & Bus Rentals, we are committed to keeping your personal information secure and ensuring transparency in our data practices. As technology, regulations, and business operations evolve, we may need to update or modify this Privacy Policy from time to time.",
    ],
    items: [
      {
        heading: "A. Right to Modify or Update",
        body: [
          "Urban Cruise reserves the right to change, update, or revise this Privacy Policy at any time. Updates may be required to reflect changes in legal obligations, new services, data handling practices, or improvements in security measures. By continuing to use our website or services after such updates, you agree to be bound by the revised Privacy Policy.",
        ],
      },
      {
        heading: "B. Posting of Revised Policy",
        body: [
          "Any changes to the Privacy Policy will be published on our official website. The updated policy will include a clear “Effective Date” at the top of the page, so users can easily identify when the changes came into effect. This ensures full transparency and allows users to stay informed about how their data is being collected and used.",
        ],
      },
      {
        heading: "C. Encouragement to Review Periodically",
        body: [
          "We encourage all users to review this Privacy Policy periodically to stay aware of any updates or changes. By visiting the website and reading the latest version, you can ensure that you understand our current practices regarding the collection, storage, and use of personal information.",
        ],
      },
      {
        heading: "D. Continued Consent",
        body: [
          "By continuing to access our website, make inquiries, or use our services after changes have been posted, you provide your continued consent to the updated Privacy Policy. If you do not agree with any modifications, you are advised to discontinue the use of our website or services and contact us directly.",
        ],
      },
    ],
  },
  {
    id: "contact-information",
    title: "Contact Information",
    intro: [
      "At Urban Cruise – Car & Bus Rentals, we value your privacy and are committed to addressing any questions, concerns, or complaints regarding the collection, use, or protection of your personal information. If you need assistance or wish to exercise any of your privacy rights, you can reach out to us using the following contact details:",
    ],
  },
];

// Replace the placeholders below with your real details.
export const contact = {
  name: "Urban Cruise – Car & Bus Rentals",
  location: "Delhi, India",
  phone: "+91 XXXXXXXXXX",
  website: "https://www.urbancruise.in",
  email: "support@urbancruise.in",
};