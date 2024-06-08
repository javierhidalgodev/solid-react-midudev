// Principio de intercambiabilidad
// En React se entiende al hacer una composición, donde el subtipo que renderiza el tipo principal, rompe la estructura de este

import { FC } from "react"
import { LiskovButtonProps } from "../types"

const Button: FC<LiskovButtonProps> = ({ children, color, size }) => {
    return <button style={{ color, fontSize: size === 'xl' ? '32px' : '16px' }} >{children}</button>
}

// Estamos cambiando el comportamiento del tipo principal con la propiedad isBig
// Debería de funcionar con la estructura del tipo principal, sin romperla, con el atributo size
// export const RedButton = ({ children, isBig }: { children: React.ReactNode, isBig: string }) => <Button color="red" size={isBig ? 'xl' : 'sm'}>{children}</Button>

export const RedButton = ({ children, size }: { children: React.ReactNode, size: string }) => <Button color="red" size={size}>{children}</Button>