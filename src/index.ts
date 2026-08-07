/*
 * Kettu port of Vencord's NoTypingAnimation
 * Original: Vencord (c) 2023 Vendicated and contributors — GPL-3.0-or-later
 */

import { findByPropsLazy } from "@vendetta/metro";
import { before } from "@vendetta/patcher";


const TypingDots = findByPropsLazy("dotCycle");

let unpatch: (() => void) | undefined;

export default {
    onLoad() {

        unpatch = before("default", TypingDots, (args) => {
            const props = args[0];
            if (props && typeof props === "object" && "focused" in props) {
                props.focused = false;
            }
        });
    },
    onUnload() {
        unpatch?.();
    }
};
