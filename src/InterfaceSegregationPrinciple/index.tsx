// Evitar interfaces/props que no se necesitan

import { FC } from "react";
import { PostType } from "../types"

// La idea es que en vez de pasar el objeto entero al subcomponente, le pasemos solo la parte específica que va a usar

const Post = ({ post }: { post: PostType }) => {
    return (
        <div>
            {/* <PostTitle post={post} /> */}
            <PostTitle title={post.title} />
            <span>author: {post.author.name}</span>
            {/* <PostTitle post={post} /> */}
            <PostDate createdAt={post.createdAt} />
        </div>
    );
};

// Y se recibirán solo aquellos elementos que se necesitan dentro del componente

type TitleProps = {
    // post: PostType;
    title: string;
};

// const PostTitle: FC<TitleProps> = ({ post }) => <h1>{post.title}</h1>;
const PostTitle: FC<TitleProps> = ({ title }) => <h1>{title}</h1>;

type DateProps = {
    // post: PostType;
    createdAt: Date;
};

// const PostDate: FC<DateProps> = ({ post }) => <time>{post.createdAt.toString()}</time>
const PostDate: FC<DateProps> = ({ createdAt }) => <time>{createdAt.toString()}</time>

export default Post;