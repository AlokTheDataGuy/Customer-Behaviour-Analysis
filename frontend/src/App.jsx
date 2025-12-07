import React, { useState } from 'react';
import { FileText, Code, Database, BarChart3, ExternalLink, ChevronDown, ChevronUp, Github, ShoppingCart, Users, TrendingUp } from 'lucide-react';

export default function CustomerBehaviorDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showMethodology, setShowMethodology] = useState(false);

  // Replace these with your actual links
  const links = {
    powerbi: 'https://app.powerbi.com/reportEmbed?reportId=1f0d80ee-e6a2-4f4f-b7e3-a41efc132337&autoAuth=true&ctid=56c1d497-700b-49cf-8f8d-3dd6b20d522f&navContentPaneEnabled=false&filterPaneEnabled=true',
    report: 'https://drive.google.com/file/d/1zxKcQR9M6_wbfFhIUuLuvJ1LP5XsMNMb/view?usp=sharing',
    notebook: 'https://drive.google.com/drive/folders/1i6JFaGhFwGjvKpIlbPCopdjNn3og0PhW?usp=sharing',
    sql: 'https://drive.google.com/file/d/1xXqDcbW32aTKY0JS_Ze9KL_rv6igGNNA/view?usp=sharing',
    data: 'https://docs.google.com/spreadsheets/d/1sRif1_zi7oYSFyEE9I4vKpLprgjU5Cd4HZBebODvTNE/edit?usp=sharing',
    github: 'https://github.com/AlokTheDataGuy/Customer-Behaviour-Analysis'
  };

  const techStack = [
    { name: 'Python', icon: '🐍', color: 'bg-blue-100 text-blue-700' },
    { name: 'SQL', icon: '💾', color: 'bg-purple-100 text-purple-700' },
    { name: 'Power BI', icon: '📊', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Pandas', icon: '🐼', color: 'bg-pink-100 text-pink-700' },
    { name: 'DAX', icon: '📈', color: 'bg-orange-100 text-orange-700' },
    { name: 'MySQL', icon: '🗄️', color: 'bg-indigo-100 text-indigo-700' }
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Customer Segmentation',
      desc: 'New, Returning & Loyal customer analysis'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Revenue Analytics',
      desc: 'Deep dive by demographics & categories'
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'Subscription Impact',
      desc: 'Subscriber vs non-subscriber behavior'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Discount Analysis',
      desc: 'Category-wise discount dependency'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Seasonal Trends',
      desc: 'Season & category performance'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Product Insights',
      desc: 'Top-rated & best-selling products'
    }
  ];

  const stats = [
    { label: 'Total Customers', value: '15K' },
    { label: 'Avg Purchase', value: '$56.97' },
    { label: 'Avg Rating', value: '3.74' },
    { label: 'Top Category', value: 'Clothing' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-indigo-100">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Customer Behaviour & Revenue Insights
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Comprehensive Analytics Dashboard | Python, SQL & Power BI
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <a href={links.github} target="_blank" rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 rounded-full transition">
                <Github className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-indigo-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex-1 px-6 py-4 text-sm font-medium transition ${activeTab === 'dashboard'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:bg-gray-50'
                }`}>
              <BarChart3 className="w-5 h-5 inline mr-2" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`flex-1 px-6 py-4 text-sm font-medium transition ${activeTab === 'resources'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:bg-gray-50'
                }`}>
              <FileText className="w-5 h-5 inline mr-2" />
              Resources
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`flex-1 px-6 py-4 text-sm font-medium transition ${activeTab === 'about'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:bg-gray-50'
                }`}>
              <Code className="w-5 h-5 inline mr-2" />
              About Project
            </button>
          </div>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-700 px-6 py-4">
                <h2 className="text-xl font-bold text-white">Customer Behaviour Analysis Dashboard</h2>
                <p className="text-indigo-100 text-sm mt-1">
                  KPIs → Demographics → Subscriptions → Discounts → Seasonality → Customer Segments
                </p>
              </div>

               {/* Power BI Embed */}
              <div className="p-4 bg-gray-50">
                <div className="bg-white rounded-lg shadow-inner border-2 border-dashed border-gray-300">
                  <div className="w-full overflow-hidden">
                    <iframe
                      title="Customer Behaviour Analysis Dashboard"
                      src={links.powerbi}
                      frameBorder="0"
                      allowFullScreen={true}
                      className="w-full"
                      style={{
                        height: '56.25vw', // 16:9 aspect ratio (9/16 = 0.5625)
                        maxHeight: '630px', // Maximum height
                        minHeight: '400px'  // Minimum height for mobile
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Quick Links Below Dashboard */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-wrap gap-3">
                  <a href={links.powerbi} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm font-medium">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Dashboard
                  </a>
                  <a href={links.report} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
                    <FileText className="w-4 h-4 mr-2" />
                    View Report
                  </a>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Resources</h2>

                <div className="space-y-4">
                  {/* Report Link */}
                  <a href={links.report} target="_blank" rel="noopener noreferrer"
                    className="flex items-start p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition group">
                    <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition">
                      <FileText className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">📄 Project Report (PDF)</h3>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600" />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Complete documentation with EDA, SQL findings, and actionable recommendations
                      </p>
                      <span className="text-xs text-gray-400 mt-2 inline-block">LaTeX Report</span>
                    </div>
                  </a>

                  {/* Notebook Link */}
                  <a href={links.notebook} target="_blank" rel="noopener noreferrer"
                    className="flex items-start p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition group">
                    <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition">
                      <Code className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">💻 Python Notebook</h3>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600" />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Data cleaning, EDA, feature engineering, and customer segmentation analysis
                      </p>
                      <span className="text-xs text-gray-400 mt-2 inline-block">Jupyter Notebook</span>
                    </div>
                  </a>

                  {/* SQL Link */}
                  <a href={links.sql} target="_blank" rel="noopener noreferrer"
                    className="flex items-start p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition group">
                    <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition">
                      <Database className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">🗄️ SQL Analysis</h3>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600" />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Business queries with CTEs, window functions, and segmentation logic
                      </p>
                      <span className="text-xs text-gray-400 mt-2 inline-block">MySQL Scripts</span>
                    </div>
                  </a>

                  {/* Data Link */}
                  <a href={links.data} target="_blank" rel="noopener noreferrer"
                    className="flex items-start p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition group">
                    <div className="bg-indigo-100 p-3 rounded-lg group-hover:bg-indigo-200 transition">
                      <Database className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">📊 Dataset</h3>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600" />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Raw customer shopping data with 1,500 records and 18 features
                      </p>
                      <span className="text-xs text-gray-400 mt-2 inline-block">CSV Format</span>
                    </div>
                  </a>

                  {/* GitHub Link */}
                  <a href={links.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-start p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition group">
                    <div className="bg-gray-800 p-3 rounded-lg group-hover:bg-gray-900 transition">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">🔗 GitHub Repository</h3>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600" />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Complete source code, notebooks, SQL scripts, and Power BI file
                      </p>
                      <span className="text-xs text-gray-400 mt-2 inline-block">GitHub</span>
                    </div>
                  </a>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* About Tab */}
        {activeTab === 'about' && (
          <div className="space-y-6">
            {/* Project Overview */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A comprehensive end-to-end data analytics project analyzing customer shopping behavior 
                patterns across 15,000 customers. The project includes extensive exploratory data analysis (EDA) 
                using Python, SQL-driven business queries to extract actionable insights, and a fully interactive 
                Power BI dashboard for stakeholder-ready visualization. The analysis focuses on understanding 
                revenue drivers, customer segmentation, subscription impact, discount dependency, and product/category 
                performance to support strategic data-driven decisions.
              </p>

              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 mt-4">
                <p className="text-sm text-indigo-800">
                  <strong>Key Achievement:</strong> Analyzed <strong>15,000 </strong> customers and transactions 
                  to uncover that subscribers contribute <strong>55.98%</strong> of total revenue with an average spend of 
                  <strong> $478K</strong>, while Clothing drives <strong>46.85%</strong> of revenue. Loyal customers 
                  (10+ purchases) account for <strong>88.08%</strong> of revenue.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {techStack.map((tech, idx) => (
                  <div key={idx} className={`${tech.color} px-4 py-3 rounded-lg text-center font-medium`}>
                    <span className="text-2xl mr-2">{tech.icon}</span>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setShowMethodology(!showMethodology)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition">
                <h2 className="text-2xl font-bold text-gray-900">Methodology</h2>
                {showMethodology ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {showMethodology && (
                <div className="px-6 pb-6 space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">1. Data Collection & Cleaning</h3>
                    <p className="text-sm text-gray-600">
                      Collected transactional customer data (1,500 records, 18 features). Handled missing values 
                      in review ratings using category-wise median imputation. Standardized categorical variables 
                      and removed redundant features.
                    </p>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">2. Exploratory Data Analysis (EDA)</h3>
                    <p className="text-sm text-gray-600">
                      Performed comprehensive EDA using Python (Pandas, Matplotlib, Seaborn). Created age group 
                      bins, engineered purchase frequency features, and analyzed distribution patterns across 
                      demographics, categories, and behavior flags.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">3. SQL Business Analysis</h3>
                    <p className="text-sm text-gray-600">
                      Executed targeted SQL queries using CTEs, window functions, and CASE statements to answer 
                      key business questions: revenue by demographics, subscription impact, discount behavior, 
                      top products, customer segmentation (New/Returning/Loyal), and seasonal trends.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">4. Customer Segmentation</h3>
                    <p className="text-sm text-gray-600">
                      Segmented customers into New (0 previous purchases), Returning (1-9), and Loyal (10+) 
                      categories. Analyzed revenue contribution and Average Order Value (AOV) across segments 
                      to identify high-value customer profiles.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">5. Power BI Dashboard</h3>
                    <p className="text-sm text-gray-600">
                      Built an interactive dashboard with KPI cards, filters (subscription, gender, category, 
                      shipping), and multiple visualizations showing revenue/sales by category, age group, 
                      customer type, and seasonal trends. Implemented DAX measures for dynamic calculations.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Key Insights */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Insights</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Subscribers drive revenue:</strong> Subscribed customers spend an average of $478K 
                    and contribute 55.98% of total revenue, indicating strong value in subscription adoption.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Clothing dominates:</strong> The Clothing category generates 46.85% of total revenue, 
                    with Winter being the highest-revenue season for this category.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Discount dependency:</strong> Accessories show the highest discount dependency ratio 
                    at 47.94%, suggesting potential for margin improvement through refined discount strategies.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Loyal customers are key:</strong> Customers with 10+ previous purchases account for 
                    88.08% of revenue, highlighting the importance of retention programs.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Winter peak demand:</strong> Winter generates the highest revenue across categories, 
                    presenting opportunities for seasonal inventory optimization and targeted marketing.
                  </span>
                </li>
              </ul>
            </div>

            {/* Business Recommendations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Recommendations</h2>
              <div className="space-y-3">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-900 mb-2">1. Boost Subscription Adoption</h3>
                  <p className="text-sm text-gray-700">
                    Offer trial discounts and time-limited perks to convert non-subscribers. Prioritize marketing 
                    channels where subscribers are concentrated.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">2. Refine Discount Strategy</h3>
                  <p className="text-sm text-gray-700">
                    Reduce blanket discounts on high-dependency categories with low margins. A/B test targeted 
                    discounts on price-sensitive segments.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">3. Seasonal Inventory Planning</h3>
                  <p className="text-sm text-gray-700">
                    Increase stock of top-performing seasonal items (especially Clothing) prior to Winter peak. 
                    Reduce SKUs with consistently low sales.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">4. Customer Loyalty Program</h3>
                  <p className="text-sm text-gray-700">
                    Create micro-incentives to move Returning customers to Loyal status (e.g., rewards after 
                    3-5 purchases). Focus retention efforts on high-value segments.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">5. Shipping Optimization</h3>
                  <p className="text-sm text-gray-700">
                    If Express shipping correlates with higher spend, explore upsell messaging for faster 
                    shipping options at checkout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Customer Behaviour & Revenue Insights Analysis. Built by Alok Deep.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}