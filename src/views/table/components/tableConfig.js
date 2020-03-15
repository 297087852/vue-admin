export default function (vm) {
  // eslint-disable-next-line
  const h = vm.$createElement

  return [
    {
      label: '选项1',
      prop: 'one'
    },
    {
      label: '选项2',
      prop: 'two'
    },
    {
      label: '选项3',
      prop: 'three',
      render: scope => {
        return (<div>1223</div>)
      }
    }
  ]
}
