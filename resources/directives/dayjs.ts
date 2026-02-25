import type { Directive, DirectiveBinding } from "vue";
import dayjs from "@/resources/support/dayjs";

/**
 *
 * @usage v-dayjs="[data]"
 */
const DayJSDirective: Directive = {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        const datetime = dayjs(binding.value);
        const format: string = el.hasAttribute('data-dayjs-format') ? (el.dataset.dayjsFormat as string) : (el.textContent as string).trim();
        if (!el.hasAttribute('data-dayjs-format')) {
            el.setAttribute('data-dayjs-format', format);
        }
        el.innerText = datetime.format(format);
    },
    updated(el: HTMLElement, binding: DirectiveBinding) {
        if (binding.value === binding.oldValue) return;

        const datetime = dayjs(binding.value);
        const format: string = el.hasAttribute('data-dayjs-format') ? (el.dataset.dayjsFormat as string) : (el.textContent as string).trim();
        if (!el.hasAttribute('data-dayjs-format')) {
            el.setAttribute('data-dayjs-format', format);
        }
        el.innerText = datetime.format(format);
    },
};

// Export Module
export default DayJSDirective;
export { DayJSDirective };
