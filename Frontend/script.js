/* =====================================================
   CIVICLENS FRONTEND
===================================================== */

/* =====================================================
   CONFIGURATION
===================================================== */

const API_BASE_URL = "http://127.0.0.1:8000";


/* =====================================================
   PAKISTAN CITIES
===================================================== */

const pakistanCities = [

    /* PUNJAB */

    "Ahmadpur East",
    "Alipur",
    "Arifwala",
    "Attock",
    "Bahawalnagar",
    "Bahawalpur",
    "Bhalwal",
    "Bhakkar",
    "Bhera",
    "Burewala",
    "Chakwal",
    "Chak Jhumra",
    "Chiniot",
    "Chishtian",
    "Chunian",
    "Daska",
    "Dera Ghazi Khan",
    "Dina",
    "Depalpur",
    "Faisalabad",
    "Fateh Jang",
    "Ferozewala",
    "Gojra",
    "Gujar Khan",
    "Gujranwala",
    "Gujrat",
    "Hafizabad",
    "Hasilpur",
    "Haroonabad",
    "Jalalpur Pirwala",
    "Jaranwala",
    "Jhang",
    "Jhelum",
    "Kabirwala",
    "Kahuta",
    "Kamalia",
    "Kamoke",
    "Kasur",
    "Khanewal",
    "Khanpur",
    "Kharian",
    "Khushab",
    "Kot Addu",
    "Kot Momin",
    "Kot Radha Kishan",
    "Lahore",
    "Lala Musa",
    "Layyah",
    "Liaquatpur",
    "Lodhran",
    "Mailsi",
    "Malakwal",
    "Mandi Bahauddin",
    "Mian Channu",
    "Mianwali",
    "Multan",
    "Muridke",
    "Murree",
    "Muzaffargarh",
    "Nankana Sahib",
    "Narowal",
    "Narang Mandi",
    "Okara",
    "Pakpattan",
    "Pattoki",
    "Phalia",
    "Pind Dadan Khan",
    "Pindigheb",
    "Qila Didar Singh",
    "Rahim Yar Khan",
    "Raiwind",
    "Rajanpur",
    "Renala Khurd",
    "Rawalpindi",
    "Sadiqabad",
    "Sahiwal",
    "Sambrial",
    "Samundri",
    "Sangla Hill",
    "Sarai Alamgir",
    "Sargodha",
    "Shahkot",
    "Sheikhupura",
    "Shorkot",
    "Sialkot",
    "Sillanwali",
    "Talagang",
    "Taxila",
    "Toba Tek Singh",
    "Vehari",
    "Wah Cantt",
    "Wazirabad",
    "Yazman",

    /* SINDH */

    "Badin",
    "Dadu",
    "Daharki",
    "Digri",
    "Diplo",
    "Dokri",
    "Gambat",
    "Ghotki",
    "Hala",
    "Hyderabad",
    "Islamkot",
    "Jacobabad",
    "Jamshoro",
    "Jati",
    "Kandhkot",
    "Kambar",
    "Karachi",
    "Kashmore",
    "Keti Bandar",
    "Khairpur",
    "Khipro",
    "Kunri",
    "Larkana",
    "Matiari",
    "Mehrabpur",
    "Mian Sahib",
    "Mirpur Khas",
    "Mithi",
    "Moro",
    "Naushahro Feroze",
    "Nawabshah",
    "Pano Aqil",
    "Ratodero",
    "Rohri",
    "Sakrand",
    "Samaro",
    "Sanghar",
    "Sehwan",
    "Shahdadkot",
    "Shahdadpur",
    "Shikarpur",
    "Sujawal",
    "Sukkur",
    "Tando Adam",
    "Tando Allahyar",
    "Tando Muhammad Khan",
    "Thatta",
    "Tharo Shah",
    "Umerkot",

    /* KHYBER PAKHTUNKHWA */

    "Abbottabad",
    "Akora Khattak",
    "Balakot",
    "Bannu",
    "Battagram",
    "Batkhela",
    "Charsadda",
    "Chakdara",
    "Chitral",
    "Dargai",
    "Dera Ismail Khan",
    "Dir",
    "Hangu",
    "Haripur",
    "Havelian",
    "Jehangira",
    "Kabal",
    "Kalam",
    "Karak",
    "Kohat",
    "Khwazakhela",
    "Lakki Marwat",
    "Landi Kotal",
    "Mansehra",
    "Mardan",
    "Matta",
    "Mingora",
    "Nowshera",
    "Parachinar",
    "Peshawar",
    "Risalpur",
    "Saidu Sharif",
    "Shabqadar",
    "Swabi",
    "Takht-i-Bahi",
    "Tank",
    "Timergara",
    "Topi",
    "Wana",

    /* BALOCHISTAN */

    "Awaran",
    "Bela",
    "Chagai",
    "Chaman",
    "Dalbandin",
    "Dera Allah Yar",
    "Dera Murad Jamali",
    "Dhadar",
    "Gwadar",
    "Hub",
    "Jiwani",
    "Kalat",
    "Kharan",
    "Khuzdar",
    "Killa Abdullah",
    "Killa Saifullah",
    "Loralai",
    "Mastung",
    "Mach",
    "Muslim Bagh",
    "Nushki",
    "Ormara",
    "Panjgur",
    "Pasni",
    "Pishin",
    "Quetta",
    "Sibi",
    "Surab",
    "Turbat",
    "Uthal",
    "Zhob",

    /* ISLAMABAD CAPITAL TERRITORY */

    "Islamabad",

    /* AZAD JAMMU & KASHMIR */

    "Athmuqam",
    "Bagh",
    "Bhimber",
    "Chakswari",
    "Dadyal",
    "Dhirkot",
    "Hattian Bala",
    "Islamgarh",
    "Kotli",
    "Mirpur",
    "Muzaffarabad",
    "Pallandri",
    "Rawalakot",
    "Sehnsa",

    /* GILGIT-BALTISTAN */

    "Aliabad",
    "Astore",
    "Chilas",
    "Danyor",
    "Gahkuch",
    "Gilgit",
    "Ghanche",
    "Hunza",
    "Khaplu",
    "Nagar",
    "Shigar",
    "Skardu",
    "Sost",
    "Yasin",

    /* MERGED DISTRICTS / FORMER FATA */

    "Angoor Adda",
    "Bara",
    "Datta Khel",
    "Ladha",
    "Makeen",
    "Mir Ali",
    "Miranshah",
    "Razmak",
    "Wana"

];


/* =====================================================
   ELEMENTS
===================================================== */

const authScreen =
    document.getElementById("authScreen");

const app =
    document.getElementById("app");

const loginForm =
    document.getElementById("loginForm");

const signupForm =
    document.getElementById("signupForm");

const showSignup =
    document.getElementById("showSignup");

const showLogin =
    document.getElementById("showLogin");

const loginFormElement =
    document.getElementById("loginFormElement");

const signupFormElement =
    document.getElementById("signupFormElement");

const signupCity =
    document.getElementById("signupCity");

const reportCity =
    document.getElementById("reportCity");

const sidebar =
    document.getElementById("sidebar");

const mobileMenu =
    document.getElementById("mobileMenu");

const sidebarOverlay =
    document.getElementById("sidebarOverlay");

const logoutBtn =
    document.getElementById("logoutBtn");

const userName =
    document.getElementById("userName");

const userRole =
    document.getElementById("userRole");

const userAvatar =
    document.getElementById("userAvatar");

const topAvatar =
    document.getElementById("topAvatar");

const currentCity =
    document.getElementById("currentCity");

const heroCity =
    document.getElementById("heroCity");

const cityStat =
    document.getElementById("cityStat");

const mapCityLabel =
    document.getElementById("mapCityLabel");

const toast =
    document.getElementById("toast");

const toastTitle =
    document.getElementById("toastTitle");

const toastMessage =
    document.getElementById("toastMessage");


/* =====================================================
   STATE
===================================================== */

let currentUser = null;

let currentLanguage = "en";

let cameraStream = null;

let capturedPhoto = null;

let currentCoordinates = {
    latitude: null,
    longitude: null
};


/* =====================================================
   TRANSLATIONS
===================================================== */

const translations = {

    en: {

        dashboard: "Dashboard",
        reportIssue: "Report Issue",
        myReports: "My Reports",
        map: "Issue Map",
        language: "Language",

        citizenPortal: "CITIZEN PORTAL",
        governmentPortal: "GOVERNMENT PORTAL",
        government: "Government",
        administration: "Administration",

        pakistanCivicAI: "Pakistan Civic AI",
        pakistan: "Pakistan",
        city: "City",
        yourCity: "Your City",
        location: "Location",
        status: "Status",
        date: "Date",
        issue: "Issue",

        high: "High",
        medium: "Medium",
        low: "Low",
        resolved: "Resolved",
        reviewing: "Reviewing",
        inProgress: "In Progress",
        submitted: "Submitted",

        required: "REQUIRED",
        secure: "SECURE",
        protected: "PROTECTED",

        builtForPakistan: "🇵🇰 BUILT FOR PAKISTAN",
        makeCityBetter: "Make your city",
        better: "better.",

        authDescription:
            "Report civic problems, locate them on the map, and let AI help connect communities with responsible authorities.",

        cameraBasedReporting:
            "Camera-based reporting",

        cameraBasedReportingDesc:
            "Capture real civic issues directly.",

        locationAware:
            "Location aware",

        locationAwareDesc:
            "Pin problems accurately on the map.",

        aiPowered:
            "AI powered",

        aiPoweredDesc:
            "Analyze and prioritize civic issues.",

        authFooter:
            "CivicLens • AI-powered civic management",

        welcomeBack:
            "Welcome back",

        signInSubtitle:
            "Sign in to your CivicLens account.",

        email:
            "Email",

        password:
            "Password",

        emailPlaceholder:
            "you@example.com",

        passwordPlaceholder:
            "Enter your password",

        rememberMe:
            "Remember me",

        forgotPassword:
            "Forgot password?",

        signIn:
            "Sign In",

        or:
            "or",

        tryDemoMode:
            "Try Demo Mode",

        dontHaveAccount:
            "Don't have an account?",

        createAccount:
            "Create account",

        signupSubtitle:
            "Join CivicLens and help improve your city.",

        fullName:
            "Full Name",

        fullNamePlaceholder:
            "Your full name",

        createPasswordPlaceholder:
            "Create a password",

        selectYourCity:
            "Select your city",

        alreadyHaveAccount:
            "Already have an account?",

        civicLensAIOnline:
            "CIVICLENS AI ONLINE",

        letsImprove:
            "Let's improve",

        dashboardHeroDescription:
            "Report civic problems and help your community get them resolved faster.",

        reportAnIssue:
            "Report an Issue",

        totalReports:
            "Total Reports",

        thisMonth4:
            "+4 this month",

        beingHandled:
            "Being handled",

        resolutionRate:
            "58% resolution rate",

        quickAction:
            "QUICK ACTION",

        reportCivicIssue:
            "Report a civic issue",

        quickReportDescription:
            "See a pothole, broken streetlight, overflowing drain or waste problem? Capture it directly using your camera.",

        capture:
            "Capture",

        locate:
            "Locate",

        analyze:
            "Analyze",

        submit:
            "Submit",

        startReport:
            "Start Report",

        recentActivity:
            "RECENT ACTIVITY",

        yourReports:
            "Your reports",

        viewAll:
            "View all",

        largePothole:
            "Large pothole",

        twoHoursAgo:
            "2 hours ago",

        brokenStreetlight:
            "Broken streetlight",

        yesterday:
            "Yesterday",

        wasteCollection:
            "Waste collection",

        threeDaysAgo:
            "3 days ago",

        reportsProtected:
            "Your reports are protected",

        reportsProtectedDescription:
            "CivicLens uses authenticated accounts, protected API access and role-based permissions for citizens, government users and administrators.",

        civicReporting:
            "CIVIC REPORTING",

        reportIntro:
            "Capture the problem, confirm its location, and let CivicLens AI analyze it.",

        secureReport:
            "Secure Report",

        step1:
            "STEP 1",

        takePhoto:
            "Take a Photo",

        cameraDescription:
            "CivicLens only accepts photos captured directly through your camera. Gallery and file uploads are disabled.",

        cameraReady:
            "Camera ready",

        cameraPermission:
            "Your browser will ask for camera permission.",

        startCamera:
            "Start Camera",

        capturePhoto:
            "Capture Photo",

        retake:
            "Retake",

        cameraSecurity:
            "Photos are captured from your device camera only.",

        step2:
            "STEP 2",

        selectCity:
            "Select city",

        useCurrentLocation:
            "Use My Current Location",

        locationPreview:
            "Location preview",

        latitude:
            "Latitude",

        longitude:
            "Longitude",

        notDetected:
            "Not detected",

        step3:
            "STEP 3",

        describeProblem:
            "Describe the Problem",

        aiAnalysis:
            "AI ANALYSIS",

        description:
            "Description",

        descriptionPlaceholder:
            "Describe what you observed. For example: A large pothole is blocking half of the road near the intersection...",

        clear:
            "Clear",

        analyzeWithAI:
            "Analyze with AI",

        aiAnalysisComplete:
            "AI ANALYSIS COMPLETE",

        issueDetected:
            "Issue detected",

        issueType:
            "Issue Type",

        severity:
            "Severity",

        priority:
            "Priority",

        urgent:
            "Urgent",

        normal:
            "Normal",

        defaultAIMessage:
            "The issue appears to require attention from the relevant municipal department.",

        submitReport:
            "Submit Report",

        citizenActivity:
            "CITIZEN ACTIVITY",

        trackReports:
            "Track the civic issues you have reported.",

        newReport:
            "New Report",

        searchReports:
            "Search your reports...",

        allStatus:
            "All Status",

        civicIntelligence:
            "CIVIC INTELLIGENCE",

        issueMap:
            "Issue Map",

        mapDescription:
            "Explore reported civic problems around your selected city.",

        highPriorityPothole:
            "High priority pothole",

        streetlight:
            "Streetlight",

        resolvedIssue:
            "Resolved issue",

        drainageIssue:
            "Drainage issue",

        civicIssueOverview:
            "Civic issue overview",

        civicOperations:
            "Civic Operations",

        governmentDescription:
            "Review, prioritize and manage civic reports submitted by citizens.",

        pendingReports:
            "Pending Reports",

        highPriority:
            "High Priority",

        projectsActive:
            "Projects Active",

        priorityQueue:
            "PRIORITY QUEUE",

        reportsRequiringAttention:
            "Reports requiring attention",

        export:
            "Export",

        majorRoadDamage:
            "Major road damage",

        aiSeverityHigh:
            "AI severity: HIGH",

        drainageBlockage:
            "Drainage blockage",

        aiSeverityMedium:
            "AI severity: MEDIUM",

        floodingRisk:
            "Flooding risk",

        review:
            "Review",

        systemAdministration:
            "SYSTEM ADMINISTRATION",

        administrator:
            "Administrator",

        adminDescription:
            "Manage users, permissions and CivicLens system security.",

        securityControlsActive:
            "Security controls active",

        securityControlsDescription:
            "Authentication, JWT-based API access and role-based authorization are configured for protected operations.",

        users:
            "Users",

        registeredUsers:
            "2,847 registered users",

        manageUsers:
            "Manage Users",

        rolesPermissions:
            "Roles & Permissions",

        roleTypes:
            "Citizen • Government • Admin",

        manageRoles:
            "Manage Roles",

        cities:
            "Cities",

        pakistaniCitiesSupported:
            "Pakistani cities supported",

        manageCities:
            "Manage Cities",

        systemData:
            "System Data",

        reportsProjectsDecisions:
            "Reports, projects and decisions",

        viewSystemData:
            "View System Data",

        notifications:
            "Notifications",

        openMenu:
            "Open menu",

        logout:
            "Logout",

        success:
            "Success",

        actionCompleted:
            "Action completed.",

        missingInformation:
            "Missing information",

        completeAllFields:
            "Please complete all fields.",

        accountCreated:
            "Account created",

        welcomeToCivicLens:
            "Welcome to CivicLens.",

        loginSuccessful:
            "Login successful",

        welcomeBackToCivicLens:
            "Welcome back to CivicLens.",

        demoMode:
            "Demo Mode",

        demoAccountActivated:
            "CivicLens demo account activated.",

        loggedOut:
            "Logged out",

        signedOut:
            "You have been signed out.",

        languageChanged:
            "Language changed",

        englishActive:
            "English is now active.",

        cameraUnavailable:
            "Camera unavailable",

        cameraUnsupported:
            "Your browser does not support camera access.",

        cameraReadyToast:
            "Camera ready",

        pointCamera:
            "Point the camera at the civic issue.",

        cameraPermissionRequired:
            "Camera permission required",

        allowCamera:
            "Please allow camera access in your browser.",

        cameraNotActive:
            "Camera not active",

        startCameraFirst:
            "Start the camera first.",

        cameraLoading:
            "Camera loading",

        waitForCamera:
            "Please wait for the camera.",

        photoCaptured:
            "Photo captured",

        photoReady:
            "Your civic issue photo is ready.",

        locationUnavailable:
            "Location unavailable",

        locationUnsupported:
            "Your browser does not support location.",

        detectingLocation:
            "Detecting Location...",

        locationDetected:
            "Location detected",

        currentLocationCaptured:
            "Your current location has been captured.",

        locationPermissionRequired:
            "Location permission required",

        allowLocation:
            "Please allow location access.",

        photoRequired:
            "Photo required",

        takePhotoBeforeAnalysis:
            "Take a photo before analyzing the issue.",

        cityRequired:
            "City required",

        selectCityToast:
            "Please select your city.",

        descriptionRequired:
            "Description required",

        describeIssueFirst:
            "Describe the civic issue first.",

        analyzing:
            "Analyzing...",

        aiAnalysisCompleteToast:
            "AI analysis complete",

        issueAnalyzed:
            "The issue has been analyzed successfully.",

        aiError:
            "AI error",

        unableToAnalyze:
            "Unable to analyze the issue.",

        photoMissing:
            "Photo missing",

        capturePhotoFirst:
            "Capture an issue photo first.",

        incompleteReport:
            "Incomplete report",

        completeReport:
            "Please complete the report.",

        submitting:
            "Submitting...",

        reportSubmitted:
            "Report submitted",

        reportSubmittedSuccessfully:
            "Your civic report has been submitted successfully.",

        notificationsTitle:
            "Notifications",

        newUpdates:
            "You have 3 new CivicLens updates.",

        potholeRoadDamage:
            "Pothole / Road Damage",

        streetlightIssue:
            "Streetlight",

        drainageFlooding:
            "Drainage / Flooding",

        wasteManagement:
            "Waste Management",

        civicIssue:
            "Civic Issue",

        highSeverity:
            "High",

        mediumSeverity:
            "Medium",

        lowSeverity:
            "Low",

        urgentPriority:
            "Urgent",

        normalPriority:
            "Normal",

        lowPriority:
            "Low",

        aiRecommendation:
            "CivicLens AI has analyzed the submitted issue and recommends that the relevant municipal department review it.",

        reviewReport:
            "Review Report",

        reportDetails:
            "Report Details",

        reportStatus:
            "Report Status",

        assignedDepartment:
            "Assigned Department",

        municipalRoads:
            "Municipal Roads Department",

        close:
            "Close",

        reportReviewed:
            "Report opened",

        reportOpened:
            "The selected civic report is ready for review.",

        exportStarted:
            "Export started",

        exportDescription:
            "The government report export is being prepared.",

        actionAvailable:
            "Action available",

        manageUsersDescription:
            "User management will be connected to the administration API.",

        manageRolesDescription:
            "Role and permission management will be connected to the administration API.",

        manageCitiesDescription:
            "City management will be connected to the administration API.",

        viewSystemDataDescription:
            "System data will be connected to the administration API.",

        forgotPasswordMessage:
            "Password recovery will be connected to the authentication service."

    },


    ur: {

        dashboard: "ڈیش بورڈ",
        reportIssue: "مسئلہ رپورٹ کریں",
        myReports: "میری رپورٹس",
        map: "مسائل کا نقشہ",
        language: "زبان",

        citizenPortal: "شہری پورٹل",
        governmentPortal: "حکومتی پورٹل",
        government: "حکومت",
        administration: "انتظامیہ",

        pakistanCivicAI: "پاکستان سِوک AI",
        pakistan: "پاکستان",
        city: "شہر",
        yourCity: "آپ کا شہر",
        location: "مقام",
        status: "حیثیت",
        date: "تاریخ",
        issue: "مسئلہ",

        high: "زیادہ",
        medium: "درمیانہ",
        low: "کم",
        resolved: "حل شدہ",
        reviewing: "جائزہ جاری ہے",
        inProgress: "زیرِ کارروائی",
        submitted: "جمع شدہ",

        required: "ضروری",
        secure: "محفوظ",
        protected: "محفوظ شدہ",

        builtForPakistan:
            "🇵🇰 پاکستان کے لیے بنایا گیا",

        makeCityBetter:
            "اپنے شہر کو",

        better:
            "بہتر بنائیں۔",

        authDescription:
            "شہری مسائل کی رپورٹ کریں، انہیں نقشے پر دیکھیں اور AI کی مدد سے متعلقہ ذمہ دار اداروں تک پہنچائیں۔",

        cameraBasedReporting:
            "کیمرے کے ذریعے رپورٹنگ",

        cameraBasedReportingDesc:
            "حقیقی شہری مسائل کی براہِ راست تصویر لیں۔",

        locationAware:
            "مقام کی نشاندہی",

        locationAwareDesc:
            "مسائل کو نقشے پر درست مقام کے ساتھ نشان زد کریں۔",

        aiPowered:
            "AI سے چلنے والا نظام",

        aiPoweredDesc:
            "شہری مسائل کا تجزیہ اور ترجیح بندی کریں۔",

        authFooter:
            "CivicLens • AI پر مبنی شہری انتظام",

        welcomeBack:
            "خوش آمدید",

        signInSubtitle:
            "اپنے CivicLens اکاؤنٹ میں سائن اِن کریں۔",

        email:
            "ای میل",

        password:
            "پاس ورڈ",

        emailPlaceholder:
            "you@example.com",

        passwordPlaceholder:
            "اپنا پاس ورڈ درج کریں",

        rememberMe:
            "مجھے یاد رکھیں",

        forgotPassword:
            "پاس ورڈ بھول گئے؟",

        signIn:
            "سائن اِن",

        or:
            "یا",

        tryDemoMode:
            "ڈیمو موڈ آزمائیں",

        dontHaveAccount:
            "اکاؤنٹ موجود نہیں؟",

        createAccount:
            "اکاؤنٹ بنائیں",

        signupSubtitle:
            "CivicLens میں شامل ہوں اور اپنے شہر کو بہتر بنانے میں مدد کریں۔",

        fullName:
            "پورا نام",

        fullNamePlaceholder:
            "اپنا پورا نام درج کریں",

        createPasswordPlaceholder:
            "پاس ورڈ بنائیں",

        selectYourCity:
            "اپنا شہر منتخب کریں",

        alreadyHaveAccount:
            "پہلے سے اکاؤنٹ موجود ہے؟",

        civicLensAIOnline:
            "CIVICLENS AI آن لائن",

        letsImprove:
            "آئیں بہتر بنائیں",

        dashboardHeroDescription:
            "شہری مسائل کی رپورٹ کریں اور اپنی کمیونٹی میں انہیں تیزی سے حل کروانے میں مدد کریں۔",

        reportAnIssue:
            "مسئلہ رپورٹ کریں",

        totalReports:
            "کل رپورٹس",

        thisMonth4:
            "اس ماہ +4",

        beingHandled:
            "کارروائی جاری ہے",

        resolutionRate:
            "حل ہونے کی شرح 58٪",

        quickAction:
            "فوری کارروائی",

        reportCivicIssue:
            "شہری مسئلہ رپورٹ کریں",

        quickReportDescription:
            "کیا آپ کو گڑھا، خراب اسٹریٹ لائٹ، بھرا ہوا نالہ یا کچرے کا مسئلہ نظر آیا؟ کیمرے سے براہِ راست تصویر لیں۔",

        capture:
            "تصویر لیں",

        locate:
            "مقام معلوم کریں",

        analyze:
            "تجزیہ کریں",

        submit:
            "جمع کریں",

        startReport:
            "رپورٹ شروع کریں",

        recentActivity:
            "حالیہ سرگرمی",

        yourReports:
            "آپ کی رپورٹس",

        viewAll:
            "سب دیکھیں",

        largePothole:
            "بڑا سڑک کا گڑھا",

        twoHoursAgo:
            "2 گھنٹے پہلے",

        brokenStreetlight:
            "خراب اسٹریٹ لائٹ",

        yesterday:
            "کل",

        wasteCollection:
            "کچرا جمع کرنا",

        threeDaysAgo:
            "3 دن پہلے",

        reportsProtected:
            "آپ کی رپورٹس محفوظ ہیں",

        reportsProtectedDescription:
            "CivicLens شہریوں، حکومتی صارفین اور منتظمین کے لیے تصدیق شدہ اکاؤنٹس، محفوظ API رسائی اور کردار پر مبنی اجازتیں استعمال کرتا ہے۔",

        civicReporting:
            "شہری رپورٹنگ",

        reportIntro:
            "مسئلے کی تصویر لیں، مقام کی تصدیق کریں اور CivicLens AI سے اس کا تجزیہ کروائیں۔",

        secureReport:
            "محفوظ رپورٹ",

        step1:
            "مرحلہ 1",

        takePhoto:
            "تصویر لیں",

        cameraDescription:
            "CivicLens صرف کیمرے کے ذریعے براہِ راست لی گئی تصاویر قبول کرتا ہے۔ گیلری اور فائل اپ لوڈ بند ہیں۔",

        cameraReady:
            "کیمرہ تیار ہے",

        cameraPermission:
            "آپ کا براؤزر کیمرے کی اجازت طلب کرے گا۔",

        startCamera:
            "کیمرہ شروع کریں",

        capturePhoto:
            "تصویر لیں",

        retake:
            "دوبارہ لیں",

        cameraSecurity:
            "تصاویر صرف آپ کے ڈیوائس کے کیمرے سے لی جاتی ہیں۔",

        step2:
            "مرحلہ 2",

        selectCity:
            "شہر منتخب کریں",

        useCurrentLocation:
            "میرا موجودہ مقام استعمال کریں",

        locationPreview:
            "مقام کا پیش منظر",

        latitude:
            "عرض بلد",

        longitude:
            "طول بلد",

        notDetected:
            "معلوم نہیں ہوا",

        step3:
            "مرحلہ 3",

        describeProblem:
            "مسئلہ بیان کریں",

        aiAnalysis:
            "AI تجزیہ",

        description:
            "تفصیل",

        descriptionPlaceholder:
            "جو کچھ آپ نے دیکھا اسے بیان کریں۔ مثال کے طور پر: چوراہے کے قریب سڑک کا ایک بڑا گڑھا آدھی سڑک کو روک رہا ہے...",

        clear:
            "صاف کریں",

        analyzeWithAI:
            "AI سے تجزیہ کریں",

        aiAnalysisComplete:
            "AI تجزیہ مکمل",

        issueDetected:
            "مسئلہ معلوم ہوا",

        issueType:
            "مسئلے کی قسم",

        severity:
            "شدت",

        priority:
            "ترجیح",

        urgent:
            "فوری",

        normal:
            "معمول",

        defaultAIMessage:
            "یہ مسئلہ متعلقہ میونسپل محکمے کی توجہ کا متقاضی معلوم ہوتا ہے۔",

        submitReport:
            "رپورٹ جمع کریں",

        citizenActivity:
            "شہری سرگرمی",

        trackReports:
            "ان شہری مسائل کی نگرانی کریں جن کی آپ نے رپورٹ کی ہے۔",

        newReport:
            "نئی رپورٹ",

        searchReports:
            "اپنی رپورٹس تلاش کریں...",

        allStatus:
            "تمام حیثیتیں",

        civicIntelligence:
            "شہری ذہانت",

        issueMap:
            "مسائل کا نقشہ",

        mapDescription:
            "اپنے منتخب شہر کے اردگرد رپورٹ کیے گئے شہری مسائل دیکھیں۔",

        highPriorityPothole:
            "زیادہ ترجیح والا سڑک کا گڑھا",

        streetlight:
            "اسٹریٹ لائٹ",

        resolvedIssue:
            "حل شدہ مسئلہ",

        drainageIssue:
            "نکاسی آب کا مسئلہ",

        civicIssueOverview:
            "شہری مسائل کا جائزہ",

        civicOperations:
            "شہری کارروائیاں",

        governmentDescription:
            "شہریوں کی جانب سے جمع کرائی گئی رپورٹس کا جائزہ لیں، ترجیح مقرر کریں اور ان کا انتظام کریں۔",

        pendingReports:
            "زیر التوا رپورٹس",

        highPriority:
            "زیادہ ترجیح",

        projectsActive:
            "فعال منصوبے",

        priorityQueue:
            "ترجیحی فہرست",

        reportsRequiringAttention:
            "توجہ کی ضرورت والی رپورٹس",

        export:
            "برآمد کریں",

        majorRoadDamage:
            "سڑک کو بڑا نقصان",

        aiSeverityHigh:
            "AI شدت: زیادہ",

        drainageBlockage:
            "نکاسی آب میں رکاوٹ",

        aiSeverityMedium:
            "AI شدت: درمیانی",

        floodingRisk:
            "سیلاب کا خطرہ",

        review:
            "جائزہ",

        systemAdministration:
            "سسٹم انتظامیہ",

        administrator:
            "منتظم",

        adminDescription:
            "صارفین، اجازتوں اور CivicLens سسٹم کی سیکیورٹی کا انتظام کریں۔",

        securityControlsActive:
            "سیکیورٹی کنٹرولز فعال ہیں",

        securityControlsDescription:
            "تصدیق، JWT پر مبنی API رسائی اور کردار پر مبنی اجازت محفوظ کارروائیوں کے لیے ترتیب دی گئی ہے۔",

        users:
            "صارفین",

        registeredUsers:
            "2,847 رجسٹرڈ صارفین",

        manageUsers:
            "صارفین کا انتظام",

        rolesPermissions:
            "کردار اور اجازتیں",

        roleTypes:
            "شہری • حکومت • منتظم",

        manageRoles:
            "کردار کا انتظام",

        cities:
            "شہر",

        pakistaniCitiesSupported:
            "پاکستانی شہروں کی معاونت",

        manageCities:
            "شہروں کا انتظام",

        systemData:
            "سسٹم ڈیٹا",

        reportsProjectsDecisions:
            "رپورٹس، منصوبے اور فیصلے",

        viewSystemData:
            "سسٹم ڈیٹا دیکھیں",

        notifications:
            "اطلاعات",

        openMenu:
            "مینو کھولیں",

        logout:
            "لاگ آؤٹ",

        success:
            "کامیاب",

        actionCompleted:
            "کارروائی مکمل ہوگئی۔",

        missingInformation:
            "معلومات نامکمل ہیں",

        completeAllFields:
            "براہِ کرم تمام خانے مکمل کریں۔",

        accountCreated:
            "اکاؤنٹ بن گیا",

        welcomeToCivicLens:
            "CivicLens میں خوش آمدید۔",

        loginSuccessful:
            "لاگ اِن کامیاب",

        welcomeBackToCivicLens:
            "CivicLens میں دوبارہ خوش آمدید۔",

        demoMode:
            "ڈیمو موڈ",

        demoAccountActivated:
            "CivicLens ڈیمو اکاؤنٹ فعال ہوگیا۔",

        loggedOut:
            "لاگ آؤٹ ہوگیا",

        signedOut:
            "آپ سائن آؤٹ ہوگئے ہیں۔",

        languageChanged:
            "زبان تبدیل ہوگئی",

        englishActive:
            "انگریزی فعال ہوگئی ہے۔",

        cameraUnavailable:
            "کیمرہ دستیاب نہیں",

        cameraUnsupported:
            "آپ کا براؤزر کیمرے تک رسائی کی معاونت نہیں کرتا۔",

        cameraReadyToast:
            "کیمرہ تیار ہے",

        pointCamera:
            "کیمرے کو شہری مسئلے کی طرف کریں۔",

        cameraPermissionRequired:
            "کیمرے کی اجازت درکار ہے",

        allowCamera:
            "براہِ کرم اپنے براؤزر میں کیمرے کی اجازت دیں۔",

        cameraNotActive:
            "کیمرہ فعال نہیں",

        startCameraFirst:
            "پہلے کیمرہ شروع کریں۔",

        cameraLoading:
            "کیمرہ لوڈ ہورہا ہے",

        waitForCamera:
            "براہِ کرم کیمرے کے لیے انتظار کریں۔",

        photoCaptured:
            "تصویر لے لی گئی",

        photoReady:
            "آپ کے شہری مسئلے کی تصویر تیار ہے۔",

        locationUnavailable:
            "مقام دستیاب نہیں",

        locationUnsupported:
            "آپ کا براؤزر مقام کی سہولت فراہم نہیں کرتا۔",

        detectingLocation:
            "مقام معلوم کیا جارہا ہے...",

        locationDetected:
            "مقام معلوم ہوگیا",

        currentLocationCaptured:
            "آپ کا موجودہ مقام محفوظ ہوگیا ہے۔",

        locationPermissionRequired:
            "مقام کی اجازت درکار ہے",

        allowLocation:
            "براہِ کرم مقام تک رسائی کی اجازت دیں۔",

        photoRequired:
            "تصویر ضروری ہے",

        takePhotoBeforeAnalysis:
            "مسئلے کا تجزیہ کرنے سے پہلے تصویر لیں۔",

        cityRequired:
            "شہر ضروری ہے",

        selectCityToast:
            "براہِ کرم اپنا شہر منتخب کریں۔",

        descriptionRequired:
            "تفصیل ضروری ہے",

        describeIssueFirst:
            "پہلے شہری مسئلہ بیان کریں۔",

        analyzing:
            "تجزیہ کیا جارہا ہے...",

        aiAnalysisCompleteToast:
            "AI تجزیہ مکمل ہوگیا",

        issueAnalyzed:
            "مسئلے کا کامیابی سے تجزیہ ہوگیا۔",

        aiError:
            "AI خرابی",

        unableToAnalyze:
            "مسئلے کا تجزیہ نہیں ہوسکا۔",

        photoMissing:
            "تصویر موجود نہیں",

        capturePhotoFirst:
            "پہلے مسئلے کی تصویر لیں۔",

        incompleteReport:
            "رپورٹ نامکمل ہے",

        completeReport:
            "براہِ کرم رپورٹ مکمل کریں۔",

        submitting:
            "جمع کیا جارہا ہے...",

        reportSubmitted:
            "رپورٹ جمع ہوگئی",

        reportSubmittedSuccessfully:
            "آپ کی شہری رپورٹ کامیابی سے جمع ہوگئی ہے۔",

        notificationsTitle:
            "اطلاعات",

        newUpdates:
            "CivicLens کی 3 نئی اپ ڈیٹس موجود ہیں۔",

        potholeRoadDamage:
            "سڑک کا گڑھا / سڑک کو نقصان",

        streetlightIssue:
            "اسٹریٹ لائٹ",

        drainageFlooding:
            "نکاسی آب / سیلاب",

        wasteManagement:
            "کچرے کا انتظام",

        civicIssue:
            "شہری مسئلہ",

        highSeverity:
            "زیادہ",

        mediumSeverity:
            "درمیانہ",

        lowSeverity:
            "کم",

        urgentPriority:
            "فوری",

        normalPriority:
            "معمول",

        lowPriority:
            "کم",

        aiRecommendation:
            "CivicLens AI نے جمع کرائے گئے مسئلے کا تجزیہ کیا ہے اور متعلقہ میونسپل محکمے کو اس کا جائزہ لینے کی سفارش کی ہے۔",

        reviewReport:
            "رپورٹ کا جائزہ",

        reportDetails:
            "رپورٹ کی تفصیلات",

        reportStatus:
            "رپورٹ کی حیثیت",

        assignedDepartment:
            "متعلقہ محکمہ",

        municipalRoads:
            "میونسپل روڈز ڈیپارٹمنٹ",

        close:
            "بند کریں",

        reportReviewed:
            "رپورٹ کھول دی گئی",

        reportOpened:
            "منتخب شہری رپورٹ جائزے کے لیے تیار ہے۔",

        exportStarted:
            "ایکسپورٹ شروع ہوگیا",

        exportDescription:
            "حکومتی رپورٹس کا ایکسپورٹ تیار کیا جارہا ہے۔",

        actionAvailable:
            "کارروائی دستیاب ہے",

        manageUsersDescription:
            "صارفین کا انتظام ایڈمن API کے ساتھ منسلک کیا جائے گا۔",

        manageRolesDescription:
            "کردار اور اجازتوں کا انتظام ایڈمن API کے ساتھ منسلک کیا جائے گا۔",

        manageCitiesDescription:
            "شہروں کا انتظام ایڈمن API کے ساتھ منسلک کیا جائے گا۔",

        viewSystemDataDescription:
            "سسٹم ڈیٹا ایڈمن API کے ساتھ منسلک کیا جائے گا۔",

        forgotPasswordMessage:
            "پاس ورڈ ریکوری authentication service کے ساتھ منسلک کی جائے گی۔"

    }

};


/* =====================================================
   TRANSLATION HELPERS
===================================================== */

function t(key) {

    return (
        translations[currentLanguage] &&
        translations[currentLanguage][key]
    ) ||
    translations.en[key] ||
    key;

}


function applyTranslations() {

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            const translated =
                t(key);

            if (translated !== key) {

                element.textContent =
                    translated;

            }

        });


    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            const key =
                element.dataset.i18nPlaceholder;

            element.placeholder =
                t(key);

        });


    document
        .querySelectorAll("[data-i18n-title]")
        .forEach(element => {

            const key =
                element.dataset.i18nTitle;

            element.title =
                t(key);

            element.setAttribute(
                "aria-label",
                t(key)
            );

        });


    if (currentUser) {

        userRole.textContent =
            formatRole(
                currentUser.role
            );

    }

}


/* =====================================================
   CITY DROPDOWNS
===================================================== */

function populateCities() {

    pakistanCities.sort(
        (a, b) =>
            a.localeCompare(b)
    );


    pakistanCities.forEach(city => {

        if (signupCity) {

            const signupOption =
                document.createElement("option");

            signupOption.value =
                city;

            signupOption.textContent =
                city;

            signupCity.appendChild(
                signupOption
            );

        }


        if (reportCity) {

            const reportOption =
                document.createElement("option");

            reportOption.value =
                city;

            reportOption.textContent =
                city;

            reportCity.appendChild(
                reportOption
            );

        }

    });

}


populateCities();


/* =====================================================
   AUTH SCREEN
===================================================== */

showSignup.addEventListener(
    "click",
    () => {

        loginForm.classList.remove(
            "active"
        );

        signupForm.classList.add(
            "active"
        );

    }
);


showLogin.addEventListener(
    "click",
    () => {

        signupForm.classList.remove(
            "active"
        );

        loginForm.classList.add(
            "active"
        );

    }
);


/* =====================================================
   FORGOT PASSWORD
===================================================== */

const forgotPassword =
    document.getElementById(
        "forgotPassword"
    );


if (forgotPassword) {

    forgotPassword.addEventListener(
        "click",
        () => {

            showToast(
                t("actionAvailable"),
                t("forgotPasswordMessage")
            );

        }
    );

}


/* =====================================================
   PASSWORD TOGGLE
===================================================== */

document
    .querySelectorAll(".password-toggle")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const targetId =
                    button.dataset.target;

                const input =
                    document.getElementById(
                        targetId
                    );

                const icon =
                    button.querySelector("i");


                if (
                    input.type ===
                    "password"
                ) {

                    input.type =
                        "text";

                    icon.classList.remove(
                        "fa-eye"
                    );

                    icon.classList.add(
                        "fa-eye-slash"
                    );

                }

                else {

                    input.type =
                        "password";

                    icon.classList.remove(
                        "fa-eye-slash"
                    );

                    icon.classList.add(
                        "fa-eye"
                    );

                }

            }
        );

    });


/* =====================================================
   SIGNUP
===================================================== */

signupFormElement.addEventListener(
    "submit",
    async event => {

        event.preventDefault();


        const name =
            document
                .getElementById("signupName")
                .value
                .trim();


        const email =
            document
                .getElementById("signupEmail")
                .value
                .trim();


        const password =
            document
                .getElementById("signupPassword")
                .value;


        const city =
            signupCity.value;


        if (
            !name ||
            !email ||
            !password ||
            !city
        ) {

            showToast(
                t("missingInformation"),
                t("completeAllFields")
            );

            return;

        }


        const demoUser = {

            user_id:
                "CIT-" +
                Date.now(),

            name:
                name,

            email:
                email,

            role:
                "citizen",

            city:
                city

        };


        localStorage.setItem(
            "civic_user",
            JSON.stringify(
                demoUser
            )
        );


        showToast(
            t("accountCreated"),
            t("welcomeToCivicLens")
        );


        setTimeout(
            () => {

                startApplication(
                    demoUser
                );

            },
            700
        );

    }
);


/* =====================================================
   LOGIN
===================================================== */

loginFormElement.addEventListener(
    "submit",
    async event => {

        event.preventDefault();


        const email =
            document
                .getElementById("loginEmail")
                .value
                .trim();


        const password =
            document
                .getElementById("loginPassword")
                .value;


        if (
            !email ||
            !password
        ) {

            showToast(
                t("missingInformation"),
                t("completeAllFields")
            );

            return;

        }


        const submitButton =
            loginFormElement.querySelector(
                'button[type="submit"]'
            );


        const originalHTML =
            submitButton
                ? submitButton.innerHTML
                : "";


        if (submitButton) {

            submitButton.disabled =
                true;

            submitButton.innerHTML = `
                <i class="fa-solid fa-spinner fa-spin"></i>
                <span>${t("signIn")}</span>
            `;

        }


        try {

            const response =
                await fetch(
                    `${API_BASE_URL}/auth/login`,
                    {

                        method:
                            "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body:
                            JSON.stringify({

                                email:
                                    email,

                                password:
                                    password

                            })

                    }
                );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.detail ||
                    "Login failed"
                );

            }


            console.log(
                "Login response:",
                data
            );


            const token =
                data.access_token ||
                data.token ||
                data.jwt;


            const backendUser =
                data.user ||
                data;


            if (token) {

                localStorage.setItem(
                    "civic_token",
                    token
                );

            }


            const loggedInUser = {

                user_id:
                    backendUser.user_id ||
                    backendUser.id ||
                    "USER",

                name:
                    backendUser.name ||
                    backendUser.full_name ||
                    email.split("@")[0],

                email:
                    backendUser.email ||
                    email,

                role:
                    normalizeRole(
                        backendUser.role ||
                        data.role ||
                        "citizen"
                    ),

                city:
                    backendUser.city ||
                    "Rawalpindi"

            };


            localStorage.setItem(
                "civic_user",
                JSON.stringify(
                    loggedInUser
                )
            );


            showToast(
                t("loginSuccessful"),
                t("welcomeBackToCivicLens")
            );


            setTimeout(
                () => {

                    startApplication(
                        loggedInUser
                    );

                },
                600
            );

        }

        catch (error) {

            console.error(
                "Login error:",
                error
            );


            showToast(
                "Login failed",
                error.message ||
                "Unable to login."
            );

        }

        finally {

            if (submitButton) {

                submitButton.disabled =
                    false;

                submitButton.innerHTML =
                    originalHTML;

            }

        }

    }
);


/* =====================================================
   NORMALIZE ROLE
===================================================== */

function normalizeRole(role) {

    if (!role) {

        return "citizen";

    }


    const normalized =
        String(role)
            .toLowerCase()
            .trim();


    if (
        normalized ===
        "government"
    ) {

        return "government";

    }


    if (
        normalized ===
        "admin" ||
        normalized ===
        "administrator"
    ) {

        return "admin";

    }


    return "citizen";

}


/* =====================================================
   DEMO LOGIN
===================================================== */

const demoLogin =
    document.getElementById(
        "demoLogin"
    );


if (demoLogin) {

    demoLogin.addEventListener(
        "click",
        () => {

            const demoUser = {

                user_id:
                    "CIT-DEMO",

                name:
                    "Hamza Khan",

                email:
                    "demo@civiclens.pk",

                role:
                    "citizen",

                city:
                    "Rawalpindi"

            };


            localStorage.setItem(
                "civic_user",
                JSON.stringify(
                    demoUser
                )
            );


            startApplication(
                demoUser
            );


            showToast(
                t("demoMode"),
                t("demoAccountActivated")
            );

        }
    );

}


/* =====================================================
   START APPLICATION
===================================================== */

function startApplication(user) {

    currentUser =
        user;


    currentUser.role =
        normalizeRole(
            currentUser.role
        );


    authScreen.classList.add(
        "hidden"
    );


    app.classList.remove(
        "hidden"
    );


    updateUserInterface();

    applyTranslations();


    const role =
        normalizeRole(
            currentUser.role
        );


    if (
        role ===
        "government"
    ) {

        showPage(
            "government"
        );

    }

    else if (
        role ===
        "admin"
    ) {

        showPage(
            "admin"
        );

    }

    else {

        showPage(
            "dashboard"
        );

    }

}


/* =====================================================
   USER INTERFACE
===================================================== */

function updateUserInterface() {

    if (!currentUser) {

        return;

    }


    const name =
        currentUser.name ||
        "CivicLens User";


    const role =
        normalizeRole(
            currentUser.role
        );


    const city =
        currentUser.city ||
        "Rawalpindi";


    userName.textContent =
        name;


    userRole.textContent =
        formatRole(
            role
        );


    const initials =
        getInitials(
            name
        );


    userAvatar.textContent =
        initials;


    topAvatar.textContent =
        initials;


    currentCity.textContent =
        city;


    heroCity.textContent =
        city;


    cityStat.textContent =
        city;


    mapCityLabel.textContent =
        city;


    if (reportCity) {

        reportCity.value =
            city;

    }


    setupRoleVisibility(
        role
    );

}


/* =====================================================
   FORMAT ROLE
===================================================== */

function formatRole(role) {

    const normalized =
        normalizeRole(
            role
        );


    if (
        normalized ===
        "government"
    ) {

        return t(
            "government"
        );

    }


    if (
        normalized ===
        "admin"
    ) {

        return t(
            "administrator"
        );

    }


    return currentLanguage ===
        "ur"
        ? "شہری"
        : "Citizen";

}


/* =====================================================
   INITIALS
===================================================== */

function getInitials(name) {

    return name
        .split(" ")
        .filter(Boolean)
        .map(
            part =>
                part[0]
        )
        .slice(
            0,
            2
        )
        .join("")
        .toUpperCase();

}


/* =====================================================
   ROLE VISIBILITY
===================================================== */

function setupRoleVisibility(role) {

    const normalizedRole =
        normalizeRole(
            role
        );


    document
        .querySelectorAll(
            ".citizen-only"
        )
        .forEach(
            element => {

                element.style.display =
                    normalizedRole ===
                    "citizen"
                        ? ""
                        : "none";

            }
        );


    document
        .querySelectorAll(
            ".government-only"
        )
        .forEach(
            element => {

                element.style.display =
                    normalizedRole ===
                    "government"
                        ? ""
                        : "none";

            }
        );


    document
        .querySelectorAll(
            ".admin-only"
        )
        .forEach(
            element => {

                element.style.display =
                    normalizedRole ===
                    "admin"
                        ? ""
                        : "none";

            }
        );

}


/* =====================================================
   PAGE NAVIGATION
===================================================== */

const navItems =
    document.querySelectorAll(
        ".nav-item"
    );


navItems.forEach(
    item => {

        item.addEventListener(
            "click",
            () => {

                const page =
                    item.dataset.page;


                if (
                    !canAccessPage(
                        page
                    )
                ) {

                    return;

                }


                showPage(
                    page
                );


                closeSidebar();

            }
        );

    }
);


document
    .querySelectorAll(
        "[data-page-link]"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();


                    const page =
                        button.dataset
                            .pageLink;


                    if (
                        !canAccessPage(
                            page
                        )
                    ) {

                        return;

                    }


                    showPage(
                        page
                    );

                }
            );

        }
    );


/* =====================================================
   PAGE ACCESS
===================================================== */

function canAccessPage(
    pageName
) {

    if (!currentUser) {

        return false;

    }


    const role =
        normalizeRole(
            currentUser.role
        );


    if (
        pageName ===
        "government"
    ) {

        return role ===
            "government";

    }


    if (
        pageName ===
        "admin"
    ) {

        return role ===
            "admin";

    }


    if (
        pageName ===
        "map"
    ) {

        return (
            role === "citizen" ||
            role === "government" ||
            role === "admin"
        );

    }


    if (
        pageName ===
        "report" ||
        pageName ===
        "myReports"
    ) {

        return role ===
            "citizen";

    }


    if (
        pageName ===
        "dashboard"
    ) {

        return role ===
            "citizen";

    }


    return true;

}


/* =====================================================
   SHOW PAGE
===================================================== */

function showPage(
    pageName
) {

    if (
        !canAccessPage(
            pageName
        )
    ) {

        const role =
            normalizeRole(
                currentUser?.role
            );


        if (
            role ===
            "government"
        ) {

            pageName =
                "government";

        }

        else if (
            role ===
            "admin"
        ) {

            pageName =
                "admin";

        }

        else {

            pageName =
                "dashboard";

        }

    }


    const pages =
        document.querySelectorAll(
            ".page"
        );


    pages.forEach(
        page => {

            page.classList.remove(
                "active-page"
            );

        }
    );


    const targetPage =
        document.getElementById(
            `${pageName}Page`
        );


    if (!targetPage) {

        console.error(
            `Page not found: ${pageName}Page`
        );

        return;

    }


    targetPage.classList.add(
        "active-page"
    );


    navItems.forEach(
        item => {

            item.classList.remove(
                "active"
            );


            if (
                item.dataset.page ===
                pageName
            ) {

                item.classList.add(
                    "active"
                );

            }

        }
    );


    updatePageTitle(
        pageName
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   PAGE TITLE
===================================================== */

function updatePageTitle(
    page
) {

    const title =
        document.getElementById(
            "pageTitle"
        );


    const eyebrow =
        document.getElementById(
            "pageEyebrow"
        );


    const titles = {

        dashboard:
            "dashboard",

        report:
            "reportAnIssue",

        myReports:
            "myReports",

        map:
            "issueMap",

        government:
            "civicOperations",

        admin:
            "administration"

    };


    const eyebrowKeys = {

        dashboard:
            "citizenPortal",

        report:
            "citizenPortal",

        myReports:
            "citizenActivity",

        map:
            "civicIntelligence",

        government:
            "governmentPortal",

        admin:
            "systemAdministration"

    };


    title.textContent =
        t(
            titles[page] ||
            "dashboard"
        );


    eyebrow.textContent =
        t(
            eyebrowKeys[page] ||
            "citizenPortal"
        );

}


/* =====================================================
   GOVERNMENT REVIEW
===================================================== */

document
    .querySelectorAll(
        ".government-reports .small-action"
    )
    .forEach(
        (button, index) => {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();
                    event.stopPropagation();


                    if (
                        !currentUser ||
                        normalizeRole(
                            currentUser.role
                        ) !== "government"
                    ) {

                        return;

                    }


                    const row =
                        button.closest(
                            ".gov-report-row"
                        );


                    const issueElement =
                        row
                            ? row.querySelector(
                                ".gov-report-info strong"
                            )
                            : null;


                    const locationElement =
                        row
                            ? row.querySelector(
                                ".gov-report-info span"
                            )
                            : null;


                    const severityElement =
                        row
                            ? row.querySelector(
                                ".badge"
                            )
                            : null;


                    const issue =
                        issueElement
                            ? issueElement.textContent.trim()
                            : "Civic Report";


                    const location =
                        locationElement
                            ? locationElement.textContent.trim()
                            : "Pakistan";


                    const severity =
                        severityElement
                            ? severityElement.textContent.trim()
                            : "High";


                    openReviewModal(
                        {
                            id:
                                `REP-GOV-${String(
                                    index + 1
                                ).padStart(
                                    3,
                                    "0"
                                )}`,

                            issue:
                                issue,

                            location:
                                location,

                            severity:
                                severity,

                            department:
                                t(
                                    "municipalRoads"
                                ),

                            status:
                                "Pending Review"

                        }
                    );

                }
            );

        }
    );


/* =====================================================
   REVIEW MODAL
===================================================== */

function openReviewModal(report) {

    const existingModal =
        document.getElementById(
            "reviewModal"
        );


    if (existingModal) {

        existingModal.remove();

    }


    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "reviewModal";


    modal.innerHTML = `
        <div style="
            position:fixed;
            inset:0;
            background:rgba(15,23,42,.55);
            display:flex;
            align-items:center;
            justify-content:center;
            padding:20px;
            z-index:9999;
        ">
            <div style="
                width:min(560px, 100%);
                background:white;
                border-radius:18px;
                padding:28px;
                box-shadow:0 25px 60px rgba(0,0,0,.2);
            ">
                <div style="
                    display:flex;
                    justify-content:space-between;
                    align-items:flex-start;
                    gap:20px;
                    margin-bottom:20px;
                ">
                    <div>
                        <span style="
                            display:block;
                            font-size:12px;
                            font-weight:700;
                            letter-spacing:1px;
                            text-transform:uppercase;
                            opacity:.6;
                            margin-bottom:6px;
                        ">
                            ${escapeHTML(t("reviewReport"))}
                        </span>

                        <h2 style="
                            margin:0;
                            font-size:24px;
                        ">
                            ${escapeHTML(report.issue)}
                        </h2>
                    </div>

                    <button
                        type="button"
                        id="closeReviewModalTop"
                        style="
                            border:0;
                            background:transparent;
                            font-size:22px;
                            cursor:pointer;
                            padding:4px 8px;
                        "
                    >
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div style="
                    display:grid;
                    grid-template-columns:1fr 1fr;
                    gap:14px;
                    margin-bottom:22px;
                ">

                    <div style="
                        padding:15px;
                        background:#f8fafc;
                        border-radius:12px;
                    ">
                        <small style="display:block;opacity:.6;margin-bottom:5px;">
                            ${escapeHTML(t("issue"))}
                        </small>

                        <strong>
                            ${escapeHTML(report.issue)}
                        </strong>
                    </div>

                    <div style="
                        padding:15px;
                        background:#f8fafc;
                        border-radius:12px;
                    ">
                        <small style="display:block;opacity:.6;margin-bottom:5px;">
                            ${escapeHTML(t("location"))}
                        </small>

                        <strong>
                            ${escapeHTML(report.location)}
                        </strong>
                    </div>

                    <div style="
                        padding:15px;
                        background:#f8fafc;
                        border-radius:12px;
                    ">
                        <small style="display:block;opacity:.6;margin-bottom:5px;">
                            ${escapeHTML(t("severity"))}
                        </small>

                        <strong>
                            ${escapeHTML(report.severity)}
                        </strong>
                    </div>

                    <div style="
                        padding:15px;
                        background:#f8fafc;
                        border-radius:12px;
                    ">
                        <small style="display:block;opacity:.6;margin-bottom:5px;">
                            ${escapeHTML(t("status"))}
                        </small>

                        <strong>
                            ${escapeHTML(report.status)}
                        </strong>
                    </div>

                    <div style="
                        grid-column:1 / -1;
                        padding:15px;
                        background:#f8fafc;
                        border-radius:12px;
                    ">
                        <small style="display:block;opacity:.6;margin-bottom:5px;">
                            ${escapeHTML(t("assignedDepartment"))}
                        </small>

                        <strong>
                            ${escapeHTML(report.department)}
                        </strong>
                    </div>

                </div>

                <div style="
                    display:flex;
                    justify-content:flex-end;
                    gap:10px;
                ">
                    <button
                        type="button"
                        class="secondary-btn"
                        id="closeReviewModal"
                    >
                        ${escapeHTML(t("close"))}
                    </button>

                    <button
                        type="button"
                        class="primary-btn"
                        id="acknowledgeReview"
                    >
                        <i class="fa-solid fa-check"></i>
                        ${escapeHTML(t("review"))}
                    </button>
                </div>
            </div>
        </div>
    `;


    document.body.appendChild(
        modal
    );


    const closeTop =
        document.getElementById(
            "closeReviewModalTop"
        );


    const closeBottom =
        document.getElementById(
            "closeReviewModal"
        );


    const acknowledge =
        document.getElementById(
            "acknowledgeReview"
        );


    const closeModal =
        () => {

            modal.remove();

        };


    closeTop.addEventListener(
        "click",
        closeModal
    );


    closeBottom.addEventListener(
        "click",
        closeModal
    );


    acknowledge.addEventListener(
        "click",
        () => {

            closeModal();


            showToast(
                t("reportReviewed"),
                `${report.id} - ${t("reportOpened")}`
            );

        }
    );


    modal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                modal.firstElementChild
            ) {

                closeModal();

            }

        }
    );


    document.addEventListener(
        "keydown",
        function escapeHandler(event) {

            if (
                event.key ===
                "Escape"
            ) {

                closeModal();

                document.removeEventListener(
                    "keydown",
                    escapeHandler
                );

            }

        }
    );

}


/* =====================================================
   EXPORT BUTTON
===================================================== */

const exportButton =
    document.querySelector(
        ".government-reports .secondary-btn"
    );


if (exportButton) {

    exportButton.addEventListener(
        "click",
        () => {

            if (
                !currentUser ||
                normalizeRole(
                    currentUser.role
                ) !== "government"
            ) {

                return;

            }


            showToast(
                t("exportStarted"),
                t("exportDescription")
            );

        }
    );

}


/* =====================================================
   ADMIN BUTTONS
===================================================== */

const adminButtons =
    document.querySelectorAll(
        ".admin-card button"
    );


adminButtons.forEach(
    (button, index) => {

        button.addEventListener(
            "click",
            () => {

                if (
                    !currentUser ||
                    normalizeRole(
                        currentUser.role
                    ) !== "admin"
                ) {

                    return;

                }


                const messages = [

                    "manageUsersDescription",
                    "manageRolesDescription",
                    "manageCitiesDescription",
                    "viewSystemDataDescription"

                ];


                showToast(
                    t("actionAvailable"),
                    t(
                        messages[index] ||
                        "actionCompleted"
                    )
                );

            }
        );

    }
);


/* =====================================================
   ISSUE MAP MARKERS
===================================================== */

document
    .querySelectorAll(
        ".issue-marker"
    )
    .forEach(
        marker => {

            marker.addEventListener(
                "click",
                () => {

                    const title =
                        marker.getAttribute(
                            "title"
                        ) ||
                        "Civic Issue";


                    showToast(
                        title,
                        t("civicIssueOverview")
                    );

                }
            );

        }
    );


/* =====================================================
   MOBILE SIDEBAR
===================================================== */

mobileMenu.addEventListener(
    "click",
    () => {

        sidebar.classList.add(
            "open"
        );

        sidebarOverlay.classList.add(
            "show"
        );

    }
);


sidebarOverlay.addEventListener(
    "click",
    closeSidebar
);


function closeSidebar() {

    sidebar.classList.remove(
        "open"
    );


    sidebarOverlay.classList.remove(
        "show"
    );

}


/* =====================================================
   LOGOUT
===================================================== */

logoutBtn.addEventListener(
    "click",
    () => {

        stopCamera();


        localStorage.removeItem(
            "civic_user"
        );


        localStorage.removeItem(
            "civic_token"
        );


        currentUser =
            null;


        app.classList.add(
            "hidden"
        );


        authScreen.classList.remove(
            "hidden"
        );


        loginForm.classList.add(
            "active"
        );


        signupForm.classList.remove(
            "active"
        );


        showToast(
            t("loggedOut"),
            t("signedOut")
        );

    }
);


/* =====================================================
   LANGUAGE SWITCH
===================================================== */

document
    .querySelectorAll(
        ".language-btn"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const language =
                        button.dataset
                            .language;


                    changeLanguage(
                        language
                    );

                }
            );

        }
    );


function changeLanguage(
    language
) {

    if (
        !translations[language]
    ) {

        return;

    }


    currentLanguage =
        language;


    document
        .querySelectorAll(
            ".language-btn"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset
                        .language ===
                    language
                );

            }
        );


    applyTranslations();


    if (
        language ===
        "ur"
    ) {

        document.body.classList.add(
            "rtl"
        );


        document.documentElement
            .setAttribute(
                "lang",
                "ur"
            );


        document.documentElement
            .setAttribute(
                "dir",
                "rtl"
            );

    }

    else {

        document.body.classList.remove(
            "rtl"
        );


        document.documentElement
            .setAttribute(
                "lang",
                "en"
            );


        document.documentElement
            .setAttribute(
                "dir",
                "ltr"
            );

    }


    if (currentUser) {

        updateUserInterface();

    }


    updatePageTitle(
        getCurrentPage()
    );


    showToast(
        t("languageChanged"),
        language ===
            "ur"
            ? "اردو فعال ہوگئی ہے۔"
            : t("englishActive")
    );

}


/* =====================================================
   GET CURRENT PAGE
===================================================== */

function getCurrentPage() {

    const active =
        document.querySelector(
            ".page.active-page"
        );


    if (!active) {

        return "dashboard";

    }


    return active.id.replace(
        "Page",
        ""
    );

}


/* =====================================================
   CAMERA
===================================================== */

const startCamera =
    document.getElementById(
        "startCamera"
    );


const capturePhoto =
    document.getElementById(
        "capturePhoto"
    );


const retakePhoto =
    document.getElementById(
        "retakePhoto"
    );


const cameraVideo =
    document.getElementById(
        "cameraVideo"
    );


const cameraCanvas =
    document.getElementById(
        "cameraCanvas"
    );


const capturedImage =
    document.getElementById(
        "capturedImage"
    );


const cameraPlaceholder =
    document.getElementById(
        "cameraPlaceholder"
    );


const cameraFrame =
    document.getElementById(
        "cameraFrame"
    );


startCamera.addEventListener(
    "click",
    async () => {

        try {

            if (
                !navigator.mediaDevices ||
                !navigator.mediaDevices
                    .getUserMedia
            ) {

                showToast(
                    t("cameraUnavailable"),
                    t("cameraUnsupported")
                );

                return;

            }


            cameraStream =
                await navigator
                    .mediaDevices
                    .getUserMedia({

                        video: {

                            facingMode: {

                                ideal:
                                    "environment"

                            }

                        },

                        audio:
                            false

                    });


            cameraVideo.srcObject =
                cameraStream;


            cameraVideo.style.display =
                "block";


            cameraPlaceholder.style.display =
                "none";


            capturedImage.style.display =
                "none";


            cameraFrame.style.display =
                "block";


            capturePhoto.disabled =
                false;


            retakePhoto.classList.add(
                "hidden"
            );


            startCamera.innerHTML = `
                <i class="fa-solid fa-camera"></i>
                <span data-i18n="cameraReady">
                    Camera Active
                </span>
            `;


            applyTranslations();


            showToast(
                t("cameraReadyToast"),
                t("pointCamera")
            );

        }

        catch (error) {

            console.error(
                "Camera error:",
                error
            );


            showToast(
                t("cameraPermissionRequired"),
                t("allowCamera")
            );

        }

    }
);


/* =====================================================
   CAPTURE PHOTO
===================================================== */

capturePhoto.addEventListener(
    "click",
    () => {

        if (!cameraStream) {

            showToast(
                t("cameraNotActive"),
                t("startCameraFirst")
            );

            return;

        }


        const videoWidth =
            cameraVideo.videoWidth;


        const videoHeight =
            cameraVideo.videoHeight;


        if (
            !videoWidth ||
            !videoHeight
        ) {

            showToast(
                t("cameraLoading"),
                t("waitForCamera")
            );

            return;

        }


        cameraCanvas.width =
            videoWidth;


        cameraCanvas.height =
            videoHeight;


        const context =
            cameraCanvas.getContext(
                "2d"
            );


        context.drawImage(
            cameraVideo,
            0,
            0,
            videoWidth,
            videoHeight
        );


        capturedPhoto =
            cameraCanvas.toDataURL(
                "image/jpeg",
                .85
            );


        capturedImage.src =
            capturedPhoto;


        capturedImage.style.display =
            "block";


        cameraVideo.style.display =
            "none";


        cameraFrame.style.display =
            "none";


        capturePhoto.disabled =
            true;


        retakePhoto.classList.remove(
            "hidden"
        );


        stopCamera();


        showToast(
            t("photoCaptured"),
            t("photoReady")
        );

    }
);


/* =====================================================
   RETAKE PHOTO
===================================================== */

retakePhoto.addEventListener(
    "click",
    async () => {

        capturedPhoto =
            null;


        capturedImage.style.display =
            "none";


        retakePhoto.classList.add(
            "hidden"
        );


        await startCamera.click();

    }
);


/* =====================================================
   STOP CAMERA
===================================================== */

function stopCamera() {

    if (!cameraStream) {

        return;

    }


    cameraStream
        .getTracks()
        .forEach(
            track => {

                track.stop();

            }
        );


    cameraStream =
        null;


    if (cameraVideo) {

        cameraVideo.srcObject =
            null;

    }

}


/* =====================================================
   LOCATION
===================================================== */

const getLocation =
    document.getElementById(
        "getLocation"
    );


const latitude =
    document.getElementById(
        "latitude"
    );


const longitude =
    document.getElementById(
        "longitude"
    );


const mapMarker =
    document.getElementById(
        "mapMarker"
    );


getLocation.addEventListener(
    "click",
    () => {

        if (
            !navigator.geolocation
        ) {

            showToast(
                t("locationUnavailable"),
                t("locationUnsupported")
            );

            return;

        }


        getLocation.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            <span data-i18n="detectingLocation">
                Detecting Location...
            </span>
        `;


        getLocation.disabled =
            true;


        applyTranslations();


        navigator.geolocation
            .getCurrentPosition(

                position => {

                    currentCoordinates
                        .latitude =
                        position
                            .coords
                            .latitude;


                    currentCoordinates
                        .longitude =
                        position
                            .coords
                            .longitude;


                    latitude.textContent =
                        currentCoordinates
                            .latitude
                            .toFixed(
                                6
                            );


                    longitude.textContent =
                        currentCoordinates
                            .longitude
                            .toFixed(
                                6
                            );


                    latitude
                        .removeAttribute(
                            "data-i18n"
                        );


                    longitude
                        .removeAttribute(
                            "data-i18n"
                        );


                    mapMarker.style.left =
                        "50%";


                    mapMarker.style.top =
                        "50%";


                    getLocation.disabled =
                        false;


                    getLocation.innerHTML = `
                        <i class="fa-solid fa-location-dot"></i>
                        <span data-i18n="locationDetected">
                            Location Detected
                        </span>
                    `;


                    applyTranslations();


                    showToast(
                        t("locationDetected"),
                        t("currentLocationCaptured")
                    );

                },


                error => {

                    console.error(
                        "Location error:",
                        error
                    );


                    getLocation.disabled =
                        false;


                    getLocation.innerHTML = `
                        <i class="fa-solid fa-crosshairs"></i>
                        <span data-i18n="useCurrentLocation">
                            Use My Current Location
                        </span>
                    `;


                    applyTranslations();


                    showToast(
                        t("locationPermissionRequired"),
                        t("allowLocation")
                    );

                },


                {

                    enableHighAccuracy:
                        true,

                    timeout:
                        10000,

                    maximumAge:
                        0

                }

            );

    }
);


/* =====================================================
   DESCRIPTION COUNTER
===================================================== */

const issueDescription =
    document.getElementById(
        "issueDescription"
    );


const characterCount =
    document.getElementById(
        "characterCount"
    );


issueDescription.addEventListener(
    "input",
    () => {

        if (
            issueDescription.value
                .length >
            500
        ) {

            issueDescription.value =
                issueDescription.value
                    .substring(
                        0,
                        500
                    );

        }


        characterCount.textContent =
            issueDescription.value
                .length;

    }
);


/* =====================================================
   AI ANALYSIS
===================================================== */

const analyzeIssue =
    document.getElementById(
        "analyzeIssue"
    );


const aiResult =
    document.getElementById(
        "aiResult"
    );


analyzeIssue.addEventListener(
    "click",
    async () => {

        const description =
            issueDescription.value
                .trim();


        if (!capturedPhoto) {

            showToast(
                t("photoRequired"),
                t("takePhotoBeforeAnalysis")
            );

            return;

        }


        if (!reportCity.value) {

            showToast(
                t("cityRequired"),
                t("selectCityToast")
            );

            return;

        }


        if (!description) {

            showToast(
                t("descriptionRequired"),
                t("describeIssueFirst")
            );

            return;

        }


        const originalHTML =
            analyzeIssue.innerHTML;


        analyzeIssue.disabled =
            true;


        analyzeIssue.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            <span data-i18n="analyzing">
                Analyzing...
            </span>
        `;


        applyTranslations();


        try {

            await delay(
                1600
            );


            const analysis = {

                issue_type:
                    detectIssueType(
                        description
                    ),

                severity:
                    detectSeverity(
                        description
                    ),

                priority:
                    detectPriority(
                        description
                    ),

                answer:
                    t(
                        "aiRecommendation"
                    )

            };


            displayAIResult(
                analysis
            );


            showToast(
                t(
                    "aiAnalysisCompleteToast"
                ),
                t(
                    "issueAnalyzed"
                )
            );

        }

        catch (error) {

            console.error(
                error
            );


            showToast(
                t("aiError"),
                t("unableToAnalyze")
            );

        }

        finally {

            analyzeIssue.disabled =
                false;


            analyzeIssue.innerHTML =
                originalHTML;


            applyTranslations();

        }

    }
);


/* =====================================================
   DEMO ISSUE DETECTION
===================================================== */

function detectIssueType(
    description
) {

    const text =
        description.toLowerCase();


    if (
        text.includes(
            "pothole"
        ) ||
        text.includes(
            "road"
        ) ||
        text.includes(
            "street"
        )
    ) {

        return t(
            "potholeRoadDamage"
        );

    }


    if (
        text.includes(
            "light"
        ) ||
        text.includes(
            "lamp"
        )
    ) {

        return t(
            "streetlightIssue"
        );

    }


    if (
        text.includes(
            "drain"
        ) ||
        text.includes(
            "flood"
        )
    ) {

        return t(
            "drainageFlooding"
        );

    }


    if (
        text.includes(
            "waste"
        ) ||
        text.includes(
            "garbage"
        ) ||
        text.includes(
            "trash"
        )
    ) {

        return t(
            "wasteManagement"
        );

    }


    return t(
        "civicIssue"
    );

}


/* =====================================================
   DEMO SEVERITY
===================================================== */

function detectSeverity(
    description
) {

    const text =
        description.toLowerCase();


    if (
        text.includes(
            "danger"
        ) ||
        text.includes(
            "accident"
        ) ||
        text.includes(
            "flood"
        ) ||
        text.includes(
            "blocked"
        ) ||
        text.includes(
            "major"
        ) ||
        text.includes(
            "large"
        )
    ) {

        return "high";

    }


    if (
        text.includes(
            "broken"
        ) ||
        text.includes(
            "damage"
        ) ||
        text.includes(
            "bad"
        )
    ) {

        return "medium";

    }


    return "low";

}


/* =====================================================
   PRIORITY
===================================================== */

function detectPriority(
    description
) {

    const severity =
        detectSeverity(
            description
        );


    if (
        severity ===
        "high"
    ) {

        return t(
            "urgentPriority"
        );

    }


    if (
        severity ===
        "medium"
    ) {

        return t(
            "normalPriority"
        );

    }


    return t(
        "lowPriority"
    );

}


/* =====================================================
   DISPLAY AI RESULT
===================================================== */

function displayAIResult(
    analysis
) {

    aiResult.classList.remove(
        "hidden"
    );


    document.getElementById(
        "detectedIssue"
    ).textContent =
        analysis.issue_type;


    document.getElementById(
        "detectedSeverity"
    ).textContent =
        currentLanguage ===
            "ur"
            ? t(
                analysis.severity ===
                    "high"
                    ? "highSeverity"
                    : analysis.severity ===
                        "medium"
                        ? "mediumSeverity"
                        : "lowSeverity"
            )
            : capitalize(
                analysis.severity
            );


    document.getElementById(
        "detectedPriority"
    ).textContent =
        analysis.priority;


    document.getElementById(
        "aiMessage"
    ).textContent =
        analysis.answer;


    const severityBadge =
        document.getElementById(
            "severityBadge"
        );


    severityBadge.textContent =
        currentLanguage ===
            "ur"
            ? t(
                analysis.severity ===
                    "high"
                    ? "highSeverity"
                    : analysis.severity ===
                        "medium"
                        ? "mediumSeverity"
                        : "lowSeverity"
            )
            : analysis.severity
                .toUpperCase();


    if (
        analysis.severity ===
        "high"
    ) {

        severityBadge.style.background =
            "#fff0f0";

        severityBadge.style.color =
            "#d94c4c";

    }

    else if (
        analysis.severity ===
        "medium"
    ) {

        severityBadge.style.background =
            "#fff5e8";

        severityBadge.style.color =
            "#c57a28";

    }

    else {

        severityBadge.style.background =
            "#eaf9f3";

        severityBadge.style.color =
            "#249b6c";

    }


    aiResult.scrollIntoView({

        behavior:
            "smooth",

        block:
            "center"

    });

}


/* =====================================================
   SUBMIT REPORT
===================================================== */

const submitReport =
    document.getElementById(
        "submitReport"
    );


submitReport.addEventListener(
    "click",
    async () => {

        if (!capturedPhoto) {

            showToast(
                t("photoMissing"),
                t("capturePhotoFirst")
            );

            return;

        }


        const city =
            reportCity.value;


        const description =
            issueDescription.value
                .trim();


        if (
            !city ||
            !description
        ) {

            showToast(
                t("incompleteReport"),
                t("completeReport")
            );

            return;

        }


        submitReport.disabled =
            true;


        submitReport.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            <span data-i18n="submitting">
                Submitting...
            </span>
        `;


        applyTranslations();


        await delay(
            1300
        );


        submitReport.disabled =
            false;


        submitReport.innerHTML = `
            <i class="fa-solid fa-paper-plane"></i>
            <span data-i18n="submitReport">
                Submit Report
            </span>
        `;


        applyTranslations();


        showToast(
            t("reportSubmitted"),
            t(
                "reportSubmittedSuccessfully"
            )
        );


        resetReport();


        setTimeout(
            () => {

                if (
                    currentUser &&
                    normalizeRole(
                        currentUser.role
                    ) === "citizen"
                ) {

                    showPage(
                        "myReports"
                    );

                }

            },
            900
        );

    }
);


/* =====================================================
   CLEAR REPORT
===================================================== */

const clearReport =
    document.getElementById(
        "clearReport"
    );


clearReport.addEventListener(
    "click",
    resetReport
);


function resetReport() {

    stopCamera();


    capturedPhoto =
        null;


    issueDescription.value =
        "";


    characterCount.textContent =
        "0";


    aiResult.classList.add(
        "hidden"
    );


    capturedImage.src =
        "";


    capturedImage.style.display =
        "none";


    cameraVideo.style.display =
        "none";


    cameraPlaceholder.style.display =
        "flex";


    cameraFrame.style.display =
        "none";


    capturePhoto.disabled =
        true;


    retakePhoto.classList.add(
        "hidden"
    );


    startCamera.innerHTML = `
        <i class="fa-solid fa-video"></i>
        <span data-i18n="startCamera">
            Start Camera
        </span>
    `;


    latitude.textContent =
        t("notDetected");


    longitude.textContent =
        t("notDetected");


    latitude.setAttribute(
        "data-i18n",
        "notDetected"
    );


    longitude.setAttribute(
        "data-i18n",
        "notDetected"
    );


    currentCoordinates = {

        latitude:
            null,

        longitude:
            null

    };


    applyTranslations();

}


/* =====================================================
   SEARCH REPORTS
===================================================== */

const reportSearch =
    document.getElementById(
        "reportSearch"
    );


const statusFilter =
    document.getElementById(
        "statusFilter"
    );


function filterReports() {

    const search =
        reportSearch.value
            .toLowerCase()
            .trim();


    const selectedStatus =
        statusFilter.value
            .toLowerCase()
            .trim();


    const rows =
        document.querySelectorAll(
            ".reports-table .table-row"
        );


    rows.forEach(
        row => {

            const text =
                row.textContent
                    .toLowerCase();


            const matchesSearch =
                !search ||
                text.includes(
                    search
                );


            let matchesStatus =
                true;


            if (
                selectedStatus ===
                "submitted"
            ) {

                matchesStatus =
                    text.includes(
                        "submitted"
                    );

            }

            else if (
                selectedStatus ===
                "reviewing"
            ) {

                matchesStatus =
                    text.includes(
                        "reviewing"
                    );

            }

            else if (
                selectedStatus ===
                "progress"
            ) {

                matchesStatus =
                    text.includes(
                        "in progress"
                    );

            }

            else if (
                selectedStatus ===
                "resolved"
            ) {

                matchesStatus =
                    text.includes(
                        "resolved"
                    );

            }


            row.style.display =
                matchesSearch &&
                matchesStatus
                    ? "grid"
                    : "none";

        }
    );

}


reportSearch.addEventListener(
    "input",
    filterReports
);


statusFilter.addEventListener(
    "change",
    filterReports
);


/* =====================================================
   NOTIFICATIONS
===================================================== */

const notificationButton =
    document.getElementById(
        "notificationButton"
    );


if (notificationButton) {

    notificationButton.addEventListener(
        "click",
        () => {

            showToast(
                t(
                    "notificationsTitle"
                ),
                t(
                    "newUpdates"
                )
            );

        }
    );

}


/* =====================================================
   UTILITY
===================================================== */

function delay(ms) {

    return new Promise(
        resolve =>
            setTimeout(
                resolve,
                ms
            )
    );

}


function capitalize(text) {

    if (!text) {

        return "";

    }


    return text
        .charAt(0)
        .toUpperCase() +
        text.slice(1);

}


function escapeHTML(value) {

    return String(
        value
    )
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function showToast(
    title,
    message
) {

    toastTitle.textContent =
        title;


    toastMessage.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3200
        );

}


/* =====================================================
   LOAD SAVED USER
===================================================== */

function loadSavedUser() {

    const savedUser =
        localStorage.getItem(
            "civic_user"
        );


    if (!savedUser) {

        return;

    }


    try {

        const user =
            JSON.parse(
                savedUser
            );


        user.role =
            normalizeRole(
                user.role
            );


        startApplication(
            user
        );

    }

    catch (error) {

        console.error(
            "Saved user error:",
            error
        );


        localStorage.removeItem(
            "civic_user"
        );


        localStorage.removeItem(
            "civic_token"
        );

    }

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            closeSidebar();

        }

    }
);


/* =====================================================
   BEFORE PAGE CLOSE
===================================================== */

window.addEventListener(
    "beforeunload",
    () => {

        stopCamera();

    }
);


/* =====================================================
   INITIALIZE
===================================================== */

applyTranslations();

loadSavedUser();