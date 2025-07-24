
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Reach out to MatchToday - Contact Us',
  description: 'Do you have enquiries, remarks, or interests in partnerships? Contact MatchToday for assistance, feedback, or partnerships. Our goal is to help every sports fan.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  const contactMethods = [
    {
      title: "General Questions & Support",
      description: "If you have questions regarding features, contact match updates, or require support navigating the platform, reach out to us at -",
      email: "support@matchtoday.io",
      icon: Mail
    },
    {
      title: "Media & Partnership Opportunities",
      description: "If you want to work with us, partner, advertise, or media opportunity, we can do that too! Reach us at -",
      email: "partners@matchtoday.io",
      icon: Mail
    },
    {
      title: "Feedback & Suggestions",
      description: "We want and encourage any ideas to improve your experience. Please send us any suggestions you may have at -",
      email: "feedback@matchtoday.io",
      icon: Mail
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Connect with Us</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          At MatchToday, we know a good connection with our users is important. Even if your outreach is about feedback, questions, or partnership opportunities, our team can help you with it.
        </p>
      </header>
      
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center font-headline">Contact Us</h2>
        <p className="text-center text-muted-foreground -mt-4">
            We want to know what you think, and we will work to provide you with the best experience possible. If you have a technical issue or want to give us suggestions, or need help with navigating the platform, please reach out.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method) => (
             <Card 
                key={method.title}
                className="text-center"
              >
              <CardHeader className="items-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-2">
                     <method.icon className="h-8 w-8 text-primary" />
                  </div>
                <CardTitle className="font-headline">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{method.description}</p>
                <a href={`mailto:${method.email}`} className="font-semibold text-primary hover:underline break-all">
                  {method.email}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground pt-8">
            You can also connect with us through our social tags for updates or quick exchanges.
        </p>
        
        <Card className="mt-12">
          <CardHeader className="text-center">
            <MapPin className="h-10 w-10 mx-auto text-primary" />
            <CardTitle className="font-headline">Our Office</CardTitle>
            <CardDescription>Come say hello!</CardDescription>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground text-lg">
            <p>MatchToday Head Office</p>
            <p>27 Sports Avenue,</p>
            <p>Bengaluru, India 560001</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
