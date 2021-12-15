import * as React from 'react';
import classNames from 'classnames';

export default function VideoBlock(props) {
    const { url, thumbnailUrl, autoplay, loop, muted, controls } = props;
    if (!url) {
        return null;
    }
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;
    const annotationPrefix = props['data-sb-field-path'] || '';
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.elementId#@id`,
        `${annotationPrefix}.thumbnailUrl#@poster`
    ];
    return (
        <video
            id={cssId}
            {...(autoplay && { autoPlay: true })}
            {...(loop && { loop: true })}
            {...(muted && { muted: true })}
            {...(controls && { controls: true })}
            playsInline
            poster={thumbnailUrl}
            className={classNames('sb-component', 'sb-component-block', 'sb-component-video-block', cssClasses)}
            data-sb-field-path={annotations.join(' ').trim()}
        >
            <source src={url} type="video/mp4" data-sb-field-path=".url#@src" />
        </video>
    );
}
