---
title: Testing Sections
layout: PageLayout
sections:
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-c
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
          - ml-0
          - mr-0
        padding:
          - pt-32
          - pb-32
          - pr-12
          - pl-12
        alignItems: center
        justifyContent: flex-start
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
        justifyContent: flex-start
        flexDirection: row
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
    colors: colors-d
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
  - type: RecentPostsSection
    variant: variant-a
    colors: colors-a
    title: Recent posts, Variant A
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
---
