import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Users, Star, BookOpen, CheckCircle, Target, UserCheck, Database, Briefcase, ChevronDown, ChevronUp, Play, FileText, CheckCircle2, Circle, ChevronRight, Award, TrendingUp, Brain, ShoppingCart, Layers, LineChart, MessageSquare, Globe, DollarSign, Heart } from 'lucide-react'
import { getCourseById } from '../data/courses'
import { getExercisesByCourse } from '../data/exercises'

const courseIcons: Record<string, any> = {
  '销售数据清洗与分析': TrendingUp,
  '客户行为分析': Users,
  '购物车分析': ShoppingCart,
  '聚类分析': Layers,
  '时间序列分析': LineChart,
  '社交媒体数据分析': MessageSquare,
  '网站流量分析': Globe,
  '金融数据分析': DollarSign,
  '健康数据分析': Heart,
  '市场调研数据分析': Brain
}

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>()
  const course = getCourseById(id || '')
  const relatedExercises = getExercisesByCourse(id || '')
  
  const [expandedChapters, setExpandedChapters] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'dataset' | 'case'>('overview')
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set())
  const [currentLesson, setCurrentLesson] = useState<string | null>(null)

  if (!course) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">课程不存在</p>
        <Link to="/courses" className="text-primary-600 hover:underline mt-4 inline-block">
          返回课程列表
        </Link>
      </div>
    )
  }

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev => 
      prev.includes(chapterId) 
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    )
  }

  const totalLessons = course.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0)

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <Link to="/courses" className="inline-flex items-center text-gray-600 hover:text-gray-900">
        <ArrowLeft className="w-4 h-4 mr-1" />
        返回课程列表
      </Link>

      {/* Course Header */}
      <div className="card bg-gradient-to-br from-primary-50 to-white border-primary-100">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="text-7xl p-4 bg-white rounded-xl shadow-sm">{course.image}</div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className={`badge-${course.level}`}>{course.levelLabel}</span>
              <div className="flex items-center text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="ml-1 text-sm font-medium">{course.rating}</span>
              </div>
              {course.caseStudy && (
                <span className="flex items-center gap-1 text-sm text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                  <Award className="w-4 h-4" />
                  含实战案例
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">{course.description}</p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {course.duration}
              </span>
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {course.chapters.length}个章节
              </span>
              <span className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                {totalLessons}个课时
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {course.students}人学习
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {[
            { id: 'overview', label: '课程概览', icon: BookOpen },
            { id: 'curriculum', label: '课程大纲', icon: FileText },
            { id: 'dataset', label: '数据集', icon: Database },
            { id: 'case', label: '实战案例', icon: Briefcase },
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {activeTab === 'overview' && (
            <>
              {/* Learning Objectives */}
              <section className="card">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary-600" />
                  学习目标
                </h2>
                <ul className="space-y-3">
                  {course.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Prerequisites */}
              <section className="card">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">先修知识</h2>
                <div className="flex flex-wrap gap-2">
                  {course.prerequisites.map((prereq, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {prereq}
                    </span>
                  ))}
                </div>
              </section>

              {/* Target Audience */}
              <section className="card">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-primary-600" />
                  适合人群
                </h2>
                <ul className="space-y-2">
                  {course.targetAudience.map((audience, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                      {audience}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {activeTab === 'curriculum' && (
            <section className="card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">📚 课程大纲</h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>学习进度:</span>
                  <span className="font-medium text-primary-600">{completedLessons.size}/{totalLessons}</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div 
                  className="bg-gradient-to-r from-primary-600 to-primary-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(completedLessons.size / totalLessons) * 100}%` }}
                ></div>
              </div>
              <div className="space-y-4">
                {course.chapters.map((chapter, chapterIndex) => (
                  <div key={chapter.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleChapter(chapter.id)}
                      className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                          {chapterIndex + 1}
                        </div>
                        <div className="text-left">
                          <span className="font-semibold text-gray-900 block">{chapter.title}</span>
                          <span className="text-xs text-gray-500">{chapter.lessons.length}个课时</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {expandedChapters.includes(chapter.id) ? (
                          <ChevronUp className="w-5 h-5 text-primary-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>
                    
                    {expandedChapters.includes(chapter.id) && (
                      <div className="border-t border-gray-200 bg-gray-50">
                        {chapter.lessons.map((lesson, lessonIndex) => (
                          <div 
                            key={lesson.id} 
                            className={`p-4 pl-14 border-b border-gray-100 last:border-b-0 transition-all cursor-pointer ${
                              currentLesson === lesson.id ? 'bg-white shadow-sm' : 'hover:bg-white'
                            }`}
                            onClick={() => {
                              setCurrentLesson(lesson.id)
                            }}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">
                                {completedLessons.has(lesson.id) ? (
                                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                                  </div>
                                ) : (
                                  <Circle className="w-6 h-6 text-gray-300" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{chapterIndex + 1}.{lessonIndex + 1}</span>
                                      <h4 className={`font-semibold ${
                                        currentLesson === lesson.id ? 'text-primary-600' : 'text-gray-800'
                                      }`}>{lesson.title}</h4>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                                      <Clock className="w-3 h-3" />
                                      {lesson.duration}
                                    </p>
                                  </div>
                                  <ChevronRight className={`w-5 h-5 ${currentLesson === lesson.id ? 'text-primary-600' : 'text-gray-400'}`} />
                                </div>
                                
                                {currentLesson === lesson.id && (
                                  <div className="mt-5 p-5 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200">
                                    {lesson.content && (
                                      <div className="mb-4">
                                        <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                          <BookOpen className="w-4 h-4" />
                                          课程内容
                                        </h5>
                                        <p className="text-gray-700 leading-relaxed">{lesson.content}</p>
                                      </div>
                                    )}
                                    {lesson.codeExample && (
                                      <div className="mb-4">
                                        <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                          <FileText className="w-4 h-4" />
                                          代码示例
                                        </h5>
                                        <pre className="code-block text-sm">{lesson.codeExample}</pre>
                                        {lesson.output && (
                                          <div className="mt-2">
                                            <h6 className="text-xs font-semibold text-gray-600 mb-1">输出结果:</h6>
                                            <div className="code-output text-sm">{lesson.output}</div>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        if (!completedLessons.has(lesson.id)) {
                                          setCompletedLessons(new Set([...completedLessons, lesson.id]))
                                        }
                                      }}
                                      className={`w-full px-4 py-3 rounded-lg transition-all flex items-center justify-center gap-2 font-medium ${
                                        completedLessons.has(lesson.id) 
                                          ? 'bg-green-100 text-green-700 border border-green-200' 
                                          : 'bg-primary-600 text-white hover:bg-primary-700 shadow-md'
                                      }`}
                                    >
                                      <CheckCircle2 className="w-5 h-5" />
                                      {completedLessons.has(lesson.id) ? '✓ 已完成本课时' : '标记为已完成'}
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'dataset' && course.dataset && (
            <section className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-primary-600" />
                数据集
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">数据集名称</p>
                    <p className="font-medium text-gray-900">{course.dataset.name}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">文件大小</p>
                    <p className="font-medium text-gray-900">{course.dataset.size}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">格式</p>
                    <p className="font-medium text-gray-900">{course.dataset.format}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">记录数</p>
                    <p className="font-medium text-gray-900">{course.dataset.description.match(/\d+/)?.[0] || 'N/A'}条</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">数据描述</p>
                  <p className="text-gray-700">{course.dataset.description}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">样本数据</p>
                  <pre className="code-block text-xs overflow-x-auto">{course.dataset.sampleData}</pre>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'case' && course.caseStudy && (
            <section className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary-600" />
                实战案例
              </h2>
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-red-800 mb-2">业务问题</h3>
                  <p className="text-red-700">{course.caseStudy.problem}</p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">解决方案</h3>
                  <p className="text-blue-700">{course.caseStudy.solution}</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-green-800 mb-2">项目成果</h3>
                  <p className="text-green-700">{course.caseStudy.results}</p>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">数据洞察</h3>
                  <p className="text-purple-700">{course.caseStudy.visualization}</p>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Course Tags */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-3">课程标签</h3>
            <div className="flex flex-wrap gap-2">
              {course.tags.map((tag) => (
                <span key={tag} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Exercises */}
          {relatedExercises.length > 0 && (
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-3">相关练习</h3>
              <div className="space-y-3">
                {relatedExercises.slice(0, 3).map((exercise) => (
                  <Link
                    key={exercise.id}
                    to="/practice"
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 text-sm">{exercise.title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        exercise.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                        exercise.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {exercise.difficultyLabel}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link to="/practice" className="text-primary-600 text-sm hover:underline mt-3 inline-block">
                查看更多练习 →
              </Link>
            </div>
          )}

          {/* Start Learning CTA */}
          <div className="card bg-primary-600 text-white">
            <h3 className="font-semibold mb-2">开始学习</h3>
            <p className="text-primary-100 text-sm mb-4">加入{course.students}名学员，开启你的数据分析之旅</p>
            <button 
              onClick={() => setActiveTab('curriculum')}
              className="w-full bg-white text-primary-600 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              开始学习
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}