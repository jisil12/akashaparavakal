'use client';

import Link from "next/link";
import { FadeInView } from "./animations/motion-container";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-lg border-t">
      <FadeInView>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-muted-foreground">
                Akasha Paravakal is dedicated to empowering change through community action,
                providing support and care to those in need.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/volunteer", label: "Volunteer" },
                  { href: "/donate", label: "Donate" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@akashaparavakal.org">info@akashaparavakal.org</a>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>123 Community Street, City, State 12345</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                ].map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p> {new Date().getFullYear()} Akasha Paravakal. All rights reserved.</p>
          </div>
        </div>
      </FadeInView>
    </footer>
  );
}