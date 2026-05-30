import { motion } from "motion/react";
import { getSite } from "@/lib/content";

export function Hero() {
  const site = getSite();
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-40 left-1/2 -z-10 size-[700px] -translate-x-1/2 rounded-full bg-primary/30 blur-[140px] animate-float" />

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          {site.author ?? site.name}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl text-gradient"
        >
          {site.tagline ?? site.name}
        </motion.h1>
        {site.bio && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground"
          >
            {site.bio}
          </motion.p>
        )}
      </div>
    </section>
  );
}
