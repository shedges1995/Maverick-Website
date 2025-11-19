// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  isCustom?: boolean;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent {
  mobileMenuOpen = false;
  isScrolled = false;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.onScroll.bind(this));
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.onScroll.bind(this));
    }
  }

  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
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
      bio: 'Hottie with a body',
      image: '👨‍💼'
    },
    {
      name: 'Micah Peacock',
      role: 'Partner',
      bio: 'Has a spotify presence',
      image: '👨‍💻'
    },
    {
      name: 'AJ Zepeda',
      role: 'Partner',
      bio: 'Exists',
      image: '👔'
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
}
