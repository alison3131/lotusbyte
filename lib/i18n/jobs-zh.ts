export type JobCopy = {
  title: string;
  department: string;
  level: string;
  location: string;
  summary: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
};

export const departmentsZh: Record<string, string> = {
  Design: "设计",
  Engineering: "工程",
  Security: "安全",
  Data: "数据",
  Product: "产品",
  Growth: "增长",
  Operations: "运营",
  Leadership: "领导层",
};

export const levelsZh: Record<string, string> = {
  Mid: "中级",
  Senior: "高级",
  Staff: "资深",
  Lead: "负责人",
  Executive: "高管",
};

export const jobNotesZh = {
  equityNote: "数字为美元现金、远程，需与美东有几小时重叠。地点可能调整区间。Offer 来自 Lotusbyte。",
  partTimeNote: "每周 15–25 小时，按小时计费。",
  advisoryNote: "按日费率覆盖评审与工作会话。通常每月 1–4 天。也可在 offer 中约定月度 retainer。",
  hiringNote:
    "岗位由 Lotusbyte 以全职、兼职或顾问形式发布——在表单中选一种。我们面试；若录用，你加入工作室。客户雇佣的是 Lotusbyte。你与我们的团队一起做他们的产品。",
};

const remote = "远程";

export const jobsBySlugZh: Record<string, JobCopy> = {
  "product-designer": {
    title: "产品设计师",
    department: "设计",
    level: "中级",
    location: remote,
    summary: "为整天使用软件的操作人员设计界面——记录、队列，以及中间的状态。",
    about:
      "Lotusbyte 是一家产品工作室。我们为物业、诊所、物流和现场团队设计并构建定制软件。这个席位是产品设计，不是纯品牌岗。\n\n多数时间在产品里：与做事的人研究、他们能用的界面，以及工程师能构建的文件。首批项目可能是 Stratafi 的工单流程和一个客户门户。远程，需与美东有几小时重叠。",
    responsibilities: [
      "负责所分配客户产品的流程，从研究到上线界面。",
      "设计空、加载、错误与权限状态，而不只是顺利路径。",
      "保持 lotusbyte.org 与客户产品的视觉一致。",
      "交出工程师无需逐帧会议就能构建的 Figma。",
      "坐在操作人员旁边，记下他们卡住的地方。",
    ],
    requirements: [
      "3 年以上工作软件设计经验，而不是只有营销网站。",
      "作品集包含已上线的产品界面，并简短说明上线后改了什么。",
      "能使用 Figma，并能与工程师一起开工作会话。",
      "文字清楚。我们用文档做决定。",
    ],
    niceToHave: ["运营或医疗软件", "设计系统", "轻量可用性测试"],
  },
  "senior-product-designer": {
    title: "高级产品设计师",
    department: "设计",
    level: "高级",
    location: remote,
    summary: "为产品界面设标准，并在进入工程之前评审设计。",
    about: "你仍设计难的界面。你也评审中级工作并参加客户工作坊。当前负荷是 Stratafi 与客户门户。向工作室负责人汇报。不会要求你管理一个大型设计组织。",
    responsibilities: [
      "主导关键界面：管理、记录与报告。",
      "主持评审，并维护团队能用的小型设计系统。",
      "与产品经理一起决定什么不做。",
      "参加客户工作坊，并把听到的内容变成流程。",
    ],
    requirements: [
      "5 年以上日常使用型产品的设计经验。",
      "曾向相关方争取更简单的流程并交付。",
      "有指导或评审其他设计师的证据。",
    ],
    niceToHave: ["B2B 运营产品", "内容设计", "工作坊引导"],
  },
  "product-engineer": {
    title: "产品工程师",
    department: "工程",
    level: "中级",
    location: remote,
    summary: "构建界面，以及屏幕背后的应用逻辑。",
    about: "你把设计好的流程做成软件：表单、表格、权限，以及真实流程里别扭的中间态。你与一名设计师和一名后端工程师协作。代码在 GitHub。发布期间需要当天评审。\n\n通常从 Stratafi 的一个界面或客户门户的一页开始。",
    responsibilities: [
      "用 React 与 Next.js 按 Figma 构建响应式产品界面。",
      "把表单、表格和筛选接到真实数据。",
      "处理加载、空与错误状态。",
      "为数据缺失时会坏的路径写测试。",
    ],
    requirements: [
      "3 年以上用 TypeScript 交付 Web 应用。",
      "曾把一个功能从设计做到生产。",
      "能不靠幻灯片解释一个权限缺陷。",
    ],
    niceToHave: ["Postgres", "设计系统实现", "无障碍"],
  },
  "senior-product-engineer": {
    title: "高级产品工程师",
    department: "工程",
    level: "高级",
    location: remote,
    summary: "端到端负责一块产品：界面、API 形态与发布。",
    about: "你仍写功能。你也拆分工作，让小团队能交付。当产品需要一个能与客户谈话、又不会过度承诺的技术负责人时，我们会安排你。\n\n你为中级工程师扫清阻塞，并避免长出没人要的第二套仪表盘。",
    responsibilities: [
      "在开分支之前写出功能的架构与计划。",
      "临近发布时当天评审拉取请求。",
      "与设计一起判断什么该是设置、什么该是代码。",
      "陪伴上线以及最初的修复。",
    ],
    requirements: [
      "5 年以上交付生产 Web 软件。",
      "曾负责一次发布，而不只是一张工单。",
      "熟悉 React、TypeScript 与关系型数据库。",
    ],
    niceToHave: ["Next.js", "多租户应用", "指导他人"],
  },
  "backend-engineer": {
    title: "后端工程师",
    department: "工程",
    level: "中级",
    location: remote,
    summary: "构建产品背后的记录、权限与任务。",
    about: "这是应用后端席位。你写产品调用的 API、数据模型，以及发送提醒或生成报告的任务。不会要求你负责界面。",
    responsibilities: [
      "为记录、状态与历史设计表和 API。",
      "落实角色，使客户看不到其他客户的数据。",
      "为邮件、导出和提醒增加后台任务。",
      "为不能重复写入的路径写迁移和测试。",
    ],
    requirements: [
      "3 年以上使用关系型数据库的后端经验。",
      "交付过真实客户使用的 API。",
      "在意幂等与审计轨迹。",
    ],
    niceToHave: ["Postgres", "TypeScript", "队列任务"],
  },
  "senior-backend-engineer": {
    title: "高级后端工程师",
    department: "工程",
    level: "高级",
    location: remote,
    summary: "负责数据模型，以及上线后仍必须正确的服务。",
    about: "你设定模式，评审中级后端工作，并陪伴部署。当前负荷包括 Stratafi 的记录与报告，以及一个门户。如果捷径会破坏客户历史，你会说不。",
    responsibilities: [
      "负责表结构与迁移计划。",
      "评审 API 的鉴权、分页与失败行为。",
      "为不能卡住的任务增加监控。",
      "写下上线周团队使用的运行手册。",
    ],
    requirements: [
      "5 年以上生产系统后端经验。",
      "曾在生产中排查数据问题并写下修复。",
      "SQL 扎实，并注意权限。",
    ],
    niceToHave: ["TypeScript 或 Go", "报告管道", "值班习惯"],
  },
  "product-manager": {
    title: "产品经理",
    department: "产品",
    level: "中级",
    location: remote,
    summary: "把一项业务变成可交付的产品：范围、顺序，以及诚实的判断。",
    about: "你处在客户、设计与工程之间。你知道哪一步是工作、哪一步是装饰。你写的说明包含空状态。你排出团队真正能完成的第一次发布。\n\n你一次负责一个产品面，常常是 Stratafi 或一个门户。远程，需与美东重叠。",
    responsibilities: [
      "用短文档写清问题、用户与第一次发布。",
      "与设计和工程一起排序，包括什么要等。",
      "主持与客户的每周回顾。",
      "让待办与已约定的范围一致。",
    ],
    requirements: [
      "3 年以上工作软件的产品经理经验。",
      "交付过第一版，并在没有戏剧性的情况下削减范围。",
      "文字清楚。我们不用幻灯片管理。",
    ],
    niceToHave: ["B2B 工具", "运营或医疗", "工作坊引导"],
  },
  "delivery-lead": {
    title: "交付负责人",
    department: "运营",
    level: "高级",
    location: remote,
    summary: "让一到两个项目保持诚实：日期、依赖，以及客户能跟上的上线。",
    about: "你不是人员经理。你负责计划。你明白预览不是上线。你保持客户可以转发的状态，以及与我们部署方式一致的清单。\n\nLinear 或同类工具即可。我们不会要求你为了流程而做流程。",
    responsibilities: [
      "负责书面计划与每周状态。",
      "及早暴露风险，并写上日期和负责人。",
      "与工程一起走上线清单。",
      "把范围变化写下来。",
    ],
    requirements: [
      "曾与设计师和工程师一起交付软件项目。",
      "能在日期破裂的那一周之前说它是错的。",
      "对客户冷静。写作具体。",
    ],
    niceToHave: ["工作室或代理交付", "B2B 产品上线", "照料与支持交接"],
  },
};
