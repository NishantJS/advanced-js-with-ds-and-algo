// const hasPathSum = (root, targetSum) => {
//   if (!root) return false;
//   if (!root.left && !root.right) return root.val === targetSum;
//   return (
//     hasPathSum(root.left, targetSum - root.val) ||
//     hasPathSum(root.right, targetSum - root.val)
//   );
// };

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const checkPathSum = (root, targetSum) => {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === targetSum;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

const createTreeFromArray = (arr) => {
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      node.left = arr[i] ? new TreeNode(arr[i]) : null;
      node.right = arr[i + 1] ? new TreeNode(arr[i + 1]) : null;
      queue.push(node.left);
      queue.push(node.right);
      i += 2;
    }
  }
  return root;
};

const hasPathSum = (arr, targetSum) => {
  const root = createTreeFromArray(arr);
  console.log(root);
  return checkPathSum(root, targetSum);
};

console.log(
  hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22)
);
