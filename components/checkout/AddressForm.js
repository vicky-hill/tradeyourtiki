import { AddressElement } from '@stripe/react-stripe-js'

const AddressForm = () => {
    return (
        <form className='mb-20'>
            <h3 className='text-2xl mb-7 font-medium'>Shipping</h3>
            <AddressElement options={{ mode: 'shipping' }} />
        </form>
    );
};

export default AddressForm;