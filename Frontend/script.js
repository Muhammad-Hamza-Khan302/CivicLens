const API_BASE_URL = "http://127.0.0.1:8000";

const pakistanCities = [
    "Ahmadpur East","Alipur","Arifwala","Attock","Bahawalnagar","Bahawalpur","Bhalwal","Bhakkar","Bhera","Burewala",
    "Chak Jhumra","Chakwal","Chiniot","Chishtian","Chunian","Daska","Dera Ghazi Khan","Dina","Depalpur","Faisalabad",
    "Fateh Jang","Ferozewala","Gojra","Gujar Khan","Gujranwala","Gujrat","Hafizabad","Hasilpur","Haroonabad",
    "Jalalpur Pirwala","Jaranwala","Jhang","Jhelum","Kabirwala","Kahuta","Kamalia","Kamoke","Kasur","Khanewal",
    "Khanpur","Kharian","Khushab","Kot Addu","Kot Momin","Kot Radha Kishan","Lahore","Lala Musa","Layyah",
    "Liaquatpur","Lodhran","Mailsi","Malakwal","Mandi Bahauddin","Mian Channu","Mianwali","Multan","Muridke",
    "Murree","Muzaffargarh","Nankana Sahib","Narowal","Narang Mandi","Okara","Pakpattan","Pattoki","Phalia",
    "Pind Dadan Khan","Pindigheb","Qila Didar Singh","Rahim Yar Khan","Raiwind","Rajanpur","Renala Khurd",
    "Rawalpindi","Sadiqabad","Sahiwal","Sambrial","Samundri","Sangla Hill","Sarai Alamgir","Sargodha",
    "Shahkot","Sheikhupura","Shorkot","Sialkot","Sillanwali","Talagang","Taxila","Toba Tek Singh","Vehari",
    "Wah Cantt","Wazirabad","Yazman",
    "Badin","Dadu","Daharki","Digri","Diplo","Dokri","Gambat","Ghotki","Hala","Hyderabad","Islamkot","Jacobabad",
    "Jamshoro","Jati","Kandhkot","Kambar","Karachi","Kashmore","Keti Bandar","Khairpur","Khipro","Kunri","Larkana",
    "Matiari","Mehrabpur","Mian Sahib","Mirpur Khas","Mithi","Moro","Naushahro Feroze","Nawabshah","Pano Aqil",
    "Ratodero","Rohri","Sakrand","Samaro","Sanghar","Sehwan","Shahdadkot","Shahdadpur","Shikarpur","Sujawal",
    "Sukkur","Tando Adam","Tando Allahyar","Tando Muhammad Khan","Thatta","Tharo Shah","Umerkot",
    "Abbottabad","Akora Khattak","Balakot","Bannu","Battagram","Batkhela","Charsadda","Chakdara","Chitral","Dargai",
    "Dera Ismail Khan","Dir","Hangu","Haripur","Havelian","Jehangira","Kabal","Kalam","Karak","Kohat",
    "Khwazakhela","Lakki Marwat","Landi Kotal","Mansehra","Mardan","Matta","Mingora","Nowshera","Parachinar",
    "Peshawar","Risalpur","Saidu Sharif","Shabqadar","Swabi","Takht-i-Bahi","Tank","Timergara","Topi","Wana",
    "Awaran","Bela","Chagai","Chaman","Dalbandin","Dera Allah Yar","Dera Murad Jamali","Dhadar","Gwadar","Hub",
    "Jiwani","Kalat","Kharan","Khuzdar","Killa Abdullah","Killa Saifullah","Loralai","Mastung","Mach","Muslim Bagh",
    "Nushki","Ormara","Panjgur","Pasni","Pishin","Quetta","Sibi","Surab","Turbat","Uthal","Zhob",
    "Islamabad",
    "Athmuqam","Bagh","Bhimber","Chakswari","Dadyal","Dhirkot","Hattian Bala","Islamgarh","Kotli","Mirpur",
    "Muzaffarabad","Pallandri","Rawalakot","Sehnsa",
    "Aliabad","Astore","Chilas","Danyor","Gahkuch","Ghanche","Hunza","Khaplu","Nagar","Shigar","Skardu",
    "Sost","Yasin",
    "Angoor Adda","Bara","Datta Khel","Ladha","Makeen","Mir Ali","Miranshah","Razmak"
];

const authScreen = document.getElementById("authScreen");
const app = document.getElementById("app");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");
const loginFormElement = document.getElementById("loginFormElement");
const signupFormElement = document.getElementById("signupFormElement");
const signupCity = document.getElementById("signupCity");
const reportCity = document.getElementById("reportCity");
const sidebar = document.getElementById("sidebar");
const mobileMenu = document.getElementById("mobileMenu");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const logoutBtn = document.getElementById("logoutBtn");
const userName = document.getElementById("userName");
const userRole = document.getElementById("userRole");
const userAvatar = document.getElementById("userAvatar");
const topAvatar = document.getElementById("topAvatar");
const currentCity = document.getElementById("currentCity");
const heroCity = document.getElementById("heroCity");
const cityStat = document.getElementById("cityStat");
const mapCityLabel = document.getElementById("mapCityLabel");
const toast = document.getElementById("toast");
const toastTitle = document.getElementById("toastTitle");
const toastMessage = document.getElementById("toastMessage");

let currentUser = null;
let currentLanguage = "en";
let cameraStream = null;
let capturedPhoto = null;
let currentCoordinates = {
    latitude: null,
    longitude: null
};
let lastAIAnalysis = null;

const translations = {
    en: {
        dashboard:"Dashboard",
        reportIssue:"Report Issue",
        myReports:"My Reports",
        map:"Issue Map",
        language:"Language",
        citizenPortal:"CITIZEN PORTAL",
        governmentPortal:"GOVERNMENT PORTAL",
        government:"Government",
        administration:"Administration",
        administrator:"Administrator",
        pakistanCivicAI:"Pakistan Civic AI",
        pakistan:"Pakistan",
        city:"City",
        yourCity:"Your City",
        location:"Location",
        status:"Status",
        date:"Date",
        issue:"Issue",
        high:"High",
        medium:"Medium",
        low:"Low",
        resolved:"Resolved",
        reviewing:"Reviewing",
        inProgress:"In Progress",
        submitted:"Submitted",
        verified:"Verified",
        rejected:"Rejected",
        informationRequested:"Information Requested",
        required:"REQUIRED",
        secure:"SECURE",
        protected:"PROTECTED",

        builtForPakistan:"🇵🇰 BUILT FOR PAKISTAN",
        makeCityBetter:"Make your city",
        better:"better.",
        authDescription:"Report civic problems, locate them on the map, and let AI help connect communities with responsible authorities.",
        cameraBasedReporting:"Camera-based reporting",
        cameraBasedReportingDesc:"Capture real civic issues directly.",
        locationAware:"Location aware",
        locationAwareDesc:"Pin problems accurately on the map.",
        aiPowered:"AI powered",
        aiPoweredDesc:"Analyze and prioritize civic issues.",
        authFooter:"CivicLens • AI-powered civic management",

        welcomeBack:"Welcome back",
        signInSubtitle:"Sign in to your CivicLens account.",
        email:"Email",
        password:"Password",
        emailPlaceholder:"you@example.com",
        passwordPlaceholder:"Enter your password",
        rememberMe:"Remember me",
        forgotPassword:"Forgot password?",
        signIn:"Sign In",
        or:"or",
        tryDemoMode:"Try Demo Mode",
        dontHaveAccount:"Don't have an account?",
        createAccount:"Create account",
        signupSubtitle:"Join CivicLens and help improve your city.",
        fullName:"Full Name",
        fullNamePlaceholder:"Your full name",
        createPasswordPlaceholder:"Create a password",
        selectYourCity:"Select your city",
        alreadyHaveAccount:"Already have an account?",

        civicLensAIOnline:"CIVICLENS AI ONLINE",
        letsImprove:"Let's improve",
        dashboardHeroDescription:"Report civic problems and help your community get them resolved faster.",
        reportAnIssue:"Report an Issue",
        totalReports:"Total Reports",
        thisMonth4:"+4 this month",
        beingHandled:"Being handled",
        resolutionRate:"58% resolution rate",
        quickAction:"QUICK ACTION",
        reportCivicIssue:"Report a civic issue",
        quickReportDescription:"See a pothole, broken streetlight, overflowing drain or waste problem? Capture it directly using your camera.",
        capture:"Capture",
        locate:"Locate",
        analyze:"Analyze",
        submit:"Submit",
        startReport:"Start Report",
        recentActivity:"RECENT ACTIVITY",
        yourReports:"Your reports",
        viewAll:"View all",
        largePothole:"Large pothole",
        twoHoursAgo:"2 hours ago",
        brokenStreetlight:"Broken streetlight",
        yesterday:"Yesterday",
        wasteCollection:"Waste collection",
        threeDaysAgo:"3 days ago",
        reportsProtected:"Your reports are protected",
        reportsProtectedDescription:"CivicLens uses authenticated accounts, protected API access and role-based permissions for citizens, government users and administrators.",

        civicReporting:"CIVIC REPORTING",
        reportIntro:"Capture the problem, confirm its location, and let CivicLens AI analyze it.",
        secureReport:"Secure Report",
        step1:"STEP 1",
        takePhoto:"Take a Photo",
        cameraDescription:"CivicLens only accepts photos captured directly through your camera. Gallery and file uploads are disabled.",
        cameraReady:"Camera ready",
        cameraPermission:"Your browser will ask for camera permission.",
        startCamera:"Start Camera",
        capturePhoto:"Capture Photo",
        retake:"Retake",
        cameraSecurity:"Photos are captured from your device camera only.",
        step2:"STEP 2",
        selectCity:"Select city",
        useCurrentLocation:"Use My Current Location",
        locationPreview:"Location preview",
        latitude:"Latitude",
        longitude:"Longitude",
        notDetected:"Not detected",
        step3:"STEP 3",
        describeProblem:"Describe the Problem",
        aiAnalysis:"AI ANALYSIS",
        description:"Description",
        descriptionPlaceholder:"Describe what you observed. For example: A large pothole is blocking half of the road near the intersection...",
        clear:"Clear",
        analyzeWithAI:"Analyze with AI",
        aiAnalysisComplete:"AI ANALYSIS COMPLETE",
        issueDetected:"Issue detected",
        issueType:"Issue Type",
        severity:"Severity",
        priority:"Priority",
        urgent:"Urgent",
        normal:"Normal",
        defaultAIMessage:"The issue appears to require attention from the relevant municipal department.",
        submitReport:"Submit Report",

        citizenActivity:"CITIZEN ACTIVITY",
        trackReports:"Track the civic issues you have reported.",
        newReport:"New Report",
        searchReports:"Search your reports...",
        allStatus:"All Status",

        civicIntelligence:"CIVIC INTELLIGENCE",
        issueMap:"Issue Map",
        mapDescription:"Explore reported civic problems around your selected city.",
        highPriorityPothole:"High priority pothole",
        streetlight:"Streetlight",
        resolvedIssue:"Resolved issue",
        drainageIssue:"Drainage issue",
        civicIssueOverview:"Civic issue overview",

        civicOperations:"Civic Operations",
        governmentDescription:"Review, prioritize and manage civic reports submitted by citizens.",
        pendingReports:"Pending Reports",
        highPriority:"High Priority",
        projectsActive:"Projects Active",
        priorityQueue:"PRIORITY QUEUE",
        reportsRequiringAttention:"Reports requiring attention",
        export:"Export",
        majorRoadDamage:"Major road damage",
        aiSeverityHigh:"AI severity: HIGH",
        drainageBlockage:"Drainage blockage",
        aiSeverityMedium:"AI severity: MEDIUM",
        floodingRisk:"Flooding risk",
        review:"Review",

        systemAdministration:"SYSTEM ADMINISTRATION",
        adminDescription:"Manage users, permissions and CivicLens system security.",
        securityControlsActive:"Security controls active",
        securityControlsDescription:"Authentication, JWT-based API access and role-based authorization are configured for protected operations.",
        users:"Users",
        registeredUsers:"2,847 registered users",
        manageUsers:"Manage Users",
        rolesPermissions:"Roles & Permissions",
        roleTypes:"Citizen • Government • Admin",
        manageRoles:"Manage Roles",
        cities:"Cities",
        pakistaniCitiesSupported:"Pakistani cities supported",
        manageCities:"Manage Cities",
        systemData:"System Data",
        reportsProjectsDecisions:"Reports, projects and decisions",
        viewSystemData:"View System Data",

        notifications:"Notifications",
        openMenu:"Open menu",
        logout:"Logout",

        success:"Success",
        actionCompleted:"Action completed.",
        missingInformation:"Missing information",
        completeAllFields:"Please complete all fields.",
        accountCreated:"Account created",
        welcomeToCivicLens:"Welcome to CivicLens.",
        loginSuccessful:"Login successful",
        welcomeBackToCivicLens:"Welcome back to CivicLens.",
        demoMode:"Demo Mode",
        demoAccountActivated:"CivicLens demo account activated.",
        loggedOut:"Logged out",
        signedOut:"You have been signed out.",
        languageChanged:"Language changed",
        englishActive:"English is now active.",

        cameraUnavailable:"Camera unavailable",
        cameraUnsupported:"Your browser does not support camera access.",
        cameraReadyToast:"Camera ready",
        pointCamera:"Point the camera at the civic issue.",
        cameraPermissionRequired:"Camera permission required",
        allowCamera:"Please allow camera access in your browser.",
        cameraNotActive:"Camera not active",
        startCameraFirst:"Start the camera first.",
        cameraLoading:"Camera loading",
        waitForCamera:"Please wait for the camera.",
        photoCaptured:"Photo captured",
        photoReady:"Your civic issue photo is ready.",

        locationUnavailable:"Location unavailable",
        locationUnsupported:"Your browser does not support location.",
        detectingLocation:"Detecting Location...",
        locationDetected:"Location detected",
        currentLocationCaptured:"Your current location has been captured.",
        locationPermissionRequired:"Location permission required",
        allowLocation:"Please allow location access.",

        photoRequired:"Photo required",
        takePhotoBeforeAnalysis:"Take a photo before analyzing the issue.",
        cityRequired:"City required",
        selectCityToast:"Please select your city.",
        descriptionRequired:"Description required",
        describeIssueFirst:"Describe the civic issue first.",
        analyzing:"Analyzing...",
        aiAnalysisCompleteToast:"AI analysis complete",
        issueAnalyzed:"The issue has been analyzed successfully.",
        aiError:"AI error",
        unableToAnalyze:"Unable to analyze the issue.",
        photoMissing:"Photo missing",
        capturePhotoFirst:"Capture an issue photo first.",
        incompleteReport:"Incomplete report",
        completeReport:"Please complete the report.",
        submitting:"Submitting...",
        reportSubmitted:"Report submitted",
        reportSubmittedSuccessfully:"Your civic report has been submitted successfully.",

        notificationsTitle:"Notifications",
        newUpdates:"You have 3 new CivicLens updates.",

        potholeRoadDamage:"Pothole / Road Damage",
        streetlightIssue:"Streetlight",
        drainageFlooding:"Drainage / Flooding",
        wasteManagement:"Waste Management",
        civicIssue:"Civic Issue",
        highSeverity:"High",
        mediumSeverity:"Medium",
        lowSeverity:"Low",
        urgentPriority:"Urgent",
        normalPriority:"Normal",
        lowPriority:"Low",
        aiRecommendation:"CivicLens AI has analyzed the submitted issue and recommends that the relevant municipal department review it.",

        reviewReport:"Review Report",
        reportDetails:"Report Details",
        reportStatus:"Report Status",
        assignedDepartment:"Assigned Department",
        close:"Close",
        verify:"Verify Report",
        reject:"Reject Report",
        requestInformation:"Request Information",
        changePriority:"Change Priority",
        assignDepartment:"Assign Department",
        createProject:"Create Project",
        department:"Department",
        projectManagement:"PROJECT MANAGEMENT",
        project:"Project",
        projectStatus:"Project Status",
        projectId:"Project ID",
        reportId:"Report ID",
        approveProject:"Approve Project",
        openBidding:"Open Bidding",
        viewContractors:"View Contractors",
        assignContractor:"Assign Contractor",
        startProject:"Start Project",
        markCompleted:"Mark Completed",
        resolveReport:"Resolve Report",
        proposed:"Proposed",
        approved:"Approved",
        bidding:"Bidding",
        assigned:"Assigned",
        completed:"Completed",
        contractor:"Contractor",
        estimatedBudget:"Estimated Budget",
        noProjects:"No projects found.",
        noReports:"No reports found.",
        governmentDataReady:"Government data loaded successfully.",
        operationFailed:"Operation failed",
        retry:"Retry",
        rejectReason:"Rejection reason",
        informationRequest:"Information request",
        choosePriority:"Choose priority",
        chooseDepartment:"Choose department",
        projectCreated:"Project created",
        projectCreatedSuccessfully:"Project created successfully.",
        statusUpdated:"Status updated",
        contractorAssigned:"Contractor assigned",
        contractorAssignedSuccessfully:"Contractor assigned successfully.",
        reportVerified:"Report verified",
        reportVerifiedSuccessfully:"The report has been verified.",
        reportRejected:"Report rejected",
        reportRejectedSuccessfully:"The report has been rejected.",
        informationRequested:"Information requested",
        informationRequestedSuccessfully:"The citizen information request has been saved.",
        departmentAssigned:"Department assigned",
        departmentAssignedSuccessfully:"The department has been assigned.",
        reportResolved:"Report resolved",
        reportResolvedSuccessfully:"The civic report has been resolved.",
        contractors:"Contractors",
        rating:"Rating",
        completedProjects:"Completed Projects",
        noContractors:"No contractors found.",
        citizen:"Citizen",
        reportSavedToDatabase:"Your report was saved to the CivicLens database.",
        reportIdCreated:"Report ID",

        adminUsers:"ADMIN USER MANAGEMENT",
        adminRoles:"ROLES & PERMISSIONS",
        adminCities:"CITY MANAGEMENT",
        adminSystemData:"SYSTEM DATA",
        searchUsers:"Search users...",
        userDetails:"User Details",
        userId:"User ID",
        changeRole:"Change Role",
        selectRole:"Select Role",
        saveRole:"Save Role",
        userRoleUpdated:"User role updated",
        userRoleUpdatedSuccessfully:"The user role was updated successfully.",
        cannotChangeOwnRole:"You cannot change your own role.",
        invalidRole:"Invalid role.",
        noUsers:"No users found.",
        permissions:"Permissions",
        permissionSubmitReports:"Submit civic reports",
        permissionViewOwnReports:"View own reports",
        permissionIssueMap:"View issue map",
        permissionReviewReports:"Review citizen reports",
        permissionVerifyReports:"Verify or reject reports",
        permissionManageProjects:"Manage civic projects",
        permissionManageContractors:"Manage contractors",
        permissionManageUsers:"Manage system users",
        permissionManageRoles:"Manage user roles",
        permissionManageSystem:"Manage system administration",
        searchCities:"Search cities...",
        supportedCities:"Supported Cities",
        totalUsers:"Total Users",
        totalReportsAdmin:"Total Reports",
        totalProjects:"Total Projects",
        totalContractors:"Total Contractors",
        totalDecisions:"Total Decisions",
        refreshData:"Refresh Data",
        loading:"Loading...",
        details:"Details",
        noSystemData:"No system data available.",
        userUpdated:"User updated",
        userNotFound:"User not found"
    },

    ur: {}
};

translations.ur = Object.assign({}, translations.en, {
    dashboard:"ڈیش بورڈ",
    reportIssue:"مسئلہ رپورٹ کریں",
    myReports:"میری رپورٹس",
    map:"مسائل کا نقشہ",
    language:"زبان",
    citizenPortal:"شہری پورٹل",
    governmentPortal:"حکومتی پورٹل",
    government:"حکومت",
    administration:"انتظامیہ",
    administrator:"منتظم",
    pakistanCivicAI:"پاکستان سِوک AI",
    pakistan:"پاکستان",
    city:"شہر",
    yourCity:"آپ کا شہر",
    location:"مقام",
    status:"حیثیت",
    date:"تاریخ",
    issue:"مسئلہ",
    high:"زیادہ",
    medium:"درمیانہ",
    low:"کم",
    resolved:"حل شدہ",
    reviewing:"جائزہ جاری ہے",
    inProgress:"زیرِ کارروائی",
    submitted:"جمع شدہ",
    verified:"تصدیق شدہ",
    rejected:"مسترد",
    informationRequested:"مزید معلومات درکار",
    required:"ضروری",
    secure:"محفوظ",
    protected:"محفوظ شدہ",
    builtForPakistan:"🇵🇰 پاکستان کے لیے بنایا گیا",
    makeCityBetter:"اپنے شہر کو",
    better:"بہتر بنائیں۔",
    authDescription:"شہری مسائل کی رپورٹ کریں، انہیں نقشے پر دیکھیں اور AI کی مدد سے متعلقہ ذمہ دار اداروں تک پہنچائیں۔",
    cameraBasedReporting:"کیمرے کے ذریعے رپورٹنگ",
    cameraBasedReportingDesc:"حقیقی شہری مسائل کی براہِ راست تصویر لیں۔",
    locationAware:"مقام کی نشاندہی",
    locationAwareDesc:"مسائل کو نقشے پر درست مقام کے ساتھ نشان زد کریں۔",
    aiPowered:"AI سے چلنے والا نظام",
    aiPoweredDesc:"شہری مسائل کا تجزیہ اور ترجیح بندی کریں۔",
    authFooter:"CivicLens • AI پر مبنی شہری انتظام",
    welcomeBack:"خوش آمدید",
    signInSubtitle:"اپنے CivicLens اکاؤنٹ میں سائن اِن کریں۔",
    email:"ای میل",
    password:"پاس ورڈ",
    emailPlaceholder:"you@example.com",
    passwordPlaceholder:"اپنا پاس ورڈ درج کریں",
    rememberMe:"مجھے یاد رکھیں",
    forgotPassword:"پاس ورڈ بھول گئے؟",
    signIn:"سائن اِن",
    or:"یا",
    tryDemoMode:"ڈیمو موڈ آزمائیں",
    dontHaveAccount:"اکاؤنٹ موجود نہیں؟",
    createAccount:"اکاؤنٹ بنائیں",
    signupSubtitle:"CivicLens میں شامل ہوں اور اپنے شہر کو بہتر بنانے میں مدد کریں۔",
    fullName:"پورا نام",
    fullNamePlaceholder:"اپنا پورا نام درج کریں",
    createPasswordPlaceholder:"پاس ورڈ بنائیں",
    selectYourCity:"اپنا شہر منتخب کریں",
    alreadyHaveAccount:"پہلے سے اکاؤنٹ موجود ہے؟",
    civicLensAIOnline:"CIVICLENS AI آن لائن",
    letsImprove:"آئیں بہتر بنائیں",
    dashboardHeroDescription:"شہری مسائل کی رپورٹ کریں اور اپنی کمیونٹی میں انہیں تیزی سے حل کروانے میں مدد کریں۔",
    reportAnIssue:"مسئلہ رپورٹ کریں",
    totalReports:"کل رپورٹس",
    thisMonth4:"اس ماہ +4",
    beingHandled:"کارروائی جاری ہے",
    resolutionRate:"حل ہونے کی شرح 58٪",
    quickAction:"فوری کارروائی",
    reportCivicIssue:"شہری مسئلہ رپورٹ کریں",
    quickReportDescription:"کیا آپ کو گڑھا، خراب اسٹریٹ لائٹ، بھرا ہوا نالہ یا کچرے کا مسئلہ نظر آیا؟ کیمرے سے براہِ راست تصویر لیں۔",
    capture:"تصویر لیں",
    locate:"مقام معلوم کریں",
    analyze:"تجزیہ کریں",
    submit:"جمع کریں",
    startReport:"رپورٹ شروع کریں",
    recentActivity:"حالیہ سرگرمی",
    yourReports:"آپ کی رپورٹس",
    viewAll:"سب دیکھیں",
    largePothole:"بڑا سڑک کا گڑھا",
    twoHoursAgo:"2 گھنٹے پہلے",
    brokenStreetlight:"خراب اسٹریٹ لائٹ",
    yesterday:"کل",
    wasteCollection:"کچرا جمع کرنا",
    threeDaysAgo:"3 دن پہلے",
    reportsProtected:"آپ کی رپورٹس محفوظ ہیں",
    reportsProtectedDescription:"CivicLens شہریوں، حکومتی صارفین اور منتظمین کے لیے تصدیق شدہ اکاؤنٹس، محفوظ API رسائی اور کردار پر مبنی اجازتیں استعمال کرتا ہے۔",
    civicReporting:"شہری رپورٹنگ",
    reportIntro:"مسئلے کی تصویر لیں، مقام کی تصدیق کریں اور CivicLens AI سے اس کا تجزیہ کروائیں۔",
    secureReport:"محفوظ رپورٹ",
    step1:"مرحلہ 1",
    takePhoto:"تصویر لیں",
    cameraDescription:"CivicLens صرف کیمرے کے ذریعے براہِ راست لی گئی تصاویر قبول کرتا ہے۔ گیلری اور فائل اپ لوڈ بند ہیں۔",
    cameraReady:"کیمرہ تیار ہے",
    cameraPermission:"آپ کا براؤزر کیمرے کی اجازت طلب کرے گا۔",
    startCamera:"کیمرہ شروع کریں",
    capturePhoto:"تصویر لیں",
    retake:"دوبارہ لیں",
    cameraSecurity:"تصاویر صرف آپ کے ڈیوائس کے کیمرے سے لی جاتی ہیں۔",
    step2:"مرحلہ 2",
    selectCity:"شہر منتخب کریں",
    useCurrentLocation:"میرا موجودہ مقام استعمال کریں",
    locationPreview:"مقام کا پیش منظر",
    latitude:"عرض بلد",
    longitude:"طول بلد",
    notDetected:"معلوم نہیں ہوا",
    step3:"مرحلہ 3",
    describeProblem:"مسئلہ بیان کریں",
    aiAnalysis:"AI تجزیہ",
    description:"تفصیل",
    descriptionPlaceholder:"جو کچھ آپ نے دیکھا اسے بیان کریں۔ مثال کے طور پر: چوراہے کے قریب سڑک کا ایک بڑا گڑھا آدھی سڑک کو روک رہا ہے...",
    clear:"صاف کریں",
    analyzeWithAI:"AI سے تجزیہ کریں",
    aiAnalysisComplete:"AI تجزیہ مکمل",
    issueDetected:"مسئلہ معلوم ہوا",
    issueType:"مسئلے کی قسم",
    severity:"شدت",
    priority:"ترجیح",
    urgent:"فوری",
    normal:"معمول",
    defaultAIMessage:"یہ مسئلہ متعلقہ میونسپل محکمے کی توجہ کا متقاضی معلوم ہوتا ہے۔",
    submitReport:"رپورٹ جمع کریں",
    citizenActivity:"شہری سرگرمی",
    trackReports:"ان شہری مسائل کی نگرانی کریں جن کی آپ نے رپورٹ کی ہے۔",
    newReport:"نئی رپورٹ",
    searchReports:"اپنی رپورٹس تلاش کریں...",
    allStatus:"تمام حیثیتیں",
    civicIntelligence:"شہری ذہانت",
    issueMap:"مسائل کا نقشہ",
    mapDescription:"اپنے منتخب شہر کے اردگرد رپورٹ کیے گئے شہری مسائل دیکھیں۔",
    highPriorityPothole:"زیادہ ترجیح والا سڑک کا گڑھا",
    streetlight:"اسٹریٹ لائٹ",
    resolvedIssue:"حل شدہ مسئلہ",
    drainageIssue:"نکاسی آب کا مسئلہ",
    civicIssueOverview:"شہری مسائل کا جائزہ",
    civicOperations:"شہری کارروائیاں",
    governmentDescription:"شہریوں کی جانب سے جمع کرائی گئی شہری رپورٹس کا جائزہ لیں، ترجیح مقرر کریں اور ان کا انتظام کریں۔",
    pendingReports:"زیر التوا رپورٹس",
    highPriority:"زیادہ ترجیح",
    projectsActive:"فعال منصوبے",
    priorityQueue:"ترجیحی فہرست",
    reportsRequiringAttention:"توجہ کی ضرورت والی رپورٹس",
    export:"برآمد کریں",
    majorRoadDamage:"سڑک کو بڑا نقصان",
    aiSeverityHigh:"AI شدت: زیادہ",
    drainageBlockage:"نکاسی آب میں رکاوٹ",
    aiSeverityMedium:"AI شدت: درمیانی",
    floodingRisk:"سیلاب کا خطرہ",
    review:"جائزہ",
    systemAdministration:"سسٹم انتظامیہ",
    adminDescription:"صارفین، اجازتوں اور CivicLens سسٹم کی سیکیورٹی کا انتظام کریں۔",
    securityControlsActive:"سیکیورٹی کنٹرولز فعال ہیں",
    securityControlsDescription:"تصدیق، JWT پر مبنی API رسائی اور کردار پر مبنی اجازت محفوظ کارروائیوں کے لیے ترتیب دی گئی ہے۔",
    users:"صارفین",
    registeredUsers:"رجسٹرڈ صارفین",
    manageUsers:"صارفین کا انتظام",
    rolesPermissions:"کردار اور اجازتیں",
    roleTypes:"شہری • حکومت • منتظم",
    manageRoles:"کردار کا انتظام",
    cities:"شہر",
    pakistaniCitiesSupported:"پاکستانی شہروں کی معاونت",
    manageCities:"شہروں کا انتظام",
    systemData:"سسٹم ڈیٹا",
    reportsProjectsDecisions:"رپورٹس، منصوبے اور فیصلے",
    viewSystemData:"سسٹم ڈیٹا دیکھیں",
    notifications:"اطلاعات",
    openMenu:"مینو کھولیں",
    logout:"لاگ آؤٹ",
    operationFailed:"کارروائی ناکام ہوگئی",
    retry:"دوبارہ کوشش کریں",
    reviewReport:"رپورٹ کا جائزہ",
    reportDetails:"رپورٹ کی تفصیلات",
    reportStatus:"رپورٹ کی حیثیت",
    assignedDepartment:"متعلقہ محکمہ",
    close:"بند کریں",
    verify:"رپورٹ کی تصدیق",
    reject:"رپورٹ مسترد کریں",
    requestInformation:"مزید معلومات طلب کریں",
    changePriority:"ترجیح تبدیل کریں",
    assignDepartment:"محکمہ مقرر کریں",
    createProject:"منصوبہ بنائیں",
    department:"محکمہ",
    projectManagement:"منصوبوں کا انتظام",
    project:"منصوبہ",
    projectStatus:"منصوبے کی حیثیت",
    projectId:"منصوبہ ID",
    reportId:"رپورٹ ID",
    approveProject:"منصوبہ منظور کریں",
    openBidding:"بولی شروع کریں",
    viewContractors:"ٹھیکیدار دیکھیں",
    assignContractor:"ٹھیکیدار مقرر کریں",
    startProject:"منصوبہ شروع کریں",
    markCompleted:"مکمل قرار دیں",
    resolveReport:"رپورٹ حل شدہ کریں",
    proposed:"تجویز کردہ",
    approved:"منظور شدہ",
    bidding:"بولی",
    assigned:"مقرر شدہ",
    completed:"مکمل",
    contractor:"ٹھیکیدار",
    estimatedBudget:"تخمینی بجٹ",
    noProjects:"کوئی منصوبہ نہیں ملا۔",
    noReports:"کوئی رپورٹ نہیں ملی۔",
    governmentDataReady:"حکومتی ڈیٹا کامیابی سے لوڈ ہوگیا۔",
    contractors:"ٹھیکیدار",
    rating:"درجہ بندی",
    completedProjects:"مکمل منصوبے",
    noContractors:"کوئی ٹھیکیدار نہیں ملا۔",
    citizen:"شہری",
    adminUsers:"ایڈمن صارفین کا انتظام",
    adminRoles:"کردار اور اجازتیں",
    adminCities:"شہروں کا انتظام",
    adminSystemData:"سسٹم ڈیٹا",
    searchUsers:"صارفین تلاش کریں...",
    userDetails:"صارف کی تفصیلات",
    userId:"صارف ID",
    changeRole:"کردار تبدیل کریں",
    selectRole:"کردار منتخب کریں",
    saveRole:"کردار محفوظ کریں",
    userRoleUpdated:"صارف کا کردار اپ ڈیٹ ہوگیا",
    userRoleUpdatedSuccessfully:"صارف کا کردار کامیابی سے اپ ڈیٹ ہوگیا۔",
    cannotChangeOwnRole:"آپ اپنا کردار تبدیل نہیں کرسکتے۔",
    noUsers:"کوئی صارف نہیں ملا۔",
    permissions:"اجازتیں",
    permissionSubmitReports:"شہری رپورٹس جمع کرنا",
    permissionViewOwnReports:"اپنی رپورٹس دیکھنا",
    permissionIssueMap:"مسائل کا نقشہ دیکھنا",
    permissionReviewReports:"شہری رپورٹس کا جائزہ لینا",
    permissionVerifyReports:"رپورٹس کی تصدیق یا مسترد کرنا",
    permissionManageProjects:"شہری منصوبوں کا انتظام",
    permissionManageContractors:"ٹھیکیداروں کا انتظام",
    permissionManageUsers:"سسٹم صارفین کا انتظام",
    permissionManageRoles:"صارف کرداروں کا انتظام",
    permissionManageSystem:"سسٹم انتظامیہ",
    searchCities:"شہر تلاش کریں...",
    supportedCities:"معاون شہروں",
    totalUsers:"کل صارفین",
    totalReportsAdmin:"کل رپورٹس",
    totalProjects:"کل منصوبے",
    totalContractors:"کل ٹھیکیدار",
    totalDecisions:"کل فیصلے",
    refreshData:"ڈیٹا تازہ کریں",
    loading:"لوڈ ہورہا ہے...",
    details:"تفصیلات",
    noSystemData:"سسٹم ڈیٹا دستیاب نہیں۔",
    userNotFound:"صارف نہیں ملا"
});

function t(key) {
    return (
        translations[currentLanguage] &&
        translations[currentLanguage][key]
    ) || translations.en[key] || key;
}

function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        element.textContent =
            t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        element.placeholder =
            t(element.dataset.i18nPlaceholder);
    });

    document.querySelectorAll("[data-i18n-title]").forEach(element => {
        const value =
            t(element.dataset.i18nTitle);

        element.title = value;
        element.setAttribute(
            "aria-label",
            value
        );
    });

    if (currentUser) {
        userRole.textContent =
            formatRole(
                currentUser.role
            );
    }
}

function populateCities() {
    const cities =
        [...new Set(pakistanCities)]
            .sort(
                (a, b) =>
                    a.localeCompare(b)
            );

    cities.forEach(city => {
        if (signupCity) {
            const option =
                document.createElement(
                    "option"
                );

            option.value =
                city;

            option.textContent =
                city;

            signupCity.appendChild(
                option
            );
        }

        if (reportCity) {
            const option =
                document.createElement(
                    "option"
                );

            option.value =
                city;

            option.textContent =
                city;

            reportCity.appendChild(
                option
            );
        }
    });
}

populateCities();

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

document
    .querySelectorAll(
        ".password-toggle"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const input =
                    document.getElementById(
                        button.dataset.target
                    );

                const icon =
                    button.querySelector(
                        "i"
                    );

                if (!input) {
                    return;
                }

                if (
                    input.type ===
                    "password"
                ) {
                    input.type =
                        "text";

                    if (icon) {
                        icon.classList.remove(
                            "fa-eye"
                        );

                        icon.classList.add(
                            "fa-eye-slash"
                        );
                    }

                } else {
                    input.type =
                        "password";

                    if (icon) {
                        icon.classList.remove(
                            "fa-eye-slash"
                        );

                        icon.classList.add(
                            "fa-eye"
                        );
                    }
                }
            }
        );
    });

signupFormElement.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const name =
            document
                .getElementById(
                    "signupName"
                )
                .value
                .trim();

        const email =
            document
                .getElementById(
                    "signupEmail"
                )
                .value
                .trim();

        const password =
            document
                .getElementById(
                    "signupPassword"
                )
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

        const user = {
            user_id:
                `CIT-${Date.now()}`,

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
                user
            )
        );

        startApplication(
            user
        );

        showToast(
            t("accountCreated"),
            t("welcomeToCivicLens")
        );
    }
);

loginFormElement.addEventListener(
    "submit",
    async event => {

        event.preventDefault();

        const email =
            document
                .getElementById(
                    "loginEmail"
                )
                .value
                .trim();

        const password =
            document
                .getElementById(
                    "loginPassword"
                )
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
                                email,
                                password
                            })
                    }
                );

            let data = {};

            try {
                data =
                    await response.json();
            } catch {
                data = {};
            }

            if (!response.ok) {
                throw new Error(
                    data.detail ||
                    data.message ||
                    "Login failed"
                );
            }

            const token =
                data.access_token ||
                data.token ||
                data.jwt ||
                null;

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
                300
            );

        } catch (error) {

            console.error(
                "Login error:",
                error
            );

            showToast(
                "Login failed",
                error.message ||
                "Unable to login."
            );

        } finally {

            if (submitButton) {
                submitButton.disabled =
                    false;

                submitButton.innerHTML =
                    originalHTML;
            }
        }
    }
);

function normalizeRole(role) {

    if (!role) {
        return "citizen";
    }

    const value =
        String(role)
            .toLowerCase()
            .trim();

    if (
        value ===
        "government"
    ) {
        return "government";
    }

    if (
        value === "admin" ||
        value === "administrator"
    ) {
        return "admin";
    }

    return "citizen";
}

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

function startApplication(
    user
) {

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

    if (
        currentUser.role ===
        "government"
    ) {

        showPage(
            "government"
        );

        loadGovernmentData();

        return;
    }

    if (
        currentUser.role ===
        "admin"
    ) {

        showPage(
            "admin"
        );

        initializeAdminPortal();

        return;
    }

    showPage(
        "dashboard"
    );
}

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

function formatRole(
    role
) {

    const value =
        normalizeRole(
            role
        );

    if (
        value ===
        "government"
    ) {
        return t(
            "government"
        );
    }

    if (
        value ===
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

function getInitials(
    name
) {

    return String(name)
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

function setupRoleVisibility(
    role
) {

    const value =
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
                    value ===
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
                    value ===
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
                    value ===
                    "admin"
                        ? ""
                        : "none";
            }
        );
}

const navItems =
    document.querySelectorAll(
        ".nav-item"
    );

navItems.forEach(
    item => {

        item.addEventListener(
            "click",
            event => {

                event.preventDefault();

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

                if (
                    page ===
                    "government"
                ) {
                    loadGovernmentData();
                }

                if (
                    page ===
                    "admin"
                ) {
                    initializeAdminPortal();
                }
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

                    if (
                        page ===
                        "government"
                    ) {
                        loadGovernmentData();
                    }

                    if (
                        page ===
                        "admin"
                    ) {
                        initializeAdminPortal();
                    }
                }
            );
        }
    );

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
        return true;
    }

    if (
        pageName === "report" ||
        pageName === "myReports"
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

        } else if (
            role ===
            "admin"
        ) {

            pageName =
                "admin";

        } else {

            pageName =
                "dashboard";
        }
    }

    document
        .querySelectorAll(
            ".page"
        )
        .forEach(
            page => {
                page.classList.remove(
                    "active-page"
                );
            }
        );

    const target =
        document.getElementById(
            `${pageName}Page`
        );

    if (!target) {
        return;
    }

    target.classList.add(
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
    }
);

document
    .querySelectorAll(
        ".language-btn"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    changeLanguage(
                        button.dataset.language
                    );
                }
            );
        }
    );

function changeLanguage(
    language
) {

    if (
        !translations[
            language
        ]
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
                    button.dataset.language ===
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

        document.documentElement.setAttribute(
            "lang",
            "ur"
        );

        document.documentElement.setAttribute(
            "dir",
            "rtl"
        );

    } else {

        document.body.classList.remove(
            "rtl"
        );

        document.documentElement.setAttribute(
            "lang",
            "en"
        );

        document.documentElement.setAttribute(
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

    if (
        currentUser &&
        normalizeRole(
            currentUser.role
        ) ===
        "admin"
    ) {
        refreshOpenAdminPanel();
    }
}

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
                <span>${t("cameraReady")}</span>
            `;

            showToast(
                t("cameraReadyToast"),
                t("pointCamera")
            );

        } catch (error) {

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

        const width =
            cameraVideo.videoWidth;

        const height =
            cameraVideo.videoHeight;

        if (!width || !height) {

            showToast(
                t("cameraLoading"),
                t("waitForCamera")
            );

            return;
        }

        cameraCanvas.width =
            width;

        cameraCanvas.height =
            height;

        const context =
            cameraCanvas.getContext(
                "2d"
            );

        context.drawImage(
            cameraVideo,
            0,
            0,
            width,
            height
        );

        capturedPhoto =
            cameraCanvas.toDataURL(
                "image/jpeg",
                0.85
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

    cameraVideo.srcObject =
        null;
}

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

        if (!navigator.geolocation) {

            showToast(
                t("locationUnavailable"),
                t("locationUnsupported")
            );

            return;
        }

        getLocation.disabled =
            true;

        getLocation.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            <span>${t("detectingLocation")}</span>
        `;

        navigator.geolocation.getCurrentPosition(
            position => {

                currentCoordinates.latitude =
                    position.coords.latitude;

                currentCoordinates.longitude =
                    position.coords.longitude;

                latitude.textContent =
                    currentCoordinates
                        .latitude
                        .toFixed(6);

                longitude.textContent =
                    currentCoordinates
                        .longitude
                        .toFixed(6);

                latitude.removeAttribute(
                    "data-i18n"
                );

                longitude.removeAttribute(
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
                    <span>${t("locationDetected")}</span>
                `;

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
                    <span>${t("useCurrentLocation")}</span>
                `;

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
            issueDescription.value.length;
    }
);

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
            issueDescription.value.trim();

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
            <span>${t("analyzing")}</span>
        `;

        try {

            await delay(1200);

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

            lastAIAnalysis =
                analysis;

            displayAIResult(
                analysis
            );

            showToast(
                t("aiAnalysisCompleteToast"),
                t("issueAnalyzed")
            );

        } catch (error) {

            console.error(
                error
            );

            showToast(
                t("aiError"),
                t("unableToAnalyze")
            );

        } finally {

            analyzeIssue.disabled =
                false;

            analyzeIssue.innerHTML =
                originalHTML;

            applyTranslations();
        }
    }
);

function detectIssueType(
    description
) {

    const text =
        description.toLowerCase();

    if (
        text.includes("pothole") ||
        text.includes("road") ||
        text.includes("street")
    ) {

        return t(
            "potholeRoadDamage"
        );
    }

    if (
        text.includes("light") ||
        text.includes("lamp")
    ) {

        return t(
            "streetlightIssue"
        );
    }

    if (
        text.includes("drain") ||
        text.includes("flood")
    ) {

        return t(
            "drainageFlooding"
        );
    }

    if (
        text.includes("waste") ||
        text.includes("garbage") ||
        text.includes("trash")
    ) {

        return t(
            "wasteManagement"
        );
    }

    return t(
        "civicIssue"
    );
}

function detectSeverity(
    description
) {

    const text =
        description.toLowerCase();

    if (
        text.includes("danger") ||
        text.includes("accident") ||
        text.includes("flood") ||
        text.includes("blocked") ||
        text.includes("major") ||
        text.includes("large")
    ) {

        return "high";
    }

    if (
        text.includes("broken") ||
        text.includes("damage") ||
        text.includes("bad")
    ) {

        return "medium";
    }

    return "low";
}

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
            ? analysis.severity ===
              "high"
                ? t(
                    "highSeverity"
                )
                : analysis.severity ===
                  "medium"
                    ? t(
                        "mediumSeverity"
                    )
                    : t(
                        "lowSeverity"
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
            ? analysis.severity ===
              "high"
                ? t(
                    "highSeverity"
                )
                : analysis.severity ===
                  "medium"
                    ? t(
                        "mediumSeverity"
                    )
                    : t(
                        "lowSeverity"
                    )
            : analysis.severity.toUpperCase();

    if (
        analysis.severity ===
        "high"
    ) {

        severityBadge.style.background =
            "#fff0f0";

        severityBadge.style.color =
            "#d94c4c";

    } else if (
        analysis.severity ===
        "medium"
    ) {

        severityBadge.style.background =
            "#fff5e8";

        severityBadge.style.color =
            "#c57a28";

    } else {

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

const submitReport =
    document.getElementById(
        "submitReport"
    );

submitReport.addEventListener(
    "click",
    async () => {

        if (!currentUser) {

            showToast(
                t("operationFailed"),
                "Please login again."
            );

            return;
        }

        if (
            normalizeRole(
                currentUser.role
            ) !==
            "citizen"
        ) {

            showToast(
                t("operationFailed"),
                "Only citizens can submit reports."
            );

            return;
        }

        if (!capturedPhoto) {

            showToast(
                t("photoMissing"),
                t("capturePhotoFirst")
            );

            return;
        }

        if (
            !reportCity.value ||
            !issueDescription.value.trim()
        ) {

            showToast(
                t("incompleteReport"),
                t("completeReport")
            );

            return;
        }

        if (
            currentCoordinates.latitude ===
                null ||
            currentCoordinates.longitude ===
                null
        ) {

            showToast(
                t("locationUnavailable"),
                "Please capture your current location before submitting."
            );

            return;
        }

        const severity =
            lastAIAnalysis
                ? lastAIAnalysis.severity
                : detectSeverity(
                    issueDescription.value
                );

        const priority =
            severity ===
                "high"
                ? "critical"
                : severity ===
                  "medium"
                    ? "medium"
                    : "low";

        const payload = {

            report_id:
                `REP-${Date.now()}`,

            citizen_id:
                currentUser.user_id,

            description:
                issueDescription.value.trim(),

            image_url:
                null,

            location: {

                latitude:
                    currentCoordinates.latitude,

                longitude:
                    currentCoordinates.longitude,

                address:
                    reportCity.value
            },

            status:
                "submitted",

            priority:
                priority
        };

        const originalHTML =
            submitReport.innerHTML;

        submitReport.disabled =
            true;

        submitReport.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            <span>${t("submitting")}</span>
        `;

        try {

            const data =
                await apiRequest(
                    "/reports",
                    {
                        method:
                            "POST",

                        body:
                            JSON.stringify(
                                payload
                            )
                    }
                );

            const saved =
                data.report ||
                {};

            showToast(
                t("reportSubmitted"),
                `${t("reportSavedToDatabase")} ${t("reportIdCreated")}: ${saved.report_id || payload.report_id}`
            );

            resetReport();

            setTimeout(
                () => {
                    showPage(
                        "myReports"
                    );
                },
                800
            );

        } catch (error) {

            console.error(
                "Report submission error:",
                error
            );

            showToast(
                t("operationFailed"),
                error.message
            );

        } finally {

            submitReport.disabled =
                false;

            submitReport.innerHTML =
                originalHTML;

            applyTranslations();
        }
    }
);

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

    lastAIAnalysis =
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
        <span>${t("startCamera")}</span>
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

const reportSearch =
    document.getElementById(
        "reportSearch"
    );

const statusFilter =
    document.getElementById(
        "statusFilter"
    );

reportSearch.addEventListener(
    "input",
    filterReports
);

statusFilter.addEventListener(
    "change",
    filterReports
);

function filterReports() {

    const search =
        reportSearch.value
            .toLowerCase()
            .trim();

    const selected =
        statusFilter.value
            .toLowerCase()
            .trim();

    document
        .querySelectorAll(
            ".reports-table .table-row"
        )
        .forEach(
            row => {

                const text =
                    row.textContent
                        .toLowerCase();

                let matchesStatus =
                    true;

                if (
                    selected ===
                    "submitted"
                ) {

                    matchesStatus =
                        text.includes(
                            "submitted"
                        );
                }

                if (
                    selected ===
                    "reviewing"
                ) {

                    matchesStatus =
                        text.includes(
                            "reviewing"
                        );
                }

                if (
                    selected ===
                    "progress"
                ) {

                    matchesStatus =
                        text.includes(
                            "in progress"
                        );
                }

                if (
                    selected ===
                    "resolved"
                ) {

                    matchesStatus =
                        text.includes(
                            "resolved"
                        );
                }

                const matchesSearch =
                    !search ||
                    text.includes(
                        search
                    );

                row.style.display =
                    matchesSearch &&
                    matchesStatus
                        ? "grid"
                        : "none";
            }
        );
}

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

async function apiRequest(
    path,
    options = {}
) {

    const token =
        localStorage.getItem(
            "civic_token"
        );

    const headers = {
        ...(options.headers || {})
    };

    if (
        options.body &&
        !headers["Content-Type"]
    ) {

        headers["Content-Type"] =
            "application/json";
    }

    if (token) {

        headers.Authorization =
            `Bearer ${token}`;
    }

    let response;

    try {

        response =
            await fetch(
                `${API_BASE_URL}${path}`,
                {
                    ...options,
                    headers
                }
            );

    } catch (error) {

        throw new Error(
            "Failed to fetch. Make sure FastAPI is running on http://127.0.0.1:8000."
        );
    }

    let data = {};

    try {

        data =
            await response.json();

    } catch {

        data = {};
    }

    if (!response.ok) {

        if (
            response.status ===
            401
        ) {

            localStorage.removeItem(
                "civic_token"
            );

            throw new Error(
                "Your session has expired. Please login again."
            );
        }

        if (
            response.status ===
            403
        ) {

            throw new Error(
                data.detail ||
                "You do not have permission for this operation."
            );
        }

        throw new Error(
            data.detail ||
            data.message ||
            `Request failed with status ${response.status}`
        );
    }

    return data;
}

async function loadGovernmentReports() {

    const data =
        await apiRequest(
            "/reports"
        );

    return Array.isArray(
        data.reports
    )
        ? data.reports
        : [];
}

async function loadGovernmentProjects() {

    const data =
        await apiRequest(
            "/projects/"
        );

    return Array.isArray(
        data.projects
    )
        ? data.projects
        : [];
}

async function loadGovernmentContractors() {

    const data =
        await apiRequest(
            "/contractors/"
        );

    return Array.isArray(
        data.contractors
    )
        ? data.contractors
        : [];
}

function ensureGovernmentWorkspace() {

    const page =
        document.getElementById(
            "governmentPage"
        );

    if (!page) {
        return null;
    }

    const content =
        page.querySelector(
            ".content"
        );

    if (!content) {
        return null;
    }

    let workspace =
        document.getElementById(
            "governmentDynamicWorkspace"
        );

    if (!workspace) {

        workspace =
            document.createElement(
                "div"
            );

        workspace.id =
            "governmentDynamicWorkspace";

        content.appendChild(
            workspace
        );
    }

    return workspace;
}

function statusLabel(
    status
) {

    const value =
        String(
            status ||
            ""
        )
            .toLowerCase()
            .trim();

    const map = {

        submitted:
            "submitted",

        reviewing:
            "reviewing",

        verified:
            "verified",

        rejected:
            "rejected",

        information_requested:
            "informationRequested",

        assigned:
            "assigned",

        in_progress:
            "inProgress",

        resolved:
            "resolved",

        proposed:
            "proposed",

        approved:
            "approved",

        bidding:
            "bidding",

        completed:
            "completed"
    };

    return t(
        map[value] ||
        "status"
    );
}

function priorityLabel(
    priority
) {

    const value =
        String(
            priority ||
            ""
        )
            .toLowerCase()
            .trim();

    if (
        value ===
        "critical"
    ) {
        return "Critical";
    }

    if (
        value ===
        "high"
    ) {
        return t(
            "high"
        );
    }

    if (
        value ===
        "medium"
    ) {
        return t(
            "medium"
        );
    }

    if (
        value ===
        "low"
    ) {
        return t(
            "low"
        );
    }

    return "—";
}

async function loadGovernmentData() {

    if (
        !currentUser ||
        normalizeRole(
            currentUser.role
        ) !==
        "government"
    ) {
        return;
    }

    const workspace =
        ensureGovernmentWorkspace();

    if (!workspace) {
        return;
    }

    workspace.innerHTML = `
        <div class="white-card">
            <div style="padding:30px;text-align:center;">
                <i class="fa-solid fa-spinner fa-spin"></i>
                <span style="margin-left:8px;">
                    Loading Government Portal...
                </span>
            </div>
        </div>
    `;

    let reports = [];
    let projects = [];
    let contractors = [];

    const errors = [];

    try {

        reports =
            await loadGovernmentReports();

    } catch (error) {

        console.error(
            "Reports error:",
            error
        );

        errors.push(
            `Reports: ${error.message}`
        );
    }

    try {

        projects =
            await loadGovernmentProjects();

    } catch (error) {

        console.error(
            "Projects error:",
            error
        );

        errors.push(
            `Projects: ${error.message}`
        );
    }

    try {

        contractors =
            await loadGovernmentContractors();

    } catch (error) {

        console.error(
            "Contractors error:",
            error
        );

        errors.push(
            `Contractors: ${error.message}`
        );
    }

    renderGovernmentWorkspace(
        reports,
        projects,
        contractors,
        errors
    );
}

function renderGovernmentWorkspace(
    reports,
    projects,
    contractors,
    errors
) {

    const workspace =
        ensureGovernmentWorkspace();

    if (!workspace) {
        return;
    }

    const counts = {

        submitted:
            0,

        reviewing:
            0,

        verified:
            0,

        rejected:
            0,

        information_requested:
            0,

        resolved:
            0,

        in_progress:
            0
    };

    reports.forEach(
        report => {

            const value =
                String(
                    report.status ||
                    ""
                ).toLowerCase();

            if (
                Object.prototype.hasOwnProperty.call(
                    counts,
                    value
                )
            ) {

                counts[value] += 1;
            }
        }
    );

    const pending =
        counts.submitted +
        counts.reviewing +
        counts.information_requested;

    const activeProjects =
        projects.filter(
            project =>
                [
                    "assigned",
                    "in_progress"
                ].includes(
                    String(
                        project.status ||
                        ""
                    ).toLowerCase()
                )
        ).length;

    const completedProjects =
        projects.filter(
            project =>
                String(
                    project.status ||
                    ""
                ).toLowerCase() ===
                "completed"
        ).length;

    const errorHTML =
        errors.length
            ? `
                <div
                    style="
                        background:#fff7ed;
                        border:1px solid #fed7aa;
                        padding:16px;
                        border-radius:14px;
                        margin-bottom:18px;
                    "
                >
                    <strong>
                        ${escapeHTML(
                            t(
                                "operationFailed"
                            )
                        )}
                    </strong>

                    <div
                        style="
                            margin-top:6px;
                            font-size:13px;
                        "
                    >
                        ${errors
                            .map(
                                error =>
                                    `<div>${escapeHTML(error)}</div>`
                            )
                            .join("")}
                    </div>

                    <button
                        type="button"
                        class="secondary-btn"
                        id="retryGovernmentData"
                        style="margin-top:10px;"
                    >
                        <i class="fa-solid fa-rotate"></i>
                        ${escapeHTML(
                            t("retry")
                        )}
                    </button>
                </div>
            `
            : "";

    const reportHTML =
        reports.length
            ? reports
                .map(
                    report =>
                        `
                        <div
                            style="
                                display:grid;
                                grid-template-columns:minmax(0,2fr) auto auto auto;
                                gap:14px;
                                align-items:center;
                                padding:16px 0;
                                border-bottom:1px solid #edf0f3;
                            "
                        >
                            <div>

                                <strong>
                                    ${escapeHTML(
                                        report.description ||
                                        "Civic Report"
                                    )}
                                </strong>

                                <span
                                    style="
                                        display:block;
                                        font-size:13px;
                                        opacity:.65;
                                        margin-top:4px;
                                    "
                                >
                                    ${escapeHTML(
                                        report.report_id
                                    )}

                                    •

                                    ${escapeHTML(
                                        report.location?.address ||
                                        "Location unavailable"
                                    )}
                                </span>

                            </div>

                            <span
                                style="
                                    padding:7px 10px;
                                    border-radius:999px;
                                    background:#f1f5f9;
                                    white-space:nowrap;
                                    font-size:12px;
                                    font-weight:700;
                                "
                            >
                                ${escapeHTML(
                                    statusLabel(
                                        report.status
                                    )
                                )}
                            </span>

                            <span
                                style="
                                    font-weight:700;
                                    white-space:nowrap;
                                "
                            >
                                ${escapeHTML(
                                    priorityLabel(
                                        report.priority
                                    )
                                )}
                            </span>

                            <button
                                type="button"
                                class="small-action gov-review-live"
                                data-report-id="${escapeHTML(
                                    report.report_id
                                )}"
                            >
                                ${escapeHTML(
                                    t("review")
                                )}
                            </button>

                        </div>
                        `
                )
                .join("")
            : `
                <div
                    style="
                        padding:24px 0;
                        opacity:.65;
                    "
                >
                    ${escapeHTML(
                        t("noReports")
                    )}
                </div>
            `;

    const projectHTML =
        projects.length
            ? projects
                .map(
                    project =>
                        renderProjectRow(
                            project
                        )
                )
                .join("")
            : `
                <div
                    style="
                        padding:24px 0;
                        opacity:.65;
                    "
                >
                    ${escapeHTML(
                        t("noProjects")
                    )}
                </div>
            `;

    workspace.innerHTML = `
        ${errorHTML}

        <div class="white-card">

            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    gap:20px;
                    margin-bottom:24px;
                "
            >

                <div>

                    <span class="card-eyebrow">
                        ${escapeHTML(
                            t(
                                "governmentPortal"
                            )
                        )}
                    </span>

                    <h3>
                        ${escapeHTML(
                            t(
                                "reportsRequiringAttention"
                            )
                        )}
                    </h3>

                </div>

                <button
                    type="button"
                    class="secondary-btn"
                    id="refreshGovernmentData"
                >
                    <i class="fa-solid fa-rotate"></i>
                    ${escapeHTML(
                        t("retry")
                    )}
                </button>

            </div>

            <div
                style="
                    display:grid;
                    grid-template-columns:repeat(6,minmax(0,1fr));
                    gap:12px;
                    margin-bottom:24px;
                "
            >

                <div style="padding:16px;background:#f8fafc;border-radius:14px;">
                    <span>
                        ${escapeHTML(
                            t("pendingReports")
                        )}
                    </span>

                    <strong style="display:block;font-size:26px;margin-top:5px;">
                        ${pending}
                    </strong>
                </div>

                <div style="padding:16px;background:#f8fafc;border-radius:14px;">
                    <span>
                        ${escapeHTML(
                            t("reviewing")
                        )}
                    </span>

                    <strong style="display:block;font-size:26px;margin-top:5px;">
                        ${counts.reviewing}
                    </strong>
                </div>

                <div style="padding:16px;background:#f8fafc;border-radius:14px;">
                    <span>
                        ${escapeHTML(
                            t("verified")
                        )}
                    </span>

                    <strong style="display:block;font-size:26px;margin-top:5px;">
                        ${counts.verified}
                    </strong>
                </div>

                <div style="padding:16px;background:#f8fafc;border-radius:14px;">
                    <span>
                        ${escapeHTML(
                            t("inProgress")
                        )}
                    </span>

                    <strong style="display:block;font-size:26px;margin-top:5px;">
                        ${counts.in_progress}
                    </strong>
                </div>

                <div style="padding:16px;background:#f8fafc;border-radius:14px;">
                    <span>
                        ${escapeHTML(
                            t("completed")
                        )}
                    </span>

                    <strong style="display:block;font-size:26px;margin-top:5px;">
                        ${completedProjects}
                    </strong>
                </div>

                <div style="padding:16px;background:#f8fafc;border-radius:14px;">
                    <span>
                        ${escapeHTML(
                            t("contractors")
                        )}
                    </span>

                    <strong style="display:block;font-size:26px;margin-top:5px;">
                        ${contractors.length}
                    </strong>
                </div>

            </div>

            ${reportHTML}

        </div>

        <div class="white-card">

            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    margin-bottom:24px;
                "
            >

                <div>

                    <span class="card-eyebrow">
                        ${escapeHTML(
                            t(
                                "projectManagement"
                            )
                        )}
                    </span>

                    <h3>
                        ${escapeHTML(
                            t(
                                "projectManagement"
                            )
                        )}
                    </h3>

                </div>

                <span class="role-badge government-role">
                    ${activeProjects}
                    ${escapeHTML(
                        t("projectsActive")
                    )}
                </span>

            </div>

            ${projectHTML}

        </div>
    `;

    const refreshButton =
        document.getElementById(
            "refreshGovernmentData"
        );

    if (refreshButton) {

        refreshButton.addEventListener(
            "click",
            loadGovernmentData
        );
    }

    const retryButton =
        document.getElementById(
            "retryGovernmentData"
        );

    if (retryButton) {

        retryButton.addEventListener(
            "click",
            loadGovernmentData
        );
    }

    document
        .querySelectorAll(
            ".gov-review-live"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    async () => {

                        const report =
                            reports.find(
                                item =>
                                    String(
                                        item.report_id
                                    ) ===
                                    String(
                                        button.dataset.reportId
                                    )
                            );

                        if (report) {

                            await openGovernmentReview(
                                report
                            );
                        }
                    }
                );
            }
        );

    attachProjectButtons(
        projects,
        contractors
    );
}

function renderProjectRow(
    project
) {

    const status =
        String(
            project.status ||
            ""
        ).toLowerCase();

    let action =
        "";

    if (
        status ===
        "proposed"
    ) {

        action = `
            <button
                type="button"
                class="small-action project-status-action"
                data-project-id="${escapeHTML(
                    project.project_id
                )}"
                data-next-status="approved"
            >
                ${escapeHTML(
                    t("approveProject")
                )}
            </button>
        `;
    }

    if (
        status ===
        "approved"
    ) {

        action = `
            <button
                type="button"
                class="small-action project-status-action"
                data-project-id="${escapeHTML(
                    project.project_id
                )}"
                data-next-status="bidding"
            >
                ${escapeHTML(
                    t("openBidding")
                )}
            </button>
        `;
    }

    if (
        status ===
        "bidding"
    ) {

        action = `
            <button
                type="button"
                class="small-action contractor-select-action"
                data-project-id="${escapeHTML(
                    project.project_id
                )}"
            >
                ${escapeHTML(
                    t("viewContractors")
                )}
            </button>
        `;
    }

    if (
        status ===
        "assigned"
    ) {

        action = `
            <button
                type="button"
                class="small-action project-status-action"
                data-project-id="${escapeHTML(
                    project.project_id
                )}"
                data-next-status="in_progress"
            >
                ${escapeHTML(
                    t("startProject")
                )}
            </button>
        `;
    }

    if (
        status ===
        "in_progress"
    ) {

        action = `
            <button
                type="button"
                class="small-action project-status-action"
                data-project-id="${escapeHTML(
                    project.project_id
                )}"
                data-next-status="completed"
            >
                ${escapeHTML(
                    t("markCompleted")
                )}
            </button>
        `;
    }

    if (
        status ===
        "completed"
    ) {

        action = `
            <button
                type="button"
                class="small-action resolve-project-action"
                data-report-id="${escapeHTML(
                    project.report_id
                )}"
            >
                ${escapeHTML(
                    t("resolveReport")
                )}
            </button>
        `;
    }

    return `
        <div
            style="
                display:grid;
                grid-template-columns:minmax(0,2fr) 1fr 1fr 1fr auto;
                gap:14px;
                align-items:center;
                padding:18px 0;
                border-bottom:1px solid #edf0f3;
            "
        >

            <div>
                <strong>
                    ${escapeHTML(
                        project.title ||
                        t("project")
                    )}
                </strong>

                <span
                    style="
                        display:block;
                        font-size:13px;
                        opacity:.65;
                        margin-top:4px;
                    "
                >
                    ${escapeHTML(
                        project.project_id
                    )}
                    •
                    ${escapeHTML(
                        project.report_id
                    )}
                </span>
            </div>

            <div>
                <small>
                    ${escapeHTML(
                        t("projectStatus")
                    )}
                </small>

                <strong style="display:block;margin-top:4px;">
                    ${escapeHTML(
                        statusLabel(
                            status
                        )
                    )}
                </strong>
            </div>

            <div>
                <small>
                    ${escapeHTML(
                        t("contractor")
                    )}
                </small>

                <strong style="display:block;margin-top:4px;">
                    ${escapeHTML(
                        project.assigned_contractor_id ||
                        "—"
                    )}
                </strong>
            </div>

            <div>
                <small>
                    ${escapeHTML(
                        t("estimatedBudget")
                    )}
                </small>

                <strong style="display:block;margin-top:4px;">
                    ${
                        project.estimated_budget != null
                            ? escapeHTML(
                                String(
                                    project.estimated_budget
                                )
                            )
                            : "—"
                    }
                </strong>
            </div>

            <div>
                ${action}
            </div>

        </div>
    `;
}

function attachProjectButtons(
    projects,
    contractors
) {

    document
        .querySelectorAll(
            ".project-status-action"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    async () => {

                        await updateGovernmentProjectStatus(
                            button.dataset.projectId,
                            button.dataset.nextStatus
                        );
                    }
                );
            }
        );

    document
        .querySelectorAll(
            ".contractor-select-action"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        openContractorSelector(
                            button.dataset.projectId,
                            contractors
                        );
                    }
                );
            }
        );

    document
        .querySelectorAll(
            ".resolve-project-action"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    async () => {

                        await resolveGovernmentReport(
                            button.dataset.reportId
                        );
                    }
                );
            }
        );
}

async function openGovernmentReview(
    report
) {

    let currentReport =
        report;

    try {

        const data =
            await apiRequest(
                `/reports/${encodeURIComponent(
                    report.report_id
                )}`
            );

        currentReport =
            data.report ||
            report;

    } catch (error) {

        console.error(
            "Review load error:",
            error
        );
    }

    if (
        currentReport.status ===
        "submitted"
    ) {

        try {

            const data =
                await apiRequest(
                    `/reports/${encodeURIComponent(
                        currentReport.report_id
                    )}/review`,
                    {
                        method:
                            "PUT"
                    }
                );

            currentReport =
                data.report ||
                currentReport;

        } catch (error) {

            console.error(
                "Review status error:",
                error
            );
        }
    }

    showGovernmentReviewModal(
        currentReport
    );
}

function showGovernmentReviewModal(
    report
) {

    const previous =
        document.getElementById(
            "governmentReviewModal"
        );

    if (previous) {
        previous.remove();
    }

    const modal =
        document.createElement(
            "div"
        );

    modal.id =
        "governmentReviewModal";

    modal.innerHTML = `
        <div
            data-review-backdrop
            style="
                position:fixed;
                inset:0;
                background:rgba(0,0,0,.55);
                display:flex;
                align-items:center;
                justify-content:center;
                padding:20px;
                z-index:10000;
            "
        >

            <div
                style="
                    width:min(760px,100%);
                    max-height:90vh;
                    overflow:auto;
                    background:white;
                    border-radius:20px;
                    padding:28px;
                "
            >

                <div
                    style="
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        margin-bottom:24px;
                    "
                >

                    <div>

                        <span class="card-eyebrow">
                            ${escapeHTML(
                                t("reviewReport")
                            )}
                        </span>

                        <h2>
                            ${escapeHTML(
                                report.report_id
                            )}
                        </h2>

                    </div>

                    <button
                        type="button"
                        id="closeGovernmentReview"
                        style="
                            border:0;
                            background:none;
                            font-size:22px;
                            cursor:pointer;
                        "
                    >
                        <i class="fa-solid fa-xmark"></i>
                    </button>

                </div>

                <div
                    style="
                        display:grid;
                        grid-template-columns:1fr 1fr;
                        gap:14px;
                    "
                >

                    ${reviewField(
                        t("reportStatus"),
                        statusLabel(
                            report.status
                        )
                    )}

                    ${reviewField(
                        t("priority"),
                        priorityLabel(
                            report.priority
                        )
                    )}

                    ${reviewField(
                        t("citizen"),
                        report.citizen_id ||
                        "—"
                    )}

                    ${reviewField(
                        t("location"),
                        report.location?.address ||
                        "—"
                    )}

                    ${reviewField(
                        t("department"),
                        report.department ||
                        "—"
                    )}

                    ${reviewField(
                        t("reportId"),
                        report.report_id
                    )}

                    <div
                        style="
                            grid-column:1/-1;
                            background:#f8fafc;
                            padding:16px;
                            border-radius:14px;
                        "
                    >

                        <small>
                            ${escapeHTML(
                                t("description")
                            )}
                        </small>

                        <p>
                            ${escapeHTML(
                                report.description ||
                                "—"
                            )}
                        </p>

                    </div>

                </div>

                <div
                    style="
                        display:flex;
                        flex-wrap:wrap;
                        gap:10px;
                        margin-top:24px;
                    "
                >
                    ${getReportActionHTML(
                        report
                    )}
                </div>

            </div>

        </div>
    `;

    document.body.appendChild(
        modal
    );

    document
        .getElementById(
            "closeGovernmentReview"
        )
        .addEventListener(
            "click",
            () =>
                modal.remove()
        );

    modal
        .querySelector(
            "[data-review-backdrop]"
        )
        .addEventListener(
            "click",
            event => {

                if (
                    event.target.hasAttribute(
                        "data-review-backdrop"
                    )
                ) {

                    modal.remove();
                }
            }
        );

    attachGovernmentReviewActions(
        modal,
        report
    );
}

function reviewField(
    label,
    value
) {

    return `
        <div
            style="
                background:#f8fafc;
                padding:16px;
                border-radius:14px;
            "
        >

            <small
                style="
                    display:block;
                    opacity:.6;
                    margin-bottom:6px;
                "
            >
                ${escapeHTML(
                    label
                )}
            </small>

            <strong>
                ${escapeHTML(
                    String(
                        value
                    )
                )}
            </strong>

        </div>
    `;
}

function getReportActionHTML(
    report
) {

    const status =
        String(
            report.status ||
            ""
        ).toLowerCase();

    let html =
        "";

    if (
        status ===
            "submitted" ||
        status ===
            "reviewing"
    ) {

        html += `
            <button
                type="button"
                class="primary-btn government-review-action"
                data-action="verify"
            >
                <i class="fa-solid fa-check"></i>
                ${escapeHTML(
                    t("verify")
                )}
            </button>

            <button
                type="button"
                class="secondary-btn government-review-action"
                data-action="reject"
            >
                <i class="fa-solid fa-xmark"></i>
                ${escapeHTML(
                    t("reject")
                )}
            </button>

            <button
                type="button"
                class="secondary-btn government-review-action"
                data-action="information"
            >
                <i class="fa-solid fa-message"></i>
                ${escapeHTML(
                    t("requestInformation")
                )}
            </button>
        `;
    }

    if (
        status ===
        "verified"
    ) {

        html += `
            <button
                type="button"
                class="secondary-btn government-review-action"
                data-action="priority"
            >
                <i class="fa-solid fa-flag"></i>
                ${escapeHTML(
                    t("changePriority")
                )}
            </button>

            <button
                type="button"
                class="secondary-btn government-review-action"
                data-action="department"
            >
                <i class="fa-solid fa-building"></i>
                ${escapeHTML(
                    t("assignDepartment")
                )}
            </button>

            <button
                type="button"
                class="primary-btn government-review-action"
                data-action="project"
            >
                <i class="fa-solid fa-diagram-project"></i>
                ${escapeHTML(
                    t("createProject")
                )}
            </button>
        `;
    }

    if (
        status ===
        "assigned"
    ) {

        html += `
            <button
                type="button"
                class="primary-btn government-review-action"
                data-action="progress"
            >
                <i class="fa-solid fa-play"></i>
                ${escapeHTML(
                    t("startProject")
                )}
            </button>
        `;
    }

    if (
        status ===
        "in_progress"
    ) {

        html += `
            <button
                type="button"
                class="primary-btn government-review-action"
                data-action="resolve"
            >
                <i class="fa-solid fa-check-double"></i>
                ${escapeHTML(
                    t("resolveReport")
                )}
            </button>
        `;
    }

    return html;
}

function attachGovernmentReviewActions(
    modal,
    report
) {

    modal
        .querySelectorAll(
            ".government-review-action"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    async () => {

                        const action =
                            button.dataset.action;

                        try {

                            if (
                                action ===
                                "verify"
                            ) {

                                await apiRequest(
                                    `/reports/${encodeURIComponent(
                                        report.report_id
                                    )}/verify`,
                                    {
                                        method:
                                            "PUT"
                                    }
                                );

                                showToast(
                                    t("reportVerified"),
                                    t(
                                        "reportVerifiedSuccessfully"
                                    )
                                );
                            }

                            if (
                                action ===
                                "reject"
                            ) {

                                const reason =
                                    window.prompt(
                                        t(
                                            "rejectReason"
                                        )
                                    );

                                if (
                                    reason &&
                                    reason.trim()
                                ) {

                                    await apiRequest(
                                        `/reports/${encodeURIComponent(
                                            report.report_id
                                        )}/reject`,
                                        {
                                            method:
                                                "PUT",

                                            body:
                                                JSON.stringify({
                                                    reason:
                                                        reason.trim()
                                                })
                                        }
                                    );

                                    showToast(
                                        t(
                                            "reportRejected"
                                        ),
                                        t(
                                            "reportRejectedSuccessfully"
                                        )
                                    );
                                }
                            }

                            if (
                                action ===
                                "information"
                            ) {

                                const message =
                                    window.prompt(
                                        t(
                                            "informationRequest"
                                        )
                                    );

                                if (
                                    message &&
                                    message.trim()
                                ) {

                                    await apiRequest(
                                        `/reports/${encodeURIComponent(
                                            report.report_id
                                        )}/request-information`,
                                        {
                                            method:
                                                "PUT",

                                            body:
                                                JSON.stringify({
                                                    message:
                                                        message.trim()
                                                })
                                        }
                                    );

                                    showToast(
                                        t(
                                            "informationRequested"
                                        ),
                                        t(
                                            "informationRequestedSuccessfully"
                                        )
                                    );
                                }
                            }

                            if (
                                action ===
                                "priority"
                            ) {

                                const priority =
                                    window.prompt(
                                        "Enter priority: low, medium, high, critical"
                                    );

                                if (
                                    priority &&
                                    [
                                        "low",
                                        "medium",
                                        "high",
                                        "critical"
                                    ].includes(
                                        priority
                                            .toLowerCase()
                                            .trim()
                                    )
                                ) {

                                    await apiRequest(
                                        `/reports/${encodeURIComponent(
                                            report.report_id
                                        )}/priority`,
                                        {
                                            method:
                                                "PUT",

                                            body:
                                                JSON.stringify({
                                                    priority:
                                                        priority
                                                            .toLowerCase()
                                                            .trim()
                                                })
                                        }
                                    );

                                    showToast(
                                        t(
                                            "statusUpdated"
                                        ),
                                        t(
                                            "actionCompleted"
                                        )
                                    );
                                }
                            }

                            if (
                                action ===
                                "department"
                            ) {

                                const department =
                                    window.prompt(
                                        "Enter department"
                                    );

                                if (
                                    department &&
                                    department.trim()
                                ) {

                                    await apiRequest(
                                        `/reports/${encodeURIComponent(
                                            report.report_id
                                        )}/department`,
                                        {
                                            method:
                                                "PUT",

                                            body:
                                                JSON.stringify({
                                                    department:
                                                        department.trim()
                                                })
                                        }
                                    );

                                    showToast(
                                        t(
                                            "departmentAssigned"
                                        ),
                                        t(
                                            "departmentAssignedSuccessfully"
                                        )
                                    );
                                }
                            }

                            if (
                                action ===
                                "project"
                            ) {

                                await createGovernmentProject(
                                    report
                                );
                            }

                            if (
                                action ===
                                "progress"
                            ) {

                                await updateGovernmentReportStatus(
                                    report,
                                    "in_progress"
                                );
                            }

                            if (
                                action ===
                                "resolve"
                            ) {

                                await resolveGovernmentReport(
                                    report.report_id
                                );
                            }

                        } catch (error) {

                            showToast(
                                t(
                                    "operationFailed"
                                ),
                                error.message
                            );
                        }

                        modal.remove();

                        await loadGovernmentData();
                    }
                );
            }
        );
}

async function createGovernmentProject(
    report
) {

    const existing =
        await loadGovernmentProjects();

    if (
        existing.some(
            project =>
                project.report_id ===
                report.report_id
        )
    ) {

        showToast(
            t("operationFailed"),
            "A project already exists for this report."
        );

        return;
    }

    const title =
        window.prompt(
            t("project"),
            report.description ||
            "Civic Project"
        );

    if (
        !title ||
        !title.trim()
    ) {
        return;
    }

    const budgetInput =
        window.prompt(
            t("estimatedBudget"),
            "0"
        );

    const budget =
        budgetInput &&
        budgetInput.trim()
            ? Number(
                budgetInput.trim()
            )
            : null;

    if (
        budget !== null &&
        (
            Number.isNaN(
                budget
            ) ||
            budget < 0
        )
    ) {

        showToast(
            t("operationFailed"),
            "Invalid budget."
        );

        return;
    }

    await apiRequest(
        "/projects/",
        {
            method:
                "POST",

            body:
                JSON.stringify({
                    project_id:
                        `PRJ-${Date.now()}`,

                    report_id:
                        report.report_id,

                    title:
                        title.trim(),

                    description:
                        report.description ||
                        title.trim(),

                    estimated_budget:
                        budget,

                    status:
                        "proposed",

                    assigned_contractor_id:
                        null
                })
        }
    );

    showToast(
        t("projectCreated"),
        t(
            "projectCreatedSuccessfully"
        )
    );
}

async function updateGovernmentReportStatus(
    report,
    status
) {

    await apiRequest(
        `/reports/${encodeURIComponent(
            report.report_id
        )}/status?status=${encodeURIComponent(
            status
        )}`,
        {
            method:
                "PUT"
        }
    );

    showToast(
        t("statusUpdated"),
        statusLabel(
            status
        )
    );
}

async function updateGovernmentProjectStatus(
    projectId,
    status
) {

    try {

        await apiRequest(
            `/projects/${encodeURIComponent(
                projectId
            )}/status?status=${encodeURIComponent(
                status
            )}`,
            {
                method:
                    "PUT"
            }
        );

        showToast(
            t("statusUpdated"),
            statusLabel(
                status
            )
        );

        await loadGovernmentData();

    } catch (error) {

        showToast(
            t("operationFailed"),
            error.message
        );
    }
}

function openContractorSelector(
    projectId,
    contractors
) {

    const previous =
        document.getElementById(
            "contractorModal"
        );

    if (previous) {
        previous.remove();
    }

    const modal =
        document.createElement(
            "div"
        );

    modal.id =
        "contractorModal";

    const rows =
        contractors.length
            ? contractors
                .map(
                    contractor =>
                        `
                        <div
                            style="
                                display:grid;
                                grid-template-columns:2fr 1fr 1fr auto;
                                gap:14px;
                                align-items:center;
                                padding:14px 0;
                                border-bottom:1px solid #edf0f3;
                            "
                        >

                            <div>

                                <strong>
                                    ${escapeHTML(
                                        contractor.company_name ||
                                        contractor.contractor_id
                                    )}
                                </strong>

                                <small
                                    style="
                                        display:block;
                                        opacity:.65;
                                    "
                                >
                                    ${escapeHTML(
                                        contractor.contractor_id ||
                                        ""
                                    )}
                                </small>

                            </div>

                            <div>
                                ${escapeHTML(
                                    t("rating")
                                )}:
                                ${escapeHTML(
                                    String(
                                        contractor.rating ??
                                        "—"
                                    )
                                )}
                            </div>

                            <div>
                                ${escapeHTML(
                                    t(
                                        "completedProjects"
                                    )
                                )}:
                                ${escapeHTML(
                                    String(
                                        contractor.completed_projects ??
                                        "—"
                                    )
                                )}
                            </div>

                            <button
                                type="button"
                                class="small-action assign-contractor-button"
                                data-contractor-id="${escapeHTML(
                                    contractor.contractor_id
                                )}"
                            >
                                ${escapeHTML(
                                    t(
                                        "assignContractor"
                                    )
                                )}
                            </button>

                        </div>
                        `
                )
                .join("")
            : `
                <div>
                    ${escapeHTML(
                        t(
                            "noContractors"
                        )
                    )}
                </div>
            `;

    modal.innerHTML = `
        <div
            data-contractor-backdrop
            style="
                position:fixed;
                inset:0;
                background:rgba(0,0,0,.55);
                display:flex;
                align-items:center;
                justify-content:center;
                padding:20px;
                z-index:10001;
            "
        >

            <div
                style="
                    width:min(850px,100%);
                    max-height:90vh;
                    overflow:auto;
                    background:white;
                    border-radius:20px;
                    padding:28px;
                "
            >

                <div
                    style="
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        margin-bottom:20px;
                    "
                >

                    <div>

                        <span class="card-eyebrow">
                            ${escapeHTML(
                                t(
                                    "contractors"
                                )
                            )}
                        </span>

                        <h2>
                            ${escapeHTML(
                                projectId
                            )}
                        </h2>

                    </div>

                    <button
                        type="button"
                        id="closeContractorModal"
                        style="
                            border:0;
                            background:none;
                            font-size:22px;
                            cursor:pointer;
                        "
                    >
                        <i class="fa-solid fa-xmark"></i>
                    </button>

                </div>

                ${rows}

            </div>

        </div>
    `;

    document.body.appendChild(
        modal
    );

    document
        .getElementById(
            "closeContractorModal"
        )
        .addEventListener(
            "click",
            () =>
                modal.remove()
        );

    modal
        .querySelector(
            "[data-contractor-backdrop]"
        )
        .addEventListener(
            "click",
            event => {

                if (
                    event.target.hasAttribute(
                        "data-contractor-backdrop"
                    )
                ) {

                    modal.remove();
                }
            }
        );

    modal
        .querySelectorAll(
            ".assign-contractor-button"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    async () => {

                        await assignGovernmentContractor(
                            projectId,
                            button.dataset
                                .contractorId
                        );

                        modal.remove();

                        await loadGovernmentData();
                    }
                );
            }
        );
}

async function assignGovernmentContractor(
    projectId,
    contractorId
) {

    try {

        await apiRequest(
            `/projects/${encodeURIComponent(
                projectId
            )}/assign-contractor?contractor_id=${encodeURIComponent(
                contractorId
            )}`,
            {
                method:
                    "PUT"
            }
        );

        showToast(
            t("contractorAssigned"),
            t(
                "contractorAssignedSuccessfully"
            )
        );

    } catch (error) {

        showToast(
            t("operationFailed"),
            error.message
        );
    }
}

async function resolveGovernmentReport(
    reportId
) {

    try {

        await apiRequest(
            `/reports/${encodeURIComponent(
                reportId
            )}/status?status=resolved`,
            {
                method:
                    "PUT"
            }
        );

        showToast(
            t("reportResolved"),
            t(
                "reportResolvedSuccessfully"
            )
        );

        await loadGovernmentData();

    } catch (error) {

        showToast(
            t("operationFailed"),
            error.message
        );
    }
}

function escapeHTML(
    value
) {

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
   ADMIN PORTAL
===================================================== */

let currentAdminPanel =
    null;

let adminUsersCache =
    [];

let adminSystemDataCache = {
    users: [],
    reports: [],
    projects: [],
    contractors: [],
    decisions: []
};

function initializeAdminPortal() {

    if (
        !currentUser ||
        normalizeRole(
            currentUser.role
        ) !==
        "admin"
    ) {
        return;
    }

    attachAdminCardButtons();

    showAdminOverview();
}

function attachAdminCardButtons() {

    const adminCards =
        document.querySelectorAll(
            "#adminPage .admin-card"
        );

    adminCards.forEach(
        (card, index) => {

            const button =
                card.querySelector(
                    "button"
                );

            if (!button) {
                return;
            }

            if (
                button.dataset
                    .adminBound ===
                "true"
            ) {
                return;
            }

            button.dataset.adminBound =
                "true";

            if (index === 0) {

                button.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        openAdminUsers();
                    }
                );

            } else if (
                index === 1
            ) {

                button.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        openAdminRoles();
                    }
                );

            } else if (
                index === 2
            ) {

                button.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        openAdminCities();
                    }
                );

            } else if (
                index === 3
            ) {

                button.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        openAdminSystemData();
                    }
                );
            }
        }
    );
}

function ensureAdminWorkspace() {

    const page =
        document.getElementById(
            "adminPage"
        );

    if (!page) {
        return null;
    }

    const content =
        page.querySelector(
            ".content"
        );

    if (!content) {
        return null;
    }

    let workspace =
        document.getElementById(
            "adminDynamicWorkspace"
        );

    if (!workspace) {

        workspace =
            document.createElement(
                "div"
            );

        workspace.id =
            "adminDynamicWorkspace";

        content.appendChild(
            workspace
        );
    }

    return workspace;
}

function showAdminOverview() {

    const workspace =
        ensureAdminWorkspace();

    if (!workspace) {
        return;
    }

    currentAdminPanel =
        "overview";

    workspace.innerHTML = `
        <div
            class="white-card"
            style="margin-top:20px;"
        >

            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    gap:20px;
                "
            >

                <div>
                    <span class="card-eyebrow">
                        ${escapeHTML(
                            t(
                                "systemAdministration"
                            )
                        )}
                    </span>

                    <h3>
                        ${escapeHTML(
                            t(
                                "adminSystemData"
                            )
                        )}
                    </h3>

                    <p>
                        ${escapeHTML(
                            t(
                                "adminDescription"
                            )
                        )}
                    </p>
                </div>

                <button
                    type="button"
                    class="secondary-btn"
                    id="adminRefreshOverview"
                >
                    <i class="fa-solid fa-rotate"></i>
                    ${escapeHTML(
                        t("refreshData")
                    )}
                </button>

            </div>

            <div
                id="adminOverviewStats"
                style="
                    margin-top:24px;
                    display:grid;
                    grid-template-columns:repeat(4,minmax(0,1fr));
                    gap:14px;
                "
            >

                <div
                    style="
                        padding:20px;
                        background:#f8fafc;
                        border-radius:14px;
                    "
                >
                    <span>
                        ${escapeHTML(
                            t(
                                "totalUsers"
                            )
                        )}
                    </span>

                    <strong
                        id="adminUserCount"
                        style="
                            display:block;
                            font-size:28px;
                            margin-top:8px;
                        "
                    >
                        —
                    </strong>
                </div>

                <div
                    style="
                        padding:20px;
                        background:#f8fafc;
                        border-radius:14px;
                    "
                >
                    <span>
                        ${escapeHTML(
                            t(
                                "totalReportsAdmin"
                            )
                        )}
                    </span>

                    <strong
                        id="adminReportCount"
                        style="
                            display:block;
                            font-size:28px;
                            margin-top:8px;
                        "
                    >
                        —
                    </strong>
                </div>

                <div
                    style="
                        padding:20px;
                        background:#f8fafc;
                        border-radius:14px;
                    "
                >
                    <span>
                        ${escapeHTML(
                            t(
                                "totalProjects"
                            )
                        )}
                    </span>

                    <strong
                        id="adminProjectCount"
                        style="
                            display:block;
                            font-size:28px;
                            margin-top:8px;
                        "
                    >
                        —
                    </strong>
                </div>

                <div
                    style="
                        padding:20px;
                        background:#f8fafc;
                        border-radius:14px;
                    "
                >
                    <span>
                        ${escapeHTML(
                            t(
                                "totalContractors"
                            )
                        )}
                    </span>

                    <strong
                        id="adminContractorCount"
                        style="
                            display:block;
                            font-size:28px;
                            margin-top:8px;
                        "
                    >
                        —
                    </strong>
                </div>

            </div>

        </div>
    `;

    document
        .getElementById(
            "adminRefreshOverview"
        )
        .addEventListener(
            "click",
            openAdminSystemData
        );

    loadAdminSystemCounts();
}

async function loadAdminSystemCounts() {

    try {

        const requests =
            await Promise.allSettled([
                apiRequest(
                    "/users/"
                ),

                apiRequest(
                    "/reports"
                ),

                apiRequest(
                    "/projects/"
                ),

                apiRequest(
                    "/contractors/"
                )
            ]);

        const users =
            requests[0].status ===
            "fulfilled"
                ? requests[0].value
                : {};

        const reports =
            requests[1].status ===
            "fulfilled"
                ? requests[1].value
                : {};

        const projects =
            requests[2].status ===
            "fulfilled"
                ? requests[2].value
                : {};

        const contractors =
            requests[3].status ===
            "fulfilled"
                ? requests[3].value
                : {};

        const userList =
            Array.isArray(
                users.users
            )
                ? users.users
                : [];

        const reportList =
            Array.isArray(
                reports.reports
            )
                ? reports.reports
                : [];

        const projectList =
            Array.isArray(
                projects.projects
            )
                ? projects.projects
                : [];

        const contractorList =
            Array.isArray(
                contractors.contractors
            )
                ? contractors.contractors
                : [];

        adminSystemDataCache.users =
            userList;

        adminSystemDataCache.reports =
            reportList;

        adminSystemDataCache.projects =
            projectList;

        adminSystemDataCache.contractors =
            contractorList;

        const userCount =
            document.getElementById(
                "adminUserCount"
            );

        const reportCount =
            document.getElementById(
                "adminReportCount"
            );

        const projectCount =
            document.getElementById(
                "adminProjectCount"
            );

        const contractorCount =
            document.getElementById(
                "adminContractorCount"
            );

        if (userCount) {
            userCount.textContent =
                userList.length;
        }

        if (reportCount) {
            reportCount.textContent =
                reportList.length;
        }

        if (projectCount) {
            projectCount.textContent =
                projectList.length;
        }

        if (contractorCount) {
            contractorCount.textContent =
                contractorList.length;
        }

    } catch (error) {

        console.error(
            "Admin system count error:",
            error
        );

        showToast(
            t(
                "operationFailed"
            ),
            error.message
        );
    }
}

async function openAdminUsers() {

    const workspace =
        ensureAdminWorkspace();

    if (!workspace) {
        return;
    }

    currentAdminPanel =
        "users";

    workspace.innerHTML = `
        <div
            class="white-card"
            style="margin-top:20px;"
        >

            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    gap:20px;
                    margin-bottom:22px;
                "
            >

                <div>
                    <span class="card-eyebrow">
                        ${escapeHTML(
                            t(
                                "adminUsers"
                            )
                        )}
                    </span>

                    <h3>
                        ${escapeHTML(
                            t("users")
                        )}
                    </h3>
                </div>

                <button
                    type="button"
                    class="secondary-btn"
                    id="adminUsersBack"
                >
                    <i class="fa-solid fa-arrow-left"></i>
                    ${escapeHTML(
                        t("close")
                    )}
                </button>

            </div>

            <div
                style="
                    display:flex;
                    gap:12px;
                    margin-bottom:20px;
                "
            >

                <div
                    style="
                        flex:1;
                        position:relative;
                    "
                >

                    <input
                        id="adminUserSearch"
                        type="text"
                        placeholder="${escapeHTML(
                            t("searchUsers")
                        )}"
                        style="
                            width:100%;
                            padding:12px 14px;
                            border:1px solid #e5e7eb;
                            border-radius:12px;
                        "
                    >

                </div>

                <button
                    type="button"
                    class="secondary-btn"
                    id="adminUsersRefresh"
                >
                    <i class="fa-solid fa-rotate"></i>
                    ${escapeHTML(
                        t("refreshData")
                    )}
                </button>

            </div>

            <div id="adminUsersContainer">
                <div
                    style="
                        padding:30px;
                        text-align:center;
                    "
                >
                    <i class="fa-solid fa-spinner fa-spin"></i>
                    ${escapeHTML(
                        t("loading")
                    )}
                </div>
            </div>

        </div>
    `;

    document
        .getElementById(
            "adminUsersBack"
        )
        .addEventListener(
            "click",
            showAdminOverview
        );

    document
        .getElementById(
            "adminUsersRefresh"
        )
        .addEventListener(
            "click",
            loadAdminUsers
        );

    document
        .getElementById(
            "adminUserSearch"
        )
        .addEventListener(
            "input",
            filterAdminUsers
        );

    await loadAdminUsers();
}

async function loadAdminUsers() {

    const container =
        document.getElementById(
            "adminUsersContainer"
        );

    if (!container) {
        return;
    }

    container.innerHTML = `
        <div
            style="
                padding:30px;
                text-align:center;
            "
        >
            <i class="fa-solid fa-spinner fa-spin"></i>
            ${escapeHTML(
                t("loading")
            )}
        </div>
    `;

    try {

        const data =
            await apiRequest(
                "/users/"
            );

        adminUsersCache =
            Array.isArray(
                data.users
            )
                ? data.users
                : [];

        renderAdminUsers(
            adminUsersCache
        );

    } catch (error) {

        console.error(
            "Admin users error:",
            error
        );

        container.innerHTML = `
            <div
                style="
                    padding:30px;
                    text-align:center;
                "
            >

                <strong>
                    ${escapeHTML(
                        t(
                            "operationFailed"
                        )
                    )}
                </strong>

                <p>
                    ${escapeHTML(
                        error.message
                    )}
                </p>

                <button
                    type="button"
                    class="secondary-btn"
                    id="retryAdminUsers"
                >
                    ${escapeHTML(
                        t("retry")
                    )}
                </button>

            </div>
        `;

        document
            .getElementById(
                "retryAdminUsers"
            )
            ?.addEventListener(
                "click",
                loadAdminUsers
            );
    }
}

function filterAdminUsers() {

    const input =
        document.getElementById(
            "adminUserSearch"
        );

    const search =
        input
            ? input.value
                .toLowerCase()
                .trim()
            : "";

    const filtered =
        adminUsersCache.filter(
            user => {

                const text =
                    [
                        user.user_id,
                        user.name,
                        user.email,
                        user.role
                    ]
                        .filter(Boolean)
                        .join(" ")
                        .toLowerCase();

                return (
                    !search ||
                    text.includes(
                        search
                    )
                );
            }
        );

    renderAdminUsers(
        filtered
    );
}

function renderAdminUsers(
    users
) {

    const container =
        document.getElementById(
            "adminUsersContainer"
        );

    if (!container) {
        return;
    }

    if (!users.length) {

        container.innerHTML = `
            <div
                style="
                    padding:30px;
                    text-align:center;
                    opacity:.65;
                "
            >
                ${escapeHTML(
                    t("noUsers")
                )}
            </div>
        `;

        return;
    }

    container.innerHTML = `
        <div
            style="
                display:grid;
                grid-template-columns:1fr 1fr 1fr auto;
                gap:12px;
                font-weight:700;
                padding:12px 0;
                border-bottom:1px solid #e5e7eb;
            "
        >
            <span>
                ${escapeHTML(
                    t("userId")
                )}
            </span>

            <span>
                ${escapeHTML(
                    t("users")
                )}
            </span>

            <span>
                ${escapeHTML(
                    t("selectRole")
                )}
            </span>

            <span>
                ${escapeHTML(
                    t("details")
                )}
            </span>
        </div>

        ${users
            .map(
                user => {

                    const isCurrent =
                        currentUser &&
                        String(
                            currentUser.user_id
                        ) ===
                        String(
                            user.user_id
                        );

                    return `
                        <div
                            style="
                                display:grid;
                                grid-template-columns:1fr 1fr 1fr auto;
                                gap:12px;
                                align-items:center;
                                padding:16px 0;
                                border-bottom:1px solid #edf0f3;
                            "
                        >

                            <div>
                                <strong>
                                    ${escapeHTML(
                                        user.user_id
                                    )}
                                </strong>

                                <small
                                    style="
                                        display:block;
                                        opacity:.6;
                                        margin-top:4px;
                                    "
                                >
                                    ${escapeHTML(
                                        user.email
                                    )}
                                </small>
                            </div>

                            <div>
                                ${escapeHTML(
                                    user.name
                                )}
                            </div>

                            <div>

                                <select
                                    class="admin-role-select"
                                    data-user-id="${escapeHTML(
                                        user.user_id
                                    )}"
                                    ${
                                        isCurrent
                                            ? "disabled"
                                            : ""
                                    }
                                    style="
                                        width:100%;
                                        padding:9px 10px;
                                        border:1px solid #e5e7eb;
                                        border-radius:10px;
                                    "
                                >

                                    <option
                                        value="citizen"
                                        ${
                                            user.role ===
                                            "citizen"
                                                ? "selected"
                                                : ""
                                        }
                                    >
                                        Citizen
                                    </option>

                                    <option
                                        value="government"
                                        ${
                                            user.role ===
                                            "government"
                                                ? "selected"
                                                : ""
                                        }
                                    >
                                        Government
                                    </option>

                                    <option
                                        value="admin"
                                        ${
                                            user.role ===
                                            "admin"
                                                ? "selected"
                                                : ""
                                        }
                                    >
                                        Admin
                                    </option>

                                </select>

                            </div>

                            <button
                                type="button"
                                class="small-action admin-save-role"
                                data-user-id="${escapeHTML(
                                    user.user_id
                                )}"
                                ${
                                    isCurrent
                                        ? "disabled"
                                        : ""
                                }
                            >
                                ${escapeHTML(
                                    t("saveRole")
                                )}
                            </button>

                        </div>
                    `;
                }
            )
            .join("")}
    `;

    container
        .querySelectorAll(
            ".admin-save-role"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    async () => {

                        await updateAdminUserRole(
                            button.dataset
                                .userId
                        );
                    }
                );
            }
        );
}

async function updateAdminUserRole(
    userId
) {

    if (
        !currentUser ||
        currentUser.user_id ===
        userId
    ) {

        showToast(
            t("operationFailed"),
            t(
                "cannotChangeOwnRole"
            )
        );

        return;
    }

    const select =
        document.querySelector(
            `.admin-role-select[data-user-id="${CSS.escape(
                userId
            )}"]`
        );

    if (!select) {
        return;
    }

    const role =
        select.value;

    try {

        await apiRequest(
            `/users/${encodeURIComponent(
                userId
            )}/role`,
            {
                method:
                    "PUT",

                body:
                    JSON.stringify({
                        role
                    })
            }
        );

        showToast(
            t("userRoleUpdated"),
            t(
                "userRoleUpdatedSuccessfully"
            )
        );

        await loadAdminUsers();

    } catch (error) {

        showToast(
            t("operationFailed"),
            error.message
        );
    }
}

function openAdminRoles() {

    const workspace =
        ensureAdminWorkspace();

    if (!workspace) {
        return;
    }

    currentAdminPanel =
        "roles";

    const roles = [
        {
            key:
                "citizen",

            title:
                "Citizen",

            icon:
                "fa-user",

            permissions: [
                "permissionSubmitReports",
                "permissionViewOwnReports",
                "permissionIssueMap"
            ]
        },

        {
            key:
                "government",

            title:
                "Government",

            icon:
                "fa-building-columns",

            permissions: [
                "permissionReviewReports",
                "permissionVerifyReports",
                "permissionManageProjects",
                "permissionManageContractors"
            ]
        },

        {
            key:
                "admin",

            title:
                "Administrator",

            icon:
                "fa-shield-halved",

            permissions: [
                "permissionManageUsers",
                "permissionManageRoles",
                "permissionManageSystem"
            ]
        }
    ];

    workspace.innerHTML = `
        <div
            class="white-card"
            style="margin-top:20px;"
        >

            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    margin-bottom:24px;
                "
            >

                <div>

                    <span class="card-eyebrow">
                        ${escapeHTML(
                            t(
                                "adminRoles"
                            )
                        )}
                    </span>

                    <h3>
                        ${escapeHTML(
                            t(
                                "rolesPermissions"
                            )
                        )}
                    </h3>

                </div>

                <button
                    type="button"
                    class="secondary-btn"
                    id="adminRolesBack"
                >
                    <i class="fa-solid fa-arrow-left"></i>
                    ${escapeHTML(
                        t("close")
                    )}
                </button>

            </div>

            <div
                style="
                    display:grid;
                    grid-template-columns:repeat(3,minmax(0,1fr));
                    gap:18px;
                "
            >

                ${roles
                    .map(
                        role => `
                            <div
                                style="
                                    padding:22px;
                                    background:#f8fafc;
                                    border-radius:16px;
                                    border:1px solid #edf0f3;
                                "
                            >

                                <div
                                    style="
                                        width:46px;
                                        height:46px;
                                        border-radius:14px;
                                        display:flex;
                                        align-items:center;
                                        justify-content:center;
                                        background:white;
                                        margin-bottom:14px;
                                    "
                                >
                                    <i class="fa-solid ${role.icon}"></i>
                                </div>

                                <h3>
                                    ${escapeHTML(
                                        role.title
                                    )}
                                </h3>

                                <div
                                    style="
                                        margin-top:15px;
                                    "
                                >
                                    ${role.permissions
                                        .map(
                                            permission =>
                                                `
                                                <div
                                                    style="
                                                        display:flex;
                                                        gap:8px;
                                                        align-items:center;
                                                        margin:10px 0;
                                                        font-size:14px;
                                                    "
                                                >
                                                    <i
                                                        class="fa-solid fa-check"
                                                        style="opacity:.7;"
                                                    ></i>

                                                    <span>
                                                        ${escapeHTML(
                                                            t(
                                                                permission
                                                            )
                                                        )}
                                                    </span>
                                                </div>
                                                `
                                        )
                                        .join("")}
                                </div>

                            </div>
                        `
                    )
                    .join("")}

            </div>

        </div>
    `;

    document
        .getElementById(
            "adminRolesBack"
        )
        .addEventListener(
            "click",
            showAdminOverview
        );
}

function openAdminCities() {

    const workspace =
        ensureAdminWorkspace();

    if (!workspace) {
        return;
    }

    currentAdminPanel =
        "cities";

    workspace.innerHTML = `
        <div
            class="white-card"
            style="margin-top:20px;"
        >

            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    gap:20px;
                    margin-bottom:22px;
                "
            >

                <div>

                    <span class="card-eyebrow">
                        ${escapeHTML(
                            t(
                                "adminCities"
                            )
                        )}
                    </span>

                    <h3>
                        ${escapeHTML(
                            t("cities")
                        )}
                    </h3>

                </div>

                <button
                    type="button"
                    class="secondary-btn"
                    id="adminCitiesBack"
                >
                    <i class="fa-solid fa-arrow-left"></i>
                    ${escapeHTML(
                        t("close")
                    )}
                </button>

            </div>

            <div
                style="
                    display:flex;
                    gap:12px;
                    align-items:center;
                    margin-bottom:20px;
                "
            >

                <input
                    id="adminCitySearch"
                    type="text"
                    placeholder="${escapeHTML(
                        t("searchCities")
                    )}"
                    style="
                        flex:1;
                        padding:12px 14px;
                        border:1px solid #e5e7eb;
                        border-radius:12px;
                    "
                >

                <span
                    id="adminCityCount"
                    class="role-badge"
                >
                    ${pakistanCities.length}
                </span>

            </div>

            <div
                id="adminCityGrid"
                style="
                    display:grid;
                    grid-template-columns:repeat(4,minmax(0,1fr));
                    gap:10px;
                "
            ></div>

        </div>
    `;

    document
        .getElementById(
            "adminCitiesBack"
        )
        .addEventListener(
            "click",
            showAdminOverview
        );

    document
        .getElementById(
            "adminCitySearch"
        )
        .addEventListener(
            "input",
            renderAdminCities
        );

    renderAdminCities();
}

function renderAdminCities() {

    const searchInput =
        document.getElementById(
            "adminCitySearch"
        );

    const grid =
        document.getElementById(
            "adminCityGrid"
        );

    const count =
        document.getElementById(
            "adminCityCount"
        );

    if (!grid) {
        return;
    }

    const search =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";

    const cities =
        [...new Set(
            pakistanCities
        )]
            .sort(
                (a, b) =>
                    a.localeCompare(
                        b
                    )
            )
            .filter(
                city =>
                    !search ||
                    city
                        .toLowerCase()
                        .includes(
                            search
                        )
            );

    if (count) {
        count.textContent =
            cities.length;
    }

    grid.innerHTML =
        cities.length
            ? cities
                .map(
                    city =>
                        `
                        <div
                            style="
                                padding:13px 14px;
                                background:#f8fafc;
                                border:1px solid #edf0f3;
                                border-radius:12px;
                                display:flex;
                                gap:9px;
                                align-items:center;
                            "
                        >
                            <i class="fa-solid fa-location-dot"></i>
                            <span>
                                ${escapeHTML(
                                    city
                                )}
                            </span>
                        </div>
                        `
                )
                .join("")
            : `
                <div
                    style="
                        grid-column:1/-1;
                        padding:30px;
                        text-align:center;
                        opacity:.65;
                    "
                >
                    ${escapeHTML(
                        t("noReports")
                    )}
                </div>
            `;
}

async function openAdminSystemData() {

    const workspace =
        ensureAdminWorkspace();

    if (!workspace) {
        return;
    }

    currentAdminPanel =
        "systemData";

    workspace.innerHTML = `
        <div
            class="white-card"
            style="margin-top:20px;"
        >

            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    margin-bottom:22px;
                "
            >

                <div>

                    <span class="card-eyebrow">
                        ${escapeHTML(
                            t(
                                "adminSystemData"
                            )
                        )}
                    </span>

                    <h3>
                        ${escapeHTML(
                            t(
                                "systemData"
                            )
                        )}
                    </h3>

                </div>

                <div
                    style="
                        display:flex;
                        gap:10px;
                    "
                >

                    <button
                        type="button"
                        class="secondary-btn"
                        id="adminSystemRefresh"
                    >
                        <i class="fa-solid fa-rotate"></i>
                        ${escapeHTML(
                            t("refreshData")
                        )}
                    </button>

                    <button
                        type="button"
                        class="secondary-btn"
                        id="adminSystemBack"
                    >
                        <i class="fa-solid fa-arrow-left"></i>
                        ${escapeHTML(
                            t("close")
                        )}
                    </button>

                </div>

            </div>

            <div
                id="adminSystemDataGrid"
                style="
                    display:grid;
                    grid-template-columns:repeat(5,minmax(0,1fr));
                    gap:14px;
                    margin-bottom:26px;
                "
            >
                <div style="padding:20px;background:#f8fafc;border-radius:14px;">
                    ${escapeHTML(t("loading"))}
                </div>
            </div>

            <div id="adminSystemDetails"></div>

        </div>
    `;

    document
        .getElementById(
            "adminSystemBack"
        )
        .addEventListener(
            "click",
            showAdminOverview
        );

    document
        .getElementById(
            "adminSystemRefresh"
        )
        .addEventListener(
            "click",
            openAdminSystemData
        );

    await loadAdminSystemData();
}

async function loadAdminSystemData() {

    const grid =
        document.getElementById(
            "adminSystemDataGrid"
        );

    const details =
        document.getElementById(
            "adminSystemDetails"
        );

    if (!grid) {
        return;
    }

    try {

        const results =
            await Promise.allSettled([
                apiRequest(
                    "/users/"
                ),

                apiRequest(
                    "/reports"
                ),

                apiRequest(
                    "/projects/"
                ),

                apiRequest(
                    "/contractors/"
                ),

                apiRequest(
                    "/decisions/"
                )
            ]);

        const users =
            results[0].status ===
            "fulfilled"
                ? results[0].value
                : {};

        const reports =
            results[1].status ===
            "fulfilled"
                ? results[1].value
                : {};

        const projects =
            results[2].status ===
            "fulfilled"
                ? results[2].value
                : {};

        const contractors =
            results[3].status ===
            "fulfilled"
                ? results[3].value
                : {};

        const decisions =
            results[4].status ===
            "fulfilled"
                ? results[4].value
                : {};

        const userList =
            Array.isArray(
                users.users
            )
                ? users.users
                : [];

        const reportList =
            Array.isArray(
                reports.reports
            )
                ? reports.reports
                : [];

        const projectList =
            Array.isArray(
                projects.projects
            )
                ? projects.projects
                : [];

        const contractorList =
            Array.isArray(
                contractors.contractors
            )
                ? contractors.contractors
                : [];

        const decisionList =
            Array.isArray(
                decisions.decisions
            )
                ? decisions.decisions
                : [];

        adminSystemDataCache = {
            users:
                userList,

            reports:
                reportList,

            projects:
                projectList,

            contractors:
                contractorList,

            decisions:
                decisionList
        };

        grid.innerHTML = `
            ${adminMetric(
                t("totalUsers"),
                userList.length
            )}

            ${adminMetric(
                t("totalReportsAdmin"),
                reportList.length
            )}

            ${adminMetric(
                t("totalProjects"),
                projectList.length
            )}

            ${adminMetric(
                t("totalContractors"),
                contractorList.length
            )}

            ${adminMetric(
                t("totalDecisions"),
                decisionList.length
            )}
        `;

        if (details) {

            details.innerHTML = `
                <div
                    style="
                        display:grid;
                        grid-template-columns:1fr 1fr;
                        gap:16px;
                    "
                >

                    ${adminDataBox(
                        t("users"),
                        userList
                            .slice(0, 8)
                            .map(
                                user =>
                                    `<div>${escapeHTML(
                                        user.name
                                    )} • ${escapeHTML(
                                        user.role
                                    )}</div>`
                            )
                            .join("") ||
                        escapeHTML(
                            t("noUsers")
                        )
                    )}

                    ${adminDataBox(
                        t("reports"),
                        reportList
                            .slice(0, 8)
                            .map(
                                report =>
                                    `<div>${escapeHTML(
                                        report.report_id
                                    )} • ${escapeHTML(
                                        statusLabel(
                                            report.status
                                        )
                                    )}</div>`
                            )
                            .join("") ||
                        escapeHTML(
                            t("noReports")
                        )
                    )}

                    ${adminDataBox(
                        t("projectManagement"),
                        projectList
                            .slice(0, 8)
                            .map(
                                project =>
                                    `<div>${escapeHTML(
                                        project.project_id
                                    )} • ${escapeHTML(
                                        statusLabel(
                                            project.status
                                        )
                                    )}</div>`
                            )
                            .join("") ||
                        escapeHTML(
                            t("noProjects")
                        )
                    )}

                    ${adminDataBox(
                        t("contractors"),
                        contractorList
                            .slice(0, 8)
                            .map(
                                contractor =>
                                    `<div>${escapeHTML(
                                        contractor.company_name ||
                                        contractor.contractor_id
                                    )}</div>`
                            )
                            .join("") ||
                        escapeHTML(
                            t("noContractors")
                        )
                    )}

                </div>
            `;
        }

    } catch (error) {

        console.error(
            "Admin system data error:",
            error
        );

        grid.innerHTML = `
            <div
                style="
                    grid-column:1/-1;
                    padding:30px;
                    text-align:center;
                "
            >
                <strong>
                    ${escapeHTML(
                        t(
                            "operationFailed"
                        )
                    )}
                </strong>

                <p>
                    ${escapeHTML(
                        error.message
                    )}
                </p>
            </div>
        `;
    }
}

function adminMetric(
    label,
    value
) {

    return `
        <div
            style="
                padding:20px;
                background:#f8fafc;
                border-radius:14px;
            "
        >

            <span>
                ${escapeHTML(
                    label
                )}
            </span>

            <strong
                style="
                    display:block;
                    font-size:30px;
                    margin-top:8px;
                "
            >
                ${escapeHTML(
                    String(
                        value
                    )
                )}
            </strong>

        </div>
    `;
}

function adminDataBox(
    title,
    html
) {

    return `
        <div
            style="
                background:#f8fafc;
                border-radius:16px;
                padding:20px;
            "
        >

            <h4>
                ${escapeHTML(
                    title
                )}
            </h4>

            <div
                style="
                    display:flex;
                    flex-direction:column;
                    gap:8px;
                    margin-top:12px;
                    font-size:14px;
                "
            >
                ${html}
            </div>

        </div>
    `;
}

function refreshOpenAdminPanel() {

    if (
        !currentUser ||
        normalizeRole(
            currentUser.role
        ) !==
        "admin"
    ) {
        return;
    }

    if (
        currentAdminPanel ===
        "users"
    ) {

        openAdminUsers();

        return;
    }

    if (
        currentAdminPanel ===
        "roles"
    ) {

        openAdminRoles();

        return;
    }

    if (
        currentAdminPanel ===
        "cities"
    ) {

        openAdminCities();

        return;
    }

    if (
        currentAdminPanel ===
        "systemData"
    ) {

        openAdminSystemData();

        return;
    }

    showAdminOverview();
}

/* =====================================================
   UTILITY
===================================================== */

function delay(
    ms
) {

    return new Promise(
        resolve =>
            setTimeout(
                resolve,
                ms
            )
    );
}

function capitalize(
    text
) {

    if (!text) {
        return "";
    }

    return (
        text.charAt(0).toUpperCase() +
        text.slice(1)
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

    const saved =
        localStorage.getItem(
            "civic_user"
        );

    if (!saved) {
        return;
    }

    try {

        const user =
            JSON.parse(
                saved
            );

        user.role =
            normalizeRole(
                user.role
            );

        startApplication(
            user
        );

    } catch (error) {

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

            const reviewModal =
                document.getElementById(
                    "governmentReviewModal"
                );

            if (reviewModal) {
                reviewModal.remove();
            }

            const contractorModal =
                document.getElementById(
                    "contractorModal"
                );

            if (contractorModal) {
                contractorModal.remove();
            }

            const adminModal =
                document.getElementById(
                    "adminModal"
                );

            if (adminModal) {
                adminModal.remove();
            }
        }
    }
);

window.addEventListener(
    "beforeunload",
    stopCamera
);

applyTranslations();

loadSavedUser();