export default function Map() {

    return (
        <div className="my-10 lg:my-16 flex justify-center">
            <div
                className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-card bg-card map-filter m-1">
                <iframe
                    src="https://maps.google.com/maps?q=40.1892341736294,44.51844651157423&z=18&output=embed"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Google Map"
                    className="w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px] rounded-xl "
                />
            </div>
        </div>

    )
}
