import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function BackgroundImage(props) {
    const { url } = props;
    if (!url) {
        return null;
    }
    const cssClasses = props.className || null;
    const imageOpacity = props.opacity || props.opacity === 0 ? props.opacity : 100;
    const backgroundImageSize = props.backgroundSize || 'cover';
    const backgroundImagePosition = props.backgroundPosition || 'center';
    return (
        <div
            className={classNames('absolute', 'inset-0', 'bg-no-repeat', mapStyles({ backgroundSize: backgroundImageSize }), mapStyles({ backgroundPosition: backgroundImagePosition }), cssClasses)}
            style={{
                backgroundImage: `url('${url}')`,
                opacity: imageOpacity * 0.01
            }}
        />
    );
}
