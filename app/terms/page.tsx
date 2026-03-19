import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Surya Traders' website and services, you accept and agree to be 
                bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Services Description</h2>
              <p className="text-muted-foreground">
                Surya Traders provides premium corporate gifting solutions including curated gift 
                collections, custom branding, and global delivery services. We reserve the right to 
                modify, suspend, or discontinue any part of our services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Order Terms</h2>
              <p className="text-muted-foreground">
                All orders are subject to availability and confirmation of the order price. We reserve 
                the right to refuse any order you place with us. We may, in our sole discretion, limit 
                or cancel quantities purchased per person, per household, or per order.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
              <p className="text-muted-foreground">
                Payment must be received in full before goods are delivered. We accept various payment 
                methods as specified on our website. Prices are subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Shipping and Delivery</h2>
              <p className="text-muted-foreground">
                Delivery times are estimates and cannot be guaranteed. We are not liable for any delays 
                in shipments. Risk of loss and title for all merchandise pass to you upon our delivery 
                to the shipping carrier.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Returns and Refunds</h2>
              <p className="text-muted-foreground">
                Custom-branded items cannot be returned unless defective. Returns must be made within 
                7 days of delivery. Refunds will be processed within 14 days of receiving the returned 
                items.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content included on this site, such as text, graphics, logos, images, and data 
                compilations, is the property of Surya Traders and protected by intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                In no event shall Surya Traders, nor its directors, employees, partners, agents, 
                suppliers, or affiliates, be liable for any indirect, incidental, special, or 
                consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                Questions about the Terms of Service should be sent to us at:
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
