import Node from './Node.js';

export default class LinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Adds new node (with key) to end of list
    append(key, value){
        const newNode = new Node(key, value);
        if (this.size === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    //Adds new node (with key) to start of list
    prepend(key, value){
        const newNode = new Node(key, value);
        if (this.size === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    //Removes node from list 
    remove(key){
        let keyIndex = this.find(key);
        let hasKey = (keyIndex !== null);
        if (hasKey){
            let nodeToRemove = this.at(keyIndex);
            if (this.size === 1){
                this.head = null;
                this.tail = null;
            }else if (nodeToRemove === this.head){
                nodeToRemove.nextNode = this.head;
            }else if (nodeToRemove === this.tail){
                this.pop();
            }else{
                let nodeBeforeRemove = this.at(keyIndex - 1);
                let nodeAfterRemove = this.at(keyIndex + 1);
                nodeBeforeRemove.nextNode = nodeAfterRemove;
            }
            this.size--;
        }
        return hasKey; 
    }

    //Returns size (# of nodes)
    size(){
        return this.size;
    }

    //Returns first node
    head(){
        return this.head;
    }

    //Returns last node 
    tail(){
        return this.tail;
    }

    //Returns node at given index
    at(index){
        let currentNode = this.head;
        let counter = 0;
        while (counter < index){
            currentNode = currentNode.nextNode;
            counter++;
        }
        return currentNode;
    }

    //Removes last element from list (assumes list at least 1)
    pop(){
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else if (this.size === 2){
            this.tail = this.head;
        }else{
            let newLastNode = this.at(this.size - 2);
            this.tail = newLastNode;
            newLastNode.nextNode = null;
        }
        this.size--;
    }

    //Returns true if passed key is in list, false otherwise
    contains(key){
        let counter = 0;
        let currentNode = this.head;
        let containskey = (this.head.key === key);
        while (!containskey && counter < this.size()){
            currentNode = currentNode.nextNode;
            if (currentNode.key === key){
                containskey = true;
            }
            counter++;
        }
        return containskey;
    }

    //Returns index of node containing key, or null if not found
    find(key){
        let counter = 0;
        let currentNode = this.head;
        let index = null;
        if (currentNode.key === key){
            index = counter;
        }
        while (index === null && counter < this.size){
            currentNode = currentNode.nextNode;
            counter++;
            if (currentNode.key === key){
                index = counter;
            }
        }
        return index;
    }

    //Represents LinkedList objects as strings (key) -> (key) -. (key) -> null
    toString(){
        let string = "";
        let currentNode = this.head;
        for (let i = 0; i < this.size; i++){
            string += "( " + currentNode.key.toString() + " )" + "->";
            currentNode = currentNode.nextNode;
        }
        return string;
    }
}