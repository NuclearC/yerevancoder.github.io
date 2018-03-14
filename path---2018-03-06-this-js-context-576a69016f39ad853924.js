webpackJsonp([0xc172eb92d2db],{644:function(n,a){n.exports={data:{site:{siteMetadata:{title:"yerevancoder",author:"Coders of Armenia"}},markdownRemark:{id:"/Users/Edgar/Repos/yerevan-coder/src/pages/2018-03-06-this-js-context/index.md absPath of file >>> MarkdownRemark",html:'<h1>Execution Context (Aka the <code>this</code> variable)</h1>\n<hr>\n<p>One of the hardest things to understand in JavaScript is the <code>this</code> variable, also known as the\nexecution context. The <code>this</code> variable refers to the current <code>object</code> of which the called method is\ncurrently associated with.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'mari\'</span><span class="token punctuation">,</span>\n  speak<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nobj<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>Try it!</strong></p>\n<iframe height="400px" width="100%"\nsrc="https://repl.it/@fxfactorial/SomberPositiveDebugging?lite=true" scrolling="no" frameborder="no"\nallowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups\nallow-same-origin allow-scripts allow-modals"></iframe>\n<p>The <code>this</code> variable is <strong>dynamically</strong> scoped, this means that it’s changed and doesn’t use the data\nthat you might think it does when you use it.</p>\n<h3><em>the this variable</em></h3>\n<hr>\n<p>The <code>this</code> variable is a part of the <code>EcmaScript</code> spec, that means that it’s part of the language\nbut its implementation depends on what environment you’re running your JavaScript code in. In the\nbrowser it refers to the <code>window</code> object, in <code>node</code> it refers to the global object. Open the <code>node</code>\nrepl and type <code>this</code>, you’ll see the global object printed.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ node\n<span class="token operator">></span> this\n<span class="token punctuation">{</span> DTRACE_NET_SERVER_CONNECTION: <span class="token punctuation">[</span>Function<span class="token punctuation">]</span>,\n  DTRACE_NET_STREAM_END: <span class="token punctuation">[</span>Function<span class="token punctuation">]</span>,\n  DTRACE_HTTP_SERVER_REQUEST: <span class="token punctuation">[</span>Function<span class="token punctuation">]</span>,\n  DTRACE_HTTP_SERVER_RESPONSE: <span class="token punctuation">[</span>Function<span class="token punctuation">]</span>,\n  DTRACE_HTTP_CLIENT_REQUEST: <span class="token punctuation">[</span>Function<span class="token punctuation">]</span>,\n  DTRACE_HTTP_CLIENT_RESPONSE: <span class="token punctuation">[</span>Function<span class="token punctuation">]</span>,\n  global: <span class="token punctuation">[</span>Circular<span class="token punctuation">]</span>,\n  process:\n  process <span class="token punctuation">{</span>\n    title: <span class="token string">\'node\'</span>,\n</code></pre>\n      </div>\n<h3><em>Some important methods on functions</em></h3>\n<hr>\n<p>JavaScript functions also have methods on them and the most important ones are <code>bind</code>, <code>call</code>, and\n<code>apply</code>, see another way to call a function:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// call just takes all the arguments you give it</span>\n<span class="token comment">// and passes it to the function you are calling with .call</span>\nf<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">\'hello\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>You can also use <code>.apply</code> but for apply you need to give an array of arguments.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>g<span class="token punctuation">,</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g <span class="token operator">+</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nf<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'hello\'</span><span class="token punctuation">,</span> <span class="token string">\'world\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<iframe height="400px" width="100%"\nsrc="https://repl.it/@fxfactorial/CalculatingWickedReciprocal?lite=true" scrolling="no"\nframeborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms\nallow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>\n<h3><em>Controling execution context</em></h3>\n<hr>\n<p>Notice that for both <code>.call</code> and <code>.apply</code> we gave <code>null</code>. This means that we aren’t going to provide\na custom execution context, that the function will get to use whatever the <code>this</code> variable would\nhave been. Now we will control the execution context:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'mari\'</span><span class="token punctuation">,</span>\n  speak<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> other_obj <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'nane\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\nobj<span class="token punctuation">.</span>speak<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>other_obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Run this code and you’ll see that <code>nane</code> is printed to the screen, not <code>mari</code>.</p>\n<iframe height="400px" width="100%" src="https://repl.it/@fxfactorial/PhonyMinorBloatware?lite=true"\nscrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms\nallow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>\n<h3><em>Binding a context for a function</em></h3>\n<hr>\n<p>Now we will talk about the most powerful and important method on functions, <code>.bind</code>. The big\nannoyance in JavaScript is that the execution context, the <code>this</code> variable that you end up using at\nruntime is not always the one you think will be used. This is because the <code>this</code> variable is\n<code>dynamically</code> scoped, not <code>lexically</code> scoped. To make sure that our function uses the execution\ncontent that we want used we have to use <code>.bind</code>, <code>.bind</code> creates a new function that uses the\nexecution context that you provide.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'aram\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// At the top level this refers to the global object</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">\'gohar\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">g</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>last_name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// This is using ES6 string interpolation, aka the ${}</span>\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>last_name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> f <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token string">\'baz\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<iframe height="400px" width="100%" src="https://repl.it/@fxfactorial/LowestFrugalAnalysts?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>\n<p>So <code>f</code> is a new function which is bound, we did a bind on g, to the JavaScript object <code>obj</code>, we can\nalso do other wacky things with <code>.bind</code> like partial function application.</p>\n<h3><em>Useful for Partial function application</em></h3>\n<hr>\n<p>Partial function application is like making a new function from another function but where some of\nthe arguments are used with other values; its clearer with an example.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'aram\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// At the top level this refers to the global object</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">\'gohar\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">g</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>last_name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>last_name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// The first argument must always be the new execution context</span>\n<span class="token comment">// and the other arguments end up being the</span>\n<span class="token comment">// arguments of the original function</span>\n<span class="token keyword">const</span> f <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">\'baz\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<iframe height="400px" width="100%" src="https://repl.it/@fxfactorial/ClassicFondNumber?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>\n<p>See how <code>\'baz\'</code> ends up taking the argument value of <code>last_name</code>, this is positional.</p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"><strong>Be sure to read over and over, MDN article on this variable</strong></a></p>',frontmatter:{title:"this variable in JavaScript",tags:"javascript, development",author:"Edgar Aroutiounian",date:"March 05, 2018",discussionId:"2018-03-05-js-this-js-context"}}},pathContext:{slug:"/2018-03-06-this-js-context/"}}}});
//# sourceMappingURL=path---2018-03-06-this-js-context-576a69016f39ad853924.js.map