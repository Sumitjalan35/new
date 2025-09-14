# AI Career Counsellor Web App

A modern, responsive web application built with React, Tailwind CSS, and Framer Motion that provides AI-powered career guidance for students and working professionals.

## Features

### 🏠 Landing Page
- Beautiful animated hero section with modern UI
- Call-to-action button to start career assessment
- Feature highlights and benefits
- Responsive design for all devices

### 📝 Profile Setup (Multi-step Questionnaire)
- **For Students**: Academic information, interests, skills, preferences
- **For Working Professionals**: Current status, career goals, skills assessment, work preferences
- Interactive card-style UI for multiple selections
- Progress bar and step navigation
- Form validation and data collection

### 📊 Dashboard
- Hamburger menu navigation
- Profile snapshot and quick stats
- Top career recommendations with match percentages
- Action plan with priority levels
- Skill gap analysis with visual progress bars
- Responsive sidebar for mobile and desktop

### 🎯 Career Explorer
- Detailed career role information
- Day-in-the-life descriptions
- Required skills and responsibilities
- Salary expectations and growth outlook
- Filtering and search capabilities
- Modal views for detailed information

### 🤖 AI Toolkit
- **Resume Reviewer**: AI-powered resume analysis and feedback
- **Interview Question Generator**: Personalized practice questions
- **Cover Letter Assistant**: Job-specific cover letter creation
- **Skill Assessment**: Comprehensive skills evaluation
- **Career Chat**: AI-powered career counseling chatbot
- **Networking Assistant**: Professional networking tips and templates

## Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useEffect)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-career-counsellor
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── pages/
│   ├── LandingPage.jsx          # Animated landing page
│   ├── ProfileSetup.jsx         # Multi-step questionnaire
│   ├── SummaryPage.jsx          # Profile summary and confirmation
│   ├── Dashboard.jsx            # Main dashboard with navigation
│   ├── CareerExplorer.jsx       # Career exploration and details
│   └── AIToolkit.jsx           # AI-powered tools and chat
├── App.jsx                      # Main app component with routing
├── main.jsx                     # Application entry point
└── index.css                    # Global styles and Tailwind imports
```

## Key Features Implementation

### Form Data Structure

**Student Profile:**
```javascript
{
  class_level: "12th Grade",
  academic_performance: "85%",
  stream: "science",
  interests: ["coding", "mathematics", "problem solving"],
  budget: "2-5 lakhs",
  location_preference: "Mumbai or Bangalore",
  competitive_exam_interest: true,
  career_type_preference: "private",
  technical_skills: ["Python", "HTML/CSS"],
  soft_skills: ["Leadership", "Team work"],
  additional_info: "Interested in AI and Machine Learning"
}
```

**Professional Profile:**
```javascript
{
  current_status: "employed",
  career_goals: "Advance to senior management role",
  skill_assessment: {
    "Technical Skills": "Advanced",
    "Communication": "Intermediate"
  },
  experience_gaps: "3-5 years",
  work_preferences: "Remote work, flexible hours",
  learning_development: "Learn cloud computing and AI",
  current_challenges: ["Skill Gap", "Career Growth"],
  target_applications: "Tech companies, startups"
}
```

### Design System

- **Colors**: Custom primary and secondary color palettes
- **Typography**: Clean, modern font stack
- **Components**: Reusable card, button, and input components
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design approach

### API Integration Ready

The application is structured to easily integrate with backend APIs:
- Form data is collected in the specified JSON format
- Console logging for data submission (ready for API calls)
- Mock data for career recommendations and AI responses
- Placeholder functions for backend integration

## Customization

### Adding New Form Fields
1. Update the form data structure in `ProfileSetup.jsx`
2. Add corresponding UI components in the appropriate step
3. Update the summary display in `SummaryPage.jsx`

### Modifying Career Data
1. Edit the `careerData` array in `CareerExplorer.jsx`
2. Update the mock data in `Dashboard.jsx` for recommendations

### Styling Changes
1. Modify the Tailwind configuration in `tailwind.config.js`
2. Update component styles using Tailwind classes
3. Add custom animations in the Framer Motion components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Future Enhancements

- [ ] Backend API integration
- [ ] User authentication and profiles
- [ ] Real-time AI chat functionality
- [ ] Advanced analytics and reporting
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] Accessibility improvements
- [ ] Performance optimizations