import {Locale} from "../../lib/i18n";
import {HOMEPAGE_QUERY} from "../../lib/queries";
import {performRequest} from "../../lib/datocms";

export default async function Page({params}: {
    params: Promise<{ locale: Locale }>
}) {
    const {locale} = await params;
    const {homePage} = await performRequest(HOMEPAGE_QUERY, {locale});

    return (
        <>
            <h1>This is the page {locale}</h1>
            <p>{homePage?.aboutUsTitle}</p>
        </>
    )
}
