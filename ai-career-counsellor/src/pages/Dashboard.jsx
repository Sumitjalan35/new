import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, X, User, Brain, Target, TrendingUp, BookOpen, 
  MessageCircle, FileText, Users, Award, Calendar,
  ChevronRight, Star, BarChart3, Lightbulb
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'career-explorer', label: 'Career Explorer', icon: Target },
    { id: 'ai-toolkit', label: 'AI Toolkit', icon: Brain }
  ];

  const mockCareerRecommendations = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Companies',
      match: 95,
      salary: '₹8-15 LPA',
      description: 'Perfect match based on your technical skills and interests',
      skills: ['Python', 'JavaScript', 'Problem Solving'],
      growth: '+15% job growth'
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'AI/ML Companies',
      match: 88,
      salary: '₹10-18 LPA',
      description: 'Strong match for your analytical skills and interest in AI',
      skills: ['Python', 'Machine Learning', 'Data Analysis'],
      growth: '+25% job growth'
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'Startups & Tech',
      match: 82,
      salary: '₹12-20 LPA',
      description: 'Good match for your leadership and communication skills',
      skills: ['Leadership', 'Communication', 'Problem Solving'],
      growth: '+20% job growth'
    }
  ];

  const mockActionPlan = [
    {
      id: 1,
      title: 'Complete Python Certification',
      description: 'Enroll in a comprehensive Python programming course',
      deadline: 'Next 3 months',
      priority: 'High',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Build Portfolio Projects',
      description: 'Create 3-5 projects showcasing your technical skills',
      deadline: 'Next 2 months',
      priority: 'High',
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'Network with Industry Professionals',
      description: 'Attend tech meetups and connect on LinkedIn',
      deadline: 'Ongoing',
      priority: 'Medium',
      status: 'pending'
    }
  ];

  const mockSkillGaps = [
    { skill: 'React.js', current: 3, target: 5, priority: 'High' },
    { skill: 'Machine Learning', current: 2, target: 4, priority: 'High' },
    { skill: 'System Design', current: 2, target: 4, priority: 'Medium' },
    { skill: 'Cloud Computing', current: 1, target: 3, priority: 'Medium' }
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white"
      >
        <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
        <p className="text-primary-100 text-lg">
          Here's your personalized career dashboard with AI-powered insights and recommendations.
        </p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Career Matches', value: '12', icon: Target, color: 'text-blue-600' },
          { label: 'Skills to Develop', value: '8', icon: TrendingUp, color: 'text-green-600' },
          { label: 'Action Items', value: '5', icon: Calendar, color: 'text-orange-600' },
          { label: 'AI Insights', value: '24', icon: Brain, color: 'text-purple-600' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card text-center"
          >
            <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3 ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-secondary-800 mb-1">{stat.value}</div>
            <div className="text-sm text-secondary-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Career Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-secondary-800">Top Career Recommendations</h2>
          <button
            onClick={() => setActiveSection('career-explorer')}
            className="text-primary-600 hover:text-primary-700 flex items-center space-x-1"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4">
          {mockCareerRecommendations.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="border border-secondary-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-secondary-800">{job.title}</h3>
                  <p className="text-secondary-600">{job.company}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-green-600">{job.match}% Match</div>
                  <div className="text-sm text-secondary-600">{job.salary}</div>
                </div>
              </div>
              <p className="text-secondary-600 mb-3">{job.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-green-600 font-medium">{job.growth}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Action Plan */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card"
        >
          <h2 className="text-xl font-bold text-secondary-800 mb-4">Action Plan</h2>
          <div className="space-y-3">
            {mockActionPlan.map((item, index) => (
              <div key={item.id} className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  item.status === 'completed' ? 'bg-green-500' :
                  item.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-300'
                }`} />
                <div className="flex-1">
                  <h4 className="font-medium text-secondary-800">{item.title}</h4>
                  <p className="text-sm text-secondary-600">{item.description}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-secondary-500">{item.deadline}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      item.priority === 'High' ? 'bg-red-100 text-red-700' :
                      item.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {item.priority}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="card"
        >
          <h2 className="text-xl font-bold text-secondary-800 mb-4">Skill Gap Analysis</h2>
          <div className="space-y-4">
            {mockSkillGaps.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-secondary-700">{skill.skill}</span>
                  <span className="text-xs text-secondary-500">{skill.current}/5 → {skill.target}/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(skill.current / 5) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-secondary-500">Current</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    skill.priority === 'High' ? 'bg-red-100 text-red-700' :
                    skill.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {skill.priority} Priority
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderCareerExplorer = () => (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-secondary-800 mb-4">Career Explorer</h1>
        <p className="text-lg text-secondary-600">
          Explore detailed career paths and opportunities tailored for you
        </p>
      </motion.div>

      <div className="grid gap-6">
        {mockCareerRecommendations.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-secondary-800 mb-2">{job.title}</h2>
                <p className="text-secondary-600 text-lg">{job.company}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-sm font-medium text-green-600">{job.match}% Match</span>
                  <span className="text-sm text-secondary-600">{job.salary}</span>
                  <span className="text-sm text-green-600">{job.growth}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(job.match / 20) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button className="btn-primary">Learn More</button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-secondary-800 mb-3">Role Description</h3>
                <p className="text-secondary-600 text-sm">
                  {job.description} This role involves working with cutting-edge technologies 
                  and collaborating with cross-functional teams to deliver innovative solutions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary-800 mb-3">Day in the Life</h3>
                <ul className="text-secondary-600 text-sm space-y-1">
                  <li>• Morning standup meetings</li>
                  <li>• Code development and review</li>
                  <li>• Team collaboration sessions</li>
                  <li>• Problem-solving and debugging</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-secondary-800 mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderAIToolkit = () => (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-secondary-800 mb-4">AI Toolkit</h1>
        <p className="text-lg text-secondary-600">
          Access powerful AI-powered tools to accelerate your career growth
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Resume Reviewer',
            description: 'Get AI-powered feedback on your resume with specific improvement suggestions',
            icon: FileText,
            color: 'bg-blue-100 text-blue-600'
          },
          {
            title: 'Interview Question Generator',
            description: 'Practice with personalized interview questions based on your target role',
            icon: MessageCircle,
            color: 'bg-green-100 text-green-600'
          },
          {
            title: 'Cover Letter Assistant',
            description: 'Create compelling cover letters tailored to specific job applications',
            icon: BookOpen,
            color: 'bg-purple-100 text-purple-600'
          },
          {
            title: 'Skill Assessment',
            description: 'Take comprehensive skill assessments to identify strengths and gaps',
            icon: Award,
            color: 'bg-orange-100 text-orange-600'
          },
          {
            title: 'Career Chat',
            description: 'Chat with our AI career counselor for personalized advice and guidance',
            icon: Brain,
            color: 'bg-pink-100 text-pink-600'
          },
          {
            title: 'Networking Assistant',
            description: 'Get tips and templates for professional networking and LinkedIn optimization',
            icon: Users,
            color: 'bg-indigo-100 text-indigo-600'
          }
        ].map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="card cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-lg ${tool.color} flex items-center justify-center mb-4`}>
              <tool.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-800 mb-2">{tool.title}</h3>
            <p className="text-secondary-600 text-sm mb-4">{tool.description}</p>
            <button className="btn-primary w-full">Get Started</button>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'career-explorer':
        return renderCareerExplorer();
      case 'ai-toolkit':
        return renderAIToolkit();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-secondary-800">CareerAI</h1>
        <div className="w-8" />
      </div>

      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 lg:hidden"
              >
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-secondary-800">CareerAI</h2>
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <nav className="p-4">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg mb-2 transition-colors ${
                        activeSection === item.id
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-secondary-600 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 bg-white shadow-sm min-h-screen">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-secondary-800">CareerAI</h2>
          </div>
          <nav className="p-4">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg mb-2 transition-colors ${
                  activeSection === item.id
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-secondary-600 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="p-6 lg:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
