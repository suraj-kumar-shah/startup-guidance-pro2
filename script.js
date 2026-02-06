// ===== CHATBOT KNOWLEDGE BASE =====
const chatbotKnowledge = {
    greetings: [
        "Hello! 👋 I'm your AI startup assistant. How can I help you today?",
        "Hi there! Ready to talk about your startup journey?",
        "Welcome! I'm here to help you with startup advice and guidance.",
        "Hey! Excited to help you with your entrepreneurial journey!"
    ],
    
    startupDefinition: `A **startup** is a young company founded by entrepreneurs to develop a unique product or service and bring it to market.

**Key characteristics:**
• High growth potential
• Innovative business model
• Scalable solution
• Usually technology-driven
• Risk-taking nature

**Types of startups:**
🚀 **Scalable Startups** - Aim for rapid growth
💡 **Lifestyle Startups** - Support founder's lifestyle
📱 **Buyable Startups** - Built to be acquired
🧪 **Social Startups** - Focus on social impact

What aspect of startups would you like to explore?`,

    ideas: {
        categories: [
            {
                name: "SaaS (Software as a Service)",
                ideas: [
                    "AI-powered project management tool",
                    "Automated social media scheduling platform",
                    "Remote team collaboration software",
                    "Customer support automation tool"
                ]
            },
            {
                name: "E-commerce & D2C",
                ideas: [
                    "Subscription box for niche products",
                    "Eco-friendly products marketplace",
                    "Personalized product recommendation engine",
                    "Social commerce platform"
                ]
            },
            {
                name: "Health & Wellness Tech",
                ideas: [
                    "Mental wellness tracking app",
                    "Personalized fitness nutrition planner",
                    "Telemedicine platform for specialists",
                    "AI health assistant"
                ]
            },
            {
                name: "Education Tech",
                ideas: [
                    "Interactive online learning platform",
                    "Skill-based micro-learning app",
                    "Career mentorship marketplace",
                    "AI-powered tutoring system"
                ]
            },
            {
                name: "Sustainability & Green Tech",
                ideas: [
                    "Carbon footprint tracking app",
                    "Sustainable product marketplace",
                    "Renewable energy monitoring system",
                    "Waste reduction platform"
                ]
            }
        ],
        
        validation: `**Before pursuing any idea, validate it with:**

✅ **Problem Validation:**
• Is this a real problem people face?
• Are people actively seeking solutions?
• Would they pay for a solution?

✅ **Market Validation:**
• Total Addressable Market (TAM) size
• Competitor analysis
• Market growth trends

✅ **Solution Validation:**
• Build a Minimum Viable Product (MVP)
• Get user feedback early
• Test pricing models

**Need help validating a specific idea?**`
    },

    funding: {
        stages: `**Startup Funding Stages:**

1. **Pre-Seed ($10k - $250k)**
   • Personal savings
   • Friends & family
   • Bootstrapping

2. **Seed Round ($250k - $2M)**
   • Angel investors
   • Early-stage VCs
   • Accelerators

3. **Series A ($2M - $15M)**
   • Venture capital
   • Growth metrics focus
   • Product-market fit proven

4. **Series B+ ($15M+)**
   • Scale operations
   • Market expansion
   • Team growth

**Alternative Funding:**
• Revenue-based financing
• Crowdfunding
• Government grants
• Corporate partnerships`,

        pitch: `**Perfect Pitch Deck Structure:**

1. **Problem** (1 slide) - What pain point?
2. **Solution** (1 slide) - Your product
3. **Market Size** (1 slide) - TAM/SAM/SOM
4. **Business Model** (1 slide) - How you make money
5. **Traction** (1 slide) - Current progress
6. **Competition** (1 slide) - Competitive landscape
7. **Team** (1 slide) - Why your team?
8. **Funding Ask** (1 slide) - How much & for what?`
    },

    mvp: `**Building Your MVP (Minimum Viable Product):**

🎯 **Focus on ONE core problem**
Build only features that solve your main user pain point.

🔧 **Essential MVP Components:**
1. Landing page with waitlist
2. Core functionality (1-2 features max)
3. User feedback collection system
4. Basic analytics

⏱️ **Timeline: 4-8 weeks max**
Don't over-engineer. Launch, learn, iterate.

📊 **MVP Success Metrics:**
• User sign-ups
• Feature usage
• Customer feedback
• Retention rate

**Ready to build your MVP?**`,

    resources: {
        tools: [
            "**Idea Validation:** Google Trends, Reddit, Quora",
            "**Market Research:** SimilarWeb, Statista, CB Insights",
            "**Prototyping:** Figma, Sketch, Adobe XD",
            "**Development:** GitHub, GitLab, VS Code",
            "**Analytics:** Google Analytics, Mixpanel, Hotjar",
            "**Communication:** Slack, Discord, Zoom"
        ],
        
        templates: [
            "Business Plan Template",
            "Pitch Deck Template",
            "Financial Model Template",
            "User Persona Template",
            "Product Roadmap Template"
        ],
        
        communities: [
            "Indie Hackers",
            "Product Hunt",
            "Hacker News",
            "Startup School by Y Combinator",
            "Local startup meetups"
        ]
    },

    commonQuestions: {
        "how to start": `**Step-by-Step Startup Launch Guide:**

1. **Idea Validation** (Week 1-2)
   • Research market
   • Talk to potential users
   • Identify competition

2. **MVP Development** (Week 3-8)
   • Build core features
   • Test with early users
   • Collect feedback

3. **Launch Preparation** (Week 9-10)
   • Create landing page
   • Build email list
   • Plan launch strategy

4. **Launch & Learn** (Week 11-12)
   • Soft launch to small group
   • Gather data
   • Iterate based on feedback

Need help with any specific step?`,
        
        "team building": `**Building Your Startup Team:**

👥 **Early Team Roles:**
1. **Technical Co-founder** - Builds the product
2. **Business Co-founder** - Handles operations
3. **Designer** - Creates user experience

🔍 **Hiring Tips:**
• Look for complementary skills
• Test with small projects first
• Check cultural fit
• Offer equity wisely

💰 **Compensation Structure:**
• Cash + Equity mix
• Performance bonuses
• Clear vesting schedule`,
        
        "marketing": `**Startup Marketing Strategy:**

🚀 **Pre-Launch:**
• Build email list
• Create content
• Engage on social media
• PR outreach

📱 **Post-Launch:**
• Content marketing
• Social media campaigns
• Email marketing
• Partnerships
• Paid advertising (carefully!)`
    }
};

// ===== ENHANCED RESPONSE SYSTEM =====
function getEnhancedAIResponse(userMessage) {
    const message = userMessage.toLowerCase().trim();
    
    // Greetings
    if (message.match(/\b(hi|hello|hey|greetings|good morning|good afternoon|good evening)\b/)) {
        const randomGreeting = chatbotKnowledge.greetings[
            Math.floor(Math.random() * chatbotKnowledge.greetings.length)
        ];
        return randomGreeting;
    }
    
    // Startup definition
    if (message.includes('what is startup') || message.includes('define startup') || 
        message.includes('startup meaning') || message.includes('what are startups')) {
        return chatbotKnowledge.startupDefinition;
    }
    
    // Ideas
    if (message.includes('idea') || message.includes('ideas') || message.includes('business idea') || 
        message.includes('startup idea') || message.includes('what should i build') || 
        message.includes('i want some idea')) {
        
        // Random category
        const category = chatbotKnowledge.ideas.categories[
            Math.floor(Math.random() * chatbotKnowledge.ideas.categories.length)
        ];
        
        // Random idea from that category
        const idea = category.ideas[
            Math.floor(Math.random() * category.ideas.length)
        ];
        
        return `💡 **${category.name} Idea:**\n\n${idea}\n\n${chatbotKnowledge.ideas.validation}`;
    }
    
    // Funding
    if (message.includes('funding') || message.includes('money') || message.includes('invest') || 
        message.includes('raise') || message.includes('capital') || message.includes('vc')) {
        
        if (message.includes('pitch') || message.includes('deck') || message.includes('present')) {
            return `📊 **Pitch Deck Guide:**\n\n${chatbotKnowledge.funding.pitch}`;
        }
        
        return `💰 **Funding Guide:**\n\n${chatbotKnowledge.funding.stages}`;
    }
    
    // MVP
    if (message.includes('mvp') || message.includes('minimum viable product') || 
        message.includes('prototype') || message.includes('build') || message.includes('develop')) {
        return chatbotKnowledge.mvp;
    }
    
    // Resources
    if (message.includes('tool') || message.includes('resource') || message.includes('help') || 
        message.includes('where to start') || message.includes('how to start')) {
        
        if (message.includes('how to start') || message.includes('begin') || message.includes('first step')) {
            return `🚀 **Getting Started:**\n\n${chatbotKnowledge.commonQuestions['how to start']}`;
        }
        
        return `🛠️ **Startup Resources:**\n\n**Tools:**\n${chatbotKnowledge.resources.tools.join('\n')}\n\n**Templates:**\n${chatbotKnowledge.resources.templates.join('\n')}\n\n**Communities:**\n${chatbotKnowledge.resources.communities.join('\n')}`;
    }
    
    // Team building
    if (message.includes('team') || message.includes('hire') || message.includes('cofounder') || 
        message.includes('employee') || message.includes('staff')) {
        return `👥 **Team Building:**\n\n${chatbotKnowledge.commonQuestions['team building']}`;
    }
    
    // Marketing
    if (message.includes('market') || message.includes('promote') || message.includes('customer') || 
        message.includes('user') || message.includes('growth')) {
        return `📈 **Marketing Strategy:**\n\n${chatbotKnowledge.commonQuestions['marketing']}`;
    }
    
    // Legal
    if (message.includes('legal') || message.includes('law') || message.includes('llc') || 
        message.includes('incorporate') || message.includes('company')) {
        return `⚖️ **Legal Considerations:**\n\n1. **Business Structure:** LLC vs Corporation\n2. **Intellectual Property:** Trademarks, patents\n3. **Contracts:** Founder agreements, NDAs\n4. **Compliance:** Tax, employment laws\n\n💡 **Tip:** Consult with a startup lawyer for specifics.`;
    }
    
    // Product development
    if (message.includes('product') || message.includes('feature') || message.includes('design') || 
        message.includes('ui') || message.includes('ux')) {
        return `🎨 **Product Development:**\n\n1. **User Research:** Understand your users\n2. **Wireframing:** Sketch your product\n3. **Prototyping:** Build interactive mockups\n4. **Development:** Agile methodology\n5. **Testing:** User testing & feedback\n6. **Iteration:** Continuous improvement`;
    }
    
    // Revenue models
    if (message.includes('revenue') || message.includes('money') || message.includes('profit') || 
        message.includes('business model') || message.includes('monetize')) {
        return `💰 **Revenue Models for Startups:**\n\n• **Subscription** (SaaS)\n• **Transaction fees** (Marketplaces)\n• **Commission** (Services)\n• **Advertising** (Content platforms)\n• **Freemium** (Free + paid features)\n• **Licensing** (Software/IP)\n• **Direct sales** (E-commerce)\n\nWhich model fits your startup?`;
    }
    
    // Competition
    if (message.includes('competition') || message.includes('competitor') || 
        message.includes('competitive')) {
        return `🏆 **Competitive Analysis:**\n\n1. **Identify competitors** (direct/indirect)\n2. **Analyze their strengths/weaknesses**\n3. **Find your unique advantage**\n4. **Differentiate your offering**\n5. **Monitor their moves**\n\nRemember: Competition validates the market!`;
    }
    
    // Thanks
    if (message.includes('thank') || message.includes('thanks') || message.includes('appreciate')) {
        return `You're welcome! 😊 If you have more questions about startups, funding, or growth strategies, I'm here to help. Good luck with your entrepreneurial journey! 🚀`;
    }
    
    // Default response with suggestions
    const suggestions = [
        "💰 Ask about startup funding options",
        "💡 Get startup idea suggestions",
        "🛠️ Learn about building an MVP",
        "👥 Get team building advice",
        "📈 Discuss marketing strategies",
        "⚖️ Learn about legal considerations"
    ];
    
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    
    return `I'm your AI startup assistant! I can help you with:\n\n${suggestions.join('\n')}\n\n${randomSuggestion}?`;
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize all components
    initPreloader();
    initDarkMode();
    initMobileMenu();
    initNavigation();
    initEnhancedChatbot();
    initCounters();
    initAnimations();
    initBackToTop();
    initNewsletter();
    initParticles();
    initTooltips();
    initBookmarks();
}

// ===== PRELOADER =====
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    
    // Hide preloader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });
}

// ===== DARK MODE =====
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme or prefered scheme
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches);
    
    if (isDark) {
        document.body.classList.add('dark-mode');
        updateDarkModeIcon(true);
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        // Save preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        
        // Update icon
        updateDarkModeIcon(isDarkMode);
        
        // Show notification
        showNotification(isDarkMode ? 'Dark mode enabled' : 'Light mode enabled', 'info');
    });
    
    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            document.body.classList.toggle('dark-mode', e.matches);
            updateDarkModeIcon(e.matches);
        }
    });
}

function updateDarkModeIcon(isDark) {
    const icon = document.querySelector('#darkModeToggle i');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
}

// ===== NAVIGATION =====
function initNavigation() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip # links
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                // Close mobile menu if open
                document.querySelector('.nav-links').classList.remove('active');
                document.querySelector('.mobile-menu').classList.remove('active');
                
                // Smooth scroll
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(href);
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavOnScroll);
}

function updateActiveNavLink(href) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`.nav-link[href="${href}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ===== ENHANCED CHATBOT =====
function initEnhancedChatbot() {
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatTrigger = document.getElementById('chatTrigger');
    const openChatBtn = document.getElementById('openChatBtn');
    const heroChatBtn = document.getElementById('heroChatBtn');
    const minimizeChat = document.getElementById('minimizeChat');
    const closeChat = document.getElementById('closeChat');
    const chatInput = document.getElementById('chatInput');
    const sendMessage = document.getElementById('sendMessage');
    const voiceInput = document.getElementById('voiceInput');
    const chatMessages = document.getElementById('chatMessages');
    const quickQuestions = document.querySelectorAll('.quick-question');
    
    let isChatOpen = false;
    let isMinimized = false;
    let recognition = null;
    let conversationHistory = [];
    
    // Initialize chat with welcome message
    function initializeChat() {
        if (!localStorage.getItem('chatInitialized')) {
            setTimeout(() => {
                addMessage("👋 Hello! I'm your AI startup assistant. I can help you with funding, ideas, MVP development, team building, and more!", 'bot');
                localStorage.setItem('chatInitialized', 'true');
            }, 1000);
        }
    }
    
    // Toggle chatbot visibility
    function toggleChatbot() {
        isChatOpen = !isChatOpen;
        
        if (isChatOpen) {
            chatbotContainer.classList.add('active');
            chatInput.focus();
            initializeChat();
        } else {
            chatbotContainer.classList.remove('active');
        }
        
        updateChatNotification(false);
    }
    
    // Minimize chatbot
    function minimizeChatbot() {
        isMinimized = !isMinimized;
        chatbotContainer.classList.toggle('minimized', isMinimized);
        
        if (isMinimized) {
            minimizeChat.innerHTML = '<i class="fas fa-expand"></i>';
        } else {
            minimizeChat.innerHTML = '<i class="fas fa-minus"></i>';
            chatInput.focus();
        }
    }
    
    // Close chatbot
    function closeChatbot() {
        isChatOpen = false;
        chatbotContainer.classList.remove('active');
        chatbotContainer.classList.remove('minimized');
        isMinimized = false;
    }
    
    // Enhanced addMessage function with formatting
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        // Format text with basic markdown
        let formattedText = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/\•/g, '•')
            .replace(/\✅/g, '✅')
            .replace(/\🚀/g, '🚀')
            .replace(/\💡/g, '💡')
            .replace(/\💰/g, '💰')
            .replace(/\🎯/g, '🎯')
            .replace(/\🛠️/g, '🛠️')
            .replace(/\📊/g, '📊');
        
        messageDiv.innerHTML = formattedText;
        
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Add to conversation history
        conversationHistory.push({
            sender: sender,
            text: text,
            timestamp: new Date().toISOString()
        });
        
        // Limit history to 50 messages
        if (conversationHistory.length > 50) {
            conversationHistory.shift();
        }
        
        // Save conversation to localStorage
        localStorage.setItem('chatHistory', JSON.stringify(conversationHistory));
        
        // Show typing indicator for bot messages
        if (sender === 'user') {
            showTypingIndicator();
        }
    }
    
    // Show typing indicator
    function showTypingIndicator() {
        removeTypingIndicator();
        
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot typing';
        typingDiv.innerHTML = `
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Remove typing indicator
    function removeTypingIndicator() {
        const typingIndicator = document.querySelector('.typing');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    // Send message with enhanced AI
    function sendChatMessage() {
        const message = chatInput.value.trim();
        
        if (message) {
            addMessage(message, 'user');
            chatInput.value = '';
            
            // Simulate AI thinking with random delay
            const thinkingTime = 500 + Math.random() * 1000;
            
            setTimeout(() => {
                const aiResponse = getEnhancedAIResponse(message);
                removeTypingIndicator();
                addMessage(aiResponse, 'bot');
            }, thinkingTime);
        }
    }
    
    // Quick question buttons
    quickQuestions.forEach(button => {
        button.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            addMessage(question, 'user');
            
            setTimeout(() => {
                const aiResponse = getEnhancedAIResponse(question);
                addMessage(aiResponse, 'bot');
            }, 1000);
        });
    });
    
    // Voice input setup
    function initVoiceInput() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';
            
            recognition.onstart = function() {
                showNotification('🎤 Listening... Speak now', 'info');
                voiceInput.classList.add('listening');
            };
            
            recognition.onresult = function(event) {
                const transcript = event.results[0][0].transcript;
                chatInput.value = transcript;
                voiceInput.classList.remove('listening');
                sendChatMessage();
            };
            
            recognition.onerror = function(event) {
                console.error('Speech recognition error:', event.error);
                voiceInput.classList.remove('listening');
                showNotification('Voice input failed. Please try again.', 'error');
            };
            
            recognition.onend = function() {
                voiceInput.classList.remove('listening');
            };
        }
    }
    
    // Update chat notification
    function updateChatNotification(show) {
        const notification = document.querySelector('.chat-notification');
        
        if (show) {
            notification.style.display = 'flex';
            notification.textContent = '1';
            notification.classList.add('pulse');
        } else {
            notification.style.display = 'none';
            notification.classList.remove('pulse');
        }
    }
    
    // Load conversation history
    function loadConversationHistory() {
        const savedHistory = localStorage.getItem('chatHistory');
        if (savedHistory) {
            conversationHistory = JSON.parse(savedHistory);
            
            // Display last 10 messages
            const recentMessages = conversationHistory.slice(-10);
            recentMessages.forEach(msg => {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${msg.sender}`;
                messageDiv.textContent = msg.text;
                chatMessages.appendChild(messageDiv);
            });
            
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }
    
    // Clear chat history
    function clearChatHistory() {
        conversationHistory = [];
        localStorage.removeItem('chatHistory');
        chatMessages.innerHTML = '';
        addMessage("👋 Hi! I'm your AI startup assistant. How can I help you today?", 'bot');
    }
    
    // Add chat commands
    function handleChatCommands(message) {
        const cmd = message.toLowerCase().trim();
        
        if (cmd === '/clear' || cmd === '/reset') {
            clearChatHistory();
            return true;
        }
        
        if (cmd === '/help' || cmd === '/commands') {
            addMessage("**Available Commands:**\n• /clear - Reset conversation\n• /help - Show this help\n• /ideas - Get startup ideas\n• /funding - Funding guide\n• /mvp - MVP building guide\n• /team - Team building advice", 'bot');
            return true;
        }
        
        if (cmd === '/ideas') {
            addMessage(chatbotKnowledge.ideas.categories[0].ideas.join('\n'), 'bot');
            return true;
        }
        
        if (cmd === '/funding') {
            addMessage(chatbotKnowledge.funding.stages, 'bot');
            return true;
        }
        
        return false;
    }
    
    // Event listeners
    chatTrigger.addEventListener('click', toggleChatbot);
    openChatBtn?.addEventListener('click', toggleChatbot);
    heroChatBtn?.addEventListener('click', toggleChatbot);
    minimizeChat.addEventListener('click', minimizeChatbot);
    closeChat.addEventListener('click', closeChatbot);
    
    sendMessage.addEventListener('click', sendChatMessage);
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
    
    voiceInput.addEventListener('click', function() {
        if (recognition) {
            recognition.start();
        } else {
            showNotification('Voice input not supported in your browser', 'warning');
        }
    });
    
    // Add chat input suggestions
    chatInput.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        if (value.includes('how to')) {
            showInputSuggestion('Start a startup?');
        } else if (value.includes('what is')) {
            showInputSuggestion('a startup?');
        } else if (value.includes('where')) {
            showInputSuggestion('to find funding?');
        }
    });
    
    // Show input suggestion
    function showInputSuggestion(suggestion) {
        const hint = document.querySelector('.input-hint');
        if (hint) {
            hint.innerHTML = `<i class="fas fa-lightbulb"></i> Try: "${suggestion}"`;
        }
    }
    
    // Initialize voice input
    initVoiceInput();
    
    // Load conversation history on page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadConversationHistory();
        }, 500);
    });
    
    // Show notification after 10 seconds if chat not opened
    setTimeout(() => {
        if (!isChatOpen && !localStorage.getItem('chatPromptShown')) {
            updateChatNotification(true);
            localStorage.setItem('chatPromptShown', 'true');
        }
    }, 10000);
}

// ===== COUNTER ANIMATIONS =====
function initCounters() {
    const counters = document.querySelectorAll('.stat-value');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target + (counter.getAttribute('data-count') === '95' ? '%' : '+');
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current) + (counter.getAttribute('data-count') === '95' ? '%' : '+');
                    }
                }, 16);
                
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// ===== ANIMATIONS =====
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .expert-card, .category-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== NEWSLETTER =====
function initNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // Simulate API call
            setTimeout(() => {
                showNotification('🎉 Successfully subscribed! Check your email for confirmation.', 'success');
                this.reset();
                
                // Track subscription
                console.log('New newsletter subscriber:', email);
            }, 1000);
        });
    }
}

// ===== PARTICLES BACKGROUND =====
function initParticles() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#6C63FF"
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.5,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#6C63FF",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
}

// ===== TOOLTIPS =====
function initTooltips() {
    // Add tooltips to interactive elements
    const tooltipElements = document.querySelectorAll('[title]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('title');
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// ===== BOOKMARKS =====
function initBookmarks() {
    document.querySelectorAll('.bookmark-btn').forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                showNotification('Article bookmarked', 'success');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                showNotification('Bookmark removed', 'info');
            }
        });
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="${icons[type] || icons.info}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 24px;
            border-radius: 12px;
            color: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            max-width: 400px;
            z-index: 9999;
            animation: slideInRight 0.3s ease;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            font-family: inherit;
        }
        
        .notification-success { background: linear-gradient(135deg, #00D4AA 0%, #00BFA5 100%); }
        .notification-error { background: linear-gradient(135deg, #FF5252 0%, #FF4081 100%); }
        .notification-warning { background: linear-gradient(135deg, #FFB74D 0%, #FF9800 100%); }
        .notification-info { background: linear-gradient(135deg, #29B6F6 0%, #039BE5 100%); }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .notification-close {
            background: transparent;
            border: none;
            color: white;
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 0.2s;
        }
        
        .notification-close:hover {
            opacity: 1;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        style.id = 'notification-styles';
        document.head.appendChild(style);
    }
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== ADDITIONAL STYLES FOR ANIMATIONS =====
const additionalStyles = `
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .typing-indicator {
        display: flex;
        gap: 4px;
        padding: 8px 12px;
    }
    
    .typing-indicator span {
        width: 8px;
        height: 8px;
        background: var(--gray-400);
        border-radius: 50%;
        animation: typing 1.4s infinite;
    }
    
    .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
    .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
    
    @keyframes typing {
        0%, 100% { transform: translateY(0); opacity: 0.6; }
        50% { transform: translateY(-5px); opacity: 1; }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

// Add additional styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);