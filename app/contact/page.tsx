import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const ContactPage =() =>{
  return (

    <section className="max-w-7xl min-h-screen mx-auto lg:flex justify-between items-center md:space-x-7 px-6 py-14 lg:py-36">

      {/* Left Side — Big Statement */}
      <div className="space-y-5 pt-10 md:w-1/2">
        <span className="text-xs tracking-[0.4em] uppercase text-indigo-400">
          Get In Touch
        </span>


        {/* ====CONTACT BLOCK=== */}
        <div className="items-start space-y-2 py-5 border rounded-3xl border-white/30 px-6 bg-white/10 backdrop-blur-sm">

          <div className="flex justify-between max-w-md">
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="mt-1 font-medium">Dhaka, Bangladesh</p>
            </div>
            <MapPin className="text-indigo-400" />
          </div>

          <div className="flex justify-between max-w-md">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="mt-1 font-medium">support@vfxcourse.com</p>
            </div>
            <Mail className="text-indigo-400" />
          </div>

          <div className="flex justify-between max-w-md">
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="mt-1 font-medium">+880 1XXX-XXXXXX</p>
            </div>
            <Phone className="text-indigo-400" />
          </div>
          {/* Social */}
          <div className="flex gap-8 pt-5 text-gray-400">
            <a href="#" className="hover:text-white transition">
              <Linkedin size={22} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter size={22} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Youtube size={22} />
            </a>
          </div>
        </div>



      </div>


      {/* Right Side — Premium Floating Form */}
      <div className="md:w-2/3 h-fit bg-white/10 backdrop-blur-sm border border-white/30 p-10 rounded-3xl mt-5 md:-mt-10">

        <h2 className="text-3xl font-semibold tracking-tight mb-12">
          Start the Conversation
        </h2>

        <form className="space-y-5">

          <div>
            <label className="text-sm text-gray-500 block">
              Full Name
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-white/20 focus:border-indigo-400 outline-none transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500 block">
              Email Address
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-white/20  focus:border-indigo-400 outline-none transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500 block">
              Write your message...
            </label>
            <textarea
              rows={3}
              className="w-full bg-transparent border-b border-white/20 focus:border-indigo-400 outline-none transition text-sm resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-8 w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-semibold tracking-wide hover:opacity-90 transition text-md"
          >
            Send Message
          </button>

        </form>

      </div>


    </section>



  );
}

export default ContactPage;