import './styles/style-image.scss'
import image1 from './images/download.png'


class ImageComponent{

    createImage(){
        const image=document.createElement('img')
        image.alt="my image"
        image.classList.add("image-Box")
        image.src=image1

        return image
    }

    createTagText(){
        const p=document.createElement('p')
        p.innerText="سلام دنیا"
        
        return p
    }

    render(){
        const element=document.createElement('div')
        element.classList.add('imageBox')
        
        element.appendChild(this.createImage())
        element.appendChild(this.createTagText())
        
        return element
    }
}

export default new ImageComponent()