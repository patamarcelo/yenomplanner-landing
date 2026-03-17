import { useEffect } from "react";

export default function SeoHead({
    title,
    description,
    canonical,
    keywords = "",
}) {
    useEffect(() => {
        if (title) document.title = title;

        const setMeta = (attr, name, content) => {
            if (!content) return;
            let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
            if (!tag) {
                tag = document.createElement("meta");
                tag.setAttribute(attr, name);
                document.head.appendChild(tag);
            }
            tag.setAttribute("content", content);
        };

        const setLink = (rel, href) => {
            if (!href) return;
            let tag = document.head.querySelector(`link[rel="${rel}"]`);
            if (!tag) {
                tag = document.createElement("link");
                tag.setAttribute("rel", rel);
                document.head.appendChild(tag);
            }
            tag.setAttribute("href", href);
        };

        setMeta("name", "description", description);
        setMeta("name", "keywords", keywords);
        setMeta("name", "robots", "index,follow");

        setMeta("property", "og:title", title);
        setMeta("property", "og:description", description);
        setMeta("property", "og:type", "website");
        setMeta("property", "og:url", canonical);

        setMeta("name", "twitter:card", "summary_large_image");
        setMeta("name", "twitter:title", title);
        setMeta("name", "twitter:description", description);

        setLink("canonical", canonical);
    }, [title, description, canonical, keywords]);

    return null;
}