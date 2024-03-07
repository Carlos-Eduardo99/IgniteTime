// dentro desse arquivo so tera codigo de definição de tipo de typescript
// específico do typescript
// arquivo de definição de tipo

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  // criando uma tipagem dentro do styled-components

  export interface defaultTheme extends ThemeType {}
}
