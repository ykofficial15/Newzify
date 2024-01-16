/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import Desc from './Desc'
import Spinner from './Spinner';
export default class NewsItem extends Component {
articles=[
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "Food & Beverage Collection for $19",
    "description": "Expires March 07, 2123 23:59 PST\n\n\n\n\n Buy now and get 98% off\n\n\n\n\n \n \n \n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nCooking can be a daunting skill to learn, but with the CPD-Certified Food and Beverage Collection you'll have all the tools necessary …",
    "url": "https://deals.thenextweb.com/sales/food-and-beverage-collection?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp1.stackassets.com/1dd47b7e88b2fe457016c7c4ecc5e4d5b86938ed/store/3e498c1f6c4e6576f6cdf7b8c1ceaae37b0005bd518c64f91ea4428cf2a7/sale_320864_primary_image.jpg",
    "publishedAt": "2023-03-07T08:00:00Z",
    "content": "International Open AcademyInternational Open AcademyInternational Open Academy is a leader in online learning and your one-stop shop for professional development, personal growth, and goal fulfillmen… [+1114 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "Kids & Parenting Bundle for $19",
    "description": "Expires March 07, 2123 23:59 PST\n\n\n\n\n Buy now and get 97% off\n\n\n\n\n \n \n \n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nTaking care of your children can be a lot of work. Confusing feeding schedules, and dealing with tantrums and night terrors are just s…",
    "url": "https://deals.thenextweb.com/sales/kids-parenting-bundle?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp1.stackassets.com/a6c43736c97f630651a2c94e9f42b9d704132e1b/store/b5452392c32b3135ebf5d9d755b67f6c74560a8615237abfb54ba4c54433/sale_320865_primary_image.jpg",
    "publishedAt": "2023-03-07T08:00:00Z",
    "content": "Taking care of your children can be a lot of work. Confusing feeding schedules, and dealing with tantrums and night terrors are just some of the challenges that new parents face in their first few mo… [+3195 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "Cyber Security Specialist Workshop Live Sessions for $499",
    "description": "Expires March 07, 2123 23:59 PST\n\n\n\n\n Buy now and get 50% off\n\n\n\n\n \n \n \n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nCyber Security Specialist Workshop is following a top-down approach where candidates will learn important cyber security skills implementation in a real busin…",
    "url": "https://deals.thenextweb.com/sales/cyber-security-specialist-workshop-live-sessions?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp3.stackassets.com/13d7a37f1bdcfb5b90e04fff4bb267acf3ee0f46/store/ef98467317351b32ff2318ce637f753574454f88983a095b80b9da5750b2/sale_320861_primary_image.jpg",
    "publishedAt": "2023-03-07T08:00:00Z",
    "content": "Mohamed AtefInfoSec4TC InfoSec4TC is a well-known cybersecurity training and consulting company that offers a range of educational programs to help individuals and organizations develop the skills an… [+574 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "Animal Training & Care Bundle for $19",
    "description": "Expires March 07, 2123 23:59 PST\n\n\n\n\n Buy now and get 97% off\n\n\n\n\n \n \n \n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nGet the knowledge you need to take care of your pets with the Internationally Accredited Animal Training and Care Bundle. This bundle …",
    "url": "https://deals.thenextweb.com/sales/animal-training-care-bundle?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp0.stackassets.com/15ad7bf1e12a78e905f0ee2c24de3d8aa5fdc8fe/store/c5d612e3bcb3062e5c22ae8938fde8b57993d750764c126963e2822809ea/sale_320860_primary_image.jpg",
    "publishedAt": "2023-03-07T08:00:00Z",
    "content": "Get the knowledge you need to take care of your pets with the Internationally Accredited Animal Training and Care Bundle. This bundle provides learners with insights into animal care, grooming, and n… [+3030 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Mike Butcher",
    "title": "ADHD startups are exploding, and now there even a dedicated browser",
    "description": "Was it the pandemic? Did everyone follow too many ADHD TikTokers? Have smartphones fried our brains? Whatever the case, there is a boom in ADHD tech solutions, from online drug deliveries to web sites and apps. There’s definitely something going on out there.…",
    "url": "https://techcrunch.com/2023/03/06/adhd-startups-are-exploding-and-now-there-even-a-dedicated-browser/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/1666377200071.png",
    "publishedAt": "2023-03-07T06:00:53Z",
    "content": "Was it the pandemic? Did everyone follow too many ADHD TikTokers? Have smartphones fried our brains? Whatever the case, there is a boom in ADHD tech solutions, from online drug deliveries to web site… [+3155 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Kate Park",
    "title": "Growfin’s AI-based cash collection SaaS expands further to US and Asia",
    "description": "Cash management — tracking who needs to pay an invoice and whether it’s been done — can make or break a business. Now, a startup building SaaS software to help finance departments manage this more intelligently is announcing some funding to expand after seein…",
    "url": "https://techcrunch.com/2023/03/06/growfin-for-cfos-and-finance-teams-to-the-cash-collection-cycle/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2015/07/money-cash.jpg?resize=1200,720",
    "publishedAt": "2023-03-07T05:00:49Z",
    "content": "Cash management — tracking who needs to pay an invoice and whether it’s been done — can make or break a business. Now, a startup building SaaS software to help finance departments manage this more in… [+5471 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Frederic Lardinois",
    "title": "Atlassian cuts 5% of its workforce",
    "description": "Atlassian today announced that it is cutting 5% of its global workforce -- or about 500 employees in an effort to focus on growth areas.",
    "url": "https://techcrunch.com/2023/03/06/atlassian-cuts-5-of-its-workforce/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/04/gettyimages-500532386.jpg",
    "publishedAt": "2023-03-07T01:07:20Z",
    "content": "Atlassian, the company behind tools like Jira, Confluence and Trello, today announced that, after a reorg a month ago, it is now laying off about 500 employees. That’s about 5% of its total workforce… [+2377 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Rita Liao",
    "title": "Meet UniUni, Shein's last-mile solution delivered by gig drivers",
    "description": "UniUni's rapid growth drew investors' attention, and today, the company announced the closing of CAD$100 million ($70 million) for the first tranche of its Series B financing.",
    "url": "https://techcrunch.com/2023/03/06/meet-uniuni-sheins-last-mile-solution-delivered-by-gig-drivers/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/uniuni-1.png?resize=1200,799",
    "publishedAt": "2023-03-07T00:37:33Z",
    "content": "When we talk about e-commerce logistics, we think of an industry controlled by entrenched players like Amazon, FedEx and national postal systems. At the start of the pandemic in 2019, a brave startup… [+5312 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Christine Hall and Haje Jan Kamps",
    "title": "Daily Crunch: Game developer bans 6,700 cheaters and publishes their usernames",
    "description": "No one likes a cheater: Definitely not Russian game developer Battlestate Games, which banned and doxed 6,700 cheaters from its Escape from Tarkov game...",
    "url": "https://techcrunch.com/2023/03/06/daily-crunch-game-publisher-bans-6700-cheaters-and-publishes-their-usernames/",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/eCUMx54.Lm6938vNKHyCjA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTY-/https://media.zenfs.com/en/techcrunch_350/bf44cd12c3b46bbf77e50e1a7c87f4a9",
    "publishedAt": "2023-03-06T23:05:59Z",
    "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PST, subscribe here.\r\nWe hope youre meeting the week with open arms, crunchers, and that… [+3008 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Aria Alamalhodaei",
    "title": "Max Q: About that 'for sale' sign on a ULA Atlas V",
    "description": "According to data reviewed by TechCrunch, Chinese subsidiaries of American venture capital firms are investing money from U.S.-based funds into Chinese space...",
    "url": "https://techcrunch.com/2023/03/06/max-q-about-that-for-sale-sign-on-a-ula-atlas-v/",
    "urlToImage": "https://media.zenfs.com/en/techcrunch_350/245488196d431ca2ab9e4bec08189bd0",
    "publishedAt": "2023-03-06T23:00:20Z",
    "content": "Hello and welcome back to Max Q!\r\nIn this issue:\r\n<ul><li>The Chinese subsidiaries of U.S. VC firms investing in space tech\r\n</li><li>ispace eyes April lunar landing\r\n</li><li>News from Rocket Lab, U… [+4366 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Lauren Forristal",
    "title": "Fire TV launches a new dedicated Oscars hub that lets users predict the winners",
    "description": "Amazon launched a dedicated Oscars hub on Fire TV where movie buffs can watch all the nominated movies as well as predict the winners.",
    "url": "https://techcrunch.com/2023/03/06/amazon-fire-tv-dedicated-oscars-hub/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/1s8ZP_Az-8fi7SB6I8Dyrrw.webp?resize=1200,675",
    "publishedAt": "2023-03-06T21:34:40Z",
    "content": "Amazon announced today the launch of a dedicated Oscars hub on Fire TV where movie buffs can get ready for the 2023 Academy Awards ceremony, including watching all the nominated movies as well as cas… [+2363 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Christine Hall",
    "title": "Catch founder says health benefits startup is shutting down",
    "description": "In a tweet, Anderson individually addressed those she felt were supportive to Catch as its scaled its app to provide payroll and benefits for people who are self-employed.\nCatch founder says health benefits startup is shutting down by Christine Hall originall…",
    "url": "https://techcrunch.com/2023/03/06/catch-insurtech-shutting-down/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/03/Catch-Co-Founders.jpeg?resize=1200,676",
    "publishedAt": "2023-03-06T21:25:39Z",
    "content": "Catch co-founder Kristen Anderson tweeted Monday that the health and retirement benefits company she and co-founder Andrew Ambrosino started six years ago is shuttering.\r\nAnderson and Ambrosino creat… [+3068 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Natasha Mascarenhas",
    "title": "Upload Ventures, a SoftBank LatAm spin-out, seeks to raise a $250 million fund",
    "description": "Less than one year after Upload Ventures spun out of SoftBank’s investment arm, it is seeking a $250 million close for its growth stage fund.",
    "url": "https://techcrunch.com/2023/03/06/upload-ventures-a-softbank-latam-spin-out-seeks-to-raise-a-250-million-fund/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/04/latin-america-money-bryce.webp?resize=1200,674",
    "publishedAt": "2023-03-06T21:07:39Z",
    "content": "Less than one year after Upload Ventures spun out of SoftBanks investment arm, the Latin American-focused investment arm is seeking to raise a $250 million fund, filings show. TechCrunch reached out … [+1896 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Jacquelyn Melinek",
    "title": "Arbitrum Ethereum scaling: L2 space continues to see demand",
    "description": "Arbitrum makes up about 54% of the market share on Ethereum and has about $3.38 billion total value locked.",
    "url": "https://techcrunch.com/2023/03/06/arbitrum-ethereum-layer-2-growth/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/02/drawkit-illustrations-8iIUDnRq87o-unsplash-1.jpg?resize=1200,675",
    "publishedAt": "2023-03-06T19:30:22Z",
    "content": "As we segue into March, the Ethereum layer-2 space is continuing to see strong demand: One of its largest scaling solutions, Arbitrum, is seeing renewed exponential growth through subsectors in the e… [+1057 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Frederic Lardinois",
    "title": "Honeycomb's yoke and throttle let you take your flight sim experience to the next level",
    "description": "We go hands-on with Honeycomb's Alpha XPC rudder and Bravo throttle setup that lets you take your flight sim experience to new levels.",
    "url": "https://techcrunch.com/2023/03/06/honeycomb-alpha-flight-control-xpc-yoke-and-bravo-throttle-take-flight-sim-review-pc-xbox/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/Honeycomb_yoke_throttle-2.jpg?resize=1200,846",
    "publishedAt": "2023-03-06T18:45:54Z",
    "content": "When Microsoft, after a decade-long hiatus, relaunched its now 40-year-old Flight Simulator series in 2020, it reignited interest in a genre that had long been a mainstay of PC gaming. It’s one thing… [+7135 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Sarah Perez",
    "title": "Medium launches a ‘premium’ Mastodon instance as a membership perk",
    "description": "Publishing platform Medium is opening up its debut Mastodon instance, me.dm, to its members, the company announced today. Last month, Medium first teased its plans around the Fediverse — the group of interconnected servers powering a range of open source, dec…",
    "url": "https://techcrunch.com/2023/03/06/medium-launches-a-premium-mastodon-instance-as-a-membership-perk/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/05/photo-11-05-2018-00-41-31.jpg?resize=1200,640",
    "publishedAt": "2023-03-06T18:44:52Z",
    "content": "Publishing platform Medium is opening up its debut Mastodon instance, me.dm, to its members, the company announced today.\r\nLast month, Medium first teased its plans around the Fediverse — the group o… [+7222 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Natasha Mascarenhas",
    "title": "Vinod Khosla’s advice for top VCs? Don’t sit on your founders’ boards",
    "description": "Serial entrepreneur and seasoned investor Vinod Khosla has some strong, contrarian advice for the venture capital industry.",
    "url": "https://techcrunch.com/2023/03/06/vinod-khoslas-advice-for-top-vcs-dont-sit-on-your-founders-boards/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/Khosla-Zhang-8.jpg?resize=1200,800",
    "publishedAt": "2023-03-06T18:27:39Z",
    "content": "Serial entrepreneur and seasoned investor Vinod Khosla has some strong, contrarian advice for the venture capital industry: dont sit on your founders boards. Khosla, who spoke on stage at the Upfront… [+3500 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Aisha Malik",
    "title": "Twitter images and links are currently broken",
    "description": "Twitter is experiencing issues once again. Multiple users, including folks on the TechCrunch team, are currently unable to view links and images on the social network. According to reports on third-party web monitoring service Downdetector, the issues began a…",
    "url": "https://techcrunch.com/2023/03/06/twitter-images-and-links-are-currently-broken/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/twitter-melting.jpg?resize=1200,645",
    "publishedAt": "2023-03-06T17:20:42Z",
    "content": "Twitter is experiencing issues once again. Multiple users, including folks on the TechCrunch team, are currently unable to view links and images on the social network. According to reports on third-p… [+1285 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Ron Miller",
    "title": "Qualtrics has $12B offer on the table to go private",
    "description": "Qualtrics was once a hot startup before SAP bought the company in 2018 for $8 billion.  Today the company filed an 8-K form with the SEC indicating it has an...",
    "url": "https://techcrunch.com/2023/03/06/qualtrics-has-12b-offer-on-the-table-to-go-private/",
    "urlToImage": "https://media.zenfs.com/en/techcrunch_350/43e1879dc88daea7e15d37da4edaa533",
    "publishedAt": "2023-03-06T17:12:35Z",
    "content": "Qualtrics was once a hot startup before SAP bought the company in 2018 for $8 billion. It was a fine exit, making the founders rich, but it never was really a good fit. SAP spun out the company just … [+3064 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Maggie Stamets",
    "title": "Inside Startup Battlefield: Say Hello to the Startup Battlefield Winner",
    "description": "Welcome to the final episode of Inside Startup Battlefield. Thank you so much for listening to our miniseries all about TechCrunch's pitch competition. Now, it's the moment we've all been waiting for — the winner is announced! In this ep",
    "url": "https://techcrunch.com/2023/03/06/inside-startup-battlefield-say-hello-to-the-startup-battlefield-winner/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/02/inside-startup-battlefield-featured2.jpg?resize=1200,675",
    "publishedAt": "2023-03-06T17:01:16Z",
    "content": "Welcome to the final episode of Inside Startup Battlefield. Thank you so much for listening to our miniseries all about TechCrunch’s pitch competition. Now, its the moment weve all been waiting for t… [+480 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Ivan Mehta",
    "title": "SoundCloud is testing a TikTok-like feed for music discovery",
    "description": "A lot of music streaming services and discovery apps have followed a formula for introducing new artists and songs to their users: an AI-powered vertical feed that highlights clips of songs. SoundCloud is the latest app to try this feature out. The company is…",
    "url": "https://techcrunch.com/2023/03/06/soundcloud-is-testing-a-tiktok-like-feed-for-music-discovery/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/Soundclod-feed.jpg?resize=1200,675",
    "publishedAt": "2023-03-06T17:00:16Z",
    "content": "A lot of music streaming services and discovery apps have followed a formula for introducing new artists and songs to their users: an AI-powered vertical feed that highlights clips of songs. SoundClo… [+2836 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Rebecca Szkutak",
    "title": "Tweet, tweet, pass: Twitter unlocks a budding growth opportunity for cannabis startups",
    "description": "Twitter is the first of the major social media companies to allow cannabis companies to advertise.\nTweet, tweet, pass: Twitter unlocks a budding growth opportunity for cannabis startups by Rebecca Szkutak originally published on TechCrunch",
    "url": "https://techcrunch.com/2023/03/06/cannabis-startups-twitter-advertising/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/IMG_4455.jpg?resize=1200,645",
    "publishedAt": "2023-03-06T17:00:16Z",
    "content": "Cannabis startups have to navigate some rough waters: They cant access federal funds or work with traditional banks, and they have to find customers across a fragmented market while adhering to local… [+773 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Alex Wilhelm",
    "title": "Valuation pressure on software startups is easing",
    "description": "When it comes to startup valuations, no one seems to expect things to go back to 2021. But better? Who doesn't love that? Valuation pressure on software startups is easing by Alex Wilhelm originally published on TechCrunch",
    "url": "https://techcrunch.com/2023/03/06/valuation-pressure-on-software-startups-is-easing/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/05/NSussman_Techcrunch_Exchange_v3-GRN.jpg?resize=1200,900",
    "publishedAt": "2023-03-06T16:00:22Z",
    "content": "Are you tired of bad news for startups? Bored of the layoffs, budget cuts, and sermons from folks who suddenly discovered the efficiency gospel?\r\nWell, how about some good news? I have some for you: … [+1434 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Lorenzo Franceschi-Bicchierai",
    "title": "Russian game developer bans and doxes 6,700 cheaters",
    "description": "Cheaters are an annoying part of almost every online video game. And banning them has become an important routine for game developers and publishers to keep their users happy. The publisher of Escape from Tarkov, a game developed by the Russian company Ba",
    "url": "https://techcrunch.com/2023/03/06/russian-game-developer-bans-and-doxes-6700-cheaters/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/escape-from-tarkov-1.jpg?resize=1200,672",
    "publishedAt": "2023-03-06T15:56:55Z",
    "content": "Cheaters are an annoying part of almost every online video game. And banning them has become an important routine for game developers and publishers to keep their users happy.\r\nThe publisher of Escap… [+2903 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Sarah Perez",
    "title": "SiriusXM announces layoffs of 475 people, or 8% of its total workforce",
    "description": "SiriusXM, the satellite radio company and Pandora owner, disclosed today it’s laying off 475 employees, representing 8% of its workforce. In an email sent to employees, CEO Jennifer Witz said the cuts would impact “nearly every department” across the company,…",
    "url": "https://techcrunch.com/2023/03/06/siriusxm-announces-layoffs-of-475-people-or-8-of-its-total-workforce/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/12/GettyImages-1133727721.jpg",
    "publishedAt": "2023-03-06T15:29:30Z",
    "content": "SiriusXM, the satellite radio company and Pandora owner, disclosed today it’s laying off 475 employees, representing 8% of its workforce. In an email sent to employees, CEO Jennifer Witz said the cut… [+3941 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Lauren Simonds",
    "title": "Only 5 days left to save $1,000 on Disrupt passes",
    "description": "Don’t miss out! Friday’s the last day to save $1,000 on passes to TechCrunch Disrupt in September. Students and nonprofits — you can go for just $95.",
    "url": "https://techcrunch.com/2023/03/06/only-5-days-left-to-save-1000-on-disrupt-passes/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/Countdown-Article-Image-Header_5-days_1920x1080.jpg?resize=1200,675",
    "publishedAt": "2023-03-06T15:00:53Z",
    "content": "TechCrunch Disrupt, the premier early-stage startup conference, takes place on September 1921 in San Francisco. Sure, thats six months from now. But if you want the best price, you gotta take action … [+2473 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Alex Wilhelm",
    "title": "We’d give an arm and a leg for an ARM IPO filing",
    "description": "Hello and welcome back to Equity, the podcast about the business of startups, where we unpack the numbers and nuance behind the headlines. This is Alex and we are here to do our Monday show, a kickoff for the week that covers startup news, tech news, and a li…",
    "url": "https://techcrunch.com/2023/03/06/wed-give-an-arm-and-a-leg-for-an-arm-ipo-filing/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/equity-podcast-2019-phone.webp",
    "publishedAt": "2023-03-06T15:00:34Z",
    "content": "Hello and welcome back to Equity, the podcast about the business of startups, where we unpack the numbers and nuance behind the headlines.\r\nThis is Alex and we are here to do our Monday show, a kicko… [+204 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Kyle Wiggers",
    "title": "Microsoft brings an AI-powered Copilot to its business app suite",
    "description": "Microsoft is injecting its business apps with more AI and automation, courtesy of technical innovations from OpenAI.",
    "url": "https://techcrunch.com/2023/03/06/microsoft-dynamics-copilot/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1354846583.jpeg?resize=1200,900",
    "publishedAt": "2023-03-06T14:15:22Z",
    "content": "Microsoft today introduced what it’s calling the “next generation” of AI product updates across its business apps portfolio. They touch on both Power Platform, Microsoft’s set of low-code tools for b… [+7556 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Ivan Mehta",
    "title": "Elon Musk says Twitter is ‘aiming’ to roll out encrypted DMs this month",
    "description": "Amongst a ton of product changes to make Twitter a more attractive platform, Elon Musk has mentioned multiple times his desire to make direct messages better and more secure. So much so that he wants DMs to “superset Signal” — the encrypted messaging app. Ove…",
    "url": "https://techcrunch.com/2023/03/06/elon-musk-says-twitter-aiming-to-roll-out-encrypted-dms-this-month/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/02/twitter-lock-bryce.jpg?resize=1200,679",
    "publishedAt": "2023-03-06T13:42:58Z",
    "content": "Amongst a ton of product changes to make Twitter a more attractive platform, Elon Musk has mentioned multipletimes his desire to make direct messages better and more secure. So much so that he wants … [+1922 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Stefanie Palomino",
    "title": "Creating remote work rituals that stick",
    "description": "Any organization hoping to scale can create rituals that engage people in their work and inspire them to be their best selves.",
    "url": "https://techcrunch.com/2023/03/06/creating-remote-work-rituals-that-stick/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1280488992.jpg?resize=1200,670",
    "publishedAt": "2023-03-06T13:30:20Z",
    "content": "Remote work lends people a certain amount of freedom in how they go about doing their jobs, so it’s not surprising that an asynchronous style of working would be one of the side effects of not workin… [+2631 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Carly Page",
    "title": "Police arrest suspected members of prolific DoppelPaymer ransomware gang",
    "description": "An international law enforcement operation led to the arrests of two core alleged members of the prolific DoppelPaymer ransomware operation.",
    "url": "https://techcrunch.com/2023/03/06/police-arrest-suspected-members-of-prolific-doppelpaymer-ransomware-gang/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/12/ransomware-moshed.jpg?resize=1200,675",
    "publishedAt": "2023-03-06T13:09:31Z",
    "content": "An international law enforcement operation has led to the arrests of suspected core members of the prolific DoppelPaymer ransomware operation.\r\nGerman and Ukrainian police, working with law enforceme… [+1821 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Natasha Lomas",
    "title": "WhatsApp agrees to clean up its user messaging in the EU",
    "description": "The messaging platform has agreed to improve how it communicates and presents future ToS updates to users in the EU.",
    "url": "https://techcrunch.com/2023/03/06/whatsapp-tos-commitments-eu/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/03/GettyImages-1203053827.jpg",
    "publishedAt": "2023-03-06T12:59:09Z",
    "content": "It’s taken rather longer than a month for Meta-owned WhatsApp to commit to address complaints swirling around how it imposes terms of service on users but the European Commission has just announced t… [+6763 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Kirsten Korosec",
    "title": "Another AV company hits the skids, Scout Motors picks a home and Tesla's tepid investor day",
    "description": "FYI, next week I will be in Austin to attend SXSW.  In the days leading up to Tesla Investor Day, there was a lot of chatter and speculation about what...",
    "url": "https://techcrunch.com/2023/03/06/another-av-company-hits-the-skids-scout-motors-picks-a-home-and-teslas-tepid-investor-day/",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/.OBoscBNR50xQP3z30fafQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/techcrunch_350/c4a6212c42a0c8bf99670a62dfc5a50a",
    "publishedAt": "2023-03-06T12:00:11Z",
    "content": "The Station is a weekly newsletter dedicated to all things transportation. Sign up here  just click The Station  to receive the full edition of the newsletter every weekend in your inbox. Subscribe f… [+11438 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Ingrid Lunden",
    "title": "Open banking startup Abound nabs $601M to supercharge its AI-based consumer lending platform",
    "description": "After a slow start in the UK and Europe, open banking is catching on with fintechs, who are using APIs to access banking data and rails and using them as an alternative to traditional credit networks to build products. Now, a UK-based consumer lending service…",
    "url": "https://techcrunch.com/2023/03/06/open-banking-loans-platform-abound-nabs-601m-to-supercharge-its-consumer-lending-business/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/02/gettyimages-bc8671-003.jpg?resize=1200,928",
    "publishedAt": "2023-03-06T11:33:08Z",
    "content": "After a slow start in the UK and Europe, open banking is catching on with fintechs, who are using APIs to access banking data and rails and using them as an alternative to traditional credit networks… [+7793 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Tage Kene-okafor",
    "title": "Nigerian B2B e-commerce startup Alerzo cuts 15% of full-time staff in second round of layoffs",
    "description": "Alerzo, a Nigerian B2B e-commerce platform that digitizes commerce and payments processes between FMCG suppliers and informal retailers, has laid off 15% of its full-time workforce, the company confirmed to TechCrunch. This is the company’s second round of la…",
    "url": "https://techcrunch.com/2023/03/06/nigerian-b2b-e-commerce-startup-alerzo-cuts-15-of-full-time-staff-in-second-round-of-layoffs/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/08/D14DE013-E58F-437D-AADF-9ACBE72FEE15.jpeg?resize=1200,800",
    "publishedAt": "2023-03-06T10:33:34Z",
    "content": "Alerzo, a Nigerian B2B e-commerce platform that digitizes commerce and payments processes between FMCG suppliers and informal retailers, has laid off 15% of its full-time workforce, the company confi… [+3068 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": "Andris Ambainis",
    "title": "Opinion: Europe’s throwing billions at quantum computers. Will it pay off?",
    "description": "No one may fully understand quantum computing yet, but one thing is clear — the expectations are high. And where there are high expectations, there’s money. Both private and public funding for European quantum technologies has grown notably over the last few …",
    "url": "https://thenextweb.com/news/europes-throwing-billions-at-quantum-computers-will-it-pay-off",
    "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F03%2FUntitled-design-2023-03-03T100910.324.jpg&signature=002c909faf8d1d0759e2a6480252cba4",
    "publishedAt": "2023-03-06T09:00:08Z",
    "content": "No one may fully understand quantum computing yet, but one thing is clear the expectations are high. And where there are high expectations, theres money.\r\nBoth private and public funding for European… [+5329 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "Apple MacBook Air 13\" (A1466) Core i5, 4GB RAM 64GB SSD (Refurbished) for $194",
    "description": "Expires March 06, 2123 23:59 PST\n\n\n\n\n Buy now and get 31% off\n\n\n\n\n \n \n \n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nThis ultra-thin, portable laptop from Apple provides a full laptop experience in an all-aluminum unibody. The system is loaded with 12…",
    "url": "https://deals.thenextweb.com/sales/apple-macbook-air-13-md231ll-a-2012-a1466-core-i5-4gb-ram-64gb-ssd-refurbished?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp0.stackassets.com/7fa6375cb2b5fa75c591cb62a8462841d026e2ba/store/c428153a9a06742a6788affc023c32010fb0142005eff71aab29c433bbaf/sale_320841_primary_image.jpg",
    "publishedAt": "2023-03-06T08:00:00Z",
    "content": "This ultra-thin, portable laptop from Apple provides a full laptop experience in an all-aluminum unibody. The system is loaded with 128GB of flash storage rather than an old-fashioned hard drive. Fla… [+1289 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "Dashlyte Open-Ear Headphones for $79",
    "description": "Expires March 06, 2123 21:23 PST\n\n\n\n\n Buy now and get 0% off\n\n\n\n\n \n \n \n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nDashlyte open-ear headphones are the perfect blend of premium sound and functionality. These headphones keep you aware of your surroundings while providing cle…",
    "url": "https://deals.thenextweb.com/sales/dashlyte?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp1.stackassets.com/047bcb3f573c467e5cb9e8c7dce2003d4b1f7b4a/store/e80c9ee6dd8c478d77739679d1973069fcc223afc0543666c470f997861b/image_processing20230306-72-axu2ln.jpg",
    "publishedAt": "2023-03-06T08:00:00Z",
    "content": "Dashlyte open-ear headphones are the perfect blend of premium sound and functionality. These headphones keep you aware of your surroundings while providing clear, high-quality audio. Their comfortabl… [+693 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "The Award-Winning Luminar Neo AI Lifetime Bundle for $79",
    "description": "Expires April 06, 2023 23:59 PST\n\n\n\n\n Buy now and get 80% off\n\n\n\n\n \n \n \n \n Luminar Neo: Lifetime License\r\n\n \n \n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nLuminar Neo is easy-to-use photo editing software that empowers photography lovers to express t…",
    "url": "https://deals.thenextweb.com/sales/the-award-winning-luminar-neo-ai-lifetime-bundle?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp1.stackassets.com/491082463ea06d4c6bb811cf3a3a710c2b052939/store/3fea2b46a3f546a6d3ac52a31cd9088918120326b93995ecfce7aba6e2a1/sale_320867_primary_image.jpg",
    "publishedAt": "2023-03-06T08:00:00Z",
    "content": "Luminar Neo is easy-to-use photo editing software that empowers photography lovers to express the beauty they imagined using innovative AI-driven tools.\r\nLuminar Neo was built from the ground up to b… [+2368 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "CrossOver Windows Compatibility App: 1-Yr Subscription for $49",
    "description": "Expires April 05, 2023 23:59 PST\n\n\n\n\n Buy now and get 33% off\n\n\n\n\n \n \n \n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nDo you like buying Windows® licenses? You do? Great. You do you. For the rest of humanity, CrossOver is the easiest way to run many Microsoft …",
    "url": "https://deals.thenextweb.com/sales/crossover-for-mac-1-yr-subscription?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp0.stackassets.com/08327c0752840c829414e28876d8e6b8d6f60f14/store/f1cbac6b03d47dbd6e54966c6b0fb27c4a2c2fa025163634d2c4ec8eb6e9/sale_320844_primary_image.jpg",
    "publishedAt": "2023-03-06T08:00:00Z",
    "content": "Do you like buying Windows® licenses? You do? Great. You do you. For the rest of humanity, CrossOver is the easiest way to run many Microsoft applications on your Mac without a clunky Windows emulato… [+1526 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "The All-In-One Hardcore Unity Game Developer Bundle ft. Xbox Ultimate 1-Month Game Pass for $29",
    "description": "Expires March 06, 2123 23:59 PST\n\n\n\n\n Buy now and get 98% off\n\n\n\n\n \n \n \n \n Xbox Game Pass Ultimate: 1 Month Subscription\r\n\n \n \n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nNOTE: Codes are NOT stackable. This is available for both new and existing users with expired Gamepass …",
    "url": "https://deals.thenextweb.com/sales/the-all-in-one-hardcore-unity-game-developer-bundle-xbox-gamepass-1-month?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp0.stackassets.com/965d1adf6d396ed1568744acd015ef1736c6b673/store/6ea2202b5f5df3205e09bb9f8c974d043e042bf6895829490333b116f137/sale_320856_primary_image.jpg",
    "publishedAt": "2023-03-06T08:00:00Z",
    "content": "NOTE: Codes are NOT stackable. This is available for both new and existing users with expired Gamepass accounts.\r\nGet more out of your gaming experience with Xbox Game Pass Ultimate. With over 100 hi… [+1948 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "Dell Chromebook 3120, 11.6\" 2.16 GHz 4GB RAM 16GB SSD (Refurbished) for $62",
    "description": "Expires March 06, 2123 23:59 PST\n\n\n\n\n Buy now and get 72% off\n\n\n\n\n \n \n \n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nThis refurbished Dell Chromebook 3120 is an 11.6-inch laptop powered by an Intel Celeron N2840 processor and equipped with 4GB…",
    "url": "https://deals.thenextweb.com/sales/dell-chromebook-3120-2-16-ghz-4gb-ram-16gb-ssd-refurbished?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp2.stackassets.com/f3a1e7e3bc20ee824b83681612aa766c005053be/store/5a816a91f326729168ac67269272544a960b4ccd1d0fb8796e44efdf7db1/sale_320847_primary_image.jpg",
    "publishedAt": "2023-03-06T08:00:00Z",
    "content": "This refurbished Dell Chromebook 3120 is an 11.6-inch laptop powered by an Intel Celeron N2840 processor and equipped with 4GB of RAM and a 16GB SSD for storage. It runs on ChromeOS, Google's operati… [+1154 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "Apple Mac mini (A1347) Core i5, 2.5GHz 8GB RAM 1TB HDD (Refurbished) for $205",
    "description": "Expires March 06, 2123 23:59 PST\n\n\n\n\n Buy now and get 23% off\n\n\n\n\n \n \n \n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nThe refurbished Apple Mac mini is a tiny yet powerful desktop that lets you work on documents and spreadsheets, browse the web, and wa…",
    "url": "https://deals.thenextweb.com/sales/apple-mac-mini-mgem2ll-a-2014-a1347-core-i5-2-5-ghz-8gb-ram-1tb-hdd-refurbished?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp3.stackassets.com/63ce99dc493145d2da0e916e563c32ee9d68b75b/store/4fbabb3b6ccaeabf59231c94104c987cf1d62fed96c13aea8f2875724a84/sale_320842_primary_image.jpg",
    "publishedAt": "2023-03-06T08:00:00Z",
    "content": "The refurbished Apple Mac mini is a tiny yet powerful desktop that lets you work on documents and spreadsheets, browse the web, and watch videos with ease. The Mac mini comes with 8GB of RAM, 1TB of … [+863 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Tage Kene-okafor",
    "title": "Alleged security breach leaves millions of dollars missing from Flutterwave accounts",
    "description": "Last month, African fintech Flutterwave was involved in a hack that resulted in over $4 million missing from its accounts.",
    "url": "https://techcrunch.com/2023/03/05/alleged-security-breach-leaves-millions-of-dollars-missing-from-flutterwave-accounts/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/08/GettyImages-1174418589-1.jpg?resize=1200,759",
    "publishedAt": "2023-03-06T07:46:58Z",
    "content": "Last month, Flutterwave, Africas largest startup by private valuation, was involved in a hack that resulted in over 2.9 billion (~$4.2 million) missing from its accounts, according to local tech publ… [+2911 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Rebecca Bellan",
    "title": "Tesla slashes prices for Model S and Model Y in US",
    "description": "In its second cost cutting measure of 2023, Tesla slashed Model S and Model Y prices in the U.S. by $5,000 and $10,000, respectively.",
    "url": "https://techcrunch.com/2023/03/05/tesla-slashes-prices-for-model-s-and-model-y-in-us/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-06-at-2.58.51-PM-e1662509071979.png?resize=1200,745",
    "publishedAt": "2023-03-06T04:47:32Z",
    "content": "Tesla has cut the prices of its Model S sedan and Model X SUV in the U.S., according to the company’s website. This is the second time this year that Tesla has slashed prices, and it might be a bid t… [+961 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Haje Jan Kamps",
    "title": "If you have more than one business model, you don't have a business model",
    "description": "A business model is how your company operates: How you deploy your resources (money and people) to create products and attract and retain paying customers.",
    "url": "https://techcrunch.com/2023/03/05/keep-it-simple-on-the-business-models/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1227171499.jpg?resize=1200,800",
    "publishedAt": "2023-03-05T17:00:33Z",
    "content": "To be successful, a business needs to have a plan for revenue in the short term and profitability in the long. Early-stage founders might be tempted to come up with half a dozen ways the company coul… [+2059 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Mary Ann Azevedo",
    "title": "Amazon and Better.com’s unlikely pairing",
    "description": "Welcome to The Interchange! If you received this in your inbox, thank you for signing up and your vote of confidence. If you’re reading this as a post on our site, sign up here so you can receive it directly in the future. Every week, I’ll take a look at the …",
    "url": "https://techcrunch.com/2023/03/05/amazon-and-fintech-better-coms-unlikely-pairing/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/02/GettyImages-1125071391.jpg?resize=1200,800",
    "publishedAt": "2023-03-05T15:16:45Z",
    "content": "Welcome to The Interchange! If you received this in your inbox, thank you for signing up and your vote of confidence. If youre reading this as a post on our site, sign up here so you can receive it d… [+11826 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Ron Miller",
    "title": "Salesforce earnings: Will they keep activist investors at bay?",
    "description": "After Salesforce delivered a stellar quarter, will it help get rid of the bevy of activist investors dogging the company?",
    "url": "https://techcrunch.com/2023/03/05/salesforce-activist-investors-earnings-results/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/01/salesforce-hounds.jpg?resize=1200,645",
    "publishedAt": "2023-03-05T15:00:28Z",
    "content": "Salesforce is dealing with five powerful activist investors. One way to get these firms off your back is performing well, which drives up stock prices. Salesforce checked that box with a stellar quar… [+1771 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "2.4\" Car Dash Camera for $29",
    "description": "Expires March 05, 2123 23:59 PST\n\n\n\n\n Buy now and get 50% off\n\n\n\n\n \n \n \n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nThe 2.4\" dash camera is a mid-sized dash cam with a sporty design. This camera is ideal for drivers looking for a great value …",
    "url": "https://deals.thenextweb.com/sales/watch-the-roads-dashcam?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp1.stackassets.com/7db3485986897ca472aad3bafe8b8f1184f2b07d/store/014e437aaf9ad84eab16753bf1df339a20564a5a8035818000866d7ae1c7/sale_320853_primary_image.jpg",
    "publishedAt": "2023-03-05T08:00:00Z",
    "content": "The 2.4\" dash camera is a mid-sized dash cam with a sporty design. This camera is ideal for drivers looking for a great value product and modern design. Equipped with an ON Autofocus Liquid lens and … [+1320 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Kyle Wiggers",
    "title": "OpenAI launches an API for ChatGPT, a startup attempts a humanoid robot, and Salesforce turns it around",
    "description": "In this edition of Week in Review, we cover OpenAI launching an API for ChatGPT, a startup attempting a humanoid robot and more.",
    "url": "https://techcrunch.com/2023/03/04/openai-launches-an-api-for-chatgpt-a-startup-attempts-a-humanoid-robot-and-salesforce-turns-it-around/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/02/GettyImages-1173441590.jpg?resize=1200,800",
    "publishedAt": "2023-03-04T21:15:47Z",
    "content": "TGIF, my TechCrunch homies. It’s that time of week again — the time for Week in Review, where we recap the past five days in tech news. As always, lots happened, so let’s dig in sans delay.\r\nWell, pe… [+5870 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Sarah Perez",
    "title": "This Week in Apps: Jack Dorsey-backed Bluesky, social apps’ teen protections, Twitter clients get help",
    "description": "Welcome back to This Week in Apps, the weekly TechCrunch series that recaps the latest in mobile OS news, mobile applications and the overall app economy. The app economy in 2023 hit a few snags, as consumer spending last year dropped for the first time by 2%…",
    "url": "https://techcrunch.com/2023/03/04/this-week-in-apps-jack-dorsey-backed-bluesky-social-apps-teen-protections-twitter-clients-get-help/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/02/this-week-in-apps-splash-2023.webp?resize=1200,637",
    "publishedAt": "2023-03-04T19:11:32Z",
    "content": "Welcome back to This Week in Apps, the weekly TechCrunch series that recaps the latest in mobile OS news, mobile applications and the overall app economy.\r\nThe app economy in 2023 hit a few snags, as… [+29217 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Natasha Mascarenhas",
    "title": "The oh-so-biased branding risk in venture capital",
    "description": "Welcome to Startups Weekly, a nuanced take on this week’s startup news and trends by Senior Reporter and Equity co-host Natasha Mascarenhas.",
    "url": "https://techcrunch.com/2023/03/04/the-oh-so-biased-branding-risk-in-venture-capital/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/03/GettyImages-936078666.jpg?resize=1200,801",
    "publishedAt": "2023-03-04T19:01:35Z",
    "content": "Welcome to Startups Weekly, a nuanced take on this weeks startup news and trends by Senior Reporter and Equity co-host Natasha Mascarenhas. To get this in your inbox, subscribe here.\r\nOne of the quie… [+3640 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Ron Miller",
    "title": "Enterprise SaaS companies continue to navigate a complex economic environment",
    "description": "With Zoom, Box, Okta and Salesforce reporting this week, we saw mixed results from enterprise SaaS companies operating in a tough environment. Enterprise SaaS companies continue to navigate a complex economic environment by Ron Miller originally published",
    "url": "https://techcrunch.com/2023/03/04/enterprise-saas-companies-continue-to-navigate-a-complex-economic-environment/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-508653481-1.jpg?resize=1200,880",
    "publishedAt": "2023-03-04T17:00:19Z",
    "content": "Its been a tough time for enterprise SaaS companies. These organizations raked in profits and growth during the pandemic when offices shuttered and employees moved en masse to work from home. But as … [+1159 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Alex Wilhelm",
    "title": "The good news for long-term software growth",
    "description": "While the venture market continues to digest a new reality, the TechCrunch+ crew has been paying very close attention to software earnings.",
    "url": "https://techcrunch.com/2023/03/04/the-good-news-for-long-term-software-growth/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/06/NSussman_Techcrunch_Exchange-multicolor.jpg?resize=1200,900",
    "publishedAt": "2023-03-04T16:00:52Z",
    "content": "While the venture market continues to digest a new reality, the TechCrunch+ crew has been paying very close attention to software earnings. Why are we tracking earning results for Q4 2022 in March 20… [+986 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Christine Hall",
    "title": "Daily Crunch: Japanese marketing tech firm Geniee acquires Zelto for $70M",
    "description": "Hello, friends, and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
    "url": "https://techcrunch.com/2023/03/03/daily-crunch-japanese-marketing-tech-firm-geniee-acquires-zelto-for-70m/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/05/GettyImages-517343884.jpg?resize=1200,600",
    "publishedAt": "2023-03-03T23:05:54Z",
    "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PST, subscribe here.\r\nHello, you crunchy Crunchers! If youve been slacking and not bough… [+3629 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Haje Jan Kamps",
    "title": "Vigilante hackers fix Black Ops III, and other TC news",
    "description": "Vigilante hackers fix Black Ops III, and other TC newstechcrunch.com",
    "url": "https://techcrunch.com/2023/03/03/vigilante-hackers-fix-black-ops-iii-and-other-tc-news/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/05/TC-Pod-feature.jpg?resize=1200,781",
    "publishedAt": "2023-03-03T20:36:30Z",
    "content": "Welcome back to the TechCrunch Podcast, where I’m standing in for Darrell while he’s honeymooning with his lady love. This week, I sat down with Amanda Silberling and Mary Ann Azevedo to talk through… [+464 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Harri Weber",
    "title": "Honda's aging hydrogen fuel cells get new life in data center",
    "description": "This is just a \"proof of concept,\" said Honda, but the automaker aims to commercialize the tech and sees potential beyond data centers.",
    "url": "https://techcrunch.com/2023/03/03/hondas-aging-hydrogen-fuel-cells-get-new-life-in-data-center/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/Honda-Stationary-Fuel-Cell-1.jpg?resize=1200,800",
    "publishedAt": "2023-03-03T20:21:07Z",
    "content": "Honda bailed on the Clarity its only hydrogen-powered car in the U.S. but the automaker hasn’t quit on fuel cells.\r\nThat’s the message Honda sent with a peculiar announcement today: It’s putting some… [+2842 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Brian Heater",
    "title": "Smartphone makers searched for a way forward at MWC 2023",
    "description": "Smartphone makers searched for a way forward at MWC 2023. Foldables, 6G, light shows -- there are a lot of ideas floating around.",
    "url": "https://techcrunch.com/2023/03/03/smartphone-makers-searched-for-a-way-forward-at-mwc-2023/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/02/20230228_163432.jpg?resize=1200,900",
    "publishedAt": "2023-03-03T19:45:13Z",
    "content": "The slowdown was inevitable, of course. Nothing stays hot forever — especially in this industry. By tech standards, smartphones have had a good run, but the last few years have seen device makers sea… [+7129 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Devin Coldewey",
    "title": "Amazon pauses HQ2 construction after nationwide battle royale over location",
    "description": "After turning the US into Thunderdome over who would offer the biggest tax breaks for its new HQ, Amazon is pausing construction in Arlington.",
    "url": "https://techcrunch.com/2023/03/03/amazon-pauses-hq2-construction-after-nationwide-battle-royale-over-location/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/amazon-hq2.jpg?resize=1200,770",
    "publishedAt": "2023-03-03T19:15:50Z",
    "content": "Remember when Amazon turned the United States into Thunderdome, making every state battle over the right to host the company’s next big headquarters and 25,000 jobs? Well, after laying off more than … [+2409 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Natasha Mascarenhas",
    "title": "At Upfront Summit 2023, AI is the omnipresent celebrity",
    "description": "A marching band, a red carpet and a DJ who codes her beats are all things you can get before coffee (and a business card) at the Upfront Summit, one of venture's most awaited conferences. But not even a marching band couldn't pull focus away from",
    "url": "https://techcrunch.com/2023/03/03/upfront-summit-2023-artificial-intelligence/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/UpFrontSummit_2023_06535.jpg?resize=1200,800",
    "publishedAt": "2023-03-03T19:00:37Z",
    "content": "A marching band, a red carpet and a DJ who codes her beats are all things you can get before coffee (and a business card) at the Upfront Summit, one of ventures most awaited conferences. But not even… [+970 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Aria Alamalhodaei",
    "title": "SpaceX's acquisition of Swarm is paying off with new Starlink thrusters",
    "description": "SpaceX acquisition of Swarm Technologies in July 2021 seems to be paying dividends with the new Starlink argon thrusters.",
    "url": "https://techcrunch.com/2023/03/03/spacexs-acquisition-of-swarm-is-paying-off-with-new-starlink-thrusters/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/starlink-hall-thruster-v2.jpeg?resize=1200,675",
    "publishedAt": "2023-03-03T18:46:37Z",
    "content": "Earlier this week, SpaceX released more information about the new argon Hall thrusters that will power the Starlink V2 mini satellites, an innovation that likely has much to do with the companys acqu… [+2585 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Aisha Malik",
    "title": "Meta rolls out new Facebook Reels features, expands max video length to 90 seconds",
    "description": "Meta announced today that it’s adding support for longer Facebook Reels of up to 90 seconds, along with some new creative tools. Up until now, Facebook Reels were limited to 60 seconds. The changes comes several months after Meta launched support for longer I…",
    "url": "https://techcrunch.com/2023/03/03/meta-rolls-out-new-facebook-reels-features-expands-max-video-length-to-90-seconds/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/02/GettyImages-1368412925.jpg?resize=1200,789",
    "publishedAt": "2023-03-03T18:14:51Z",
    "content": "Meta announced today that it’s adding support for longer Facebook Reels of up to 90 seconds, along with some new creative tools. Up until now, Facebook Reels were limited to 60 seconds. The changes c… [+2084 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Kirsten Korosec",
    "title": "Embark Trucks lays off workers, explores liquidation of self-driving truck assets",
    "description": "Embark Trucks, the autonomous trucking company that went public in 2021 via a merger with a special purpose acquisition company, is cutting its workforce in ...",
    "url": "https://techcrunch.com/2023/03/03/embark-trucks-lays-off-workers-explores-liquidation-of-self-driving-truck-assets/",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/2As0LcWco70VGYOXimGz5Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDE-/https://media.zenfs.com/en/techcrunch_350/9cfa3f59cd37c08850549c085c75d6cb",
    "publishedAt": "2023-03-03T18:05:44Z",
    "content": "Embark Trucks, the autonomous trucking company that went public in 2021 via a merger with a special purpose acquisition company, is cutting its workforce in an effort to reduce costs and preserve cas… [+1852 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Alex Wilhelm",
    "title": "Perhaps Substack can grow just fine without venture dollars",
    "description": "Substack, a publishing platform known for its newsletter service, announced this week that it had crossed the 2 million paid subscription mark. What does that add up to for its business? Perhaps Substack can grow just fine without venture dollars by Alex",
    "url": "https://techcrunch.com/2023/03/03/perhaps-substack-can-grow-just-fine-without-venture-dollars/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/05/NSussman_Techcrunch_Exchange_v3-ORNG.jpg?resize=1200,900",
    "publishedAt": "2023-03-03T17:30:52Z",
    "content": "Substack, a publishing platform known for its newsletter service, announced this week that it had crossed the 2 million paid subscription mark. Given the wealth of historical data we have concerning … [+770 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Jagmeet Singh",
    "title": "Indian startup Yes Madam exposed sensitive data of customers and gig workers",
    "description": "The at-home salon platform exposed sensitive user data to the open internet because of a server misconfiguration.",
    "url": "https://techcrunch.com/2023/03/03/yes-madam-india-data-exposed/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/salon-india-image-getty.jpg",
    "publishedAt": "2023-03-03T17:26:15Z",
    "content": "Indian at-home salon platform Yes Madam exposed the sensitive data of its customers and gig workers due to a server-side misconfiguration.\r\nThe Noida-based Yes Madam operates in over 30 cities in the… [+1567 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Rebecca Bellan",
    "title": "Uber is coming for Instacart",
    "description": "Uber has rolled out updates to its Shop and Pay feature that address three of the most commonly raised courier issues: out of stock items, digital payments and order clarity before accepting a trip. The ride-hail and delivery giant quietly launched Shop and P…",
    "url": "https://techcrunch.com/2023/03/03/uber-is-coming-for-instacart/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/uber-shop-pay.jpg?resize=1200,526",
    "publishedAt": "2023-03-03T17:00:08Z",
    "content": "Uber has rolled out updates to its Shop and Pay feature that address three of the most commonly raised courier issues: out of stock items, digital payments and order clarity before accepting a trip.\r… [+4789 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Tim Stevens",
    "title": "VW-backed Scout Motors to build $2B factory in South Carolina",
    "description": "Scout Motors, the VW Group spinoff, plans to build a $2 billion factory capable of producing 200,000 EVs a year in South Carolina.",
    "url": "https://techcrunch.com/2023/03/03/vw-backed-scout-motors-to-build-2b-factory-in-south-carolina/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/2023_03_03_ScoutMotors_SCplant.jpg?resize=1200,675",
    "publishedAt": "2023-03-03T16:42:00Z",
    "content": "Scout Motors, the VW Group spinoff taking aim at the U.S. market with rugged all-electric vehicles, is deepening its investment with plans to build a $2 billion factory capable of producing 200,000 E… [+4360 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Tim De Chant",
    "title": "BlocPower hits its stride, landing $25M Series B to expand its residential energy retrofit platform",
    "description": "The Inflation Reduction Act will ramp up demand for heat pumps and home electrification. BlocPower's platform can help make energy retrofitting more accessible. BlocPower hits its stride, landing $25M Series B to expand its residential energy retrofit",
    "url": "https://techcrunch.com/2023/03/03/blocpower-hits-its-stride-landing-25m-series-b-to-expand-its-residential-energy-retrofit-platform/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1089895298.jpg?resize=1200,806",
    "publishedAt": "2023-03-03T16:30:53Z",
    "content": "For all the focus on carbon pollution produced by shipping and aviation, some of the most challenging to abate will probably be residential buildings. In the U.S., housing units stand an average of 1… [+1413 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Carly Page",
    "title": "US government warns Royal ransomware is targeting critical infrastructure",
    "description": "The federal advisory warns that the Royal ransomware is targeting critical infrastructure sectors across the United States.",
    "url": "https://techcrunch.com/2023/03/03/us-government-royal-ransomware-advisory/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/03/ransomware-bryce.jpg?resize=1200,799",
    "publishedAt": "2023-03-03T16:07:16Z",
    "content": "The U.S. government is sounding the alarm about the Royal ransomware operation, which it says has targeted numerous critical infrastructure sectors across the United States.\r\nIn a joint advisory rele… [+3001 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": "Ioanna Lykiardopoulou",
    "title": "€7.5M EU scheme aims to help Ukrainian SMEs benefit from the single market",
    "description": "The European Commission has launched a new €7.5 million grant scheme to help Ukrainian SMEs integrate and benefit from the single market. The so-called ReadyForEU scheme comprises two calls for proposals directed to Ukraine-based businesses and entrepreneurs:…",
    "url": "https://thenextweb.com/news/eu-cheme-aims-to-help-ukrainian-smes-benefit-from-single-market",
    "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F03%2FUntitled-design-2023-03-03T153654.121.jpg&signature=9370dd0ad6785f8918a3bbf4a7479589",
    "publishedAt": "2023-03-03T16:00:45Z",
    "content": "The European Commission has launched a new 7.5 million grant scheme to help Ukrainian SMEs integrate and benefit from the single market.\r\nThe so-called ReadyForEU scheme comprises two calls for propo… [+2115 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Lauren Forristal",
    "title": "Digital locker app Movies Anywhere sunsets ‘Screen Pass’ and ‘Watch Together’ features",
    "description": "Movies Anywhere, the Disney-owned app that lets users access their digitally owned movie collection from across services, is shutting down two features, “Screen Pass” and “Watch Together.” Screen Pass, which launched in 2020, allows you to loan out three movi…",
    "url": "https://techcrunch.com/2023/03/03/movies-anywhere-shuts-down-screen-pass-and-watch-together-features/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/12/movies-anywhere.png?resize=1200,630",
    "publishedAt": "2023-03-03T15:58:36Z",
    "content": "Movies Anywhere, the Disney-owned app that lets users access their digitally owned movie collection from across services, is shutting down two features, Screen Pass and Watch Together.\r\nScreen Pass, … [+2668 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": "Thomas Macaulay",
    "title": "Sunak branded ‘unspeakably idiotic’ for impeding plans to rejoin Horizon",
    "description": "Rishi Sunak has enraged British scientists after dimming hopes of rejoining the EU’s Horizon programme. Prospects of entering the €96 billion research scheme had grown after a new Brexit deal for Northern Ireland was struck on Monday. European Commission pres…",
    "url": "https://thenextweb.com/news/sunak-dims-hopes-of-rejoining-eu-horizon-research-programme",
    "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F03%2FUntitled-design-1.jpg&signature=880798a2e645c8cf3c17c8ba8518289c",
    "publishedAt": "2023-03-03T15:55:38Z",
    "content": "Rishi Sunak has enraged British scientists after dimming hopes of rejoining the EUs Horizon programme.\r\nProspects of entering the 96 billion research scheme had grown after a new Brexit deal for Nort… [+2731 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Natasha Mascarenhas",
    "title": "For female VCs bias is a branding issue",
    "description": "More women in venture means that bias and strategic branding are increasingly more relevant for a larger fraction of check-writers. For female VCs bias is a branding issue by Natasha Mascarenhas originally published on TechCrunch",
    "url": "https://techcrunch.com/2023/03/03/venture-capital-firm-rebrand/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/06/girlboss-briefcase-shadow.jpg?resize=1200,675",
    "publishedAt": "2023-03-03T15:30:09Z",
    "content": "Leslie Feinzaig, a venture capitalist, likes that her venture firm, Graham &amp; Walker, sounds like an old, stodgy law firm. But apart from the name, theres nothing really stodgy about it: Her fund … [+2087 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Alex Wilhelm",
    "title": "Why hasn't generative AI come up with something easier to say than 'generative AI'?",
    "description": "Welcome back to Equity, a podcast about the business of startups, where we unpack the numbers and nuance behind the headlines.",
    "url": "https://techcrunch.com/2023/03/03/why-hasnt-generative-ai-come-up-with-something-easier-to-say-than-generative-ai/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/equity-podcast-2019-phone.webp",
    "publishedAt": "2023-03-03T15:04:39Z",
    "content": "Hello and welcome back to Equity, a podcast about the business of startups, where we unpack the numbers and nuance behind the headlines.\r\nThis week Mary Ann Azevedo, Becca Szkutak, and Alex Wilhelm g… [+677 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Camilla Tenn",
    "title": "Startup PR professionals should be jumping on the AI bandwagon",
    "description": "You're missing a huge opportunity if you're not finding a way to promote your AI and ML capabilities at this time.",
    "url": "https://techcrunch.com/2023/03/03/startup-pr-professionals-should-be-jumping-on-the-ai-bandwagon/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1349788289.jpg?resize=1200,800",
    "publishedAt": "2023-03-03T12:30:44Z",
    "content": "It’s only been a couple of months since OpenAIs ChatGPT exploded into the public consciousness, and it already feels like our news feeds will never be the same again.\r\nWhether its headlines about AI … [+2125 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Manish Singh",
    "title": "India's central bank slaps penalty on Amazon's payments unit",
    "description": "India's central bank has slapped Amazon Pay's India unit with a fine of over $373,300 for non-compliance with local guidelines surrounding know your customer and prepaid payment instruments norms. The Reserve Bank of India said in a statement (PDF",
    "url": "https://techcrunch.com/2023/03/03/reserve-bank-of-india-amazon-pay/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/06/GettyImages-1163035953.jpg?resize=1200,800",
    "publishedAt": "2023-03-03T12:18:39Z",
    "content": "India’s central bank has slapped Amazon Pay’s India unit with a fine of over $373,300 for non-compliance with local guidelines surrounding know your customer and prepaid payment instruments norms.\r\nT… [+1371 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Manish Singh",
    "title": "Japan's Geniee acquires AdPushup-operator Zelto for $70 million",
    "description": "Japanese marketing tech firm Geniee, part of the SoftBank Group, paid about $70 million in cash to acquire Zelto (formerly known as AdPushup).",
    "url": "https://techcrunch.com/2023/03/03/softbank-geniee-acquires-zelto-adpushup-for-70-million/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/geniee-adpushup-acquisition.jpg?resize=1200,838",
    "publishedAt": "2023-03-03T11:32:46Z",
    "content": "Japanese marketing tech firm Geniee, part of the SoftBank Group, has paid about $70 million in cash to acquire the revenue optimization platform Zelto (formerly known as AdPushup), a person familiar … [+2664 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "Mobile Pixels AI Smart Camera for $54",
    "description": "Expires March 03, 2123 23:59 PST\n\n\n\n\n Buy now and get 8% off\n\n\n\n\n \n \n \n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nThe Mobile Pixels Smart Camera is one of the first cameras with a built-in noise-reduction mic. Its full HD 1080p resolution gi…",
    "url": "https://deals.thenextweb.com/sales/mobile-pixels-ai-smart-camera?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp1.stackassets.com/155a9b5c3f8adf7acf7042ae134dcf11855d0f0e/store/963e5d0ae492169518b7ac265b5925b692c075d92991ab844c3a24cf4bbd/sale_320836_primary_image.jpg",
    "publishedAt": "2023-03-03T08:00:00Z",
    "content": "The Mobile Pixels Smart Camera is one of the first cameras with a built-in noise-reduction mic. Its full HD 1080p resolution gives crystal clear pictures, even in low light conditions. The built-in n… [+1011 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "The Complete Ethical Hacking Bootcamp 2023: Zero to Mastery Certification Bundle for $45",
    "description": "Expires March 04, 2123 23:59 PST\n\n\n\n\n Buy now and get 97% off\n\n\n\n\n \n \n \n \n Learn Python & Ethical Hacking From Scratch 2023\r\n\n \n \n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nLearn both ethical hacking and programming at the same time in this comprehensive course. The course…",
    "url": "https://deals.thenextweb.com/sales/the-complete-ethical-hacking-bootcamp-2023-zero-to-mastery-certification-bundle?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp2.stackassets.com/b92be4e42128fab1ed26350ed308f9b0aafcd365/store/e9ff650c6e8565e777cb1777823cf19142b4550330dba0cbe59b1f87c7ce/sale_320838_primary_image.jpg",
    "publishedAt": "2023-03-03T08:00:00Z",
    "content": "iSecur1tyZaid Sabih | Ethical Hacker, Computer Scientist &amp; CEO of zSecurityZaid Al-Quraishi is an ethical hacker, pentester, and programmer. He has extensive experience in ethical hacking and pen… [+631 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "The Complete QuickBooks Desktop 2023 Mastery Bundle for $29",
    "description": "Expires March 03, 2123 23:59 PST\n\n\n\n\n Buy now and get 97% off\n\n\n\n\n \n \n \n \n QuickBooks Desktop 2023 #1: Navigation, Forms & Reports\r\n\n \n \n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nThis course will cover the fundamentals of QuickBooks Desktop and the things you need to know…",
    "url": "https://deals.thenextweb.com/sales/the-complete-quickbooks-desktop-2023-mastery-bundle?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp1.stackassets.com/6b29327eae2d643fd572b692d173f15e4260c190/store/81d7c3947069b19332ae0d89802ad9dcb9a068fdf2e77ca288c43fc9c8f7/sale_320839_primary_image.jpg",
    "publishedAt": "2023-03-03T08:00:00Z",
    "content": "Robert SteeleRobert Steele | CPA, CGMA, M.S. Tax, CPIRobert Steele has experience working as a practicing Certified Public Accountant (CPA), an accounting and business instructor, and a curriculum de… [+428 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "The 2023 Ultimate Electric Circuits Engineer Course Bundle for $29",
    "description": "Expires March 04, 2123 23:59 PST\n\n\n\n\n Buy now and get 97% off\n\n\n\n\n \n \n \n \n Basic Concepts & Basic Laws of Electric Circuits\r\n\n \n \n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nThis course is designed for absolute beginners who have zero knowledge about electric circuits. With…",
    "url": "https://deals.thenextweb.com/sales/the-2023-ultimate-electric-circuits-engineer-course-bundle?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp1.stackassets.com/f6cb39e3171500a685047c7575b2ddfd4ef766bd/store/62c543af89b10d5b2a92667b8bd2f852cde18516909d7cc7925ea80a3b4b/sale_320837_primary_image.jpg",
    "publishedAt": "2023-03-03T08:00:00Z",
    "content": "This course is designed for absolute beginners who have zero knowledge about electric circuits. With 47 lectures, this course will teach you the basic concepts such as current, voltage, power, and en… [+585 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "AppuSocial Fanny Plan: Lifetime Subscription for $49",
    "description": "Expires June 01, 2023 23:59 PST\n\n\n\n\n Buy now and get 94% off\n\n\n\n\n \n \n \n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nBe where your customers are and elevate your brand on social media.\n\nThe AppuSocial Fanny Plan is a professional solution that allows y…",
    "url": "https://deals.thenextweb.com/sales/appusocial-fanny-plan-lifetime-subscription?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp3.stackassets.com/8c9532afc699259d787cc1ff6e2ec50237b33db2/store/770b224a68034b49f883d5b48fdcc34317abfde7fd43f68c481e50c2846b/sale_320770_primary_image.jpg",
    "publishedAt": "2023-03-03T08:00:00Z",
    "content": "Be where your customers are and elevate your brand on social media.\r\nThe AppuSocial Fanny Plan is a professional solution that allows you to schedule posts and manage them from anywhere, at any time,… [+2339 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": null,
    "title": "The Microsoft Training Bundle: ZERO to ADVANCED for $25",
    "description": "Expires March 03, 2123 23:59 PST\n\n\n\n\n Buy now and get 97% off\n\n\n\n\n \n \n \n \n Microsoft Excel: From ZERO to ADVANCED\r\n\n \n \n\n \n \n \r\n\n \n\n \n KEY FEATURES\r\nMicrosoft Excel is one of the most advanced spreadsheet software and one with a high demand on the market. Whe…",
    "url": "https://deals.thenextweb.com/sales/the-microsoft-training-bundle-zero-to-advanced?aid=&utm_campaign=feed&utm_medium=RSS&utm_source=thenextweb",
    "urlToImage": "https://cdnp0.stackassets.com/65f8d92a594decf89a9821f313a93b7a8446b5ac/store/fa45cfef63a16eef744c872cd86e8652da70141de658e8b97aa153def936/sale_320840_primary_image.jpg",
    "publishedAt": "2023-03-03T08:00:00Z",
    "content": "Microsoft Excel is one of the most advanced spreadsheet software and one with a high demand on the market. Whether it is for data science, finance, accounting, or administration, Microsoft Excel has … [+665 chars]"
    },
   {
    "source": {
    "id": "the-next-web",
    "name": "The Next Web"
    },
    "author": "Jill Petzinger",
    "title": "10 trailblazing Valèncian startups to watch in 2023",
    "description": "València’s tech ecosystem is growing and maturing at a brisk pace. Founders, investors, and business leaders in the city are unanimous that this region in Spain will cement itself as a tech hub to be reckoned with in the coming years. Names like Flywire, Feve…",
    "url": "https://thenextweb.com/news/10-trailblazing-valencian-startups-to-watch-in-2023",
    "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F02%2Fvalencia.jpg&signature=1ee138631a9afac5e85217eefad87481",
    "publishedAt": "2023-03-03T07:58:49Z",
    "content": "Valèncias tech ecosystem is growing and maturing at a brisk pace. Founders, investors, and business leaders in the city are unanimous that this region in Spain will cement itself as a tech hub to be … [+6652 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Ivan Mehta",
    "title": "Twitter Blue expands to more than 20 countries",
    "description": "Twitter’s paid plan Twitter Blue is now available to more than 20 new countries in Europe. These countries include Netherlands, Poland, Ireland, Belgium, Sweden, Romania, Czech Republic, Finland, Denmark, Greece, Austria, Hungary, Bulgaria, Lithuania, Slovaki…",
    "url": "https://techcrunch.com/2023/03/02/twitter-blue-expands-to-more-than-20-countries/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/twitter-blue-breaking.jpg?resize=1200,645",
    "publishedAt": "2023-03-03T05:27:20Z",
    "content": "Twitter’s paid plan Twitter Blue is now available to more than 20 new countries in Europe. These countries include Netherlands, Poland, Ireland, Belgium, Sweden, Romania, Czech Republic, Finland, Den… [+1325 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Christine Hall",
    "title": "Daily Crunch: Stealth startup Figure releases first photos of its all-purpose humanoid robot",
    "description": "Hello, friends, and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
    "url": "https://techcrunch.com/2023/03/02/daily-crunch-stealth-startup-figure-releases-first-photos-of-its-all-purpose-humanoid-robot/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/FIGURE01_Humanoid_1.jpg?resize=1200,960",
    "publishedAt": "2023-03-02T23:06:16Z",
    "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PST, subscribe here.\r\nGday, friends! Good to spend some time with you again. Come spend … [+3152 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Mark Harris",
    "title": "Universal Hydrogen takes to the air with the largest hydrogen fuel cell ever to fly",
    "description": "A Universal Hydrogen plane, equipped with the largest hydrogen fuel cell ever to power an aircraft, made its maiden test flight in Washington.",
    "url": "https://techcrunch.com/2023/03/02/universal-hydrogen-takes-to-the-air-with-the-largest-hydrogen-fuel-cell-ever-to-fly/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/UH2_FirstFlight.jpg?resize=1200,800",
    "publishedAt": "2023-03-02T22:56:18Z",
    "content": "As a Universal Hydrogen-branded plane, equipped with the largest hydrogen fuel cell ever to power an aircraft, made its maiden test flight in eastern Washington, co-founder and CEO Paul Eremenko decl… [+8477 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Zack Whittaker",
    "title": "Secret Service and ICE conducted warrantless stingray surveillance, says watchdog",
    "description": "Homeland Security's inspector general said the two federal agencies \"did not always obtain court orders\" as required by policy or federal law.",
    "url": "https://techcrunch.com/2023/03/02/secret-service-ice-warrantless-stingray/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1392356345.jpg?resize=1200,800",
    "publishedAt": "2023-03-02T22:45:56Z",
    "content": "A government watchdog has found that the Secret Service and ICE’s Homeland Security Investigations (HSI) unit repeatedly failed to obtain the correct legal paperwork when carrying out invasive cell p… [+3728 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Ron Miller",
    "title": "Adobe’s Scott Belsky talks generative AI – and why it’s not going to end up like web3",
    "description": "Adobe's Scott Belsky says that generative AI is nothing like web3 hype because it helps increase efficiency and reduce work for creatives.",
    "url": "https://techcrunch.com/2023/03/02/adobes-scott-belsky-talks-generative-ai-and-why-its-not-going-to-end-up-like-web3/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1294781336.jpg?resize=1200,601",
    "publishedAt": "2023-03-02T22:35:05Z",
    "content": "Scott Belsky, chief product officer and executive vice president for Adobes Creative Cloud, believes theres a big difference between the hype cycle around web3 last year, and what were seeing this ye… [+3432 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Kate Park",
    "title": "Indent raises $8.1M funding to continue developing its AI-powered customer video review tool",
    "description": "Indent, a South Korean video review platform, raises $8.1 million Series A to continue developing its AI-powered marketing tool.",
    "url": "https://techcrunch.com/2023/03/02/indent-raises-8-1m-funding-to-continue-developing-its-ai-powered-customer-video-review-tool/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/vrw_amp.png?resize=1200,900",
    "publishedAt": "2023-03-02T22:33:44Z",
    "content": "According to a recent report, 92.4% of consumers use reviews when deciding to purchase products. It’s understandable. They want confidence in their purchase choice before buying a product online.  \r\n… [+2818 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Kyle Wiggers",
    "title": "Stability AI, Hugging Face and Canva back new AI research nonprofit",
    "description": "Eleuther AI, a group of AI researchers investigating language models, is forming a nonprofit foundation for AI research.",
    "url": "https://techcrunch.com/2023/03/02/stability-ai-hugging-face-and-canva-back-new-ai-research-nonprofit/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1314979456.jpg?resize=1200,675",
    "publishedAt": "2023-03-02T22:14:05Z",
    "content": "Developing cutting-edge AI systems like ChatGPT requires massive technical resources, in part because they’re costly to develop and run. While several open source efforts have attempted to reverse-en… [+5834 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Brian Heater",
    "title": "An ode to big tech cos putting earbuds in smartwatches and other weird crap",
    "description": "I want to talk about weird tech for a minute. A lot of strange and wonderful pieces of technology have come across our desks over the years.",
    "url": "https://techcrunch.com/2023/03/02/an-ode-to-big-tech-cos-putting-earbuds-in-smartwatches-and-other-weird-crap/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/20230301_170916-1.2023-03-02-12_59_34.gif",
    "publishedAt": "2023-03-02T21:41:51Z",
    "content": "I want to talk about weird tech for a minute. A lot of strange and wonderful pieces of technology have come across our desks over the years. More often that not, theyre the purview of the startup. Sm… [+4266 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Jacquelyn Melinek",
    "title": "Are NFT marketplaces becoming an open sea for creator royalties?",
    "description": "February wrapped up as a big month for the NFT market as non-fungible tokens on the Ethereum blockchain surpassed $1.5B in volume for the first time since May 2022.",
    "url": "https://techcrunch.com/2023/03/02/are-nft-marketplaces-becoming-an-open-sea-for-creator-royalties/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1385019129.jpg?resize=1200,800",
    "publishedAt": "2023-03-02T20:01:08Z",
    "content": "To get a roundup of TechCrunchs biggest and most important crypto stories delivered to your inbox every Thursday at 12 p.m. PT, subscribe here.\r\nWelcome back to Chain Reaction.\r\nPSA: Ill be at ETH De… [+5130 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Tim De Chant",
    "title": "To fix the climate, these 10 investors are betting the house on the ocean",
    "description": "Founders and investors have a growing appreciation for the ocean’s potential to help solve the climate problem.",
    "url": "https://techcrunch.com/2023/03/02/to-fix-the-climate-these-10-investors-are-betting-the-house-on-the-ocean/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1331422149.jpeg?resize=1200,800",
    "publishedAt": "2023-03-02T20:00:55Z",
    "content": "Climate change is a problem important and pressing enough that investors have begun to grasp the opportunities that arise when trying to solve it. Now, theyve started to cast their nets wider for oth… [+8725 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Brian Heater",
    "title": "Barcelona nights",
    "description": "I’ve yet to walk the entire floor at Mobile World Congress this year (that’s the goal for this afternoon), but my sense is the majority of the robots present fit into one of two categories: robot vacuums or greeter robots.",
    "url": "https://techcrunch.com/2023/03/02/__trashed-19/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/02/20230228_163252.jpg?resize=1200,900",
    "publishedAt": "2023-03-02T19:31:21Z",
    "content": "Ive yet to walk the entire floor at Mobile World Congress in Barcelona this year (thats the goal for this afternoon), but my sense is the majority of the robots present fit into one of two categories… [+13985 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Lorenzo Franceschi-Bicchierai",
    "title": "Hackers steal gun owners' data from firearm auction website",
    "description": "Hackers breached a website that allows people to buy and sell guns, exposing the identities of its users, TechCrunch has learned.  The breach exposed realms ...",
    "url": "https://techcrunch.com/2023/03/02/hackers-steal-gun-owners-data-from-firearm-auction-website/",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/XETR14Cp5fg0VdX7huta5g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NTI-/https://media.zenfs.com/en/techcrunch_350/eaa6e4a10ef24b04fe42a97d68c2dc4c",
    "publishedAt": "2023-03-02T19:00:44Z",
    "content": "Hackers breached a website that allows people to buy and sell guns, exposing the identities of its users, TechCrunch has learned.\r\nThe breach exposed realms of sensitive personal data for more than 5… [+3093 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Amanda Silberling",
    "title": "BetterHelp owes customers $7.8M after FTC alleges data mishandling",
    "description": "The Federal Trade Commission (FTC) is requiring online therapy company BetterHelp to pay $7.8 million to consumers in a settlement over alleged data mishandling between 2017 and 2020. This marks the first proposed FTC order that would compensate consumers who…",
    "url": "https://techcrunch.com/2023/03/02/betterhelp-owes-customers-7-8m-after-ftc-alleges-data-mishandling/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/person-using-phone.jpg?resize=1200,800",
    "publishedAt": "2023-03-02T19:00:15Z",
    "content": "The Federal Trade Commission (FTC) is requiring online therapy company BetterHelp to pay $7.8 million to consumers in a settlement over alleged data mishandling between 2017 and 2020. This marks the … [+1973 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Devin Coldewey",
    "title": "Neuralink human testing has reportedly received one FDA rejection already",
    "description": "Neuralink's ambition to provide a brain-computer interface orders of magnitude better than what's out there has hit headwinds with the FDA.",
    "url": "https://techcrunch.com/2023/03/02/neuralink-human-testing-has-reportedly-received-one-fda-rejection-already/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/neuralink-header.jpg?resize=1200,682",
    "publishedAt": "2023-03-02T18:15:40Z",
    "content": "Neuralink’s ambition to provide a brain-computer interface orders of magnitude better than what’s out there now has hit headwinds with the FDA, Reuters reports. The agency reportedly rejected the com… [+2773 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Aisha Malik",
    "title": "Instagram starts testing its age verification tools in more countries",
    "description": "Meta announced today that it has started testing its age verification tools on Instagram in more countries. Last June, the social media app began testing new options for users to verify their age using one of three options: uploading their ID, recording a vid…",
    "url": "https://techcrunch.com/2023/03/02/instagram-starts-testing-its-age-verification-tools-in-more-countries/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/06/2022-Age-Verification-Selfie-IG.jpg?resize=1200,675",
    "publishedAt": "2023-03-02T18:06:22Z",
    "content": "Meta announced today that it has started testing its age verification tools on Instagram in more countries. Last June, the social media app began testing new options for users to verify their age usi… [+2419 chars]"
    },
   {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Amanda Silberling",
    "title": "Senators urge Zuckerberg to keep teens out of the metaverse",
    "description": "Per a leaked memo, Meta may open access to its social VR platform for users aged 13 to 17 as early as this month.",
    "url": "https://techcrunch.com/2023/03/02/senators-urge-zuckerberg-to-keep-teens-out-of-the-metaverse/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/02/Quest-v50-update-MZ_Header.jpg?resize=1200,675",
    "publishedAt": "2023-03-02T17:39:25Z",
    "content": "Senators Richard Blumenthal (D-CT) and Ed Markey (D-MA) wrote a letter to Meta CEO Mark Zuckerberg urging him to halt Meta’s plans to open Horizon Worlds to teens. Per a leaked memo, Meta may open ac… [+2247 chars]"
    }
    ];

  constructor(){
    super();
    console.log('Hello i am a constructor');
    this.state={
articles:[],
loading:false,
page:1,
    }
  }

  async componentDidMount(){
    console.log('cdm');
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fa2d47ce701f4dfab2b11ed02f3b8ccb&pageSize=20";
 this.setState({loading:true});
    let data= await fetch(url);
let parsedData= await data.json();
console.log(parsedData);
this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
  }

  handlePrevClick= async ()=>{
console.log('previous clicked');
let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fa2d47ce701f4dfab2b11ed02f3b8ccb&page=${this.state.page-1}&pageSize=20`;
let data= await fetch(url);
this.setState({loading:true});

let parsedData= await data.json();
console.log(parsedData);
this.setState(
{
page:this.state.page-1,
articles:parsedData.articles,
loading:false
}
)
  }
  handleNextClick=async ()=>{
    console.log('next clicked');
    if(this.state.page+1>Math.ceil(this.state.totalResults/20)){
this.setState({loading:true});
    }
    else{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fa2d47ce701f4dfab2b11ed02f3b8ccb&page=${this.state.page+1}&pageSize=20`;
    let data= await fetch(url);
let parsedData= await data.json();
console.log(parsedData);
this.setState(
  {
    page:this.state.page+1,
    articles:parsedData.articles,
    loading:false
  }
)}
  }
  render() {
    const mystyle={
        color:'blue',
       textAlign:'center'
    }

    return (
      <>
    
      <h2 style={mystyle}>Top Headlines</h2>
      {this.state.loading&&<Spinner/>}
      <div className='column'>
      {this.state.articles.map((element)=>{
  return <Desc key={element.url} title=
   {element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
      })}</div>
      <div className='container d-flex justify-content-between'>
      <button disabled={this.state.page<=1} type='button' className='btn btn-primary' onClick={this.handlePrevClick}>&larr; Previous</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} type='button' className='btn btn-primary' onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
    </>
    )
  }
}