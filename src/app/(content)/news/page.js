import NewsList from "@/src/components/news-list";
import {getAllNews} from "@/src/lib/news";

export default async function NewsPage() {
    const news = await getAllNews()

    return <>
        <h1>News Page</h1>
        <NewsList news={news}/>
    </>
}