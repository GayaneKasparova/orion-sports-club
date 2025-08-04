import {Locale} from "@/lib/i18n";
import {HOMEPAGE_QUERY} from "@/lib/queries";
import {performRequest} from "@/lib/datocms";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Trainers from "@/components/Trainers";
import Packages from "@/components/Packages";

export default async function Page({params}: {
    params: Promise<{ locale: Locale }>
}) {
    const {locale} = await params;
    const {homePage} = await performRequest(HOMEPAGE_QUERY, {locale});
    const heroData = {
        heroTitle: homePage?.bannerTitle,
        heroText: homePage?.bannerText,
        heroGradientBtnLink: homePage?.bannerGradientButtonLink,
        heroGradientBtnText: homePage?.bannerGradientButtonText,
        heroButtonLink: homePage?.bannerButtonLink,
        heroButtonText: homePage?.bannerButtonText,
        heroBackgroundImage: homePage?.bannerBackgroundImage?.url
    }
    return (
        <>
            <Hero {...heroData}/>
            <About />
            <Trainers />
            <Packages />
        </>
    )
}
