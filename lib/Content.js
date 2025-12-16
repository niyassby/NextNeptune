import {
    Behance02Icon,
    DocumentCodeIcon,
    Facebook01Icon,
    GithubIcon,
    InstagramIcon,
    Linkedin01Icon,
    NewTwitterIcon,
    PromotionIcon,
    SparklesIcon,
    StartUp02Icon,
    YoutubeIcon,
  } from "hugeicons-react";

export class StaticContent {
    constructor() {
      this.socialLinks = [
        {
          icon: Facebook01Icon,
          link: "https://www.facebook.com/neptunemarkcreatives",
          name: "Facebook",
        },
        
        {
          icon: InstagramIcon,
          link: "https://www.instagram.com/neptune_mark",
          name: "Instagram",
        },
        // {
        //   icon: YoutubeIcon,
        //   link: "https://www.youtube.com/",
        //   name: "Youtube",
        // },
        {
          icon: Linkedin01Icon,
          link: "https://www.linkedin.com/company/neptunemark/",
          name: "Linkedin",
        },
        // {
        //   icon: GithubIcon,
        //   link: "https://github.com/",
        //   name: "Github",
        // },
        {
          icon: Behance02Icon,
          link: "https://www.behance.net/neptunemark",
          name: "Behance",
        },
        {
          icon: NewTwitterIcon,
          link: "https://twitter.com/",
          name: "Twitter",
        },
      ];
  
      this.companyInfo = {
        name: "Neptune Mark",
        tagline: "Creative & Digital Marketing",
        address: {
            India: "Neptunemark LLP, Near Markaz knowledge city, Calicut, Kerala - 673016",
            Qatar: "Neptunemark, West Bay, Doha, Qatar. PH: 974 30771273",
        },
        email: "info@neptunemark.com",
        phone: "+91 8590 30 50 60",
      };

      this.team = [
        {
          name: 'Anas Abdul Gafoor',
          desig: 'Managing Director ',
          image: "/assets/team/anas.png"
        },
        {
          name: 'Moosa Navas MS',
          desig: 'Director',
          image: "/assets/team/moosaImg.jpg",
        },
        {
          name: 'Shahid KP',
          desig: 'Director',
          image: "/assets/team/Shahid.png"
        },
        {
          name: 'Abdul Basith KM',
          desig: 'Director',
          image: "/assets/team/basith.jpg"
        },
        {
          name: 'Jafar Madari',
          desig: 'Director',
          image: "/assets/team/jafar.jpg"
        },
      ]

      this.mainNavLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Team", link: "/team" },
        { name: "Services", link: "/services" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "Contact", link: "/contact" },
      ];

      this.secondaryNavLinks = [
        {
          title: "Customer Support",
          link: "/support",
        },
        {
          title: "Privacy Policy",
          link: "/privacy",
        },
        {
          title: "Terms & Conditions",
          link: "/terms",
        },
      ];
  
    }
  
    getSocialLinks() {
      return this.socialLinks;
    }
  
    getCompanyInfo() {
      return this.companyInfo;
    }
  
    getFooterText() {
      return this.footerText;
    }
  }
  


export class TextContent {
    constructor() {
      this.homepage = {
        hero : [
            {
              title: "Mark the Moment",
              title2: "Tune the Future",
              description:
                "Ideas tuned to vision. Creativity cut in precision. we don’t chase trends - we mark an orbit that guides tomorrow.",
              btn: "Explore Products",
              img: "",
            },
            {
              title: "Tuned Imagery",
              title2: "Marked Identity",
              description: `Imagination and design together inspire. 
              Tuned for vision, marked forever`,
              btn: "Browse Our Store",
              img: "",
            },
            {
              title: "Innovation in Orbit",
              title2: "Precision in Tune",
              description:
                "Technology tuned to your needs, marked with vision for the digital age.",
              btn: "Get Started",
              img: "",
            },
            {
              title: "Bold moves",
              title2: "Tuned with Clarity",
              description:
                "Marked with measurable impact. Creativity and data, tuned to scale.",
              btn: "Get Started",
              img: "",
            },
          ],
        iconSection:[
            {
              titel: "Branding & Rebranding",
              text: "Building fresh identities and revitalizing existing brands to leave a lasting mark.",
              icon: StartUp02Icon,
            },
            {
              titel: "Web & App Development",
              text: "Future-ready platforms crafted with precision and vision.",
              icon: DocumentCodeIcon,
            },
            {
              titel: "Digital Marketing & Growth",
              text: "SEO, social, and performance strategies tuned for impact.",
              icon: PromotionIcon,
            },
            {
              titel: "AI & Automation Solutions",
              text: "Smart systems, chatbots, and workflows that tune efficiency",
              icon: SparklesIcon,
            },
          ],
        numberCard: [
            {
              title: "Years of experience",
              value: 10,
              description: " Dolore vero assumenda quia recusandae vitae voluptatem, aliquid ut repellat cumque consequatur ex? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis alias illo facilis ab nisi quae, ea esse? Dolore vero assumenda quia recu",
            },
            {
              title: "Happy Client",
              value: 326,
              description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis alias illo facilis ab nisi quae, ea esse?",
            },
            {
              title: "Fullfilled orders",
              value: 170,
              description: "Dolore vero assumenda quia recusandae vitae voluptatem, aliquid ut repellat cumque consequatur ex?",
            },
            {
              title: "Bussiness partnership",
              value: 13,
              description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis alias illo facilis ab nisi quae, ea esse? ",
            },
          ],
        ourTeam: {
          title: "Meet Our Team",
          description:
            "Our team is made up of passionate individuals who are dedicated to providing the best possible experience for our customers. and we are proud to have a diverse team that brings together a wide range of skills and expertise.",
            description2: "We are committed to providing the highest quality products and services, and we take pride in our ability to deliver on our promises. We are always looking for new ways to improve our products and services, and we are always open to feedback from our customers.",
        },
        testimonial:[
            {
              name: "Adv. Muhammed Ashique",
              designation: "CEO, ZCo Corp",
              text: "Working with Neptune Mark completely transformed our online presence. Their creative approach and performance marketing strategies helped us reach the right audience and boost our ROI significantly.",
              image: "/men.svg",
            },
            {
              name: "Aslam Chalil",
              designation: "Founder, Biriyani souk",
              text: "The Neptune Mark team is highly professional and innovative. From branding to digital campaigns, they delivered beyond expectations. Their strategies really work in the Kerala market.",
              image: "/men.svg",
            },
            {
              name: "Muhammed Shafeeque",
              designation: "CEO, TSSR Council",
              text: "We partnered with Neptune Mark Digital Creators to build the TSSR Council web app, and they delivered beyond expectations — a perfect mix of innovation and reliability.",
              image: "/men.svg",
            },
            {
              name: "Sneha Menon",
              designation: "Digital Marketing Specialist, GHI Corp",
              text: "Neptune Mark helped us build our brand identity and run successful campaigns. Their office near Markaz Knowledge City makes them easily accessible, and their customer support is excellent.",
              image: "/men.svg",
            },
            {
              name: "Mohammed Ashraf",
              designation: "Sales Manager, JKL Inc",
              text: "A truly dedicated digital marketing company! Neptune Mark’s expertise in performance marketing helped us increase sales and visibility within just a few months.",
              image: "/men.svg",
            },
          ]
      },
      this.services = {
        services: [
          {
            title: `Digital Platform Engineering`,
            description:
              "Building scalable, secure, and custom-fit technology to power your business growth.",
            services: ["Custom Web/App Development", "Enterprise Integrations", "Data Architecture & APIs", "Cloud & Hosting Consultation"],
            cta: "Portfolio",
          },
          {
            title: "Brand Identity & Strategy",
            description:
              "Crafting compelling visual and narrative identities that resonate and build lasting brand equity.",
            services: ["Logo & Visual Identity", "Brand Guidelines", "Tone of Voice Strategy", "Naming & Messaging"],
            cta: "Portfolio",
          },
          {
            title: "Digital Content Creation",
            description:
              "Producing high-impact visual assets optimized for maximum engagement and performance.",
            services: ["High-Converting Ad Creatives", "Video & Motion Graphics", "Illustration & Photography", "Creative Testing Frameworks"],
            cta: "Portfolio",
          },
          {
            title: "Performance Media Strategy",
            description:
              "Executing data-driven paid campaigns to deliver predictable, measurable returns on investment (ROI).",
            services: ["PPC & SEM Management", "Social Media Advertising", "Programmatic Buying", "A/B Testing & Optimization"],
            cta: "Portfolio",
          },
        ]
      }
    }
}

