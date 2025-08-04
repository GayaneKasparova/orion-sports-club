import {Locale} from "@/lib/i18n";

export default async function BlogPage({params}: {
    params: Promise<{ locale: Locale }>
}) {
    const {locale} = await params;
    return (
        <>
            <h1>Blog - {locale}</h1>
        </>
    )
}