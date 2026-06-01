import type { ComponentType } from 'react'
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import '../css/SocialFooter.css'

type SocialLink = {
  name: string
  url: string
  Icon: ComponentType<{ size?: string | number }>
}

const socialLinks: SocialLink[] = [
  { name: 'Instagram', url: 'https://www.instagram.com', Icon: FaInstagram },
  { name: 'LinkedIn', url: 'https://www.linkedin.com', Icon: FaLinkedinIn },
  { name: 'X', url: 'https://x.com', Icon: FaXTwitter },
  { name: 'YouTube', url: 'https://www.youtube.com', Icon: FaYoutube }
]

type SocialHandleProps = {
  url: string
  label: string
  Icon: ComponentType<{ size?: string | number }>
}

function SocialHandle({ url, label, Icon }: SocialHandleProps) {
  return (
    <a
      className="social-handle"
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <div className="social-circle">
        <Icon size={10} />
      </div>
    </a>
  )
}

export default function SocialFooter() {
  return (
    <footer className="social-footer">
      <div className="social-list">
        {socialLinks.map(({ name, url, Icon }) => (
          <SocialHandle key={name} url={url} label={name} Icon={Icon} />
        ))}
      </div>
      <p>Connect with us on social media</p>
      <p> © 2026 Compass Learn. All rights reserved.</p>
    </footer>
  )
}
