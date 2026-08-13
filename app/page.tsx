const steps = [
  ["01", "接收任务", "从当前飞书会话读取 YouTube 链接与目标群"],
  ["02", "规范化", "提取视频 ID，批内去重并检查历史记录"],
  ["03", "提取音轨", "使用 yt-dlp 获取公开可访问视频的完整音轨"],
  ["04", "完整性校验", "用 ffprobe 对比源视频与本地音频时长"],
  ["05", "转码交付", "输出可上传的 MP3，超限时压缩并再次验时长"],
  ["06", "发送飞书", "只向当前会话或明确授权的目标逐个发送"],
  ["07", "反查验收", "核对文件名、数量与消息 ID 后才宣布完成"],
];

const metrics = [
  ["36:02", "样例视频时长"],
  ["1,358", "Whisper 分段"],
  ["12,583", "Unicode 字符"],
  ["0", "时间戳残留"],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="返回顶部">
          <span className="brandMark">YT</span>
          <span>YouTube 音频分发助理</span>
        </a>
        <nav aria-label="页面导航">
          <a href="#workflow">工作流</a>
          <a href="#run">运行记录</a>
          <a href="#guide">使用说明</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <div className="status"><i /> HERMES AGENT · 已上线</div>
          <h1>把选中的 YouTube 视频，稳定交付到正确的飞书群</h1>
          <p className="lede">接收链接、提取完整音轨、校验时长、转码发送、群内反查。每一步都有明确完成标准，只有真实交付成功才会写入记录。</p>
          <div className="actions">
            <a className="primary" href="https://my.feishu.cn/docx/StHDdP7ncoUxpOxzxfqcyO66nBe" target="_blank" rel="noreferrer">查看真实验收报告 <span>↗</span></a>
            <a className="secondary" href="#guide">阅读使用说明</a>
          </div>
        </div>
        <div className="runPanel" aria-label="最近一次运行状态">
          <div className="panelHead"><span>最近一次验收</span><b>PASS</b></div>
          <div className="terminal">
            <p><em>INPUT</em> youtube.com/watch?v=bUwj3Hck18M</p>
            <p><em>ROUTE</em> 🎬 YouTube 任务</p>
            <p><em>TOOLS</em> yt-dlp → mlx_whisper → Feishu</p>
            <p><em>VERIFY</em> UTF-8 / 时长 / 首尾覆盖 / 消息反查</p>
            <p className="success"><em>RESULT</em> 交付验收通过</p>
          </div>
          <div className="panelFoot"><span>独立 Profile</span><span>当前会话路由</span><span>可追溯回执</span></div>
        </div>
      </section>

      <section className="band" id="workflow">
        <div className="sectionIntro">
          <span className="eyebrow">WORKFLOW / 07 STEPS</span>
          <h2>一条可以复核的交付链路</h2>
          <p>不是“工具跑完”就算完成。任务必须经过发送前检查和飞书消息反查，缺少任何一项都不会被标记为成功。</p>
        </div>
        <div className="steps">
          {steps.map(([num, title, desc]) => (
            <article key={num}>
              <span>{num}</span><div><h3>{title}</h3><p>{desc}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="runSection" id="run">
        <div className="runStory">
          <span className="eyebrow">VERIFIED RUN / 2026.08</span>
          <h2>一次真实任务，不是一张演示图</h2>
          <p>公开样例使用视频《一个视频讲清楚邓煜研究的“希尔伯特第六问题”》。Agent 完成音轨与转录产物核验、飞书附件反查，并生成可匿名访问的验收报告。</p>
          <dl>
            <div><dt>视频 ID</dt><dd>bUwj3Hck18M</dd></div>
            <div><dt>模型</dt><dd>whisper-large-v3-turbo</dd></div>
            <div><dt>附件消息</dt><dd>om_x100…e2735</dd></div>
            <div><dt>最终状态</dt><dd className="pass">验收通过</dd></div>
          </dl>
        </div>
        <div className="metrics">
          {metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className="boundaries">
        <div><span className="eyebrow">CAPABILITY</span><h2>它负责什么</h2><ul><li>处理用户明确提供的公开 YouTube 链接</li><li>提取、校验并转换完整音轨</li><li>发送到当前或明确授权的飞书会话</li><li>反查消息并记录可追溯的交付结果</li></ul></div>
        <div><span className="eyebrow danger">BOUNDARY</span><h2>它不会做什么</h2><ul><li>不绕过登录、会员、地区、DRM 或版权限制</li><li>不自行决定哪些视频值得处理</li><li>不向未授权的群或联系人发送文件</li><li>不在反查失败时虚假宣布完成</li></ul></div>
      </section>

      <section className="guide" id="guide">
        <div className="guideTitle"><span className="eyebrow">QUICK START</span><h2>三步使用</h2></div>
        <ol><li><b>在飞书「🎬 YouTube 任务」群发送链接</b><span>一次可发送一个或多个公开 YouTube URL。</span></li><li><b>确认目标与任务清单</b><span>Agent 使用当前会话 Chat ID，不从历史任务猜测目标群。</span></li><li><b>等待文件与验收摘要</b><span>收到 MP3、视频信息和发送结果；失败项会说明原因和人工处理建议。</span></li></ol>
        <aside><b>人工兜底</b><p>遇到敏感内容、目标不明确、音轨不完整或文件超限时，Agent 会停止相关项目并请求确认，不会擅自扩大处理范围。</p></aside>
      </section>

      <footer><span>YouTube 音频分发助理 · Hermes 独立 Profile</span><span>真实任务驱动 · 结果可验证 · 边界可控制</span></footer>
    </main>
  );
}
