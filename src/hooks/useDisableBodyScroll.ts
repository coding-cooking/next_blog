import { useEffect, useRef } from "react";

export const useDisableBodyScroll = (open: boolean) => {
    const htmlRef = useRef<HTMLHtmlElement | null>();
    const bodyRef = useRef<HTMLBodyElement | null>();

    useEffect(() => {
        htmlRef.current = document.querySelector("html");
        bodyRef.current = document.querySelector("body");
    }, [])

    useEffect(() => {
        if(!htmlRef.current || !bodyRef.current || open=== undefined){
            return;
        }

        if (open) {
            htmlRef.current.classList.add("scrollForbidden");
            bodyRef.current.classList.add("scrollForbidden");

        } else {
            htmlRef.current.classList.remove("scrollForbidden");
            bodyRef.current.classList.remove("scrollForbidden");
        }

        return () => {
            if (htmlRef.current && bodyRef.current){
                htmlRef.current.classList.remove("scrollForbidden");
                bodyRef.current.classList.remove("scrollForbidden");
            }
        }
    }, [open]);
};