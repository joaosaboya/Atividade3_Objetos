let lolChampions = ['Jaxx', 'Darius', 'Gravez', 'Rammus', 'Lulu'];
console.log(lolChampions);

lolChampions.unshift('Ziggs');
console.log(lolChampions);

lolChampions.pop();
console.log(lolChampions);

lolChampions.push('Jarvan', 'Draven');
console.log(lolChampions);

let numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers.sort());

let sobreMim = {
    nome: 'João Saboya',
    idade: 22,
    altura: 1.68 
}
console.log(sobreMim);

sobreMim.telefone = 965243566
console.log(sobreMim);

delete sobreMim.altura;
console.log(sobreMim);

let cadastro = [
    {
        nome : "Cadore" ,
        idade : 18 ,
        telefone : 163854812 ,
        amigos : ['Robson', 'Mauricio' ,'Sergio' ,'Olaf'] ,
    },
    {
        nome : "Salvatore" ,
        idade : 25 ,
        telefone : 2141354261 ,
        amigos : ['Ricardo', 'Douglas', 'Rebeca', 'Theo']
    },
    {
        nome : "Rasputin" ,
        idade : 99 ,
        telefone : 671348275481 ,
        amigos : ['StoliShinaia', 'Putin', 'Gorbatchov', 'Mikhail' ] 
    },
    {
        nome : "Luffy" ,
       idade : 22 ,
        telefone : 1237891247 ,
        amigos : ['Zoro', 'Sanji', 'Usopp' ,'Nami']
    },
    {
        nome : "João Pedro Belo" ,
        idade : 26 ,
        telefone : 10101010101 ,
        amigos : ['Joy', 'Kaka', 'Bredom', 'Dandara']
    }
]
console.log(cadastro[0].amigos[2])
console.log(cadastro[1].amigos[3])
console.log(cadastro[2].amigos[1])
console.log(cadastro[3].amigos[2])
console.log(cadastro[4].amigos[0])