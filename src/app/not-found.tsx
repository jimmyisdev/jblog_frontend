import Link from "next/link"

export default function notFound() {
    return (
        <main className="p-2 flex flex-col justify-center items-center w-full">
            <h2 className="text-3xl">There was a problem.</h2>
            <p>We could not find the page you were looking for.</p>
            <p>Read some texts <Link href="/articles">homepage</Link>.</p>
        </main>
    )
}
