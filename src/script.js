import ImageComponent from './components/imageComponent'
import Listcomponent from './components/listcomponent'

 

const app=document.querySelector("#app")
app.appendChild(ImageComponent.render())
app.appendChild(Listcomponent.render())
