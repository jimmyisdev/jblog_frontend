import Article from '@/components/Article/Article'
import axios from 'axios'
import { Metadata } from 'next'
import { cache } from "react";

type Props = {
    params: { id: string }
}

export const dynamicParams = true
const getArticle = cache(async (id: string) => {
    const res = await axios.get(`http://localhost:4000/api/v1/articles/${id}`)
    const { data } = await res.data
    return data
})
export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const article = await getArticle(params.id)
    return {
        title: article.title
    }
}
export default async function page({ params }: Props) {
    const article = await getArticle(params.id)
    return (
        <div className='p-2'>
            <Article data={article} />
        </div>
    )
}
