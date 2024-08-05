import {DUMMY_NEWS} from "@/dummy-news";

export default function NewsDetailsPage({params}) {

    const newsSlug = params.id
    const newsItem = DUMMY_NEWS.find(newsItem === newsItem.slug)

    return (
        <div className='flex justify-center items-center text-7xl h-[100vh] w-full bg-gray-800'>
            <h1 className={'text-white'}>This is news details page</h1>
            <p>NEWS ID : {newsId}</p>
        </div>
    )
}