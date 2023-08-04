import { cubicInOut } from "svelte/easing"


// https://svelte.dev/docs/element-directives#custom-animation-functions
// Practice custom css animation
const appear = (node: HTMLElement, {duration=500, easing=cubicInOut}) =>  {
    const style = getComputedStyle(node)
    const originalOpacity = Number(style.opacity)

    return {
        duration: duration,
        easing: easing,
        css: (t: number) => {
        console.log(t)
        return `opacity: ${t * originalOpacity};
                transform: scale(${t});
                rotate: ${t * 360}deg;`
        }
    }

}

export default appear