import p_tippy, { type Props } from 'tippy.js' ;
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

const tippy = (node: HTMLElement, options: Partial<Props>) => {
    const instance = p_tippy(node, options)

    return {
        update(options: Props) {  
            instance.setProps(options)
        },
        destroy() {
            instance.destroy()
        }
    }
}


export default tippy;