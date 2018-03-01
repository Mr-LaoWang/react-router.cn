webpackJsonp([18],{609:function(n,a){n.exports='<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> StyleSheet<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> NativeRouter<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-native\'</span>\n\n<span class="token comment">// Each logical "route" has two components, one for</span>\n<span class="token comment">// the sidebar and one for the main area. We want to</span>\n<span class="token comment">// render both of them in different places when the</span>\n<span class="token comment">// path matches the current URL.</span>\n<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span>\n    exact<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    sidebar<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>sidebarText<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>home<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    main<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>header<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/bubblegum\'</span><span class="token punctuation">,</span>\n    sidebar<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>sidebarText<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>bubblegum<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    main<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>header<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Bubblegum<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/shoelaces\'</span><span class="token punctuation">,</span>\n    sidebar<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>sidebarText<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>shoelaces<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    main<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>header<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Shoelaces<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">SidebarExample</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NativeRouter</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#f0f0f0\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token attr-name">underlayColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>#f0f4f7<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/bubblegum<span class="token punctuation">"</span></span> <span class="token attr-name">underlayColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>#f0f4f7<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Bubblegum<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/shoelaces<span class="token punctuation">"</span></span> <span class="token attr-name">underlayColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>#f0f4f7<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Shoelaces<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n\n        <span class="token punctuation">{</span>routes<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>route<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n          <span class="token comment">// You can render a &lt;Route> in as many places</span>\n          <span class="token comment">// as you want in your app. It will render along</span>\n          <span class="token comment">// with any other &lt;Route>s that also match the URL.</span>\n          <span class="token comment">// So, a sidebar or breadcrumbs or anything else</span>\n          <span class="token comment">// that requires you to render multiple things</span>\n          <span class="token comment">// in multiple places at the same URL is nothing</span>\n          <span class="token comment">// more than multiple &lt;Route>s.</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span>\n            <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span>\n            <span class="token attr-name">path</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>route<span class="token punctuation">.</span>path<span class="token punctuation">}</span></span>\n            <span class="token attr-name">exact</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>route<span class="token punctuation">.</span>exact<span class="token punctuation">}</span></span>\n            <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>route<span class="token punctuation">.</span>sidebar<span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>routes<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>route<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n          <span class="token comment">// Render more &lt;Route>s with the same paths as</span>\n          <span class="token comment">// above, but different components this time.</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span>\n            <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span>\n            <span class="token attr-name">path</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>route<span class="token punctuation">.</span>path<span class="token punctuation">}</span></span>\n            <span class="token attr-name">exact</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>route<span class="token punctuation">.</span>exact<span class="token punctuation">}</span></span>\n            <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>route<span class="token punctuation">.</span>main<span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NativeRouter</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  container<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    marginTop<span class="token punctuation">:</span> <span class="token number">25</span><span class="token punctuation">,</span>\n    padding<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  header<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    fontSize<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n    marginTop<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  sidebarText<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    fontWeight<span class="token punctuation">:</span> <span class="token string">\'bold\'</span><span class="token punctuation">,</span>\n    textAlign<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> SidebarExample'}});
//# sourceMappingURL=18-94b2f49ada3e47015bdf.js.map