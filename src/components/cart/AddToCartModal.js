import Button from '@/components/elements/Button'
import Modal from '@/components/elements/Modal'
import Image from '@/next/Image'

import Link from 'next/link'


const AddToCartModal = ({ modal, close, product }) => {
    
    return (
        <Modal title="Modal" open={modal} close={close} className="add-to-cart-modal" shouldCloseOnOutsideClick>
            <h3>Item was added to your cart</h3>
            {
                product && (
                    <div className="add-to-cart-modal__product">
                        <div className="add-to-cart-modal__product-image">
                            <div className="add-to-cart-modal__product-image--inner">
                            <Image
                                src={product.image}
                                layout="fill"
                                objectFit="contain"
                                priority
                            />
                            </div>
                        </div>
                        <div className="add-to-cart-modal__product-info">
                            <p className='add-to-cart-modal__product-name'>{product.title}</p>
                            <p className='add-to-cart-modal__product-price'>${Number(product.price).toFixed(2)}</p>
                        </div>
                    </div>
                )
            }
            <div className="add-to-cart-modal__btns mt-5">
                <Link href="/cart">
                    <Button onClick={close} variant='secondary' className="me-2 add-to-cart-modal__btn">View Cart</Button>
                </Link>
                
                <Button className='add-to-cart-modal__btn' onClick={close} style={{ marginLeft: "auto" }} variant='dark-outline' outline>Continue Shopping</Button>
            </div>
        </Modal>
    )
}

export default AddToCartModal;