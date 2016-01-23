// Write code to remove dups from an unsorted linked list

function List () {
  this.head = null;
  this.tail = null;
  var size = 0;

  this.createNode = function (value) {
    return {
      value: value,
      next: null
    };
  };

  this.addNode = function (value) {
    var newNode = this.createNode(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    size++;
    this.tail = newNode;
  };

  this.removeDups = function () {
    var prev = null;
    var curr = this.head;
    var nodes = {};
    while (curr) {
      if (!nodes[curr.value]) {
        nodes[curr.value] = true;
      } else {
        prev.next = curr.next || null;
        curr = prev;
        size--;
      }
      prev = curr;
      curr = curr.next;
    }
  };

  this.getSize = function () {
    return size;
  };
}
