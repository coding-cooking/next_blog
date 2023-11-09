import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_ALL_POSTS, Post } from "../../graphql/queries";
import Link from "next/link";
import { useThemeContext } from "@/context";
import styles from "./Blog.module.scss";
import { useState } from "react";

export const client = new ApolloClient({
    uri: "http://127.0.0.1:1337/graphql",
    cache: new InMemoryCache(),
});

type BlogProps = {
    posts: Post[],
}

export default function Blog({posts }: BlogProps) {

    const { theme, setTheme } = useThemeContext();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    function selectCodingBlogs() {
        setSelectedCategory('coding');
    }

    function selectLifeBlogs() {
        setSelectedCategory('life');
    }

    let selectedPosts = posts.filter(post => post.attributes.category === selectedCategory);

    return (
        <div className={`${styles.container} ${theme === "dark" && styles.darkContainer}`}>
            <div className={styles.blogWrapper}>
                <div className={styles.selector}>
                    <button className={styles.btn} onClick={selectCodingBlogs}>#Coding & Engineering</button>
                    <button className={styles.btn} onClick={selectLifeBlogs}>#Everyday Life</button>
                </div>
                <ul className={styles.blogList}>

                    {
                        selectedCategory 
                            ? (selectedPosts?.map((post) => <li key={post.attributes.title}>
                                <div className={styles.postWrapper}>
                                    <Link href={`/blog/${post.attributes.urlSlug}`}>
                                        <h3>{post.attributes.title}</h3>
                                        <p>{post.attributes.date}</p>
                                        <p>{post.attributes.description}</p>
                                    </Link>
                                </div>
                            </li>
                            ))
                            : (
                                posts?.map((post) => <li key={post.attributes.title}>
                                    <div className={styles.postWrapper}>
                                        <Link href={`/blog/${post.attributes.urlSlug}`}>
                                            <h3>{post.attributes.title}</h3>
                                            <p>{post.attributes.date}</p>
                                            <p>{post.attributes.description}</p>
                                        </Link>
                                    </div>
                                </li>
                                )
                            )
                    }
                </ul>
            </div>
       </div>
    )
}


export async function getStaticProps() {
    try {
        // const data = await Promise.all([client.query({
        //     query: GET_POST_BY_CATEGORY,
        //     variables: { category: 'coding' },
        // }), client.query({
        //     query: GET_POST_BY_CATEGORY,
        //     variables: { category: 'life' },
        // })])
        const { data } = await client.query({
            query: GET_ALL_POSTS,
        })

        return {
            props: {
                posts: data.blogPosts.data,
                // codingPosts: data[0].data.blogPosts.data,
                // lifePosts: data[1].data.blogPosts.data
            },

        }
    } catch (error) {
        console.log('error!!!!!', error)
        return {
            props: {
                posts: []
            }
        };
    }

}