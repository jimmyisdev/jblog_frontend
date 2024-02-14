import { useFormStatus } from 'react-dom'
import { FormEvent } from 'react';
import axios from 'axios';
import { SubmitButton } from './SubmitBtn';

let mockData = {
    title: "賴清德初五屏東拜廟發紅包 藍營市長全程陪同",
    subtitle: "總統當選人賴清德(右二)大年初五屏東發紅包，吸引民眾排隊領取。",
    topic: "politic",
    contents: [
        "總統當選人賴清德14日上午到屏東東隆宮及玉皇宮參拜並發送一元紅包，兩地民眾排成長長人龍。賴清德表示，選在初五南下屏東，除了叩謝神恩，也感謝此次選舉屏東鄉親的支持，向大家拜年，祝福大家新的一年身體健康、事業成功，龍年行大運。",
        "賴清德在兩地拜廟時，包括屏東縣長周春米、立委徐富癸、鍾佳濱、莊瑞雄等人皆到場陪同，眾多支持者到場歡迎，賴清德在上香後致詞時表示，感謝眾神保佑，讓這次選舉平安順利，除了叩謝神恩外，也向屏東縣鄉親表示感謝賜票。",
        "除黨籍民代陪同外，國民黨籍屏東市長周佳琪在屏東市玉皇宮也全程陪同，周指出，感謝賴準總統大年初五來到屏東市，帶給地方滿滿喜氣，希望未來能更重視屏東發展，特別是首善之區屏東市，有許多建設、青年就業等議題，希望在未來領導者帶領下，讓屏東更好。"
    ],
}
async function createArticle() {
    'use server';
    const res = await axios.post('http://localhost:4000/api/v1/articles', mockData);
    const { data } = await res.data
    return data
}
export default function CreateArticle() {

    return (
        <form action={createArticle}>
            <input name='title' />
            <input name='subtitle' />
            <input name='topic' />
            <textarea name='contents' />
            <SubmitButton />
        </form>
    )
}
