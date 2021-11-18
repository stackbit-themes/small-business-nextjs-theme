---
title: Home
layout: PageLayout
sections:
  - type: HeroSection
    elementId: ''
    colors: colors-a
    title: We do fishing differently
    subtitle: Fresh. Better. Faster
    actions:
      - type: Button
        label: Get Started
        url: /
        style: primary
      - type: Button
        label: Learn More
        url: /
        style: secondary
        showIcon: true
        icon: arrowRight
    feature:
      type: ImageBlock
      url: /images/hero.jpg
      altText: Hero section image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-24
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: center
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: center
        margin:
          - mt-8
          - mb-8
      text:
        textAlign: center
      actions:
        justifyContent: center
  - elementId: ''
    colors: colors-a
    quote: >
      ## “It’s great to see someone taking action while still maintaining a
      sustainbale fish supply to home cooks. ”
    name: Johnna Doe
    title: Head chef at Parks
    backgroundImage:
      url: /images/BG.png
      altText: Product Marketing Manager Quote
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
          - pt-36
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      quote:
        textAlign: center
      name:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
      title:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
    type: QuoteSection
  - type: FeaturedPostsSection
    elementId: ''
    variant: variant-a
    colors: colors-a
    title: Upcoming adventures
    subtitle: 'Like we said, it''s more than just fishing'
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-one.md
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-24
          - mb-36
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pr-4
          - pl-4
        justifyContent: center
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: center
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: center
        margin:
          - mt-0
          - mb-12
      actions:
        justifyContent: center
  - elementId: ''
    colors: colors-c
    quote: >
      ### This is someone else, not from our team, but she also loves fishing, so
      we thought we should highlight her.
    backgroundImage:
      url: /images/fishing.jpg
      altText: ''
      styles:
        self:
          opacity: 75
    styles:
      self:
        height: screen
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-4
          - pl-4
          - pr-4
        justifyContent: center
      quote:
        textAlign: left
      name:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      title:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
    type: QuoteSection
  - elementId: contact-form
    colors: colors-a
    title: Join our club
    text: >
      We will notify you every time a shipment is heading to your neighbourhood,
      and you could immediately let us know if you want in or not
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: name
          label: Name
          placeholder: Your name
          isRequired: true
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          placeholder: Your email
          isRequired: true
          width: 1/2
        - type: TextFormControl
          name: home-address
          label: Home address
          placeholder: Your home address
          isRequired: true
          width: full
        - type: CheckboxFormControl
          name: updates
          label: Sign me up to receive updates
          width: full
      submitLabel: Send Message
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-36
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: center
        margin:
          - mt-36
          - mb-12
      text:
        textAlign: center
        margin:
          - mt-0
          - mb-12
    action: /.netlify/functions/submission_created
    type: ContactSection
---
