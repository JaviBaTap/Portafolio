import { Avatar } from '@radix-ui/themes'
import { getInitials } from '../../utils/getInitials'

const ProfileAvatar = ({ name, photo }) => (
  <Avatar
    size="9"
    radius="full"
    src={photo}
    fallback={getInitials(name)}
    color="red"
    variant="solid"
    alt={`Foto de perfil de ${name}`}
    style={{ width: 200, height: 200, border: '5px solid #fff', boxShadow: '0 8px 30px rgba(0,0,0,.35)' }}
  />
)

export default ProfileAvatar