'use client'

import { motion } from 'framer-motion'
import { PropsWithChildren, HTMLAttributes } from 'react'

type SectionProps = PropsWithChildren<
  {
    id: string
    className?: string
  } & HTMLAttributes<HTMLElement>
>

export default function Section({
  id,
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section container ${className ?? ''}`}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </section>
  )
}
