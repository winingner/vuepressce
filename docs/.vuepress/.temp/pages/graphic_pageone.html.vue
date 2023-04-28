<template><div><h1 id="图形界面-设置" tabindex="-1"><a class="header-anchor" href="#图形界面-设置" aria-hidden="true">#</a> 图形界面 - 设置</h1>
<p>参照版本：</p>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>图形界面主要用来展示数据。</p>
<p>操作逻辑与Windows的 <strong>画图</strong> 相似，可以通过鼠标 点击、拖动 的方式构建展示页面。</p>
<p>可以在这里用 <strong>文字</strong>、<strong>表格</strong>、<strong>图表</strong> 等形式展示数据，也可以 <strong>创建页面</strong>、<strong>切换页面</strong> 在多个页面中展示数据。</p>
<p>页面位置： <strong>配置</strong> - <strong>用户界面</strong> - <strong>设置</strong>。</p>
<p><img src="/assets/img/graphicpage/001.png" alt="初始界面"></p>
<h2 id="操作流程" tabindex="-1"><a class="header-anchor" href="#操作流程" aria-hidden="true">#</a> 操作流程</h2>
<p>按流程为 <strong>打开或新建页面</strong> 、<strong>修改页面和控件</strong> 、<strong>保存与运行页面</strong> 。</p>
<ul>
<li>
<p><strong>打开或新建页面</strong>（选一个）</p>
<ul>
<li>
<p><strong>打开页面</strong>： 点击左上角 <strong>【打开】</strong>  图标按钮，将弹出 <strong>打开</strong> 弹窗，鼠标选择页面如screen_0，点击蓝色 <strong>打开页面</strong> 按钮，将打开所选页面。</p>
<p><img src="/assets/img/graphicpage/42114.png" alt="图形界面 - 打开页面"></p>
</li>
<li>
<p><strong>新建页面</strong>： 点击左上角 <strong>【打开】</strong>  图标按钮，将弹出 <strong>打开</strong> 弹窗，选择 <strong>新建页面</strong> 标签，点击 <strong>新建页面</strong> 蓝色按钮，将新建一个黑色页面。</p>
<p><img src="/assets/img/graphicpage/420120.png" alt="图形界面 - 新建页面"></p>
</li>
</ul>
</li>
<li>
<p><strong>修改页面和控件</strong></p>
<p>分为 <strong>修改页面</strong> 、 <strong>创建和修改控件</strong> 。</p>
<ul>
<li>
<p><strong>修改页面</strong>： 点击黑色页面，在右侧设置页面属性(<RouterLink to="/graphic_pageone.html#%E9%A1%B5%E9%9D%A2%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE">详情</RouterLink>)。</p>
</li>
<li>
<p><strong>创建和修改控件</strong>： 点击左侧的控件工具，然后在页面内点击、拖动、松开,可创建控件。使用左侧 <strong>指针工具</strong> 可以选中控件查看其属性、拖动控件、按下 <strong>delete</strong> 删除控件，在右侧可修改属性(<RouterLink to="/graphic_pageone.html#%E5%B7%A5%E5%85%B7%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE">详情</RouterLink>)、修改对齐(<RouterLink to="/graphic_pageone.html#%E5%B7%A5%E5%85%B7%E5%AF%B9%E9%BD%90%E8%AE%BE%E7%BD%AE">详情</RouterLink>)。</p>
</li>
</ul>
</li>
<li>
<p><strong>保存与运行页面</strong></p>
<ul>
<li>
<p><strong>保存页面</strong>： 点击右上角 <strong>【保存】</strong> 图标按钮，将出现 <strong>另存为</strong> 弹窗，可设置页面类型与名称，点击确定；如果是保存过的页面，再次点击 <strong>【保存】</strong> 图标按钮，将直接保存。</p>
</li>
<li>
<p><strong>运行页面</strong>： 点击右上角 <strong>【运行】</strong> 图标按钮，可查看页面运行效果，需要修改则返回 <strong>UI组态页面</strong>（网页标签名称为 UI组态 ），进行修改，再依次点击右上角 <strong>【保存】</strong> 、<strong>【运行】</strong> 图标按钮，查看修改，直到页面无问题。</p>
</li>
</ul>
<p><img src="/assets/img/graphicpage/4201206.png" alt="图形界面 - 新建页面"></p>
</li>
</ul>
<h2 id="页面结构" tabindex="-1"><a class="header-anchor" href="#页面结构" aria-hidden="true">#</a> 页面结构</h2>
<ul>
<li>
<p><strong>中部</strong>：  页面在中部灰色区内展示。</p>
</li>
<li>
<p><strong>中上</strong>： 是<strong>页面管理区</strong>，详细见 <RouterLink to="/graphic_pageone.html#%E9%A1%B5%E9%9D%A2%E7%AE%A1%E7%90%86">页面管理</RouterLink>。</p>
<ul>
<li>
<p><strong>中上左侧</strong>： <strong>【打开】</strong>  图标按钮，用于 打开、导入、删除或新建文件。<strong>导航</strong> 可用于 <strong>切换</strong> 或 <strong>关闭</strong> 页面。</p>
</li>
<li>
<p><strong>中上右侧</strong>： <strong>【保存】</strong> 图标按钮用于 <strong>保存</strong> 文件； <strong>【运行】</strong> 图标按钮用于展示页面。</p>
</li>
</ul>
</li>
<li>
<p><strong>左侧</strong>： 是 <strong>工具栏</strong>。</p>
<p>具体有指针、点、线、圆、矩形、文字、图片、输入框、按钮、开关、表格、图表、地图、树状图、页面嵌入、视频(萤石云)、视频(微控RTSP视频服务)2、回放视频(微控RTSP视频服务)、自定义工具，详细见 <RouterLink to="/graphic_pageone.html#%E5%B7%A5%E5%85%B7%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE">工具属性配置</RouterLink>。</p>
</li>
<li>
<p><strong>右侧</strong>： 是 <strong>属性栏和对齐</strong>。</p>
<ul>
<li>
<p><strong>属性栏</strong>： 有两列，第一列是属性名称，第二列可以设置属性,详细设置见 <RouterLink to="/graphic_pageone.html#%E9%A1%B5%E9%9D%A2%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE">页面属性配置</RouterLink> 和 <RouterLink to="/graphic_pageone.html#%E5%B7%A5%E5%85%B7%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE">工具属性配置</RouterLink>。</p>
</li>
<li>
<p><strong>对齐</strong>： 可以调整控件位置，详细设置见 <RouterLink to="/graphic_pageone.html#%E5%B7%A5%E5%85%B7%E5%AF%B9%E9%BD%90%E8%AE%BE%E7%BD%AE">工具对齐设置</RouterLink>。</p>
</li>
</ul>
</li>
</ul>
<h2 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置" aria-hidden="true">#</a> 页面配置</h2>
<h3 id="页面管理" tabindex="-1"><a class="header-anchor" href="#页面管理" aria-hidden="true">#</a> 页面管理</h3>
<p>点击左上角的 <strong>【打开】</strong>  图标按钮,会弹出 <strong>打开</strong> 窗口。</p>
<p><img src="/assets/img/graphicpage/000.png" alt="图形界面 - 打开1"></p>
<p>打开窗口有三个标签： <strong>打开页面</strong>、<strong>新建页面</strong>、<strong>本地页面</strong>。</p>
<ul>
<li>
<p><strong>新建页面</strong></p>
<p>选择 <strong>新建页面标签</strong> ，点击 <strong>新建页面</strong> 按钮。</p>
<p><img src="/assets/img/graphicpage/004.png" alt="图形界面 - 新建1"></p>
<p>新建后的页面</p>
<p><img src="/assets/img/graphicpage/001.png" alt="图形界面 - 新建2"></p>
</li>
<li>
<p><strong>打开页面</strong></p>
<p>在默认的打开窗口，如果保存过页面，将有页签，点击页签（灰色框），点击 <strong>打开页面</strong> 按钮。</p>
<p><img src="/assets/img/graphicpage/42114.png" alt="图形界面 - 打开页面"></p>
</li>
<li>
<p><strong>页面导入</strong></p>
<p>点击 <strong>本地页面</strong> 标签，点击选择 <strong>选择文件</strong> 按钮，打开后，点击 <strong>导入页面</strong> 按钮。</p>
<p><img src="/assets/img/graphicpage/008.png" alt="图形界面 - 新建3"></p>
</li>
<li>
<p><strong>删除页面</strong></p>
<p><strong>打开</strong> 窗口中，在选中页面标签时，弹窗里 <strong>灰色框</strong> 有三个图标，功能分别是 <strong>设置为主页</strong> 、 <strong>设置为登录页</strong>、 <strong>删除页面</strong>，点击 <strong>删除页面</strong> 可以实现删除效果。</p>
<p><img src="/assets/img/graphicpage/007.png" alt="图形界面 - 打开2"></p>
</li>
<li>
<p><strong>保存</strong></p>
<p>直接点击 <strong>【保存】</strong> 图标按钮，未保存过将弹出 <strong>另存为</strong> 窗口，可设置类型与名称，确定保存；保存过将直接保存到线上。</p>
<p><img src="/assets/img/graphicpage/0001.png" alt="图形界面 - 新建3"></p>
<p>将鼠标移动到页面右上角的 <strong>【保存】</strong> 图标按钮上，会出现下拉框 里面有 <strong>发布、另存为、保存到本地</strong> 选项。</p>
<ul>
<li>
<p><strong>另存为</strong>： 将弹出 <strong>另存为</strong> 弹窗，可设置类型与名称。</p>
</li>
<li>
<p><strong>保存到本地</strong>： 将页面以 <strong>.wk.page</strong> 的格式直接保存到本地。</p>
</li>
<li>
<p><strong>发布</strong>： 具有提示作用。</p>
</li>
</ul>
</li>
<li>
<p><strong>运行</strong></p>
<p>可以预览页面。</p>
</li>
</ul>
<h3 id="页面属性配置" tabindex="-1"><a class="header-anchor" href="#页面属性配置" aria-hidden="true">#</a> 页面属性配置</h3>
<p><strong>打开页面</strong> 或 <strong>新建页面</strong> (步骤见 <RouterLink to="/graphic_pageone.html#%E9%A1%B5%E9%9D%A2%E7%AE%A1%E7%90%86">页面管理</RouterLink>)后，右侧属性是 <strong>页面属性</strong>：</p>
<ul>
<li>
<p><strong>名称</strong>： 可修改的页面名称，在打开页面时选择的页签名称。</p>
</li>
<li>
<p><strong>标题</strong>： 运行页面后网页标签的名称。</p>
</li>
<li>
<p><strong>宽高</strong>： 页面的宽度与高度。</p>
</li>
<li>
<p><strong>宽度自适应</strong>： 选择宽度自适应，依次点击 <strong>【保存】</strong> 、 <strong>【运行】</strong> 图标按钮，页面宽度 <strong>等于</strong> 浏览器展示界面宽度，高度将等比放大。</p>
<p><img src="/assets/img/graphicpage/009.png" alt="图形界面 - 宽度自适应1"></p>
</li>
<li>
<p><strong>高度自适应</strong>： 页面高度 <strong>等于</strong> 浏览器展示界面高度，宽度将等比放大。</p>
</li>
<li>
<p><strong>背景颜色</strong>：点击背景颜色设置，会弹出 <strong>选择颜色</strong> 窗口，可以直接在色板中选择颜色或设置颜色编码，点击确定完成设置。</p>
<p><img src="/assets/img/graphicpage/011.png" alt="图形界面 - 背景颜色"></p>
</li>
<li>
<p><strong>背景图片</strong>： 设置背景图片，会弹出 <strong>选择图片</strong> 窗口，点击 <strong>选择文件</strong> 按钮，然后点击 <strong>【上传】</strong>、<strong>【刷新】</strong> 图标按钮，在下方的列表里选择已经上传的图片，如果列表中有自己需要的图片可以不用上传，点击确定可以完成设置。</p>
<p>如果要删除已经上传的图片，选择要删除的图片，点击 <strong>【删除】</strong> 图标按钮，将上传的图片删除，点击确定完成设置。</p>
<p><img src="/assets/img/graphicpage/012.png" alt="图形界面 - 背景图片"></p>
</li>
<li>
<p><strong>图片大小</strong> 设置会弹出下拉框：</p>
<ul>
<li>
<p><strong>原大小</strong>： 以图片本身大小展示到页面中。</p>
</li>
<li>
<p><strong>适应屏幕</strong>： 图片宽高将进行等比例缩放，以适应屏幕，往往无法充满屏幕。</p>
</li>
<li>
<p><strong>覆盖屏幕</strong>： 以图片的短边为基准进行缩放，缩放后 <strong>图片短边的长度</strong> 等于短边所对应容器边的长度，<strong>图片长边</strong> 缩放后多余的部分进行去除。</p>
</li>
<li>
<p><strong>拉伸</strong>： 直接对图片进行宽高拉伸，以适应页面容器，容易使图片变形。</p>
</li>
</ul>
</li>
<li>
<p><strong>图片重复</strong> 设置会弹出下拉框：</p>
<ul>
<li>
<p><strong>水平和垂直</strong>： 页面内水平和垂直方向上,根据图片大小和页面的剩余空间,进行重复排列。</p>
</li>
<li>
<p><strong>水平</strong>： 页面内水平方向上,根据图片大小和页面的水平剩余空间,进行重复排列。</p>
</li>
<li>
<p><strong>垂直</strong>： 页面内垂直方向上,根据图片大小和页面的垂直剩余空间,进行重复排列。</p>
</li>
<li>
<p><strong>不重复</strong>： 图片不进行重复排列。</p>
</li>
</ul>
</li>
<li>
<p><strong>图片位置</strong>： 设置会弹出下拉框，选项位置有上左、上中、上右等，会根据图片和页面的大小安排位置。一般在图片较小时可以很好的展示。</p>
</li>
<li>
<p><strong>刷新频率</strong>： 屏幕每秒画面被刷新的次数，刷新频率默认为1000，可以设置。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次打开页面时进行的一次加载所执行的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击页面所执行的事件。</p>
</li>
</ul>
<h3 id="页面操作" tabindex="-1"><a class="header-anchor" href="#页面操作" aria-hidden="true">#</a> 页面操作</h3>
<ul>
<li>
<p><strong>创建控件</strong></p>
<p>点击所需控件，然后在中部页面中，点击鼠标左键，拖动，松开，成功创建控件。</p>
</li>
<li>
<p><strong>删除控件</strong></p>
<p>点击页面中的控件，按键 <strong>BackSpace</strong> 或 <strong>Delete</strong>，会弹出 确定要删除控件的弹出框，选择确定。</p>
</li>
<li>
<p><strong>修改控件</strong></p>
<p>使用指针工具，选择控件，可以在右侧属性和对齐中修改控件。</p>
</li>
<li>
<p><strong>移动控件</strong></p>
<p>选择指针工具，鼠标直接点击控件不松，拖动到合适位置，松开。</p>
</li>
<li>
<p><strong>复制控件</strong></p>
<p>点击页面中的控件，<strong>Ctrl + C</strong> ,成功复制所选控件。</p>
</li>
<li>
<p><strong>粘贴控件</strong></p>
<p><strong>Ctrl + V</strong></p>
</li>
<li>
<p><strong>剪切控件</strong></p>
<p>点击页面中的控件，<strong>Ctrl + X</strong>，即可剪切所选控件。</p>
</li>
<li>
<p><strong>撤销</strong></p>
<p><strong>Ctrl + Z</strong></p>
</li>
<li>
<p><strong>保存（另存、导出、发布）</strong></p>
<p>直接保存 <strong>Ctrl + S</strong> 或 鼠标移动到 页面管理的右侧 <strong>【保存】</strong> 图标按钮上，会出现下拉框，里面有</p>
<ul>
<li>
<p><strong>另存</strong>： 可以保存为线上文件。</p>
</li>
<li>
<p><strong>导出</strong>： 即 <strong>保存到本地</strong>，可以直接以 <strong>wk.page文件</strong> 的格式保存到本地。</p>
</li>
<li>
<p><strong>发布</strong>： 发布到线上，具有提示作用。</p>
</li>
</ul>
</li>
<li>
<p><strong>预览</strong></p>
<p><strong>F5</strong> 可以直接运行。或者鼠标点击 页面管理的右侧 <strong>【运行】</strong> 图标按钮上，也可运行。</p>
</li>
<li>
<p><strong>切换或关闭页面</strong></p>
<p>在界面的中上位置，有导航，可以选择以切换页面，点击叉号可关闭页面。</p>
</li>
</ul>
<h2 id="工具属性配置" tabindex="-1"><a class="header-anchor" href="#工具属性配置" aria-hidden="true">#</a> 工具属性配置</h2>
<h3 id="指针" tabindex="-1"><a class="header-anchor" href="#指针" aria-hidden="true">#</a> 指针</h3>
<p>指针可以对页面中的工具框选或点选，从而对工具进行复制、粘贴、删除、剪切、移动等操作。</p>
<p><img src="/assets/img/graphicpage/013.png" alt="图形界面 - 指针"></p>
<h3 id="点" tabindex="-1"><a class="header-anchor" href="#点" aria-hidden="true">#</a> 点</h3>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
<p>设置点x = 100 ,y = 100,这里的x是点到y轴的垂直距离,y是点到x轴的垂直距离。</p>
<p><img src="/assets/img/graphicpage/019.png" alt="图形界面 - 点"></p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级。</p>
<p>设置蓝点z为11，设置红点z为10,蓝点将遮住红点。</p>
<p><img src="/assets/img/graphicpage/018.png" alt="图形界面 - 点"></p>
</li>
<li>
<p><strong>大小</strong>： 设置点的大小，点就像缩小的圆。</p>
<p>点原大小10</p>
<p><img src="/assets/img/graphicpage/014.png" alt="图形界面 - 点"></p>
<p>设置点大小为100后，相当于放大了点的半径。</p>
<p><img src="/assets/img/graphicpage/015.png" alt="图形界面 - 点"></p>
</li>
<li>
<p><strong>填充颜色</strong>： 设置点本身的颜色为蓝色。</p>
<p><img src="/assets/img/graphicpage/015.png" alt="图形界面 - 点"></p>
</li>
<li>
<p><strong>边框宽度</strong>： 边框是点边缘轮廓线,边框宽度即轮廓线粗细。</p>
</li>
<li>
<p><strong>边框颜色</strong>： 设置点的边框颜色。</p>
<p>需要先设置边框宽度才可以看到边框颜色。</p>
<p>如设置边框宽度为3。再设置边框颜色为红色，红色的圆环部分即边框。</p>
<p><img src="/assets/img/graphicpage/017.png" alt="图形界面 - 边框颜色"></p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>刷新事件</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<h3 id="线" tabindex="-1"><a class="header-anchor" href="#线" aria-hidden="true">#</a> 线</h3>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>x1,y1</strong>： 线段一端点的的坐标。</p>
<p>现有线段控件。</p>
<p><img src="/assets/img/graphicpage/020.png" alt="图形界面 - 线"></p>
<p>改变 x1 = 0 , y1 = 0 后</p>
<p><img src="/assets/img/graphicpage/021.png" alt="图形界面 - 线"></p>
</li>
<li>
<p><strong>x2,y2</strong>： 线段另端点的的坐标,与x1,y1同理。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级,可以参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink> 效果。</p>
</li>
<li>
<p><strong>颜色</strong>： 线段的颜色。</p>
<p><img src="/assets/img/graphicpage/020.png" alt="图形界面 - 线"></p>
</li>
<li>
<p><strong>线宽</strong>： 线段的粗细。</p>
<p>以前线宽为2，现在设置线宽为10，线段变粗。</p>
<p><img src="/assets/img/graphicpage/023.png" alt="图形界面 - 线"></p>
</li>
<li>
<p><strong>虚线间隔</strong>： 决定线段间断程度，虚线间隔越小,里面的线越密集,虚线间隔越大,里面的线越稀疏。</p>
<p><img src="/assets/img/graphicpage/024.png" alt="图形界面 - 线"></p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>刷新事件</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<h3 id="圆" tabindex="-1"><a class="header-anchor" href="#圆" aria-hidden="true">#</a> 圆</h3>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级。效果可以参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>  的设置。</p>
</li>
<li>
<p><strong>宽</strong>： 图中指针选中圆后显示的矩形框的宽，水平最长距离。</p>
</li>
<li>
<p><strong>高</strong>： 图中指针选中圆后显示的矩形框的高，垂直方向最长距离，当宽高相同时圆为正圆。</p>
</li>
<li>
<p><strong>填充颜色</strong>： 圆本身的颜色,设置为蓝色。</p>
<p><img src="/assets/img/graphicpage/0025.png" alt="图形界面 - 圆"></p>
</li>
<li>
<p><strong>边框颜色</strong>： 圆轮廓线的颜色，设置边框颜色为红色，设置边框宽度为3。</p>
<p><img src="/assets/img/graphicpage/0026.png" alt="图形界面 - 圆"></p>
</li>
<li>
<p><strong>边框宽度</strong>： 圆轮廓线的粗细程度。</p>
</li>
<li>
<p><strong>虚线间隔</strong>： 是圆轮廓线的间隔，设置虚线间隔为3。</p>
<p><img src="/assets/img/graphicpage/025.png" alt="图形界面 - 圆"></p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>刷新事件</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<h3 id="矩形" tabindex="-1"><a class="header-anchor" href="#矩形" aria-hidden="true">#</a> 矩形</h3>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级。可以参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink> 的效果。</p>
</li>
<li>
<p><strong>宽</strong>： 矩形的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 矩形的高度。</p>
</li>
<li>
<p><strong>圆角半径</strong>： 在一定程度上表示矩形四角转为圆弧的程度，圆角半径越大四角向内凹陷的越大。</p>
<p><img src="/assets/img/graphicpage/026.png" alt="图形界面 - 矩形1"></p>
</li>
<li>
<p><strong>填充颜色</strong>： 设置矩形的颜色。</p>
<p>设置填充颜色为蓝色</p>
<p><img src="/assets/img/graphicpage/027.png" alt="图形界面 - 矩形2"></p>
</li>
<li>
<p><strong>边框颜色</strong>： 矩形轮廓线的颜色，设置边框宽度为3，边框颜色为红色。</p>
<p><img src="/assets/img/graphicpage/028.png" alt="图形界面 - 矩形3"></p>
</li>
<li>
<p><strong>边框宽度</strong>： 矩形轮廓线宽度。</p>
</li>
<li>
<p><strong>虚线间隔</strong>： 矩形轮廓线成为虚线后的间断程度，设置为3。</p>
<p><img src="/assets/img/graphicpage/029.png" alt="图形界面 - 矩形4"></p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>刷新事件</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<h3 id="文字" tabindex="-1"><a class="header-anchor" href="#文字" aria-hidden="true">#</a> 文字</h3>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级。可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 文本框宽度，默认是auto，如果不设置值，输入字时将一直沿横向排列，不会换行。</p>
</li>
<li>
<p><strong>高</strong>： 文本框高度，默认是auto。</p>
</li>
<li>
<p><strong>文字</strong>： 可以设置文本内容。</p>
</li>
<li>
<p><strong>方向</strong>： 改变文本框的方向 <strong>横向</strong>、<strong>纵向</strong> ，其中的文字排列方向变了。如果是字母，字母的排列和朝向将发生变化，将字体颜色设置为白色#fff。</p>
<p>开始状态</p>
<p><img src="/assets/img/graphicpage/030.png" alt="图形界面 - 文字"></p>
<p>改变方向后,文字的方向改变,字母的朝向改变。</p>
<p><img src="/assets/img/graphicpage/031.png" alt="图形界面 - 文字"></p>
</li>
<li>
<p><strong>文本对齐</strong>： 可以设置文本框内文字的对齐方式，可以为 <strong>左对齐</strong>、<strong>右对齐</strong>、<strong>局中对齐</strong>。</p>
<p>可以先设置文本框的 <strong>宽</strong> 与 <strong>高</strong>。</p>
<p>设置为左对齐(默认)</p>
<p><img src="/assets/img/graphicpage/032.png" alt="图形界面 - 文字"></p>
<p>设置为右对齐</p>
<p><img src="/assets/img/graphicpage/033.png" alt="图形界面 - 文字"></p>
<p>设置为居中对齐</p>
<p><img src="/assets/img/graphicpage/034.png" alt="图形界面 - 文字"></p>
</li>
<li>
<p><strong>文本颜色</strong>： 设置文本颜色，弹出选择颜色窗口,设置文本颜色为红色。</p>
<p><img src="/assets/img/graphicpage/0037.png" alt="图形界面 - 文字"></p>
</li>
<li>
<p><strong>字号</strong>： 字的大小。</p>
</li>
<li>
<p><strong>粗体</strong>： 字体的粗细。</p>
</li>
<li>
<p><strong>行高</strong>：可以设置文本行基线间的距离，简单来说行高是指文字尺寸与行距之间的和。</p>
</li>
<li>
<p><strong>背景颜色</strong>： 设置背景颜色，弹出窗口进行颜色选择，设置为白色。</p>
<p><img src="/assets/img/graphicpage/036.png" alt="图形界面 - 文字"></p>
</li>
<li>
<p><strong>边框宽度</strong>： 文本框的粗细。</p>
<p>需要设置边框颜色，如为红色,设置边框宽度为6。</p>
<p><img src="/assets/img/graphicpage/037.png" alt="图形界面 - 文字"></p>
</li>
<li>
<p><strong>边框样式</strong>： 有 <strong>虚线</strong> 、<strong>实线</strong> 、<strong>双线</strong>。</p>
<p>实线在边框宽度已经展示。</p>
<p>虚线是边框实线间断性的样式。</p>
<p><img src="/assets/img/graphicpage/038.png" alt="图形界面 - 文字"></p>
<p>双线相当于实线剩下边。</p>
<p><img src="/assets/img/graphicpage/039.png" alt="图形界面 - 文字"></p>
</li>
<li>
<p><strong>边框颜色</strong>： 可以对文本框边框设置颜色。</p>
</li>
<li>
<p><strong>关联点</strong>：  点击 <strong>关联点</strong> ,弹出 <strong>点名</strong> 窗口,填写点名,点击确定可以将文字与点进行关联。</p>
<p><img src="/assets/img/graphicpage/040.png" alt="图形界面 - 文字"></p>
</li>
<li>
<p><strong>小数位数</strong>： 若文本框内仅有数字，可以设置小数位数，来对数值进行小数位数限制。</p>
<p>设置文本值为3.123456,小数位数是5,可以看到文本框内的数值，进行了四舍五入。</p>
<p><img src="/assets/img/graphicpage/041.png" alt="图形界面 - 文字"></p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>刷新事件</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<h3 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h3>
<p>点击左侧 <strong>图片控件</strong>,将弹出选择图片窗口，点击选择文件，可以选择本地文件，点击 <strong>【上传】</strong>，在列表中选择已上传的文件，确定。</p>
<p><img src="/assets/img/graphicpage/043.png" alt="图形界面 - 图片2"></p>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级。可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 可以设置图片的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 可以设置图片的高度。</p>
</li>
<li>
<p><strong>锁定比例</strong>： 锁定图片比例以至于不会出现图片变形，改变图片宽，高将随之以相同的比例变换。改变高，宽将随之以相同的比例变换。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>刷新事件</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<h3 id="输入框" tabindex="-1"><a class="header-anchor" href="#输入框" aria-hidden="true">#</a> 输入框</h3>
<p>输入框的种类有 <strong>文本</strong> 、<strong>下拉菜单</strong> 、<strong>复选框</strong> 、 <strong>单选框</strong> 。</p>
<ol>
<li><strong>文本</strong>： 位于图片控件下方，会弹出列表，选择 <strong>文本</strong> 控件。</li>
</ol>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 输入框的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 输入框的高度。</p>
</li>
<li>
<p><strong>预期提示</strong>： 可以设置文本框内的提示信息，类似于input标签里的 <strong>placeholder</strong> 属性。</p>
<p><img src="/assets/img/graphicpage/044.png" alt="图形界面 - 文本"></p>
</li>
<li>
<p><strong>值</strong>： 可以设置文本框的内容。</p>
</li>
<li>
<p><strong>字号</strong>： 字体大小。</p>
</li>
<li>
<p><strong>输入类型</strong>： 设置会出现下拉框，选项有 <strong>文字</strong> 、<strong>数字</strong> 、<strong>密码</strong> 、<strong>日期</strong> 、<strong>时间</strong> 、<strong>日期时间</strong> 、<strong>点名</strong> 、<strong>点名历史</strong>
、 <strong>点名报警</strong>。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
<li>
<p><strong>修改事件</strong>： 在修改 <strong>文本输入框</strong> 内容后会触发的事件。</p>
</li>
</ul>
<ol start="2">
<li><strong>下拉菜单</strong>： 位于图片控件下方，会弹出列表，选择 <strong>下拉菜单</strong> 控件，创建。</li>
</ol>
<p><img src="/assets/img/graphicpage/045.png" alt="图形界面 - 下拉菜单1"></p>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 下拉菜单的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 下拉菜单的高度。</p>
</li>
<li>
<p><strong>多选模式</strong>： 开启多选模式前，需要设置 <strong>选项</strong> 属性，可参考下一个属性 <strong>选项</strong>,设置了多选模式,下拉菜单将不具弹出下拉框的功能,只具有鼠标滑动选择功能。</p>
<p><img src="/assets/img/graphicpage/047.png" alt="图形界面 - 下拉菜单2"></p>
</li>
<li>
<p><strong>选项</strong>： 点击 <strong>选项</strong> 的修改，弹出 <strong>选项</strong> 弹出框，可以增加或删除选项，如添加a,b,c,d。</p>
<p><img src="/assets/img/graphicpage/046.png" alt="图形界面 - 下拉菜单3"></p>
</li>
<li>
<p><strong>值</strong>： 在设置的选项中，默认展示的 <strong>选项</strong>。</p>
<p>在已经设置选项为 a、b、c、d的情况下，没设置值 或 设置的值为选项中不存在的，选项框展示为空，设置选项中有的值，会展示出来，如b。</p>
<p><img src="/assets/img/graphicpage/0046.png" alt="图形界面 - 下拉菜单4"></p>
</li>
<li>
<p><strong>字号</strong>： 字体大小。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>刷新事件</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
<li>
<p><strong>修改事件</strong>： 在修改 <strong>下拉菜单选项</strong> 后会触发的事件。</p>
</li>
</ul>
<ol start="3">
<li><strong>复选框</strong>：</li>
</ol>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 复选框可以看为正方形,宽即为边长。</p>
</li>
<li>
<p><strong>值</strong>： 可控制复选框的选中。</p>
<p><img src="/assets/img/graphicpage/048.png" alt="图形界面 - 复选框"></p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
<li>
<p><strong>修改事件</strong>： 在修改 <strong>复选框选中状态</strong> 后会触发的事件。</p>
</li>
</ul>
<ol start="4">
<li><strong>单选框</strong>：</li>
</ol>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 选中单选框后，有一个白色的虚框线，边长即为宽。若将单选框看为圆形，直径即为宽。</p>
</li>
<li>
<p><strong>组</strong>： 设置 <strong>组</strong> 属性值为同一个时,就为同一个组,在这一个组里只能选中一个。设置三个单选框，<strong>组</strong> 属性值都设为1，无论如何都只能选一个。</p>
<p><img src="/assets/img/graphicpage/049.png" alt="图形界面 - 单选框"></p>
<p>再加一个单选框， <strong>组</strong> 属性值为2，此时仍可选中</p>
<p><img src="/assets/img/graphicpage/050.png" alt="图形界面 - 单选框"></p>
</li>
<li>
<p><strong>值</strong>： 当值选中时，单选框就为选中状态。</p>
<p><img src="/assets/img/graphicpage/051.png" alt="图形界面 - 单选框"></p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
<li>
<p><strong>修改事件</strong>： 在修改 <strong>单选框选中状态</strong> 后会触发的事件。</p>
</li>
</ul>
<h3 id="按钮" tabindex="-1"><a class="header-anchor" href="#按钮" aria-hidden="true">#</a> 按钮</h3>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 按钮的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 按钮的高度。</p>
</li>
<li>
<p><strong>主题</strong>： 有 <strong>默认</strong> 、<strong>普通</strong> 、<strong>成功</strong> 、 <strong>一般</strong> 、<strong>警告</strong> 、 <strong>危险</strong> 、<strong>链接</strong>。</p>
<p><img src="/assets/img/graphicpage/052.png" alt="图形界面 - 按钮"></p>
</li>
<li>
<p><strong>文字</strong>： 按钮上的文字设置。</p>
</li>
<li>
<p><strong>字号</strong>： 字体大小。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>刷新事件</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<h3 id="开关" tabindex="-1"><a class="header-anchor" href="#开关" aria-hidden="true">#</a> 开关</h3>
<ol>
<li><strong>开关(水平)</strong></li>
</ol>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 控件x轴方向的长度。</p>
</li>
<li>
<p><strong>分闸颜色</strong>： 闸分开时设置的颜色。</p>
</li>
<li>
<p><strong>合闸颜色</strong>： 闸闭合时设置的颜色。</p>
</li>
<li>
<p><strong>状态</strong>： 从左到右依次为分闸 、 合闸 、未知。</p>
<p><img src="/assets/img/graphicpage/053.png" alt="图形界面 - 开关"></p>
</li>
<li>
<p><strong>线条宽度</strong>： 闸的线条宽度。</p>
</li>
<li>
<p><strong>遥信点</strong>： 设置摇信点，弹出 <strong>点名</strong> 窗口，设置点名，点击确定，可以关联到点。遥信点是对诸如告警情况、开关位置或阀门位置等状态信息的远程监视的设备。</p>
<p><img src="/assets/img/graphicpage/054.png" alt="图形界面 - 开关"></p>
</li>
<li>
<p><strong>分闸值</strong>： 设备分闸时候的值。</p>
</li>
<li>
<p><strong>合闸值</strong>： 设备合闸时候的值。</p>
</li>
<li>
<p><strong>遥控点</strong>： 设置遥控点,弹出点名窗口，设置点名，点击确定。遥控点是对远程的一些开关控制设备进行远程控制的设备。</p>
<p><img src="/assets/img/graphicpage/055.png" alt="图形界面 - 开关"></p>
</li>
<li>
<p><strong>控制分值</strong>： 控制分闸时候的值。</p>
</li>
<li>
<p><strong>控制合值</strong>： 控制合闸时候的值。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<ol start="2">
<li><strong>开关(垂直)</strong></li>
</ol>
<p>开关属性与 <strong>开关(水平)</strong> 的属性一致,类似 <strong>开关(水平)</strong> 逆时针旋转90度的样子。</p>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 控件x轴方向的长度。</p>
</li>
<li>
<p><strong>分闸颜色</strong>： 这个闸分开时设置的颜色。</p>
</li>
<li>
<p><strong>合闸颜色</strong>： 这个闸闭合时设置的颜色。</p>
</li>
<li>
<p><strong>状态</strong>： 分闸 、 合闸 、未知。</p>
</li>
<li>
<p><strong>线条宽度</strong>： 闸的线条宽度。</p>
</li>
<li>
<p><strong>摇信点</strong>： 设置摇信点，弹出 <strong>点名</strong> 窗口，设置点名，确定，可以关联到点。</p>
</li>
<li>
<p><strong>分闸值</strong>： 设备分闸时候的值。</p>
</li>
<li>
<p><strong>合闸值</strong>： 设备合闸时候的值。</p>
</li>
<li>
<p><strong>遥控点</strong>： 设置遥控点,弹出点名窗口，设置点名，确定。</p>
</li>
<li>
<p><strong>控制分值</strong>： 控制分闸时候的值。</p>
</li>
<li>
<p><strong>控制合值</strong>： 控制合闸时候的值。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
<p><img src="/assets/img/graphicpage/056.png" alt="图形界面 - 开关"></p>
</li>
</ul>
<ol start="3">
<li><strong>断路器</strong></li>
</ol>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 控件x轴方向的长度。</p>
</li>
<li>
<p><strong>高</strong>： 控件y轴方向的长度。</p>
</li>
<li>
<p><strong>分闸颜色</strong>： 这个闸分开时设置的颜色。</p>
</li>
<li>
<p><strong>合闸颜色</strong>： 这个闸闭合时设置的颜色。</p>
</li>
<li>
<p><strong>状态</strong>： 分闸 、 合闸 、未知。表现控件颜色分别为绿色、红色、灰色。</p>
</li>
<li>
<p><strong>摇信点</strong>： 设置摇信点，弹出 <strong>点名</strong> 窗口，设置点名，确定，可以关联到点。</p>
</li>
<li>
<p><strong>分闸值</strong>： 设备分闸时候的值。</p>
</li>
<li>
<p><strong>合闸值</strong>： 设备合闸时候的值。</p>
</li>
<li>
<p><strong>遥控点</strong>： 设置遥控点,弹出点名窗口，设置点名，确定。</p>
</li>
<li>
<p><strong>控制分值</strong>： 控制分闸时候的值。</p>
</li>
<li>
<p><strong>控制合值</strong>： 控制合闸时候的值。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
<p><img src="/assets/img/graphicpage/057.png" alt="图形界面 - 开关"></p>
</li>
</ul>
<ol start="4">
<li><strong>开关(自定义)</strong>。</li>
</ol>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 控件x轴方向的长度。</p>
</li>
<li>
<p><strong>高</strong>： 控件y轴方向的长度。</p>
</li>
<li>
<p><strong>分闸颜色</strong>： 这个闸分开时设置的颜色。</p>
</li>
<li>
<p><strong>合闸颜色</strong>： 这个闸闭合时设置的颜色。</p>
</li>
<li>
<p><strong>状态</strong>： 分闸 、 合闸 、未知。</p>
</li>
<li>
<p><strong>摇信点</strong>： 设置摇信点，弹出 <strong>点名</strong> 窗口，设置点名，确定，可以关联到点。</p>
</li>
<li>
<p><strong>分闸值</strong>： 设备分闸时候的值。</p>
</li>
<li>
<p><strong>合闸值</strong>： 设备合闸时候的值。</p>
</li>
<li>
<p><strong>遥控点</strong>： 设置遥控点,弹出点名窗口，设置点名，确定。</p>
</li>
<li>
<p><strong>控制分值</strong>： 控制分闸时候的值。</p>
</li>
<li>
<p><strong>控制合值</strong>： 控制合闸时候的值。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
<p><img src="/assets/img/graphicpage/058.png" alt="图形界面 - 开关"></p>
</li>
</ul>
<h3 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h3>
<ol>
<li><strong>表格整体</strong></li>
</ol>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级。</p>
</li>
<li>
<p><strong>宽</strong>： 表格整体的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 表格整体的高度。</p>
</li>
<li>
<p><strong>背景颜色</strong>： 可以设置表格背景的颜色。</p>
</li>
<li>
<p><strong>行数</strong>： 表格行的数目。</p>
</li>
<li>
<p><strong>列数</strong>： 表格列的数目。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
<p><img src="/assets/img/graphicpage/059.png" alt="图形界面 - 表格"></p>
</li>
</ul>
<ol start="2">
<li><strong>单元格</strong></li>
</ol>
<p>双击单元格将展示出单元格的属性</p>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>文本对齐</strong>： 单元格内文本水平方向的对齐方式，<strong>左对齐</strong> 、<strong>居中对齐</strong> 、<strong>右对齐</strong>。</p>
</li>
<li>
<p><strong>垂直对齐</strong>： 单元格内文本垂直方向的对齐方式，<strong>顶对齐</strong> 、<strong>底对齐</strong>、<strong>居中对齐</strong>。</p>
</li>
<li>
<p><strong>文本颜色</strong>： 单元格内文字的颜色。</p>
</li>
<li>
<p><strong>字号</strong>： 字体的大小。</p>
</li>
<li>
<p><strong>粗体</strong>： 设置文字是否加粗。</p>
</li>
<li>
<p><strong>背景颜色</strong>： 可以设置单元格内背景衬托色。</p>
<p>设置为蓝色</p>
<p><img src="/assets/img/graphicpage/117.png" alt="图形界面 - 背景颜色"></p>
</li>
<li>
<p><strong>边框宽度</strong>： 即单元格的边框向框内和框外扩展的程度。</p>
<p>设置边框宽度为10</p>
<p><img src="/assets/img/graphicpage/1171.png" alt="图形界面 - 背景颜色"></p>
</li>
<li>
<p><strong>边框样式</strong>： 有 实线 、虚线、双线。</p>
<p>实线在<strong>边框宽度</strong>已经展示。</p>
<p>虚线是间断的实线边框样式。</p>
<p><img src="/assets/img/graphicpage/1172.png" alt="图形界面 - 边框样式"></p>
<p>双线是实线边框只剩部分边的特殊样式。</p>
<p><img src="/assets/img/graphicpage/1173.png" alt="图形界面 - 边框样式"></p>
</li>
<li>
<p><strong>边框颜色</strong>： 单元格轮廓线的颜色。</p>
<p><img src="/assets/img/graphicpage/1174.png" alt="图形界面 - 边框颜色"></p>
</li>
<li>
<p><strong>文字</strong>： 单元格的内容。</p>
</li>
<li>
<p><strong>关联点</strong>： 关联的点位，设置会弹出点名弹窗，可以添加点名。</p>
<p><img src="/assets/img/graphicpage/1175.png" alt="图形界面 - 关联点"></p>
</li>
<li>
<p><strong>小数位数</strong> ；可以限制单元格内的小数位数。</p>
<p>设置单元格内容为1.123456，小数位数设置为5，此时单元格内显示为1.12346。</p>
<p><img src="/assets/img/graphicpage/1176.png" alt="图形界面 - 小数位数"></p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<h3 id="图表" tabindex="-1"><a class="header-anchor" href="#图表" aria-hidden="true">#</a> 图表</h3>
<ol>
<li><strong>柱状图</strong></li>
</ol>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 图表整体的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 图表整体的高度。</p>
</li>
<li>
<p><strong>主题</strong>： 普通 、 深色 、 深蓝 、 灰 、 网格亮 、网格 、 sand - signika 、天空 、青字。</p>
</li>
<li>
<p><strong>堆叠</strong>： 实现堆叠的效果，同组数据将堆叠在一个柱形上，可以方便的观察组内数据分别的占比情况。</p>
<p>原图</p>
<p><img src="/assets/img/graphicpage/063.png" alt="图形界面 - 图表堆叠"></p>
<p>将 <strong>堆叠</strong> 设置为 <strong>选中</strong> 状态</p>
<p><img src="/assets/img/graphicpage/064.png" alt="图形界面 - 图表堆叠"></p>
</li>
<li>
<p><strong>标题</strong>： 图表上方的大标题。</p>
</li>
<li>
<p><strong>副标题</strong>： 位于标题下方的小标题。</p>
</li>
<li>
<p><strong>y轴标题</strong>： y轴左侧的标题，用于解释y轴变量。</p>
</li>
<li>
<p><strong>导出</strong>： 设置是否有导出按钮,导出按钮位于图表的右上角,点击导出按钮将弹出下拉框,选项： <strong>View in full screen</strong> 全屏展示、 <strong>打印图表</strong> 、<strong>下载PNG文件</strong> 、 <strong>下载JPEG文件</strong> 、<strong>下载PDF文件</strong> 、<strong>下载SVG文件</strong>。</p>
<p><img src="/assets/img/graphicpage/065.png" alt="图形界面 - 图表导出"></p>
</li>
<li>
<p><strong>图例</strong>： 图例是集中于图表一角或一侧的图表上各种符号和颜色所代表内容与指标的说明，有助于更好的认识图表,可以设置是否有 <strong>图例属性</strong>。
设置完图例后，查看图表下方的 <strong>Data</strong> 即为图例</p>
</li>
<li>
<p><strong>提示框</strong>： 设置鼠标移到图中柱形上是否有提示。</p>
</li>
<li>
<p><strong>背景颜色</strong>： 图表背后的衬托色。</p>
<p>设置背景颜色为蓝色</p>
<p><img src="/assets/img/graphicpage/066.png" alt="图形界面 - 背景颜色"></p>
</li>
<li>
<p><strong>颜色列表</strong>： 是给柱状图中的柱子颜色设置。</p>
<p><img src="/assets/img/graphicpage/060.png" alt="图形界面 - 颜色列表"></p>
</li>
<li>
<p><strong>数据</strong>： 给图表每列设置数据。设置会弹出 <strong>数据</strong> 窗口。</p>
<p><img src="/assets/img/graphicpage/061.png" alt="图形界面 - 数据"></p>
</li>
<li>
<p><strong>关联点</strong>： 设置关联点，将弹出 <strong>点列表</strong> 窗口。</p>
<p><img src="/assets/img/graphicpage/062.png" alt="图形界面 - 关联点"></p>
</li>
<li>
<p><strong>关联模式</strong>： 下拉选项中有 <strong>推进</strong> 和 <strong>变化</strong> 。</p>
</li>
<li>
<p><strong>点名显示</strong>： 下拉选项中有 <strong>点名</strong> 、<strong>名称</strong> 、<strong>设备名称</strong> 、<strong>链接名</strong>、 <strong>通道名</strong>。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<ol start="2">
<li><strong>条状图</strong></li>
</ol>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 图表整体的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 图表整体的高度。</p>
</li>
<li>
<p><strong>主题</strong>： 普通 、 深色 、 深蓝 、 灰 、 网格亮 、网格 、 sand - signika 、天空 、青字。</p>
</li>
<li>
<p><strong>堆叠</strong>： 实现堆叠的效果，同组数据将堆叠在一个柱形上，可以方便的观察组内数据分别的占比情况。</p>
<p>原图</p>
<p><img src="/assets/img/graphicpage/067.png" alt="图形界面 - 堆叠"></p>
<p>选中 <strong>堆叠</strong> 属性</p>
<p><img src="/assets/img/graphicpage/068.png" alt="图形界面 - 堆叠"></p>
</li>
<li>
<p><strong>标题</strong>： 图表上方的大标题。</p>
</li>
<li>
<p><strong>副标题</strong>： 位于标题下方的小标题。</p>
</li>
<li>
<p><strong>y轴标题</strong>： y轴左侧的标题，用于解释y轴变量。</p>
</li>
<li>
<p><strong>导出</strong>： 设置是否有导出按钮,导出按钮位于图表的右上角,点击导出按钮将弹出下拉框,选项： <strong>View in full screen</strong> 全屏展示、 <strong>打印图表</strong> 、<strong>下载PNG文件</strong> 、 <strong>下载JPEG文件</strong> 、<strong>下载PDF文件</strong> 、<strong>下载SVG文件</strong>。</p>
<p><img src="/assets/img/graphicpage/069.png" alt="图形界面 - 导出"></p>
</li>
<li>
<p><strong>图例</strong>： 图例是集中于图表一角或一侧的图表上各种符号和颜色所代表内容与指标的说明，有助于更好的认识图表,可以设置是否有 <strong>图例属性</strong>。
设置完图例后，查看图表下方的 <strong>Data</strong> 即为图例</p>
</li>
<li>
<p><strong>提示框</strong>： 设置鼠标移到图中柱形上是否有提示。</p>
</li>
<li>
<p><strong>背景颜色</strong>： 图表背后的衬托色。</p>
<p>设置背景色为蓝</p>
<p><img src="/assets/img/graphicpage/070.png" alt="图形界面 - 背景颜色"></p>
</li>
<li>
<p><strong>颜色列表</strong>： 用于给图中的条形设置颜色。</p>
<p><img src="/assets/img/graphicpage/071.png" alt="图形界面 - 背景颜色"></p>
</li>
<li>
<p><strong>数据</strong>： 用于给图表添加数据。</p>
<p><img src="/assets/img/graphicpage/072.png" alt="图形界面 - 数据"></p>
</li>
<li>
<p><strong>关联点</strong>： 设置关联点，将弹出 <strong>点列表</strong> 窗口。</p>
<p><img src="/assets/img/graphicpage/073.png" alt="图形界面 - 关联点"></p>
</li>
<li>
<p><strong>关联模式</strong>： 下拉选项中有 <strong>推进</strong> 和 <strong>变化</strong> 。</p>
</li>
<li>
<p><strong>点名显示</strong>： 下拉选项中有 <strong>点名</strong> 、<strong>名称</strong> 、<strong>设备名称</strong> 、<strong>链接名</strong>、 <strong>通道名</strong>。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<ol start="3">
<li><strong>折线图</strong></li>
</ol>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 图表整体的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 图表整体的高度。</p>
</li>
<li>
<p><strong>主题</strong>： 普通 、 深色 、 深蓝 、 灰 、 网格亮 、网格 、 sand - signika 、天空 、青字。</p>
</li>
<li>
<p><strong>标题</strong>： 图表上方的大标题。</p>
</li>
<li>
<p><strong>副标题</strong>： 位于标题下方的小标题。</p>
</li>
<li>
<p><strong>y轴标题</strong>： y轴左侧的标题，用于解释y轴变量。</p>
</li>
<li>
<p><strong>导出</strong>： 设置是否有导出按钮,导出按钮位于图表的右上角,点击导出按钮将弹出下拉框,选项： <strong>View in full screen</strong> 全屏展示、 <strong>打印图表</strong> 、<strong>下载PNG文件</strong> 、 <strong>下载JPEG文件</strong> 、<strong>下载PDF文件</strong> 、<strong>下载SVG文件</strong>。</p>
<p><img src="/assets/img/graphicpage/074.png" alt="图形界面 - 导出"></p>
</li>
<li>
<p><strong>图例</strong>： 图例是集中于图表一角或一侧的图表上各种符号和颜色所代表内容与指标的说明，有助于更好的认识图表,可以设置是否有 <strong>图例属性</strong>。
设置完图例后，查看图表下方的 <strong>Data</strong> 即为图例</p>
</li>
<li>
<p><strong>提示框</strong>： 设置鼠标移到图中柱形上是否有提示。</p>
</li>
<li>
<p><strong>背景颜色</strong>： 图表背后的衬托色。</p>
<p>设置背景色为蓝色</p>
<p><img src="/assets/img/graphicpage/075.png" alt="图形界面 - 背景颜色"></p>
</li>
<li>
<p><strong>线宽</strong>： 折线的粗细。</p>
<p>原线宽为2，现在设置线宽为5</p>
<p><img src="/assets/img/graphicpage/076.png" alt="图形界面 - 线宽"></p>
</li>
<li>
<p><strong>标记点半径</strong>： 折线转折点的半径。</p>
<p>标记点半径由4设置为10。</p>
<p><img src="/assets/img/graphicpage/077.png" alt="图形界面 - 标记点半径"></p>
</li>
<li>
<p><strong>十字准线</strong>： 鼠标在移动到折线上的点时出现十字准线，可以很快的观察出对应x轴，y轴的值。</p>
<p><img src="/assets/img/graphicpage/0077.png" alt="图形界面 - 十字准线"></p>
</li>
<li>
<p><strong>整合标签</strong>： 当鼠标移动到点时，同列上的点也将一同展现出对应的图例值，y值和x值。</p>
<p><img src="/assets/img/graphicpage/0078.png" alt="图形界面 - 颜色列表"></p>
</li>
<li>
<p><strong>颜色列表</strong>： 用于设置折线颜色。</p>
<p><img src="/assets/img/graphicpage/078.png" alt="图形界面 - 颜色列表"></p>
</li>
<li>
<p><strong>数据</strong>： 用于设置折线图数据。</p>
<p>设置 <strong>数据</strong> 属性，会弹出 <strong>数据弹窗</strong> ，弹窗的顶部有x轴数据类型，可以选择 <strong>数字</strong> 或 <strong>时间</strong>。下方有 <strong>组名</strong> 和 <strong>数据列</strong> 设置。</p>
<p><img src="/assets/img/graphicpage/079.png" alt="图形界面 - 数据"></p>
</li>
<li>
<p><strong>关联点</strong>： 设置关联点，将弹出 <strong>点列表</strong> 窗口。</p>
<p><img src="/assets/img/graphicpage/080.png" alt="图形界面 - 关联点"></p>
</li>
<li>
<p><strong>点名显示</strong>： 下拉选项中有 <strong>点名</strong> 、<strong>名称</strong> 、<strong>设备名称</strong> 、<strong>链接名</strong>、 <strong>通道名</strong>。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<ol start="4">
<li><strong>曲线图</strong></li>
</ol>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 图表整体的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 图表整体的高度。</p>
</li>
<li>
<p><strong>主题</strong>： 普通 、 深色 、 深蓝 、 灰 、 网格亮 、网格 、 sand - signika 、天空 、青字。</p>
</li>
<li>
<p><strong>标题</strong>： 图表上方的大标题。</p>
</li>
<li>
<p><strong>副标题</strong>： 位于标题下方的小标题。</p>
</li>
<li>
<p><strong>y轴标题</strong>： y轴左侧的标题，用于解释y轴变量。</p>
</li>
<li>
<p><strong>导出</strong>： 设置是否有导出按钮,导出按钮位于图表的右上角,点击导出按钮将弹出下拉框,选项： <strong>View in full screen</strong> 全屏展示、 <strong>打印图表</strong> 、<strong>下载PNG文件</strong> 、 <strong>下载JPEG文件</strong> 、<strong>下载PDF文件</strong> 、<strong>下载SVG文件</strong>。</p>
<p><img src="/assets/img/graphicpage/081.png" alt="图形界面 - 导出"></p>
</li>
<li>
<p><strong>图例</strong>： 图例是集中于图表一角或一侧的图表上各种符号和颜色所代表内容与指标的说明，有助于更好的认识图表,可以设置是否有 <strong>图例属性</strong>。
设置完图例后，查看图表下方的 <strong>Data</strong> 即为图例</p>
</li>
<li>
<p><strong>提示框</strong>： 设置鼠标移到图中柱形上是否有提示。</p>
</li>
<li>
<p><strong>背景颜色</strong>： 图表背后的衬托色。</p>
<p>设置背景色为蓝色</p>
<p><img src="/assets/img/graphicpage/082.png" alt="图形界面 - 背景颜色"></p>
</li>
<li>
<p><strong>线宽</strong>： 折线的粗细。</p>
<p>原线宽为2，现在设置线宽为5</p>
<p><img src="/assets/img/graphicpage/083.png" alt="图形界面 - 线宽"></p>
</li>
<li>
<p><strong>标记点半径</strong>： 折线转折点的半径。</p>
<p>标记点半径由4设置为10。</p>
<p><img src="/assets/img/graphicpage/084.png" alt="图形界面 - 标记点半径"></p>
</li>
<li>
<p><strong>十字准线</strong>： 鼠标在移动到折线上的点时出现十字准线，可以很快的观察出对应x轴，y轴的值。</p>
<p><img src="/assets/img/graphicpage/0084.png" alt="图形界面 - 标记点半径"></p>
</li>
<li>
<p><strong>整合标签</strong>： 当鼠标移动到点时，同列上的点也将一同展现出对应的图例值，y值和x值。</p>
<p><img src="/assets/img/graphicpage/0085.png" alt="图形界面 - 整合标签"></p>
</li>
<li>
<p><strong>颜色列表</strong>： 用于设置折线颜色。</p>
<p><img src="/assets/img/graphicpage/085.png" alt="图形界面 - 颜色列表"></p>
</li>
<li>
<p><strong>数据</strong>： 用于设置曲线图数据。</p>
<p>设置 <strong>数据</strong> 属性，会弹出 <strong>数据弹窗</strong> ，弹窗的顶部有x轴数据类型，可以选择 <strong>数字</strong> 或 <strong>时间</strong>。下方有 <strong>组名</strong> 和 <strong>数据列</strong> 设置。</p>
<p><img src="/assets/img/graphicpage/086.png" alt="图形界面 - 数据"></p>
</li>
<li>
<p><strong>关联点</strong>： 设置关联点，将弹出 <strong>点列表</strong> 窗口。</p>
<p><img src="/assets/img/graphicpage/087.png" alt="图形界面 - 关联点"></p>
</li>
<li>
<p><strong>点名显示</strong>： 下拉选项中有 <strong>点名</strong> 、<strong>名称</strong> 、<strong>设备名称</strong> 、<strong>链接名</strong>、 <strong>通道名</strong>。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<ol start="5">
<li><strong>面积图</strong></li>
</ol>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 图表整体的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 图表整体的高度。</p>
</li>
<li>
<p><strong>主题</strong>： 普通 、 深色 、 深蓝 、 灰 、 网格亮 、网格 、 sand - signika 、天空 、青字。</p>
</li>
<li>
<p><strong>堆叠</strong>： 实现堆叠的效果，此时的y轴变长，这组数据将叠加在一起，可以方便的看出它每部分的占比情况。</p>
<p>原图</p>
<p><img src="/assets/img/graphicpage/088.png" alt="图形界面 - 堆叠"></p>
<p>设置堆叠效果后</p>
<p><img src="/assets/img/graphicpage/089.png" alt="图形界面 - 堆叠"></p>
</li>
<li>
<p><strong>标题</strong>： 图表上方的大标题。</p>
</li>
<li>
<p><strong>副标题</strong>： 位于标题下方的小标题。</p>
</li>
<li>
<p><strong>y轴标题</strong>： y轴左侧的标题，用于解释y轴变量。</p>
</li>
<li>
<p><strong>导出</strong>： 设置是否有导出按钮,导出按钮位于图表的右上角,点击导出按钮将弹出下拉框,选项： <strong>View in full screen</strong> 全屏展示、 <strong>打印图表</strong> 、<strong>下载PNG文件</strong> 、 <strong>下载JPEG文件</strong> 、<strong>下载PDF文件</strong> 、<strong>下载SVG文件</strong>。</p>
<p><img src="/assets/img/graphicpage/090.png" alt="图形界面 - 导出"></p>
</li>
<li>
<p><strong>图例</strong>： 图例是集中于图表一角或一侧的图表上各种符号和颜色所代表内容与指标的说明，有助于更好的认识图表,可以设置是否有 <strong>图例属性</strong>，设置完图例后，查看图表下方的 <strong>Data</strong> 即为图例。</p>
</li>
<li>
<p><strong>提示框</strong>： 设置鼠标移到图中柱形上是否有提示。</p>
</li>
<li>
<p><strong>背景颜色</strong>： 图表背后的衬托色。</p>
<p>设置背景色为蓝色</p>
<p><img src="/assets/img/graphicpage/091.png" alt="图形界面 - 背景颜色"></p>
</li>
<li>
<p><strong>线宽</strong>： 折线的粗细。</p>
<p>原线宽为2，现在设置线宽为5</p>
<p><img src="/assets/img/graphicpage/092.png" alt="图形界面 - 线宽"></p>
</li>
<li>
<p><strong>标记点半径</strong>： 折线转折点的半径。</p>
<p>标记点半径由4设置为10。</p>
<p><img src="/assets/img/graphicpage/093.png" alt="图形界面 - 标记点半径"></p>
</li>
<li>
<p><strong>十字准线</strong>： 鼠标在移动到折线上的点时出现十字准线，可以很快的观察出对应x轴，y轴的值。</p>
<p><img src="/assets/img/graphicpage/0093.png" alt="图形界面 - 十字准线"></p>
</li>
<li>
<p><strong>整合标签</strong>： 当鼠标移动到点时，同列上的点也将一同展现出对应的图例值，y值和x值。</p>
<p><img src="/assets/img/graphicpage/0094.png" alt="图形界面 - 整合标签"></p>
</li>
<li>
<p><strong>颜色列表</strong>： 用于设置折线颜色。</p>
<p><img src="/assets/img/graphicpage/094.png" alt="图形界面 - 颜色列表"></p>
</li>
<li>
<p><strong>基准值</strong>： 一条x轴方向的线，它对应y值是基准值。</p>
<p><strong>基准值</strong>由0改为10，图表将以y=10的基准线重构面积图。</p>
<p><img src="/assets/img/graphicpage/095.png" alt="图形界面 - 基准"></p>
</li>
<li>
<p><strong>数据</strong>： 用于设置面积图数据。</p>
<p>设置 <strong>数据</strong> 属性，会弹出 <strong>数据</strong> 弹窗，弹窗的顶部有x轴数据类型，可以选择 <strong>数字</strong> 或 <strong>时间</strong>。下方有 <strong>组名</strong> 和 <strong>数据列</strong> 设置。</p>
<p><img src="/assets/img/graphicpage/096.png" alt="图形界面 - 数据"></p>
</li>
<li>
<p><strong>关联点</strong>： 设置关联点，将弹出 <strong>点列表</strong> 窗口。</p>
<p><img src="/assets/img/graphicpage/097.png" alt="图形界面 - 关联点"></p>
</li>
<li>
<p><strong>点名显示</strong>： 下拉选项中有 <strong>点名</strong> 、<strong>名称</strong> 、<strong>设备名称</strong> 、<strong>链接名</strong>、 <strong>通道名</strong>。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<ol start="6">
<li><strong>曲线面积图</strong></li>
</ol>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 图表整体的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 图表整体的高度。</p>
</li>
<li>
<p><strong>主题</strong>： 普通 、 深色 、 深蓝 、 灰 、 网格亮 、网格 、 sand - signika 、天空 、青字。</p>
</li>
<li>
<p><strong>堆叠</strong>： 实现堆叠的效果，此时的y轴变长，这组数据将叠加在一起，可以方便的看出它每部分的占比情况。</p>
<p>原图</p>
<p><img src="/assets/img/graphicpage/098.png" alt="图形界面 - 堆叠"></p>
<p>选中对堆叠属性</p>
<p><img src="/assets/img/graphicpage/099.png" alt="图形界面 - 堆叠"></p>
</li>
<li>
<p><strong>标题</strong>： 图表上方的大标题。</p>
</li>
<li>
<p><strong>副标题</strong>： 位于标题下方的小标题。</p>
</li>
<li>
<p><strong>y轴标题</strong>： y轴左侧的标题，用于解释y轴变量。</p>
</li>
<li>
<p><strong>导出</strong>： 设置是否有导出按钮,导出按钮位于图表的右上角,点击导出按钮将弹出下拉框,选项： <strong>View in full screen</strong> 全屏展示、 <strong>打印图表</strong> 、<strong>下载PNG文件</strong> 、 <strong>下载JPEG文件</strong> 、<strong>下载PDF文件</strong> 、<strong>下载SVG文件</strong>。</p>
<p><img src="/assets/img/graphicpage/100.png" alt="图形界面 - 导出"></p>
</li>
<li>
<p><strong>图例</strong>： 图例是集中于图表一角或一侧的图表上各种符号和颜色所代表内容与指标的说明，有助于更好的认识图表,可以设置是否有 <strong>图例属性</strong>。设置完图例后，查看图表下方的 <strong>Data</strong> 即为图例。</p>
</li>
<li>
<p><strong>提示框</strong>： 设置鼠标移到图中柱形上是否有提示。</p>
</li>
<li>
<p><strong>背景颜色</strong>： 图表背后的衬托色。</p>
<p>设置背景色为蓝色</p>
<p><img src="/assets/img/graphicpage/101.png" alt="图形界面 - 背景颜色"></p>
</li>
<li>
<p><strong>线宽</strong>： 折线的粗细。</p>
<p>原线宽为2，现在设置线宽为5</p>
<p><img src="/assets/img/graphicpage/102.png" alt="图形界面 - 线宽"></p>
</li>
<li>
<p><strong>标记点半径</strong>： 折线转折点的半径。</p>
<p>标记点半径由4设置为10。</p>
<p><img src="/assets/img/graphicpage/103.png" alt="图形界面 - 标记点半径"></p>
</li>
<li>
<p><strong>十字准线</strong>： 鼠标在移动到折线上的点时出现十字准线，可以很快的观察出对应x轴，y轴的值。</p>
<p><img src="/assets/img/graphicpage/0103.png" alt="图形界面 - 十字准线"></p>
</li>
<li>
<p><strong>整合标签</strong>： 当鼠标移动到点时，同列上的点也将一同展现出对应的图例值，y值和x值。</p>
<p><img src="/assets/img/graphicpage/0104.png" alt="图形界面 - 整合标签"></p>
</li>
<li>
<p><strong>颜色列表</strong>： 用于设置折线颜色。</p>
<p><img src="/assets/img/graphicpage/104.png" alt="图形界面 - 颜色列表"></p>
</li>
<li>
<p><strong>基准值</strong>： 一条x轴方向的线，它对应的y值是基准值。</p>
<p><strong>基准值</strong>由0设置为10，面积图将重新构造。</p>
<p><img src="/assets/img/graphicpage/105.png" alt="图形界面 - 基准"></p>
</li>
<li>
<p><strong>数据</strong>： 用于设置曲线面积图数据。</p>
<p>设置 <strong>数据</strong> 属性，会弹出 <strong>数据弹窗</strong> ，弹窗的顶部有x轴数据类型，可以选择 <strong>数字</strong> 或 <strong>时间</strong>。下方有 <strong>组名</strong> 和 <strong>数据列</strong> 设置。</p>
<p><img src="/assets/img/graphicpage/107.png" alt="图形界面 - 数据"></p>
</li>
<li>
<p><strong>关联点</strong>： 设置关联点，将弹出 <strong>点列表</strong> 窗口。</p>
<p><img src="/assets/img/graphicpage/108.png" alt="图形界面 - 关联点"></p>
</li>
<li>
<p><strong>点名显示</strong>： 下拉选项中有 <strong>点名</strong> 、<strong>名称</strong> 、<strong>设备名称</strong> 、<strong>链接名</strong>、 <strong>通道名</strong>。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<ol start="7">
<li><strong>饼图</strong></li>
</ol>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 图表整体的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 图表整体的高度。</p>
</li>
<li>
<p><strong>主题</strong>： 普通 、 深色 、 深蓝 、 灰 、 网格亮 、网格 、 sand - signika 、天空 、青字。</p>
</li>
<li>
<p><strong>标题</strong>： 图表上方的大标题。</p>
</li>
<li>
<p><strong>副标题</strong>： 位于标题下方的小标题。</p>
</li>
<li>
<p><strong>导出</strong>： 设置是否有导出按钮,导出按钮位于图表的右上角,点击导出按钮将弹出下拉框,选项： <strong>View in full screen</strong> 全屏展示、 <strong>打印图表</strong> 、<strong>下载PNG文件</strong> 、 <strong>下载JPEG文件</strong> 、<strong>下载PDF文件</strong> 、<strong>下载SVG文件</strong>。</p>
<p><img src="/assets/img/graphicpage/109.png" alt="图形界面 - 导出"></p>
</li>
<li>
<p><strong>图例</strong>： 图例是集中于图表一角或一侧的图表上各种符号和颜色所代表内容与指标的说明，有助于更好的认识图表,可以设置是否有 <strong>图例属性</strong>。
设置完图例后，查看图表下方的 <strong>Data</strong> 即为图例。</p>
</li>
<li>
<p><strong>提示框</strong>： 设置鼠标移到图中柱形上是否有提示。</p>
</li>
<li>
<p><strong>数据标签</strong>： 可以选中 <strong>数据标签</strong> 属性，可以看到图表中的每个扇形都由线段指向一个标签。</p>
</li>
<li>
<p><strong>允许点选</strong>： 点击扇形区域，扇形将与圆分离。</p>
<p>点击蓝色区块</p>
<p><img src="/assets/img/graphicpage/110.png" alt="图形界面 - 允许点选"></p>
</li>
<li>
<p><strong>背景颜色</strong>： 图表背后的衬托色。</p>
<p>设置背景色为蓝色</p>
<p><img src="/assets/img/graphicpage/111.png" alt="图形界面 - 允许点选"></p>
</li>
<li>
<p><strong>颜色列表</strong>： 设置每个扇形的颜色。</p>
<p><img src="/assets/img/graphicpage/112.png" alt="图形界面 - 允许点选"></p>
</li>
<li>
<p><strong>内径大小</strong>： 可以在饼图中心空出一片空白的圆形区域。</p>
<p>设置内径大小为50</p>
<p><img src="/assets/img/graphicpage/113.png" alt="图形界面 - 内径大小"></p>
</li>
<li>
<p><strong>边框宽度</strong>： 可以设置饼图内扇形的间隔。</p>
<p>设置边框宽度为10</p>
<p><img src="/assets/img/graphicpage/114.png" alt="图形界面 - 边框宽度"></p>
</li>
<li>
<p><strong>数据</strong>： 用于设置饼图数据。</p>
<p>设置 <strong>数据</strong> 属性，会弹出 <strong>数据弹窗</strong> ，<strong>组名</strong> 和 <strong>数据列</strong> 设置。</p>
<p><img src="/assets/img/graphicpage/115.png" alt="图形界面 - 数据"></p>
</li>
<li>
<p><strong>关联点</strong>： 设置关联点，将弹出 <strong>点列表</strong> 窗口。</p>
<p><img src="/assets/img/graphicpage/116.png" alt="图形界面 - 关联点"></p>
</li>
<li>
<p><strong>点名显示</strong>： 下拉选项中有 <strong>点名</strong> 、<strong>名称</strong> 、<strong>设备名称</strong> 、<strong>链接名</strong>、 <strong>通道名</strong>。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<h3 id="地图" tabindex="-1"><a class="header-anchor" href="#地图" aria-hidden="true">#</a> 地图</h3>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 地图整体的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 地图整体的高度。</p>
</li>
<li>
<p><strong>主题</strong>： 幻影黑、月光银、远山黛、草色青等。</p>
</li>
<li>
<p><strong>基本设置</strong>： 点击 <strong>基本设置修改</strong>，将弹出 <strong>地图-基础设置</strong> 窗口。</p>
<p>里面可以设置 <strong>缩放</strong> 等级，缩放等级越大，离的越近，<strong>中心精度</strong> 、<strong>中心维度</strong>，是地图缩放的中心经度和纬度，可以直接使用鼠标移动，使用滑轮缩放。</p>
<p><img src="/assets/img/graphicpage/118.png" alt="图形界面 - 基本设置"></p>
</li>
<li>
<p><strong>标记点</strong>： 修改，会弹出 <strong>地图-标记点设置</strong>，里面可以设置 <strong>经度</strong>、<strong>纬度</strong>、<strong>提示</strong>、<strong>点击事件</strong>。确定。</p>
<p>进入到<strong>地图-标记点设置</strong>弹窗里，鼠标点击地图的位置，经度、纬度将自动显示。</p>
<p>设置提示，在<strong>运行</strong>后，鼠标移动到此位置，将出现提示，点击事件则是点击后触发的事件。</p>
<p><img src="/assets/img/graphicpage/119.png" alt="图形界面 - 基本设置"></p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<h3 id="树状图" tabindex="-1"><a class="header-anchor" href="#树状图" aria-hidden="true">#</a> 树状图</h3>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 树状图整体的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 树状图整体的高度。</p>
</li>
<li>
<p><strong>背景颜色</strong>： 设置背后衬托的颜色。</p>
<p><img src="/assets/img/graphicpage/120.png" alt="图形界面 - 背景颜色"></p>
</li>
<li>
<p><strong>文本颜色</strong>： 树状图文本的颜色，可以设置所有文本的颜色，不过是次一级，在 <strong>数据属性</strong> 中也可以修改文本颜色，等级较高，可以替换这个颜色。</p>
<p>设置文本的颜色，首先需要添加文本，可以添加树状图的单元，可以参考后面的 <strong>数据</strong> 点击修改。</p>
<p>文本设成红色</p>
<p><img src="/assets/img/graphicpage/121.png" alt="图形界面 - 文本颜色"></p>
</li>
<li>
<p><strong>图标</strong>： 添加图标效果，在树状图文字的前方会出现一个小图标。</p>
<p><img src="/assets/img/graphicpage/122.png" alt="图形界面 - 图标"></p>
</li>
<li>
<p><strong>多选框</strong>： 添加多选框，在树状图文字的前方会出现一个多选框。</p>
<p><img src="/assets/img/graphicpage/123.png" alt="图形界面 - 多选框"></p>
</li>
<li>
<p><strong>数据</strong>： 点击 <strong>数据属性</strong> 进行修改，弹出 <strong>树-数据设置</strong> 弹窗。</p>
<p>点击节点，添加，可以在本节点的分支上增加一个新的节点，点击确定。</p>
<p><img src="/assets/img/graphicpage/124.png" alt="图形界面 - 数据"></p>
<p>在 <strong>树-数据设置</strong> 弹窗中，点击节点，点击删除，就可以删除当前节点，当前节点的分支也将不存在。</p>
<p>在 <strong>树-数据设置</strong> 弹窗中，点击节点，右侧有 <strong>名称</strong> 可以修改节点的名称，<strong>文本颜色</strong> 可以修改字体的颜色，<strong>背景颜色</strong> 可以修改包含字体的小灰框的颜色。<strong>点击事件</strong> 可以在点击此树状图节点时触发事件，<strong>选中事件</strong> 可以在选中此树状图节点时触发事件，然后点击<strong>修改</strong> - <strong>确定</strong>。</p>
<p><img src="/assets/img/graphicpage/125.png" alt="图形界面 - 数据"></p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
</ul>
<h3 id="页面嵌入" tabindex="-1"><a class="header-anchor" href="#页面嵌入" aria-hidden="true">#</a> 页面嵌入</h3>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 控件整体的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 控件整体的高度。</p>
</li>
<li>
<p><strong>背景颜色</strong>： 可以改变控件的总体颜色。</p>
<p>添加控件，设置背景颜色</p>
<p><img src="/assets/img/graphicpage/126.png" alt="图形界面 - 背景颜色"></p>
</li>
<li>
<p><strong>地址</strong>： 另一个页面中地址栏中的地址，目的是为了实现联系。</p>
<p>新建一个页面，添加一个圆形。</p>
<p><img src="/assets/img/graphicpage/127.png" alt="图形界面 - 地址"></p>
<p>运行此页面，将网页地址栏中的地址如端口号后面的 /bin/web.wk?web=ScreenOperate&amp;type=web&amp;screen=screen_1&amp;debug=true，是你自己的网址。复制粘贴到有 <strong>页面嵌入</strong> 控件的 <strong>地址</strong> 属性里，运行。</p>
<p>可以看到，其实页面嵌入的是粘贴的网址页面，由于页面嵌入控件小于粘贴的网址页面，所以页面嵌入控件出现了滑动条。</p>
<p><img src="/assets/img/graphicpage/129.png" alt="图形界面 - 地址"></p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<h3 id="视频-萤石云" tabindex="-1"><a class="header-anchor" href="#视频-萤石云" aria-hidden="true">#</a> 视频-萤石云</h3>
<p>可以在 <strong>维护</strong> 模式中，选择萤石服务，添加相应数据，参考目录中 <RouterLink to="/ezviz.html">萤石服务配置</RouterLink>。</p>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 控件整体的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 控件整体的高度。</p>
</li>
<li>
<p><strong>背景颜色</strong>： 可设置的本身的颜色。</p>
<p><img src="/assets/img/graphicpage/130.png" alt="图形界面 - 背景颜色"></p>
</li>
<li>
<p><strong>账号</strong>： 根据组态模式下，添加的萤石云账号名称，选择对应即可。</p>
</li>
<li>
<p><strong>模板</strong>： 选项有 <strong>极简版</strong> 、<strong>标准版</strong> 、<strong>安防版</strong>。如果配置了云存储 或者 有本地存储（SD卡/NVR），将模板设置为安防版，可以查看存储录像。</p>
</li>
<li>
<p><strong>设备序列号</strong>： 可以在 萤石开发者服务 – 我的资源 – 设备列表 页面找到，播放哪个就填入哪个。</p>
</li>
<li>
<p><strong>验证码</strong>： 默认可以在 摄像头或硬盘录像机 的机身上找到（验证码可以被修改）。</p>
</li>
<li>
<p><strong>通道号</strong>： 可以在 萤石开发者服务 – 我的资源 – 设备列表 页面找到，播放哪个就填入哪个。</p>
</li>
<li>
<p><strong>清晰度</strong>： 选项有 <strong>流畅</strong> 、<strong>高清</strong>。</p>
</li>
<li>
<p><strong>自动播放</strong>： 直接播放。</p>
</li>
<li>
<p><strong>声音</strong>： 选中即为开。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>屏幕刷新</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<h3 id="视频微控rtsp视频服务2" tabindex="-1"><a class="header-anchor" href="#视频微控rtsp视频服务2" aria-hidden="true">#</a> 视频微控RTSP视频服务2</h3>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 控件整体的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 控件整体的高度。</p>
</li>
<li>
<p><strong>服务地址</strong>：</p>
</li>
<li>
<p><strong>RTSP地址</strong>：</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
</ul>
<h3 id="回放视频微控rtsp视频服务" tabindex="-1"><a class="header-anchor" href="#回放视频微控rtsp视频服务" aria-hidden="true">#</a> 回放视频微控RTSP视频服务</h3>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 控件整体的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 控件整体的高度。</p>
</li>
<li>
<p><strong>服务地址</strong>：</p>
</li>
<li>
<p><strong>RTSP地址</strong>：</p>
</li>
<li>
<p><strong>录像时间</strong>： 时间选择。</p>
</li>
<li>
<p><strong>跳过音频</strong>： 跳过声音和视频。</p>
</li>
<li>
<p><strong>自动播放</strong>： 直接播放。</p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
</ul>
<h3 id="自定义" tabindex="-1"><a class="header-anchor" href="#自定义" aria-hidden="true">#</a> 自定义</h3>
<p>在控件中可以编写代码。</p>
<ul>
<li>
<p><strong>ID</strong>： 唯一标识，用于锁定控件和代码处理。</p>
</li>
<li>
<p><strong>xy</strong>：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。</p>
</li>
<li>
<p><strong>z</strong>： 用于控制控件先后,有些类似z-index层级，可参考 <RouterLink to="/graphic_pageone.html#%E7%82%B9">点z属性</RouterLink>。</p>
</li>
<li>
<p><strong>宽</strong>： 控件整体的宽度。</p>
</li>
<li>
<p><strong>高</strong>： 控件整体的高度。</p>
</li>
<li>
<p><strong>背景颜色</strong>： 自定义控件的颜色。</p>
</li>
<li>
<p><strong>Code</strong>： 在自定义页面中编写代码，可以是HTML、CSS、Javascript、jquery。</p>
<p>编写代码</p>
<p><img src="/assets/img/graphicpage/151.png" alt="图形界面 - 编写代码"></p>
<p>运行后</p>
<p><img src="/assets/img/graphicpage/152.png" alt="图形界面 - 编写代码"></p>
</li>
<li>
<p><strong>锁定</strong>： 给控件设置锁定后,使用 <strong>指针</strong> 工具将不能拖动控件。</p>
</li>
<li>
<p><strong>隐藏</strong>： 给控件设置隐藏后，点击 <strong>运行</strong> 图标按钮，运行后的页面此控件 <strong>隐藏</strong> 了。。</p>
</li>
<li>
<p><strong>加载事件</strong>： 每次开启页面时进行的一次加载所触发的事件。</p>
</li>
<li>
<p><strong>刷新事件</strong>： 屏幕刷新控件所触发的事件。</p>
</li>
<li>
<p><strong>点击事件</strong>： 点击控件所触发的事件。</p>
</li>
</ul>
<h2 id="工具对齐设置" tabindex="-1"><a class="header-anchor" href="#工具对齐设置" aria-hidden="true">#</a> 工具对齐设置</h2>
<p><strong>布局方式介绍</strong>： 将不动的矩形称为 <strong>基准矩形</strong>，将移动的矩形称为 <strong>移动矩形</strong>，在以下布局方式中会用到。</p>
<h3 id="对齐方式" tabindex="-1"><a class="header-anchor" href="#对齐方式" aria-hidden="true">#</a> 对齐方式</h3>
<p>初始界面</p>
<p><img src="/assets/img/graphicpage/131.png" alt="图形界面 - 对齐方式"></p>
<ul>
<li>
<p><strong>左对齐</strong></p>
<p>按住 <strong>Shift</strong> 点击为基准的矩形，松开 <strong>Shift</strong>,点击需要移动的矩形，点击 <strong>左对齐</strong>，另一个矩形将以基准矩形的左边对齐。</p>
<p><img src="/assets/img/graphicpage/132.png" alt="图形界面 - 左对齐"></p>
</li>
<li>
<p><strong>水平居中对齐</strong></p>
<p>按住 <strong>Shift</strong> 点击以之为基准的矩形，松开 <strong>Shift</strong>,点击需要移动的矩形，点击 <strong>水平居中对齐</strong>，移动矩形将会移动，使得基准矩形的垂直平分线平分移动矩形。</p>
<p><img src="/assets/img/graphicpage/133.png" alt="图形界面 - 水平局中对齐"></p>
</li>
<li>
<p><strong>右对齐</strong></p>
<p>按住 <strong>Shift</strong> 点击为基准的矩形，松开 <strong>Shift</strong>,点击需要移动的矩形，点击 <strong>右对齐</strong>，移动矩形将以基准矩形的右边对齐。</p>
<p><img src="/assets/img/graphicpage/134.png" alt="图形界面 - 右对齐"></p>
</li>
<li>
<p><strong>顶对齐</strong></p>
<p>按住 <strong>Shift</strong> 点击为基准的矩形，松开 <strong>Shift</strong>,点击需要移动的矩形，点击 <strong>顶对齐</strong>，移动矩形将以基准矩形的顶边对齐。</p>
<p><img src="/assets/img/graphicpage/135.png" alt="图形界面 - 顶对齐"></p>
</li>
<li>
<p><strong>垂直居中对齐</strong></p>
<p>按住 <strong>Shift</strong> 点击为基准的矩形，松开 <strong>Shift</strong>,点击需要移动的矩形，点击 <strong>垂直居中对齐</strong>，移动矩形将会移动，使得基准矩形的水平平分线平分移动矩形。</p>
<p><img src="/assets/img/graphicpage/136.png" alt="图形界面 - 顶对齐"></p>
</li>
<li>
<p><strong>底对齐</strong></p>
<p>按住 <strong>Shift</strong> 点击为基准的矩形，松开 <strong>Shift</strong>,点击需要移动的矩形，点击 <strong>底对齐</strong>，移动矩形将以基准矩形的底边对齐。</p>
<p><img src="/assets/img/graphicpage/137.png" alt="图形界面 - 底对齐"></p>
</li>
</ul>
<h3 id="分布方式" tabindex="-1"><a class="header-anchor" href="#分布方式" aria-hidden="true">#</a> 分布方式</h3>
<p>三个矩形的初始摆放位置。</p>
<p><img src="/assets/img/graphicpage/0138.png" alt="图形界面 - 分布方式"></p>
<ul>
<li>
<p><strong>顶部分布</strong></p>
<p>框选三个矩形，选择 <strong>顶部分布</strong>，如果给三个矩形从上到下进行编号一二三。</p>
<p>只有二号会移动，在垂直方向上，一号的上边缘到二号的上边缘距离 <strong>=</strong> 二号的上边缘到三号上边缘的距离</p>
<p><img src="/assets/img/graphicpage/138.png" alt="图形界面 - 顶部分布"></p>
</li>
<li>
<p><strong>垂直居中分布</strong></p>
<p>框选三个矩形，选择 <strong>垂直居中分布</strong>，如果给三个矩形从上到下进行编号一二三。</p>
<p>只有二号会移动，在垂直方向上 ，一号垂直方向中间点到二号垂直方向中间点的距离 <strong>=</strong> 二号垂直方向中间点到三号垂直方向中间点的距离。</p>
<p><img src="/assets/img/graphicpage/139.png" alt="图形界面 - 垂直居中分布"></p>
</li>
<li>
<p><strong>底部分布</strong></p>
<p>选中三个矩形，选择 <strong>底部分布</strong>，如果给三个矩形从上到下进行编号一二三。</p>
<p>只有二号会移动，在垂直方向上，一号底部到二号底部的距离 <strong>=</strong> 二号底部到三号底部的距离。</p>
<p><img src="/assets/img/graphicpage/140.png" alt="图形界面 - 底部分布"></p>
</li>
<li>
<p><strong>左侧分布</strong></p>
<p>选中三个矩形，选择 <strong>左侧分布</strong>，如果给三个矩形从左到右进行编号一二三。</p>
<p>只有二号会移动，在水平方向上，一号左侧到二号左侧的距离 <strong>=</strong> 二号左侧到三号左侧的距离。</p>
<p><img src="/assets/img/graphicpage/141.png" alt="图形界面 - 左侧分布"></p>
</li>
<li>
<p><strong>水平居中分布</strong></p>
<p>选中三个矩形，选择 <strong>水平居中分布</strong>，如果给三个矩形从左到右进行编号一二三。</p>
<p>只有二号会移动，在水平方向上，一号水平方向中间到二号水平方向中间的距离 <strong>=</strong> 二号水平方向中间到三号水平方向中间的距离。</p>
<p><img src="/assets/img/graphicpage/142.png" alt="图形界面 - 水平居中分布"></p>
</li>
<li>
<p><strong>右侧分布</strong></p>
<p>选中三个矩形，选择 <strong>右侧分布</strong>，如果给三个矩形从左到右进行编号一二三。</p>
<p>只有二号会移动，在水平方向上，一号右边缘到二号右边缘的距离 <strong>=</strong> 二号右边缘到三号右边缘的距离。</p>
<p><img src="/assets/img/graphicpage/143.png" alt="图形界面 - 右侧分布"></p>
</li>
</ul>
<h3 id="匹配方式" tabindex="-1"><a class="header-anchor" href="#匹配方式" aria-hidden="true">#</a> 匹配方式</h3>
<p>初始界面</p>
<p><img src="/assets/img/graphicpage/0144.png" alt="图形界面 - 匹配方式"></p>
<ul>
<li>
<p><strong>匹配宽度</strong></p>
<p>选中三个矩形，选择 <strong>匹配宽度</strong>，三个矩形的宽都将变为 矩形宽最宽的那条边。宽将一致。</p>
<p><img src="/assets/img/graphicpage/144.png" alt="图形界面 - 匹配宽度"></p>
</li>
<li>
<p><strong>匹配高度</strong></p>
<p>选中三个矩形，选择 <strong>匹配高度</strong>，三个矩形的高都将变为 矩形高最高的那条边。高将一致。</p>
<p><img src="/assets/img/graphicpage/145.png" alt="图形界面 - 匹配高度"></p>
</li>
<li>
<p><strong>匹配宽度和高度</strong></p>
<p>选中三个矩形，选择 <strong>匹配宽度和高度</strong>，将变为相同的形状，三个矩形的宽都将变为 矩形宽最宽的那条边。宽将一致；三个矩形的高都将变为 矩形高最高的那条边。高将一致。</p>
<p><img src="/assets/img/graphicpage/146.png" alt="图形界面 - 匹配宽度和高度"></p>
</li>
</ul>
<h3 id="间隔方式" tabindex="-1"><a class="header-anchor" href="#间隔方式" aria-hidden="true">#</a> 间隔方式</h3>
<p>原图</p>
<p><img src="/assets/img/graphicpage/0148.png" alt="图形界面 - 原图"></p>
<ul>
<li>
<p><strong>垂直平均间隔</strong></p>
<p>选中三个矩形，选择 <strong>垂直平均间隔</strong>，如果给三个矩形从上到下进行编号一二三，中间的矩形，垂直方向移动，使得垂直方向上一号到二号的距离 <strong>=</strong> 二号到三号的距离。</p>
<p><img src="/assets/img/graphicpage/148.png" alt="图形界面 - 垂直平均间隔"></p>
</li>
<li>
<p><strong>水平平均间隔</strong></p>
<p>选中三个矩形，选择 <strong>水平平均间隔</strong>，如果给三个矩形从左到右进行编号一二三，中间的矩形，水平方向移动，使得水平方向上一号到二号的距离 <strong>=</strong> 二号到三号的距离。</p>
<p><img src="/assets/img/graphicpage/150.png" alt="图形界面 - 水平平均间隔"></p>
</li>
</ul>
<h2 id="代码编辑窗口" tabindex="-1"><a class="header-anchor" href="#代码编辑窗口" aria-hidden="true">#</a> 代码编辑窗口</h2>
<p>在修改 <strong>加载事件</strong>、<strong>屏幕刷新</strong>、<strong>点击事件</strong>、<strong>自定义code</strong> 属性时，会弹出 <strong>代码编辑</strong> 窗口，在最左侧是打开过的窗口导航，中间空白部分进行代码编辑，最右侧有 <strong>疑问</strong> 图标，鼠标移动到上面，会弹出 <strong>快捷键提示</strong> ；<strong>【保存】</strong> 图标按钮： 编写完代码后须保存，否则会丢失代码。</p>
<p><img src="/assets/img/graphicpage/153.png" alt="图形界面 - 编写代码"></p>
<h2 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键" aria-hidden="true">#</a> 快捷键</h2>
<p><strong>代码编辑窗口快捷键</strong>：</p>
<ul>
<li>
<p><strong>Esc</strong>： 退出编辑</p>
</li>
<li>
<p><strong>Ctrl + S</strong>： 保存</p>
</li>
<li>
<p><strong>Ctrl + /</strong>： 添加注释</p>
</li>
<li>
<p><strong>Ctrl + D</strong>： 重复 行或选择</p>
</li>
<li>
<p><strong>Ctrl + F</strong>： 查找</p>
</li>
<li>
<p><strong>Ctrl + R</strong>： 替换</p>
</li>
<li>
<p><strong>Ctrl + G</strong>： 跳转行/列</p>
</li>
<li>
<p><strong>Shift + Ctrl + -</strong>： 全部折叠</p>
</li>
<li>
<p><strong>Shift + Ctrl + =</strong>： 全部展开</p>
</li>
<li>
<p><strong>Ctrl + Alt + L</strong>： 重新格式化代码</p>
</li>
<li>
<p><strong>Alt + /</strong>： 代码提示</p>
</li>
</ul>
<p><strong>图形编辑界面快捷键</strong>：</p>
<ul>
<li>
<p><strong>Ctrl + S</strong>： 保存页面</p>
</li>
<li>
<p><strong>Ctrl + O</strong>： 打开页面</p>
</li>
<li>
<p><strong>Ctrl + Z</strong>： 撤销</p>
</li>
<li>
<p><strong>F5</strong>： 运行页面</p>
</li>
<li>
<p><strong>Ctrl + C</strong>： 鼠标选中控件后，复制控件</p>
</li>
<li>
<p><strong>Ctrl + V</strong>： 粘贴控件</p>
</li>
<li>
<p><strong>Ctrl + X</strong>： 鼠标选中控件后，剪切控件</p>
</li>
</ul>
</div></template>


