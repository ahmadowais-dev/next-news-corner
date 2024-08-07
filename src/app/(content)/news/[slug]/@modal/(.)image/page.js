import {notFound, useRouter} from "next/navigation";
import ModalBackdrop from "@/src/components/modal-backdrop";
import {getNewsItem} from "@/src/lib/news";

export default async function InterceptedImagePage({params}) {

    const newsItemSlug = params.slug
    const newsItem = await getNewsItem(newsItemSlug)

    if (!newsItem) {
        notFound()
    }

    return (
        <>
            <ModalBackdrop/>
            <dialog className={'modal'} open>
                <h2>Intercepted</h2>
                <div className={'fullscreen-image'}>
                    <img className='w-[700px]' src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                </div>
            </dialog>
        </>
    )
}