webpackJsonp([0xe4f6f42b55fd],{688:function(n,s){n.exports={data:{site:{siteMetadata:{title:"yerevancoder",author:"Coders of Armenia"}},markdownRemark:{id:"/Users/Edgar/Repos/yerevan-coder/src/pages/2018-03-28-asyncio-in-python/index.md absPath of file >>> MarkdownRemark",html:'<p>Python 3 now follows the path of many of languages and introduces <code class="language-text">async</code>/<code class="language-text">await</code> as a first class\ncitizen</p>\n<p>Here is a short code sample, tested on Python 3.6</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">import</span> asyncio\n<span class="token keyword">from</span> socket <span class="token keyword">import</span> socket<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">,</span> AF_INET<span class="token punctuation">,</span> SO_REUSEADDR<span class="token punctuation">,</span> SOL_SOCKET\n\nloop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>get_event_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment"># connect with</span>\n<span class="token comment"># $ socat - TCP:localhost:25000</span>\n\n<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">echo_handler</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">with</span> client<span class="token punctuation">:</span>\n        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n            data <span class="token operator">=</span> <span class="token keyword">await</span> loop<span class="token punctuation">.</span>sock_recv<span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n            <span class="token keyword">if</span> <span class="token operator">not</span> data<span class="token punctuation">:</span>\n                <span class="token keyword">break</span>\n            <span class="token keyword">await</span> loop<span class="token punctuation">.</span>sock_sendall<span class="token punctuation">(</span>client<span class="token punctuation">,</span> b<span class="token string">\'Got: \'</span> <span class="token operator">+</span> data<span class="token punctuation">)</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">\'Connection closed\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">echo_server</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    sock <span class="token operator">=</span> socket<span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">)</span>\n    sock<span class="token punctuation">.</span>setsockopt<span class="token punctuation">(</span>SOL_SOCKET<span class="token punctuation">,</span> SO_REUSEADDR<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n    sock<span class="token punctuation">.</span>bind<span class="token punctuation">(</span>address<span class="token punctuation">)</span>\n    sock<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>\n    sock<span class="token punctuation">.</span>setblocking<span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">)</span>\n    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n        <span class="token punctuation">(</span>client<span class="token punctuation">,</span> addr<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">await</span> loop<span class="token punctuation">.</span>sock_accept<span class="token punctuation">(</span>sock<span class="token punctuation">)</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">\'Connection from\'</span><span class="token punctuation">,</span> address<span class="token punctuation">)</span>\n        loop<span class="token punctuation">.</span>create_task<span class="token punctuation">(</span>echo_handler<span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\nloop<span class="token punctuation">.</span>create_task<span class="token punctuation">(</span>echo_server<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token number">25000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nloop<span class="token punctuation">.</span>run_forever<span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>This simple code sample can handle thousands of requests on a single CPU.</p>',frontmatter:{title:"async finally first class in Python",tags:"python",author:"Edgar Aroutiounian",date:"March 28, 2018",discussionId:"2018-03-28-asyncio-in-python"}}},pathContext:{slug:"/2018-03-28-asyncio-in-python/"}}}});
//# sourceMappingURL=path---2018-03-28-asyncio-in-python-86493ad3e079fd43bb1b.js.map