const cualEsMiEdad = (nombre, apellido, edad) => `Mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;
console.log(cualEsMiEdad('Pedro', 'Infante', '40'));

const sumaCubos = (num1, num2, num3) => Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3);
console.log(sumaCubos(2, 2, 2));

const sumaNum = (num1, num2) => num1 + num2;
console.log(sumaNum(2, 2));

const pontNum = (num, potencia) => Math.pow(num, potencia);
console.log(pontNum(2, 2));

const areaTriang = (base, altura) => (base * altura) / 2;
console.log(areaTriang(10, 14));

const calculator = (num1, operator, num2) => {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else if (operator === 'x') {
        return num1 * num2;
    } else if (operator === '%') {
        return num1 % num2;
    } else {
        return 'Ingrese un parameto valido'
    }
}
console.log(calculator(2, '/', 2));

const myType = (dato) => typeof dato;
console.log(myType(4));

const sumando = (...manyMoreArgs) => {
    return manyMoreArgs.reduce((previus, current) => {
        return previus + current;
    });

}
console.log(sumando(1, 2, 3, 4, 5, 6));

const filterString = (words = []) => {
    return words.filter(word => typeof word !== 'number')
}
console.log(filterString(['alex', 2, 3]));

const minMax = (nums = []) => {
    let min = nums[0];
    let max = nums[0];
    nums.forEach(num => {
        if (min > num) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    })
    return `Numero minimo es ${min} y el maximo es ${max}`
}
console.log(minMax([1, 2, 3, 4, 5, 6]));

const numtelf = (nums = []) => {
    let cadena = '';
    nums.forEach(num => {
        if (num >= 0 && num <= 9) {
            cadena += num;
        }
    });
    return cadena;
}
console.log(numtelf([9, 5, 4, 7, 8, 1, 4, 9, 5]));

const maxMatriz = (arrayNums = []) => {
    let max = 0;
    let newArray = [];
    for (let i = 0; i < arrayNums.length; i++) {
        for (let j = 0; j < arrayNums[i].length; j++) {
            if (arrayNums[i][j] > max) {
                max = arrayNums[i][j];
            }
        }
        newArray.push(max);
        max = 0;
    }
    return newArray;
}
console.log(maxMatriz([[1, 2, 3], [2, 3, 4], [5, 6, 7]]));

const firstLastIndex = (word = '', index = '') => {
    let knowIndex = [];
    for (let i = 0; i < word.length; i++) {
        if (index === word[i]) {
            knowIndex.push(i);
        }
    }
    return knowIndex;
}
console.log(firstLastIndex('hello', 'l'));

const toArray = (names) => {
    let newArray = [];
    newArray = Object.entries(names)
    return newArray;
}
const nombres = {
    1: 'Alex',
    2: 'Pedro'
}
console.log(toArray(nombres))

const getBudgets = (personas = Object) => {
    let total = 0;
    personas.forEach(persona => {
        total += persona.budget;
    });
    return total;
}

console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]));

const getStudentNames = (students => {
    let newArray = [];
    students.forEach(student => {
        newArray.push(student.name);
    });
    return newArray;
})

console.log(getStudentNames([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
]))

const objectToArray = (arrays => {
    let newArray = [];
    newArray = Object.entries(arrays);
    return newArray;
})
console.log(objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
}))

const squareSum = (num => {
    let elevado = [];
    let total = [];
    for (let i = 1; i <= num; i++) {
        elevado.push(Math.pow(i, 2));
    }
    total = elevado.reduce((acumulator, current) => {
        return acumulator + current;
    })
    return total;
})
console.log(squareSum(3));

const multiplyByLength = (nums = []) => {
    let newArray = [];
    nums.forEach(num => {
        newArray.push(num * nums.length);
    });
    return newArray;
}
console.log(multiplyByLength([2, 3, 1, 0]));

const countdown = (nums) => {
    let newArray = [];
    for (let i = nums; i >= 0; i--) {
        newArray.push(i);
    }
    return newArray;
}
console.log(countdown(5));

const diffMaxMin = (nums) => {
    let min = nums[0];
    let max = nums[0];
    nums.forEach(num => {
        if (min < num) {
            min = num;
        }
        if (num < max) {
            max = num;
        }
    });
    return `${min - max}`;
}
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));

const filterList = (nums = []) => {
    return nums.filter(num => typeof num === 'number')
}
console.log(filterList([1, 2, 3, "x", "y", 10]));

const repeat = (num, repeat) => {
    let newArray = [];
    for (let i = 1; i <= repeat; i++) {
        newArray.push(num);
    }
    return newArray;
}
console.log(repeat(13, 5));

function vreplace(str = '', vocal = '') {
    let result = str.replace(/[aeiou]/g, vocal);
    return result;
}
console.log(vreplace("apples and bananas", 'e'));

const findNemo = (str = '') => {
    index = str.indexOf('Nemo');
    let count = 1;
    for (let i = 0; i <= index; i++) {
        if (str[i] === " ") {
            count++;
        }

    }
    return `I found Nemo at ${count}`
}
console.log(findNemo("I am finding Nemo !"));

const capLast = (str = '') => {
    return str.slice(0, str.length - 1) + str.charAt(str.length - 1).toUpperCase();
}

console.log(capLast('Hola'));
