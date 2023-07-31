//variables 
const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

//event listener with conditons 
select.addEventListener('change', () => {
    const choice = select.value;
    let days;
    if(choice == 'February'){
        days = 28;
    }
    else if(choice == 'April' || choice == 'June' || choice == 'September' || choice == 'November'){
        days = 30;
     }
     else{
         days = 31;
        }
        calendarGenerator(days, choice);
    } )
    
    function calendarGenerator(days,choice){
        list.innerHTML ='';
        h1.textContent = choice;
        for(let i=1; i<=days; i++){
        const listItem =document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}

calendarGenerator(31, 'January');