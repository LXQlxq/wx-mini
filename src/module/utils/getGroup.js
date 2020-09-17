class GetGroup {
  group () {
    let group = window.sessionStorage.getItem('group')
    group = JSON.parse(group)
    // console.log('group', group)
    let menuId = window.sessionStorage.getItem('menuId')
    menuId = Number(menuId)
    let data = ''
    for (var i = 0; i < group.length; i++) {
      if (group[i].id === menuId) {
        // console.log('group.modules[i]', group.modules[i])
        data = group[i]
      }
    }
    return data
  }
}
export {GetGroup}
