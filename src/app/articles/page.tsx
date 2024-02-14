import React, { Suspense } from 'react'
import ArticlesList from './_components/ArticlesList'
import Loading from '../loading'

export const metadata = {
    title: 'Jblog | Articles'
}
export default function Articles() {
    return (
        <main className='p-2'>
            <div className='mb-2'>
                <h1 className='text-2xl font-bold'>Articles</h1>
            </div>
            <Suspense fallback={<Loading />}>
                <ArticlesList />
            </Suspense>
        </main>
    )
}
