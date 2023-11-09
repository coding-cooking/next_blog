import { useThemeContext } from "@/context";
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from "../../../graphql/queries";
import { client } from "../index";
import styles from "./Article.module.scss";
import { Post } from "../../../graphql/queries";

type PostProps = {
	post: {
		title: string,
		date: string,
		content: string,
	}
}


export default function Post({ post }: PostProps) {
	const { theme, setTheme } = useThemeContext();
	try {
		return (
			<div className={theme === "dark" ? styles.darkArticleWrapper : styles.articleWrapper}>
				<div className={styles.article}>
					<h1>{post.title}</h1>
					<span className={styles.date}>{post.date}</span>
					<br />
					<p className={styles.content}>{post.content}</p>
					{/* <MDXRemote {...post.content} /> */}
					{/* {post.video && (
					<video controls width='600px'>
						<source src={post.video} type='video/webm' />
					</video>
				)}
				{post.url && (
					<img src={post.url} width='600px' alt='this is the image' />
				)} */}
				</div>
			</div>
		);
	} catch (e) {
		console.log("this errr", e);
		return <div>Oops </div>;
	}
}

export async function getStaticPaths() {
	try {
		const { data } = await client.query({ query: GET_ALL_SLUGS });

		const paths = data.blogPosts.data.map((post: { attributes: { urlSlug: string; }; }) => ({
			params: {
				slug: post.attributes.urlSlug,
			},
		}));

		return {
			paths,
			fallback: false,
		};

	} catch (error) {
		return {
			paths: [],
			fallback: false,
		};
	}
}

type ParamsProps = {
	params: 
		{slug: string},
}

export async function getStaticProps({ params }: ParamsProps) {
	try {
		const { data } = await client.query({
			query: GET_INDIVIDUAL_POST,
			variables: { urlSlug: params.slug },
		});

		const attrs = data.blogPosts.data[0].attributes;
		
		// const _html = await serialize(attrs.content);

		return {
			props: {
				post: {
					title: attrs.title,
					content: attrs.content,
					date: attrs.date,
					// url: `http://localhost:1337/${attrs.imgUrl.data[0].attributes.url}`,
					// url2: `http://localhost:1337${attrs.imgUrl.data[1].attributes.url}`,
					// url3: `http://localhost:1337${attrs.imgUrl.data[2].attributes.url}`,
					// url4: `http://localhost:1337${attrs.imgUrl.data[3].attributes.url}`,
					// video: `http://localhost:1337/${attrs.videoUrl.data[0].attributes.url}`,
				},
			},
		};
	} catch (e) {
		return {
			props: {
				post: {
					title: "",
					content: "",
					date: "",
					// url: "",
				},
			},
		};
	}
}
