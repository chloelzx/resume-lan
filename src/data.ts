/**
 * 兰子昕个人主页 - 核心数据配置文件
 * 你可以在这里直接修改文案、经历和技能，修改后网页会自动更新。
 */

import { Briefcase, BookOpen, Heart } from 'lucide-react';
import React from 'react';

export interface Experience {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags: string[];
  impact: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

// 1. 实习实战经历
export const INTERN_EXP: Experience[] = [
  {
    title: "Agent Opus",
    subtitle: "AI Product Manager Intern",
    period: "2026.01 - Present",
    description: "在硅谷前沿 AI 公司负责 Agent 工作流与功能迭代，连接技术实现与用户价值。",
    tags: ["AI Agent", "GenAI", "Product Strategy"],
    impact: [
      "主导 Auto Caption 功能迭代，通过深度竞品调研与用户反馈分析，定义并推动 P0 级核心功能落地",
      "构建 GenAI 视频评估体系，利用 Mixpanel 精准调研 1,300+ 活跃用户，沉淀 Golden Sample 数据集"
    ]
  },
  {
    title: "宁德时代 (CATL)",
    subtitle: "高压系统实习生",
    period: "2024.09 - 2025.04",
    description: "在传统制造业巨头负责复杂硬件系统的项目管理与技术对接。",
    tags: ["新能源", "项目管理", "跨团队协同"],
    impact: [
      "独立完成 9 品牌 30 款车型充电系统调研，输出《产品竞争力调研报告》，为新项目配置提供决策支撑",
      "负责 PDC 控制器测试闭环管理，统筹 200+ 测试用例，组织 8 次三方技术对接会，确保关键里程碑达成"
    ]
  },
  {
    title: "上海蔚来汽车 (NIO)",
    subtitle: "产品顾问实习生",
    period: "2021.06 - 2021.10",
    description: "深入一线理解用户需求，将业务洞察转化为团队转化率的提升。",
    tags: ["汽车科技", "需求洞察", "用户运营"],
    impact: [
      "运用结构化提问精准挖掘用户核心需求，助力团队将高意向客户转化率提升约 15%",
      "基于 CRM 数据分析实现高潜客户精准画像，成功召回多位沉默用户，实习综合考核 TOP 3"
    ]
  }
];

// 2. 校园领导力经历
export const CAMPUS_EXP: Experience[] = [
  {
    title: "东华大学校团委",
    subtitle: "学生社团发展中心主任",
    period: "2023 - 2024",
    description: "统筹全校社团资源，负责大型活动的组织、协调与品牌建设。",
    tags: ["组织领导力", "资源统筹", "品牌建设"],
    impact: [
      "多次担任实践项目团队负责人，主导一项上海市级创业项目立项，展现卓越的规划与执行能力",
      "创立“九天青年工作室”，召集 32 名大学生发起多项创业项目，累计实现约 8 万元营收"
    ]
  },
  {
    title: "东华大学校级学生会",
    subtitle: "办公室主任",
    period: "2019 - 2023",
    description: "负责学生会内部行政管理、跨部门协同及核心事务跟进。",
    tags: ["行政管理", "跨部门协同", "流程优化"],
    impact: [
      "建立高效的内部沟通与文档管理体系，确保校级大型活动的高质量落地",
      "多次获评“优秀学生干部”、“团学干部”，在复杂组织环境中展现出极强的协调能力"
    ]
  }
];

// 3. 兴趣与特质
export const INTEREST_EXP: Experience[] = [
  {
    title: "Vibe Coding 探索",
    subtitle: "AI 辅助编程实践",
    period: "Ongoing",
    description: "利用 AI 工具快速构建原型，探索技术与审美结合的无限可能。",
    tags: ["AI Coding", "Rapid Prototyping", "Innovation"],
    impact: [
      "通过 AI 辅助开发个人作品集与实验性工具，深刻理解技术底层逻辑与产品交互的边界",
      "持续探索 Agent 工作流在个人生产力提升中的应用，保持对前沿技术的敏锐洞察"
    ]
  },
  {
    title: "个人公众号运营",
    subtitle: "深度内容与审美表达",
    period: "Ongoing",
    description: "通过文字与视觉传达，分享对 AI、产业数字化及个人成长的思考。",
    tags: ["内容创作", "审美表达", "个人品牌"],
    impact: [
      "坚持高质量原创内容输出，将复杂的行业洞察转化为易于理解的深度好文",
      "通过公众号建立个人辨识度，连接志同道合的行业伙伴，沉淀个人品牌资产"
    ]
  }
];

// 4. 核心能力
export const SKILLS: SkillCategory[] = [
  { title: "AI & 技术理解", skills: ["Agent 工作流搭建", "大模型应用 (LLM)", "机器学习基础", "控制算法 (MPC/EKF)"] },
  { title: "产品与项目能力", skills: ["竞品分析", "PRD 撰写", "用户调研", "数据埋点", "跨职能协作"] },
  { title: "工具栈", skills: ["Mixpanel", "Figma", "Python", "Matlab/Simulink", "飞书/Office"] }
];

// 5. 联系方式
export const CONTACT_INFO = {
  email: "1060589842@qq.com",
  phone: "182 5628 7607",
  location: "Shanghai, China",
  slogan: "寻找能够将复杂技术转化为商业价值的机会。如果你在寻找一个懂产业、懂 AI 且极具执行力的合作伙伴，欢迎联系。"
};
