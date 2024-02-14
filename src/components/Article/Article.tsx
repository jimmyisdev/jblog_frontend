import { t_article } from '@/type'

export default function Article({ data }: { data: t_article }) {
    const { title, subtitle, contents } = data
    return (
        <div className=' w-full h-dvh flex flex-col '>
            <div className='flex flex-row justify-between mb-2'>
                <div className=' justify-between'>
                    <h1 className='font-bold'>{title}</h1>
                    {subtitle?.length && <h2>{subtitle}</h2>}
                </div>
            </div>
            <article className='h-96 overflow-auto scroll-smooth flex flex-col'>
                {contents?.map(item => {
                    return (
                        <>
                            <span key={contents.indexOf(title + item)} className='indent-4 mb-4'>{item}</span>
                        </>
                    )
                })}
            </article>
        </div>
    )
}
