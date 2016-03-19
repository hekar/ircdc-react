export const flex = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  alignContent: 'stretch'
};

export const vflex = Object.assign({}, flex, {
  flexDirection: 'column'
});
