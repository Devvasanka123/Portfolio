import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaCheckCircle, FaSpinner } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(() => {
      setSent(true);
      setSending(false);
      form.current.reset();
      setTimeout(() => {
        setSent(false);
      }, 4000);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      setSending(false);
    });
  };

  const connectReasons = [
    "Internship opportunities",
    "Project collaborations",
    "Technical discussions",
    "Open source contributions"
  ];

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden bg-radial from-purple-500/5 via-transparent to-transparent">
      {/* Visual background decorations */}
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-gray-900 dark:text-white">
            Let's Build Something
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Looking for internship opportunities, project collaborations, or technical discussions.
          </p>
        </div>

        {/* Content Columns */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE - CHANNELS & REASONS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-8"
          >
            {/* Quick Links */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0b111e]/60 border border-gray-100 dark:border-white/5 shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Direct Channels
              </h3>
              
              <a
                href="mailto:devvasanka123@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                  <FaEnvelope size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 truncate">devvasanka123@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/dev-vasanka-bb6520369"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <FaLinkedin size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">LinkedIn</p>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 truncate">linkedin.com/in/dev-vasanka</p>
                </div>
              </a>

              <a
                href="https://github.com/Devvasanka123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                  <FaGithub size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">GitHub</p>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 truncate">github.com/Devvasanka123</p>
                </div>
              </a>
            </div>

            {/* Why Connect */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0b111e]/60 border border-gray-100 dark:border-white/5 shadow-xl">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                Why Connect?
              </h3>
              <ul className="space-y-4">
                {connectReasons.map((reason, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <FaCheckCircle className="text-indigo-500 flex-shrink-0" size={16} />
                    <span className="font-medium">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0b111e]/40 border border-gray-100 dark:border-white/5 shadow-xl space-y-6"
            >
              {/* Form Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="John Doe"
                    className="w-full p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="john@example.com"
                    className="w-full p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-colors"
                  />
                </div>
              </div>

              {/* Subject dropdown select */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Subject
                </label>
                <select
                  name="subject"
                  className="w-full p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-colors text-gray-600 dark:text-gray-300"
                >
                  <option value="Collaboration">Project Collaboration</option>
                  <option value="Internship">Internship Opportunity</option>
                  <option value="General">Technical Discussion</option>
                  <option value="Mentorship">Technical Mentorship</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-colors resize-none"
                />
              </div>

              {/* Submit & Status */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-650 hover:to-purple-700 text-white font-semibold transition-all duration-300 shadow-md disabled:opacity-70 cursor-pointer active:scale-[0.98]"
                >
                  {sending ? (
                    <>
                      <FaSpinner className="animate-spin" size={16} />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>

                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-500 text-sm font-semibold text-center mt-4"
                  >
                    Message sent successfully! I will respond within 24 hours. 🚀
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;