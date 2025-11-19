// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
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
      name: 'Starter',
      price: '29',
      description: 'Perfect for freelancers and solo entrepreneurs',
      features: [
        'Up to 50 transactions/month',
        'Basic reporting',
        'Mobile app access',
        'Email support',
        '1 user account'
      ]
    },
    {
      name: 'Professional',
      price: '79',
      description: 'Ideal for growing businesses',
      features: [
        'Unlimited transactions',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Up to 5 user accounts',
        'Custom invoicing',
        'Tax preparation tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '199',
      description: 'For established companies with complex needs',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security features',
        'Unlimited users',
        'White-label options',
        'On-premise deployment'
      ]
    }
  ];

  team: TeamMember[] = [
    {
      name: 'Marcus Chen',
      role: 'CEO & Founder',
      bio: '15+ years in fintech, former VP at Goldman Sachs',
      image: '👨‍💼'
    },
    {
      name: 'David Rodriguez',
      role: 'CTO',
      bio: 'Built scalable systems at Amazon and Stripe',
      image: '👨‍💻'
    },
    {
      name: 'James Mitchell',
      role: 'Head of Product',
      bio: 'Product lead with deep accounting expertise',
      image: '👔'
    },
    {
      name: 'Alex Turner',
      role: 'VP of Sales',
      bio: 'Grew revenue 10x at previous SaaS startup',
      image: '🎯'
    }
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}

// ============================================
// main.ts
// ============================================
/*
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: []
}).catch(err => console.error(err));
*/

// ============================================
// angular.json (key sections)
// ============================================
/*
{
  "projects": {
    "accounting-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}
*/

// ============================================
// styles.css (Tailwind setup)
// ============================================
/*
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}
*/

// ============================================
// tailwind.config.js
// ============================================
/*
module.exports = {
  content: [
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// */

// ============================================
// To set up this project:
// ============================================
/*
1. Create new Angular project:
   ng new accounting-app --standalone --style=css

2. Install Tailwind CSS:
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init

3. Configure Tailwind (use the config above)

4. Update styles.css with Tailwind directives

5. Add a hero background image to src/assets/hero-bg.jpg
   (Use an image of a modern office, business professional working,
   financial charts, or a sleek corporate environment)

6. Replace app.component.ts with the code above

7. Run the application:
   ng serve
*/