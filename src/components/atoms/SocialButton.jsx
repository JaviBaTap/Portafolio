import { Button } from '@radix-ui/themes'

const SocialButton = ({ href, icon, children, ...buttonProps }) => (
  <Button asChild size="3" {...buttonProps}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {icon} {children}
    </a>
  </Button>
)

export default SocialButton