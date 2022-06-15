/*
 * @Author: zhangyang
 * @Date: 2022-06-15 10:21:31
 * @LastEditTime: 2022-06-15 15:50:41
 * @Description: 
 */
import { readdirSync, readFileSync, statSync,  } from 'fs';

let total: number;

export type DocTree = {
  label: string;
  key: string;
  children?: DocTree[];
  path?: string;
};

const getTree = (prefix_path = 'content') => {
  let t: DocTree[] = [];
  for (const p of readdirSync(prefix_path)) {
    const path = `${prefix_path}/${p}`;
    if (isDir(path)) {
      t.push({
        label: p,
        key: path,
        children: getTree(path)
      });
    } else if (isFile(path)) {
      const str = readFileSync(path, { encoding: 'utf-8' }).toString();
      let title = str.match(/(?<=title: )(.*)(?=\n)/img)?.[0] ?? p.slice(0, -3);
      if (title.length > 12) {
        title = title.slice(0, 12) + '...';
      }
      t.push({
        label: title,
        key: path.slice(7, -3),
        path: path.slice(7, -3).toLocaleLowerCase()
      });
      total++;
    }
  }
  return t;
};

const isDir = (p: string) => statSync(p).isDirectory();
const isFile = (p: string) => statSync(p).isFile();

export default () => {
  total = 0;
  const tree: DocTree[] = getTree();
  return {
    tree,
    total
  };
}