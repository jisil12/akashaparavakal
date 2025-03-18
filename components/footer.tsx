'use client';

import { FadeInView } from "./animations/motion-container";

export function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-lg border-t">
      <FadeInView>
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-muted-foreground text-sm">
            {new Date().getFullYear()} Akasha Paravakal. All rights reserved.
          </p>
        </div>
      </FadeInView>
    </footer>
  );
}