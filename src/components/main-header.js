import Link from 'next/link';
import NewsLink from "@/src/components/news-link";

export default function MainHeader() {
    return (
        <header id="main-header">
            <div id="logo">
                <Link href={"/"}>NewsCorner</Link>
            </div>
            <nav>
                <ul>
                    <li><NewsLink href={'/news'}>News</NewsLink></li>
                    <li><NewsLink href={'/archive'}>Archives</NewsLink></li>
                </ul>
            </nav>
        </header>
    );
}