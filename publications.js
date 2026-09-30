/*
============================================================
论文列表：以后更新论文，主要只改这一个文件
============================================================

固定格式：
年份 | 中文/英文 | 作者角色 | 论文题目 | 作者 | 期刊信息 | DOI或网页链接

新增论文：复制任意一行，在下面新增一行并修改内容。
没有 DOI/链接：最后一栏留空即可，但最后一个“|”建议保留。
注意：正文中不要使用英文竖线符号 | ；如必须使用，请改为中文全角“｜”。

作者角色规则：
- 孙勇列第一作者：第一作者
- 已有明确通讯作者信息：通讯作者
- 其他情况：合作作者
不根据作者顺序猜测通讯作者。

年份排序无需手动调整；网页会自动按年份从新到旧显示。
============================================================
*/

const PUBLICATIONS_TEXT = `
2026 | 英文 | 通讯作者 | The impact of multi-scale digital technology transfer on urban green transformation in China: Nonlinear effects and mechanisms | Sun Z, Sun Y, Liu H, Wang Y | Applied Geography, 196: 104169 | https://doi.org/10.1016/j.apgeog.2026.104169
2026 | 英文 | 第一作者 | China’s Ecological Forest Ranger System as a Dual Pathway for Conservation and Livelihood: An Evolutionary Game Analysis | Sun Y, Zhong W, Bao M, Guo R | Ecosystem Health and Sustainability, 12: 0513 | https://doi.org/10.34133/ehs.0513
2026 | 英文 | 通讯作者 | Consumer perceptions of pre‐prepared food safety risks: evidence from survey experiments | He Q, Zhao Y, Sun Y, Ji H | Journal of the Science of Food and Agriculture, 106(3): 1744–1756 | https://doi.org/10.1002/jsfa.70307
2026 | 英文 | 合作作者 | Evaluating the coordination between conservation and development on the Qinghai–Tibet Plateau through a dual-dimensional framework | Wen N, Yang H, Sun Y, Chen S, Zhang C | Journal of Geographical Sciences, 36(4): 919–942 | https://doi.org/10.1007/s11442-026-2476-y
2026 | 英文 | 第一作者 | Factors influencing agricultural digital transformation: A systematic review of environmental, technological, and individual dimensions | Sun Y, Li Q, Liu H | Computers and Electronics in Agriculture, 244: 111430 | https://doi.org/10.1016/j.compag.2026.111430
2026 | 英文 | 第一作者 | Governing Fire Safety in China’s Urban Villages: A Guangzhou Case Study on Collaboration, Incentives, and Public Goods Provision | Sun Y, Lai H, Wang Y | Fire Technology, 62(3): 52 | https://doi.org/10.1007/s10694-025-01858-z
2026 | 英文 | 第一作者 | How blue-green space shapes regional resilience: a review of multidimensional impact mechanisms | Sun Y, Zhong W, Wan J, Liu B, Li J, Xu Y | Urban Ecosystems, 29: 230 | https://doi.org/10.1007/s11252-026-02084-3
2026 | 英文 | 通讯作者 | Identifying Systemic Risks and Mitigation Strategies of Artificial Intelligence in Agriculture: From Social-Technical-Ecological Systems Framework | Yuan Y, Sun Y | Frontiers in Plant Science, 17: 1811551 | https://doi.org/10.3389/fpls.2026.1811551
2026 | 英文 | 通讯作者 | Nonlinear Threshold Effects of Agricultural Inputs on Crop Production in China: Insights from XGBoost-SHAP and Spatiotemporal Analysis | Zhang H, Lai H, Sun Y, Li J | Agriculture, 16(13): 1472 | https://doi.org/10.3390/agriculture16131472
2026 | 英文 | 通讯作者 | Realizing Forest Ecosystem Service Value Through Natural Resource Asset Portfolio Supply: A Multi-Case Study from China | Lai H, Liang Q, Sun Y | Forests, 17(6): 678 | https://doi.org/10.3390/f17060678
2026 | 英文 | 通讯作者 | Relocated children's adaptation in China's poverty alleviation resettlement: Challenges, influencing factors, and coping strategies | Jiang X, Sun Y, Tang L | Habitat International, 171: 103780 | https://doi.org/10.1016/j.habitatint.2026.103780
2026 | 英文 | 第一作者 | Stakeholder Strategies and Cooperation for Rural Water Supply Security in China | Sun Y, Lin Y, Huang H, Shen M | Water and Environment Journal, 40(1): 103–116 | https://doi.org/10.1111/wej.70015
2026 | 英文 | 第一作者 | Understanding Multi‐Disaster Impacts on China's Grain Production for Food Security: An XGBoost‐SHAP Approach | Sun Y, Xie L, Huang M, Hu R | Food and Energy Security, 15(2): e70237 | https://doi.org/10.1002/fes3.70237
2026 | 中文 | 第一作者 | 面向高质量发展的城市更新：理论逻辑、现实困境与转型路径 | 孙勇, 贾森, 赵艳楠, 张怡佳, 林允欣 | 宏观经济研究, (7): 31-43+109 | https://doi.org/10.16304/j.cnki.11-3952/f.2026.07.003
2026 | 中文 | 通讯作者 | 地理标志促进农村产业融合的效应及其机制 | 张思慧, 文晓巍, 邢天阳, 孙勇 | 地域研究与开发: 1-18 | 
2026 | 中文 | 合作作者 | 数字技术创新合作对城市绿色化转型的影响及机制研究——基于联合研发与技术转移的实证分析 | 孙中瑞, 葛辉燕, 王正, 孙勇, 刘汉初, 张佩 | 地理科学: 1-14 | https://doi.org/10.13249/j.cnki.sgs.20250810
2026 | 中文 | 通讯作者 | 数字技术转移对环境质量的影响及作用机制 | 孙中瑞, 孙勇, 虞虎, 乔琴, 张佩 | 环境科学, 47(7): 4583-4595 | https://doi.org/10.13227/j.hjkx.202506111
2026 | 中文 | 合作作者 | 新时期国土空间综合治理的理论框架与科学议题——基于统筹发展与安全的视角 | 周侃, 樊杰, 徐勇, 李平星, 王强, 刘汉初, 陶岸君, 孙勇, 张健, 魏佳荣 | 资源科学, 48(1): 1-13 | https://doi.org/10.18402/resci.2026.01.01
2026 | 中文 | 通讯作者 | 旅游旺季青藏高原人类活动压力及其生态风险空间管控——以藏中南为例 | 刘汉初, 虞虎, 孙勇, 乔琴, 林自来 | 资源科学, 48(1): 180-193 | https://doi.org/10.18402/resci.2026.01.13
2025 | 英文 | 第一作者 | Collaborative governance in urban water area conservation: Strategies for mitigating blue space encroachment | Sun Y, Ye S, Zhong W, Guo R | Journal of Hydrology: Regional Studies, 62: 102862 | https://doi.org/10.1016/j.ejrh.2025.102862
2025 | 英文 | 第一作者 | Collaborative solutions for agricultural water pollution in smallholder economies: Farmers and local governments unite | Sun Y, Huang X, Paerhati B, Zhou K | Agricultural Water Management, 313: 109499 | https://doi.org/10.1016/j.agwat.2025.109499
2025 | 英文 | 第一作者 | Combating over-commercialization in ecotourism through collaborative governance: A game-theoretic modeling analysis | Sun Y, Tang L, Jiang X | Ecological Modelling, 508: 111194 | https://doi.org/10.1016/j.ecolmodel.2025.111194
2025 | 英文 | 第一作者 | How to address enterprise collusion in falsifying carbon emission data: A game theory analysis | Sun Y, Yang X, Wu R, Gong G, Lei T | Managerial and Decision Economics, 46(1): 378–392 | https://doi.org/10.1002/mde.4380
2025 | 英文 | 通讯作者 | Independent innovation and collaborative innovation: exploring the impact of digital technology transfer on green innovation from the perspective of innovation element flow | Sun Z, Sun Y, Qiao Q, Zhang P | Environment, Development and Sustainability | https://doi.org/10.1007/s10668-025-07107-1
2025 | 英文 | 通讯作者 | Mitigating local resistance to environmental projects: a technological compensation approach using evolutionary game theory | Yang R, Tang J, Sun Y | Environment, Development and Sustainability | https://doi.org/10.1007/s10668-025-06585-7
2025 | 英文 | 第一作者 | Address the challenge of cultivated land abandonment by cultivated land adoption: An evolutionary game perspective | Sun Y, Miao Y, Xie Z, Jiang X | Land Use Policy, 149: 107412 | https://doi.org/10.1016/j.landusepol.2024.107412
2025 | 英文 | 合作作者 | Exploring how economic level drives urban flood risk | Fan J, Liu B, Lei T, Sun Y, Ma Y, Guo R, Chen D, Zhou K, Li S, Gao X | Nature Communications, 16(1): 4857 | https://doi.org/10.1038/s41467-025-60267-6
2025 | 英文 | 通讯作者 | The Values, Challenges, and Strategies of AI in Empowering Sustainable Livelihoods for Farmers | Yuan Y, Sun Y | Frontiers in Sustainable Food Systems, 9: 1716572 | https://doi.org/10.3389/fsufs.2025.1716572
2025 | 英文 | 第一作者 | Unlocking the value of nature: A deep dive into China’s ecological product realization and its driving mechanisms | Sun Y, Zhao J, Qiao Q, Lin Z, Zhang W | Forests, 16(1): 37 | https://doi.org/10.3390/f16010037
2025 | 中文 | 第一作者 | 数据确权、政府治理与个人数据保护 | 孙勇, 汪亚林, 张亚峰 | 运筹与管理, 34(2): 152-158 | https://doi.org/10.12005/orms.2025.0056
2025 | 中文 | 第一作者 | 生态产品价值实现促进乡村可持续发展：理论机理与实践路径 | 孙勇, 赵健烽, 赵榕, 乔琴 | 生态经济, 41(6): 216-222 | 
2024 | 英文 | 第一作者 | Drivers and barriers to digital transformation in agriculture: An evolutionary game analysis based on the experience of China | Sun Y, Miao Y, Xie Z, Wu R | Agricultural Systems, 221: 104136 | https://doi.org/10.1016/j.agsy.2024.104136
2024 | 英文 | 第一作者 | Drivers, constraints, and policy regulation strategies for the abandonment of Farmland: insights from China | Sun Y, Jiang H, Zhu X | Land, 13(12): 2096 | https://doi.org/10.3390/land13122096
2024 | 英文 | 通讯作者 | Geographical indication, agricultural development and the alleviation of rural relative poverty | Zhang S, Sun Y, Wang Y, Lin X | Sustainable Development, 32(5): 5764–5780 | https://doi.org/10.1002/sd.2997
2024 | 英文 | 通讯作者 | How does developing green agriculture affect poverty? Evidence from China’s prefecture-level cities | Jiang X, Sun Y, Shen M, Tang L | Agriculture, 14(3): 402 | https://doi.org/10.3390/agriculture14030402
2024 | 英文 | 第一作者 | How can governments and fishermen collaborate to participate in a fishing ban for ecological restoration? | Sun Y, Sun Z, Zhang Y, Qiao Q | Journal of Environmental Management, 360: 120958 | https://doi.org/10.1016/j.jenvman.2024.120958
2024 | 英文 | 通讯作者 | Impact of agricultural product brands and agricultural industry agglomeration on agricultural carbon emissions | Zhang S, Wen X, Sun Y, Xiong Y | Journal of Environmental Management, 369: 122238 | https://doi.org/10.1016/j.jenvman.2024.122238
2024 | 英文 | 第一作者 | Leveraging intergovernmental data sharing for digital transformation in ecological and environmental protection | Sun Y, He J, Xiang Q, Zhou K | Journal of Cleaner Production, 477: 143780 | https://doi.org/10.1016/j.jclepro.2024.143780
2024 | 英文 | 通讯作者 | Multi-Stakeholder Game Relationships in Promoting the Development of the Non-Timber Forest Product Industry by State-Owned Forest Farms | Qiao Q, Lin Z, Sun Z, Zhang W, Zhang M, Sun Y, Gao X | Forests, 15(11): 2049 | https://doi.org/10.3390/f15112049
2024 | 英文 | 通讯作者 | Practices, Challenges, and Future of Digital Transformation in Smallholder Agriculture: Insights from a Literature Review | Yuan Y, Sun Y | Agriculture, 14(12): 2193 | https://doi.org/10.3390/agriculture14122193
2024 | 英文 | 通讯作者 | Risk assessment and classification prediction for water environment treatment PPP projects | Yang R, Feng J, Tang J, Sun Y | Water Science & Technology, 89(5): 1264-1281 | https://doi.org/10.2166/wst.2024.052
2024 | 英文 | 合作作者 | Spatial correlation network structure characteristics of carbon emission efficiency and its influencing factors at city level in China | Sun Z, Cheng X, Zhuang Y, Sun Y | Environment, Development and Sustainability, 26(2): 5335-5366 | https://doi.org/10.1007/s10668-023-02936-4
2024 | 英文 | 合作作者 | The evolutionary game in regulating non-agricultural farmland use within the integrated development of rural primary, secondary, and tertiary industries | Cheng L, Huang H, Sun Y, Li Z, Du H | Land, 13(10): 1600 | https://doi.org/10.3390/land13101600
2024 | 英文 | 合作作者 | The mass public’s science literacy and co-production during the COVID-19 pandemic: empirical evidence from 140 cities in China | Qin H, Xie Z, Shang H, Sun Y, Yang X, Li M | Humanities and Social Sciences Communications, 11(1): 834 | https://doi.org/10.1057/s41599-024-03304-x
2024 | 英文 | 通讯作者 | The rise in female consciousness contributes to advancing household energy transition: Evidence from Chinese households | Shen M, Jiang X, Sun Y, Tang L | Energy, 308: 132954 | https://doi.org/10.1016/j.energy.2024.132954
2024 | 英文 | 通讯作者 | Contrasting non-timber forest products’ case studies in underdeveloped areas in China | Qiao Q, Lei S, Zhang W, Shao G, Sun Y, Han Y | Forests, 15(9): 1629 | https://doi.org/10.3390/f15091629
2024 | 英文 | 通讯作者 | Evolutionary game analysis of forest carbon note system in China | Qiao Q, Lei S, Gao X, Sun Y, Han Y, Sun Z | Journal of Cleaner Production, 435: 140450 | https://doi.org/10.1016/j.jclepro.2023.140450
2024 | 中文 | 通讯作者 | 东西部产业协作何以有效:来自穗黔刺梨产业协作的观察 | 谢治菊, 孙勇, 梁琴 | 中国软科学, (9): 34-43 | 
2024 | 中文 | 合作作者 | 民族地区经济-社会-治理系统耦合协调效应评价与系统动力学仿真——以新疆为例 | 虎海峰, 孙勇, 刘明凯, 刘宝印, 樊杰 | 中国管理科学, 32(5): 93-102 | https://doi.org/10.16381/j.cnki.issn1003-207x.2022.0311
2024 | 中文 | 第一作者 | 数字平台“二选一”垄断行为与监管策略 | 孙勇, 杨瑞佳, 张亚峰 | 运筹与管理, 33(1): 219-225 | 
2024 | 中文 | 通讯作者 | 中国去工业化经济风险的表现形式、形成机理及防控路径研究 | 龚广祥, 王展祥, 孙勇 | 经济学家, (3): 98-107 | https://doi.org/10.16158/j.cnki.51-1312/f.2024.03.012
2024 | 中文 | 第一作者 | 中国信息服务业时空格局演化及影响因素分析 | 孙勇, 张思慧, 王天, 张佩 | 地理与地理信息科学, 40(1): 73-80 | https://doi.org/10.3969/j.issn.1672-0504.2024.01.009
2024 | 中文 | 第一作者 | 高寒生态脆弱区农牧民生活垃圾集中处理激励机制与政策模拟——以藏北牧区为例 | 孙勇, 周侃, 滕鹤郅, 刘汉初, 孙中瑞 | 生态学报, 44(8): 3185-3198 | https://doi.org/10.20103/j.stxb.202211213372
2023 | 英文 | 合作作者 | Analysis of the spatial distribution characteristics of emerging pollutants in China | Zhang M, Sun Y, Xun B, Liu B | Water, 15(21): 3782 | https://doi.org/10.3390/w15213782
2023 | 英文 | 合作作者 | An identification of industrial functional zones based on NLP: Evidence from online commercial registration data | Ma Y, Sun Y, Weng F, Xu Y | Sage Open, 13(1): 21582440231153854 | https://doi.org/10.1177/21582440231153854
2023 | 英文 | 第一作者 | Cooperative governance mechanisms for personal information security: an evolutionary game approach | Sun Y, Zhang Y, Wang Y, Zhang S | Kybernetes, 54(1): 431-455 | https://doi.org/10.1108/K-04-2023-0717
2023 | 英文 | 第一作者 | Evolutionary game of destination brand co-construction with government involvement | Sun Y, Wang Y, Liu B, Sun Z | Managerial and Decision Economics, 44(4): 2125-2136 | https://doi.org/10.1002/mde.3806
2023 | 英文 | 通讯作者 | Geographical Indication, Agricultural Products Export and Urban–Rural Income Gap | Zhang S, Sun Y, Yu X, Zhang Y | Agriculture, 13(2): 378 | https://doi.org/10.3390/agriculture13020378
2023 | 英文 | 通讯作者 | How to promote agricultural enterprises to reduce the use of pesticides and fertilizers? An evolutionary game approach | He Q, Sun Y, Yi M, Huang H | Frontiers in Sustainable Food Systems, 7: 1238683 | https://doi.org/10.3389/fsufs.2023.1238683
2023 | 英文 | 通讯作者 | Impact of spatial imbalance of green technological innovation and industrial structure upgradation on the urban carbon emission efficiency gap | Sun Z, Sun Y, Liu H, Cheng X | Stochastic Environmental Research and Risk Assessment, 37(6): 2305–2325 | https://doi.org/10.1007/s00477-023-02395-3
2023 | 英文 | 第一作者 | Inter-regional cooperation in the transfers of energy-intensive industry: An evolutionary game approach | Sun Y, Liu B, Sun Z, Yang R | Energy, 282: 128313 | https://doi.org/10.1016/j.energy.2023.128313
2023 | 英文 | 合作作者 | Spatial equity of basic education resources and coordinated regional development in Xinjiang, China | Han T, Fan J, Guo R, Sun Y, Chen D, Liu B, Lian Y | Chinese Geographical Science, 33(3): 441-457 | https://doi.org/10.1007/s11769-023-1352-2
2023 | 英文 | 合作作者 | Spatial-temporal coupling analysis of economic development-social development-government governance in Xinjiang, China | Hu H, Sun Y, Zhao H, Liu B, Guo R | Chinese Geographical Science, 33(3): 410-425 | https://doi.org/10.1007/s11769-023-1351-3
2023 | 英文 | 第一作者 | The administrative center or economic center: Which dominates the regional green development pattern? A case study of shandong peninsula urban agglomeration, China | Liu K, Sun Y, Yang D | Green and Low-Carbon Economy, 1(3): 110-120 | https://doi.org/10.47852/bonviewGLCE3202955
2023 | 英文 | 合作作者 | Territorial function differentiation and its comprehensive regionalization in China | Fan J, Zhou K, Sheng K, Guo R, Chen D, Wang Y, Liu H, Wang Z, Sun Y, Zhang J, Wu J, Zhao H | Science China Earth Sciences, 66(2): 247–270 | https://doi.org/10.1007/s11430-022-1004-0
2023 | 中文 | 合作作者 | 青藏高原国家公园群建设与社区可持续发展的空间耦合类型 | 郭锐, 孙勇, 虞虎 | 生态学报, 43(14): 5686-5698 | 
2023 | 中文 | 第一作者 | 消费帮扶的协同治理机制与演化过程——来自广州市荔湾区的观察 | 孙勇, 张艳媚, 林婉涵 | 新经济, (11): 144-158 | 
2023 | 中文 | 通讯作者 | 新基建与产业升级耦合协调发展的空间格局及影响因素 | 张佩, 孙勇 | 长江流域资源与环境, 32(3): 464-477 | 
2023 | 中文 | 第一作者 | 目的地品牌建设中的旅游供应链合作研究 | 孙勇, 樊杰, 孙中瑞, 乔琴 | 运筹与管理, 32(6): 138-144 | 
2023 | 中文 | 合作作者 | 碳汇产品价值实现模式及其优化路径 | 乔琴, 高馨婷, 雷硕, 孙勇, 张恩祥, 郑玉萍, 韩永伟 | 中国国土资源经济, 36(10): 19-27+81 | https://doi.org/10.19676/j.cnki.1672-6995.000893
2023 | 中文 | 合作作者 | 中国陆域综合功能区及其划分方案 | 樊杰, 周侃, 盛科荣, 郭锐, 陈东, 王亚飞, 刘汉初, 王正, 孙勇, 张杰, 伍健雄, 赵浩 | 中国科学:地球科学, 53(2): 236-255 | 
2022 | 英文 | 第一作者 | Evolutionary game analysis for grassland degradation management, considering the livelihood differentiation of herders | Sun Y, Du H, Liu B, Kanchanaroek Y, Zhang J, Zhang P | Land, 11(10): 1776 | https://doi.org/10.3390/land11101776
2022 | 英文 | 合作作者 | Spatial differentiation characteristics of human settlements and their responses to natural and socioeconomic conditions in the marginal zone of an uninhabited area, Changtang Plateau, China | Zhang H, Liu H, Sun Y, He R | Chinese Geographical Science, 32(3): 506-520 | https://doi.org/10.1007/s11769-022-1280-6
2022 | 英文 | 合作作者 | The amplification effect of unreasonable human behaviours on natural disasters | Fan J, Liu B, Ming X, Sun Y, Qin L | Humanities and Social Sciences Communications, 9(1): 322 | https://doi.org/10.1057/s41599-022-01351-w
2022 | 中文 | 第一作者 | 创新创业耦合协调发展的空间格局及影响因素 | 孙勇, 张佩, 张亚峰 | 经济问题探索, (4): 37-54 | 
2022 | 中文 | 合作作者 | 不同功能区域中公众环境感知与环境监测指标的差异性分析 | 刘宝印, 马运佳, 周侃, 孙勇, 侯鹰 | 科学技术与工程, 22(7): 2957-2963 | 
2022 | 中文 | 合作作者 | 中国省域创新基础设施与创新产出水平的耦合协调发展及其影响因素 | 张佩, 王姣娥, 孙勇, 张行健 | 经济地理, 42(9): 11-21 | https://doi.org/10.15957/j.cnki.jjdl.2022.09.002
2022 | 中文 | 合作作者 | 中国绿色科技创新效率空间关联网络结构特征及影响因素 | 孙中瑞, 樊杰, 孙勇, 刘汉初 | 经济地理, 42(3): 33-43 | https://doi.org/10.15957/j.cnki.jjdl.2022.03.004
2022 | 中文 | 第一作者 | 数字技术创新对产业结构升级的影响及其空间效应——以长江经济带为例 | 孙勇, 张思慧, 赵腾宇, 张亚峰 | 软科学, 36(10): 9-16 | https://doi.org/10.13956/j.ss.1001-8409.2022.10.02
2022 | 中文 | 第一作者 | 政府专利资助与企业专利申请的演化博弈分析 | 孙勇, 马园庭, 张亚峰 | 情报杂志, 41(5): 198-207 | 
2022 | 中文 | 通讯作者 | 信息基础设施与融合基础设施协同发展的空间格局及影响因素 | 张佩, 孙勇 | 经济问题探索, (10): 94-104 | 
2022 | 中文 | 合作作者 | 群内和跨群双视角下成渝城市群合作创新网络时空演化研究 | 孙中瑞, 樊杰, 孙勇 | 地域研究与开发, 41(1): 26-31+44 | 
2022 | 中文 | 第一作者 | 长三角地区数字技术创新时空格局及其影响因素 | 孙勇, 樊杰, 刘汉初, 赵腾宇 | 经济地理, 42(2): 124-133 | https://doi.org/10.15957/j.cnki.jjdl.2022.02.014
2022 | 中文 | 第一作者 | 黄河流域科技创新的时空格局及其经济效应 | 孙勇, 汪亚林, 张亚峰 | 科技管理研究, 42(5): 1-9 | 
2022 | 中文 | 第一作者 | 黄河流域绿色技术创新时空格局及其影响因素分解 | 孙勇, 樊杰, 孙中瑞, 郭锐 | 生态经济, 38(5): 60-67 | 
2021 | 英文 | 第一作者 | The multi-player evolutionary game analysis for the protective development of ecotourism | Sun Y, Liu B, Fan J, Qiao Q | Environmental Science & Policy, 126: 111-121 | https://doi.org/10.1016/j.envsci.2021.09.026
2021 | 英文 | 合作作者 | The spatial coupling characteristics between the construction of Qingzang National Park Cluster and the sustainable development of local communities | Guo R, Chen D, Zhou D, Liu B, Liu H, Zhao Y, Sun Y, Fan J | Geography and Sustainability, 2(1): 1-11 | https://doi.org/10.1016/j.geosus.2021.01.001
2021 | 中文 | 合作作者 | “一带一路”沿线省域绿色金融测度及影响因素研究 | 乔琴, 樊杰, 孙勇, 宋邱惠 | 工业技术经济, 40(7): 120-126 | 
2021 | 中文 | 第一作者 | 中国风险投资的时空格局及其演进 | 孙勇, 樊杰, 张亚峰, 乔琴 | 软科学, 35(11): 32-38 | https://doi.org/10.13956/j.ss.1001-8409.2021.11.06
2021 | 中文 | 合作作者 | 科研机构合作网络演化特征对创新绩效的影响——以中国科学院为例 | 孙中瑞, 樊杰, 孙勇 | 科技管理研究, 41(18): 131-139 | 
2021 | 中文 | 合作作者 | 长江经济带农村相对贫困格局及区域承载力约束机理 | 周侃, 樊杰, 孙勇 | 农业工程学报, 37(11): 249-258+325 | https://doi.org/10.11975/j.issn.1002-6819.2021.11.028
2020 | 中文 | 合作作者 | “十四五”时期中国城市群分类治理的政策 | 郭锐, 孙勇, 樊杰 | 中国科学院院刊, 35(7): 844-854 | https://doi.org/10.16418/j.issn.1000-3045.20200408001
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
