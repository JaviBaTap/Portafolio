import { Flex } from '@radix-ui/themes'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import SocialButton from '../atoms/SocialButton'

const SocialLinks = ({ github, linkedin }) => (
  <Flex gap="4" wrap="wrap" justify="center">
    <SocialButton href={github} icon={<GitHubLogoIcon />} color="purple" highContrast>
      GitHub
    </SocialButton>
    <SocialButton href={linkedin} icon={<LinkedInLogoIcon />} color="blue">
      LinkedIn
    </SocialButton>
  </Flex>
)

export default SocialLinks