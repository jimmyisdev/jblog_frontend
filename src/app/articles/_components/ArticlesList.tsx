import { t_article } from '@/type'
import ArticleItem from './ArticleItem'
import axios from 'axios'

export async function generateStaticParams() {
    const res = await axios.get('http://localhost:4000/api/v1/articles')
    const { data } = await res.data
    return data.map((item: t_article) => {
        id: item._id
    })
}

async function getArticles() {
    const res = await axios.get('http://localhost:4000/api/v1/articles')
    const { data } = await res.data
    return data
}
export default async function ArticlesList() {
    const articlesTitles = await getArticles()
    return (
        <ul>
            {!!articlesTitles.length && articlesTitles.map(({ _id, title, topic = "" }: t_article) => {
                return (
                    <ArticleItem key={`${_id}_${title}`} id={_id} title={title} topic={topic} />
                )
            })}
        </ul>
    )
}
