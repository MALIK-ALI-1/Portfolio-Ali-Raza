"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-purple-400 mb-2">Lets Connect</h1>
          <p className="text-gray-300 text-lg">Whether you have a question, a project, or just want to say hi—I am all ears.</p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <FaEnvelope className="text-purple-400 text-xl" />
              <a href="mailto:malik537ar@gmail.com" className="hover:text-white transition">malik537ar@gmail.com</a>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <FaPhoneAlt className="text-purple-400 text-xl" />
              <a href="tel:+92 307 6647292" className="hover:text-white transition">+92 307 6647292</a>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <FaMapMarkerAlt className="text-purple-400 text-xl" />
              <span>Lahore, Pakistan</span>
            </div>
            <div className="flex gap-6 text-2xl mt-4">
              <a href="https://github.com/yourusername" target="_blank" className="hover:text-purple-400 transition-transform hover:scale-110"><FaGithub /></a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-purple-400 transition-transform hover:scale-110"><FaLinkedin /></a>
              <a href="https://twitter.com/yourusername" target="_blank" className="hover:text-purple-400 transition-transform hover:scale-110"><FaTwitter /></a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-800 text-white border border-purple-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-gray-800 text-white border border-purple-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-gray-800 text-white border border-purple-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-white font-bold py-3 px-6 rounded-md hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13610.123456789!2d74.3436!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904123456789%3A0xabcdef123456789!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </main>
  );
}
