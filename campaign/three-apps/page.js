const copy = {
  zh: {
    pageTitle: "灵感、问题与会议 — InspirationDraft · Beiwen · WristMark",
    description: "灵感树洞、备问与时扣：记录还没成形的想法、在模型准备好后离线提问，并把会议留待回顾。",
    eyebrow: "三款 App，各自在关键时刻派上用场",
    headline: "把灵感留下，把问题问明白，把会议记完整。",
    intro: "从灵感记录，到离线问答，再到会议回顾。根据当下需要，选择合适的工具。",
    bundleEyebrow: "灵感树洞 + 备问",
    bundleTitle: "两款 App，组合优惠",
    bundleNote: "App Store 套装正在准备审核。获批后，实际售价与可售地区以商店页面显示为准。",
    bundleStatus: "审核前预览",
    inspirationKicker: "把未完成的想法先留下",
    inspirationDescription: "随手留下灵感，准备好时再整理、继续发展。",
    beiwenKicker: "网络不可靠时，也能继续问",
    beiwenDescription: "本地模型准备好后，可在离线时继续问答、翻译和查看图片参考。",
    modelNote: "离线使用需要先下载并准备好本地模型。",
    wristmarkKicker: "把会议留待之后回顾",
    wristmarkDescription: "从 Apple Watch 或 iPhone 记录会议，之后回听、查看转录和整理会后内容。",
    appStoreLink: "在 App Store 查看",
    separateLabel: "时扣单独提供",
    closing: "三款独立 App，各自解决不同场景。选择适合此刻的一款；灵感树洞与备问的组合优惠将在套装审核通过后提供。",
    privacy: "隐私政策",
    support: "支持",
    brandCn: "灵感树洞",
    homeLabel: "灵感树洞首页",
    appsLabel: "三款 App",
    inspirationPrimary: "灵感树洞",
    inspirationSecondary: "InspirationDraft",
    beiwenPrimary: "备问",
    beiwenSecondary: "Beiwen",
    wristmarkPrimary: "时扣",
    wristmarkSecondary: "WristMark",
    languageLabel: "切换到英文",
    languageButton: "English",
    heroAlt: "三款 App 的日常使用场景：灵感树洞、旅途中的备问，以及时扣会议回顾。",
    inspirationAlt: "手机显示灵感树洞中的灵感卡片，旁边的笔记本上长出微光枝叶。",
    beiwenAlt: "旅途中，用户在车站查看手机。",
    wristmarkAlt: "方形手表、手机与谈话场景，表达记录会议后再回顾。"
  },
  en: {
    pageTitle: "Ideas, questions, and meetings — InspirationDraft · Beiwen · WristMark",
    description: "InspirationDraft, Beiwen, and WristMark: keep unfinished ideas, ask offline when your local model is ready, and revisit your meetings.",
    eyebrow: "THREE APPS · THREE MOMENTS",
    headline: "Keep ideas. Ask offline. Revisit meetings.",
    intro: "Capture a thought, get help without a reliable connection, then come back to your meetings when you are ready.",
    bundleEyebrow: "InspirationDraft + Beiwen",
    bundleTitle: "Two apps, one discounted bundle",
    bundleNote: "The App Store bundle is being prepared for review. After approval, the App Store will show the price and storefront availability.",
    bundleStatus: "Preview before review",
    inspirationKicker: "Keep the thought before it takes shape",
    inspirationDescription: "Capture an idea now. Organize it and keep developing it when you are ready.",
    beiwenKicker: "Keep asking when the connection drops",
    beiwenDescription: "When your local model is ready, continue asking questions, translating, and getting image guidance offline.",
    modelNote: "Download and prepare the local model before using Beiwen offline.",
    wristmarkKicker: "Keep the meeting for later",
    wristmarkDescription: "Capture a meeting from Apple Watch or iPhone, then revisit its recording, transcript, and follow-up notes.",
    appStoreLink: "View on the App Store",
    separateLabel: "Available separately",
    closing: "Three independent apps for different moments. Choose what fits now. The InspirationDraft + Beiwen bundle will be available after App Store review.",
    privacy: "Privacy",
    support: "Support",
    brandCn: "",
    homeLabel: "InspirationDraft home",
    appsLabel: "Three apps",
    inspirationPrimary: "InspirationDraft",
    inspirationSecondary: "",
    beiwenPrimary: "Beiwen",
    beiwenSecondary: "",
    wristmarkPrimary: "WristMark",
    wristmarkSecondary: "",
    languageLabel: "Switch to Chinese",
    languageButton: "中文",
    heroAlt: "Three everyday app scenes: saving an idea, using Beiwen while traveling, and reviewing a WristMark meeting.",
    inspirationAlt: "An iPhone displays InspirationDraft idea cards beside a notebook with a glowing sprout.",
    beiwenAlt: "A traveler checks a phone in a station.",
    wristmarkAlt: "A square smartwatch, phone, and a conversation at a meeting table."
  }
};

const langButton = document.getElementById("language-toggle");
let language = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";

function applyLanguage() {
  const content = copy[language];
  document.documentElement.lang = language === "zh" ? "zh-Hans" : "en";
  document.title = content.pageTitle;
  document.querySelector('meta[name="description"]').content = content.description;
  document.querySelectorAll("[data-copy]").forEach((element) => {
    const key = element.dataset.copy.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    const value = content[key];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll("[data-alt]").forEach((element) => {
    const value = content[element.dataset.alt];
    if (value !== undefined) element.alt = value;
  });
  document.querySelectorAll("[data-aria-label]").forEach((element) => {
    const value = content[element.dataset.ariaLabel];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });
  langButton.textContent = content.languageButton;
  langButton.setAttribute("aria-label", content.languageLabel);
}

langButton.addEventListener("click", () => {
  language = language === "zh" ? "en" : "zh";
  applyLanguage();
});

applyLanguage();
