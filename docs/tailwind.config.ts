import baseConfig from '../tailwind.config'

export default {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    // 添加文档相关的文件路径
    './docs/**/*.{js,ts,jsx,tsx,vue,md}',
    './.vitepress/**/*.{js,ts,jsx,tsx,vue}'
  ]
}
