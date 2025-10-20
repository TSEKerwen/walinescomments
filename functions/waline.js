module.exports = require('@waline/vercel');

/** 
 * 在这里配置你的 Waline 选项
 * 环境变量建议在 Netlify 后台设置，不要硬编码在代码中
 */
const app = Waline({
  // 安全密钥，用于登录管理后台，在 Netlify 后台设置
  SECURE_DOMAINS: process.env.SECURE_DOMAINS || 'your-domain.netlify.app',
  // 其他配置...
});

module.exports.handler = async (event, context) => {
  return await app(event, context);
};
