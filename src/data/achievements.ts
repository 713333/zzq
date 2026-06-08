import type { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'ach1',
    title: '初次尝试',
    description: '完成第一个Python练习',
    icon: '🎯',
    rarity: 'common',
    rarityLabel: '普通',
    condition: '完成1个练习'
  },
  {
    id: 'ach2',
    title: '学习达人',
    description: '完成10个课时的学习',
    icon: '📚',
    rarity: 'rare',
    rarityLabel: '稀有',
    condition: '完成10个课时'
  },
  {
    id: 'ach3',
    title: '数据分析大师',
    description: '完成数据分析课程',
    icon: '🏆',
    rarity: 'legendary',
    rarityLabel: '传说',
    condition: '完成任意一个完整课程'
  },
  {
    id: 'ach4',
    title: '代码新手',
    description: '完成5个初级练习',
    icon: '👶',
    rarity: 'common',
    rarityLabel: '普通',
    condition: '完成5个初级练习'
  },
  {
    id: 'ach5',
    title: '进阶程序员',
    description: '完成5个中级练习',
    icon: '💪',
    rarity: 'rare',
    rarityLabel: '稀有',
    condition: '完成5个中级练习'
  },
  {
    id: 'ach6',
    title: '算法专家',
    description: '完成3个高级练习',
    icon: '🧠',
    rarity: 'epic',
    rarityLabel: '史诗',
    condition: '完成3个高级练习'
  },
  {
    id: 'ach7',
    title: 'Pandas达人',
    description: '完成所有与Pandas相关的练习',
    icon: '🐼',
    rarity: 'rare',
    rarityLabel: '稀有',
    condition: '完成所有Pandas练习'
  },
  {
    id: 'ach8',
    title: '数据清洗专家',
    description: '完成数据清洗课程的所有课时',
    icon: '🧹',
    rarity: 'epic',
    rarityLabel: '史诗',
    condition: '完成课程1的所有课时'
  },
  {
    id: 'ach9',
    title: '客户分析专家',
    description: '完成客户行为分析课程',
    icon: '👥',
    rarity: 'epic',
    rarityLabel: '史诗',
    condition: '完成课程2'
  },
  {
    id: 'ach10',
    title: '机器学习入门',
    description: '完成第一个机器学习项目',
    icon: '🤖',
    rarity: 'legendary',
    rarityLabel: '传说',
    condition: '完成课程4或课程5'
  },
  {
    id: 'ach11',
    title: '连续学习',
    description: '连续7天每天完成至少1个练习',
    icon: '🔥',
    rarity: 'rare',
    rarityLabel: '稀有',
    condition: '连续7天学习'
  },
  {
    id: 'ach12',
    title: '完美解答',
    description: '第一次尝试就正确完成练习',
    icon: '✨',
    rarity: 'common',
    rarityLabel: '普通',
    condition: '首次尝试成功'
  }
];

export const getAchievementsByRarity = (rarity: string): Achievement[] => {
  return achievements.filter(ach => ach.rarity === rarity);
};