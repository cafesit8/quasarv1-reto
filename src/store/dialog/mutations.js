export function someMutation (/* state */) {
}

export function isToogleDialog (state) {
  state.isOpen = !state.isOpen
}

export function setInfo (state, info) {
  state.info = info
}

export function isToogleDrawer (state) {
  state.drawerOpen = !state.drawerOpen
}
