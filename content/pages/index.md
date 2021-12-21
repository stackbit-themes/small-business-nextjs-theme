---
title: Home
layout: PageLayout
sections:
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-d
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
          - ml-4
          - mr-4
        padding:
          - pt-32
          - pb-96
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
  - type: QuoteSection
    colors: colors-d
    quote: |-
      “It’s great to see someone taking action while still maintaining a sustainbale fish supply to home cooks.”
    name: Isabelle Parks
    title: Head chef at Parks
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        justifyContent: center
      quote:
        textAlign: center
      name:
        textAlign: center
      title:
        textAlign: center
  - colors: colors-d
    elementId: ''
    title: Seasonal adventures
    actions:
      - type: Link
        label: See all adventures
        url: 'https://www.stackbit.com/'
        showIcon: true
        icon: arrowRight
    items:
      - type: FeaturedItem
        title: Sunset Fishnet
        text: >
          We’re local, seasonal fisherman, supporting fishing restrictions. We fish what the sea has to offer, nothing more, and no cheating.
        actions:
          - type: Button
            label: Join adventure
            url: 'https://www.stackbit.com/'
            showIcon: true
            icon: arrowRight
            style: primary
        styles:
          self:
            textAlign: left
            borderColor: border-dark
            borderWidth: 1
            borderStyle: solid
            padding:
              - pt-8
              - pb-10
              - pl-8
              - pr-8
      - type: FeaturedItem
        title: Extreme Fly Fishing
        text: >
          We’re local, seasonal fisherman, supporting fishing restrictions. We fish what the sea has to offer, nothing more, and no cheating.
        actions:
          - type: Button
            label: Join adventure
            url: 'https://www.stackbit.com/'
            showIcon: true
            icon: arrowRight
            style: primary
        styles:
          self:
            textAlign: left
            borderColor: border-dark
            borderWidth: 1
            borderStyle: solid
            padding:
              - pt-8
              - pb-10
              - pl-8
              - pr-8
    columns: 2
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
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FeaturedItemsSection
  - elementId: ''
    colors: colors-c
    variant: variant-c
    actions:
      - type: Link
        label: See all posts
        url: '/blog'
        showIcon: true
        icon: arrowRight
    posts:
      - content/pages/blog/post-two.md
      - content/pages/blog/post-four.md
      - content/pages/blog/post-three.md
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
          - pt-24
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FeaturedPostsSection
    showDate: true
  - type: TextSection
    colors: colors-e
    variant: variant-a
    text: |-
      ##[Follow us on Instagram](https://www.stackbit.com/)
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
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        justifyContent: center
      text:
        textAlign: center
  - type: FeatureHighlightSection
    colors: colors-b
    backgroundSize: full
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
  - type: ContactSection
    colors: colors-d
    title: Join our club
    text: >
      We will notify you every time a shipment is heading to your neighborhood, and you could immediatly let us know if you want in or not
    form:
      type: FormBlock
      elementId: sign-up-form
      destination: ''
      action: /.netlify/functions/submission_created
      fields:
        - name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: true
          width: '1/2'
          type: TextFormControl
        - name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: '1/2'
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: address
          label: Address
          hideLabel: true
          placeholder: Address
          isRequired: true
          width: full
          type: TextFormControl
        - name: updatesConsent
          label: Sign me up to recieve updates
          isRequired: false
          width: full
          type: CheckboxFormControl
      submitLabel: Submit form
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
---
