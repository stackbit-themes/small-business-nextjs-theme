import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { Social, Action, Link } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';

export default function Footer(props) {
    const { colors = 'colors-d', styles = {}, annotationPrefix, ...rest } = props;
    return (
        <footer
            className={classNames('sb-component', 'sb-component-footer', colors, styles.self?.padding ?? 'py-16 px-4')}
            data-sb-field-path={`${annotationPrefix}:footer`}
        >
            <div className={classNames('mx-auto', mapFooterMaxWidthStyles(styles.self?.width ?? 'narrow'))}>
                <FooterVariants {...rest} />
            </div>
        </footer>
    );
}

function FooterVariants(props) {
    const { variant = 'variant-a', ...rest } = props;
    switch (variant) {
        case 'variant-a':
            return <FooterVariantA {...rest} />;
        case 'variant-b':
            return <FooterVariantB {...rest} />;
        default:
            return null;
    }
}

function FooterVariantA(props) {
    const { logo, title, text, primaryLinks = [], socialLinks = [], legalLinks = [], contacts, copyrightText } = props;
    return (
        <>
            {(logo || title || text) && (
                <div className="mb-12">
                    <Link href="/" className="sb-footer-logo flex items-center">
                        {logo && <ImageBlock {...logo} className={classNames('max-h-12', { 'mr-2': title })} data-sb-field-path=".logo" />}
                        {title && (
                            <span className="text-3xl font-medium" data-sb-field-path=".title">
                                {title}
                            </span>
                        )}
                    </Link>
                    {text && (
                        <Markdown
                            options={{ forceBlock: true, forceWrapper: true }}
                            className={classNames('sb-markdown', 'max-w-xl', { 'mt-8': title || logo })}
                            data-sb-field-path=".text"
                        >
                            {text}
                        </Markdown>
                    )}
                </div>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0 || contacts) && (
                <div className="sm:flex sm:justify-between sm:items-end">
                    {primaryLinks.length > 0 && (
                        <div className="mb-6">
                            <ul className="flex flex-col items-start mb-6 space-y-6 text-lg" data-sb-field-path=".primaryLinks">
                                {primaryLinks.map((link, index) => (
                                    <li key={index}>
                                        <Action {...link} data-sb-field-path={`.${index}`} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {(socialLinks.length > 0 || contacts) && (
                        <div className="mb-6">
                            {socialLinks.length > 0 && (
                                <ul className="flex items-center mb-6 space-x-10" data-sb-field-path=".socialLinks">
                                    {socialLinks.map((link, index) => (
                                        <li key={index}>
                                            <Social {...link} data-sb-field-path={`.${index}`} />
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {contacts && <Contacts {...contacts} className="mb-6 space-y-4 text-lg" />}
                        </div>
                    )}
                </div>
            )}
            <div className="border-t-2 border-current flex flex-col-reverse justify-between pt-6 lg:flex-row">
                <Markdown options={{ forceInline: true, forceWrapper: true, wrapper: 'p' }} className="sb-markdown" data-sb-field-path=".copyrightText">
                    {copyrightText}
                </Markdown>
                {legalLinks.length > 0 && (
                    <ul className="flex flex-col mb-6 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row" data-sb-field-path=".legalLinks">
                        {legalLinks.map((link, index) => (
                            <li key={index}>
                                <Action {...link} data-sb-field-path={`.${index}`} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

function FooterVariantB(props) {
    const { logo, title, text, primaryLinks = [], socialLinks = [], legalLinks = [], contacts, copyrightText } = props;
    return (
        <>
            <div className="flex flex-col items-center pb-20 text-center">
                {(logo || title || text) && (
                    <div className="mb-20">
                        <Link href="/" className="sb-footer-logo flex items-center justify-center">
                            {logo && <ImageBlock {...logo} className={classNames('max-h-12', { 'mr-2': title })} data-sb-field-path=".logo" />}
                            {title && (
                                <span className="text-3xl font-medium" data-sb-field-path=".title">
                                    {title}
                                </span>
                            )}
                        </Link>
                        {text && (
                            <Markdown
                                options={{ forceBlock: true, forceWrapper: true }}
                                className={classNames('sb-markdown', 'max-w-2xl', { 'mt-8': title || logo })}
                                data-sb-field-path=".text"
                            >
                                {text}
                            </Markdown>
                        )}
                    </div>
                )}
                {primaryLinks.length > 0 && (
                    <div className="w-full max-w-5xl">
                        <ul className="flex flex-wrap justify-evenly mb-6 text-lg" data-sb-field-path=".primaryLinks">
                            {primaryLinks.map((link, index) => (
                                <li key={index} className="mx-4 mb-2">
                                    <Action {...link} data-sb-field-path={`.${index}`} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {(socialLinks.length > 0 || contacts) && (
                    <div className="flex flex-wrap justify-evenly">
                        {socialLinks.length > 0 && (
                            <ul className="flex items-center justify-center mx-4 mb-4" data-sb-field-path=".socialLinks">
                                {socialLinks.map((link, index) => (
                                    <li key={index} className="mx-4 mb-2">
                                        <Social {...link} data-sb-field-path={`.${index}`} />
                                    </li>
                                ))}
                            </ul>
                        )}
                        {contacts && <Contacts {...contacts} className="flex flex-wrap justify-center mx-4 mb-4" classNameItem="mx-4 mb-2" />}
                    </div>
                )}
            </div>
            <div
                className={classNames(
                    'border-t-2',
                    'border-current',
                    'flex',
                    'flex-col-reverse',
                    'items-center',
                    'pt-8',
                    'lg:flex-row',
                    'lg:items-start',
                    copyrightText && legalLinks.length > 0 ? 'lg:justify-between' : 'lg:justify-center'
                )}
            >
                {copyrightText && (
                    <Markdown
                        options={{ forceInline: true, forceWrapper: true, wrapper: 'p' }}
                        className={classNames('sb-markdown', { 'mt-6 lg:mt-0': legalLinks.length > 0 })}
                        data-sb-field-path=".copyrightText"
                    >
                        {copyrightText}
                    </Markdown>
                )}
                {legalLinks.length > 0 && (
                    <ul className="flex flex-wrap justify-center" data-sb-field-path=".legalLinks">
                        {legalLinks.map((link, index) => (
                            <li key={index} className={classNames('mx-4', 'mb-2', { 'lg:ml-8 lg:mr-0': copyrightText })}>
                                <Action {...link} data-sb-field-path={`.${index}`} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

function Contacts(props) {
    const { phoneNumber, phoneAltText, email, emailAltText, address, addressAltText, elementId, className, classNameItem } = props;
    return (
        <div id={elementId || null} className={className} data-sb-field-path=".contacts">
            {phoneNumber && (
                <p className={classNameItem}>
                    <a href={`tel:${phoneNumber}`} aria-label={phoneAltText} data-sb-field-path=".phoneNumber .phoneNumber#@href .phoneAltText#@title">
                        {phoneNumber}
                    </a>
                </p>
            )}
            {email && (
                <p className={classNameItem}>
                    <a href={`mailto:${email}`} aria-label={emailAltText} data-sb-field-path=".email .email#@href .emailAltText#@title">
                        {email}
                    </a>
                </p>
            )}
            {address && (
                <p className={classNameItem}>
                    <a
                        href={`https://www.google.com/maps/search/${address}`}
                        aria-label={addressAltText}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-sb-field-path=".address .address#@href .addressAltText#@title"
                    >
                        {address}
                    </a>
                </p>
            )}
        </div>
    );
}

function mapFooterMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-7xl';
        case 'wide':
            return 'max-w-screen-2xl';
        case 'full':
            return 'max-w-full';
        default:
            return null;
    }
}
