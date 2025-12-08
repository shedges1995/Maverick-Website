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
  styles: [`
    :host {
      display: block;
    }
  `],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppComponent {
  mobileMenuOpen = false;
  isScrolled = false;
  currentYear = 2025;
  contactForm = new FormData;
  thankyou = false;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.onScroll.bind(this));
      this.checkStoryVisibility();
    }
    this.currentYear = new Date().getFullYear();
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.onScroll.bind(this));
    }
  }

  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
    this.checkStoryVisibility();
  }

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


  checkStoryVisibility(): void {
    if (typeof window === 'undefined') return;

    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    this.storySteps.forEach((step, index) => {
      const element = document.querySelector(`[data-story-index="${index}"]`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollTop;
        const elementVisible = (scrollTop + windowHeight) > elementTop + 100;
        
        if (elementVisible && !step.visible) {
          setTimeout(() => {
            step.visible = true;
          }, index * 200);
        }
      }
    });
  }
  
  chartData = [40, 60, 45, 75, 55, 85, 70, 90, 65, 95, 80, 100];
  
  features = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Process thousands of transactions in seconds with our optimized engine' },
    { icon: '🛡️', title: 'Bank-Grade Security', desc: 'Military-grade encryption and SOC 2 compliance keep your data safe' },
    { icon: '📊', title: 'Real-Time Analytics', desc: 'Make data-driven decisions with live dashboards and AI insights' },
    { icon: '👥', title: 'Team Collaboration', desc: 'Work seamlessly with your team, accountant, and stakeholders' },
    { icon: '🏆', title: 'Award Winning', desc: 'Recognized as the #1 accounting platform by industry experts' },
    { icon: '📈', title: 'Smart Forecasting', desc: 'Predict cash flow and plan growth with AI-powered projections' }
  ];

  plans: Plan[] = [
    {
      name: 'The Scout',
      price: '29',
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
      price: '79',
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
      price: '199',
      description: 'You get the sophistication of an in-house CFO without the overhead',
      features: [
        'Everything in the Ranger',
        'Deposit & expense management + banking structure oversight',
        'Tax Plan maintenance following TaxPlanIQ analysis',
        'Liaison to your attorneys, advisors, and banks',
        'Monthly strategic reviews with a Maverick partner'
      ]
    },
    {
      name: 'Custom',
      price: '?',
      isCustom:true,
      description: 'For businesses with unique needs requiring tailored solutions',
      features: [
        'Add-ons such as multi-entity consolidation',
        'Advanced reporting', 
        'Compensation analysis',
        'Registered agent service', 
        'Benefits administration are also available (though package-specific).'
      ]
    }
  ];

  team: TeamMember[] = [
    {
      name: 'Hunter Jackson, CPA',
      role: 'Partner, Tax Director',
      bio: 'Actual Accountant',
      image: 'assets/images/hunter.jpg'
    },
    {
      name: 'Michael P. Cock',
      role: 'Partner',
      bio: 'Has a spotify presence',
      image: 'assets/images/hunter.jpg'
    },
    {
      name: 'AJ Lastname',
      role: 'Partner',
      bio: 'Exists',
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

  // emailjs.send("mav_test","template_i870o43",
  //   formData,
  //   'fdo8F_xPtue8Wxvhp');
  console.log("sent");
  this.thankyou = true;

  }
}
