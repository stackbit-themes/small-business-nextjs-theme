import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import Action from '../../atoms/Action';
import FeaturedItem from './FeaturedItem';

export default function FeaturedItemsSection(props) {
    const {
        type,
        elementId,
        colors,
        title,
        subtitle,
        actions = [],
        items = [],
        columns = 3,
        spacingX = 16,
        spacingY = 16,
        enableHover,
        styles = {},
        'data-sb-field-path': fieldPath
    } = props;
    return (
        <Section type={type} elementId={elementId} colors={colors} styles={styles.self} data-sb-field-path={fieldPath}>
            {title && (
                <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {title}
                </h2>
            )}
            {subtitle && (
                <p
                    className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null, {
                        'mt-6': title
                    })}
                    data-sb-field-path=".subtitle"
                >
                    {subtitle}
                </p>
            )}
            <FeaturedItemsActions actions={actions} styles={styles.actions} hasTopMargin={!!(title || subtitle)} />
            {items.length > 0 && (
                <div
                    className={classNames('grid', mapColStyles(columns), {
                        'mt-12': title || subtitle || actions.length > 0
                    })}
                    style={{
                        columnGap: spacingX ? `${spacingX}px` : null,
                        rowGap: spacingY ? `${spacingY}px` : null
                    }}
                    data-sb-field-path=".items"
                >
                    {items.map((item, index) => (
                        <FeaturedItem key={index} {...item} enableHover={enableHover} data-sb-field-path={`.${index}`} />
                    ))}
                </div>
            )}
        </Section>
    );
}

function FeaturedItemsActions(props) {
    const { actions = [], styles = {}, hasTopMargin } = props;
    if (actions.length === 0) {
        return null;
    }
    return (
        <div className={classNames('overflow-x-hidden', { 'mt-8': hasTopMargin })}>
            <div className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', mapStyles(styles))} data-sb-field-path=".actions">
                {actions.map((action, index) => (
                    <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                ))}
            </div>
        </div>
    );
}

function mapColStyles(columns) {
    switch (columns) {
        case 4:
            return 'md:grid-cols-4';
        case 3:
            return 'md:grid-cols-3';
        case 2:
            return 'md:grid-cols-2';
        default:
            return null;
    }
}
