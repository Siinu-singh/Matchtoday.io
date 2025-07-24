
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'MatchToday Terms and Conditions | User Agreement and Legal Code',
  description: "Read the official Terms and Conditions for MatchToday. Learn about your rights and responsibilities, as well as our terms regarding content, user behaviour, and liability.",
   alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
    const termsSections = [
    {
        title: "Acceptance of Terms",
        content: [
            "By visiting MatchToday or using any of our services, you take on a legal obligation to be bound by these terms. If you do not agree with (or cannot comply with) these terms, you may not access the site or use its services.",
        ],
    },
    {
        title: "Use of Content",
        content: [
            "All content that appears on the MatchToday site (match updates, player statistics, league data, articles, photographs, and graphics, for instance) is presented for informational use only. Reproducing, distributing, or modifying any content without written permission is prohibited and strictly enforced.",
        ],
    },
    {
        title: "User Conduct",
        content: [
            "You agree to use our website responsibly and legally. You must not, without limitation, post or transmit any content that is harmful, obscene, misleading, and/or that otherwise violates any law(s). MatchToday reserves the right to delete content, block users, and/or restrict access to any user that misuses the site.",
        ],
    },
    {
        title: "Account Responsibility",
        content: [
           "If you register an account, you are responsible for maintaining the confidentiality of your account's credentials. MatchToday is not liable for any losses or damages arising from uses of your account without authorisation.",
        ],
    },
    {
        title: "Third-Party Links",
        content: [
            "MatchToday may contain links to external websites for user ease. MatchToday is not responsible for the content, privacy policies, or practices of third party websites. Users must read the policies of third parties separately.",
        ],
    },
     {
        title: "Information Accuracy",
        content: [
            "We do, however, make every effort to provide accurate and timely information. Although we strive for accuracy with our website, MatchToday cannot guarantee that all information is without mistakes. The match results, player information, and league updates are based on available sources of information and may not be current.",
        ],
    },
    {
        title: "Limitation of Liability",
        content: [
            "MatchToday is not liable for any direct, incidental or consequential damages for relying, false or inaccurate information on our website and services. This includes, but is not limited to, no access to data, interrupted service, or loss of money.",
        ],
    },
    {
        title: "Modifications",
        content: [
            "We may revise these terms at any time. Continued use of the Site after such a revision will constitute your acceptance of a revised terms. We recommend that you review this page from time to time.",
        ],
    },
     {
        title: "Contact",
        content: [
            "If you have any enquiries regarding these Terms and Conditions, please contact us at -",
            "📧 legal@matchtoday.io",
        ],
    },
];

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Terms and Conditions</h1>
        <p className="mt-4 text-lg text-muted-foreground">
            Welcome to MatchToday. When you access or use our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
        </p>
      </header>

      <div className="space-y-8 text-muted-foreground">
        
        {termsSections.map((section) => (
            <Card key={section.title}>
                <CardHeader>
                    <CardTitle className="font-headline">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {section.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                </CardContent>
            </Card>
        ))}

        <p className="text-center pt-8">
            When you use MatchToday, you accept and agree to abide by these terms and use the site with respect.
        </p>
      </div>
    </div>
  );
}
