package service;

// Node class and constructor to create nodes
class Node{
    int data;
    Node next;

    Node(int data){
        this.data = data;
    }
}

// LinkedList class to create actual functionality of the node class
public class LinkedList {
    Node head;

    LinkedList() {
        this.head = null;
    }

    public void insertElement(int data) {
        // Traverse the linked list and add to the end
        Node node = new Node(data);

        if (this.head == null) {
            this.head = node;
        } else {
            Node curr = this.head;
            while (curr.next != null) {
                curr = curr.next;
            }
            curr.next = node;
        }
    }

    public void print() {
        // While the linked list isnt empty, add to the tail
        Node curr = this.head;

        if (head == null) {
            System.out.println("List is empty");
        }
        while (curr != null) {
            System.out.println(curr.data);
            curr = curr.next;
        }
    }
}