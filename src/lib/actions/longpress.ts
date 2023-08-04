const longpress = (node: HTMLElement, { duration = 500 }) => {
    let timer: NodeJS.Timeout;

    const handleMouseDown = () => {
        timer = setTimeout(() => {
            node.dispatchEvent(new CustomEvent('longpress'));
        }, duration);
    }

    const handleMouseUp = () => {
        clearTimeout(timer);
    }

    node.addEventListener('mousedown', handleMouseDown);
    node.addEventListener('mouseup', handleMouseUp);

    return {
        destroy() {
            clearTimeout(timer);
            node.removeEventListener('mousedown', handleMouseDown);
            node.removeEventListener('mouseup', handleMouseUp);
        }
    }
}

export default longpress