---
title: About us
sections:
  - elementId: ''
    colors: colors-a
    title: About our business
    text: >
      For us fishing is a life style. The connection to the waters is what makes
      us friends, and what makes us a family and it what makes us a business.

      We’re believe there’s a better, more sustainable way to live out of what
      the sea has to offer, while  keeping our products fresh and delicious.
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
          - pl-4
          - pr-4
        justifyContent: center
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
        margin:
          - mt-0
          - mb-12
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
        margin:
          - mt-0
          - mb-8
      text:
        textAlign: left
    type: TextSection
  - elementId: ''
    variant: variant-c
    colors: colors-a
    title: Our team
    subtitle: Meet the team
    people:
      - content/data/team/desmond-eagle.json
      - content/data/team/dianne-ameter.json
      - content/data/team/richard-gavin.json
      - content/data/team/hilary-ouse.json
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
          - pt-12
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: center
        margin:
          - mt-0
          - mb-2
      subtitle:
        textAlign: center
        margin:
          - mt-0
          - mb-12
    type: FeaturedPeopleSection
  - elementId: ''
    colors: colors-c
    quote: >
      ### This is someone else, not from our team, but she also loves fishing, so
      we thought we should highlight her.
    backgroundImage:
      url: /images/fishing-two.jpg
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
layout: PageLayout
---
