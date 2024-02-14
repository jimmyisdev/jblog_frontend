import Link from 'next/link'
export default function ArticleItem({ id, title, topic }: { id: string, title: string, topic: string }) {
    return (
        <li key={`article-${id}`} className='mb-2 font-bold hover:text-red-800'>
            <Link href={`articles/${id}`}>
                <div className='flex flex-row'>
                    <span className='mr-2'>[{topic.toUpperCase()}]</span>
                    <h1>{title}</h1>
                </div>
            </Link>
        </li>
    )
}
