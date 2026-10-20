import { Flex } from '@radix-ui/themes'

const MainLayout = ({ navbar, footer, children }) => (
  <Flex direction="column" style={{ minHeight: '100vh' }}>
    {navbar}
    <main style={{ flex: 1 }}>{children}</main>
    {footer}
  </Flex>
)

export default MainLayout