/*
============================================================
论文列表：以后更新论文，主要只改这一个文件
============================================================

固定格式：
年份 | 中文/英文 | 作者角色 | 论文题目 | 作者 | 期刊信息 | DOI或网页链接

新增论文：复制任意一行，在下面新增一行并修改内容。
没有 DOI/链接：最后一栏留空即可，但最后一个“|”建议保留。
注意：正文中不要使用英文竖线符号 | ；如必须使用，请改为中文全角“｜”。

示例：
2027 | 英文 | 第一作者 | Paper title | Sun Y, Zhang X | Land Use Policy, 180: 108888 | https://doi.org/xx.xxxx/xxxxx

年份排序无需手动调整；网页会自动按年份从新到旧显示。
============================================================
*/

const PUBLICATIONS_TEXT = `
2026 | 英文 | 第一作者 | Factors influencing agricultural digital transformation: A systematic review of environmental, technological, and individual dimensions | Sun Y, Li Q, Liu H | Computers and Electronics in Agriculture, 244: 111430 | https://doi.org/10.1016/j.compag.2026.111430
2025 | 英文 | 第一作者 | Collaborative solutions for agricultural water pollution in smallholder economies: Farmers and local governments unite | Sun Y, Huang X, Paerhati B, et al. | Agricultural Water Management, 313: 109499 | https://doi.org/10.1016/j.agwat.2025.109499
2025 | 英文 | 第一作者 | Address the challenge of cultivated land abandonment by cultivated land adoption: An evolutionary game perspective | Sun Y, Miao Y, Xie Z, et al. | Land Use Policy, 149: 107412 | https://doi.org/10.1016/j.landusepol.2024.107412
2024 | 英文 | 第一作者 | Drivers and barriers to digital transformation in agriculture: An evolutionary game analysis based on the experience of China | Sun Y, Miao Y, Xie Z, et al. | Agricultural Systems, 221: 104136 | https://doi.org/10.1016/j.agsy.2024.104136
2024 | 英文 | 第一作者 | Leveraging intergovernmental data sharing for digital transformation in ecological and environmental protection | Sun Y, He J, Xiang Q, et al. | Journal of Cleaner Production, 477: 143780 | 
2023 | 英文 | 第一作者 | Inter-regional cooperation in the transfers of energy-intensive industry: An evolutionary game approach | Sun Y, Liu B, Sun Z, et al. | Energy, 282: 128313 | 
2026 | 英文 | 通讯作者 | Relocated children's adaptation in China's poverty alleviation resettlement: Challenges, influencing factors, and coping strategies | Jiang X, Sun Y, Tang L | Habitat International, 171: 103780 | 
2024 | 英文 | 通讯作者 | Geographical indication, agricultural development and the alleviation of rural relative poverty | Zhang S, Sun Y, Wang Y, et al. | Sustainable Development, 32(5): 5764–5780 | https://doi.org/10.1002/sd.2997
2024 | 英文 | 通讯作者 | Evolutionary game analysis of forest carbon note system in China | Qiao Q, Lei S, Gao X, Sun Y, et al. | Journal of Cleaner Production, 435: 140450 | 
2024 | 英文 | 通讯作者 | The rise in female consciousness contributes to advancing household energy transition: Evidence from Chinese households | Shen M, Jiang X, Sun Y, et al. | Energy, 308: 132954 | 
2024 | 英文 | 第一作者 | How can governments and fishermen collaborate to participate in a fishing ban for ecological restoration? | Sun Y, Sun Z, Zhang Y, et al. | Journal of Environmental Management, 360: 120958 | 
2021 | 英文 | 第一作者 | The multi-player evolutionary game analysis for the protective development of ecotourism | Sun Y, Liu B, Fan J, et al. | Environmental Science & Policy, 126: 111–121 | 
2025 | 英文 | 第一作者 | Collaborative governance in urban water area conservation: Strategies for mitigating blue space encroachment | Sun Y, Ye S, Zhong W, et al. | Journal of Hydrology: Regional Studies, 62: 102862 | 
2024 | 英文 | 通讯作者 | Impact of agricultural product brands and agricultural industry agglomeration on agricultural carbon emissions | Zhang S, Wen X, Sun Y, et al. | Journal of Environmental Management, 369: 122238 | 
2025 | 英文 | 合作作者 | Exploring how economic level drives urban flood risk | Fan J, Liu B, Lei T, Sun Y, et al. | Nature Communications, 16: 4857 | 
2022 | 英文 | 合作作者 | The amplification effect of unreasonable human behaviours on natural disasters | Fan J, Liu B, Ming X, Sun Y, et al. | Humanities and Social Sciences Communications, 9(1): 322 | 
2021 | 中文 | 第一作者 | 中国风险投资的时空格局及其演进 | 孙勇, 樊杰, 张亚峰, 乔琴 | 软科学, 35(11): 32–38 | 
2022 | 中文 | 第一作者 | 长三角地区数字技术创新时空格局及其影响因素 | 孙勇, 樊杰, 刘汉初, 赵腾宇 | 经济地理, 42(02): 124–133 | 
2022 | 中文 | 第一作者 | 数字技术创新对产业结构升级的影响及其空间效应——以长江经济带为例 | 孙勇, 张思慧, 赵腾宇等 | 软科学, 36(10): 9–16 | 
2024 | 中文 | 第一作者 | 高寒生态脆弱区农牧民生活垃圾集中处理激励机制与政策模拟——以藏北牧区为例 | 孙勇, 周侃, 滕鹤郅等 | 生态学报, 44(08): 3185–3198 | 
2022 | 中文 | 第一作者 | 创新创业耦合协调发展的空间格局及影响因素 | 孙勇, 张佩, 张亚峰 | 经济问题探索, (4): 37–54 | 
2024 | 中文 | 通讯作者 | 东西部产业协作何以有效：来自穗黔刺梨产业协作的观察 | 谢治菊, 孙勇, 梁琴 | 中国软科学, (09): 34–43 | 
2026 | 中文 | 通讯作者 | 地理标志促进农村产业融合的效应及其机制 | 张思慧, 文晓巍, 邢天阳, 孙勇 | 地域研究与开发，网络首发 | 
2026 | 中文 | 通讯作者 | 旅游旺季青藏高原人类活动压力及其生态风险空间管控——以藏中南为例 | 刘汉初, 虞虎, 孙勇等 | 资源科学, 48(1): 180–193 | 
2026 | 中文 | 通讯作者 | 数字技术转移对环境质量的影响及作用机制 | 孙中瑞, 孙勇, 虞虎等 | 环境科学，网络首发 | https://doi.org/10.13227/j.hjkx.202506111
2023 | 中文 | 通讯作者 | 新基建与产业升级耦合协调发展的空间格局及影响因素 | 张佩, 孙勇 | 长江流域资源与环境, 32(3): 464–477 | 
2023 | 中文 | 合作作者 | 中国陆域综合功能区及其划分方案研究 | 樊杰, 周侃, 盛科荣, 郭锐, 陈东, 王亚飞, 刘汉初, 王正, 孙勇等 | 中国科学: 地球科学, 53(02): 236–255 | 
2026 | 中文 | 合作作者 | 新时期国土空间综合治理的理论框架与科学议题——基于统筹发展与安全的视角 | 周侃, 樊杰, 徐勇, 李平星, 王强, 刘汉初, 陶岸君, 孙勇等 | 资源科学, 48(1): 1–13 | 
2021 | 中文 | 合作作者 | 长江经济带农村相对贫困格局及区域承载力约束机理 | 周侃, 樊杰, 孙勇 | 农业工程学报, 37(11): 249–258+325 | 
2020 | 中文 | 合作作者 | “十四五”时期中国城市群分类治理的政策 | 郭锐, 孙勇, 樊杰 | 中国科学院院刊, 35(7): 844–854 | 
2021 | 中文 | 合作作者 | 科研机构合作网络演化特征对创新绩效的影响——以中国科学院为例 | 孙中瑞, 樊杰, 孙勇 | 科技管理研究, 41(18): 131–139 | 
2022 | 中文 | 合作作者 | 群内和跨群双视角下成渝城市群合作创新网络时空演化研究 | 孙中瑞, 樊杰, 孙勇 | 地域研究与开发, 41(1): 26–31+44 | 
`;

const PUBLICATIONS = PUBLICATIONS_TEXT
  .trim()
  .split(/\r?\n/)
  .map(line => line.trim())
  .filter(line => line && !line.startsWith("#"))
  .map(line => {
    const parts = line.split("|").map(x => x.trim());
    return {
      year: parts[0] || "",
      language: parts[1] || "",
      tag: parts[2] || "",
      title: parts[3] || "",
      authors: parts[4] || "",
      journal: parts[5] || "",
      url: parts.slice(6).join("|").trim() || ""
    };
  })
  .sort((a,b) => (parseInt(b.year)||0) - (parseInt(a.year)||0));
