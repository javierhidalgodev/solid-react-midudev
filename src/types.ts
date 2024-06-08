export type TodoType = {
    id: number;
    userld: number;
    title: string;
    completed: boolean;
};

export type ButtonProps = {
    title: string;
    type: "default" | "withLinkButton" | "withNormalButton";
    href?: string;
    buttonText?: string;
    onClick?: () => void;
};

export type TitleProps = {
    title: string,
    children: React.ReactNode
};

export type TitleWithLinkProps = {
    title: string,
    href: string,
    buttonText: string
};

export type TitleWithNormalButtonProps = {
    title: string,
    onClick: () => void,
    buttonText: string
};

// LSP

export type LiskovButtonProps = {
    children: React.ReactNode,
    color: string,
    size: string
}

// ISP

export type PostType = {
    title: string;
    author: {
        name: string;
        age: number;
    };
    createdAt: Date;
};

// DIP

export type ResponseType = {
    id: number;
    title: string
}