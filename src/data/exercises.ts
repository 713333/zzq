import type { Exercise } from '../types';

export const exercises: Exercise[] = [
  // 初级练习
  {
    id: 'ex1',
    title: 'Hello World',
    difficulty: 'beginner',
    difficultyLabel: '初级',
    description: '编写一个Python程序，输出"Hello, World!"，这是每个程序员的第一步。',
    starterCode: `# 请在这里编写你的代码
`,
    expectedOutput: 'Hello, World!',
    hints: [
      '使用print()函数可以输出文本',
      '文本需要用引号包裹起来',
      '例如: print("你好")'
    ],
    solution: `print("Hello, World!")`,
    relatedCourseId: '1'
  },
  {
    id: 'ex2',
    title: '变量与数据类型',
    difficulty: 'beginner',
    difficultyLabel: '初级',
    description: '创建一个变量存储你的名字，然后输出"你好，[名字]！"。',
    starterCode: `# 创建一个变量存储你的名字
# 然后使用print输出问候语

`,
    expectedOutput: '你好，小明！',
    hints: [
      '使用等号=给变量赋值',
      '变量名可以自定义，如name',
      '使用f-string可以方便地组合文本和变量: f"你好，{name}！"'
    ],
    solution: `name = "小明"
print(f"你好，{name}！")`,
    relatedCourseId: '1'
  },
  {
    id: 'ex3',
    title: '计算平方',
    difficulty: 'beginner',
    difficultyLabel: '初级',
    description: '编写一个函数，接收一个数字作为参数，返回该数字的平方。',
    starterCode: `def square(number):
    # 在这里编写代码
    pass

# 测试
result = square(5)
print(result)`,
    expectedOutput: '25',
    hints: [
      '使用return语句返回结果',
      '平方可以用number ** 2或number * number',
      '函数定义使用def关键字'
    ],
    solution: `def square(number):
    return number ** 2

result = square(5)
print(result)`,
    relatedCourseId: '1'
  },
  {
    id: 'ex4',
    title: '列表求和',
    difficulty: 'beginner',
    difficultyLabel: '初级',
    description: '给定一个数字列表，计算并输出列表中所有数字的和。',
    starterCode: `numbers = [10, 20, 30, 40, 50]

# 计算列表的和
`,
    expectedOutput: '150',
    hints: [
      '使用sum()函数可以直接计算列表的和',
      '也可以使用循环遍历列表累加',
      '初始化一个变量total = 0，然后累加每个元素'
    ],
    solution: `numbers = [10, 20, 30, 40, 50]
total = sum(numbers)
print(total)`,
    relatedCourseId: '1'
  },
  {
    id: 'ex5',
    title: '判断奇偶数',
    difficulty: 'beginner',
    difficultyLabel: '初级',
    description: '编写程序判断一个数字是奇数还是偶数，并输出结果。',
    starterCode: `number = 17

# 判断奇偶数
`,
    expectedOutput: '17是奇数',
    hints: [
      '使用%运算符取余数',
      '如果number % 2 == 0，则是偶数',
      '使用if-else语句进行条件判断'
    ],
    solution: `number = 17

if number % 2 == 0:
    print(f"{number}是偶数")
else:
    print(f"{number}是奇数")`,
    relatedCourseId: '1'
  },
  {
    id: 'ex6',
    title: '字符串反转',
    difficulty: 'beginner',
    difficultyLabel: '初级',
    description: '编写程序将输入的字符串反转并输出。',
    starterCode: `text = "Python"

# 反转字符串
`,
    expectedOutput: 'nohtyP',
    hints: [
      '字符串可以使用切片操作[::-1]来反转',
      '也可以使用循环从后向前遍历',
      '字符串是不可变的，需要创建新的字符串'
    ],
    solution: `text = "Python"
reversed_text = text[::-1]
print(reversed_text)`,
    relatedCourseId: '1'
  },
  {
    id: 'ex7',
    title: '计算平均值',
    difficulty: 'beginner',
    difficultyLabel: '初级',
    description: '给定一个数字列表，计算并输出平均值。',
    starterCode: `scores = [85, 90, 78, 92, 88]

# 计算平均值
`,
    expectedOutput: '86.6',
    hints: [
      '平均值 = 总和 / 数量',
      '使用sum()求和，len()求数量',
      '注意结果是浮点数'
    ],
    solution: `scores = [85, 90, 78, 92, 88]
average = sum(scores) / len(scores)
print(average)`,
    relatedCourseId: '1'
  },
  {
    id: 'ex8',
    title: '查找最大值',
    difficulty: 'beginner',
    difficultyLabel: '初级',
    description: '在不使用max()函数的情况下，找出列表中的最大值。',
    starterCode: `numbers = [45, 12, 78, 23, 67, 89, 34]

# 找出最大值
`,
    expectedOutput: '89',
    hints: [
      '假设第一个元素是最大值',
      '遍历列表，遇到更大的值就更新最大值',
      '使用循环结构'
    ],
    solution: `numbers = [45, 12, 78, 23, 67, 89, 34]

max_value = numbers[0]
for num in numbers:
    if num > max_value:
        max_value = num

print(max_value)`,
    relatedCourseId: '1'
  },
  // 中级练习
  {
    id: 'ex9',
    title: '列表排序',
    difficulty: 'intermediate',
    difficultyLabel: '中级',
    description: '在不使用sort()或sorted()函数的情况下，对列表进行升序排序（使用冒泡排序算法）。',
    starterCode: `numbers = [64, 34, 25, 12, 22, 11, 90]

# 实现冒泡排序
`,
    expectedOutput: '[11, 12, 22, 25, 34, 64, 90]',
    hints: [
      '冒泡排序需要两层循环',
      '外层控制遍历次数，内层进行相邻元素比较',
      '如果前一个元素大于后一个，交换它们的位置'
    ],
    solution: `numbers = [64, 34, 25, 12, 22, 11, 90]

n = len(numbers)
for i in range(n):
    for j in range(0, n - i - 1):
        if numbers[j] > numbers[j + 1]:
            numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]

print(numbers)`,
    relatedCourseId: '2'
  },
  {
    id: 'ex10',
    title: '使用Pandas读取CSV',
    difficulty: 'intermediate',
    difficultyLabel: '中级',
    description: '使用Pandas读取CSV文件，并输出数据的前5行和基本统计信息。',
    starterCode: `import pandas as pd

# 读取CSV文件
df = pd.read_csv('data.csv')

# 输出前5行
print("前5行数据:")

# 输出基本统计信息
print("\n基本统计信息:")
`,
    expectedOutput: '前5行数据:\n   A  B  C\n0  1  4  7\n1  2  5  8\n2  3  6  9\n\n基本统计信息:\n       A  B  C\ncount  3  3  3\nmean   2  5  8',
    hints: [
      '使用df.head()输出前5行',
      '使用df.describe()输出统计信息',
      '确保CSV文件路径正确'
    ],
    solution: `import pandas as pd

df = pd.read_csv('data.csv')

print("前5行数据:")
print(df.head())

print("\n基本统计信息:")
print(df.describe())`,
    relatedCourseId: '1'
  },
  {
    id: 'ex11',
    title: '数据筛选',
    difficulty: 'intermediate',
    difficultyLabel: '中级',
    description: '使用Pandas筛选出年龄大于25岁且收入大于50000的记录。',
    starterCode: `import pandas as pd

data = {
    '姓名': ['张三', '李四', '王五', '赵六'],
    '年龄': [23, 30, 35, 28],
    '收入': [45000, 60000, 75000, 55000]
}
df = pd.DataFrame(data)

# 筛选数据
`,
    expectedOutput: '   姓名  年龄   收入\n1  李四  30  60000\n2  王五  35  75000\n3  赵六  28  55000',
    hints: [
      '使用布尔索引进行筛选',
      '多个条件使用&连接，每个条件用括号包裹',
      '例如: df[(条件1) & (条件2)]'
    ],
    solution: `import pandas as pd

data = {
    '姓名': ['张三', '李四', '王五', '赵六'],
    '年龄': [23, 30, 35, 28],
    '收入': [45000, 60000, 75000, 55000]
}
df = pd.DataFrame(data)

filtered = df[(df['年龄'] > 25) & (df['收入'] > 50000)]
print(filtered)`,
    relatedCourseId: '1'
  },
  {
    id: 'ex12',
    title: '分组统计',
    difficulty: 'intermediate',
    difficultyLabel: '中级',
    description: '按类别分组，计算每组的平均价格和总销量。',
    starterCode: `import pandas as pd

data = {
    '产品': ['A', 'B', 'A', 'B', 'C', 'C'],
    '类别': ['电子', '电子', '服装', '服装', '食品', '食品'],
    '价格': [1000, 2000, 300, 500, 50, 80],
    '销量': [50, 30, 100, 80, 200, 150]
}
df = pd.DataFrame(data)

# 按类别分组统计
`,
    expectedOutput: '     平均价格  总销量\n类别              \n电子    1500   80\n服装     400  180\n食品      65  350',
    hints: [
      '使用groupby()进行分组',
      '使用agg()进行多列聚合',
      '例如: df.groupby("列").agg({"列1": "mean", "列2": "sum"})'
    ],
    solution: `import pandas as pd

data = {
    '产品': ['A', 'B', 'A', 'B', 'C', 'C'],
    '类别': ['电子', '电子', '服装', '服装', '食品', '食品'],
    '价格': [1000, 2000, 300, 500, 50, 80],
    '销量': [50, 30, 100, 80, 200, 150]
}
df = pd.DataFrame(data)

result = df.groupby('类别').agg({
    '价格': 'mean',
    '销量': 'sum'
})
result.columns = ['平均价格', '总销量']
print(result)`,
    relatedCourseId: '2'
  },
  {
    id: 'ex13',
    title: '计算相关系数',
    difficulty: 'intermediate',
    difficultyLabel: '中级',
    description: '计算两个变量之间的皮尔逊相关系数。',
    starterCode: `import pandas as pd

data = {
    '学习时间': [2, 3, 4, 5, 6, 7, 8],
    '考试成绩': [65, 70, 75, 80, 85, 90, 95]
}
df = pd.DataFrame(data)

# 计算相关系数
`,
    expectedOutput: '1.0',
    hints: [
      '使用corr()方法计算相关系数',
      '选择两列进行计算',
      '相关系数范围是-1到1'
    ],
    solution: `import pandas as pd

data = {
    '学习时间': [2, 3, 4, 5, 6, 7, 8],
    '考试成绩': [65, 70, 75, 80, 85, 90, 95]
}
df = pd.DataFrame(data)

correlation = df['学习时间'].corr(df['考试成绩'])
print(correlation)`,
    relatedCourseId: '3'
  },
  {
    id: 'ex14',
    title: '缺失值处理',
    difficulty: 'intermediate',
    difficultyLabel: '中级',
    description: '检测数据中的缺失值，并用平均值填充数值列的缺失值。',
    starterCode: `import pandas as pd
import numpy as np

data = {
    'A': [1, 2, np.nan, 4, 5],
    'B': [10, np.nan, 30, 40, 50],
    'C': ['x', 'y', 'z', np.nan, 'w']
}
df = pd.DataFrame(data)

# 检测缺失值
print("缺失值统计:")

# 用平均值填充数值列
`,
    expectedOutput: '缺失值统计:\nA    1\nB    1\nC    1\ndtype: int64\n\n填充后的数据:\n     A     B    C\n0  1.0  10.0    x\n1  2.0  32.5    y\n2  3.0  30.0    z\n3  4.0  40.0  NaN\n4  5.0  50.0    w',
    hints: [
      '使用isnull().sum()统计缺失值',
      '使用fillna()填充缺失值',
      '只对数值列计算平均值'
    ],
    solution: `import pandas as pd
import numpy as np

data = {
    'A': [1, 2, np.nan, 4, 5],
    'B': [10, np.nan, 30, 40, 50],
    'C': ['x', 'y', 'z', np.nan, 'w']
}
df = pd.DataFrame(data)

print("缺失值统计:")
print(df.isnull().sum())

# 用平均值填充数值列
for col in df.select_dtypes(include=[np.number]).columns:
    df[col].fillna(df[col].mean(), inplace=True)

print("\n填充后的数据:")
print(df)`,
    relatedCourseId: '1'
  },
  {
    id: 'ex15',
    title: 'RFM评分计算',
    difficulty: 'intermediate',
    difficultyLabel: '中级',
    description: '根据客户的最近购买天数、购买频次和消费金额计算RFM评分。',
    starterCode: `import pandas as pd

data = {
    '客户ID': ['C001', 'C002', 'C003', 'C004', 'C005'],
    '最近购买天数': [10, 5, 30, 60, 15],
    '购买频次': [5, 8, 2, 1, 4],
    '消费金额': [5000, 8000, 2000, 1000, 4000]
}
df = pd.DataFrame(data)

# 计算RFM评分（使用分位数1-5分）
`,
    expectedOutput: '  客户ID  R评分  F评分  M评分  RFM总分\n0   C001     4     4     4      12\n1   C002     5     5     5      15\n2   C003     2     2     2       6\n3   C004     1     1     1       3\n4   C005     3     3     3       9',
    hints: [
      '使用pd.qcut()进行分位数分组',
      'R评分：最近购买天数越短分数越高',
      'F和M评分：数值越大分数越高'
    ],
    solution: `import pandas as pd

data = {
    '客户ID': ['C001', 'C002', 'C003', 'C004', 'C005'],
    '最近购买天数': [10, 5, 30, 60, 15],
    '购买频次': [5, 8, 2, 1, 4],
    '消费金额': [5000, 8000, 2000, 1000, 4000]
}
df = pd.DataFrame(data)

# R评分：最近购买天数越短越好，所以标签倒序
df['R评分'] = pd.qcut(df['最近购买天数'], 5, labels=[5,4,3,2,1]).astype(int)
# F评分
df['F评分'] = pd.qcut(df['购买频次'].rank(method='first'), 5, labels=[1,2,3,4,5]).astype(int)
# M评分
df['M评分'] = pd.qcut(df['消费金额'], 5, labels=[1,2,3,4,5]).astype(int)
# RFM总分
df['RFM总分'] = df['R评分'] + df['F评分'] + df['M评分']

print(df[['客户ID', 'R评分', 'F评分', 'M评分', 'RFM总分']])`,
    relatedCourseId: '2'
  },
  {
    id: 'ex16',
    title: '数据透视表',
    difficulty: 'intermediate',
    difficultyLabel: '中级',
    description: '创建一个数据透视表，显示不同地区和月份的销售总额。',
    starterCode: `import pandas as pd

data = {
    '日期': ['2024-01', '2024-01', '2024-02', '2024-02', '2024-03', '2024-03'],
    '地区': ['华东', '华北', '华东', '华北', '华东', '华北'],
    '销售额': [100000, 80000, 120000, 90000, 110000, 85000]
}
df = pd.DataFrame(data)

# 创建数据透视表
`,
    expectedOutput: '月份    2024-01  2024-02  2024-03\n地区                             \n华北      80000    90000    85000\n华东     100000   120000   110000',
    hints: [
      '使用pivot_table()创建透视表',
      'index参数设置行索引',
      'columns参数设置列',
      'values和aggfunc设置值和聚合方式'
    ],
    solution: `import pandas as pd

data = {
    '日期': ['2024-01', '2024-01', '2024-02', '2024-02', '2024-03', '2024-03'],
    '地区': ['华东', '华北', '华东', '华北', '华东', '华北'],
    '销售额': [100000, 80000, 120000, 90000, 110000, 85000]
}
df = pd.DataFrame(data)

pivot = df.pivot_table(
    index='地区',
    columns='日期',
    values='销售额',
    aggfunc='sum'
)
print(pivot)`,
    relatedCourseId: '2'
  },
  // 高级练习
  {
    id: 'ex17',
    title: 'K-means聚类',
    difficulty: 'advanced',
    difficultyLabel: '高级',
    description: '使用sklearn对鸢尾花数据进行K-means聚类，并输出每个样本的聚类标签。',
    starterCode: `from sklearn.datasets import load_iris
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 加载数据
iris = load_iris()
X = iris.data

# 数据标准化

# K-means聚类（K=3）

# 输出前10个样本的聚类标签
`,
    expectedOutput: '前10个样本的聚类标签: [1 1 1 1 1 1 1 1 1 1]',
    hints: [
      '使用StandardScaler进行标准化',
      '使用KMeans进行聚类，设置n_clusters=3',
      '使用labels_获取聚类标签'
    ],
    solution: `from sklearn.datasets import load_iris
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

iris = load_iris()
X = iris.data

# 数据标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# K-means聚类
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
kmeans.fit(X_scaled)

# 输出前10个样本的聚类标签
print("前10个样本的聚类标签:", kmeans.labels_[:10])`,
    relatedCourseId: '4'
  },
  {
    id: 'ex18',
    title: '时间序列预测',
    difficulty: 'advanced',
    difficultyLabel: '高级',
    description: '使用简单移动平均法预测下一个月的销售额。',
    starterCode: `import pandas as pd
import numpy as np

# 月度销售额数据
sales = [120, 135, 148, 162, 158, 175, 188, 195, 210, 225, 238, 250]

# 计算3个月移动平均作为预测

# 预测下一个月
`,
    expectedOutput: '历史数据: [120, 135, 148, 162, 158, 175, 188, 195, 210, 225, 238, 250]\n下月预测值: 246.0',
    hints: [
      '移动平均取最近N个值的平均',
      '使用列表切片获取最后3个值',
      '使用sum()/len()或np.mean()计算平均'
    ],
    solution: `import pandas as pd
import numpy as np

sales = [120, 135, 148, 162, 158, 175, 188, 195, 210, 225, 238, 250]

# 使用最近3个月的平均值预测下月
last_3_months = sales[-3:]
next_month_prediction = np.mean(last_3_months)

print(f"历史数据: {sales}")
print(f"下月预测值: {next_month_prediction}")`,
    relatedCourseId: '5'
  },
  {
    id: 'ex19',
    title: '关联规则挖掘',
    difficulty: 'advanced',
    difficultyLabel: '高级',
    description: '计算商品组合的置信度和提升度。',
    starterCode: `# 购物篮数据（1表示购买，0表示未购买）
transactions = [
    {'牛奶': 1, '面包': 1, '黄油': 1, '啤酒': 0},
    {'牛奶': 1, '面包': 1, '黄油': 0, '啤酒': 1},
    {'牛奶': 1, '面包': 0, '黄油': 1, '啤酒': 0},
    {'牛奶': 0, '面包': 1, '黄油': 1, '啤酒': 0},
    {'牛奶': 1, '面包': 1, '黄油': 1, '啤酒': 0}
]

# 计算规则：牛奶 → 面包 的支持度、置信度和提升度
`,
    expectedOutput: '支持度: 0.6\n置信度: 0.75\n提升度: 0.9375',
    hints: [
      '支持度 = 同时购买牛奶和面包的交易数 / 总交易数',
      '置信度 = 同时购买牛奶和面包的交易数 / 购买牛奶的交易数',
      '提升度 = 置信度 / 面包的单独购买率'
    ],
    solution: `# 购物篮数据
transactions = [
    {'牛奶': 1, '面包': 1, '黄油': 1, '啤酒': 0},
    {'牛奶': 1, '面包': 1, '黄油': 0, '啤酒': 1},
    {'牛奶': 1, '面包': 0, '黄油': 1, '啤酒': 0},
    {'牛奶': 0, '面包': 1, '黄油': 1, '啤酒': 0},
    {'牛奶': 1, '面包': 1, '黄油': 1, '啤酒': 0}
]

total = len(transactions)
milk_count = sum(1 for t in transactions if t['牛奶'] == 1)
bread_count = sum(1 for t in transactions if t['面包'] == 1)
both_count = sum(1 for t in transactions if t['牛奶'] == 1 and t['面包'] == 1)

support = both_count / total
confidence = both_count / milk_count
lift = confidence / (bread_count / total)

print(f"支持度: {support}")
print(f"置信度: {confidence}")
print(f"提升度: {lift}")`,
    relatedCourseId: '3'
  },
  {
    id: 'ex20',
    title: '情感分析实现',
    difficulty: 'advanced',
    difficultyLabel: '高级',
    description: '基于关键词匹配实现简单的情感分析功能。',
    starterCode: `def simple_sentiment_analysis(text):
    # 定义正面和负面词库
    positive_words = ['好', '棒', '优秀', '喜欢', '满意', '完美']
    negative_words = ['差', '糟糕', '讨厌', '失望', '坏', '烂']
    
    # 计算正面词和负面词数量
    
    # 返回情感结果
    
# 测试
text1 = "这个产品真的很棒，非常满意！"
text2 = "质量太差了，非常失望"
`,
    expectedOutput: '"这个产品真的很棒，非常满意！" → 正面\n"质量太差了，非常失望" → 负面',
    hints: [
      '使用count()或循环统计关键词出现次数',
      '比较正面词和负面词的数量',
      '根据数量判断情感倾向'
    ],
    solution: `def simple_sentiment_analysis(text):
    positive_words = ['好', '棒', '优秀', '喜欢', '满意', '完美']
    negative_words = ['差', '糟糕', '讨厌', '失望', '坏', '烂']
    
    positive_count = sum(1 for word in positive_words if word in text)
    negative_count = sum(1 for word in negative_words if word in text)
    
    if positive_count > negative_count:
        return "正面"
    elif negative_count > positive_count:
        return "负面"
    else:
        return "中性"

text1 = "这个产品真的很棒，非常满意！"
text2 = "质量太差了，非常失望"

print(f'"{text1}" → {simple_sentiment_analysis(text1)}')
print(f'"{text2}" → {simple_sentiment_analysis(text2)}')`,
    relatedCourseId: '6'
  }
];

export const getExercisesByDifficulty = (difficulty: string): Exercise[] => {
  return exercises.filter(ex => ex.difficulty === difficulty);
};

export const getExerciseById = (id: string): Exercise | undefined => {
  return exercises.find(ex => ex.id === id);
};

export const getExercisesByCourse = (courseId: string): Exercise[] => {
  return exercises.filter(ex => ex.relatedCourseId === courseId);
};