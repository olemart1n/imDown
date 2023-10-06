import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Header } from "~/components/layoutComponents/header";
import { Footer } from "~/components/layoutComponents/footer";
export default component$(() => {
    return (
        <>
            <Header />
            <main>
                <Slot />
            </main>
            <Footer />
        </>
    );
});

export const onGet: RequestHandler = async ({ cacheControl }) => {
    cacheControl({
        staleWhileRevalidate: 60 * 60 * 24 * 7,
        maxAge: 5,
    });
};
