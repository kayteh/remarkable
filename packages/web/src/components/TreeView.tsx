export type Tree = {
  title: string;
  children: {
    title: string;
    url: string;
  }[];
};

type TreeViewProps = {
  tree: Tree;
};
