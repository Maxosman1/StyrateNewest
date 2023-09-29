import { useSpring, animated } from 'react-spring'

export function bottomToTopTransition(props) {
    const { y } = useSpring({
        from: { y: props.height },
        to: { y: 0 }
    });

    const slideFromTop = { transform: y.interpolate(y => `translate3d(0,${y}px,0)`) };
    const slideToTop = { transform: y.interpolate(y => `translate3d(0,${y}px,0)`) };

    return {
        cardStyle: props.next
            ? slideFromTop
            : slideToTop,
    };
}

export function rightToLeftTransition(props) {
    const { x } = useSpring({
        from: { x: props.width },
        to: { x: 0 }
    });

    const slideFromRight = { transform: x.interpolate(x => `translate3d(${x}px,0,0)`) };
    const slideToLeft = { transform: x.interpolate(x => `translate3d(${x}px,0,0)`) };

    return {
        cardStyle: props.next
            ? slideFromRight
            : slideToLeft,
    };
}