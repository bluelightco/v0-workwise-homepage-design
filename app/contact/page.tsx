import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Calendar, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">How Can We Help?</h1>
          <p className="text-xl text-slate-100 text-balance">
            Whether you have a question about a poster, need advice on an HR issue, or want to demo our software—our
            team is ready to assist.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Smart Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Tell us a little about your business so we can route you to the right expert.
              </p>

              <form className="space-y-6">
                {/* Interest Dropdown */}
                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                    What are you interested in? *
                  </label>
                  <Select>
                    <SelectTrigger id="interest">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="posters">Labor Law Posters</SelectItem>
                      <SelectItem value="ems">HR & Safety Software / EMS</SelectItem>
                      <SelectItem value="consulting">Outsourced HR & Safety Consulting</SelectItem>
                      <SelectItem value="partnership">Partnership / Affiliate Program</SelectItem>
                      <SelectItem value="support">Billing or Support Question</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Business Details */}
                <div>
                  <label htmlFor="locations" className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Locations *
                  </label>
                  <Select>
                    <SelectTrigger id="locations">
                      <SelectValue placeholder="Select number of locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5</SelectItem>
                      <SelectItem value="6-20">6-20</SelectItem>
                      <SelectItem value="21-50">21-50</SelectItem>
                      <SelectItem value="50+">50+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <Input id="company" type="text" placeholder="Your company name" />
                </div>

                {/* Contact Information */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input id="name" type="text" placeholder="John Doe" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Work Email *
                  </label>
                  <Input id="email" type="email" placeholder="you@company.com" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    How can we help? *
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your specific compliance challenges..."
                    className="resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white">
                  Send Message
                </Button>
                <p className="text-sm text-gray-500 text-center">We typically respond within 2 business hours.</p>
              </form>
            </div>

            {/* Right Column: Fast Lanes */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Need Answers Now?</h2>
                <p className="text-gray-600 mb-8">Skip the form and connect with us directly.</p>
              </div>

              {/* Live Chat */}
              <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-gray-200 hover:border-purple-500 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-purple-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
                    <p className="text-gray-600 mb-4">Chat with a real compliance specialist (not a bot).</p>
                    <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white mb-2">
                      Start Live Chat
                    </Button>
                    <p className="text-sm text-green-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Agents Online (Mon-Fri, 8am-5pm PST)
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule Consultation */}
              <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-gray-200 hover:border-purple-500 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule a Consultation</h3>
                    <p className="text-gray-600 mb-4">
                      Not sure what you need? Book a 15-minute discovery call at a time that works for you.
                    </p>
                    <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">Book a Meeting</Button>
                  </div>
                </div>
              </div>

              {/* Call Us */}
              <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-gray-200 hover:border-purple-500 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-purple-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-4">Speak to a human immediately.</p>
                    <a href="tel:8664366620" className="block">
                      <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">(866) 436-6620</Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Offices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* West Coast HQ */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="h-6 w-6 text-purple-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">West Coast HQ</h3>
                  <p className="text-gray-600 leading-relaxed">
                    400 Capitol Mall, Suite #09-130
                    <br />
                    Sacramento, CA 95814
                  </p>
                </div>
              </div>
            </div>

            {/* East Coast HQ */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="h-6 w-6 text-purple-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">East Coast HQ</h3>
                  <p className="text-gray-600 leading-relaxed">
                    1410 N Westshore Blvd, Ste 510
                    <br />
                    Tampa, FL 33607
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Client Support */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Already a Client?</h2>
          <p className="text-lg text-slate-300 mb-8">
            For faster service regarding your subscription, invoice, or poster shipments, please use the Client Portal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-slate-900 hover:bg-gray-100">Client Login</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Visit Support Center
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
