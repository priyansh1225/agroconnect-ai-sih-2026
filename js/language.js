/* =========================================================
   AGROCONNECT AI - LANGUAGE SYSTEM
   Languages:
   1. English
   2. Hindi
   3. Marathi

   Saves selected language in localStorage:
   "agroconnect-language"
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "agroconnect-language";

  const LANGUAGES = {
    en: "English",
    hi: "हिन्दी",
    mr: "मराठी"
  };

  /* =========================================================
     TRANSLATION DICTIONARY
     ========================================================= */

  const translations = {

    /* ---------- COMMON ---------- */

    "Dashboard": {
      hi: "डैशबोर्ड",
      mr: "डॅशबोर्ड"
    },

    "Market Prices": {
      hi: "बाजार भाव",
      mr: "बाजार भाव"
    },

    "Net Realization": {
      hi: "शुद्ध प्राप्ति",
      mr: "निव्वळ प्राप्ती"
    },

    "My Crop Lots": {
      hi: "मेरी फसल लॉट",
      mr: "माझे पीक लॉट"
    },

    "FPO Aggregation": {
      hi: "FPO एकत्रीकरण",
      mr: "FPO एकत्रीकरण"
    },

    "Transport Board": {
      hi: "परिवहन बोर्ड",
      mr: "वाहतूक बोर्ड"
    },

    "Transactions": {
      hi: "लेनदेन",
      mr: "व्यवहार"
    },

    "Farmer": {
      hi: "किसान",
      mr: "शेतकरी"
    },

    "Buyer": {
      hi: "खरीदार",
      mr: "खरेदीदार"
    },

    "FPO Coordinator": {
      hi: "FPO समन्वयक",
      mr: "FPO समन्वयक"
    },

    "Transporter": {
      hi: "परिवहनकर्ता",
      mr: "वाहतूकदार"
    },

    "Farmer dashboard": {
      hi: "किसान डैशबोर्ड",
      mr: "शेतकरी डॅशबोर्ड"
    },

    "Buyer dashboard": {
      hi: "खरीदार डैशबोर्ड",
      mr: "खरेदीदार डॅशबोर्ड"
    },

    "Processor dashboard": {
      hi: "प्रोसेसर डैशबोर्ड",
      mr: "प्रक्रिया केंद्र डॅशबोर्ड"
    },

    "FPO Coordinator Dashboard": {
      hi: "FPO समन्वयक डैशबोर्ड",
      mr: "FPO समन्वयक डॅशबोर्ड"
    },

    "Transporter dashboard": {
      hi: "परिवहनकर्ता डैशबोर्ड",
      mr: "वाहतूकदार डॅशबोर्ड"
    },

    "Open Farmer Dashboard": {
      hi: "किसान डैशबोर्ड खोलें",
      mr: "शेतकरी डॅशबोर्ड उघडा"
    },

    "Open Buyer Dashboard": {
      hi: "खरीदार डैशबोर्ड खोलें",
      mr: "खरेदीदार डॅशबोर्ड उघडा"
    },

    "Open FPO Dashboard": {
      hi: "FPO डैशबोर्ड खोलें",
      mr: "FPO डॅशबोर्ड उघडा"
    },

    "Open Transport Dashboard": {
      hi: "परिवहन डैशबोर्ड खोलें",
      mr: "वाहतूक डॅशबोर्ड उघडा"
    },

    /* ---------- FARMER ---------- */

    "Active crop lot": {
      hi: "सक्रिय फसल लॉट",
      mr: "सक्रिय पीक लॉट"
    },

    "My active crop lot": {
      hi: "मेरी सक्रिय फसल लॉट",
      mr: "माझे सक्रिय पीक लॉट"
    },

    "Verification status": {
      hi: "सत्यापन स्थिति",
      mr: "पडताळणी स्थिती"
    },

    "FPO Verified": {
      hi: "FPO द्वारा सत्यापित",
      mr: "FPO द्वारे पडताळलेले"
    },

    "Verified": {
      hi: "सत्यापित",
      mr: "पडताळलेले"
    },

    "Quality grade": {
      hi: "गुणवत्ता ग्रेड",
      mr: "गुणवत्ता श्रेणी"
    },

    "Grade A": {
      hi: "ग्रेड A",
      mr: "ग्रेड A"
    },

    "FPO graded": {
      hi: "FPO द्वारा ग्रेड किया गया",
      mr: "FPO द्वारे श्रेणी दिलेली"
    },

    "Moisture content": {
      hi: "नमी की मात्रा",
      mr: "आर्द्रता प्रमाण"
    },

    "Standard": {
      hi: "मानक",
      mr: "मानक"
    },

    "Lot weight": {
      hi: "लॉट वजन",
      mr: "लॉट वजन"
    },

    "Confirmed": {
      hi: "पुष्टि की गई",
      mr: "पुष्टी केलेले"
    },

    "Multi-mandi comparison": {
      hi: "मल्टी-मंडी तुलना",
      mr: "मल्टी-मंडी तुलना"
    },

    "Buyer demand board": {
      hi: "खरीदार मांग बोर्ड",
      mr: "खरेदीदार मागणी बोर्ड"
    },

    "FPO bulk lots": {
      hi: "FPO बल्क लॉट",
      mr: "FPO मोठे लॉट"
    },

    "Pickup": {
      hi: "पिकअप",
      mr: "पिकअप"
    },

    "Distance": {
      hi: "दूरी",
      mr: "अंतर"
    },

    "Price": {
      hi: "कीमत",
      mr: "किंमत"
    },

    "Transport": {
      hi: "परिवहन",
      mr: "वाहतूक"
    },

    "Buyer type": {
      hi: "खरीदार प्रकार",
      mr: "खरेदीदार प्रकार"
    },

    "Reliability": {
      hi: "विश्वसनीयता",
      mr: "विश्वसनीयता"
    },

    "Mandi": {
      hi: "मंडी",
      mr: "बाजार समिती"
    },

    "Direct buyer": {
      hi: "प्रत्यक्ष खरीदार",
      mr: "थेट खरेदीदार"
    },

    "Net": {
      hi: "शुद्ध",
      mr: "निव्वळ"
    },

    "Compare": {
      hi: "तुलना करें",
      mr: "तुलना करा"
    },

    "Sell Now": {
      hi: "अभी बेचें",
      mr: "आता विक्री करा"
    },

    "View Details": {
      hi: "विवरण देखें",
      mr: "तपशील पहा"
    },

    /* ---------- BUYER ---------- */

    "Available produce": {
      hi: "उपलब्ध उपज",
      mr: "उपलब्ध उत्पादन"
    },

    "Available Lots": {
      hi: "उपलब्ध लॉट",
      mr: "उपलब्ध लॉट"
    },

    "Quantity": {
      hi: "मात्रा",
      mr: "प्रमाण"
    },

    "Quality": {
      hi: "गुणवत्ता",
      mr: "गुणवत्ता"
    },

    "Location": {
      hi: "स्थान",
      mr: "स्थान"
    },

    "Expected price": {
      hi: "अपेक्षित कीमत",
      mr: "अपेक्षित किंमत"
    },

    "Offer price": {
      hi: "प्रस्ताव कीमत",
      mr: "ऑफर किंमत"
    },

    "Offers": {
      hi: "ऑफर",
      mr: "ऑफर"
    },

    "Buyer Demand": {
      hi: "खरीदार मांग",
      mr: "खरेदीदार मागणी"
    },

    "Create Demand": {
      hi: "मांग बनाएं",
      mr: "मागणी तयार करा"
    },

    "Required quantity": {
      hi: "आवश्यक मात्रा",
      mr: "आवश्यक प्रमाण"
    },

    "Required by": {
      hi: "आवश्यक तारीख",
      mr: "आवश्यक तारीख"
    },

    "Payment reliability": {
      hi: "भुगतान विश्वसनीयता",
      mr: "पेमेंट विश्वसनीयता"
    },

    "Previous transactions": {
      hi: "पिछले लेनदेन",
      mr: "मागील व्यवहार"
    },

    "Business Verified": {
      hi: "व्यवसाय सत्यापित",
      mr: "व्यवसाय पडताळलेले"
    },

    "GSTIN Verified": {
      hi: "GSTIN सत्यापित",
      mr: "GSTIN पडताळलेले"
    },

    /* ---------- FPO ---------- */

    "Farmer Lots": {
      hi: "किसान लॉट",
      mr: "शेतकरी लॉट"
    },

    "Bulk Lot": {
      hi: "बल्क लॉट",
      mr: "मोठा लॉट"
    },

    "Bulk Lots": {
      hi: "बल्क लॉट",
      mr: "मोठे लॉट"
    },

    "Member Lots": {
      hi: "सदस्य लॉट",
      mr: "सदस्य लॉट"
    },

    "Ready for Sale": {
      hi: "बिक्री के लिए तैयार",
      mr: "विक्रीसाठी तयार"
    },

    "Pending Verification": {
      hi: "सत्यापन लंबित",
      mr: "पडताळणी प्रलंबित"
    },

    "Buyer Demands": {
      hi: "खरीदार मांग",
      mr: "खरेदीदार मागणी"
    },

    "Matching Demands": {
      hi: "मिलान मांग",
      mr: "जुळणाऱ्या मागण्या"
    },

    "Aggregate": {
      hi: "एकत्र करें",
      mr: "एकत्र करा"
    },

    "Create Bulk Lot": {
      hi: "बल्क लॉट बनाएं",
      mr: "मोठा लॉट तयार करा"
    },

    "Quality Verification": {
      hi: "गुणवत्ता सत्यापन",
      mr: "गुणवत्ता पडताळणी"
    },

    "AI estimate": {
      hi: "AI अनुमान",
      mr: "AI अंदाज"
    },

    "FPO verified": {
      hi: "FPO सत्यापित",
      mr: "FPO पडताळलेले"
    },

    /* ---------- TRANSPORT ---------- */

    "Nearby Loads": {
      hi: "नजदीकी लोड",
      mr: "जवळील लोड"
    },

    "Route Matches": {
      hi: "रूट मिलान",
      mr: "मार्ग जुळणी"
    },

    "Vehicle": {
      hi: "वाहन",
      mr: "वाहन"
    },

    "Available": {
      hi: "उपलब्ध",
      mr: "उपलब्ध"
    },

    "Load": {
      hi: "लोड",
      mr: "लोड"
    },

    "Loads": {
      hi: "लोड",
      mr: "लोड"
    },

    "Pickup location": {
      hi: "पिकअप स्थान",
      mr: "पिकअप ठिकाण"
    },

    "Delivery location": {
      hi: "डिलीवरी स्थान",
      mr: "डिलिव्हरी ठिकाण"
    },

    "Trip earnings": {
      hi: "यात्रा कमाई",
      mr: "फेरी कमाई"
    },

    "Delivery History": {
      hi: "डिलीवरी इतिहास",
      mr: "डिलिव्हरी इतिहास"
    },

    "In Transit": {
      hi: "रास्ते में",
      mr: "मार्गावर"
    },

    "Delivered": {
      hi: "डिलीवर किया गया",
      mr: "डिलिव्हर केले"
    },

    "Payment Received": {
      hi: "भुगतान प्राप्त",
      mr: "पेमेंट प्राप्त"
    },

    /* ---------- TRANSACTION ---------- */

    "Transactions": {
      hi: "लेनदेन",
      mr: "व्यवहार"
    },

    "Offer Accepted": {
      hi: "ऑफर स्वीकार",
      mr: "ऑफर स्वीकारले"
    },

    "Transport Confirmed": {
      hi: "परिवहन पुष्टि",
      mr: "वाहतूक निश्चित"
    },

    "Quality Verified": {
      hi: "गुणवत्ता सत्यापित",
      mr: "गुणवत्ता पडताळलेली"
    },

    "Delivered": {
      hi: "डिलीवर किया गया",
      mr: "डिलिव्हर केले"
    },

    "Payment received": {
      hi: "भुगतान प्राप्त",
      mr: "पेमेंट प्राप्त"
    },

    /* ---------- PORTAL / HOME ---------- */

    "Choose your role": {
      hi: "अपनी भूमिका चुनें",
      mr: "तुमची भूमिका निवडा"
    },

    "Select how you want to use AgroConnect": {
      hi: "AgroConnect का उपयोग कैसे करना चाहते हैं, चुनें",
      mr: "AgroConnect कसे वापरायचे ते निवडा"
    },

    "Farmer": {
      hi: "किसान",
      mr: "शेतकरी"
    },

    "Sell smarter with better market information.": {
      hi: "बेहतर बाजार जानकारी के साथ बेहतर बिक्री निर्णय लें।",
      mr: "चांगल्या बाजार माहितीसह अधिक चांगले विक्री निर्णय घ्या."
    },

    "Buyer": {
      hi: "खरीदार",
      mr: "खरेदीदार"
    },

    "Find verified produce from farmers and FPOs.": {
      hi: "किसानों और FPO से सत्यापित उपज खोजें।",
      mr: "शेतकरी आणि FPO कडून पडताळलेले उत्पादन शोधा."
    },

    "FPO Coordinator": {
      hi: "FPO समन्वयक",
      mr: "FPO समन्वयक"
    },

    "Aggregate farmer lots, verify quality and respond to bulk buyer requirements.": {
      hi: "किसान लॉट को एकत्र करें, गुणवत्ता सत्यापित करें और बल्क खरीदार की मांग पूरी करें।",
      mr: "शेतकरी लॉट एकत्र करा, गुणवत्ता पडताळा आणि मोठ्या खरेदीदारांच्या मागण्या पूर्ण करा."
    },

    "Transporter": {
      hi: "परिवहनकर्ता",
      mr: "वाहतूकदार"
    },

    "List return trips, discover nearby loads and confirm movement between farm and buyer.": {
      hi: "रिटर्न ट्रिप सूचीबद्ध करें, नजदीकी लोड खोजें और फार्म से खरीदार तक परिवहन की पुष्टि करें।",
      mr: "रिटर्न ट्रिप नोंदवा, जवळील लोड शोधा आणि शेतातून खरेदीदारापर्यंत वाहतूक निश्चित करा."
    },

    /* ---------- GENERAL ACTIONS ---------- */

    "Search": {
      hi: "खोजें",
      mr: "शोधा"
    },

    "Filter": {
      hi: "फ़िल्टर",
      mr: "फिल्टर"
    },

    "Sort": {
      hi: "क्रमबद्ध करें",
      mr: "क्रमवारी लावा"
    },

    "Submit": {
      hi: "सबमिट करें",
      mr: "सबमिट करा"
    },

    "Save": {
      hi: "सहेजें",
      mr: "जतन करा"
    },

    "Cancel": {
      hi: "रद्द करें",
      mr: "रद्द करा"
    },

    "Accept": {
      hi: "स्वीकार करें",
      mr: "स्वीकार करा"
    },

    "Reject": {
      hi: "अस्वीकार करें",
      mr: "नाकार करा"
    },

    "Back": {
      hi: "वापस",
      mr: "मागे"
    },

    "Next": {
      hi: "अगला",
      mr: "पुढे"
    },

    "View": {
      hi: "देखें",
      mr: "पहा"
    },

    "Details": {
      hi: "विवरण",
      mr: "तपशील"
    },

    "Status": {
      hi: "स्थिति",
      mr: "स्थिती"
    },

    "Date": {
      hi: "तारीख",
      mr: "तारीख"
    },

    "Today": {
      hi: "आज",
      mr: "आज"
    },

    "Tomorrow": {
      hi: "कल",
      mr: "उद्या"
    },

    "Total": {
      hi: "कुल",
      mr: "एकूण"
    },

    "Ready": {
      hi: "तैयार",
      mr: "तयार"
    },

    "Pending": {
      hi: "लंबित",
      mr: "प्रलंबित"
    },

    "Verified": {
      hi: "सत्यापित",
      mr: "पडताळलेले"
    }
  };


  /* =========================================================
     GET CURRENT LANGUAGE
     ========================================================= */

  function getLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved && LANGUAGES[saved]) {
      return saved;
    }

    return "en";
  }


  /* =========================================================
     SAVE LANGUAGE
     ========================================================= */

  function setLanguage(language) {
    if (!LANGUAGES[language]) {
      language = "en";
    }

    localStorage.setItem(STORAGE_KEY, language);

    document.documentElement.lang = language;

    translatePage(language);

    updateLanguageButton(language);
  }


  /* =========================================================
     TRANSLATE TEXT
     ========================================================= */

  function translateText(text, language) {

    if (!text) {
      return text;
    }

    const cleanText = text.trim();

    if (!cleanText) {
      return text;
    }

    if (language === "en") {
      return cleanText;
    }

    const item = translations[cleanText];

    if (item && item[language]) {
      return item[language];
    }

    return cleanText;
  }


  /* =========================================================
     TRANSLATE ELEMENTS WITH data-i18n
     ========================================================= */

  function translateMarkedElements(language) {

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(function (element) {

      const key = element.getAttribute("data-i18n");

      if (!key) {
        return;
      }

      if (language === "en") {
        element.textContent = key;
        return;
      }

      if (translations[key] && translations[key][language]) {
        element.textContent = translations[key][language];
      }

    });
  }


  /* =========================================================
     AUTOMATIC TEXT TRANSLATION
     
     This allows the system to translate normal HTML text
     even if data-i18n was not added everywhere.
     ========================================================= */

  function translateTextNodes(language) {

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {

          const parent = node.parentElement;

          if (!parent) {
            return NodeFilter.FILTER_REJECT;
          }

          const tag = parent.tagName.toLowerCase();

          /* Don't touch scripts/styles */
          if (
            tag === "script" ||
            tag === "style" ||
            tag === "noscript"
          ) {
            return NodeFilter.FILTER_REJECT;
          }

          /* Don't translate language button label here */
          if (
            parent.closest(".language-menu") ||
            parent.closest(".language-button")
          ) {
            return NodeFilter.FILTER_REJECT;
          }

          const value = node.nodeValue.trim();

          if (!value) {
            return NodeFilter.FILTER_REJECT;
          }

          if (translations[value]) {
            return NodeFilter.FILTER_ACCEPT;
          }

          return NodeFilter.FILTER_REJECT;
        }
      }
    );

    const nodes = [];

    let node;

    while ((node = walker.nextNode())) {
      nodes.push(node);
    }

    nodes.forEach(function (textNode) {

      const original = textNode.nodeValue.trim();

      if (language === "en") {
        textNode.nodeValue =
          textNode.nodeValue.replace(original, original);

        return;
      }

      const translated = translateText(original, language);

      if (translated !== original) {
        textNode.nodeValue =
          textNode.nodeValue.replace(original, translated);
      }

    });
  }


  /* =========================================================
     UPDATE LANGUAGE BUTTON
     ========================================================= */

  function updateLanguageButton(language) {

    const buttons = document.querySelectorAll(".language-button");

    buttons.forEach(function (button) {

      const label =
        button.querySelector("[data-language-label]");

      if (label) {
        label.textContent = LANGUAGES[language];
      } else {

        /*
         * If old button has text like:
         * "अ / A मराठी"
         *
         * replace only the visible language name.
         */

        const languageNames = [
          "English",
          "हिन्दी",
          "मराठी",
          "Hindi",
          "Marathi"
        ];

        let html = button.innerHTML;

        languageNames.forEach(function (name) {
          html = html.replace(
            new RegExp(name, "g"),
            LANGUAGES[language]
          );
        });

        button.innerHTML = html;
      }

    });
  }


  /* =========================================================
     CREATE LANGUAGE MENU
     ========================================================= */

  function createLanguageMenu(button) {

    if (!button) {
      return;
    }

    /*
     * Don't create twice.
     */
    if (button.parentElement.querySelector(".language-menu")) {
      return;
    }

    const wrapper = document.createElement("div");

    wrapper.className = "language-selector";

    button.parentNode.insertBefore(wrapper, button);

    wrapper.appendChild(button);

    const menu = document.createElement("div");

    menu.className = "language-menu";

    menu.innerHTML = `
      <button type="button" data-lang="en">
        English
      </button>

      <button type="button" data-lang="hi">
        हिन्दी
      </button>

      <button type="button" data-lang="mr">
        मराठी
      </button>
    `;

    wrapper.appendChild(menu);

    button.addEventListener("click", function (event) {

      event.stopPropagation();

      menu.classList.toggle("show");

    });


    menu.querySelectorAll("[data-lang]").forEach(function (item) {

      item.addEventListener("click", function (event) {

        event.stopPropagation();

        const language =
          item.getAttribute("data-lang");

        setLanguage(language);

        menu.classList.remove("show");

      });

    });


    document.addEventListener("click", function () {

      menu.classList.remove("show");

    });

  }


  /* =========================================================
     FIND / CREATE LANGUAGE BUTTON
     ========================================================= */

  function setupLanguageButton() {

    let button =
      document.querySelector(".language-button");


    /*
     * If button already exists in HTML,
     * use it.
     */

    if (button) {

      createLanguageMenu(button);

      return;
    }


    /*
     * If page doesn't have a language button,
     * create one automatically.
     */

    const topbarActions =
      document.querySelector(".topbar-actions");

    if (topbarActions) {

      button = document.createElement("button");

      button.className = "language-button";

      button.type = "button";

      button.setAttribute(
        "aria-label",
        "Change language"
      );

      button.innerHTML = `
        <span aria-hidden="true">अ / A</span>
        <span data-language-label>English</span>
      `;

      topbarActions.appendChild(button);

      createLanguageMenu(button);

      return;
    }


    /*
     * Fallback:
     * create button in body.
     */

    button = document.createElement("button");

    button.className = "language-button";

    button.type = "button";

    button.setAttribute(
      "aria-label",
      "Change language"
    );

    button.innerHTML = `
      <span aria-hidden="true">अ / A</span>
      <span data-language-label>English</span>
    `;

    document.body.appendChild(button);

    createLanguageMenu(button);
  }


  /* =========================================================
     TRANSLATE PAGE
     ========================================================= */

  function translatePage(language) {

    document.documentElement.lang = language;

    translateMarkedElements(language);

    translateTextNodes(language);

    updateLanguageButton(language);
  }


  /* =========================================================
     ADD LANGUAGE MENU CSS
     ========================================================= */

  function addLanguageStyles() {

    if (document.getElementById("agroconnect-language-style")) {
      return;
    }

    const style = document.createElement("style");

    style.id = "agroconnect-language-style";

    style.textContent = `

      .language-selector {
        position: relative;
        display: inline-flex;
        align-items: center;
      }

      .language-button {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        position: relative;
      }

      .language-menu {
        position: absolute;
        top: calc(100% + 8px);
        right: 0;
        min-width: 145px;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 6px;
        box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        display: none;
        z-index: 9999;
      }

      .language-menu.show {
        display: block;
      }

      .language-menu button {
        width: 100%;
        border: none;
        background: transparent;
        padding: 10px 12px;
        text-align: left;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        color: #1f2937;
      }

      .language-menu button:hover {
        background: #f3f4f6;
      }

      @media (max-width: 600px) {

        .language-menu {
          right: 0;
          min-width: 130px;
        }

      }

    `;

    document.head.appendChild(style);
  }


  /* =========================================================
     INITIALIZE
     ========================================================= */

  function initLanguageSystem() {

    addLanguageStyles();

    setupLanguageButton();

    const language = getLanguage();

    document.documentElement.lang = language;

    translatePage(language);
  }


  /* =========================================================
     WAIT FOR DOM
     ========================================================= */

  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      initLanguageSystem
    );

  } else {

    initLanguageSystem();

  }


  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.AgroConnectLanguage = {

    setLanguage: setLanguage,

    getLanguage: getLanguage,

    translatePage: translatePage,

    languages: LANGUAGES

  };

})();