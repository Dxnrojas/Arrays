//1

const books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        year: 2000,
        pages: 450
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        year: 2003,
        pages: 320
    },
    {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
        year: 1999,
        pages: 301
    }, 
    {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
        year: 1780,
        pages: 560
    },
    {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
        year: 2016,
        pages: 580
    }
];

const filterBooks = () => {
    let booksFiltered = [];

    books.forEach(element => {
        if (element.year > 2000 && element.pages > 300) {
            booksFiltered.push(element)
        } 
        
    });
    return booksFiltered;
}

console.log(filterBooks(books));

//2.

const tasks = [
    {
        id: 1,
        title: 'Task 1',
        stay: "completed"
    },
    {
        id: 2,
        title: 'Task 2',
        stay: "pending"
    },
    {
        id: 3,
        title: 'Task 3',
        stay: "pending"
    },
    {
        id: 4,
        title: 'Task 4',
        stay: "pending"
    },
    {
        id: 5,
        title: 'Task 5',
        stay: "completed"
    },
    {
        id: 6,
        title: 'Task 6',
        stay: "pending"
    },
    {
        id: 7,
        title: 'Task 7',
        stay: "completed"
    },
    {
        id: 8,
        title: 'Task 8',
        stay: "pending"
    },
]

const filterTasks = (tasks) => {
    completedTasks = [];

    tasks.forEach((e) => {
        if((e.id % 2 !==0)){
            e.stay = "completed"
            completedTasks.push(e);
        }
    })
    return completedTasks
}

filterTasks(tasks)
console.log(filterTasks(tasks))


//3.

const products = [
    {
        name: "Rice",
        price: 400
    },
    {
        name: "Beans",
        price: 1000
    },
    {
        name: "Ice Cream",
        price: 200
    },
    {
        name: "Chocolate",
        price: 700
    },
    {
        name: "Cleaner",
        price: 800
    },
    {
        name: "Grapes",
        price: 400
    }
];

const filterProducts = (products) => {
    let maxNumber = products[0];

    products.forEach((product) => {
        if (product.price > maxNumber.price) {
            maxNumber = product
        }
    })
    return maxNumber
};

filterProducts(products)
console.log(filterProducts(products));

//4.

const toDoList = [
    {
        id: 1,
        description: "Task 1",
    },
    {
        id: 2,
        description: "Task 2",
    },
    {
        id: 3,
        description: "Task 3",
    },
    {
        id: 4,
        description: "Task 4",
    },
    {
        id: 5,
        description: "Task 5",
    },
    {
        id: 6,
        description: "Task 6",
    },
    {
        id: 7,
        description: "Task 7",
    },
    {
        id: 8,
        description: "Task 8",
    },
];


//5.

const studentsGrades = [
    {
        name: "John",
        grade: 5
    },
    {
        name: "Jane",
        grade: 7
    },
    {
        name: "Bob",
        grade: 6
    },
    {
        name: "Alice",
        grade: 8
    },
    {
        name: "Charlie",
        grade: 3
    },
    {
        name: "David",
        grade: 9
    }
];

const calculateMean = (studentsGrades) => {
    let mean = 0;

    studentsGrades.forEach((student) => {
        mean += student.grade
    });
     
    mean /= studentsGrades.length;

    return mean;
}
console.log(calculateMean(studentsGrades));

//6.

const fruits = [
    {
        name: "apple",
        price: 1000
    },
    {
        name: "orange",
        price: 50  
    },
    {
        name: "grape",
        price: 200
    },
    {
        name: "banana",
        price: 300
    },
    {
        name: "kiwi",
        price: 900
    },
    {
        name: "strawberry",
        price: 150
    },
    {
        name: "watermelon",
        price: 250
    },
    {
        name: "grape",
        price: 200
    },
    {
        name: "kiwi",
        price: 900
    },
    {
        name: "peach",
        price: 100
    },
    {
        name: "watermelon",
        price: 250
    },
    {
        name: "cherry",
        price: 100
    },
    {
        name: "plum",
        price: 100
    },
    {
        name: "apricot",
        price: 100
    }
]

const createFruitsObject = (fruits) => {
    let fruitsObject = {};

    fruits.forEach((fruit) => {
        if (!fruitsObject[fruit.name]) {
            fruitsObject[fruit.name] = 1
        } else {
            fruitsObject[fruit.name] ++
        }
    })
    return fruitsObject

};

createFruitsObject(fruits);
console.log(createFruitsObject(fruits));

//7.

const transactions = [
    {
        category: 'Food',
        amount: 100
    },
    {
        category: 'Cook',
        amount: 20000
    },
    {
        category: 'cars',
        amount: 450000
    },
    {
        category: 'Technology devices',
        amount: 10000
    },
    {
        category: 'Food',
        amount: 420
    },
    {
        category: 'Cook',
        amount: 10000
    },
    {
        category: 'cars',
        amount: 70000
    },
    {
        category: 'Technology devices',
        amount: 40000
    }

]

const createTransactionsObject = (transactions) => {
    let transactionsObject = {};

    transactions.forEach((transaction) => {
        if (!transactionsObject[transaction.category]) {
            transactionsObject[transaction.category] = transaction.amount
        } else {
            transactionsObject[transaction.category] += transaction.amount
        }
    })
    return transactionsObject
};

createTransactionsObject(transactions);
console.log(createTransactionsObject(transactions));
    
