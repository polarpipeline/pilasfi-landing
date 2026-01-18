"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

const footerLinks = {
  product: [
    { name: "Funciones", href: "#features" },
    { name: "Cómo Funciona", href: "#how-it-works" },
    { name: "Bancos Soportados", href: "#banks" },
    { name: "Precios", href: "#download" },
  ],
  company: [
    { name: "Sobre Nosotros", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Carreras", href: "#" },
    { name: "Prensa", href: "#" },
  ],
  legal: [
    { name: "Privacidad", href: "#" },
    { name: "Términos", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "Seguridad", href: "#" },
  ],
  support: [
    { name: "Centro de Ayuda", href: "#" },
    { name: "Contacto", href: "#" },
    { name: "Estado del Sistema", href: "#" },
    { name: "API", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="section-dark pt-16 pb-8">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Pilas<span className="gradient-text">Fi</span>
              </span>
            </a>
            <p className="text-[var(--color-gray-400)] mb-6 max-w-xs">
              La app que automatiza tus finanzas personales leyendo los emails
              de tu banco. Diseñada para Ecuador.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hola@pilasfi.com"
                className="flex items-center gap-2 text-[var(--color-gray-400)] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hola@pilasfi.com</span>
              </a>
              <div className="flex items-center gap-2 text-[var(--color-gray-400)]">
                <MapPin className="w-4 h-4" />
                <span>Guayaquil, Ecuador</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Producto</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[var(--color-gray-400)] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[var(--color-gray-400)] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[var(--color-gray-400)] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[var(--color-gray-400)] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-[var(--color-gray-400)] text-sm">
            © {new Date().getFullYear()} PilasFi. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[var(--color-gray-400)] hover:bg-white/10 hover:text-white transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Made with love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-white/5"
        >
          <p className="text-[var(--color-gray-500)] text-sm">
            Hecho con 💙 en Ecuador 🇪🇨
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
