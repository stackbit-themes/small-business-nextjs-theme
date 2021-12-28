import * as React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import Action from '../../atoms/Action';
import ImageBlock from '../../molecules/ImageBlock';

export default function FeaturedPeopleSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-d';
    const styles = props.styles || {};
    const sectionWidth = styles.self?.width || 'wide';
    const sectionHeight = styles.self?.height || 'auto';
    const sectionJustifyContent = styles.self?.justifyContent || 'center';
    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-featured-people-section',
                colors,
                'flex',
                'flex-col',
                'justify-center',
                mapMinHeightStyles(sectionHeight),
                styles.self?.margin,
                styles.self?.padding || 'py-12 px-4',
                styles.self?.borderColor,
                styles.self?.borderStyle ? mapStyles({ borderStyle: styles.self?.borderStyle }) : 'border-none',
                styles.self?.borderRadius ? mapStyles({ borderRadius: styles.self?.borderRadius }) : null
            )}
            style={{
                borderWidth: styles.self?.borderWidth ? `${styles.self?.borderWidth}px` : null
            }}
        >
            <div className={classNames('flex', 'w-full', mapStyles({ justifyContent: sectionJustifyContent }))}>
                <div className={classNames('w-full', mapMaxWidthStyles(sectionWidth))}>
                    {props.title && (
                        <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                            {props.title}
                        </h2>
                    )}
                    {props.subtitle && (
                        <p
                            className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null, {
                                'mt-6': props.title
                            })}
                            data-sb-field-path=".subtitle"
                        >
                            {props.subtitle}
                        </p>
                    )}
                    {featuredPeopleVariants(props)}
                    {featuredPeopleActions(props)}
                </div>
            </div>
        </div>
    );
}

function featuredPeopleActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div className="mt-12 overflow-x-hidden">
            <div
                className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
                data-sb-field-path=".actions"
            >
                {props.actions.map((action, index) => (
                    <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                ))}
            </div>
        </div>
    );
}

function featuredPeopleVariants(props) {
    const variant = props.variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return peopleVariantA(props);
        case 'variant-b':
            return peopleVariantB(props);
        case 'variant-c':
            return peopleVariantC(props);
    }
    return null;
}

function peopleVariantA(props) {
    const people = props.people || [];
    if (people.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-x-8', 'gap-y-10', 'sm:grid-cols-2', 'lg:grid-cols-4', { 'mt-12': props.title || props.subtitle })}
            data-sb-field-path=".people"
        >
            {people.map((person, index) => (
                <article key={index} data-sb-field-path={`.${index}`}>
                    {person.image && (
                        <div className="h-0 w-full pt-1/1 relative mb-4">
                            <ImageBlock {...person.image} className="absolute left-0 h-full object-cover top-0 w-full" data-sb-field-path=".image" />
                        </div>
                    )}
                    {(person.firstName || person.lastName) && (
                        <h3 className="text-2xl">
                            {person.firstName && <span data-sb-field-path=".firstName">{person.firstName}</span>}{' '}
                            {person.lastName && <span data-sb-field-path=".lastName">{person.lastName}</span>}
                        </h3>
                    )}
                    {person.role && (
                        <p className={classNames({ 'mt-1': person.firstName || person.lastName })} data-sb-field-path=".role">
                            {person.role}
                        </p>
                    )}
                </article>
            ))}
        </div>
    );
}

function peopleVariantB(props) {
    const people = props.people || [];
    if (people.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-x-8', 'gap-y-10', 'lg:grid-cols-2', 'sm:gap-y-14', { 'mt-12': props.title || props.subtitle })}
            data-sb-field-path=".people"
        >
            {people.map((person, index) => (
                <article key={index} className="sm:flex" data-sb-field-path={`.${index}`}>
                    {person.image && (
                        <div className="w-full mb-4 sm:flex-shrink-0 sm:h-full sm:w-1/3 sm:mb-0 sm:mr-6">
                            <div className="block h-0 w-full pt-1/1 relative">
                                <ImageBlock {...person.image} className="absolute left-0 h-full object-cover top-0 w-full" data-sb-field-path=".image" />
                            </div>
                        </div>
                    )}
                    <div className="sm:flex-grow">
                        {(person.firstName || person.lastName) && (
                            <h3 className="text-2xl">
                                {person.firstName && <span data-sb-field-path=".firstName">{person.firstName}</span>}{' '}
                                {person.lastName && <span data-sb-field-path=".lastName">{person.lastName}</span>}
                            </h3>
                        )}
                        {person.role && (
                            <p className={classNames({ 'mt-1': person.firstName || person.lastName })} data-sb-field-path=".role">
                                {person.role}
                            </p>
                        )}
                        {person.bio && (
                            <Markdown
                                options={{ forceBlock: true, forceWrapper: true }}
                                className={classNames({ 'mt-4': person.firstName || person.lastName || person.role })}
                                data-sb-field-path=".bio"
                            >
                                {person.bio}
                            </Markdown>
                        )}
                    </div>
                </article>
            ))}
        </div>
    );
}

function peopleVariantC(props) {
    const people = props.people || [];
    if (people.length === 0) {
        return null;
    }
    const middleIndex = Math.floor(people.length / 2);
    const peopleLeft = people.slice(0, middleIndex);
    const peopleRight = people.slice(middleIndex, people.length);
    return (
        <div className={classNames('grid', 'gap-x-14', 'gap-y-12', 'sm:grid-cols-2', { 'mt-20': props.title || props.subtitle })} data-sb-field-path=".people">
            {peopleLeft.length > 0 && <div className="sm:mt-32">{peopleListVariantC(peopleLeft)}</div>}
            {peopleRight.length > 0 && <div>{peopleListVariantC(peopleRight, middleIndex)}</div>}
        </div>
    );
}

function peopleListVariantC(people, annotIndexStart = 0) {
    return people.map((person, index, arr) => (
        <article key={index} className={classNames(arr.length - 1 === index ? null : 'mb-16')} data-sb-field-path={`.${annotIndexStart + index}`}>
            {person.image && (
                <div className="mb-4">
                    <ImageBlock {...person.image} className="w-full" data-sb-field-path=".image" />
                </div>
            )}
            <div>
                {(person.firstName || person.lastName) && (
                    <h3 className="text-xl">
                        {person.firstName && <span data-sb-field-path=".firstName">{person.firstName}</span>}{' '}
                        {person.lastName && <span data-sb-field-path=".lastName">{person.lastName}</span>}
                    </h3>
                )}
                {person.role && (
                    <p className={classNames({ 'mt-1': person.firstName || person.lastName })} data-sb-field-path=".role">
                        {person.role}
                    </p>
                )}
                {person.bio && (
                    <Markdown
                        options={{ forceBlock: true, forceWrapper: true }}
                        className={classNames('sb-markdown', { 'mt-4': person.firstName || person.lastName || person.role })}
                        data-sb-field-path=".bio"
                    >
                        {person.bio}
                    </Markdown>
                )}
            </div>
        </article>
    ));
}

function mapMinHeightStyles(height) {
    switch (height) {
        case 'auto':
            return 'min-h-0';
        case 'screen':
            return 'min-h-screen';
    }
    return null;
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-5xl';
        case 'wide':
            return 'max-w-7xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
