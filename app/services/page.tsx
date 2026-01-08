import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="inline-block border-2 border-dashed border-muted-foreground/30 rounded-lg px-12 py-16">
            <p className="text-2xl font-light text-muted-foreground tracking-wide">Intentionally Left Blank</p>
            <div className="mt-4 w-16 h-px bg-muted-foreground/30 mx-auto" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
