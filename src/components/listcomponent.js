



class ListComponent{

    createItem(title){
        const item = document.createElement('li')
        item.innerText=title

        return item
    }

    render(){
        const element=document.createElement('ul')
        element.appendChild(this.createItem("ایتم 1"))
        element.appendChild(this.createItem("ایتم 2"))
        element.appendChild(this.createItem("ایتم 3")) 

        return element
    }
}


export default new ListComponent();