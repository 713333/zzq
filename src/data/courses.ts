import type { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: '销售数据清洗与分析',
    description: '通过分析零售商店销售记录，掌握数据清洗、缺失值处理、异常值检测和数据格式化的核心技能。学习使用Pandas进行数据预处理，为后续分析打下坚实基础。',
    level: 'beginner',
    levelLabel: '初级',
    duration: '10 小时',
    students: 1234,
    rating: 4.8,
    image: '📊',
    tags: ['Pandas', '数据清洗', '零售分析'],
    prerequisites: ['Python基础语法'],
    objectives: [
      '掌握数据清洗的完整流程和方法',
      '学会处理缺失值、重复值和异常值',
      '熟练使用Pandas进行数据转换和格式化',
      '能够独立完成销售数据的质量评估报告'
    ],
    targetAudience: [
      '商务数据分析专业学生',
      '数据分析师初学者',
      '需要处理业务数据的运营人员'
    ],
    chapters: [
      {
        id: 'c1-1',
        title: '项目介绍与环境准备',
        lessons: [
          {
            id: 'l1-1-1',
            title: '零售数据分析概述',
            duration: '15分钟',
            content: '了解零售行业的数据特点，学习销售数据的常见字段和业务含义。',
            codeExample: `# 导入必要的库
import pandas as pd
import numpy as np

# 查看Pandas版本
print(f"Pandas版本: {pd.__version__}")`,
            output: 'Pandas版本: 2.0.3'
          },
          {
            id: 'l1-1-2',
            title: '加载销售数据集',
            duration: '20分钟',
            content: '学习从不同来源加载数据，包括CSV、Excel等格式。',
            codeExample: `# 读取销售数据
df = pd.read_csv('retail_sales.csv')

# 查看数据基本信息
print(f"数据集形状: {df.shape}")
print(f"\n列名: {list(df.columns)}")
print(f"\n前5行数据:")
print(df.head())`,
            output: `数据集形状: (10000, 8)

列名: ['订单ID', '日期', '产品类别', '产品名称', '数量', '单价', '客户ID', '地区']

前5行数据:
  订单ID        日期  产品类别  产品名称  数量   单价  客户ID  地区
0  1001  2024-01-01  电子产品   手机壳   2   29.9    C001  华东
1  1002  2024-01-01  服装配饰    T恤   3   59.9    C002  华北
2  1003  2024-01-02  食品饮料   咖啡豆   1   89.0    C003  华南`
          }
        ]
      },
      {
        id: 'c1-2',
        title: '数据质量评估',
        lessons: [
          {
            id: 'l1-2-1',
            title: '缺失值检测与处理',
            duration: '30分钟',
            content: '学习识别数据中的缺失值，掌握删除、填充等处理策略。',
            codeExample: `# 检查缺失值
missing_stats = df.isnull().sum()
missing_percent = (missing_stats / len(df)) * 100

print("缺失值统计:")
print(pd.DataFrame({
    '缺失数量': missing_stats,
    '缺失比例(%)': missing_percent.round(2)
}))

# 填充缺失值
df['单价'].fillna(df['单价'].median(), inplace=True)`,
            output: `缺失值统计:
          缺失数量  缺失比例(%)
订单ID         0        0.00
日期           0        0.00
产品类别        50        0.50
产品名称        30        0.30
数量          100        1.00
单价           80        0.80
客户ID         20        0.20
地区           10        0.10`
          },
          {
            id: 'l1-2-2',
            title: '重复值检测与处理',
            duration: '25分钟',
            content: '识别并处理数据中的重复记录，确保数据唯一性。',
            codeExample: `# 检查重复值
duplicates = df.duplicated().sum()
print(f"重复记录数量: {duplicates}")

# 查看重复记录
duplicate_rows = df[df.duplicated(keep=False)]
print(f"\n重复记录详情:\n{duplicate_rows.head(10)}")

# 删除重复值
df_clean = df.drop_duplicates()
print(f"\n清洗后数据量: {len(df_clean)}")`,
            output: `重复记录数量: 156

重复记录详情:
     订单ID        日期  产品类别  产品名称  数量   单价  客户ID  地区
100  1101  2024-01-05  电子产品   手机壳   2   29.9    C001  华东
101  1101  2024-01-05  电子产品   手机壳   2   29.9    C001  华东

清洗后数据量: 9844`
          }
        ]
      },
      {
        id: 'c1-3',
        title: '数据转换与格式化',
        lessons: [
          {
            id: 'l1-3-1',
            title: '数据类型转换',
            duration: '25分钟',
            content: '学习将数据转换为正确的类型，如日期、数值、类别等。',
            codeExample: `# 转换日期类型
df['日期'] = pd.to_datetime(df['日期'])

# 转换数值类型
df['数量'] = pd.to_numeric(df['数量'], errors='coerce')
df['单价'] = pd.to_numeric(df['单价'], errors='coerce')

# 创建销售额列
df['销售额'] = df['数量'] * df['单价']

# 查看数据类型
print(df.dtypes)
print(f"\n销售额统计:")
print(df['销售额'].describe())`,
            output: `订单ID       object
日期         datetime64[ns]
产品类别      object
产品名称      object
数量         float64
单价         float64
客户ID       object
地区         object
销售额        float64

销售额统计:
count    9844.000000
mean      245.678901
std       189.234567
min         9.900000
25%       119.700000
50%       199.500000
75%       299.800000
max      1999.000000`
          },
          {
            id: 'l1-3-2',
            title: '异常值检测与处理',
            duration: '35分钟',
            content: '使用统计方法识别异常值，学习IQR和Z-Score方法。',
            codeExample: `# 使用IQR方法检测异常值
Q1 = df['销售额'].quantile(0.25)
Q3 = df['销售额'].quantile(0.75)
IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

outliers = df[(df['销售额'] < lower_bound) | (df['销售额'] > upper_bound)]
print(f"异常值数量: {len(outliers)}")
print(f"异常值比例: {len(outliers)/len(df)*100:.2f}%")

# 标记异常值
df['是否异常'] = ((df['销售额'] < lower_bound) | (df['销售额'] > upper_bound)).astype(int)
print(f"\n正常订单: {len(df[df['是否异常']==0])}")
print(f"异常订单: {len(df[df['是否异常']==1])}")`,
            output: `异常值数量: 492
异常值比例: 5.00%

正常订单: 9352
异常订单: 492`
          }
        ]
      },
      {
        id: 'c1-4',
        title: '数据清洗实战项目',
        lessons: [
          {
            id: 'l1-4-1',
            title: '完整数据清洗流程',
            duration: '45分钟',
            content: '整合所学知识，完成从原始数据到清洗数据的完整流程。',
            codeExample: `# 完整数据清洗流程
def clean_sales_data(df):
    # 1. 删除重复值
    df = df.drop_duplicates()
    
    # 2. 处理缺失值
    df['产品类别'].fillna('未知', inplace=True)
    df['单价'].fillna(df['单价'].median(), inplace=True)
    df['数量'].fillna(1, inplace=True)
    
    # 3. 数据类型转换
    df['日期'] = pd.to_datetime(df['日期'])
    df['销售额'] = df['数量'] * df['单价']
    
    # 4. 异常值处理（标记而非删除）
    Q1, Q3 = df['销售额'].quantile([0.25, 0.75])
    IQR = Q3 - Q1
    df['是否异常'] = ((df['销售额'] < Q1-1.5*IQR) | (df['销售额'] > Q3+1.5*IQR)).astype(int)
    
    return df

# 执行清洗
df_cleaned = clean_sales_data(df)
print(f"清洗完成！最终数据量: {len(df_cleaned)}")`,
            output: `清洗完成！最终数据量: 9844`
          }
        ]
      }
    ],
    dataset: {
      name: '零售销售数据集',
      description: '包含10000条零售销售记录，涵盖电子产品、服装配饰、食品饮料等类别',
      size: '2.5 MB',
      format: 'CSV',
      sampleData: `订单ID,日期,产品类别,产品名称,数量,单价,客户ID,地区
1001,2024-01-01,电子产品,手机壳,2,29.9,C001,华东
1002,2024-01-01,服装配饰,T恤,3,59.9,C002,华北
1003,2024-01-02,食品饮料,咖啡豆,1,89.0,C003,华南`
    },
    caseStudy: {
      title: '某连锁超市销售数据清洗案例',
      problem: '原始数据存在15%的缺失值、2%的重复记录，以及大量格式不一致问题，导致分析结果偏差严重。',
      solution: '采用系统化的数据清洗流程，包括缺失值智能填充、重复值精准识别、异常值统计检测等方法。',
      results: '数据质量提升95%，分析准确率从78%提升至96%，为库存优化和促销策略提供了可靠依据。',
      visualization: '清洗前后数据质量对比：缺失值从15%降至0.1%，异常订单识别率提升至98.5%'
    }
  },
  {
    id: '2',
    title: '客户行为分析',
    description: '深入分析电信公司客户行为数据，学习客户细分、RFM模型、客户生命周期价值和流失预测等核心分析方法。',
    level: 'intermediate',
    levelLabel: '中级',
    duration: '12 小时',
    students: 892,
    rating: 4.7,
    image: '👥',
    tags: ['客户分析', 'RFM模型', '流失预测'],
    prerequisites: ['Python基础', 'Pandas数据处理', '基础统计学'],
    objectives: [
      '掌握客户细分的方法和技巧',
      '学会构建和应用RFM模型',
      '理解客户生命周期价值的计算',
      '能够建立简单的客户流失预测模型'
    ],
    targetAudience: [
      '有一定Python基础的学习者',
      '客户关系管理相关岗位人员',
      '希望深入客户数据分析的学生'
    ],
    chapters: [
      {
        id: 'c2-1',
        title: '客户数据探索',
        lessons: [
          {
            id: 'l2-1-1',
            title: '电信客户数据概览',
            duration: '20分钟',
            content: '了解电信行业客户数据的特点，包括客户基本信息、消费行为、服务使用等字段。',
            codeExample: `import pandas as pd
import matplotlib.pyplot as plt

# 加载客户数据
customers = pd.read_csv('telecom_customers.csv')

# 查看数据维度
print(f"客户总数: {len(customers)}")
print(f"特征数量: {len(customers.columns)}")
print(f"\n数据预览:")
print(customers[['客户ID', '在网时长', '月消费', '流失状态']].head())`,
            output: `客户总数: 7043
特征数量: 21

数据预览:
  客户ID  在网时长  月消费 流失状态
0   7590      1   29.85     否
1   5575     34   56.95     否
2   3668      2   53.85     是
3   7795     45   42.30     否`
          },
          {
            id: 'l2-1-2',
            title: '客户流失情况分析',
            duration: '25分钟',
            content: '分析客户流失率，了解流失客户的特征分布。',
            codeExample: `# 计算流失率
churn_rate = customers['流失状态'].value_counts(normalize=True)
print("客户流失分布:")
print(churn_rate)

# 流失客户特征
churned = customers[customers['流失状态'] == '是']
retained = customers[customers['流失状态'] == '否']

print(f"\n流失客户平均在网时长: {churned['在网时长'].mean():.1f}个月")
print(f"留存客户平均在网时长: {retained['在网时长'].mean():.1f}个月")
print(f"\n流失客户平均月消费: ¥{churned['月消费'].mean():.2f}")
print(f"留存客户平均月消费: ¥{retained['月消费'].mean():.2f}")`,
            output: `客户流失分布:
否    0.734
是    0.266

流失客户平均在网时长: 17.9个月
留存客户平均在网时长: 37.6个月

流失客户平均月消费: ¥74.44
留存客户平均月消费: ¥61.27`
          }
        ]
      },
      {
        id: 'c2-2',
        title: 'RFM客户价值分析',
        lessons: [
          {
            id: 'l2-2-1',
            title: 'RFM模型原理',
            duration: '30分钟',
            content: '学习RFM模型（最近消费时间、消费频率、消费金额）的理论基础和业务价值。',
            codeExample: `# 计算RFM指标
from datetime import datetime

# 假设当前日期
reference_date = datetime(2024, 1, 1)

# Recency: 最近消费天数
customers['最近消费天数'] = (reference_date - pd.to_datetime(customers['最后消费日期'])).dt.days

# Frequency: 消费频次
customers['消费频次'] = customers['总消费次数']

# Monetary: 消费金额
customers['消费金额'] = customers['总消费金额']

print("RFM指标统计:")
print(customers[['最近消费天数', '消费频次', '消费金额']].describe())`,
            output: `RFM指标统计:
       最近消费天数   消费频次    消费金额
count   7043.000  7043.000  7043.000
mean      92.000    32.000  2283.000
std       84.000    25.000  2266.000
min        1.000     1.000    18.000
25%       29.000    15.000   402.000
50%       66.000    25.000  1397.000
75%      127.000    45.000  3794.000
max      365.000   118.000  8684.000`
          },
          {
            id: 'l2-2-2',
            title: 'RFM评分与客户分层',
            duration: '35分钟',
            content: '使用分位数对RFM进行评分，将客户分为不同价值层级。',
            codeExample: `# RFM评分（1-5分）
customers['R评分'] = pd.qcut(customers['最近消费天数'], 5, labels=[5,4,3,2,1])
customers['F评分'] = pd.qcut(customers['消费频次'].rank(method='first'), 5, labels=[1,2,3,4,5])
customers['M评分'] = pd.qcut(customers['消费金额'], 5, labels=[1,2,3,4,5])

# 计算RFM总分
customers['RFM总分'] = customers['R评分'].astype(int) + customers['F评分'].astype(int) + customers['M评分'].astype(int)

# 客户分层
def segment_customer(row):
    if row['RFM总分'] >= 13:
        return '重要价值客户'
    elif row['RFM总分'] >= 10:
        return '潜力客户'
    elif row['RFM总分'] >= 7:
        return '一般客户'
    else:
        return '低价值客户'

customers['客户分层'] = customers.apply(segment_customer, axis=1)
print("客户分层分布:")
print(customers['客户分层'].value_counts())`,
            output: `客户分层分布:
重要价值客户    2101
潜力客户       1823
一般客户       1756
低价值客户     1363`
          }
        ]
      },
      {
        id: 'c2-3',
        title: '客户生命周期价值',
        lessons: [
          {
            id: 'l2-3-1',
            title: 'CLV计算模型',
            duration: '40分钟',
            content: '学习客户生命周期价值（CLV）的计算方法和业务应用。',
            codeExample: `# 计算客户生命周期价值
# CLV = (平均消费金额 × 消费频率 × 毛利率) × 客户平均寿命

# 假设毛利率为30%
gross_margin = 0.30

# 计算每个客户的CLV
customers['CLV'] = (customers['月消费'] * 12 * gross_margin) * (customers['在网时长'] / 12)

# 按客户分层查看平均CLV
clv_by_segment = customers.groupby('客户分层')['CLV'].agg(['mean', 'sum', 'count'])
clv_by_segment.columns = ['平均CLV', '总CLV', '客户数']
print("各客户层级的生命周期价值:")
print(clv_by_segment.round(2))

# 计算总客户价值
total_clv = customers['CLV'].sum()
print(f"\n客户总价值: ¥{total_clv:,.2f}")`,
            output: `各客户层级的生命周期价值:
           平均CLV      总CLV  客户数
客户分层                              
一般客户     1250.50   2199876.50   1756
低价值客户     456.30    621942.90   1363
潜力客户     2150.80   3920908.40   1823
重要价值客户   3890.60   8174150.60   2101

客户总价值: ¥14,916,878.40`
          }
        ]
      },
      {
        id: 'c2-4',
        title: '流失预测模型',
        lessons: [
          {
            id: 'l2-4-1',
            title: '构建流失预测模型',
            duration: '50分钟',
            content: '使用逻辑回归构建简单的客户流失预测模型。',
            codeExample: `from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, accuracy_score

# 准备特征
features = ['在网时长', '月消费', '最近消费天数', '消费频次', '消费金额']
X = customers[features]
y = (customers['流失状态'] == '是').astype(int)

# 划分训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 训练模型
model = LogisticRegression(random_state=42)
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
print(f"模型准确率: {accuracy_score(y_test, y_pred):.2%}")
print("\n分类报告:")
print(classification_report(y_test, y_pred, target_names=['留存', '流失']))

# 特征重要性
feature_importance = pd.DataFrame({
    '特征': features,
    '重要性': abs(model.coef_[0])
}).sort_values('重要性', ascending=False)
print("\n特征重要性:")
print(feature_importance)`,
            output: `模型准确率: 80.24%

分类报告:
              precision    recall  f1-score   support

留存           0.84      0.89      0.86      1552
流失           0.72      0.63      0.67       661

特征重要性:
        特征    重要性
2  最近消费天数  0.8567
0      在网时长  0.6234
3      消费频次  0.4567
1       月消费  0.3456
4      消费金额  0.2345`
          }
        ]
      }
    ],
    dataset: {
      name: '电信客户数据集',
      description: '包含7043名电信客户的详细信息，包括人口统计、服务使用、消费行为和流失状态',
      size: '1.8 MB',
      format: 'CSV',
      sampleData: `客户ID,性别,在网时长,电话服务,互联网服务,月消费,总消费金额,流失状态
7590,女,1,否,DSL,29.85,29.85,否
5575,男,34,是,Fiber,56.95,1889.50,否
3668,男,2,是,Fiber,53.85,108.15,是`
    },
    caseStudy: {
      title: '某电信运营商客户流失预警项目',
      problem: '客户流失率高达26.6%，缺乏有效的客户价值评估和流失预警机制，导致客户挽留成本高、效果差。',
      solution: '构建RFM客户价值分层体系和流失预测模型，识别高风险客户群体，制定差异化挽留策略。',
      results: '流失预测准确率达80%，通过针对性挽留措施将流失率降低8个百分点，年挽回收入损失约1200万元。',
      visualization: '客户分层价值分布：重要价值客户贡献55%的总价值，流失风险客户识别准确率提升至78%'
    }
  },
  {
    id: '3',
    title: '购物车分析',
    description: '分析在线零售交易数据，学习关联规则挖掘（Apriori算法）、购物篮分析和商品推荐策略。',
    level: 'intermediate',
    levelLabel: '中级',
    duration: '15 小时',
    students: 756,
    rating: 4.9,
    image: '🛒',
    tags: ['关联规则', 'Apriori', '推荐系统'],
    prerequisites: ['Python基础', 'Pandas数据处理'],
    objectives: [
      '理解关联规则挖掘的基本概念',
      '掌握Apriori算法的原理和实现',
      '学会计算支持度、置信度和提升度',
      '能够应用购物篮分析优化商品布局'
    ],
    targetAudience: [
      '电商数据分析人员',
      '零售行业从业者',
      '对推荐系统感兴趣的学习者'
    ],
    chapters: [
      {
        id: 'c3-1',
        title: '购物篮数据准备',
        lessons: [
          {
            id: 'l3-1-1',
            title: '交易数据加载与探索',
            duration: '20分钟',
            content: '加载在线零售交易数据，了解数据结构和字段含义。',
            codeExample: `import pandas as pd
from mlxtend.frequent_patterns import apriori, association_rules

# 加载交易数据
transactions = pd.read_csv('online_retail.csv')

print(f"交易记录数: {len(transactions)}")
print(f"商品种类数: {transactions['商品名称'].nunique()}")
print(f"订单数: {transactions['订单ID'].nunique()}")

# 查看数据样本
print("\n数据样本:")
print(transactions.head(10))`,
            output: `交易记录数: 541909
商品种类数: 4224
订单数: 25900

数据样本:
  订单ID  商品代码    商品名称  数量  单价   客户ID        日期
0  536365   85123A   白色挂钟   6  2.55    17850  2010-12-01
1  536365    71053   白色相框   6  3.39    17850  2010-12-01
2  536365   84406B   奶油杯垫   8  2.75    17850  2010-12-01`
          }
        ]
      },
      {
        id: 'c3-2',
        title: '关联规则挖掘',
        lessons: [
          {
            id: 'l3-2-1',
            title: '购物篮数据转换',
            duration: '30分钟',
            content: '将交易数据转换为适合关联规则挖掘的格式。',
            codeExample: `# 数据清洗：删除退货记录和缺失值
transactions = transactions[transactions['数量'] > 0]
transactions = transactions.dropna()

# 创建购物篮矩阵
basket = transactions.groupby(['订单ID', '商品名称'])['数量'].sum().unstack().reset_index().fillna(0).set_index('订单ID')

# 转换为二元矩阵（0/1）
def encode_units(x):
    return 1 if x >= 1 else 0

basket_sets = basket.applymap(encode_units)

print(f"购物篮矩阵形状: {basket_sets.shape}")
print(f"\n购物篮矩阵样本:")
print(basket_sets.iloc[:5, :5])`,
            output: `购物篮矩阵形状: (25900, 4224)

购物篮矩阵样本:
商品名称  50'S CHRISTMAS GIFT BAG  DOLLY GIRL...  ...
订单ID                                              
536365                      0              0  ...
536366                      0              0  ...
536367                      0              0  ...`
          },
          {
            id: 'l3-2-2',
            title: 'Apriori算法应用',
            duration: '40分钟',
            content: '使用Apriori算法挖掘频繁项集和关联规则。',
            codeExample: `# 选择热门商品（减少计算量）
item_counts = basket_sets.sum().sort_values(ascending=False)
top_items = item_counts.head(50).index
basket_top = basket_sets[top_items]

# 挖掘频繁项集（最小支持度1%）
frequent_itemsets = apriori(basket_top, min_support=0.01, use_colnames=True)
frequent_itemsets['length'] = frequent_itemsets['itemsets'].apply(lambda x: len(x))

print(f"频繁项集数量: {len(frequent_itemsets)}")
print("\n支持度最高的10个项集:")
print(frequent_itemsets.sort_values('support', ascending=False).head(10))`,
            output: `频繁项集数量: 156

支持度最高的10个项集:
    support                      itemsets  length
0    0.0812              (白色咖啡杯)       1
1    0.0756              (红色餐巾纸)       1
2    0.0689              (绿色茶杯)       1
3    0.0456       (白色咖啡杯, 红色餐巾纸)       2
4    0.0389       (绿色茶杯, 白色咖啡杯)       2`
          },
          {
            id: 'l3-2-3',
            title: '关联规则生成与评估',
            duration: '35分钟',
            content: '从频繁项集生成关联规则，评估规则质量。',
            codeExample: `# 生成关联规则（最小置信度50%）
rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.5)

# 按提升度排序
rules = rules.sort_values('lift', ascending=False)

print(f"关联规则数量: {len(rules)}")
print("\n提升度最高的10条规则:")
print(rules[['antecedents', 'consequents', 'support', 'confidence', 'lift']].head(10))

# 筛选强规则（高支持度、高置信度、高提升度）
strong_rules = rules[(rules['support'] >= 0.02) & 
                     (rules['confidence'] >= 0.6) & 
                     (rules['lift'] >= 2)]
print(f"\n强规则数量: {len(strong_rules)}")`,
            output: `关联规则数量: 89

提升度最高的10条规则:
         antecedents      consequents  support  confidence  lift
0     (白色咖啡杯)    (红色餐巾纸)   0.0456        0.72  3.25
1     (红色餐巾纸)    (白色咖啡杯)   0.0456        0.65  3.25
2      (绿色茶杯)    (白色咖啡杯)   0.0389        0.78  2.89

强规则数量: 23`
          }
        ]
      },
      {
        id: 'c3-3',
        title: '业务应用',
        lessons: [
          {
            id: 'l3-3-1',
            title: '商品推荐策略',
            duration: '35分钟',
            content: '基于关联规则制定商品推荐和捆绑销售策略。',
            codeExample: `# 商品推荐函数
def recommend_products(product_name, rules, top_n=5):
    # 查找包含该商品的规则
    product_rules = rules[rules['antecedents'].apply(lambda x: product_name in x)]
    
    # 按提升度排序
    product_rules = product_rules.sort_values('lift', ascending=False)
    
    recommendations = []
    for _, rule in product_rules.head(top_n).iterrows():
        consequent = list(rule['consequents'])[0]
        recommendations.append({
            '推荐商品': consequent,
            '置信度': f"{rule['confidence']:.1%}",
            '提升度': f"{rule['lift']:.2f}"
        })
    
    return pd.DataFrame(recommendations)

# 为"白色咖啡杯"推荐搭配商品
print("购买'白色咖啡杯'的顾客还可能购买:")
print(recommend_products('白色咖啡杯', rules))`,
            output: `购买'白色咖啡杯'的顾客还可能购买:
      推荐商品   置信度  提升度
0   红色餐巾纸  72.0%  3.25
1   绿色茶杯  58.0%  2.89
2   陶瓷托盘  45.0%  2.34
3   咖啡勺套装  42.0%  2.12
4   糖罐套装  38.0%  1.98`
          }
        ]
      }
    ],
    dataset: {
      name: '在线零售数据集',
      description: '英国某在线零售商2010-2011年的交易数据，包含54万条交易记录',
      size: '22 MB',
      format: 'CSV',
      sampleData: `订单ID,商品代码,商品名称,数量,单价,客户ID,日期,国家
536365,85123A,白色挂钟,6,2.55,17850,2010-12-01 08:26,英国
536365,71053,白色相框,6,3.39,17850,2010-12-01 08:26,英国
536366,22752,字母图案垫,2,7.65,17850,2010-12-01 08:28,英国`
    },
    caseStudy: {
      title: '某电商平台商品关联推荐优化',
      problem: '商品推荐转化率低，顾客平均订单金额不高，缺乏数据驱动的商品组合策略。',
      solution: '通过购物篮分析挖掘商品关联规则，优化商品推荐算法和捆绑销售策略。',
      results: '推荐点击率提升45%，捆绑销售转化率提升32%，平均订单金额增长18%，库存周转率提升15%。',
      visualization: '关联规则网络图显示：白色咖啡杯与红色餐巾纸关联度最高（提升度3.25），形成核心商品组合'
    }
  },
  {
    id: '4',
    title: '聚类分析',
    description: '使用Iris数据集和其他业务数据，学习K-means、层次聚类等算法，掌握客户细分和市场分群的实际应用。',
    level: 'advanced',
    levelLabel: '高级',
    duration: '18 小时',
    students: 645,
    rating: 4.8,
    image: '🎯',
    tags: ['K-means', '聚类算法', '客户细分'],
    prerequisites: ['Python基础', '统计学基础', '机器学习基础'],
    objectives: [
      '掌握K-means算法的原理和应用',
      '学会使用肘部法则确定最优聚类数',
      '理解层次聚类和DBSCAN算法',
      '能够应用聚类分析解决业务问题'
    ],
    targetAudience: [
      '有机器学习基础的学习者',
      '数据科学爱好者',
      '需要进行市场分群的业务分析师'
    ],
    chapters: [
      {
        id: 'c4-1',
        title: '聚类分析基础',
        lessons: [
          {
            id: 'l4-1-1',
            title: 'Iris数据集探索',
            duration: '25分钟',
            content: '使用经典的Iris数据集了解聚类分析的基本概念。',
            codeExample: `from sklearn.datasets import load_iris
import pandas as pd
import matplotlib.pyplot as plt

# 加载Iris数据集
iris = load_iris()
df = pd.DataFrame(iris.data, columns=iris.feature_names)
df['species'] = [iris.target_names[i] for i in iris.target]

print("数据集形状:", df.shape)
print("\n特征统计:")
print(df.describe())
print("\n类别分布:")
print(df['species'].value_counts())`,
            output: `数据集形状: (150, 5)

特征统计:
       花萼长度(cm)  花萼宽度(cm)  花瓣长度(cm)  花瓣宽度(cm)
count   150.000   150.000   150.000   150.000
mean      5.843     3.057     3.758     1.199
std       0.828     0.436     1.765     0.762

类别分布:
virginica     50
versicolor    50
setosa        50`
          }
        ]
      },
      {
        id: 'c4-2',
        title: 'K-means聚类',
        lessons: [
          {
            id: 'l4-2-1',
            title: 'K-means算法实现',
            duration: '40分钟',
            content: '学习K-means算法的原理，使用sklearn实现聚类分析。',
            codeExample: `from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 数据标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(iris.data)

# 应用K-means聚类（K=3）
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
clusters = kmeans.fit_predict(X_scaled)

# 添加聚类结果到数据框
df['cluster'] = clusters

print("聚类中心:")
print(kmeans.cluster_centers_)
print(f"\n聚类分布:")
print(pd.Series(clusters).value_counts().sort_index())

# 评估聚类效果
from sklearn.metrics import adjusted_rand_score
ari = adjusted_rand_score(iris.target, clusters)
print(f"\n调整兰德指数(ARI): {ari:.3f}")`,
            output: `聚类中心:
[[-1.01457897  0.85326168 -1.30487835 -1.25489359]
 [ 1.01457897 -0.85326168  0.90518286  0.93159586]
 [ 0.          0.         -0.0994865  -0.0994865 ]]

聚类分布:
0    62
1    50
2    38

调整兰德指数(ARI): 0.730`
          },
          {
            id: 'l4-2-2',
            title: '肘部法则确定K值',
            duration: '30分钟',
            content: '使用肘部法则和轮廓系数确定最优聚类数量。',
            codeExample: `from sklearn.metrics import silhouette_score

# 计算不同K值的SSE和轮廓系数
inertias = []
silhouette_scores = []
K_range = range(2, 11)

for k in K_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(X_scaled)
    inertias.append(kmeans.inertia_)
    silhouette_scores.append(silhouette_score(X_scaled, kmeans.labels_))

# 找到最优K值
best_k = list(K_range)[silhouette_scores.index(max(silhouette_scores))]
print(f"最优聚类数K: {best_k}")
print(f"最优轮廓系数: {max(silhouette_scores):.3f}")

# 显示各K值的评估指标
results = pd.DataFrame({
    'K值': K_range,
    'SSE': inertias,
    '轮廓系数': silhouette_scores
})
print("\n不同K值的评估指标:")
print(results)`,
            output: `最优聚类数K: 3
最优轮廓系数: 0.459

不同K值的评估指标:
   K值        SSE  轮廓系数
0   2   152.368    0.681
1   3    78.945    0.459
2   4    57.234    0.389
3   5    46.891    0.356`
          }
        ]
      },
      {
        id: 'c4-3',
        title: '客户细分实战',
        lessons: [
          {
            id: 'l4-3-1',
            title: '零售客户聚类分析',
            duration: '50分钟',
            content: '将聚类分析应用于零售客户细分，识别不同客户群体。',
            codeExample: `# 客户消费数据
import numpy as np

# 模拟客户数据
np.random.seed(42)
n_customers = 500

customer_data = pd.DataFrame({
    '年消费金额': np.random.lognormal(8, 0.5, n_customers),
    '购买频次': np.random.poisson(12, n_customers),
    '平均订单金额': np.random.lognormal(4, 0.3, n_customers),
    '最近购买天数': np.random.exponential(60, n_customers)
})

# 标准化
scaler = StandardScaler()
X_customer = scaler.fit_transform(customer_data)

# K-means聚类
kmeans_customer = KMeans(n_clusters=4, random_state=42, n_init=10)
customer_data['客户群体'] = kmeans_customer.fit_predict(X_customer)

# 分析各群体特征
cluster_analysis = customer_data.groupby('客户群体').agg({
    '年消费金额': 'mean',
    '购买频次': 'mean',
    '平均订单金额': 'mean',
    '最近购买天数': 'mean',
    '客户群体': 'count'
}).round(2)
cluster_analysis.columns = ['年均消费', '年均购买', '平均订单', '最近购买天数', '客户数']

print("客户群体特征分析:")
print(cluster_analysis)

# 群体标签
def label_cluster(row):
    if row['年均消费'] > 15000 and row['最近购买天数'] < 30:
        return '高价值活跃客户'
    elif row['年均消费'] > 15000:
        return '高价值沉睡客户'
    elif row['最近购买天数'] < 30:
        return '普通活跃客户'
    else:
        return '低价值客户'

cluster_analysis['群体标签'] = cluster_analysis.apply(label_cluster, axis=1)
print("\n群体标签:")
print(cluster_analysis[['客户数', '群体标签']])`,
            output: `客户群体特征分析:
           年均消费  年均购买  平均订单  最近购买天数  客户数
客户群体                                              
0        5234.56     8.50    615.23       85.40   156
1       18234.89    15.20   1198.50       25.30   134
2        8456.70    12.30   687.40       35.60   145
3       16543.20    10.80   1532.80       78.90    65

群体标签:
     客户数       群体标签
客户群体              
0     156    低价值客户
1     134  高价值活跃客户
2     145   普通活跃客户
3      65  高价值沉睡客户`
          }
        ]
      }
    ],
    dataset: {
      name: 'Iris花卉数据集',
      description: '经典的机器学习数据集，包含150个样本，3种鸢尾花类别，4个特征维度',
      size: '10 KB',
      format: 'CSV',
      sampleData: `花萼长度,花萼宽度,花瓣长度,花瓣宽度,类别
5.1,3.5,1.4,0.2,setosa
4.9,3.0,1.4,0.2,setosa
7.0,3.2,4.7,1.4,versicolor
6.4,3.2,4.5,1.5,versicolor
6.3,3.3,6.0,2.5,virginica`
    },
    caseStudy: {
      title: '某零售连锁企业客户分群项目',
      problem: '客户群体特征不清晰，营销策略一刀切，导致营销成本高、转化率低。',
      solution: '使用K-means聚类将客户分为4个群体，针对不同群体制定差异化营销策略。',
      results: '营销转化率提升65%，客户满意度提升28%，营销成本降低35%，高价值客户留存率提升42%。',
      visualization: '客户群体分布：高价值活跃客户占27%，高价值沉睡客户占13%，是重点挽留和激活对象'
    }
  },
  {
    id: '5',
    title: '时间序列分析',
    description: '分析国际航班乘客数据，学习时间序列的趋势分析、季节性分解、ARIMA模型和预测方法。',
    level: 'advanced',
    levelLabel: '高级',
    duration: '20 小时',
    students: 534,
    rating: 4.7,
    image: '📈',
    tags: ['时间序列', 'ARIMA', '预测分析'],
    prerequisites: ['Python基础', '统计学基础', 'Pandas数据处理'],
    objectives: [
      '掌握时间序列数据的基本特征',
      '学会趋势分析和季节性分解',
      '理解ARIMA模型的原理和应用',
      '能够进行时间序列预测'
    ],
    targetAudience: [
      '需要进行预测分析的业务人员',
      '金融数据分析从业者',
      '对时间序列分析感兴趣的学习者'
    ],
    chapters: [
      {
        id: 'c5-1',
        title: '时间序列基础',
        lessons: [
          {
            id: 'l5-1-1',
            title: '航班乘客数据加载',
            duration: '20分钟',
            content: '加载经典的航空乘客数据集，了解时间序列数据结构。',
            codeExample: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.seasonal import seasonal_decompose

# 加载数据
passengers = pd.read_csv('airline_passengers.csv')
passengers['Month'] = pd.to_datetime(passengers['Month'])
passengers.set_index('Month', inplace=True)

print("数据范围:", passengers.index.min(), "至", passengers.index.max())
print(f"数据点数量: {len(passengers)}")
print("\n数据预览:")
print(passengers.head(10))

# 基本统计
print(f"\n乘客数量统计:")
print(passengers['Passengers'].describe())`,
            output: `数据范围: 1949-01-01 00:00:00 至 1960-12-01 00:00:00
数据点数量: 144

数据预览:
            Passengers
Month                  
1949-01-01         112
1949-02-01         118
1949-03-01         132
1949-04-01         129
1949-05-01         121

乘客数量统计:
count    144.000000
mean     280.298611
std      119.966317
min      104.000000
25%      180.000000
50%      265.500000
75%      360.500000
max      622.000000`
          },
          {
            id: 'l5-1-2',
            title: '趋势和季节性可视化',
            duration: '25分钟',
            content: '可视化时间序列的趋势、季节性和残差成分。',
            codeExample: `# 季节性分解
decomposition = seasonal_decompose(passengers['Passengers'], model='multiplicative', period=12)

# 提取各成分
trend = decomposition.trend
seasonal = decomposition.seasonal
residual = decomposition.resid

print("趋势成分(前5个非空值):")
print(trend.dropna().head())

print("\n季节性成分(前12个月):")
print(seasonal.head(12))

# 计算季节性强度
seasonal_strength = 1 - np.var(residual.dropna()) / np.var(passengers['Passengers'] - trend.dropna())
print(f"\n季节性强度: {seasonal_strength:.3f}")

# 年度同比增长
passengers['Year'] = passengers.index.year
yearly_avg = passengers.groupby('Year')['Passengers'].mean()
print(f"\n年度平均乘客数:")
print(yearly_avg.round(0))`,
            output: `趋势成分(前5个非空值):
Month
1949-07-01    126.0
1949-08-01    130.0
1949-09-01    134.0
1949-10-01    138.0
1949-11-01    142.0

季节性成分(前12个月):
Month
1949-01-01    0.913
1949-02-01    0.923
1949-03-01    1.023
1949-04-01    0.987
1949-05-01    0.934
1949-06-01    1.045
1949-07-01    1.156
1949-08-01    1.156
1949-09-01    1.012
1949-10-01    0.923
1949-11-01    0.845
1949-12-01    0.989

季节性强度: 0.987

年度平均乘客数:
Year
1949    126.0
1950    139.0
1951    170.0
1952    193.0
1953    222.0
1954    236.0
1955    271.0
1956    306.0
1957    347.0
1958    364.0
1959    416.0
1960    461.0`
          }
        ]
      },
      {
        id: 'c5-2',
        title: '时间序列建模',
        lessons: [
          {
            id: 'l5-2-1',
            title: '平稳性检验',
            duration: '30分钟',
            content: '学习ADF检验，判断时间序列的平稳性。',
            codeExample: `from statsmodels.tsa.stattools import adfuller

# ADF检验
def adf_test(timeseries):
    result = adfuller(timeseries.dropna())
    print('ADF检验结果:')
    print(f'ADF统计量: {result[0]:.4f}')
    print(f'p值: {result[1]:.4f}')
    print('临界值:')
    for key, value in result[4].items():
        print(f'\t{key}: {value:.4f}')
    
    if result[1] <= 0.05:
        print("\n结论: 序列平稳（拒绝原假设）")
    else:
        print("\n结论: 序列非平稳（无法拒绝原假设）")
    
    return result[1]

print("原始序列检验:")
p_value = adf_test(passengers['Passengers'])

# 一阶差分
passengers['一阶差分'] = passengers['Passengers'].diff()
print("\n一阶差分序列检验:")
p_value_diff = adf_test(passengers['一阶差分'])`,
            output: `原始序列检验:
ADF检验结果:
ADF统计量: 0.8154
p值: 0.9919
临界值:
	1%: -3.4817
	5%: -2.8840
	10%: -2.5788

结论: 序列非平稳（无法拒绝原假设）

一阶差分序列检验:
ADF检验结果:
ADF统计量: -2.8293
p值: 0.0542
临界值:
	1%: -3.4817
	5%: -2.8840
	10%: -2.5788

结论: 序列非平稳（无法拒绝原假设）`
          },
          {
            id: 'l5-2-2',
            title: 'ARIMA模型',
            duration: '45分钟',
            content: '构建ARIMA模型进行时间序列预测。',
            codeExample: `from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_squared_error

# 拆分训练集和测试集
train = passengers['Passengers'][:120]  # 前10年
test = passengers['Passengers'][120:]   # 后2年

# 拟合ARIMA模型(1,1,1)
model = ARIMA(train, order=(1, 1, 1))
model_fit = model.fit()

print("模型摘要:")
print(model_fit.summary().tables[1])

# 预测
forecast = model_fit.forecast(steps=len(test))

# 计算RMSE
rmse = np.sqrt(mean_squared_error(test, forecast))
print(f"\nRMSE: {rmse:.2f}")

# 计算MAPE
mape = np.mean(np.abs((test - forecast) / test)) * 100
print(f"MAPE: {mape:.2f}%")

# 预测未来12个月
future_forecast = model_fit.get_forecast(steps=12)
future_mean = future_forecast.predicted_mean
conf_int = future_forecast.conf_int()

print(f"\n未来12个月预测:")
print(f"平均预测值: {future_mean.mean():.0f}")
print(f"95%置信区间: [{conf_int.iloc[0,0]:.0f}, {conf_int.iloc[0,1]:.0f}]")`,
            output: `模型摘要:
==============================================================================
                 coef    std err          z      P>|z|      [0.025      0.975]
------------------------------------------------------------------------------
const          2.0634      0.892      2.313      0.021       0.315       3.812
ar.L1          0.3734      0.089      4.194      0.000       0.199       0.548
ma.L1         -0.1291      0.097     -1.331      0.183      -0.319       0.061
sigma2       143.2341     18.512      7.737      0.000     106.950     179.518
==============================================================================

RMSE: 45.67
MAPE: 8.34%

未来12个月预测:
平均预测值: 512
95%置信区间: [420, 604]`
          }
        ]
      }
    ],
    dataset: {
      name: '航空乘客数据集',
      description: '1949-1960年国际航空乘客月度数据，经典的时间序列分析数据集',
      size: '5 KB',
      format: 'CSV',
      sampleData: `Month,Passengers
1949-01,112
1949-02,118
1949-03,132
1949-04,129
1949-05,121
1949-06,135`
    },
    caseStudy: {
      title: '某航空公司客流量预测项目',
      problem: '航班调度缺乏数据支撑，旺季运力不足、淡季资源浪费，客座率波动大。',
      solution: '建立ARIMA时间序列预测模型，分析历史客流趋势和季节性规律，预测未来12个月客流量。',
      results: '预测准确率91.7%，优化航班调度后客座率提升12%，运营成本降低18%，客户满意度提升23%。',
      visualization: '时间序列分解显示：明显的上升趋势（年增长约12%）和强烈的季节性（7-8月为峰值）'
    }
  },
  {
    id: '6',
    title: '社交媒体数据分析',
    description: '分析Twitter情感数据，学习文本预处理、情感分析、词频统计和主题建模等NLP技术。',
    level: 'intermediate',
    levelLabel: '中级',
    duration: '15 小时',
    students: 678,
    rating: 4.6,
    image: '💬',
    tags: ['NLP', '情感分析', '文本挖掘'],
    prerequisites: ['Python基础', 'Pandas数据处理'],
    objectives: [
      '掌握文本数据预处理技术',
      '学会使用情感分析工具',
      '理解词频统计和可视化',
      '能够进行简单的主题建模'
    ],
    targetAudience: [
      '社交媒体运营人员',
      '品牌舆情分析师',
      '对NLP感兴趣的学习者'
    ],
    chapters: [
      {
        id: 'c6-1',
        title: '文本数据预处理',
        lessons: [
          {
            id: 'l6-1-1',
            title: '推文数据加载与清洗',
            duration: '25分钟',
            content: '加载Twitter数据，进行文本清洗和预处理。',
            codeExample: `import pandas as pd
import re
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

# 加载推文数据
tweets = pd.read_csv('twitter_data.csv')
print(f"推文数量: {len(tweets)}")
print(f"\n数据列: {list(tweets.columns)}")
print("\n样本推文:")
print(tweets['text'].head(3).tolist())

# 定义清洗函数
def clean_text(text):
    # 转小写
    text = text.lower()
    # 移除URL
    text = re.sub(r'http\S+|www\S+|https\S+', '', text, flags=re.MULTILINE)
    # 移除@提及和#标签
    text = re.sub(r'@\w+|#\w+', '', text)
    # 移除特殊字符和数字
    text = re.sub(r'[^a-zA-Z\u4e00-\u9fff\s]', '', text)
    # 移除多余空格
    text = ' '.join(text.split())
    return text

# 应用清洗
tweets['cleaned_text'] = tweets['text'].apply(clean_text)
print("\n清洗后的样本:")
print(tweets['cleaned_text'].head(3).tolist())`,
            output: `推文数量: 5000

数据列: ['id', 'text', 'created_at', 'retweet_count', 'favorite_count', 'user_followers']

样本推文:
['Just tried the new iPhone! Absolutely love it! #Apple #iPhone', 
 'Worst customer service ever. Never buying from here again. @company',
 'Great weather today! Perfect for a walk in the park.']

清洗后的样本:
['just tried the new iphone absolutely love it', 
 'worst customer service ever never buying from here again',
 'great weather today perfect for a walk in the park']`
          }
        ]
      },
      {
        id: 'c6-2',
        title: '情感分析',
        lessons: [
          {
            id: 'l6-2-1',
            title: '使用VADER进行情感分析',
            duration: '35分钟',
            content: '使用VADER情感分析工具对推文进行情感分类。',
            codeExample: `from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

# 初始化分析器
analyzer = SentimentIntensityAnalyzer()

# 情感分析函数
def get_sentiment(text):
    scores = analyzer.polarity_scores(text)
    compound = scores['compound']
    
    if compound >= 0.05:
        return '正面'
    elif compound <= -0.05:
        return '负面'
    else:
        return '中性'

# 应用情感分析
tweets['sentiment'] = tweets['cleaned_text'].apply(get_sentiment)

# 情感分布
sentiment_counts = tweets['sentiment'].value_counts()
sentiment_pct = tweets['sentiment'].value_counts(normalize=True) * 100

print("情感分布:")
for sentiment in sentiment_counts.index:
    print(f"{sentiment}: {sentiment_counts[sentiment]} ({sentiment_pct[sentiment]:.1f}%)")

# 查看各类别样本
print("\n正面推文示例:")
print(tweets[tweets['sentiment']=='正面']['text'].head(2).tolist())
print("\n负面推文示例:")
print(tweets[tweets['sentiment']=='负面']['text'].head(2).tolist())`,
            output: `情感分布:
正面: 2850 (57.0%)
中性: 1450 (29.0%)
负面: 700 (14.0%)

正面推文示例:
['Just tried the new iPhone! Absolutely love it!', 
 'Great weather today! Perfect for a walk in the park.']

负面推文示例:
['Worst customer service ever. Never buying from here again.',
 'Product broke after one day. Complete waste of money.']`
          },
          {
            id: 'l6-2-2',
            title: '情感趋势分析',
            duration: '30分钟',
            content: '分析情感随时间的变化趋势。',
            codeExample: `# 转换日期
tweets['created_at'] = pd.to_datetime(tweets['created_at'])
tweets['date'] = tweets['created_at'].dt.date

# 每日情感统计
daily_sentiment = tweets.groupby(['date', 'sentiment']).size().unstack(fill_value=0)
daily_sentiment['总计'] = daily_sentiment.sum(axis=1)
daily_sentiment['正面比例'] = daily_sentiment['正面'] / daily_sentiment['总计'] * 100

print("最近7天情感趋势:")
print(daily_sentiment[['正面', '负面', '中性', '正面比例']].tail(7).round(1))

# 计算平均情感得分
tweets['sentiment_score'] = tweets['cleaned_text'].apply(
    lambda x: analyzer.polarity_scores(x)['compound']
)

print(f"\n整体情感得分均值: {tweets['sentiment_score'].mean():.3f}")
print(f"情感得分标准差: {tweets['sentiment_score'].std():.3f}")

# 按情感分类统计互动数据
engagement_by_sentiment = tweets.groupby('sentiment').agg({
    'retweet_count': 'mean',
    'favorite_count': 'mean'
}).round(1)
print("\n不同情感的平均互动量:")
print(engagement_by_sentiment)`,
            output: `最近7天情感趋势:
                正面   负面   中性  正面比例
date                              
2024-01-25    95   25   45    57.6
2024-01-26   102   18   38    64.6
2024-01-27    88   32   42    54.3
2024-01-28    96   22   48    57.8
2024-01-29   105   20   40    63.6
2024-01-30    92   28   46    55.4
2024-01-31    98   24   44    58.3

整体情感得分均值: 0.234
情感得分标准差: 0.456

不同情感的平均互动量:
          retweet_count  favorite_count
sentiment                            
中性                12.5            35.2
正面                28.3            78.5
负面                45.6           112.3`
          }
        ]
      }
    ],
    dataset: {
      name: 'Twitter情感数据集',
      description: '5000条Twitter推文，包含文本内容、发布时间、互动数据等字段',
      size: '2.1 MB',
      format: 'CSV',
      sampleData: `id,text,created_at,retweet_count,favorite_count,user_followers
1,Just tried the new iPhone! Absolutely love it!,2024-01-15 10:30,25,89,1250
2,Worst customer service ever. Never buying again.,2024-01-15 11:45,45,156,890
3,Great weather today! Perfect for a walk.,2024-01-15 14:20,12,34,2100`
    },
    caseStudy: {
      title: '某品牌社交媒体舆情监测项目',
      problem: '品牌负面舆情发现不及时，缺乏系统性的社交媒体情感监测机制，危机响应滞后。',
      solution: '建立自动化情感分析系统，实时监测品牌相关推文，识别负面舆情并预警。',
      results: '负面舆情发现时间从平均6小时缩短至15分钟，品牌危机响应效率提升85%，正面舆情占比从52%提升至67%。',
      visualization: '情感分析显示：正面情感57%，中性29%，负面14%；负面推文平均互动量最高，传播风险大'
    }
  },
  {
    id: '7',
    title: '网站流量分析',
    description: '分析Google Analytics数据，掌握用户行为分析、转化漏斗、留存分析和A/B测试等核心技能。',
    level: 'intermediate',
    levelLabel: '中级',
    duration: '12 小时',
    students: 823,
    rating: 4.7,
    image: '🌐',
    tags: ['用户行为', '转化分析', 'A/B测试'],
    prerequisites: ['Python基础', 'Pandas数据处理', '基础统计学'],
    objectives: [
      '掌握网站流量数据的核心指标',
      '学会构建和分析转化漏斗',
      '理解用户留存分析方法',
      '能够设计和分析A/B测试'
    ],
    targetAudience: [
      '网站运营人员',
      '产品经理',
      '增长黑客'
    ],
    chapters: [
      {
        id: 'c7-1',
        title: '流量数据概览',
        lessons: [
          {
            id: 'l7-1-1',
            title: 'Google Analytics数据加载',
            duration: '20分钟',
            content: '加载网站流量数据，了解核心指标。',
            codeExample: `import pandas as pd
import numpy as np

# 加载流量数据
traffic = pd.read_csv('website_traffic.csv')
traffic['date'] = pd.to_datetime(traffic['date'])

print(f"数据时间范围: {traffic['date'].min()} 至 {traffic['date'].max()}")
print(f"总记录数: {len(traffic)}")
print(f"\n数据列: {list(traffic.columns)}")

# 核心指标概览
print("\n核心流量指标:")
print(f"总访问量: {traffic['visits'].sum():,}")
print(f"总访客数: {traffic['visitors'].sum():,}")
print(f"总页面浏览量: {traffic['pageviews'].sum():,}")
print(f"平均跳出率: {traffic['bounce_rate'].mean():.1%}")
print(f"平均停留时间: {traffic['avg_session_duration'].mean():.1f}秒")`,
            output: `数据时间范围: 2024-01-01 00:00:00 至 2024-03-31 00:00:00
总记录数: 90

数据列: ['date', 'visits', 'visitors', 'pageviews', 'bounce_rate', 'avg_session_duration', 'conversions']

核心流量指标:
总访问量: 1,234,567
总访客数: 876,432
总页面浏览量: 3,456,789
平均跳出率: 45.3%
平均停留时间: 156.7秒`
          }
        ]
      },
      {
        id: 'c7-2',
        title: '转化漏斗分析',
        lessons: [
          {
            id: 'l7-2-1',
            title: '构建转化漏斗',
            duration: '35分钟',
            content: '分析用户从访问到转化的完整路径。',
            codeExample: `# 模拟转化漏斗数据
funnel_data = {
    '阶段': ['访问网站', '浏览商品', '加入购物车', '进入结算', '完成购买'],
    '用户数': [100000, 45000, 18000, 9000, 4500],
    '转化率': [100.0, 45.0, 40.0, 50.0, 50.0]
}

funnel_df = pd.DataFrame(funnel_data)
funnel_df['总体转化率'] = funnel_df['用户数'] / funnel_df['用户数'].iloc[0] * 100
funnel_df['流失率'] = 100 - funnel_df['转化率']

print("转化漏斗分析:")
print(funnel_df.to_string(index=False))

# 计算关键指标
total_conversion = funnel_df['用户数'].iloc[-1] / funnel_df['用户数'].iloc[0]
print(f"\n总体转化率: {total_conversion:.2%}")

# 找出最大流失环节
max_drop_idx = funnel_df['流失率'].iloc[1:].idxmax()
print(f"最大流失环节: {funnel_df.loc[max_drop_idx, '阶段']}")
print(f"该环节流失率: {funnel_df.loc[max_drop_idx, '流失率']:.1f}%")

# 优化潜力估算
if funnel_df.loc[1, '转化率'] == 45.0:
    potential = funnel_df['用户数'].iloc[0] * 0.55 * 0.4 * 0.5 * 0.5
    print(f"\n若浏览转化率提升至55%，预计订单量: {potential:.0f} (+{potential/4500-1:.1%})")`,
            output: `转化漏斗分析:
    阶段      用户数  转化率  总体转化率   流失率
 访问网站  100000  100.0   100.0    0.0
 浏览商品   45000   45.0    45.0   55.0
加入购物车   18000   40.0    18.0   60.0
 进入结算    9000   50.0     9.0   50.0
 完成购买    4500   50.0     4.5   50.0

总体转化率: 4.50%
最大流失环节: 浏览商品
该环节流失率: 55.0%

若浏览转化率提升至55%，预计订单量: 5500 (+22.2%)`
          }
        ]
      },
      {
        id: 'c7-3',
        title: '留存分析',
        lessons: [
          {
            id: 'l7-3-1',
            title: '用户留存率计算',
            duration: '40分钟',
            content: '计算和分析用户留存率，识别用户粘性。',
            codeExample: `# 模拟用户留存数据
cohorts = pd.DataFrame({
    '注册日期': ['2024-01', '2024-02', '2024-03'],
    '新用户数': [5000, 6000, 5500],
    '第1月留存': [35.0, 38.0, 42.0],
    '第2月留存': [28.0, 31.0, None],
    '第3月留存': [22.0, None, None]
})

print("用户留存率分析(%):")
print(cohorts.to_string(index=False))

# 计算平均留存率
avg_retention = {}
for month in ['第1月留存', '第2月留存', '第3月留存']:
    avg = cohorts[month].mean()
    avg_retention[month] = avg

print("\n平均留存率:")
for month, rate in avg_retention.items():
    if not pd.isna(rate):
        print(f"{month}: {rate:.1f}%")

# 留存衰减分析
print("\n留存衰减分析:")
print(f"第1月到第2月留存下降: {avg_retention['第1月留存'] - avg_retention['第2月留存']:.1f}个百分点")
print(f"第2月到第3月留存下降: {avg_retention['第2月留存'] - avg_retention['第3月留存']:.1f}个百分点")

# 估算LTV
arpu = 150  # 平均每用户收入
avg_lifespan = 6  # 平均生命周期（月）
ltv = arpu * avg_lifespan
print(f"\n估算客户生命周期价值(LTV): ¥{ltv}")`,
            output: `用户留存率分析(%):
注册日期  新用户数  第1月留存  第2月留存  第3月留存
2024-01    5000    35.0    28.0    22.0
2024-02    6000    38.0    31.0     NaN
2024-03    5500    42.0     NaN     NaN

平均留存率:
第1月留存: 38.3%
第2月留存: 29.5%
第3月留存: 22.0%

留存衰减分析:
第1月到第2月留存下降: 8.8个百分点
第2月到第3月留存下降: 7.5个百分点

估算客户生命周期价值(LTV): ¥900`
          }
        ]
      }
    ],
    dataset: {
      name: '网站流量数据集',
      description: '某电商网站2024年Q1的每日流量数据，包含访问量、访客数、转化数等核心指标',
      size: '15 KB',
      format: 'CSV',
      sampleData: `date,visits,visitors,pageviews,bounce_rate,avg_session_duration,conversions
2024-01-01,15000,12000,45000,0.42,145,450
2024-01-02,18200,14500,54600,0.40,152,546
2024-01-03,16500,13200,49500,0.41,148,495`
    },
    caseStudy: {
      title: '某电商网站转化率优化项目',
      problem: '网站流量大但转化率低（仅2.3%），用户在浏览商品环节大量流失，购物车放弃率高达65%。',
      solution: '通过转化漏斗分析定位流失环节，优化商品详情页设计，简化结算流程，实施A/B测试验证效果。',
      results: '总体转化率从2.3%提升至4.5%，购物车放弃率从65%降至45%，月营收增长78%，ROI提升320%。',
      visualization: '转化漏斗优化前后对比：浏览商品转化率从35%提升至52%，结算完成率从48%提升至65%'
    }
  },
  {
    id: '8',
    title: '金融数据分析',
    description: '分析S&P 500股票数据，学习收益率计算、风险评估、技术分析和投资组合优化。',
    level: 'advanced',
    levelLabel: '高级',
    duration: '18 小时',
    students: 567,
    rating: 4.8,
    image: '💰',
    tags: ['股票分析', '风险评估', '投资组合'],
    prerequisites: ['Python基础', '统计学基础', 'Pandas数据处理'],
    objectives: [
      '掌握股票收益率和风险指标计算',
      '学会技术分析指标的应用',
      '理解投资组合理论和优化',
      '能够进行风险价值(VaR)分析'
    ],
    targetAudience: [
      '金融分析师',
      '投资爱好者',
      '量化交易初学者'
    ],
    chapters: [
      {
        id: 'c8-1',
        title: '股票数据获取与处理',
        lessons: [
          {
            id: 'l8-1-1',
            title: '加载股票历史数据',
            duration: '20分钟',
            content: '加载S&P 500股票历史价格数据。',
            codeExample: `import pandas as pd
import numpy as np

# 加载股票数据
stocks = pd.read_csv('sp500_stocks.csv')
stocks['Date'] = pd.to_datetime(stocks['Date'])

print(f"数据时间范围: {stocks['Date'].min()} 至 {stocks['Date'].max()}")
print(f"股票数量: {stocks['Symbol'].nunique()}")
print(f"\n数据列: {list(stocks.columns)}")

# 查看某只股票数据
aapl = stocks[stocks['Symbol'] == 'AAPL']
print(f"\n苹果公司(AAPL)数据样本:")
print(aapl[['Date', 'Open', 'High', 'Low', 'Close', 'Volume']].head())

# 价格统计
print(f"\nAAPL价格统计:")
print(aapl['Close'].describe())`,
            output: `数据时间范围: 2023-01-01 00:00:00 至 2024-03-31 00:00:00
股票数量: 50

数据列: ['Date', 'Symbol', 'Open', 'High', 'Low', 'Close', 'Volume']

苹果公司(AAPL)数据样本:
        Date   Open   High    Low  Close    Volume
0 2023-01-03  130.0  131.0  129.0  130.5  78945600
1 2023-01-04  131.0  133.0  130.5  132.5  65432100
2 2023-01-05  132.0  132.5  130.0  131.0  72345600

AAPL价格统计:
count    321.000000
mean     165.234567
std       23.456789
min      125.000000
25%      148.000000
50%      162.000000
75%      180.000000
max      198.000000`
          }
        ]
      },
      {
        id: 'c8-2',
        title: '收益率与风险分析',
        lessons: [
          {
            id: 'l8-2-1',
            title: '收益率计算',
            duration: '30分钟',
            content: '计算日收益率、累计收益率和年化收益率。',
            codeExample: `# 计算日收益率
aapl['Daily_Return'] = aapl['Close'].pct_change()

# 计算累计收益率
aapl['Cumulative_Return'] = (1 + aapl['Daily_Return']).cumprod() - 1

# 年化收益率
trading_days = 252
annual_return = aapl['Daily_Return'].mean() * trading_days
print(f"AAPL年化收益率: {annual_return:.2%}")

# 年化波动率
annual_volatility = aapl['Daily_Return'].std() * np.sqrt(trading_days)
print(f"AAPL年化波动率: {annual_volatility:.2%}")

# 夏普比率（假设无风险利率5%）
risk_free_rate = 0.05
sharpe_ratio = (annual_return - risk_free_rate) / annual_volatility
print(f"AAPL夏普比率: {sharpe_ratio:.2f}")

print(f"\n收益率统计:")
print(aapl['Daily_Return'].describe())`,
            output: `AAPL年化收益率: 28.45%
AAPL年化波动率: 25.67%
AAPL夏普比率: 0.91

收益率统计:
count    320.000000
mean       0.001234
std        0.016789
min       -0.056789
25%       -0.006789
50%        0.001567
75%        0.009876
max        0.045678`
          },
          {
            id: 'l8-2-2',
            title: '风险价值(VaR)分析',
            duration: '35分钟',
            content: '计算风险价值(VaR)，评估投资组合的下行风险。',
            codeExample: `# 计算VaR（历史模拟法）
confidence_level = 0.95
var_95 = np.percentile(aapl['Daily_Return'].dropna(), (1 - confidence_level) * 100)
print(f"95%置信度日VaR: {var_95:.2%}")

# 条件VaR (CVaR/Expected Shortfall)
cvar_95 = aapl['Daily_Return'][aapl['Daily_Return'] <= var_95].mean()
print(f"95%置信度日CVaR: {cvar_95:.2%}")

# 假设投资10万元
investment = 100000
var_amount = investment * abs(var_95)
cvar_amount = investment * abs(cvar_95)

print(f"\n投资¥{investment:,}的日风险价值:")
print(f"VaR (95%): ¥{var_amount:,.0f}")
print(f"CVaR (95%): ¥{cvar_amount:,.0f}")

# 最大回撤
aapl['Cumulative_Max'] = aapl['Close'].cummax()
aapl['Drawdown'] = (aapl['Close'] - aapl['Cumulative_Max']) / aapl['Cumulative_Max']
max_drawdown = aapl['Drawdown'].min()
print(f"\n最大回撤: {max_drawdown:.2%}")`,
            output: `95%置信度日VaR: -2.89%
95%置信度日CVaR: -4.23%

投资¥100,000的日风险价值:
VaR (95%): ¥2,890
CVaR (95%): ¥4,230

最大回撤: -15.67%`
          }
        ]
      },
      {
        id: 'c8-3',
        title: '投资组合优化',
        lessons: [
          {
            id: 'l8-3-1',
            title: '构建投资组合',
            duration: '45分钟',
            content: '使用马科维茨理论构建最优投资组合。',
            codeExample: `import pandas as pd
import numpy as np

# 选择5只股票构建组合
selected_stocks = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA']
portfolio_data = stocks[stocks['Symbol'].isin(selected_stocks)]

# 构建价格矩阵
price_matrix = portfolio_data.pivot(index='Date', columns='Symbol', values='Close')

# 计算收益率矩阵
returns_matrix = price_matrix.pct_change().dropna()

# 计算年化收益率和协方差矩阵
expected_returns = returns_matrix.mean() * 252
cov_matrix = returns_matrix.cov() * 252

print("预期年化收益率:")
print(expected_returns.apply(lambda x: f"{x:.2%}"))

print("\n年化协方差矩阵:")
print(cov_matrix.round(4))

# 生成随机投资组合
num_portfolios = 10000
results = np.zeros((3, num_portfolios))
weights_record = []

for i in range(num_portfolios):
    weights = np.random.random(len(selected_stocks))
    weights /= np.sum(weights)
    weights_record.append(weights)
    
    portfolio_return = np.sum(expected_returns * weights)
    portfolio_std = np.sqrt(np.dot(weights.T, np.dot(cov_matrix, weights)))
    sharpe = (portfolio_return - 0.05) / portfolio_std
    
    results[0, i] = portfolio_return
    results[1, i] = portfolio_std
    results[2, i] = sharpe

# 最优组合（最大夏普比率）
max_sharpe_idx = np.argmax(results[2])
optimal_weights = weights_record[max_sharpe_idx]

print(f"\n最优投资组合权重:")
for stock, weight in zip(selected_stocks, optimal_weights):
    print(f"{stock}: {weight:.1%}")
print(f"预期年化收益: {results[0, max_sharpe_idx]:.2%}")
print(f"年化波动率: {results[1, max_sharpe_idx]:.2%}")
print(f"夏普比率: {results[2, max_sharpe_idx]:.2f}")`,
            output: `预期年化收益率:
AAPL    28.45%
MSFT    25.30%
GOOGL   22.80%
AMZN    18.50%
TSLA    35.20%

年化协方差矩阵:
       AAPL   MSFT  GOOGL   AMZN   TSLA
AAPL  0.0659 0.0321 0.0289 0.0256 0.0456
MSFT  0.0321 0.0587 0.0312 0.0289 0.0389
GOOGL 0.0289 0.0312 0.0623 0.0356 0.0423
AMZN  0.0256 0.0289 0.0356 0.0789 0.0489
TSLA  0.0456 0.0389 0.0423 0.0489 0.1256

最优投资组合权重:
AAPL: 25.0%
MSFT: 30.0%
GOOGL: 20.0%
AMZN: 15.0%
TSLA: 10.0%
预期年化收益: 24.50%
年化波动率: 18.50%
夏普比率: 1.05`
          }
        ]
      }
    ],
    dataset: {
      name: 'S&P 500股票数据集',
      description: '50只S&P 500成分股2023-2024年的历史价格数据，包含开盘价、最高价、最低价、收盘价、成交量',
      size: '8.5 MB',
      format: 'CSV',
      sampleData: `Date,Symbol,Open,High,Low,Close,Volume
2023-01-03,AAPL,130.0,131.0,129.0,130.5,78945600
2023-01-03,MSFT,245.0,248.0,243.0,246.5,45678900
2023-01-04,AAPL,131.0,133.0,130.5,132.5,65432100`
    },
    caseStudy: {
      title: '某基金公司投资组合优化项目',
      problem: '投资组合收益波动大，风险调整后收益不理想，缺乏科学的资产配置方法。',
      solution: '基于马科维茨现代投资组合理论，使用历史数据优化资产配置，构建有效前沿。',
      results: '在相同收益目标下，组合波动率降低23%，夏普比率从0.72提升至1.05，最大回撤控制在15%以内。',
      visualization: '有效前沿曲线显示：最优组合预期年化收益24.5%，波动率18.5%，夏普比率1.05'
    }
  },
  {
    id: '9',
    title: '健康数据分析',
    description: '分析CDC健康指标数据，学习健康趋势分析、相关性分析和公共卫生数据可视化。',
    level: 'intermediate',
    levelLabel: '中级',
    duration: '15 小时',
    students: 445,
    rating: 4.5,
    image: '🏥',
    tags: ['健康数据', '趋势分析', '相关性分析'],
    prerequisites: ['Python基础', 'Pandas数据处理', '基础统计学'],
    objectives: [
      '掌握健康数据的特点和处理方法',
      '学会健康趋势的时间序列分析',
      '理解健康指标间的相关性',
      '能够制作公共卫生数据可视化'
    ],
    targetAudience: [
      '公共卫生专业学生',
      '健康数据分析从业者',
      '医疗行业研究人员'
    ],
    chapters: [
      {
        id: 'c9-1',
        title: '健康数据探索',
        lessons: [
          {
            id: 'l9-1-1',
            title: 'CDC健康指标数据加载',
            duration: '20分钟',
            content: '加载美国CDC健康指标数据，了解数据结构。',
            codeExample: `import pandas as pd
import numpy as np

# 加载健康数据
health = pd.read_csv('cdc_health_indicators.csv')

print(f"数据记录数: {len(health)}")
print(f"指标数量: {health['Indicator'].nunique()}")
print(f"地区数量: {health['State'].nunique()}")
print(f"时间跨度: {health['Year'].min()}-{health['Year'].max()}")

print("\n健康指标列表:")
print(health['Indicator'].unique())

# 查看数据样本
print("\n数据样本:")
print(health[['Year', 'State', 'Indicator', 'Value']].head(10))`,
            output: `数据记录数: 12500
指标数量: 10
地区数量: 50
时间跨度: 2015-2023

健康指标列表:
['心脏病死亡率' '肥胖率' '糖尿病患病率' '吸烟率' '预期寿命'
 '婴儿死亡率' '医疗保险覆盖率' '体育活动不足率' '高血压患病率' '高胆固醇率']

数据样本:
   Year State  Indicator  Value
0  2015    AL     肥胖率   35.6
1  2015    AK     肥胖率   29.8
2  2015    AZ     肥胖率   28.4
3  2015    AR     肥胖率   35.9
4  2015    CA     肥胖率   24.2`
          }
        ]
      },
      {
        id: 'c9-2',
        title: '健康趋势分析',
        lessons: [
          {
            id: 'l9-2-1',
            title: '全国健康趋势',
            duration: '30分钟',
            content: '分析全国健康指标的时间趋势。',
            codeExample: `# 计算全国平均值
national_trends = health.groupby(['Year', 'Indicator'])['Value'].mean().reset_index()

# 查看肥胖率趋势
obesity_trend = national_trends[national_trends['Indicator'] == '肥胖率']
print("全国肥胖率趋势:")
print(obesity_trend[['Year', 'Value']].to_string(index=False))

# 计算增长率
start_value = obesity_trend['Value'].iloc[0]
end_value = obesity_trend['Value'].iloc[-1]
growth_rate = (end_value - start_value) / start_value * 100
print(f"\n肥胖率变化: {start_value:.1f}% → {end_value:.1f}% (增长{growth_rate:.1f}%)")

# 各指标最新年份数据
latest_year = health['Year'].max()
latest_data = health[health['Year'] == latest_year].groupby('Indicator')['Value'].mean()
print(f"\n{latest_year}年全国健康指标平均值:")
for indicator, value in latest_data.items():
    print(f"{indicator}: {value:.1f}%")`,
            output: `全国肥胖率趋势:
Year  Value
2015   29.5
2016   30.1
2017   30.5
2018   31.0
2019   31.4
2020   31.9
2021   32.3
2022   32.8
2023   33.2

肥胖率变化: 29.5% → 33.2% (增长12.5%)

2023年全国健康指标平均值:
肥胖率: 33.2%
糖尿病患病率: 11.3%
吸烟率: 13.5%
预期寿命: 78.9
医疗保险覆盖率: 91.2%`
          }
        ]
      },
      {
        id: 'c9-3',
        title: '健康指标相关性',
        lessons: [
          {
            id: 'l9-3-1',
            title: '相关性分析',
            duration: '35分钟',
            content: '分析不同健康指标之间的相关性。',
            codeExample: `# 创建指标矩阵
pivot_data = health.pivot_table(
    index=['State', 'Year'], 
    columns='Indicator', 
    values='Value'
).reset_index()

# 计算相关性矩阵
correlation_matrix = pivot_data.select_dtypes(include=[np.number]).corr()

# 显示与肥胖率的相关性
obesity_corr = correlation_matrix['肥胖率'].sort_values(ascending=False)
print("与肥胖率的相关性:")
for indicator, corr in obesity_corr.items():
    if indicator != '肥胖率':
        print(f"{indicator}: {corr:.3f}")

# 强相关指标
strong_positive = obesity_corr[obesity_corr > 0.5].index.tolist()
strong_positive.remove('肥胖率')
strong_negative = obesity_corr[obesity_corr < -0.3].index.tolist()

print(f"\n与肥胖率强正相关(>0.5): {', '.join(strong_positive)}")
print(f"与肥胖率负相关(<-0.3): {', '.join(strong_negative)}")

# 糖尿病与肥胖的关系
diabetes_obesity = pivot_data[['肥胖率', '糖尿病患病率']].dropna()
correlation = diabetes_obesity.corr().iloc[0, 1]
print(f"\n肥胖率与糖尿病患病率相关系数: {correlation:.3f}")`,
            output: `与肥胖率的相关性:
肥胖率: 1.000
糖尿病患病率: 0.782
高血压患病率: 0.698
高胆固醇率: 0.654
心脏病死亡率: 0.567
体育活动不足率: 0.523
吸烟率: 0.345
预期寿命: -0.456
医疗保险覆盖率: -0.234

与肥胖率强正相关(>0.5): 糖尿病患病率, 高血压患病率, 高胆固醇率, 心脏病死亡率, 体育活动不足率
与肥胖率负相关(<-0.3): 预期寿命

肥胖率与糖尿病患病率相关系数: 0.782`
          }
        ]
      }
    ],
    dataset: {
      name: 'CDC健康指标数据集',
      description: '美国各州2015-2023年主要健康指标数据，包含10个核心健康指标',
      size: '1.2 MB',
      format: 'CSV',
      sampleData: `Year,State,Indicator,Value
2015,AL,肥胖率,35.6
2015,AK,肥胖率,29.8
2015,AZ,肥胖率,28.4
2015,AR,肥胖率,35.9
2015,CA,肥胖率,24.2`
    },
    caseStudy: {
      title: '某地区慢性病防控数据分析项目',
      problem: '慢性病发病率持续上升，缺乏对风险因素的系统分析，防控措施针对性不强。',
      solution: '整合多源健康数据，分析肥胖、糖尿病、高血压等指标的关联性和趋势，识别高风险人群。',
      results: '发现肥胖与糖尿病强相关(r=0.78)，针对性开展减重干预后，目标人群糖尿病发病率下降15%。',
      visualization: '健康指标相关性热力图显示：肥胖-糖尿病-高血压形成强相关链条，相关系数均>0.65'
    }
  },
  {
    id: '10',
    title: '市场调研数据分析',
    description: '分析消费者行为数据，掌握市场趋势分析、统计分析、假设检验和可视化报告制作。',
    level: 'beginner',
    levelLabel: '初级',
    duration: '10 小时',
    students: 1123,
    rating: 4.6,
    image: '📋',
    tags: ['市场调研', '统计分析', '假设检验'],
    prerequisites: ['Python基础'],
    objectives: [
      '掌握市场调研数据的处理方法',
      '学会描述性统计分析',
      '理解假设检验的基本原理',
      '能够制作数据可视化报告'
    ],
    targetAudience: [
      '市场营销专业学生',
      '市场调研分析师',
      '商业分析初学者'
    ],
    chapters: [
      {
        id: 'c10-1',
        title: '调研数据加载与清洗',
        lessons: [
          {
            id: 'l10-1-1',
            title: '消费者调研数据加载',
            duration: '20分钟',
            content: '加载消费者行为调研数据，进行初步探索。',
            codeExample: `import pandas as pd
import numpy as np

# 加载调研数据
survey = pd.read_csv('consumer_survey.csv')

print(f"样本量: {len(survey)}")
print(f"变量数: {len(survey.columns)}")
print(f"\n数据列: {list(survey.columns)}")

# 查看数据类型
print("\n数据类型:")
print(survey.dtypes)

# 基本统计
print("\n数值变量统计:")
print(survey[['年龄', '收入', '满意度评分', '购买频次']].describe())`,
            output: `样本量: 2500
变量数: 12

数据列: ['受访者ID', '性别', '年龄', '收入', '教育程度', '城市', '品牌认知', '购买意愿', '满意度评分', '购买频次', '推荐意愿', '价格敏感度']

数据类型:
受访者ID        int64
性别           object
年龄            int64
收入            int64
教育程度         object

数值变量统计:
             年龄         收入    满意度评分    购买频次
count  2500.000000  2500.000000  2500.000000  2500.000000
mean     35.600000  85000.000000     7.200000     4.500000
std      10.200000  35000.000000     1.800000     2.300000
min      18.000000  20000.000000     1.000000     0.000000
25%      28.000000  60000.000000     6.000000     3.000000
50%      35.000000  82000.000000     7.000000     4.000000
75%      42.000000  105000.000000     8.000000     6.000000
max      65.000000  200000.000000    10.000000    12.000000`
          }
        ]
      },
      {
        id: 'c10-2',
        title: '描述性统计分析',
        lessons: [
          {
            id: 'l10-2-1',
            title: '消费者画像分析',
            duration: '30分钟',
            content: '分析消费者的人口统计特征和行为特征。',
            codeExample: `# 性别分布
gender_dist = survey['性别'].value_counts(normalize=True) * 100
print("性别分布:")
print(gender_dist.apply(lambda x: f"{x:.1f}%"))

# 教育程度分布
education_dist = survey['教育程度'].value_counts()
print("\n教育程度分布:")
print(education_dist)

# 品牌认知度
brand_awareness = survey['品牌认知'].value_counts(normalize=True) * 100
print("\n品牌认知度:")
print(brand_awareness.apply(lambda x: f"{x:.1f}%"))

# 购买意愿与满意度的关系
purchase_by_satisfaction = survey.groupby('满意度评分')['购买意愿'].apply(
    lambda x: (x == '是').mean() * 100
)
print("\n不同满意度下的购买意愿:")
for score, rate in purchase_by_satisfaction.items():
    print(f"满意度{score}分: {rate:.1f}%")

# 收入与购买频次的相关性
correlation = survey['收入'].corr(survey['购买频次'])
print(f"\n收入与购买频次相关系数: {correlation:.3f}")`,
            output: `性别分布:
女    52.3%
男    47.7%

教育程度分布:
本科    1250
硕士     750
大专     350
博士     100
高中      50

品牌认知度:
非常了解    25.0%
比较了解    35.0%
一般      25.0%
不太了解    12.0%
完全不了解    3.0%

不同满意度下的购买意愿:
满意度1分: 5.0%
满意度5分: 25.0%
满意度7分: 65.0%
满意度10分: 95.0%

收入与购买频次相关系数: 0.456`
          }
        ]
      },
      {
        id: 'c10-3',
        title: '假设检验',
        lessons: [
          {
            id: 'l10-3-1',
            title: 'T检验应用',
            duration: '35分钟',
            content: '使用T检验比较不同群体的满意度差异。',
            codeExample: `from scipy import stats

# 比较男女满意度差异
male_satisfaction = survey[survey['性别'] == '男']['满意度评分']
female_satisfaction = survey[survey['性别'] == '女']['满意度评分']

# 独立样本T检验
t_stat, p_value = stats.ttest_ind(male_satisfaction, female_satisfaction)

print("男女满意度T检验结果:")
print(f"男性平均满意度: {male_satisfaction.mean():.2f} ± {male_satisfaction.std():.2f}")
print(f"女性平均满意度: {female_satisfaction.mean():.2f} ± {female_satisfaction.std():.2f}")
print(f"T统计量: {t_stat:.3f}")
print(f"P值: {p_value:.3f}")

if p_value < 0.05:
    print("结论: 男女满意度存在显著差异(p<0.05)")
else:
    print("结论: 男女满意度无显著差异(p>=0.05)")

# 不同教育程度的方差分析
education_groups = [
    survey[survey['教育程度'] == edu]['满意度评分'].values
    for edu in survey['教育程度'].unique()
]
f_stat, p_value_anova = stats.f_oneway(*education_groups)

print(f"\n不同教育程度满意度方差分析:")
print(f"F统计量: {f_stat:.3f}")
print(f"P值: {p_value_anova:.3f}")

if p_value_anova < 0.05:
    print("结论: 不同教育程度的满意度存在显著差异")
else:
    print("结论: 不同教育程度的满意度无显著差异")`,
            output: `男女满意度T检验结果:
男性平均满意度: 7.15 ± 1.82
女性平均满意度: 7.25 ± 1.78
T统计量: -1.234
P值: 0.217

结论: 男女满意度无显著差异(p>=0.05)

不同教育程度满意度方差分析:
F统计量: 3.456
P值: 0.008

结论: 不同教育程度的满意度存在显著差异`
          }
        ]
      }
    ],
    dataset: {
      name: '消费者调研数据集',
      description: '2500名消费者的调研数据，包含人口统计信息、品牌认知、购买行为等12个变量',
      size: '850 KB',
      format: 'CSV',
      sampleData: `受访者ID,性别,年龄,收入,教育程度,城市,品牌认知,购买意愿,满意度评分,购买频次,推荐意愿,价格敏感度
1,女,28,65000,本科,北京,比较了解,是,8,5,是,中等
2,男,35,82000,硕士,上海,非常了解,是,9,6,是,低
3,女,42,95000,本科,广州,一般,否,6,3,否,高`
    },
    caseStudy: {
      title: '某品牌消费者满意度调研分析',
      problem: '品牌满意度下降原因不明，缺乏系统的消费者洞察，营销策略缺乏数据支撑。',
      solution: '开展大规模消费者调研，运用统计分析方法识别满意度驱动因素和不同细分群体特征。',
      results: '识别出高价值客户群体（占20%贡献45%收入），针对性优化产品后整体满意度提升1.2分，复购率提升18%。',
      visualization: '满意度驱动因素分析：产品质量(权重0.32)、价格合理性(权重0.28)、服务体验(权重0.23)是三大核心因素'
    }
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};

export const getCoursesByLevel = (level: string): Course[] => {
  return courses.filter(course => course.level === level);
};

export const getAllTags = (): string[] => {
  const tagsSet = new Set<string>();
  courses.forEach(course => {
    course.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet);
};