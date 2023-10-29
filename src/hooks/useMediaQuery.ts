import { useEffect, useState } from 'react';

export const useMediaQuery = (mediaQuery: string) => {
    const [matches, setMatches] = useState<boolean>();

    useEffect(() => {
        if (typeof window === 'undefined') {
            setMatches(undefined);
            return;
        }

        const matchMedia = window.matchMedia(mediaQuery);

        const handleChange = (query: MediaQueryListEvent) => {
            setMatches(query.matches);
        };

        // Reference: https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/media-query/src/use-media-query.ts
        if (typeof matchMedia.addListener === "function") {
            matchMedia.addListener(handleChange);
        } else {
            matchMedia.addEventListener("change", handleChange);
        }


        setMatches(matchMedia.matches);

        return () => {
            if (typeof matchMedia.removeListener === "function") {
                matchMedia.removeListener(handleChange);
            } else {
                matchMedia.removeEventListener("change", handleChange);
            }
        }

    }, [mediaQuery]);

    return matches;

}
