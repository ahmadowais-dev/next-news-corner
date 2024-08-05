import {DUMMY_NEWS} from "@/dummy-news";
import NewsList from "@/src/components/news-list";

export default function NewsPage() {
    return (
        <>
            <div className='flex justify-center items-center'>
                <h1 className='text-4xl'>News Page</h1>
            </div>
            <NewsList news={DUMMY_NEWS}/>
        </>
    )
}