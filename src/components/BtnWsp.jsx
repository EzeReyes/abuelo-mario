import { HashLink } from 'react-router-hash-link';

const BtnWsp = () => {
    return (
        <HashLink
        to="https://wa.me/5492235950860"
        title='whatsapp'
        target="_blank"
        className="fixed bottom-5 right-5 w-16 h-16 rounded-full shadow-lg z-50 flex items-center justify-center"
      >
        <img src="/images/icons8-whatsapp.svg" alt="WhatsApp" className="w-auto h-auto rounded-full" />
      </HashLink>
    )
}

export default BtnWsp;