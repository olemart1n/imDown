import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./index.css?inline";
export const Footer = component$(() => {
    useStyles$(styles);
    return (
        <footer>
            <p>
                <b>Lagd med ♡ av oss i MedPåDet</b>
            </p>
        </footer>
    );
});
