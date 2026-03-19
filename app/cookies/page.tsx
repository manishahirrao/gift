import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
              <p className="text-muted-foreground">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
                when you visit a website. They help the website remember information about your visit, 
                which can make it easier to visit the site again and make the site more useful to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies to enhance your browsing experience by:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Remembering your preferences and settings</li>
                <li>Understanding how you use our website</li>
                <li>Improving our website performance and functionality</li>
                <li>Providing personalized content and recommendations</li>
                <li>Analyzing website traffic and user behavior</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies are necessary for the website to function and cannot be switched off 
                    in our systems. They are usually only set in response to actions made by you.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Performance Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies allow us to count visits and traffic sources so we can measure and 
                    improve the performance of our site.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Functional Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies enable enhanced functionality and personalization, such as videos 
                    and live chats.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Marketing Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies are used to track visitors across websites to display ads that are 
                    relevant and engaging for the individual user.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-muted-foreground">
                You can control and/or delete cookies as you wish. You can delete all cookies that are 
                already on your device and you can set most browsers to prevent them from being placed. 
                However, if you do this, you may have to manually adjust some preferences every time 
                you visit a site and some services and functionality may not work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground">
                Our website may use third-party services that also set cookies on your device. These 
                include analytics services, social media platforms, and advertising networks. We do not 
                control these third-party cookies and recommend checking their respective privacy policies 
                for more information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any 
                material changes by posting the new Cookie Policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about our use of cookies, please contact us at:
                <br />
                Email: suryacorporategifts@gmail.com
                <br />
                Phone: 7545088000
              </p>
            </section>

            <section className="border-t pt-6">
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
