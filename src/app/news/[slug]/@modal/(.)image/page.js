"use client"

import {DUMMY_NEWS} from "@/dummy-news";
import {notFound, useRouter} from "next/navigation";

export default function InterceptedImagePage({params}) {
    const router = useRouter()

    const newsItemSlug = params.slug
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug)

    if (!newsItem) {
        notFound()
    }

    return (
        <>
            <div className={'modal-backdrop'} onClick={router.back} />
            <dialog className={'modal'}  open>
                {/*<h2>Intercepted</h2>*/}
                <div className={'fullscreen-image'}>
                    <img className='w-[700px]' src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                </div>
            </dialog>
        </>
    )
}