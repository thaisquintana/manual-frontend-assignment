import { HeaderContent } from './styles'
import Image from 'next/image'
export const Header = () => (
  <HeaderContent>
    <Image
      src="/assets/logo-manual.svg"
      alt="Logo Manual"
      width={40}
      height={40}
    />
  </HeaderContent>
)
