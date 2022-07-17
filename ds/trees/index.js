class TreeNode {
  constructor(data) {
    try {
      if (data) {
        this.data = data;
        this.child = [];
      } else {
        let error_txt = "Something Went Wrong!\nPlease provide a valid tree node name";
        throw new Error(error_txt);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

const xiaomi = new TreeNode("xiaomi");
const mi = new TreeNode("mi");

xiaomi.child.push(mi);

const mi7 = new TreeNode("mi 7");
const mi8 = new TreeNode("mi 8");
const mi9 = new TreeNode("mi 9");
const mi9lite = new TreeNode("mi 9 lite");

mi9.child.push(mi9lite);
mi.child.push(mi7, mi8, mi9);

console.log(JSON.stringify(xiaomi));
