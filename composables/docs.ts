/*
 * @Author: zhangyang
 * @Date: 2022-06-15 10:05:41
 * @LastEditTime: 2022-06-15 11:05:52
 * @Description:
 */
export async function useDocs() {
  const docs = await queryContent('la').find()
  return docs
}
