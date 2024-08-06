import {getLatestNews} from "@/src/lib/news";
import NewsList from "@/src/components/news-list";


export default function LatestNewsPage(){
    const latestNews = getLatestNews()

    return<>
        <h2>Latest News</h2>
        <NewsList news={latestNews} />
    </>
}