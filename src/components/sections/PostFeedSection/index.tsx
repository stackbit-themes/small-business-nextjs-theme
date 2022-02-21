import * as React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import { Link, Action } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';
import ArrowRightIcon from '../../svgs/arrow-right';
import getPageUrlPath from '../../../utils/get-page-url-path';

export default function PostFeedSection(props) {
    const {
        type,
        elementId,
        colors,
        variant,
        title,
        subtitle,
        actions = [],
        posts = [],
        showDate,
        showAuthor,
        showExcerpt,
        showReadMoreLink,
        readMoreLinkLabel,
        pageLinks,
        annotatePosts,
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
                    className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-6': title })}
                    data-sb-field-path=".subtitle"
                >
                    {subtitle}
                </p>
            )}
            <PostFeedActions actions={actions} styles={styles.actions} hasTopMargin={!!(title || subtitle)} />
            <PostFeedVariants
                variant={variant}
                posts={posts}
                showDate={showDate}
                showAuthor={showAuthor}
                showExcerpt={showExcerpt}
                showReadMoreLink={showReadMoreLink}
                readMoreLinkLabel={readMoreLinkLabel}
                hasTopMargin={!!(title || subtitle || actions.length > 0)}
                annotatePosts={annotatePosts}
            />
            {pageLinks}
        </Section>
    );
}

function PostFeedActions(props) {
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

function PostFeedVariants(props) {
    const { variant = 'variant-a', ...rest } = props;
    switch (variant) {
        case 'variant-a':
            return <PostsVariantA {...rest} />;
        case 'variant-b':
            return <PostsVariantB {...rest} />;
        case 'variant-c':
            return <PostsVariantC {...rest} />;
        case 'variant-d':
            return <PostsVariantD {...rest} />;
        default:
            return null;
    }
}

function PostsVariantA(props) {
    const { posts = [], showDate, showAuthor, showExcerpt, showReadMoreLink, readMoreLinkLabel, hasTopMargin, annotatePosts } = props;
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-x-6', 'gap-y-12', 'md:grid-cols-2', 'lg:gap-x-8', {
                'mt-12': hasTopMargin
            })}
            {...(annotatePosts ? { 'data-sb-field-path': '.posts' } : null)}
        >
            {posts.map((post, index) => (
                <article key={index} className="sb-card overflow-hidden" data-sb-object-id={post.__metadata?.id}>
                    <div className="flex flex-col min-h-full">
                        {post.featuredImage && (
                            <Link href={getPageUrlPath(post)} className="block h-0 w-full pt-2/3 relative overflow-hidden">
                                <ImageBlock
                                    {...post.featuredImage}
                                    className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    data-sb-field-path="featuredImage"
                                />
                            </Link>
                        )}
                        <div className="flex flex-col flex-grow px-4 pt-6 pb-10 sm:px-6">
                            <div className="flex-grow">
                                <h3 className="text-3xl">
                                    <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                        {post.title}
                                    </Link>
                                </h3>
                                <PostAttribution showAuthor={showAuthor} post={post} className="mt-2" />
                                {showExcerpt && post.excerpt && (
                                    <p className="mt-4" data-sb-field-path="excerpt">
                                        {post.excerpt}
                                    </p>
                                )}
                            </div>
                            {(showDate || showReadMoreLink) && (
                                <div className="mt-12 space-y-6">
                                    {showDate && <PostDate post={post} className="mb-2" />}
                                    {showReadMoreLink && (
                                        <div>
                                            <Link
                                                href={getPageUrlPath(post)}
                                                className="sb-component sb-component-block sb-component-button sb-component-button-primary"
                                            >
                                                {readMoreLinkLabel && <span className="mr-3">{readMoreLinkLabel}</span>}
                                                <ArrowRightIcon className="fill-current h-5 w-5" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

function PostsVariantB(props) {
    const { posts = [], showDate, showAuthor, showExcerpt, showReadMoreLink, readMoreLinkLabel, hasTopMargin, annotatePosts } = props;
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-x-6', 'gap-y-12', 'md:grid-cols-3', 'lg:gap-x-8', {
                'mt-12': hasTopMargin
            })}
            {...(annotatePosts ? { 'data-sb-field-path': '.posts' } : null)}
        >
            {posts.map((post, index) => (
                <article key={index} className="sb-card overflow-hidden" data-sb-object-id={post.__metadata?.id}>
                    <div className="flex flex-col min-h-full">
                        {post.featuredImage && (
                            <Link href={getPageUrlPath(post)} className="block h-0 w-full pt-2/3 relative overflow-hidden">
                                <ImageBlock
                                    {...post.featuredImage}
                                    className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    data-sb-field-path="featuredImage"
                                />
                            </Link>
                        )}
                        <div className="flex flex-col flex-grow px-4 pt-6 pb-10 sm:px-6">
                            <div className="flex-grow">
                                <h3 className="text-2xl">
                                    <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                        {post.title}
                                    </Link>
                                </h3>
                                <PostAttribution showAuthor={showAuthor} post={post} className="mt-2" />
                                {showExcerpt && post.excerpt && (
                                    <p className="mt-4" data-sb-field-path="excerpt">
                                        {post.excerpt}
                                    </p>
                                )}
                            </div>
                            {(showDate || showReadMoreLink) && (
                                <div className="mt-12 space-y-6">
                                    {showDate && <PostDate post={post} className="mb-2" />}
                                    {showReadMoreLink && (
                                        <div>
                                            <Link
                                                href={getPageUrlPath(post)}
                                                className="sb-component sb-component-block sb-component-button sb-component-button-primary"
                                            >
                                                {readMoreLinkLabel && <span className="mr-3">{readMoreLinkLabel}</span>}
                                                <ArrowRightIcon className="fill-current h-5 w-5" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

function PostsVariantC(props) {
    const { posts = [], showDate, showAuthor, showExcerpt, showReadMoreLink, readMoreLinkLabel, hasTopMargin, annotatePosts } = props;
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-6', 'md:grid-cols-6', 'lg:gap-8', {
                'mt-12': hasTopMargin
            })}
            {...(annotatePosts ? { 'data-sb-field-path': '.posts' } : null)}
        >
            {posts.map((post, index) => (
                <article
                    key={index}
                    className={classNames('sb-card', 'overflow-hidden', index % 5 === 0 || index % 5 === 1 ? 'md:col-span-3' : 'md:col-span-2')}
                    data-sb-object-id={post.__metadata?.id}
                >
                    <div className="flex flex-col min-h-full">
                        {post.featuredImage && (
                            <Link href={getPageUrlPath(post)} className="block h-0 w-full pt-2/3 relative overflow-hidden">
                                <ImageBlock
                                    {...post.featuredImage}
                                    className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    data-sb-field-path="featuredImage"
                                />
                            </Link>
                        )}
                        <div className="flex flex-col flex-grow px-4 pt-6 pb-10 sm:px-6">
                            <div className="flex-grow">
                                <h3 className="text-3xl">
                                    <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                        {post.title}
                                    </Link>
                                </h3>
                                <PostAttribution showAuthor={showAuthor} post={post} className="mt-2" />
                                {showExcerpt && post.excerpt && (
                                    <p className="mt-4" data-sb-field-path="excerpt">
                                        {post.excerpt}
                                    </p>
                                )}
                            </div>
                            {(showDate || showReadMoreLink) && (
                                <div className="mt-12 space-y-6">
                                    {showDate && <PostDate post={post} className="mb-2" />}
                                    {showReadMoreLink && (
                                        <div>
                                            <Link
                                                href={getPageUrlPath(post)}
                                                className="sb-component sb-component-block sb-component-button sb-component-button-primary"
                                            >
                                                {readMoreLinkLabel && <span className="mr-3">{readMoreLinkLabel}</span>}
                                                <ArrowRightIcon className="fill-current h-5 w-5" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

function PostsVariantD(props) {
    const { posts = [], showDate, showAuthor, showExcerpt, showReadMoreLink, readMoreLinkLabel, hasTopMargin, annotatePosts } = props;
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-y-12', {
                'mt-12': hasTopMargin
            })}
            {...(annotatePosts ? { 'data-sb-field-path': '.posts' } : null)}
        >
            {posts.map((post, index) => (
                <article key={index} data-sb-object-id={post.__metadata?.id} className="sb-card overflow-hidden">
                    <div className="md:flex">
                        {post.featuredImage && (
                            <div className="md:w-2/5">
                                <Link
                                    href={getPageUrlPath(post)}
                                    className="block h-0 w-full pt-2/3 relative overflow-hidden md:h-60 md:min-h-full md:pt-0 lg:h-72"
                                >
                                    <ImageBlock
                                        {...post.featuredImage}
                                        className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                        data-sb-field-path="featuredImage"
                                    />
                                </Link>
                            </div>
                        )}
                        <div className="px-4 pt-6 pb-10 sm:px-6 md:w-3/5 md:self-center md:pt-8">
                            <h3 className="text-3xl">
                                <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                    {post.title}
                                </Link>
                            </h3>
                            <PostAttribution showAuthor={showAuthor} post={post} className="mt-2" />
                            {showExcerpt && post.excerpt && (
                                <p className="mt-4" data-sb-field-path="excerpt">
                                    {post.excerpt}
                                </p>
                            )}
                            {(showDate || showReadMoreLink) && (
                                <div className="mt-12 space-y-6">
                                    {showDate && <PostDate post={post} className="mb-2" />}
                                    {showReadMoreLink && (
                                        <div>
                                            <Link
                                                href={getPageUrlPath(post)}
                                                className="sb-component sb-component-block sb-component-button sb-component-button-primary"
                                            >
                                                {readMoreLinkLabel && <span className="mr-3">{readMoreLinkLabel}</span>}
                                                <ArrowRightIcon className="fill-current h-5 w-5" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

function PostDate({ post, className }) {
    const date = post.date;
    if (!date) {
        return null;
    }
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('MM/DD/YYYY');
    return (
        <div className={className}>
            <time dateTime={dateTimeAttr} data-sb-field-path="date">
                {formattedDate}
            </time>
        </div>
    );
}

function PostAttribution({ showAuthor, post, className = '' }) {
    const author = showAuthor ? postAuthor(post) : null;
    const category = postCategory(post);
    if (!author && !category) {
        return null;
    }
    return (
        <div className={className ? className : null}>
            {author && (
                <>
                    {'By '}
                    {author}
                </>
            )}
            {category && (
                <>
                    {author ? ' in ' : 'In '}
                    {category}
                </>
            )}
        </div>
    );
}

function postAuthor(post) {
    if (!post.author) {
        return null;
    }
    const author = post.author;
    const children = (
        <>
            {author.firstName && <span data-sb-field-path=".firstName">{author.firstName}</span>}{' '}
            {author.lastName && <span data-sb-field-path=".lastName">{author.lastName}</span>}
        </>
    );
    if (author.slug) {
        return (
            <Link data-sb-field-path="author" href={`/blog/author/${author.slug}`}>
                {children}
            </Link>
        );
    } else {
        return <span data-sb-field-path="author">{children}</span>;
    }
}

function postCategory(post) {
    if (!post.category) {
        return null;
    }
    const category = post.category;
    return (
        <Link data-sb-field-path="category" href={getPageUrlPath(category)}>
            {category.title}
        </Link>
    );
}
