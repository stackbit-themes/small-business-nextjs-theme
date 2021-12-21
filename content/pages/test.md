---
title: Testing Sections
layout: PageLayout
sections:
  - type: MediaGallerySection
    colors: colors-a
    images:
      - type: ImageBlock
        url: /images/bg.jpg
        altText: Google Play
        caption: Google Play
      - type: ImageBlock
        url: /images/hero.png
        altText: PlayStation
        caption: PlayStation
      - type: ImageBlock
        url: /images/hero-2.png
        altText: Apple
        caption: Apple
      - type: ImageBlock
        url: /images/bg.jpg
        altText: Gatsby
        caption: Gatsby
      - type: ImageBlock
        url: /images/hero-2.png
        altText: Xbox
        caption: Xbox
      - type: ImageBlock
        url: /images/bg.jpg
        altText: Skype
        caption: Skype
      - type: ImageBlock
        url: /images/hero.png
        altText: ZCOOL
        caption: ZCOOL
    spacing: 16
    columns: 4
    aspectRatio: '16:9'
    showCaption: false
    enableHover: false
    styles:
      self:
        width: full
        height: auto
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-4
          - pb-4
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: center
      subtitle:
        textAlign: center
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-c
    backgroundSize: full
    title: 'We do fishing differently'
    subtitle: 'Fresh. Better. Faster'
    actions:
      - type: Button
        label: Get Started
        url: 'https://www.stackbit.com/'
        style: primary
      - type: Button
        label: Get Started
        url: 'https://www.stackbit.com/'
        style: secondary
    media:
      type: ImageBlock
      url: /images/hero.png
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-32
          - pb-32
          - pr-12
          - pl-12
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-e
    backgroundSize: inset
    title: 'We do fishing differently'
    subtitle: 'Fresh. Better. Faster'
    actions:
      - type: Button
        label: Get Started
        url: 'https://www.stackbit.com/'
        style: primary
      - type: Button
        label: Get Started
        url: 'https://www.stackbit.com/'
        style: secondary
    media:
      type: ImageBlock
      url: /images/hero.png
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-4
          - mr-4
        padding:
          - pt-32
          - pb-32
          - pr-12
          - pl-12
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: FeatureHighlightSection
    colors: colors-b
    backgroundSize: inset
    title: Time to leave your desk. Let’s go flying
    text: >
      We’re local, seasonal fisherman, supporting fishing restrictions.
    actions:
      - type: Link
        label: Join adventure
        url: 'https://www.stackbit.com/'
        showIcon: true
        icon: arrowRight
    backgroundImage:
      type: BackgroundImage
      url: /images/hero.png
      backgroundSize: cover
      backgroundPosition: center
      opacity: 100
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-48
          - pb-48
          - pr-4
          - pl-4
        justifyContent: flex-start
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: CtaSection
    colors: colors-c
    backgroundSize: inset
    title: Follow us on instagram
    text: To get all the latest updates
    actions:
      - type: Button
        label: Check it out
        url: 'https://www.stackbit.com/'
        showIcon: true
        icon: arrowRight
        style: primary
      - type: Link
        label: Check it out
        url: 'https://www.stackbit.com/'
        showIcon: true
        icon: arrowRight
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-32
          - pb-32
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: CtaSection
    colors: colors-e
    backgroundSize: full
    title: Follow us on instagram
    text: To get all the latest updates
    actions:
      - type: Button
        label: Check it out
        url: 'https://www.stackbit.com/'
        showIcon: true
        icon: arrowRight
        style: primary
      - type: Link
        label: Check it out
        url: 'https://www.stackbit.com/'
        showIcon: true
        icon: arrowRight
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-32
          - pb-32
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: center
      text:
        textAlign: center
      actions:
        justifyContent: center
  - type: FeaturedPostsSection
    variant: variant-a
    colors: colors-a
    title: Recent posts, Variant A
    posts:
      - content/pages/blog/post-one.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-three.md
    showDate: true
    showAuthor: true
    showExcerpt: true
    showReadMoreLink: true
    readMoreLinkLabel: Join adventure
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-32
          - pb-32
          - pr-4
          - pl-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
  - type: RecentPostsSection
    variant: variant-b
    colors: colors-b
    title: Recent posts, Variant B
    recentCount: 3
    showDate: true
    showAuthor: true
    showExcerpt: true
    showReadMoreLink: true
    readMoreLinkLabel: Join adventure
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-32
          - pb-32
          - pr-4
          - pl-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
  - type: RecentPostsSection
    variant: variant-c
    colors: colors-c
    title: Recent posts, Variant C
    recentCount: 15
    showDate: true
    showAuthor: true
    showExcerpt: true
    showReadMoreLink: true
    readMoreLinkLabel: Join adventure
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-32
          - pb-32
          - pr-4
          - pl-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
  - type: RecentPostsSection
    variant: variant-d
    colors: colors-e
    title: Recent posts, Variant D
    recentCount: 3
    showDate: true
    showAuthor: false
    showExcerpt: false
    showReadMoreLink: true
    readMoreLinkLabel: Join adventure
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-32
          - pb-32
          - pr-4
          - pl-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
  - colors: colors-a
    elementId: ''
    title: Remote doesn’t mean alone. Here are so great features
    subtitle: >-
      These are all excellent features that will provide exactly the things
      you’re looking for.
    items:
      - type: FeaturedItem
        title: Faster
        text: >
          Learn how top tech companies have learned working remote using our
          product.
        featuredImage:
          url: /images/faster.svg
          altText: altText of the image
          caption: Caption of the image
          type: ImageBlock
        styles:
          self:
            textAlign: left
            borderColor: border-dark
            borderWidth: 1
            borderStyle: solid
            padding:
              - pt-4
              - pl-4
              - pb-6
              - pr-4
      - type: FeaturedItem
        title: Smarter
        text: >
          Learn how top tech companies have learned working remote using our
          product.
        featuredImage:
          url: /images/smarter.svg
          altText: altText of the image
          caption: Caption of the image
          type: ImageBlock
        styles:
          self:
            textAlign: left
            borderColor: border-dark
            borderWidth: 1
            borderStyle: solid
            padding:
              - pt-4
              - pl-4
              - pb-6
              - pr-4
      - type: FeaturedItem
        title: Focused
        text: >
          Learn how top tech companies have learned working remote using our
          product.
        featuredImage:
          url: /images/focused.svg
          altText: altText of the image
          caption: Caption of the image
          type: ImageBlock
        styles:
          self:
            textAlign: left
            borderColor: border-dark
            borderWidth: 1
            borderStyle: solid
            padding:
              - pt-4
              - pl-4
              - pb-6
              - pr-4
    columns: 3
    enableHover: false
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: flex-start
    type: FeaturedItemsSection
---
