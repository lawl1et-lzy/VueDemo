export const base = {
  hasList: (arr: any): boolean => {
    return arr && Array.isArray(arr) && arr.length > 0
  }
}