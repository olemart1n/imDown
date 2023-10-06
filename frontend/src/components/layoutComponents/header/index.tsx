import { component$, useStyles$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./index.css?inline";
export const Header = component$(() => {
    useStylesScoped$(styles);
    return (
        <header>
            <Link href="/">
                <h1>MedPåDet</h1>
            </Link>
        </header>
    );
});
