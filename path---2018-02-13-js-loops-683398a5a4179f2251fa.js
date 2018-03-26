webpackJsonp([0x6310863d5c89],{670:function(n,a){n.exports={data:{site:{siteMetadata:{title:"yerevancoder",author:"Coders of Armenia"}},markdownRemark:{id:"/Users/Edgar/Repos/yerevan-coder/src/pages/2018-02-13-js-loops/index.md absPath of file >>> MarkdownRemark",html:'<h1>Loops</h1>\n<p>This blog post is part of the posts series done for iterate hackerspace, explaining some of basic programming concepts implemented in JavaScript.</p>\n<h4>Table of Contents</h4>\n<ol>\n<li>\n<p><a href="#Introduction-What-are-loops">What are loops</a></p>\n</li>\n<li>\n<p><a href="#For-loop">For Loop</a></p>\n<p>2.1 <a href="#Special-for-loops-in-JS">Special for loops in JS</a></p>\n</li>\n<li>\n<p><a href="#While-loops">While Loop</a></p>\n<h2>Introduction: What are loops?</h2>\n</li>\n</ol>\n<p>What computers excel at is doing a lot of repetitive things in a short amount of time. Like imagine counting to 1000. While it will take you more than 5 minutes to do so, computers are able to do it in a small fraction of a second. Let’s see how long will it take to count to 1000 for a computer.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>We will return to this code 10 minutes later.</p>\n<p>So as we saw, computers are fast when doing the same action over and over. Besides being fast, usually you have a lot of similar data and you will find you in a situation where you want to change something on every or some elements of some “set” of data. These are just some of the use-cases of loops.</p>\n<p>There are different ways in different languages to create a loop. The most primitive one was <code class="language-text">goto</code> command. You can find it in ancient and low-level languages. Roughly speaking it just changed the line from where the code should execute after.</p>\n<p>In modern languages, there are other, better types of loops. The ones we have in JS are <code class="language-text">for</code>, <code class="language-text">while</code>, <code class="language-text">do ... while</code> loops. There are also special loops for some data types. We will talk about those loops one by one. Allright, let’s get started.</p>\n<h2>For loop</h2>\n<p>For loop is probably the most common type of loop used in the actual code. The “classic” for loop consists of 3 parts - <strong><em>Initialization</em></strong>, <strong><em>Condition</em></strong> and <strong><em>Increment</em></strong>.</p>\n<p>As an analogy let’s pick a gym. Let’s say you went to the gym and you are doing squats. After doing one squat you add one to the number in your mind. Say you wanted to do 30 of them. You start counting from 1 and after each successful squat you add one to the count. In you mind you are doing exactly 3 things. You are starting a counter - in your memory you start counting from 1, thinking of a condition of stopping - that’s when the number reaches 30 and also you give an increment by adding one.</p>\n<p>Let’s make this into a code.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">30</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">do_squat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The one little difference between a computer and a human is that computer(or better to say programmers) start counting from 0. This is more convenient as you will se later on.</p>\n<p>As you can see, there are 3 different parts inside the parantheses after the keyword <code class="language-text">for</code>. Each of those parts is divided from the others by ;-s\nIn the first part we see</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Here, as you may know, we initialize the variable. It’s like when you start your count from 1. In your memory you basically create a variable. This variable is used later to determine when the loop will stop exactly. After that we see:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">i <span class="token operator">&lt;</span> <span class="token number">30</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So this, as you can see, is a condition and is evaluated into either <code class="language-text">true</code> or <code class="language-text">false</code>. This condition is used to determine when exactly loop should stop. In our case it will stop as soon as i-s value is 30, which means we did 30 squats. The last part says:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">i<span class="token operator">++</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This is used for incrementing the value of i (hence the name). It adds 1 to i after executing the <strong>body</strong> of the for loop once, and makes sure that value of i will reach from 0 to 30 sooner or later. This is like when you stand up after a successful squat and add one to the number you were memorizing.</p>\n<p><em>NOTE:: Of course, we could have anything here that changes the value of i, like <code class="language-text">i += 2</code>, <code class="language-text">i--</code>, <code class="language-text">i = i * 3</code> etc.</em></p>\n<p>We used the word <strong>body</strong>. So what’s the body of this loop? It’s the part inside curly braces that are put after the parantheses. So in this particular case, the body is:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">{</span>\n  <span class="token function">do_squat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>We can put any legal operation inside those curly braces.\nLet’s take a look at some legal but a little bit unusual for loops:</p>\n<ol>\n<li>Forever loop\nWe can leave all the 3 parts of the for loop empty, thus not giving any condition of ending it. This creates a forever loop.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'I will not end\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This loop will do the same forever, which is as long as program runs.</p>\n<ol start="2">\n<li>Loop with 2 or 3 variables used\nYou can put as many initializations as you want in the first part, as many boolean expressions as you want in the second part, and as many increments in the third part as you want. Just don’t forget to seperate them by commas!</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span> i <span class="token operator">></span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Look, I have two variables to use\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This loop has 2 initializations, 1 condition using those 2 and <em>increment</em> for i plus <em>decrement</em> for j;</p>\n<h3>Special for loops in JS</h3>\n<p>In 2015, 2 new versions of for loops were added to JS: <code class="language-text">for .. in</code> and <code class="language-text">for .. of</code> loops. This loops have only one part and this part includes initialization and the name of the list it will <strong><em>iterate over</em></strong>. Let’s take a look at them too:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">theList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">89</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> theList<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// The output of this one will be:</span>\n<span class="token comment">// 0 1 2 3</span>\n</code></pre>\n      </div>\n<p>As you may notice, <code class="language-text">for .. in</code> loops over any Iterateable (Something that has executive, countable items) and on each step <em>assigns</em> the key of the item to the variable. I think now you already have guessed what <code class="language-text">for .. of</code> will do.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">theList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">89</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> theList<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// The output of this one will be:</span>\n<span class="token comment">// 10 15 89 30</span>\n</code></pre>\n      </div>\n<p>This loop does the same as <code class="language-text">for .. in</code> except instead of the keys it assigns the values to the variable.</p>\n<h4>A little tip</h4>\n<p>As you may have noticed, the special for loops are more human-readable and understandable. In almost all cases, you can change the old-style for loops with those <code class="language-text">for .. in</code> and <code class="language-text">for .. of</code> loops. This will make the code a little bit better for later maintenance. We will get back to optimizing the code a little bit later, after we get acquainted with special loops that are built-in for you in JS.</p>\n<h2>While loops</h2>\n<p>Today I am more into gym examples I guess :smile:\nLet’s say you are still in the gym. It’s the last 15 minutes and you challenged yourself. You want to do push ups. How much? Well, as much as you can. Do you know how much exactly you can? I don’t think you know. You want to do push ups <strong>while</strong> there is energy left in your hands to push you up. So there are cases when you need some other kind of loop, which only takes a condition and repeats the thing <strong>while</strong> the condition is true. You don’t need to be too creative to guess the name that loop has.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">while</span> <span class="token punctuation">(</span>forceLeft <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">push_up</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>If only doing push-ups was this easy! :smile:</p>\n<p>As we already said, <code class="language-text">while</code> loop will loop over its <em>body</em> <strong>while</strong> some condition is true. It has the same syntax as <code class="language-text">if</code> conditional, which is:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  i<span class="token operator">++</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The one thing worth mentioning here is that it will check the condition first, <strong>before</strong> executing whatever is in its body. In contrary, there is a <code class="language-text">do .. while</code> loop, which will execute the body first and only <strong>after</strong> doint that, check the condition. Roughly speaking, <code class="language-text">do .. while</code> will execute its body at least <strong>once</strong>. Try executing this code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n<span class="token keyword">do</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// this will log 5</span>\n</code></pre>\n      </div>\n<h4>Same code, a bunch of different ways.</h4>\n<p>Take a look at those 2 snippets:</p>\n<p>First one:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  i<span class="token operator">++</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Second one:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>As you can see, those two do exactly the same. So what’s better. In this particular case, if we were forced to choose between two cases, we should choose the second version, because this particular case is a perfect fit for the <code class="language-text">for</code> loop. While is more likely to be used when the iteratable is not strictly determined, when you know that it only depends on some condition. You may use <code class="language-text">while</code> loop, for example, when getting data from the server. You don’t know exactly how much data you will get or when incoming data will stop. You just want to get it <strong>while</strong> there is data left. To not really get too technical let’s write some non-real code to understand the use case of the <code class="language-text">while</code> loop;</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">while</span><span class="token punctuation">(</span>there is some data left on the server<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>the data we have got<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>We will turn this into actual code after we have some experience ;)</p>\n<p>We wrap it up here. Loops are a powerful concept and evey programmer should know it. It may be a little tough for complete beginners, but once you have a little experience, you slowly start to get it and do it more easily. Hope you enjoyed the post.</p>\n<p>The next post will be in 2 days!</p>',frontmatter:{title:"Javascript Loops",tags:"javascript, development",author:"Robert Gevorgyan",date:"February 13, 2018",discussionId:"2018-02-13-js-loops"}}},pathContext:{slug:"/2018-02-13-js-loops/"}}}});
//# sourceMappingURL=path---2018-02-13-js-loops-683398a5a4179f2251fa.js.map