// Importamos el HOC withPhotos
import { withPhotos } from '../hoc/withPhotos'
// Importamos el componente ListOfPhotoCardsComponent
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards/ListOfPhotoCards'
// Exportamos la constante como componente nombrado con el HOC con su respectivo componente específico
export const ContainerOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
