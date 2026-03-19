"use client"

export function LogoBar() {
  const logos = ["Stripe", "Notion", "Slack", "Figma", "Linear", "Vercel", "Airbnb", "Spotify"]

  return (
    <section className="py-16 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-10">Trusted by leading companies worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-xl font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
