/* eslint-env node */
/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // ✨ 新功能
        'fix', // 🐛 修复bug
        'docs', // 📝 文档修改
        'style', // 💄 代码格式修改
        'refactor', // ♻️ 代码重构
        'perf', // ⚡️ 性能优化
        'test', // ✅ 测试相关
        'build', // 📦 构建相关
        'ci', // 🎡 CI相关
        'chore', // 🔨 其他修改
        'revert' // ⏪ 回退
      ]
    ],
    'subject-case': [0],
    'type-case': [2, 'always', 'lower-case'],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [0],
    'header-max-length': [2, 'always', 100]
  },
  prompt: {
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）:\n',
      confirmCommit: '是否提交或修改commit ?'
    },
    types: [
      { value: 'feat', name: 'feat:     ✨ 新功能', emoji: '✨' },
      { value: 'fix', name: 'fix:      🐛 修复bug', emoji: '🐛' },
      { value: 'docs', name: 'docs:     📝 文档变更', emoji: '📝' },
      { value: 'style', name: 'style:    💄 代码格式（不影响功能）', emoji: '💄' },
      { value: 'refactor', name: 'refactor: ♻️  代码重构', emoji: '♻️' },
      { value: 'perf', name: 'perf:     ⚡️ 性能优化', emoji: '⚡️' },
      { value: 'test', name: 'test:     ✅ 添加测试', emoji: '✅' },
      { value: 'build', name: 'build:    📦️ 构建相关', emoji: '📦️' },
      { value: 'ci', name: 'ci:       🎡 CI配置', emoji: '🎡' },
      { value: 'chore', name: 'chore:    🔨 其他修改', emoji: '🔨' },
      { value: 'revert', name: 'revert:   ⏪️ 回滚 commit', emoji: '⏪️' }
    ],
    useEmoji: true,
    scopes: [
      { value: 'comp', name: 'comp:      组件相关' },
      { value: 'pages', name: 'pages:     页面相关' },
      { value: 'utils', name: 'utils:     工具函数' },
      { value: 'styles', name: 'styles:     样式文件' },
      { value: 'deps', name: 'deps:      依赖相关' },
      { value: 'config', name: 'config:     配置文件' },
      { value: 'other', name: 'other:     其他修改' }
    ],
    customScopesAlign: 'bottom',
    customScopesAlias: '自定义',
    emptyScopesAlias: '跳过',
    allowCustomScopes: true,
    allowEmptyScopes: true,
    upperCaseSubject: false,
    allowBreakingChanges: ['feat', 'fix'],
    skipQuestions: ['breaking', 'footer', 'footerPrefix']
  }
}
