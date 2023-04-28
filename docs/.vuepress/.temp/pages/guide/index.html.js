export const data = JSON.parse("{\"key\":\"v-fffb8e28\",\"path\":\"/guide/\",\"title\":\"导航首页\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"二级标题\",\"slug\":\"二级标题\",\"link\":\"#二级标题\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
