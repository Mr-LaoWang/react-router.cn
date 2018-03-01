webpackJsonp([16],{562:function(n,s){n.exports='<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> TransitionGroup<span class="token punctuation">,</span> CSSTransition <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-transition-group"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span>\n  Switch<span class="token punctuation">,</span>\n  Route<span class="token punctuation">,</span>\n  Link<span class="token punctuation">,</span>\n  Redirect\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* you\'ll need this CSS somewhere\n.fade-enter {\n  opacity: 0;\n  z-index: 1;\n}\n\n.fade-enter.fade-enter-active {\n  opacity: 1;\n  transition: opacity 250ms ease-in;\n}\n*/</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">AnimationExample</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Router</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Route\n      render<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> location <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>fill<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span>\n            <span class="token attr-name">exact</span>\n            <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span>\n            <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Redirect</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/hsl/10/90/50<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>nav<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/hsl/10/90/50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Red<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavLink</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/hsl/120/100/40<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Green<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavLink</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/rgb/33/150/243<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Blue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavLink</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/rgb/240/98/146<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Pink<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavLink</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>content<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TransitionGroup</span><span class="token punctuation">></span></span>\n              <span class="token punctuation">{</span><span class="token comment">/* no different than other usage of\n                CSSTransition, just make sure to pass\n                `location` to `Switch` so it can match\n                the old location as it animates out\n            */</span><span class="token punctuation">}</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CSSTransition</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>location<span class="token punctuation">.</span>key<span class="token punctuation">}</span></span> <span class="token attr-name">classNames</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fade<span class="token punctuation">"</span></span> <span class="token attr-name">timeout</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">300</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">location</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>location<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">exact</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/hsl/:h/:s/:l<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>HSL<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">exact</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/rgb/:r/:g/:b<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>RGB<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n                  <span class="token punctuation">{</span><span class="token comment">/* Without this `Route`, we would get errors during\n                    the initial transition from `/` to `/hsl/10/90/50`\n                */</span><span class="token punctuation">}</span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Not Found<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Switch</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CSSTransition</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TransitionGroup</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">}</span>\n    <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Router</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">NavLink</span> <span class="token operator">=</span> props <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>navItem<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">props</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">"inherit"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">HSL</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> match<span class="token punctuation">:</span> <span class="token punctuation">{</span> params <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div\n    style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n      <span class="token operator">...</span>styles<span class="token punctuation">.</span>fill<span class="token punctuation">,</span>\n      <span class="token operator">...</span>styles<span class="token punctuation">.</span>hsl<span class="token punctuation">,</span>\n      background<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`hsl(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span>h<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span>s<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span>l<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%)`</span></span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span>\n  <span class="token operator">></span>\n    <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token punctuation">{</span>params<span class="token punctuation">.</span>h<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>params<span class="token punctuation">.</span>s<span class="token punctuation">}</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>params<span class="token punctuation">.</span>l<span class="token punctuation">}</span><span class="token operator">%</span><span class="token punctuation">)</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">RGB</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> match<span class="token punctuation">:</span> <span class="token punctuation">{</span> params <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div\n    style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n      <span class="token operator">...</span>styles<span class="token punctuation">.</span>fill<span class="token punctuation">,</span>\n      <span class="token operator">...</span>styles<span class="token punctuation">.</span>rgb<span class="token punctuation">,</span>\n      background<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`rgb(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span>r<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span>g<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span>b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span>\n  <span class="token operator">></span>\n    <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token punctuation">{</span>params<span class="token punctuation">.</span>r<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>params<span class="token punctuation">.</span>g<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>params<span class="token punctuation">.</span>b<span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> styles <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nstyles<span class="token punctuation">.</span>fill <span class="token operator">=</span> <span class="token punctuation">{</span>\n  position<span class="token punctuation">:</span> <span class="token string">"absolute"</span><span class="token punctuation">,</span>\n  left<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  right<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  top<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  bottom<span class="token punctuation">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nstyles<span class="token punctuation">.</span>content <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>styles<span class="token punctuation">.</span>fill<span class="token punctuation">,</span>\n  top<span class="token punctuation">:</span> <span class="token string">"40px"</span><span class="token punctuation">,</span>\n  textAlign<span class="token punctuation">:</span> <span class="token string">"center"</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nstyles<span class="token punctuation">.</span>nav <span class="token operator">=</span> <span class="token punctuation">{</span>\n  padding<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  margin<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  position<span class="token punctuation">:</span> <span class="token string">"absolute"</span><span class="token punctuation">,</span>\n  top<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  height<span class="token punctuation">:</span> <span class="token string">"40px"</span><span class="token punctuation">,</span>\n  width<span class="token punctuation">:</span> <span class="token string">"100%"</span><span class="token punctuation">,</span>\n  display<span class="token punctuation">:</span> <span class="token string">"flex"</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nstyles<span class="token punctuation">.</span>navItem <span class="token operator">=</span> <span class="token punctuation">{</span>\n  textAlign<span class="token punctuation">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>\n  flex<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  listStyleType<span class="token punctuation">:</span> <span class="token string">"none"</span><span class="token punctuation">,</span>\n  padding<span class="token punctuation">:</span> <span class="token string">"10px"</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nstyles<span class="token punctuation">.</span>hsl <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>styles<span class="token punctuation">.</span>fill<span class="token punctuation">,</span>\n  color<span class="token punctuation">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>\n  paddingTop<span class="token punctuation">:</span> <span class="token string">"20px"</span><span class="token punctuation">,</span>\n  fontSize<span class="token punctuation">:</span> <span class="token string">"30px"</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nstyles<span class="token punctuation">.</span>rgb <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>styles<span class="token punctuation">.</span>fill<span class="token punctuation">,</span>\n  color<span class="token punctuation">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>\n  paddingTop<span class="token punctuation">:</span> <span class="token string">"20px"</span><span class="token punctuation">,</span>\n  fontSize<span class="token punctuation">:</span> <span class="token string">"30px"</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> AnimationExample<span class="token punctuation">;</span>\n'}});
//# sourceMappingURL=16-eab306d913b972e059f2.js.map