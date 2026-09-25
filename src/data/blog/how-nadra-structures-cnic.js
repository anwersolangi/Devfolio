export const howNadraStructuresCnic = {
  slug: "how-nadra-structures-the-cnic-number-in-pakistan",
  title: "How NADRA Structures the CNIC Number in Pakistan",
  description:
    "A digit-by-digit breakdown of Pakistan's 13-digit CNIC: what the first five digits say about where you were registered, what the family number means, how the last digit encodes gender — and the myths that refuse to die.",
  metaDescription:
    "Pakistan's 13-digit CNIC decoded digit by digit: what the first five digits say about where you registered, the family number, and the gender digit.",
  category: "Pakistan",
  tags: [
    "nadra cnic structure",
    "cnic number meaning",
    "cnic digits explained",
    "pakistan national identity card",
    "cnic province codes",
    "nadra family number",
  ],
  publishedAt: "2026-06-05",
  cover: "/blog/cnic-structure-cover.svg",
  coverAlt: "The 13 digits of a Pakistani CNIC split into 5-7-1 groups",
  pinToBottom: true,
  content: [
    {
      type: "p",
      text: "A CNIC number looks random until you know what to look for. I found this out the fun way: I built a small [CNIC decoder](/tools/cnic-lookup) for this site, expecting nobody to care, and it quietly became one of my most-used tools. The questions that landed in my inbox afterwards were all versions of the same thing — what do these 13 digits actually mean? So here is the long answer.",
    },
    {
      type: "p",
      text: "Short version first: the number is split 5–7–1. Five digits for geography, seven for your family, one for your gender. Nothing in it is random, and — despite what half the internet claims — nothing in it is your date of birth.",
    },
    {
      type: "image",
      src: "/blog/cnic-digits-diagram.svg",
      alt: "Diagram of a CNIC number 42201-2345678-3 with the first five digits labelled as locality codes, the middle seven as the family number, and the last digit as gender",
      caption: "The 5–7–1 split of a CNIC, using a made-up Karachi number.",
      width: 1200,
      height: 500,
    },
    { type: "h2", text: "A little history, because it explains the design" },
    {
      type: "p",
      text: "Pakistan has issued national identity cards since 1973, but the early NIC was a manual, paper-based document — handwritten registers, no central database. That changed in March 2000 when [NADRA](https://www.nadra.gov.pk) was created and the old registration directorate was merged with the National Database Organisation. The computerised 13-digit CNIC replaced the old NIC numbers, and the chip-based Smart CNIC followed about a decade later.",
    },
    {
      type: "p",
      text: "Keep that paper-era origin in mind. The number's structure — fixed-width codes for province, division, district — is exactly what you would design if you needed clerks in registration offices across the country to file records consistently without a live network. It is a filing system that happens to fit in your wallet.",
    },
    { type: "h2", text: "Digits 1–5: where your family was registered" },
    {
      type: "p",
      text: "The first five digits are locality codes, going from broad to narrow: province, division, district, tehsil, and union council. One nuance people miss constantly — this is where your family was **registered**, not where you were born. Plenty of people born and raised in Karachi carry a CNIC starting with 3 because their parents' records live in Punjab.",
    },
    {
      type: "p",
      text: "The very first digit is the province or region:",
    },
    {
      type: "table",
      head: ["First digit", "Province / region"],
      rows: [
        ["1", "Khyber Pakhtunkhwa"],
        ["2", "FATA (now merged into KP, but the code lives on)"],
        ["3", "Punjab"],
        ["4", "Sindh"],
        ["5", "Balochistan"],
        ["6", "Islamabad Capital Territory"],
        ["7", "Gilgit-Baltistan"],
      ],
    },
    {
      type: "p",
      text: "The next four digits narrow it down. Digit 2 is the division, digit 3 the district, digit 4 the tehsil, and digit 5 the union council. In practice the first three digits together are the most recognisable part — 352 is Lahore, 422 is Karachi East, 544 is Quetta. If a number starts with 42201, you are looking at Sindh, Karachi division, East district, before you have read half the card.",
    },
    {
      type: "p",
      text: "Notice that FATA still has its own code even though it merged into Khyber Pakhtunkhwa in 2018. Identity systems move slower than constitutional amendments — millions of cards with a leading 2 were already in circulation, and NADRA was never going to reissue them all.",
    },
    { type: "h2", text: "Digits 6–12: the family number" },
    {
      type: "p",
      text: "The middle seven digits are a system-generated family number — NADRA's internal link between you and your family tree, sometimes called the kunba number. It ties household members together in the database, which is how services like succession certificates and the family registration certificate (FRC) know who belongs to whom.",
    },
    {
      type: "p",
      text: "Two things worth knowing about it. First, it is not sequential in any way you can read — you cannot look at two family numbers and conclude anything about who registered first. Second, it is the part of the CNIC with genuinely useful private information behind it, which is exactly why NADRA exposes none of it publicly. The number itself tells an outsider nothing.",
    },
    { type: "h2", text: "Digit 13: gender, by parity" },
    {
      type: "p",
      text: "The last digit is the simplest and the most-asked-about. Odd means male, even means female. A CNIC ending in 1, 3, 5, 7, or 9 belongs to a man; 2, 4, 6, or 8 to a woman. That is the entire encoding — there is no deeper meaning to ending in 7 versus 3.",
    },
    { type: "h2", text: "What the CNIC number does not contain" },
    {
      type: "p",
      text: "This is the myth-busting section, and I get to write it with some authority because these are the exact questions people send me about the decoder tool:",
    },
    {
      type: "list",
      items: [
        "**No date of birth.** The 13 digits encode zero birth information. Sites claiming to extract your age from a CNIC number are guessing or lying.",
        "**No name lookup.** You cannot type a CNIC number into a public website and get a name back. That data sits inside NADRA, protected by law.",
        "**No photo, no address.** Same story. \"Check CNIC details with picture online\" is a search that ends in scam territory — nothing legitimate offers this.",
        "**No card validity status.** The digits are static; they cannot tell you whether the card is expired, blocked, or genuine.",
      ],
    },
    {
      type: "callout",
      title: "Need real verification?",
      text: "For anything official — application tracking, verification, renewals — use NADRA's own channels: SMS your CNIC to 8300, or use the Pak-ID app and portal at [id.nadra.gov.pk](https://id.nadra.gov.pk). Anything else asking for your CNIC number is a data-collection risk.",
    },
    { type: "h2", text: "Decode your own number" },
    {
      type: "p",
      text: "If you want to see the structure in action, paste any 13-digit number into my free [CNIC Lookup & Decoder](/tools/cnic-lookup). It splits out the province, division, district, family number, and gender digit instantly — and because the whole thing runs in your browser, the number never leaves your device. No server, no logging, no funny business.",
    },
    {
      type: "p",
      text: "I built it in an evening because I kept explaining this structure to people one WhatsApp message at a time. Now I just send the link — and when they ask how it works, I send this post.",
    },
  ],
};
