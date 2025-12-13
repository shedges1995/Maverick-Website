// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormsModule } from '@angular/forms';


interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  isCustom?: boolean;
}

interface StoryStep {
  title: string;
  description: string;
  icon: string;
  visible: boolean;
}


interface TeamMember {
  name: string;
  role: string;
  bio: string;
  blurb: string;
  showBio: boolean;
  image: string;
}

interface Review {
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styles: [
    `:host { display: block; }`
  ],
  styleUrls:['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppComponent {
  mobileMenuOpen = false;
  isScrolled = false;
  currentYear = 2025;
  contactForm = new FormData;
  thankyou = false;


  storySteps: StoryStep[] = [
    {
      title: 'The Problem',
      description: 'If you’re like most business owners, you’re stuck reacting instead of leading - unsure where your money’s really going, worried about taxes, and tired of compliance-only service that keeps you “barely legal” but never strategically strong. You feel stalled, disempowered, unseen.',
      icon: '💡',
      visible: false
    },
    {
      title: 'The Vision',
      description: 'That’s where we come in. We know how chaotic entrepreneurship can feel and how impossible good decisions seem without good data. We’re not just CPAs - we’re builders, operators, and problem-solvers who thrive on clarity and challenge convention when it’s holding clients back. We bring the precision of accounting together with the innovation of modern tech.',
      icon: '🎯',
      visible: false
    },
    {
      title: 'The Work',
      description: 'Our team leverages automation, AI, and intelligent systems so you can finally see what’s driving your business forward. <div style="float: left"><br>1. Schedule a consultation <br>2. Select your service package (Scout | Ranger | Maverick) <br>3. Regain your momentum - with clear, actionable financial insight.</div> <br><br>Ignore your numbers, and you’ll keep flying blind.',
      icon: '🚀',
      visible: false
    },
 
  ];

  reviews: Review[] = [
    {
      name: 'Sarah Chen',
      role: 'CFO',
      company: 'TechStart Inc',
      rating: 5,
      text: 'AcctPro transformed how we handle our finances. What used to take our team days now takes hours. The real-time dashboards are a game-changer.',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Roberts',
      role: 'Founder',
      company: 'GrowthLabs',
      rating: 5,
      text: 'Finally, accounting software that doesn\'t require a PhD to use. Clean interface, powerful features, and their support team is incredibly responsive.',
      avatar: '👨‍💼'
    },
    {
      name: 'Jennifer Martinez',
      role: 'Controller',
      company: 'Retail Solutions Co',
      rating: 5,
      text: 'The automation features alone have saved us 15+ hours per week. AcctPro pays for itself within the first month. Absolutely worth it.',
      avatar: '👩‍💻'
    },
    {
      name: 'David Park',
      role: 'Business Owner',
      company: 'Park Consulting',
      rating: 5,
      text: 'I\'ve tried every accounting platform out there. AcctPro is the only one that truly understands what modern businesses need. Five stars!',
      avatar: '👨'
    },
    {
      name: 'Emily Thompson',
      role: 'Finance Director',
      company: 'BlueSky Media',
      rating: 5,
      text: 'The forecasting tools have given us insights we never had before. We can now make data-driven decisions with confidence. Highly recommend!',
      avatar: '👩'
    },
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'Innovate Digital',
      rating: 5,
      text: 'Best investment we\'ve made for our business. The team collaboration features make working with our accountant seamless. Outstanding product.',
      avatar: '🧑‍💼'
    }
  ];

  aboutSections = {
    mission: { visible: false },
    founding: { visible: false },
    growth: { visible: false },
    today: { visible: false },
    stats: { visible: false }
  };

    ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.onScroll.bind(this));
      this.checkAboutVisibility();
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.onScroll.bind(this));
    }
  }

  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
    this.checkAboutVisibility();
  }



  checkAboutVisibility(): void {
    if (typeof window === 'undefined') return;

    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    const sections = ['mission', 'values', 'founding', 'growth', 'today', 'stats'];
    
    sections.forEach((sectionName) => {
      const element = document.querySelector(`[data-about-section="${sectionName}"]`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollTop;
        const elementVisible = (scrollTop + windowHeight) > elementTop + 150;
        
        if (elementVisible && !this.aboutSections[sectionName as keyof typeof this.aboutSections].visible) {
          this.aboutSections[sectionName as keyof typeof this.aboutSections].visible = true;
        }
      }
    });
  }
  
  

  plans: Plan[] = [
    {
      name: 'The Scout',
      price: '350',
      description: 'Ideal for businesses ready to get organized and gain financial visibility',
      features: [
        'We occupy the bookkeeping and accounting seat',
        'QuickBooks Online setup + chart-of-accounts build-out',
        'Monthly Double reporting (basic)',
        '1099 preparation and vendor maintenance',
        'Client portal with full financial access'
      ]
    },
    {
      name: 'The Ranger',
      price: '650',
      description: 'Perfect for companies outgrowing basic bookkeeping',
      features: [
        'Everything in The Scout',
        'Payroll admin via Gusto or QuickBooks Payroll',
        'Business and owner tax filings (Federal & State)',
        'Sales & Use Tax compliance and permit registration',
        'Franchise & Excise Tax returns',
        'Agency registration and correspondence (IRS, SOS, Comptroller, TWC)',
        'Monthly Loom video reviews'
      ],
      popular: true
    },
    {
      name: 'The Maverick',
      price: '1,500',
      isCustom:true,
      description: 'You get the sophistication of an in-house CFO without the overhead',
      features: [
        'Everything in the Ranger',
        'Deposit & expense management + banking structure oversight',
        'Tax Plan maintenance following TaxPlanIQ analysis',
        'Liaison to your attorneys, advisors, and banks',
        'Monthly strategic reviews with a Maverick partner'
      ]
    },
    // {
    //   name: 'CFO',
    //   price: '3,000',
    //   isCustom:true,
    //   description: 'For businesses with unique needs requiring tailored solutions',
    //   features: [
    //     'Add-ons such as multi-entity consolidation',
    //     'Advanced reporting', 
    //     'Compensation analysis',
    //     'Registered agent service', 
    //     'Benefits administration are also available (though package-specific).'
    //   ]
    // }
  ];

  team: TeamMember[] = [
       {
      name: 'AJ Zepeda',
      role: 'Partner',
      bio: "<p class='indent'>HEYY</p>",
        blurb:'Exists',
      showBio: false,
      image: 'assets/images/aj.jpg'
    },
    {
      name: 'Hunter Jackson, CPA',
      role: 'Tax Director',
      bio: 'Hunter Jackson grew up in Mississippi, where he learned two important truths early on: sweet tea solves most problems, and someone has to keep the books balanced. After graduating from Delta State University and earning his CPA, he set off for Austin—because what better place for a numbers guy than a city full of startups trying to make sense of their own spreadsheets? <br><br> <p class="indent">In Austin, Hunter dove into the tech world, first wrangling finances for a startup and then leveling up at another fast-moving company. Eventually, he decided the only logical next step was to build something of his own—so he founded Maverick, proving that accountants can be both fiscally responsible and slightly rebellious. </p><br><br> <p class="indent">His career has since taken him from Indianapolis to St. Louis and now New Orleans, where he enjoys good food, good music, and trying not to sweat through his shirts. And because he’s never met a skyline he didn’t want to live under, Hunter already has his eye on Denver—just in case Maverick needs a little mountain air.</p>',
      blurb:'No one ever said accounting had to be boring. I’m here to make sure it isn’t.',
      showBio: false,
      image: 'assets/images/hunter.jpg'
    },
    {
      name: 'Michael P. Cock',
      role: 'Partner',
      bio: 'I grew up in a family of educators, graduated summa cum laude from the University of Houston, then spent years touring as a musician and serving as a worship leader before eventually settling down, meeting my wife, and starting a family. When our kids came along, I transitioned out of ministry, earned my Series 7 and 66, and worked as a paraplanner for investment firms around DFW. <br><br> <p class="indent">We moved to Tyler to raise our kids near their grandparents, and I stepped into the world of estate-planning operations, learning the ins and outs of trusts, LLCs, and contract law. After the pandemic, I launched C-Suite - a back-office management shop built around modern, straightforward accounting, payroll, and tax support. That entrepreneurial streak eventually led to Maverick, formed in 2025 when C-Suite merged with Anthony Z Consulting and HJ Taxes to build a firm determined to ditch outdated methods and rethink how this work gets done.</p> <br><br><p class="indent">Outside the office, I’m usually on our land, at one of the kids’ events, on a motorcycle, playing guitar, or spending time with my wife. We live just outside Tyler with our three amazing kids, and at the end of the day, my long-term ambition is simple: I want to be a rancher.</p>',
        blurb:'I didn’t take a traditional path into accounting - and honestly, that’s probably why I enjoy it so much.',
      showBio: false,
      image: 'assets/images/hunter.jpg'
    }
 
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  scrollToElement(elementId: string): void {
    console.log("here")
    const element = document.getElementById(elementId);
    console.log('Scrolling to element:', elementId, element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  sendEmail (formData:any){
  console.log("form",formData);

  emailjs.send("mav_test","template_i870o43",
    formData,
    'fdo8F_xPtue8Wxvhp');
  console.log("sent");
  this.thankyou = true;
  this.scrollToElement('contact')

  }
}
