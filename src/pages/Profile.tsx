import { Trophy, BookOpen, Code, Target, Award, Star, Zap, CheckCircle } from 'lucide-react'
import { achievements } from '../data/achievements'
import { courses } from '../data/courses'
import { exercises } from '../data/exercises'

export default function Profile() {
  // 模拟用户数据
  const userStats = {
    name: '学习者',
    level: 5,
    xp: 2450,
    nextLevelXp: 3000,
    completedCourses: 2,
    completedExercises: 15,
    streak: 7,
    joinedDate: '2024-01-15'
  }

  const unlockedAchievements = achievements.slice(0, 5)
  const lockedAchievements = achievements.slice(5)

  const recentCourses = courses.slice(0, 3)
  const completedExercises = exercises.slice(0, 5)

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="card">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-4xl">👤</span>
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{userStats.name}</h1>
            <p className="text-gray-500">加入于 {userStats.joinedDate}</p>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-3">
              <span className="flex items-center gap-1 text-yellow-600">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-medium">Lv.{userStats.level}</span>
              </span>
              <span className="flex items-center gap-1 text-orange-600">
                <Zap className="w-5 h-5" />
                <span className="font-medium">{userStats.streak}天连续学习</span>
              </span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">{userStats.xp}</div>
            <div className="text-sm text-gray-500">总经验值</div>
            <div className="w-32 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full bg-primary-600 rounded-full"
                style={{ width: `${(userStats.xp / userStats.nextLevelXp) * 100}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">
              距离下一级还需 {userStats.nextLevelXp - userStats.xp} XP
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card text-center">
          <BookOpen className="w-8 h-8 text-primary-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{userStats.completedCourses}</div>
          <div className="text-sm text-gray-500">已完成课程</div>
        </div>
        <div className="card text-center">
          <Code className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{userStats.completedExercises}</div>
          <div className="text-sm text-gray-500">已完成练习</div>
        </div>
        <div className="card text-center">
          <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{unlockedAchievements.length}</div>
          <div className="text-sm text-gray-500">获得成就</div>
        </div>
        <div className="card text-center">
          <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{Math.round((userStats.completedExercises / exercises.length) * 100)}%</div>
          <div className="text-sm text-gray-500">学习进度</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Learning Progress */}
          <section className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary-600" />
              学习进度
            </h2>
            <div className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="flex items-center gap-4">
                  <span className="text-2xl">{course.image}</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium text-gray-900">{course.title}</h4>
                      <span className="text-sm text-gray-500">{Math.floor(Math.random() * 100)}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary-600 rounded-full"
                        style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Exercises */}
          <section className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-primary-600" />
              最近完成的练习
            </h2>
            <div className="space-y-3">
              {completedExercises.map((exercise) => (
                <div key={exercise.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-medium text-gray-900">{exercise.title}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    exercise.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                    exercise.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {exercise.difficultyLabel}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Achievements */}
          <section className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary-600" />
              成就徽章
            </h2>
            <div className="space-y-3">
              {unlockedAchievements.map((achievement) => (
                <div 
                  key={achievement.id} 
                  className={`p-3 rounded-lg border-2 rarity-${achievement.rarity} flex items-center gap-3`}
                >
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                    <p className="text-xs text-gray-500">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">待解锁成就 ({lockedAchievements.length})</p>
              <div className="space-y-2">
                {lockedAchievements.slice(0, 3).map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className="p-3 rounded-lg bg-gray-100 opacity-50 flex items-center gap-3"
                  >
                    <span className="text-2xl grayscale">{achievement.icon}</span>
                    <div>
                      <h4 className="font-medium text-gray-700">{achievement.title}</h4>
                      <p className="text-xs text-gray-500">{achievement.condition}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}