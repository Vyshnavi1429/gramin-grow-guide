import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'te' | 'ta' | 'bn';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  // Login Page
  smartKrishi: {
    en: 'Smart Krishi',
    hi: 'स्मार्ट कृषि',
    te: 'స్మార్ట్ కృషి',
    ta: 'ஸ்மார்ட் கிருஷி',
    bn: 'স্মার্ট কৃষি'
  },
  intelligentFarming: {
    en: 'Intelligent Farming Dashboard',
    hi: 'बुद्धिमान कृषि डैशबोर्ड',
    te: 'తెలివైన వ్యవసాయ డాష్‌బోర్డ్',
    ta: 'அறிவார்ந்த விவசாய டாஷ்போர்டு',
    bn: 'বুদ্ধিমান কৃষি ড্যাশবোর্ড'
  },
  selectLanguage: {
    en: 'Select Language',
    hi: 'भाषा चुनें',
    te: 'భాష ఎంచుకోండి',
    ta: 'மொழியைத் தேர்ந்தெடுக்கவும்',
    bn: 'ভাষা নির্বাচন করুন'
  },
  phoneNumber: {
    en: 'Phone Number',
    hi: 'फोन नंबर',
    te: 'ఫోన్ నంబర్',
    ta: 'தொலைபேசி எண்',
    bn: 'ফোন নম্বর'
  },
  password: {
    en: 'Password (PIN)',
    hi: 'पासवर्ड (पिन)',
    te: 'పాస్‌వర్డ్ (పిన్)',
    ta: 'கடவுச்சொல் (பின்)',
    bn: 'পাসওয়ার্ড (পিন)'
  },
  login: {
    en: 'Login',
    hi: 'लॉगिन करें',
    te: 'లాగిన్ చేయండి',
    ta: 'உள்நுழைய',
    bn: 'লগইন করুন'
  },
  enterPhone: {
    en: 'Enter your phone number',
    hi: 'अपना फोन नंबर दर्ज करें',
    te: 'మీ ఫోన్ నంబర్ నమోదు చేయండి',
    ta: 'உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்',
    bn: 'আপনার ফোন নম্বর লিখুন'
  },
  enterPin: {
    en: 'Enter your PIN',
    hi: 'अपना पिन दर्ज करें',
    te: 'మీ పిన్ నమోదు చేయండి',
    ta: 'உங்கள் பின்னை உள்ளிடவும்',
    bn: 'আপনার পিন লিখুন'
  },
  // Dashboard
  dashboard: {
    en: 'Smart Krishi Dashboard',
    hi: 'स्मार्ट कृषि डैशबोर्ड',
    te: 'స్మార్ట్ కృషి డాష్‌బోర్డ్',
    ta: 'ஸ்மார்ட் கிருஷி டாஷ்போர்டு',
    bn: 'স্মার্ট কৃষি ড্যাশবোর্ড'
  },
  cropsOverview: {
    en: 'Registered Crops Overview',
    hi: 'पंजीकृت फसल विवरण',
    te: 'నమోదిత పంటల వివరణ',
    ta: 'பதிவு செய்யப்பட்ட பயிர்களின் கண்ணோட்டம்',
    bn: 'নিবন্ধিত ফসলের বিবরণ'
  },
  latestUpdates: {
    en: 'Latest Updates',
    hi: 'नवीनतम अपडेट',
    te: 'తాజా అప్‌డేట్‌లు',
    ta: 'சமீபத்திய புதுப்பிப்புகள்',
    bn: 'সর্বশেষ আপডেট'
  },
  marketPrices: {
    en: 'Market Prices',
    hi: 'बाजार मूल्य',
    te: 'మార్కెట్ ధరలు',
    ta: 'சந்தை விலைகள்',
    bn: 'বাজার মূল্য'
  },
  weatherAlert: {
    en: 'Weather Alert',
    hi: 'मौसम चेतावनी',
    te: 'వాతావరణ హెచ్చరిక',
    ta: 'வானிலை எச்சரிக்கை',
    bn: 'আবহাওয়া সতর্কতা'
  },
  // Navigation
  home: {
    en: 'Home',
    hi: 'होम',
    te: 'హోమ్',
    ta: 'முகப்பு',
    bn: 'হোম'
  },
  myCrops: {
    en: 'My Crops',
    hi: 'मेरी फसल',
    te: 'నా పంటలు',
    ta: 'என் பயிர்கள்',
    bn: 'আমার ফসল'
  },
  social: {
    en: 'Social',
    hi: 'सामाजिक',
    te: 'సామాజిక',
    ta: 'சமூக',
    bn: 'সামাজিক'
  },
  prediction: {
    en: 'Prediction',
    hi: 'भविष्यवाणी',
    te: 'అంచనా',
    ta: 'கணிப்பு',
    bn: 'পূর্বাভাস'
  },
  // Common
  expected: {
    en: 'Expected',
    hi: 'अपेक्षित',
    te: 'ఆశించిన',
    ta: 'எதிர்பார்க்கப்பட்டது',
    bn: 'প্রত্याশিত'
  },
  actual: {
    en: 'Actual',
    hi: 'वास्तविक',
    te: 'వాస్తవ',
    ta: 'உண்மையான',
    bn: 'প্রকৃত'
  },
  // Crops Page
  myCropData: {
    en: 'My Crop Data',
    hi: 'मेरी फसल डेटा',
    te: 'నా పంట డేటా',
    ta: 'என் பயிர் தரவு',
    bn: 'আমার ফসলের তথ্য'
  },
  cropRegistration: {
    en: 'Crop Registration',
    hi: 'फसल पंजीकरण',
    te: 'పంట నమోదు',
    ta: 'பயிர் பதிவு',
    bn: 'ফসল নিবন্ধন'
  },
  registeredCrops: {
    en: 'Registered Crops',
    hi: 'पंजीकृत फसलें',
    te: 'నమోదిత పంటలు',
    ta: 'பதிவு செய்யப்பட்ட பயிர்கள்',
    bn: 'নিবন্ধিত ফসল'
  },
  suggestions: {
    en: 'Suggestions',
    hi: 'सुझाव',
    te: 'సూచనలు',
    ta: 'பரிந்துரைகள்',
    bn: 'পরামর্শ'
  },
  registerNewCrop: {
    en: 'Register New Crop',
    hi: 'नई फसल रजिस्टर करें',
    te: 'కొత్త పంట నమోదు చేయండి',
    ta: 'புதிய பயிரை பதிவு செய்யுங்கள்',
    bn: 'নতুন ফসল নিবন্ধন করুন'
  },
  farmerName: {
    en: 'Farmer Name',
    hi: 'किसान का नाम',
    te: 'రైతు పేరు',
    ta: 'விவசாயி பெயர்',
    bn: 'কৃষকের নাম'
  },
  state: {
    en: 'State',
    hi: 'राज्य',
    te: 'రాష్ట్రం',
    ta: 'மாநிலம்',
    bn: 'রাজ্য'
  },
  landArea: {
    en: 'Land Area (acres)',
    hi: 'भूमि क्षेत्र (एकड़)',
    te: 'భూమి వైశాల్యం (ఎకరాలు)',
    ta: 'நில பரப்பு (ஏக்கர்கள்)',
    bn: 'জমির এলাকা (একর)'
  },
  soilFertility: {
    en: 'Soil Fertility',
    hi: 'मिट्टी की उर्वरता',
    te: 'మట్టి సారవత్తా',
    ta: 'மண்ணின் வளம்',
    bn: 'মাটির উর্বরতা'
  },
  season: {
    en: 'Season',
    hi: 'मौसम',
    te: 'సీజన్',
    ta: 'பருவம்',
    bn: 'ঋতু'
  },
  cropType: {
    en: 'Crop Type',
    hi: 'फसल प्रकार',
    te: 'పంట రకం',
    ta: 'பயிர் வகை',
    bn: 'ফসলের ধরন'
  },
  uploadSoilPhoto: {
    en: 'Upload Soil Photo',
    hi: 'मिट्टी की फोटो अपलोड करें',
    te: 'మట్టి ఫోటో అప్‌లోడ్ చేయండి',
    ta: 'மண் புகைப்படத்தை பதிவேற்றவும்',
    bn: 'মাটির ছবি আপলোড করুন'
  },
  submitRegistration: {
    en: 'Submit Registration',
    hi: 'रजिस्ट्रेशन सबमिट करें',
    te: 'రిజిస్ట్రేషన్ సબ్మిట్ చేయండి',
    ta: 'பதிவை சமர்ப்பிக்கவும்',
    bn: 'নিবন্ধন জমা দিন'
  },
  aiSuggestions: {
    en: 'AI Suggestions',
    hi: 'AI सुझाव',
    te: 'AI సూచనలు',
    ta: 'AI பரிந்துரைகள்',
    bn: 'AI পরামর্শ'
  },
  // Social Page
  socialFeed: {
    en: 'Social Feed',
    hi: 'सामाजिक फ़ीड',
    te: 'సోషల్ ఫీడ్',
    ta: 'சமூக ஊட்டம்',
    bn: 'সামাজিক ফিড'
  },
  cropOverviewYour: {
    en: 'Your Crop Overview',
    hi: 'आपकी फसल का अवलोकन',
    te: 'మీ పంట అవలోకనం',
    ta: 'உங்கள் பயிர் கண்ணோட்டம்',
    bn: 'আপনার ফসলের ওভারভিউ'
  },
  weather: {
    en: 'Weather',
    hi: 'मौसम',
    te: 'వాతావరణం',
    ta: 'வானிலை',
    bn: 'আবহাওয়া'
  },
  market: {
    en: 'Market',
    hi: 'बाजार',
    te: 'మార్కెట్',
    ta: 'சந்தை',
    bn: 'বাজার'
  },
  tips: {
    en: 'Tips',
    hi: 'सुझाव',
    te: 'చిట్కాలు',
    ta: 'குறிப்புகள்',
    bn: 'টিপস'
  },
  schemes: {
    en: 'Schemes',
    hi: 'योजनाएं',
    te: 'పథకాలు',
    ta: 'திட்டங்கள்',
    bn: 'স্কিম'
  },
  weatherForecast: {
    en: 'Weather Forecast',
    hi: 'मौसम पूर्वानुमान',
    te: 'వాతావరణ అంచనా',
    ta: 'வானிலை முன்னறிவிப்பு',
    bn: 'আবহাওয়ার পূর্বাভাস'
  },
  governmentSchemes: {
    en: 'Government Schemes',
    hi: 'सरकारी योजनाएं',
    te: 'ప్రభుత్వ పథకాలు',
    ta: 'அரசு திட்டங்கள்',
    bn: 'সরকারি স্কিম'
  },
  communityChat: {
    en: 'Community Chat',
    hi: 'सामुदायिक चैट',
    te: 'కమ్యూనిటీ చాట్',
    ta: 'சமூக அரட்டை',
    bn: 'কমিউনিটি চ্যাট'
  },
  chatComingSoon: {
    en: 'Chat feature coming soon!',
    hi: 'चैट सुविधा जल्द आ रही है!',
    te: 'చాట్ ఫీచర్ త్వరలో వస్తుంది!',
    ta: 'அரட்டை அம்சம் விரைவில் வரும்!',
    bn: 'চ্যাট ফিচার শীঘ্রই আসছে!'
  },
  // Prediction Page
  yieldPrediction: {
    en: 'Yield Prediction',
    hi: 'उपज की भविष्यवाणी',
    te: 'దిగుబడి అంచనా',
    ta: 'விளைச்சல் கணிப்பு',
    bn: 'ফলন পূর্বাভাস'
  },
  predictedYield: {
    en: 'Predicted Yield',
    hi: 'पूर्वानुमानित उपज',
    te: 'అంచన వేసిన దిగుబడి',
    ta: 'கணிக்கப்பட்ட விளைச்சல்',
    bn: 'প্রত্যাশিত ফলন'
  },
  predictionInput: {
    en: 'Prediction Input',
    hi: 'भविष्यवाणी इनपुट',
    te: 'అంచనా ఇన్‌పుట్',
    ta: 'கணிப்பு உள்ளீடு',
    bn: 'পূর্বাভাস ইনপুট'
  },
  myCropYieldPrediction: {
    en: 'My Crop Yield Prediction',
    hi: 'मेरी फसल उपज की भविष्यवाणी',
    te: 'నా పంట దిగుబడి అంచనా',
    ta: 'என் பயிர் விளைச்சல் கணிப்பு',
    bn: 'আমার ফসলের ফলন পূর্বাভাস'
  },
  stateYieldComparison: {
    en: 'State Yield Comparison',
    hi: 'राज्य उपज तुलना',
    te: 'రాష్ట్ర దిగుబడి పోలిక',
    ta: 'மாநில விளைச்சல் ஒப்பீடு',
    bn: 'রাজ্য ফলন তুলনা'
  },
  predictionResult: {
    en: 'Prediction Result',
    hi: 'भविष्यवाणी परिणाम',
    te: 'అంచనా ఫలితం',
    ta: 'கணிப்பு முடிவு',
    bn: 'পূর্বাভাসের ফলাফল'
  },
  statePerformanceAnalysis: {
    en: 'State Performance Analysis',
    hi: 'राज्य प्रदर्शन विश्लेषण',
    te: 'రాష్ట్ర పనితీరు విశ్లేషణ',
    ta: 'மாநில செயல்திறன் பகுப்பாய்வு',
    bn: 'রাজ্য কর্মক্ষমতা বিশ্লেষণ'
  },
  stateData: {
    en: 'State Data',
    hi: 'राज्य डेटा',
    te: 'రాష్ట్ర డేटా',
    ta: 'மாநில தரவு',
    bn: 'রাজ্য ডেটা'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};