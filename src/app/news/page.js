import Link from "next/link";
import {DUMMY_NEWS} from "@/dummy-news";
import Image from "next/image";

export default function NewsPage() {
    return (
        <>
            <div className='flex justify-center items-center'>
                <h1 className='text-4xl'>News Page</h1>
            </div>
            <ul className='news-list'>
                {
                    DUMMY_NEWS.map((newsItem) => {
                        return (<li key={newsItem.id}>
                                <Link href={`/news/${newsItem.slug}`}>
                                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                                    <span>{newsItem.title}</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}