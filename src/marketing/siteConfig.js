export const SITE_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Contact', href: '/contact' },
  { label: 'Support', href: '/support' },
]

export const FOOTER_GROUPS = [
  {
    title: 'Pages',
    links: SITE_LINKS.slice(0, 3),
  },
  {
    title: 'Help',
    links: SITE_LINKS.slice(3),
  },
]
