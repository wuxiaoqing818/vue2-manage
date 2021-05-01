import vue from 'vue'

const requireComponent = require.context( // webpack的api，一个函数方法，匹配文件
  '@/components/common', // 查看当前目录下的文件(查找需要文件的相对路径)
  false, // 不查看子文件
  /.vue$/ // 匹配方式正则表达式，只查看后缀为.vue的文件

)
console.log(requireComponent)
// 循环获取到的文件，可在循环时处理文件名
requireComponent.keys().forEach((fileName) => {
  console.log(1)

  // 获取组件配置(组件模板)
  const componentConfig = requireComponent(fileName)
  // 将被注册的组件名字,对获取的组件文件名进行处理
  const componentName = fileName
    .replace(/^\.\/_/, '')
    .replace(/\.\w+$/, '')
    .split('./')
    .join('')

  console.log(componentName, '基础组件文件获取测试')

  // 将组件在循环中注册到全局，
  vue.component(componentName, // 依据文件名处理好的，将要被注册到全局的组件名
    componentConfig.default || componentConfig)
})
