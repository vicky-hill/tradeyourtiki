import Button from '@/components/elements/Button'
import Modal from '@/components/elements/Modal'
import Image from '@/next/Image'
import { price } from '@/utils/price'

import Link from 'next/link'


const AddToCartModal = ({ modal, close, product }) => {

    return (
        <Modal title="Modal" open={modal} close={close} className="add-to-cart-modal" shouldCloseOnOutsideClick>
            <h3>Item was added to your cart</h3>
            {
                product && (
                    <div className="add-to-cart-modal__product">
                        <div className="add-to-cart-modal__product-image">
                            <Image
                                src={product.image}
                                className="add-to-cart-modal__product-image--inner"
                                sizes="4rem"
                            />
                        </div>
                        <div className="add-to-cart-modal__product-info">
                            <p className='add-to-cart-modal__product-name'>{product.name}</p>
                            <p className='add-to-cart-modal__product-price'>{price(product.price)}</p>
                        </div>
                    </div>
                )
            }
            <div className="add-to-cart-modal__btns mt-10">
                <Link href="/cart">
                    <Button onClick={close} className="me-2 add-to-cart-modal__btn">View Cart</Button>
                </Link>

                <Button className='add-to-cart-modal__btn' onClick={close} outline>Continue Shopping</Button>
            </div>
        </Modal>
    )
}

export default AddToCartModal;