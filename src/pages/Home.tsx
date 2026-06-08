import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Trophy, Users, Star } from 'lucide-react'
import { courses } from '../data/courses'
import { achievements } from '../data/achievements'

export default function Home() {
  const featuredCourses = courses.slice(0, 3)
  const featuredAchievements = achievements.slice(0, 3)

  const stats = [
    { label: '课程数量', value: courses.length, icon: BookOpen },
    { label: '学习人数', value: '8,500+', icon: Users },
    { label: '平均评分', value: '4.7', icon: Star },
    { label: '成就徽章', value: achievements.length, icon: Trophy },
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          商务数据分析与应用
          <span className="block text-primary-600 mt-2">Python学习平台</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          系统化学习数据分析技能，从基础到进阶，助你成为数据驱动的商务决策专家
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/courses" className="btn-primary inline-flex items-center justify-center space-x-2">
            <span>浏览课程</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/practice" className="btn-secondary inline-flex items-center justify-center space-x-2">
            <span>开始练习</span>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="card text-center">
              <Icon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-500">{stat.label}</div>
            </div>
          )
        })}
      </section>

      {/* Featured Courses Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title mb-0">推荐课程</h2>
          <Link to="/courses" className="text-primary-600 hover:text-primary-700 flex items-center space-x-1">
            <span>查看全部</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="card hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{course.image}</span>
                <span className={`badge-${course.level}`}>{course.levelLabel}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="flex items-center space-x-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.duration}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students}人学习</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{course.rating}</span>
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {course.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Achievement System Section */}
      <section>
        <h2 className="section-title">成就系统</h2>
        <p className="text-gray-600 mb-8">完成学习任务，解锁成就徽章，展示你的学习成果</p>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`card border-2 rarity-${achievement.rarity}`}
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{achievement.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
              <span className={`inline-block text-xs px-2 py-1 rounded-full rarity-${achievement.rarity}`}>
                {achievement.rarityLabel}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="card bg-primary-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">开始你的数据分析学习之旅</h2>
        <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
          加入我们的学习社区，与其他商务数据分析与应用专业的学生一起成长
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
        >
          <span>立即开始学习</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  )
}