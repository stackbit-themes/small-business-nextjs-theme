---
title: Blog
layout: PageLayout
sections:
  - type: QuoteSection
    elementId: ''
    colors: colors-b
    quote: |
      ## Experience it for yourself
    backgroundImage:
      type: ImageBlock
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
          - pb-12
          - pr-4
          - pl-4
        justifyContent: center
      quote:
        textAlign: left
      name:
        fontWeight: '400'
        fontStyle: normal
        textAlign: left
      title:
        fontWeight: '400'
        fontStyle: normal
        textAlign: left
  - type: FeaturedPostsSection
    variant: variant-a
    colors: colors-a
    title: Upcoming adventures
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-one.md
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
          - pr-4
          - pl-4
        justifyContent: center
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: center
        margin:
          - mt-0
          - mb-12
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: center
      actions:
        justifyContent: center
  - elementId: ''
    colors: colors-c
    quote: >
      ### “I couldn’t believe how fun walking up at 5am could be.  Would
      definitely consider doing this again”.
    backgroundImage:
      url: /images/fishing-three.jpg
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
