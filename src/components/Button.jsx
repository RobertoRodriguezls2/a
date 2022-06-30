import './Button.css'

export default function Button({ btnmsg, url }) {
    return (
        <>
           
                <a tabIndex="0" href={url} className='collection' style={{ '--clr': '#1e9bff' }}><span>{btnmsg}</span><i></i></a>
 

        </>
    )
}