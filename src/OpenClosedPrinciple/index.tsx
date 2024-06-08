// Abierto para extensión
// Cerrado para modificación

import { FC } from "react";
import { TitleProps, TitleWithLinkProps, TitleWithNormalButtonProps } from "../types";
// import { ButtonProps } from "../types";

// Si tengo que entrar al componente para ampliar su funcionalidad, NO ESTOY cumpliendo con el principio
// Debería de ser extensible, sin tener que modificarse internamente

// Para ello se puede componetizar cada caso y pasar solo las props necesarias
// Para posteriormente renderizar uno u otro componente, dependiendo del tipo que se necesite

const Title: FC<TitleProps> = ({ title, children }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>{title}</h1>
            {children}
        </div>
    )
};

export const TitleWithLink: FC<TitleWithLinkProps> = ({ title, href, buttonText }) => {
    return (
        <Title title={title}>
            <div>
                <a href={href}>{buttonText}</a>
            </div>
        </Title>
    )
}

export const TitleWithNormalButton: FC<TitleWithNormalButtonProps> = ({ title, buttonText, onClick }) => {
    return (
        <Title title={title}>
            <button onClick={onClick}>{buttonText}</button>
        </Title>
    )
}

// const Title: FC<ButtonProps> = ({
//     title,
//     type,
//     href,
//     buttonText,
//     onClick
// }) => {
//     return (
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <h1>{title}</h1>

//             {
//                 type === "withLinkButton" && (
//                     <button onClick={onClick}>
//                         <a href={href}>{buttonText}</a>
//                     </button>
//                 )
//             }

//             {
//                 type === "withNormalButton" && (
//                     <button onClick={onClick}>{buttonText}</button>
//                 )
//             }
//         </div>
//     );
// };

export default Title;