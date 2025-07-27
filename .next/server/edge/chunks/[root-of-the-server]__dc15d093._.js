(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__dc15d093._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "config": ()=>config,
    "middleware": ()=>middleware
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
;
const BACKEND_URL = process.env.MEDUSA_BACKEND_URL;
const PUBLISHABLE_API_KEY = ("TURBOPACK compile-time value", "pk_76ef92bd0db612970c6d0cb0ec3fb0fad0e5e2ff3da46e905589943b24b49764");
const DEFAULT_REGION = ("TURBOPACK compile-time value", "us") || "us";
const regionMapCache = {
    regionMap: new Map(),
    regionMapUpdated: Date.now()
};
async function getRegionMap(cacheId) {
    const { regionMap, regionMapUpdated } = regionMapCache;
    if (!BACKEND_URL) {
        throw new Error("Middleware.ts: Error fetching regions. Did you set up regions in your Medusa Admin and define a MEDUSA_BACKEND_URL environment variable? Note that the variable is no longer named NEXT_PUBLIC_MEDUSA_BACKEND_URL.");
    }
    if (!regionMap.keys().next().value || regionMapUpdated < Date.now() - 3600 * 1000) {
        // Fetch regions from Medusa. We can't use the JS client here because middleware is running on Edge and the client needs a Node environment.
        const { regions } = await fetch(`${BACKEND_URL}/store/regions`, {
            headers: {
                "x-publishable-api-key": PUBLISHABLE_API_KEY
            },
            next: {
                revalidate: 3600,
                tags: [
                    `regions-${cacheId}`
                ]
            },
            cache: "force-cache"
        }).then(async (response)=>{
            const json = await response.json();
            if (!response.ok) {
                throw new Error(json.message);
            }
            return json;
        });
        if (!regions?.length) {
            throw new Error("No regions found. Please set up regions in your Medusa Admin.");
        }
        // Create a map of country codes to regions.
        regions.forEach((region)=>{
            region.countries?.forEach((c)=>{
                regionMapCache.regionMap.set(c.iso_2 ?? "", region);
            });
        });
        regionMapCache.regionMapUpdated = Date.now();
    }
    return regionMapCache.regionMap;
}
/**
 * Fetches regions from Medusa and sets the region cookie.
 * @param request
 * @param response
 */ async function getCountryCode(request, regionMap) {
    try {
        let countryCode;
        const vercelCountryCode = request.headers.get("x-vercel-ip-country")?.toLowerCase();
        const urlCountryCode = request.nextUrl.pathname.split("/")[1]?.toLowerCase();
        if (urlCountryCode && regionMap.has(urlCountryCode)) {
            countryCode = urlCountryCode;
        } else if (vercelCountryCode && regionMap.has(vercelCountryCode)) {
            countryCode = vercelCountryCode;
        } else if (regionMap.has(DEFAULT_REGION)) {
            countryCode = DEFAULT_REGION;
        } else if (regionMap.keys().next().value) {
            countryCode = regionMap.keys().next().value;
        }
        return countryCode;
    } catch (error) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.error("Middleware.ts: Error getting the country code. Did you set up regions in your Medusa Admin and define a MEDUSA_BACKEND_URL environment variable? Note that the variable is no longer named NEXT_PUBLIC_MEDUSA_BACKEND_URL.");
        }
    }
}
async function middleware(request) {
    let redirectUrl = request.nextUrl.href;
    let response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl, 307);
    let cacheIdCookie = request.cookies.get("_medusa_cache_id");
    let cacheId = cacheIdCookie?.value || crypto.randomUUID();
    const regionMap = await getRegionMap(cacheId);
    const countryCode = regionMap && await getCountryCode(request, regionMap);
    const urlHasCountryCode = countryCode && request.nextUrl.pathname.split("/")[1].includes(countryCode);
    // if one of the country codes is in the url and the cache id is set, return next
    if (urlHasCountryCode && cacheIdCookie) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // if one of the country codes is in the url and the cache id is not set, set the cache id and redirect
    if (urlHasCountryCode && !cacheIdCookie) {
        response.cookies.set("_medusa_cache_id", cacheId, {
            maxAge: 60 * 60 * 24
        });
        return response;
    }
    // check if the url is a static asset
    if (request.nextUrl.pathname.includes(".")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const redirectPath = request.nextUrl.pathname === "/" ? "" : request.nextUrl.pathname;
    const queryString = request.nextUrl.search ? request.nextUrl.search : "";
    // If no country code is set, we redirect to the relevant region.
    if (!urlHasCountryCode && countryCode) {
        redirectUrl = `${request.nextUrl.origin}/${countryCode}${redirectPath}${queryString}`;
        response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(`${redirectUrl}`, 307);
    }
    return response;
}
const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|images|assets|png|svg|jpg|jpeg|gif|webp).*)"
    ]
};
}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__dc15d093._.js.map