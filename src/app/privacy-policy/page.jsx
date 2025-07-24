
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Privacy Policy | MatchToday - Your Data, Our Priority',
  description: "Read MatchToday's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy and data security are our top priorities.",
   alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
    const policySections = [
    {
        title: "1. Information Collected",
        content: [
            "We may collect the following:",
            "Contact information (e.g., email) as part of signing up or when you contact us",
            "Usage data (e.g., IP address, browser type, and the pages you visit)",
            "Cookies, which may enhance your browsing experience"
        ],
        isList: true
    },
    {
        title: "2. How We Use Information",
        content: [
            "We use the information we collect to:",
            "Help operate and improve our website and services",
            "Send match updates and newsletters (if you are subscribed)",
            "Analyse basic traffic and how users interact with our site",
            "Limiting spam and unauthorised use"
        ],
        isList: true
    },
    {
        title: "3. Sharing of Data",
        content: [
            "We will not sell your personal information. We may share data with some trustworthy vendors (e.g., Google Analytics), only for support purposes."
        ],
        isList: false
    },
    {
        title: "4. Your Choices",
        content: [
            "You may:",
            "Opt out of cookies through your web browser settings",
            "Unsubscribe from receiving emails at any time",
            "Ask us to access, correct, or delete your data based on your request and applicable regulations."
        ],
        isList: true
    },
    {
        title: "5. Security of Your Data",
        content: [
            "We employ reasonable methods to protect your data but we cannot guarantee it will be completely secure at all times when being transmitted online."
        ],
        isList: false
    },
    {
        title: "6. Changes to This Policy",
        content: [
            "We may update this Privacy Policy periodically. We will provide a notice of any updates through this website with a new date at the beginning."
        ],
        isList: false
    },
    {
        title: "7. Contact Us",
        content: [
            "Please contact us by email if you have any questions about this policy."
        ],
        isList: false
    }
];
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Privacy Policy</h1>
        <p className="mt-4 text-lg text-muted-foreground">Last Updated - 24 July, 2025</p>
      </header>

      <div className="space-y-8 text-muted-foreground">
        <p className='text-center'>
            Welcome to MatchToday. We respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of information that we may collect from you and how that information will be used when you use our website.
        </p>
        
        {policySections.map((section) => (
            <Card key={section.title}>
                <CardHeader>
                    <CardTitle className="font-headline">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {section.isList ? (
                         <ul className="list-disc list-inside space-y-2">
                            {section.content.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    ) : (
                        section.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)
                    )}
                </CardContent>
            </Card>
        ))}

      </div>
    </div>
  );
}
