class TaskManagement {
  constructor() {
    this.size = 1;
    this.n = 0;
    this.arr = this.make_arry(this.size);
  }
  make_arry(size) {
    return new Array(size);
  }
  append(item) {
    this.arr[this.n] = item;
  }
}

const arr = new TaskManagement();
arr.append({
  id: 1,
  title: "Complete project proposal",
  priority: "High",
  completed: false,
});
console.log(arr);
