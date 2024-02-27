type cacheNode = {
  val: number;
  key: number;
  next: cacheNode | null;
  prev: cacheNode | null;
};

class CacheNode implements cacheNode {
  public val: number;
  public key: number;
  public next: cacheNode | null;
  public prev: cacheNode | null;

  constructor(
    val: number,
    key: number,
    next: cacheNode | null = null,
    prev: cacheNode | null = null
  ) {
    this.val = val;
    this.key = key;
    this.next = next;
    this.prev = prev;
  }
}

class LRUCache {
  private capacity: number;
  private data: Map<number, cacheNode>;
  private head: cacheNode;
  private tail: cacheNode;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.data = new Map();

    // intialize with dummy values
    this.head = new CacheNode(0, -1);
    this.tail = new CacheNode(0, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  remove(node: cacheNode) {
    // remove ths node from the chain
    const { prev, next } = node;
    if (prev) {
      prev.next = next;
    }

    if (next) {
      next.prev = prev;
    }
  }

  insert(node: cacheNode) {
    // inset to the tail
    if (this.tail.prev) {
      this.tail.prev.next = node;
    }
    node.next = this.tail;
    node.prev = this.tail.prev;

    this.tail.prev = node;
  }

  get(key: number): number {
    if (this.data.has(key)) {
      const node = this.data.get(key)!;
      this.remove(node);
      this.insert(node);
      return node.val;
    }

    return -1;
  }

  put(key: number, value: number): void {
    if (this.data.has(key)) {
      this.remove(this.data.get(key)!);
    }

    const node = new CacheNode(value, key);
    this.data.set(key, node);
    this.insert(node);

    if (this.data.size > this.capacity) {
      this.evit();
    }
  }

  evit(): void {
    const leastUsedNode = this.head.next;
    if (leastUsedNode) {
      this.data.delete(leastUsedNode.key);
      this.remove(leastUsedNode);
    }
  }
}

const cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);
cache.put(3, 3);
cache.put(4, 4);
console.log(cache.get(1));
