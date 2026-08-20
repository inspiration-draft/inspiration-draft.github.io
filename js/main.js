
const translations = {
  en: {
    nav: {
      brand: "InspirationDraft · 灵感树洞",
    },
    hero: {
      badge: "Available on iOS",
      title: "You do not need<br>to finish the thought",
      p1: "Leave the idea here first. Recording inspiration should not feel like another task you have to complete.",
      p2: "Start with less pressure, then let structure arrive when it helps."
    },
    feature1: {
      title: "Capture the thought<br>then make it useful",
      p1: "Titles, tags, categories, and lightweight structure help you return later without turning capture into clerical work.",
      p2: "Organize an idea in the background, or turn it into one or more reminders when it is ready to become a next step."
    },
    feature2: {
      title: "When you feel stuck<br>open a window",
      p1: "Local AI can extend, question, reframe, and suggest the next step without taking over your writing.",
      m1: "<strong>Extend:</strong> Keep the idea moving when it starts to stall.",
      m2: "<strong>Question:</strong> Ask for a sharper angle or a missing constraint.",
      m3: "<strong>Reframe:</strong> Try another perspective without losing the core thought.",
      m4: "<strong>Next step:</strong> Turn a vague idea into one concrete move.",
      m5: "<strong>Control:</strong> AI stays a quiet companion until you decide what to keep."
    },
    feature3: {
      title: "Take it anywhere<br>and stay private",
      p1: "After the model is downloaded, drafts and local AI inference stay on your iPhone instead of being handed to a cloud model.",
      p2: "No signal required. Privacy feels real when the work can continue offline."
    },
    feature4: {
      title: "Writing, work, life,<br>stray ideas too",
      p1: "<strong>One private workspace:</strong> Keep articles, product notes, cooking sparks, plans, and unfinished thoughts together.",
      p2: "<strong>Your voice stays yours:</strong> The final direction and wording always remain in your hands."
    },
    privacy: {
      title1: "Private local AI",
      title2: "A quiet creative companion",
      p1: "InspirationDraft is designed for people who want help without surrendering authorship. <strong>After you download the local model, suggestions and rewrites run on your device.</strong> No account, no tracking, no server-side draft processing."
    },
    footer: {
      support: "Support",
      privacy: "Privacy Policy",
      terms: "Terms of Use"
    }
  },
  zh: {
    nav: {
      brand: "灵感树洞 (InspirationDraft)",
    },
    hero: {
      badge: "iOS 现已推出",
      title: "不必想完整<br>先把它留下",
      p1: "先把这一刻记住。记录灵感，不该变成另一项需要完成的任务。",
      p2: "先减轻压力，再让结构慢慢跟上。"
    },
    feature1: {
      title: "先留下想法<br>再把它变得有用",
      p1: "标题、标签、分类和轻量结构应该帮你以后更容易找回来，而不是把记录当下变成填表。",
      p2: "可以让它在后台补齐整理，也可以在想法准备好行动时，把它转换成一条或多条提醒事项。"
    },
    feature2: {
      title: "灵感枯竭时<br>轻轻推开一扇窗",
      p1: "本地 AI 可以帮你延伸、追问、换角度、给下一步，但不会接管你的创作过程。",
      m1: "<strong>延伸：</strong>在想法卡住时继续往前走一点。",
      m2: "<strong>追问：</strong>补一层更锋利的问题或限制条件。",
      m3: "<strong>换角度：</strong>试试看另一个看法，而不是重写你。",
      m4: "<strong>下一步：</strong>把模糊念头落成一个可执行动作。",
      m5: "<strong>掌控：</strong>AI 只是候选帮助，真正方向始终由你决定。"
    },
    feature3: {
      title: "走到世界尽头<br>灵感依然在线",
      p1: "下载模型后，内容和端侧 AI 推理都留在你的 iPhone 上，不必把想法交给云端大模型。",
      p2: "没有网络也能继续。当离线仍能工作时，隐私才真的成立。"
    },
    feature4: {
      title: "写作、工作、生活、奇想<br>都能放进来",
      p1: "<strong>一个私密空间：</strong>文章、产品想法、下厨灵感、日常计划和零散念头，都可以放在一起慢慢长大。",
      p2: "<strong>你的声音还在：</strong>最终的表达和判断始终属于你。"
    },
    privacy: {
      title1: "完全本地，真正私密",
      title2: "沉默的创作伙伴",
      p1: "灵感树洞是给那些想要帮助、又不想交出作者感的人准备的。<strong>下载本地模型后，建议和改写都在设备端完成。</strong> 不用注册、没有追踪、也没有服务端内容处理。"
    },
    footer: {
      support: "应用支持",
      privacy: "隐私政策",
      terms: "使用条款"
    }
  }
};

let currentLang = navigator.language.startsWith('zh') ? 'zh' : 'en';

const pageMeta = {
  zh: {
    title: "灵感树洞 (InspirationDraft) — 每一个想法，都值得生根发芽"
  },
  en: {
    title: "InspirationDraft · 灵感树洞 — Every idea deserves to grow"
  }
};

const appStoreBadge = {
  zh: "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/zh-cn?size=250x83",
  en: "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
};

const screenshotBasePath = "appstore/inspirationdraft-fancy-screenshots/output";
const screenshotLocaleFolders = {
  zh: "zh-Hans",
  en: "en"
};

function toggleLang() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  document.getElementById('lang-btn').innerText = currentLang === 'zh' ? 'English' : '中文';
  document.documentElement.lang = currentLang === 'zh' ? 'zh-Hans' : 'en';
  applyTranslations();
  updateMeta();
  updateBadge();
  updateScreenshots();
}

function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let translation = translations[currentLang];
    
    for (const k of keys) {
      if (translation && translation[k] !== undefined) {
        translation = translation[k];
      } else {
        translation = null;
        break;
      }
    }

    if (translation) {
      el.innerHTML = translation;
    }
  });
}

function updateMeta() {
  document.title = pageMeta[currentLang].title;
}

function updateBadge() {
  const badgeImg = document.getElementById('app-store-badge');
  if (badgeImg) {
    badgeImg.src = appStoreBadge[currentLang];
  }
}

function updateScreenshots() {
  const folder = screenshotLocaleFolders[currentLang];
  document.querySelectorAll('[data-screenshot]').forEach((img) => {
    const index = String(img.dataset.screenshot).padStart(2, '0');
    img.src = `${screenshotBasePath}/${folder}/iphone-6.9-${index}.png`;
  });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('lang-btn').innerText = currentLang === 'zh' ? 'English' : '中文';
  document.documentElement.lang = currentLang === 'zh' ? 'zh-Hans' : 'en';
  applyTranslations();
  updateMeta();
  updateBadge();
  updateScreenshots();
});
