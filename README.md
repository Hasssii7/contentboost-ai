# ContentBoost AI - AI-Powered Dropshipping Content Platform

🚀 **Boost your dropshipping sales with AI-generated content and performance tracking**

ContentBoost AI is a comprehensive SaaS platform that helps dropshipping businesses create high-converting product descriptions, track content performance, and optimize sales through AI-powered insights.

## ✨ Features

- **AI Product Descriptions** - Generate compelling, SEO-optimized product descriptions
- **Content Performance Tracking** - Monitor which descriptions drive the most sales
- **Automated Content Optimization** - AI continuously optimizes content based on performance
- **Sales Acceleration** - Boost revenue by up to 300% with targeted content
- **Multi-Platform Content** - Optimized for Shopify, Amazon, eBay, Facebook, and more
- **Trend Analysis** - Stay ahead with AI-powered market insights

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Database**: Supabase (configured)
- **Deployment**: Vercel-ready

## 🚀 Quick Start

1. **Clone the repository**
   bash
   git clone <repository-url>
   cd contentboost-ai
   

2. **Install dependencies**
   bash
   npm install
   # or
   yarn install
   

3. **Set up environment variables**
   bash
   cp .env.example .env.local
   
   
   Fill in your environment variables in `.env.local`

4. **Run the development server**
   bash
   npm run dev
   # or
   yarn dev
   

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure


contentboost-ai/
├── app/
│   ├── api/
│   │   └── subscribe/
│   │       └── route.ts          # Email subscription API
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/
│   ├── Features.tsx              # Features section
│   └── Hero.tsx                  # Hero section with email signup
├── public/
├── .env.example                  # Environment variables template
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── package.json


## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key


### Database Setup (Supabase)

1. Create a new Supabase project
2. Create a `subscriptions` table:
   sql
   CREATE TABLE subscriptions (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     email VARCHAR(255) UNIQUE NOT NULL,
     plan VARCHAR(50) DEFAULT 'free-trial',
     subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     trial_ends_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() + INTERVAL '14 days',
     active BOOLEAN DEFAULT true
   );
   

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

bash
npm run build
npm run start


## 🎨 Customization

### Colors
Customize the color scheme in `tailwind.config.ts`:

typescript
colors: {
  primary: {
    500: '#3b82f6', // Your primary color
    600: '#2563eb',
  },
  // Add more colors...
}


### Content
Update the content in:
- `components/Hero.tsx` - Hero section
- `components/Features.tsx` - Features and benefits
- `app/page.tsx` - Pricing and footer

## 📊 Features Overview

### Email Subscription System
- Validates email addresses
- Handles different subscription plans
- Mock responses for demo purposes
- Error handling and loading states

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Modern glassmorphism effects
- Smooth animations

### SEO Optimized
- Meta tags and OpenGraph
- Structured data ready
- Fast loading times
- Semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email support@contentboost-ai.com or join our Discord community.

---

**Built with ❤️ for the dropshipping community**