export const parseDate = (model: any) => {
  return model.createdAt
    .toString()
    .substring(0, model.createdAt.toString().indexOf('T'))
}
