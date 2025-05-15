import LinkedList from './LinkedList.js';
import Node from './Node.js';

export default class HashMap{

    constructor(capacity, loadFactor){
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = Array.from({length: capacity}, () => new LinkedList());
        this.length = 0;
    }

    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    } 

    set(key, value) {
        let hashCode = this.hash(key);
        let bucket = hashCode % this.capacity; // correct bucket
        let keyIndex = this.buckets[bucket].find(key); // index within linked list of key (null if NA)
        if (keyIndex === null){
            this.buckets[bucket].append(key, value);
            this.length++;
        }else{
            let matchingKeyNode = this.buckets[bucket].at(keyIndex);
            matchingKeyNode.value = value;
        }
    }

    get(key){
        let hashCode = this.hash(key);
        let bucket = hashCode % this.capacity; // correct bucket
        let keyIndex = this.buckets[bucket].find(key); // index within linked list of key (null if NA)
        let value = null;
        if (keyIndex !== null){
            value = this.buckets[bucket].at(keyIndex).value;
        }
        return value;
    }

    has(key){
        return this.get(key) !== null;
    }

    remove(key){
        let hashCode = this.hash(key);
        let bucket = hashCode % this.capacity; 
        let linkedList = this.buckets[bucket];
        let hasKey = linkedList.remove(key);
        if (hasKey){
            this.length--;
        }
        return hasKey;
    }

    length(){
        return this.length;
    }






}