
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
      title: "Keep the image<br>then make it yours",
      p1: "Preview, rotate, restore, and turn a useful subject into a sticker. Original images, derivatives, and AI analysis stay linked to the draft.",
      p2: "The material stays close to the thought instead of becoming another file to lose."
    },
    feature2: {
      title: "Text and images<br>in the same flow",
      p1: "Shape a Markdown draft with headings, lists, links, and inline images. Rewrite the words while the image blocks stay protected.",
      m1: "<strong>Markdown:</strong> Keep the persisted draft source clear and portable.",
      m2: "<strong>Images:</strong> Place original or derived material where the idea needs it.",
      m3: "<strong>Rewrite:</strong> Improve the words without losing image structure.",
      m4: "<strong>Undo:</strong> Keep editing changes reversible while the draft evolves.",
      m5: "<strong>Control:</strong> Formatting helps the idea without taking it away from you."
    },
    feature3: {
      title: "From rough thought<br>to readable piece",
      p1: "Export image-rich drafts as polished PDF or MHTML documents with consistent branding, dates, rounded images, and sticker glow.",
      p2: "Sharing should carry the shape of the thought, not just a block of raw text."
    },
    feature4: {
      title: "Take it anywhere<br>and stay private",
      p1: "<strong>Fully local:</strong> After the model is downloaded, drafts and local AI processing stay on your iPhone.",
      p2: "<strong>Your voice stays yours:</strong> Your images, ideas, and final decisions remain under your control."
    },
    materials: {
      title: "Keep the source, shape the idea",
      p1: "A real InspirationDraft image can stay beside the thought, then become a focused sticker when the draft needs it.",
      original: "Original image material · Duolingo × Luckin Coffee",
      sticker: "Derived subject sticker · ready to place in a draft"
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
      title: "先把图片留下<br>再慢慢变成你的",
      p1: "预览、旋转、还原，并把主体生成贴纸。原图、派生图和 AI 分析结果始终和草稿保持关联。",
      p2: "素材应该靠近想法，而不是变成另一堆容易丢失的文件。"
    },
    feature2: {
      title: "文字和图片<br>放在同一条创作流里",
      p1: "用标题、列表、链接和图片块整理 Markdown 草稿；全文改写时保护图片位置，不破坏原来的结构。",
      m1: "<strong>Markdown：</strong>让正文真源保持清楚、可携带。",
      m2: "<strong>图片：</strong>把原图或派生素材放在想法真正需要的位置。",
      m3: "<strong>改写：</strong>优化文字，但不丢失图片结构。",
      m4: "<strong>撤销：</strong>让编辑变化保持可逆。",
      m5: "<strong>掌控：</strong>格式让想法更清楚，同时把决定权留在你手里。"
    },
    feature3: {
      title: "从粗糙念头<br>到可以阅读的作品",
      p1: "把图文草稿导出为带有一致 Branding、日期、圆角图片和 Sticker Glow 的 PDF 或 MHTML。",
      p2: "分享应该带走想法的形状，而不只是导出一段原始文字。"
    },
    feature4: {
      title: "走到世界尽头<br>灵感依然在线",
      p1: "<strong>完全本地：</strong>下载模型后，文字、图片上下文和端侧 AI 推理都留在 iPhone 上。",
      p2: "<strong>你的声音还在：</strong>图片、想法和最终判断始终由你掌控。"
    },
    materials: {
      title: "保留原始素材，再塑造想法",
      p1: "真实的灵感树洞图片可以和想法一起留下；需要时，再把主体变成适合放进草稿的贴纸。",
      original: "原始图片素材 · 多邻国 × 瑞幸",
      sticker: "派生主体贴纸 · 可以放回草稿继续创作"
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
