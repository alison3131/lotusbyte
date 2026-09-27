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
  equityNote:
    "所有数字均为美元现金、远程，需与美东时区有重叠。地点与客户简报可能调整区间。代币或股权仅在该客户有时才会出现在 offer 中。",
  partTimeNote: "每周 15–25 小时，按小时计费。",
  advisoryNote:
    "按日费率覆盖评审、工作坊与办公时间。通常每月 1–4 天。也可在 offer 中约定月度 retainer。",
  hiringNote:
    "岗位由 Lootrushs 以全职、兼职或顾问形式发布——在表单中选一种。我们寻源、筛选与面试——或由客户向我们介绍候选人。通过我们的流程后，你可能与客户公司面谈。双方同意后，你通过 Lootrushs 加入，并在该客户产品上工作。",
};

export const jobsBySlugZh: Record<string, JobCopy> = {
  "web3-designer": {
    title: "Web3 设计师",
    department: "设计",
    level: "中级",
    location: "远程",
    summary:
      "覆盖 Lootrushs 客户项目（含 BrickFi）的核心设计席位——产品界面、钱包流程，以及它们共用的视觉体系。",
    about:
      "Lootrushs 是一家远程 Web3 开发与人才公司。我们以自有品牌招聘设计师，并配置到客户产品——包括我们为客户开发并交付的房产份额化平台 BrickFi，以及其他协议与 dApp。这不是纯市场岗，也不是纯品牌岗。多数时间在产品里：投资、铸造、兑换、管理，以及这些流程必然出现的失败状态。\n\n你每天与前端工程师，以及产品经理或（在小项目上）CTO 协作。第一个月是 BrickFi 的投资与持仓界面，以及 lootrushs.com 的设计系统，使其与客户产品保持一致。需与美东有几小时重叠。请在本站提交简历与作品集链接。",
    responsibilities: [
      "负责 BrickFi 及分配客户项目的端到端 dApp 与营销界面。",
      "设计钱包连接流程：连接、错误网络、pending、revert 与成功。",
      "保持产品 UI、lootrushs.com 与上线页的视觉一致。",
      "交付工程师无需逐帧讲解即可实现的 Figma 文件。",
      "参加你所配置项目的工程站会。",
      "与用过钱包的用户做短可用性测试，而不只是创始人。",
      "在上线日需要时产出招聘与发布素材；产品工作仍优先。",
      "沉淀按钮、toast、回执等模式，避免下一个项目从零开始。",
    ],
    requirements: [
      "2–4 年产品或视觉设计经验，有可讲解的已上线 web 作品。",
      "作品集含复杂产品 UI——多步流程，而不只是落地页。",
      "熟练 Figma，含其他设计师可继承的组件与变体。",
      "能写简短流程说明，让工程师无需你在通话中也能实现。",
      "远程工作，并与美东上午或下午有重叠。",
    ],
    niceToHave: [
      "作品集中有已上线的加密或金融科技产品",
      "上线后仍维护过的品牌体系",
      "轻度代码原型",
      "动效或原型工具（Rive、Principle、ProtoPie）",
    ],
  },
  "product-designer-dapps": {
    title: "产品设计师（dApp）",
    department: "设计",
    level: "中级",
    location: "远程",
    summary:
      "专精 BrickFi 与客户 dApp 的钱包连接产品设计——投资、铸造、兑换与管理，含每个流程“难看的中间态”。",
    about:
      "这是纯产品席位。你不会去做展会展位物料。你负责 BrickFi 投资者体验，以及我们配置给你的客户 dApp 流程：研究、信息架构、UI，以及交易失败时出现的状态。\n\n我们期望你与工程争论什么该上链、什么该在 UI。我们期望你坐在用过 MetaMask 或 Phantom 的人身边，看他们卡在哪里。第一季度是 BrickFi 投资/持仓，外加一个客户铸造或金库界面。你向高级设计师汇报（该席位空缺时向 CTO）。",
    responsibilities: [
      "设计 BrickFi 投资者流程：房产浏览、份额购买、收益、账单与支持。",
      "设计客户铸造、兑换、金库与管理流程，含 pending、失败与错误网络状态。",
      "构建并维护前端真正使用的 Figma 库（token、组件、回执）。",
      "在进冲刺前，原型化高风险交互（连接、切链、paymaster）。",
      "做轻量可用性测试，并写明因此改了什么。",
      "与前端一起处理边界：RPC 延迟、索引滞后、部分成交。",
      "当合作为产品界面时，参加客户 kickoff。",
      "把可访问性基础（对比度、焦点、文案长度）写进文件，而不是事后补。",
    ],
    requirements: [
      "3+ 年已上线 web 或移动产品设计经验。",
      "多步、高信任流程作品集（钱包、支付、券商、身份等）。",
      "至少有一个上线后仍由你负责的产品——不只是概念稿。",
      "能在没有实时 Figma 分享的情况下，用文字讲清流程。",
    ],
    niceToHave: ["已上线 Web3 UI", "设计系统所有权", "产品动效（不只是影片）", "研究实践"],
  },
  "senior-web3-designer": {
    title: "高级 Web3 设计师",
    department: "设计",
    level: "高级",
    location: "远程",
    summary: "为每个交付界面设定质量标准。辅导中级设计师。与产品经理和 CTO 一起决定我们拒绝设计什么。",
    about:
      "你曾设计过加密或复杂金融科技产品，并能在创始人面前捍卫更简单的流程。你仍亲自画难屏。你也会在中级设计师作品进工程前做评审。\n\n设计负责人席位有人时向其汇报，否则向 CTO。当前负荷是 BrickFi 投资者仪表盘与客户钱包 UX 模式。你会参加客户工作坊。你不会被要求管理整个设计组织——那是设计负责人 / 设计负责人（Head）的职责。",
    responsibilities: [
      "主导 BrickFi 及其他旗舰界面：投资者、管理与报告。",
      "定义跨客户可复用的钱包 UX 模式（连接、切链、paymaster、回执）。",
      "辅导中级设计师：评审、招聘意见与文件结对。",
      "向客户与工作室领导展示作品，不要一堆填充页。",
      "当简报要求一个冲刺里做市场、代币和移动端时，主动砍范围。",
      "守住空态、错误态与管理态——只有 happy path 不算完成。",
      "与前端一起做你设计流程的实现 QA。",
      "在需要产品级质量时，参与 lootrushs.com 与上线页。",
    ],
    requirements: [
      "5+ 年产品设计，含对线上产品的高级所有权。",
      "已上线 Web3 或相邻高信任产品（支付、券商、身份、交易）。",
      "有证据表明你辅导过其他设计师，或曾是工程团队唯一设计师。",
      "能开工作坊并带走决策，而不是一墙便利贴。",
    ],
    niceToHave: [
      "无管理头衔下的设计领导力",
      "RWA 或房地产产品",
      "撰写设计 RFC",
      "引导/facilitation 训练",
    ],
  },
  "smart-contract-engineer": {
    title: "智能合约工程师",
    department: "工程",
    level: "中级",
    location: "远程",
    summary: "用 Foundry 实现并测试生产级 Solidity——代币、金库、质押与 BrickFi 发行——不是教程仓库。",
    about:
      "你加入协议小组，与高级合约工程师以及负责 dApp 的人协作。典型工作是明确模块：权限、事件、测试、部署脚本，以及前端可用的 ABI。\n\n我们用 Foundry。没有测试、或没有说明升级与管理权限的 PR 会被打回。你不必主导过审计，但需要有上过公网的交付。首批项目可能是 BrickFi 模块或客户金库/质押。",
    responsibilities: [
      "为 BrickFi（份额代币、分红、白名单）与客户协议实现合约模块。",
      "为自己负责的代码写 Foundry 单元、fork 与不变量测试。",
      "文档化管理角色、暂停路径，以及 keeper 错过窗口时的行为。",
      "在请高级评审前，先自审 Gas。",
      "协助前端处理 ABI、事件与预期 revert 原因。",
      "参与你所写模块的测试网与主网部署。",
      "在发明新权限模型前，先读 OpenZeppelin 与我们的内部模式。",
      "对每个可动资金的模块留下 changelog 与威胁说明。",
    ],
    requirements: [
      "2+ 年专业软件经验，含生产环境 Solidity。有公网浏览器链接更好。",
      "日常熟练 Foundry 或 Hardhat：测试、fork、脚本。",
      "能说明如何升级、暂停或迁移线上合约。",
      "PR 与客户说明需要清晰书面英语。",
    ],
    niceToHave: ["参与过审计", "生产环境 ERC-4626、3643 或 1155", "TypeScript 部署脚本"],
  },
  "solana-rust-engineer": {
    title: "Solana / Rust 工程师",
    department: "工程",
    level: "中级",
    location: "远程",
    summary: "为游戏、市场与消费端 dApp 编写 Solana 程序及其链下服务。",
    about:
      "我们多数工作量在 EVM。我们仍接 Solana——压缩 NFT、游戏内经济、消费端铸造——需要真正上过程序的人，而不只是完成训练营。\n\n你负责程序设计、Anchor 测试，以及与之通信的 TypeScript 客户端。不会要求你同时负责 Solidity 队列。会要求你在签日期前诚实估算 compute、账户与客户端体验。",
    responsibilities: [
      "为所配置项目设计并交付 Anchor 或原生程序。",
      "处理账户、PDA、compute 限制与压缩 NFT，而不是推到以后。",
      "编写前端可调用的稳健 TypeScript 客户端与交易构建器。",
      "主网前做负载测试；需要时写回滚说明。",
      "文档化升级权限、冻结，以及运维如何运行程序。",
      "与前端结对处理钱包适配器与错误映射。",
      "在范围界定时书面估算 compute 与租金。",
    ],
    requirements: [
      "生产环境 Rust 经验。",
      "至少一个上主网的 Solana 程序，或被他人认真使用过的 devnet。",
      "愿意放进申请材料的 TypeScript 客户端。",
    ],
    niceToHave: ["压缩 NFT", "Jito / 优先费", "Move", "游戏或 NFT 市场经验"],
  },
  "fullstack-web3-engineer": {
    title: "全栈 Web3 工程师",
    department: "工程",
    level: "中级",
    location: "远程",
    summary: "交付完整切片：合约或集成、小型 API/索引消费端，以及客户 dApp 与 BrickFi 的钱包连接 UI。",
    about:
      "许多合作规模不够全程各配一名协议与一名前端。这个席位适合同一周能从 Solidity 接口做到 Next.js 界面的人。\n\nBrickFi 报告（链上持仓到投资者可下载文档）是当前例子。范围确定后你会与客户谈实现细节——不会要求你销售。",
    responsibilities: [
      "用 Next.js、wagmi/viem 与连接器构建 dApp。",
      "实现或集成合约与 subgraph，或 TypeScript 索引器。",
      "为自己交付的功能负责认证、会话与钱包错误态。",
      "在流程不应只活在浏览器时，写 TypeScript 服务端路由。",
      "为自己负责的部分写测试（Foundry 和/或前端）。",
      "交接运维手册：环境变量、管理交易、索引滞后怎么办。",
      "与设计师和产品经理在同一工单上协作，而不是每周甩一堆。",
    ],
    requirements: [
      "3+ 年全栈经验，含至少一个生产环境 Web3 应用。",
      "扎实的 TypeScript。",
      "足够的 Solidity（或等价）能力，能负责一个模块或严肃集成。",
    ],
    niceToHave: ["The Graph、Ponder 或 Envio", "Paymaster", "移动端", "Postgres"],
  },
  "frontend-dapp-engineer": {
    title: "前端 dApp 工程师",
    department: "工程",
    level: "中级",
    location: "远程",
    summary: "让钱包连接产品感觉像真正软件——铸造、兑换、投资与管理，不要卡在 Connect。",
    about:
      "你负责连接器、交易状态、切链，以及让 dApp 可用的细节。技术栈：TypeScript、Next.js、wagmi/viem。我们不需要又一个落地页。\n\n你与一名产品设计师以及合约负责人协作。代码在 GitHub；临近上线时期望当天完成评审。通常起点是 BrickFi 仪表盘与客户铸造/管理界面。",
    responsibilities: [
      "根据 Figma 用 React / Next.js 构建带真实链状态的响应式 dApp UI。",
      "处理连接、签名、Gas、回执与恢复——含失败与卡住的交易。",
      "在索引滞后时，把协议状态翻译成清晰界面。",
      "提升可访问性与性能；用户触发的 RPC 我们买单。",
      "为一旦出错会亏钱的流程加覆盖（投资、提现、管理暂停）。",
      "带着工单里的交易哈希修生产问题。",
      "模式稳定后，在 BrickFi 与客户间共享小型钱包组件库。",
    ],
    requirements: [
      "3+ 年生产环境 React。",
      "至少交付过一个钱包连接产品。",
      "熟悉 Next.js App Router 与 TypeScript。",
      "能在区块浏览器中调试失败交易，而无需等合约作者。",
    ],
    niceToHave: ["SIWE / 通行密钥", "设计系统", "动效实现", "账户抽象 UI"],
  },
  "defi-protocol-engineer": {
    title: "DeFi 协议工程师",
    department: "工程",
    level: "高级",
    location: "远程",
    summary: "设计并实现 DeFi 原语：市场、流动性、收益与风控——不是包一层 fork 就叫协议。",
    about:
      "你理解 AMM、借贷与金库在现实中如何失败：预言机操纵、残留授权、破坏的不变量、keeper 缺口。客户雇我们是为了扛住这些，而不是再部署一个教程金库。\n\n你将规格化模块、写经济与不变量测试，并文档化运营手册。上线门槛上与安全工程师协作。高级标准：你曾交付或实质贡献过别人真正用钱使用的线上协议。",
    responsibilities: [
      "规格化并实现带明确风险的 DeFi 模块（预言机、清算、费用）。",
      "写经济与不变量测试，而不只是 happy-path 单元测试。",
      "在“完成”前评审预言机、keeper 与跨链桥集成。",
      "文档化运营手册：谁可暂停、谁可设费、陈旧预言机时怎么办。",
      "估算并排期工作，使审计能在主网前发生。",
      "向产品经理与非技术创始人解释权衡，不隐瞒危险。",
      "在这类问题上辅导中级合约工程师。",
    ],
    requirements: [
      "已交付或实质贡献过线上 DeFi 协议。",
      "深厚 Solidity 与测试（Foundry fuzz/不变量或等价）。",
      "能讲清一次历史攻击，以及你会如何改设计。",
    ],
    niceToHave: ["量化或研究背景", "Restaking", "Keeper 网络", "公开发布的复盘"],
  },
  "rwa-real-estate-engineer": {
    title: "RWA / 房地产工程师",
    department: "工程",
    level: "中级",
    location: "远程",
    summary: "构建链上房地产与 RWA 产品——BrickFi 上的份额、分红、资格与投资者报告。",
    about:
      "BrickFi 是 Lootrushs 开发并交付的客户房地产投资平台。你扩展代币化、发行与投资者仪表盘。法务与资格规则是工作的一部分。我们不会要求你发明证券建议；你会实现律师指定的门槛。\n\n这可以是你的主任务（不是 DEX 的边角时间）。你通过 Lootrushs 与 BrickFi 产品经理和设计师协作。转账、锁仓与报告必须匹配客户对投资者的说明——测试与审计轨迹不是可选项。",
    responsibilities: [
      "实现份额发行、转账、锁仓与分红。",
      "把链上状态接到投资者与管理 UI。",
      "与产品一起处理 KYC 与资格门槛；不要随意多收 PII。",
      "强化任何动资金或份额的报告与审计轨迹。",
      "写覆盖资格失败、暂停发行与分红边界的测试。",
      "带着交易哈希与索引滞后意识处理生产问题。",
      "文档化管理权限，便于运维与律师审阅。",
    ],
    requirements: [
      "生产环境 Solidity 或全栈 Web3，至少有一个线上应用。",
      "对 RWA 或金融科技有兴趣，并能耐心对待产品约束（资格、报告）。",
      "TypeScript 足够强，能负责或结对仪表盘。",
    ],
    niceToHave: ["ERC-3643 / 1400 或类似权限代币", "KYC 提供商", "房地产或 proptech 领域"],
  },
  "senior-smart-contract-engineer": {
    title: "高级智能合约工程师",
    department: "工程",
    level: "高级",
    location: "远程",
    summary: "负责协议级 Solidity：代币、金库、质押与自定义逻辑——含 BrickFi 与客户上线。",
    about:
      "高级席位：你设定模式、评审 PR，并陪到部署。你会参加审计通话。当客户想要能 rug 的 owner 时，你会说不。\n\n当前负荷是 BrickFi 发行与客户金库/质押。你与中级合约工程师、安全与前端协作。薪酬按合作形式列在岗位上——全职现金、兼职时薪或顾问日费率。",
    responsibilities: [
      "用 Foundry 或 Hardhat 编写、测试并交付 Solidity。",
      "在写 happy-path 第一行前，先建模权限、升级、暂停与不变量。",
      "优化热路径 Gas，同时不隐藏复杂度。",
      "主导评审，并抬高中级工程师的工程标准。",
      "规格化威胁模型：管理密钥、预言机、重入、升级失误。",
      "对最高风险路径运行或协调模糊测试。",
      "在客户范围通话中诚实估算链上工作。",
      "与运维结对处理部署密钥、演练与主网。",
    ],
    requirements: [
      "4+ 年交付生产环境 Solidity。",
      "模糊测试与 fork 测试是习惯，不是幻灯片。",
      "曾把工作带过外部审计或严肃内部评审。",
      "能读懂 TypeScript，足以抓住 ABI 与索引错误。",
    ],
    niceToHave: ["审计经验", "形式化验证", "Move 或 Vyper", "L2 生产经验"],
  },
  "senior-blockchain-developer": {
    title: "高级区块链开发者",
    department: "工程",
    level: "高级",
    location: "远程",
    summary: "端到端负责生产区块链工作——合约、集成及周边系统——覆盖 BrickFi 与客户平台。",
    about:
      "这是 Lootrushs 链上工程的高级 IC 标准。当客户需要一个人扛住整条链切片时配置：设计、实现、评审、部署顺序，以及什么要等审计。\n\n你仍写代码。你也会为中级工程师拆分工作。基础年薪约 18–22 万美元，代币或股权按 offer。远程，需与美东重叠。",
    responsibilities: [
      "设计、实现并交付智能合约与链集成。",
      "在我们支持的 EVM 网络上主导评审、测试与主网部署。",
      "与产品、设计与前端协作钱包与协议体验。",
      "抬高中级工程师与上线质量标准。",
      "与运维协调测试网 → 审计 → 主网（密钥、多签、监控）。",
      "参加范围通话，并说明什么塞不进日期。",
      "写六个月后另一名工程师仍能跟上的架构说明。",
    ],
    requirements: [
      "4+ 年交付生产区块链软件。",
      "深厚 Solidity/EVM（或等价链深度）加上扎实 TypeScript。",
      "曾把协议或产品工作带过审计与主网。",
    ],
    niceToHave: ["Foundry", "L2", "RWA / BrickFi 类产品", "事故响应"],
  },
  "senior-backend-engineer-java": {
    title: "高级后端工程师（Java）",
    department: "工程",
    level: "高级",
    location: "远程",
    summary: "负责链旁 Java 服务——结算、托管相关、索引与投资者 API——覆盖 BrickFi 与客户产品。",
    about:
      "这是后端席位，不是 Solidity 席位。你写读写链状态的 Java 服务：确认、重试、幂等结算，以及产品真正调用的 API。合约工程师负责链上逻辑。你负责交易落地后仍必须正确的一切。\n\n当前负荷含 BrickFi 投资者与分红服务，以及需要 JVM 团队的客户工作，而不是再做一个 TypeScript 服务。你评审中级后端 PR。不会要求你同时负责前端。",
    responsibilities: [
      "设计并交付与我们支持的 EVM 或其他链通信的 Java 服务：RPC、事件、回执与重组。",
      "构建在重试下仍幂等的结算、托管相关或报告 API。",
      "建模确认、nonce/密钥使用，以及节点说谎或滞后时的行为。",
      "负责持仓与兑付的持久化，避免 UI 直接刮 RPC。",
      "评审后端 PR，抬高测试、超时与可观测性标准。",
      "与合约和 DevOps 协作 ABI 变更、部署顺序与运维手册。",
      "当工作是 Java 团队对接协议时，参加客户范围讨论。",
      "留下他人可运维的服务：指标、告警与书面失败模式。",
    ],
    requirements: [
      "5+ 年生产环境 Java（或 JVM）后端经验。",
      "交付过与区块链通信的软件——索引、结算、托管、支付或等价——不只是钱包旁的 CRUD API。",
      "熟悉 SQL、队列与至少一次投递语义。",
      "能读懂 Solidity 接口或 ABI，足以抓住不匹配。",
    ],
    niceToHave: ["Spring 或 Quarkus", "web3j / web3j-ext", "Kafka 或等价", "RWA / 支付 / 托管"],
  },
  "senior-backend-engineer-go": {
    title: "高级后端工程师（Go）",
    department: "工程",
    level: "高级",
    location: "远程",
    summary: "负责链旁 Go 服务——索引器、中继、API 与 worker——覆盖 BrickFi 与客户产品。",
    about:
      "这是后端席位，不是协议语言席位。你写索引事件、提交并监视交易、服务产品与运维所需 API 的 Go。合约工程师负责链上逻辑。你负责不丢日志、不双提交、在 RPC 嘈杂时不卡住的进程。\n\n当前负荷含 BrickFi 报告与客户索引器/中继。你评审中级 Go。不会要求你同时负责 dApp UI。",
    responsibilities: [
      "设计并交付与我们支持的 EVM、Solana 或其他链通信的 Go 服务。",
      "构建能处理重组、重试与回填的索引器、中继与 worker。",
      "暴露产品与运维可依赖的 API 与任务——不是只有你能跑的脚本。",
      "把 RPC、内存池与密钥使用当作失败域：超时、限流与签名隔离。",
      "从正确性、context 取消与可观测性评审 Go PR。",
      "与合约和 DevOps 协作 ABI/账户变更与部署顺序。",
      "当工作是协议旁的 Go 基础设施时，参加客户范围讨论。",
      "留下运维手册：重启什么、回填什么、什么意味着链在说谎。",
    ],
    requirements: [
      "5+ 年生产环境 Go。",
      "交付过与区块链通信的软件——索引器、中继、节点旁服务或等价——不只是 REST API。",
      "熟悉 SQL 或存储、队列与并发 worker。",
      "能读懂合约 ABI 或 Solana 账户布局，足以抓住不匹配。",
    ],
    niceToHave: ["go-ethereum", "Cosmos 或 Solana Go 客户端", "PostgreSQL", "RWA / 支付 / 托管"],
  },
  "blockchain-devops-engineer": {
    title: "区块链 DevOps 工程师",
    department: "工程",
    level: "中级",
    location: "远程",
    summary: "在链嘈杂时，保持节点、索引器、中继与部署健康。",
    about:
      "你负责从合并到主网：CI、部署密钥、RPC 策略与值班看板。我们是工作室，不是 7×24 交易公司，但仍有 keeper、中继与客户主网。\n\n你与写模块的工程师共担生产协议值班。轮值写在纸上。营销站宕机不会叫你。Kubernetes 有用；链相关运维才是本职。",
    responsibilities: [
      "运行合约与 dApp 的 CI，含 fork 测试与预览部署。",
      "运维 RPC、索引器、机器人与中继。",
      "埋点日志、链路与链上告警（失败的 keeper、卡住的 subgraph、异常管理交易）。",
      "保护密钥与签名基础设施；聊天里不放密钥。",
      "执行部署手册：硬件钱包或多签、演练，再主网。",
      "写下一位值班的人真正会跟着做的手册。",
      "防止 staging 与 prod 在没有 PR 的情况下漂移。",
    ],
    requirements: [
      "生产环境 DevOps 或 SRE 经验。",
      "至少运维过一条链的节点、RPC 或索引栈，且在它坏过的时候。",
      "熟悉 GitHub Actions（或类似）与 Linux。",
    ],
    niceToHave: ["Foundry CI", "Tenderly 或 Defender", "SOC2", "非教程级 Kubernetes"],
  },
  "smart-contract-security-engineer": {
    title: "智能合约安全工程师",
    department: "安全",
    level: "高级",
    location: "远程",
    summary: "在主网之前——而不是事故之后——对 Lootrushs 交付的合约做威胁建模、评审与加固。",
    about:
      "你与协议工程师一起写不变量，并抓住后期审计容易漏的点。较大上线我们仍用外部审计。这个席位是 Lootrushs 内部能挡住部署的人。\n\n你的主职不是公司 IT 或 SOC2。你会在设计还能改时坐进协议团队。需要专家级熟悉 EVM 攻击类型；只有 PDF 背景不够。",
    responsibilities: [
      "在标记完成前评审合约、升级路径与管理权限。",
      "对关键路径运行模糊、不变量与差分测试。",
      "写出工程师能修的发现：严重性、测试，以及你能给出的补丁建议。",
      "与运维一起定义上线清单与事故手册。",
      "带着对我们不算意外的材料包参加外部审计 kickoff。",
      "专门威胁建模 BrickFi 发行与客户金库，而不只是“通用 DeFi”。",
      "跟踪审计后的剩余风险，并确保 CTO 可见。",
    ],
    requirements: [
      "有审计、赏金或协议安全经验——有可讨论的例子。",
      "精通 Solidity 攻击类型。",
      "能写 Foundry 测试，而不只是 PDF 报告。",
    ],
    niceToHave: ["Echidna / Medusa", "形式化方法", "公开 writeup", "RWA 或权限代币"],
  },
  "product-manager-web3": {
    title: "产品经理（Web3）",
    department: "产品",
    level: "中级",
    location: "远程",
    summary: "把链约束变成可交付产品——范围、排序，以及对客户诚实的沟通。",
    about:
      "你夹在创始人、工程师与设计师之间。你知道什么必须上链。你写含威胁模型与空态的规格。你排能真正部署的 MVP。\n\n你端到端负责一个产品面（BrickFi 或客户）。若你只做过 CRUD 用户故事，这个岗位不合适。需与美东有几小时重叠。",
    responsibilities: [
      "写含用户流程、链上/链下、空/错/管理态与威胁说明的规格。",
      "把测试网、审计窗口与主网排进日历来序列化 MVP。",
      "在不隐瞒风险的情况下做客户沟通。",
      "参加工程规划；砍范围，而不是默默拉日期。",
      "上线后定义少量成功指标。TVL 不总是对的那个。",
      "按交付清单分流入站功能请求。",
      "保留书面决策日志，避免每周重吵白名单。",
    ],
    requirements: [
      "3+ 年 PM 经验，有已上线加密或金融科技产品。",
      "能与工程师讨论钱包与合约而不虚张声势。",
      "写出创始人能对内转发的材料。",
    ],
    niceToHave: ["RWA", "代币上线", "B2B 或客户服务", "SQL 或基础链上分析"],
  },
};
