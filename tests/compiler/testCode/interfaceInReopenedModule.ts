module m {
}

// Bug 17515: In second instance of same module, exported interface is not visible
module m {
    interface f {}
    export class n { 
        private n: f;
    }
}
