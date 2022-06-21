import {store} from 'react-notifications-component'

const popup = (title,message,type)=>{
    store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
      pauseOnHover: true
    },
    showIcon:true
  });
}

export default popup