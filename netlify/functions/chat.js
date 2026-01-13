// netlify/functions/chat.js
const { Readable } = require('stream');

exports.handler = async (event, context) => {
  // 仅允许 POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // 把客户端传来的 body 原样转发给 DeepSeek
  const body = event.body; // 字符串，已经是 JSON
  const deepseekRes = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`, // 在 Netlify 控制台配置
    },
    body,
  });

  // 流式返回
  const reader = deepseekRes.body.getReader();
  const stream = new Readable({
    read() {
      reader.read().then(({ done, value }) => {
        if (done) this.push(null);
        else this.push(value);
      });
    },
  });

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
    body: stream,
  };
};