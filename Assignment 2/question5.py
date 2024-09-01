class BTreeNode:
    def __init__(self, t, leaf=False):
        self.t = t  # Minimum degree (defines the range for the number of keys)
        self.leaf = leaf  # True if leaf node, else False
        self.keys = []  # Array of keys
        self.children = []  # Array of child pointers

    def traverse_pre_order(self):
        # Pre-order traversal using list comprehension
        print(" ".join(str(key) for key in self.keys), end=" ")
        if not self.leaf:
            for child in self.children:
                child.traverse_pre_order()

    def split_child(self, i, y):
        t = self.t
        z = BTreeNode(y.t, y.leaf)
        self.children.insert(i + 1, z)
        self.keys.insert(i, y.keys[t - 1])

        # Using slicing for list operations
        z.keys = y.keys[t:]
        y.keys = y.keys[: t - 1]

        if not y.leaf:
            z.children = y.children[t:]
            y.children = y.children[:t]

    def insert_non_full(self, k):
        i = len(self.keys) - 1
        if self.leaf:
            self.keys.append(k)  # Simplify by appending and sorting
            self.keys.sort()
        else:
            while i >= 0 and self.keys[i] > k:
                i -= 1
            i += 1
            if len(self.children[i].keys) == 2 * self.t - 1:
                self.split_child(i, self.children[i])
                if k > self.keys[i]:
                    i += 1
            self.children[i].insert_non_full(k)

    def remove(self, k):
        idx = self.find_key(k)
        if idx < len(self.keys) and self.keys[idx] == k:
            if self.leaf:
                self.keys.pop(idx)
            else:
                self.remove_from_non_leaf(idx)
        else:
            if self.leaf:
                return
            flag = idx == len(self.keys)
            if len(self.children[idx].keys) < self.t:
                self.fill(idx)
            if flag and idx > len(self.keys):
                self.children[idx - 1].remove(k)
            else:
                self.children[idx].remove(k)

    def find_key(self, k):
        return next((i for i, key in enumerate(self.keys) if key >= k), len(self.keys))

    def remove_from_non_leaf(self, idx):
        k = self.keys[idx]
        if len(self.children[idx].keys) >= self.t:
            pred = self.get_pred(idx)
            self.keys[idx] = pred
            self.children[idx].remove(pred)
        elif len(self.children[idx + 1].keys) >= self.t:
            successor = self.get_successor(idx)
            self.keys[idx] = successor
            self.children[idx + 1].remove(successor)
        else:
            self.merge(idx)
            self.children[idx].remove(k)

    def get_pred(self, idx):
        current = self.children[idx]
        while not current.leaf:
            current = current.children[-1]
        return current.keys[-1]

    def get_successor(self, idx):
        current = self.children[idx + 1]
        while not current.leaf:
            current = current.children[0]
        return current.keys[0]

    def fill(self, idx):
        if idx != 0 and len(self.children[idx - 1].keys) >= self.t:
            self.borrow_from_prev(idx)
        elif idx != len(self.keys) and len(self.children[idx + 1].keys) >= self.t:
            self.borrow_from_next(idx)
        else:
            if idx != len(self.keys):
                self.merge(idx)
            else:
                self.merge(idx - 1)

    def borrow_from_prev(self, idx):
        child = self.children[idx]
        sibling = self.children[idx - 1]
        child.keys.insert(0, self.keys[idx - 1])
        if not child.leaf:
            child.children.insert(0, sibling.children.pop())
        self.keys[idx - 1] = sibling.keys.pop()

    def borrow_from_next(self, idx):
        child = self.children[idx]
        sibling = self.children[idx + 1]
        child.keys.append(self.keys[idx])
        if not child.leaf:
            child.children.append(sibling.children.pop(0))
        self.keys[idx] = sibling.keys.pop(0)

    def merge(self, idx):
        child = self.children[idx]
        sibling = self.children[idx + 1]
        t = self.t
        child.keys.append(self.keys.pop(idx))
        child.keys.extend(sibling.keys)
        if not child.leaf:
            child.children.extend(sibling.children)
        self.children.pop(idx + 1)


class BTree:
    def __init__(self, t):
        self.root = None
        self.t = t

    def traverse_pre_order(self):
        if self.root is not None:
            self.root.traverse_pre_order()
        else:
            print("None")

    def insert(self, k):
        if self.root is None:
            self.root = BTreeNode(self.t, True)
            self.root.keys.append(k)
        else:
            if len(self.root.keys) == 2 * self.t - 1:
                s = BTreeNode(self.t, False)
                s.children.append(self.root)
                s.split_child(0, self.root)
                i = 0
                if s.keys[0] < k:
                    i += 1
                s.children[i].insert_non_full(k)
                self.root = s
            else:
                self.root.insert_non_full(k)

    def remove(self, k):
        if not self.root:
            return
        self.root.remove(k)
        if len(self.root.keys) == 0:
            if not self.root.leaf:
                self.root = self.root.children[0]
            else:
                self.root = None


def main():
    t = int(input())
    A = list(map(int, input().strip("[]").split(",")))
    B = list(map(int, input().strip("[]").split(",")))

    btree = BTree(t)

    for val in A:
        btree.insert(val)

    for val in B:
        btree.remove(val)

    btree.traverse_pre_order()
    print()


main()
